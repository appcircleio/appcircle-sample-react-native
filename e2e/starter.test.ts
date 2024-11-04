import {by, device, expect, element} from 'detox';

describe('Example UI Test Second', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Appcircle.io title', async () => {
    await expect(element(by.text(/appcircle.io/i))).toBeVisible();
  });
});
