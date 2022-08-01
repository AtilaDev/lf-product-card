import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should render a component with an image', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://atiladev.com" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with the image of product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
