import {by, device, expect, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Appcircle.io title', async () => {
    await expect(element(by.text(/appcircle/i))).toBeVisible();
  });
});
