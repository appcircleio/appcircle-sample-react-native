import axios from 'axios';

const AC_AUTH_HOSTNAME = 'https://auth.appcircle.io';

export const getACToken = async (options: {pat: string}) => {
  const endpointURL = `${AC_AUTH_HOSTNAME}/auth/v2/token`;
  console.log(options.pat);
  const response = await axios.post(
    endpointURL,
    `pat=${encodeURIComponent(options.pat)}&scope=openid email profile`,
    {
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return response.data;
};

export const getAppVersions = async (
  accessToken: string,
  profileId: string,
) => {
  const url = `https://api.appcircle.io/store/v2/profiles/${profileId}/app-versions`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to get app versions:', error);
  }
};
