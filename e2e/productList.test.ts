import {by, device, expect, element} from 'detox';

describe('Example UI Test Fist', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should list 20 products visible', async () => {
    await element(by.text('Go to product list')).tap();
    await expect(element(by.text(/product 1/i))).toBeVisible();

    const list = await element(by.id('productList'));

    list.scrollTo('bottom');
  });

  it('should fail when checking for a non-existent product', async () => {
    await element(by.text('Go to product list')).tap();

    await expect(element(by.text(/product 99/i))).toBeVisible();
  });
});
