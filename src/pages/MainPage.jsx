import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Layout } from '../components';
import { Modal, ProductFilter, ProductList } from '../components';
import { fetchProductData } from '../store/slices/productSlice';

export default function MainPage() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const spaceCategories = useSelector(
    (state) => state.categories.spaceCategories,
  );
  const priceCategories = useSelector(
    (state) => state.categories.priceCategories,
  );

  const isInRange = (range, targetNumber) => {
    return targetNumber >= range[0] && targetNumber <= range[1];
  };

  const filteredProductList = products.filter((product) => {
    return (
      spaceCategories.includes(product.spaceCategory) &&
      isInRange(priceCategories, product.price)
    );
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./product_list.json');
      const data = await response.json();
      dispatch(fetchProductData(data));
    }
    fetchData();

    if (!products.length) fetchData();
  }, [dispatch, products.length]);

  return (
    <Layout>
      <ProductFilter />
      <ProductList products={filteredProductList}></ProductList>
      <Modal />
    </Layout>
  );
}
