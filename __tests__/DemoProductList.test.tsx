import React from 'react';
import {render} from '@testing-library/react-native';
import ProductList from '..//src/components/DemoProductList';

describe('ProductList', () => {
  it('renders the correct number of products', () => {
    const {getAllByText} = render(<ProductList />);

    const products = getAllByText(/Product \d+/);
    expect(products.length).toBe(10);
  });

  it('renders Product 1 correctly', () => {
    const {getByText} = render(<ProductList />);

    const product1 = getByText('Product 1');
    expect(product1).toBeTruthy();
  });

  it('[Fails this test on purpose] renders Product 10 correctly', () => {
    const {getByText} = render(<ProductList />);

    const product10 = getByText('Product 10');
    expect(product10).toBeTruthy();
  });
});
