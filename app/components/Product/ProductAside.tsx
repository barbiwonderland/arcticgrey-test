import ProductDetails from './productDetails/ProductDetails';

import {Aside, useAside} from '../Common/Aside';
import {Product} from '@shopify/hydrogen/storefront-api-types';

function ProductAside() {
  const {type, close, product} = useAside();
  if (type !== 'product-detail') return null;
  return (
    <Aside type="product-detail" heading="" width={'100%'}>
      <ProductDetails layout="aside" product={product as Product} />
    </Aside>
  );
}

export default ProductAside;
