import {Platform} from 'react-native';
import {getACToken, getAppVersions} from '../networking/api';
import Environments from '../Environment';

interface AppVersion {
  id: string;
  version: string;
  publishType: number;
}

export const checkForUpdate = async (params: {
  iOSProfileId: string;
  androidProfileId: string;
  currentVersion: string;
  userEmail: string;
}): Promise<{updateURL: string; version: string} | undefined> => {
  try {
    const {access_token} = await getACToken(
      Platform.OS === 'ios' ? params.iOSProfileId : params.androidProfileId,
    );

    const appVersions = await getAppVersions(access_token);

    const latestVersion = getLatestVersion(params.currentVersion, appVersions);
    if (latestVersion) {
      const downloadUrl = createDownloadUrl(
        latestVersion.id,
        access_token,
        params.userEmail,
      );

      if (!downloadUrl) {
        console.error('Failed to create download URL');
        return undefined;
      }

      return {
        updateURL: downloadUrl,
        version: latestVersion.version,
      };
    }
  } catch (error) {
    console.log(error.response);
    console.error('Failed to determine if an update is available', error);
  }
};

const createDownloadUrl = (
  availableVersionId: string,
  accessToken: string,
  email: string,
): string | null => {
  const baseUrl = `${Environments.STORE_URL}/api/app-versions/${availableVersionId}/download-version/${accessToken}/user/${email}`;
  const downloadUrl = `itms-services://?action=download-manifest&url=${baseUrl}`;

  try {
    return Platform.OS === 'ios' ? downloadUrl : baseUrl;
  } catch {
    console.error('Latest Version URL could not be created');
    return null;
  }
};

/*
    You can implement your custom update check mechanism within this function.
    Currently, we convert the version to an integer and compare it with the 'CFBundleShortVersionString'.
    You may want to check other datas about the app version to write the update control mechanism please check
    /v2/profiles/{profileId}/app-versions at https://api.appcircle.io/openapi/index.html?urls.primaryName=store
*/
const getLatestVersion = (
  currentVersion: string,
  appVersions: AppVersion[],
): AppVersion | undefined => {
  let latestAppVersion: AppVersion | undefined;
  // Helper function to convert version string into an array of integers
  const versionComponents = (version: string): number[] => {
    return version
      .split('.')
      .map(Number)
      .filter(num => !isNaN(num));
  };

  const currentComponents = versionComponents(currentVersion);

  appVersions.forEach(app => {
    // Convert versions to arrays of integers
    const latestComponents = versionComponents(app.version);

    // Compare versions component by component
    for (
      let i = 0;
      i < Math.min(currentComponents.length, latestComponents.length);
      i++
    ) {
      const current = currentComponents[i];
      const latest = latestComponents[i];

      // You can control to update None, Beta or Live publish types you have selected on Appcircle Enterprise Store
      if (latest > current && app.publishType !== 0) {
        latestAppVersion = app;
      }
    }
  });

  return latestAppVersion;
};
