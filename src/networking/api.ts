import axios from 'axios';
import Environment from '../Environment';
import {Platform} from 'react-native';

export const getACToken = async (profileId: string) => {
  const endpointURL = `${Environment.STORE_URL}/api/auth/token`;

  const response = await axios.post(
    endpointURL,
    {
      ProfileId: profileId,
      Secret:
        Platform.OS === 'ios'
          ? Environment.IOS_STORE_SECRET
          : Environment.ANDROID_STORE_SECRET,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    },
  );

  return response.data;
};

export const getAppVersions = async (accessToken: string) => {
  const url = `${Environment.STORE_URL}/api/app-versions`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Failed to get app versions:', error);
  }
};
