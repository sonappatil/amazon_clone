import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/input/redux/hooks';
import { getProducts } from '../features/product/productSlice';
import HeaderComponent from '../features/product/components/Header.component';
import ProductComponent from '../features/product/components/Product.component';


const HomePage = () => {
  const dispatch = useAppDispatch();

  const { cart, products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '48px',
        }}
      >
        {products.length > 0 &&
          products.map((product) => (
            <ProductComponent key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;