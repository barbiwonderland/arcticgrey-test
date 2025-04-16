import ProductDetails from './ProductDetails';
import {Aside, useAside} from './Aside';

function ProductAside() {
  const {type, close} = useAside();
  if (type !== 'product-detail') return null;

  return (
    <Aside type="product-detail" heading="">
      <ProductDetails />
    </Aside>
  );
}

export default ProductAside;
