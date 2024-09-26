import {by, device, expect, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should list 20 products visible', async () => {
    await element(by.text('Show Products')).tap();
    await expect(element(by.text(/product 1/i))).toBeVisible();
    await element(by.text('Show Products')).tap();
    await expect(element(by.text(/product 1/i))).not.toBeVisible();
  });
});
