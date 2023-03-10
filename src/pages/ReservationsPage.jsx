import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Layout, ReservedProductList } from '../components';
import Payment from '../components/Payment';
import { reservationActions } from '../store/slices/reservationSlice';

export default function Reservations() {
  const dispatch = useDispatch();

  const product = [
    {
      idx: 1,
      name: '가나다 목장 하루 이용권',
      mainImage: 'https://picsum.photos/id/17/300/300',
      description: '가나다 목장 하루 이용권에 대한 내용입니다.',
      spaceCategory: '강원',
      price: 30000,
      maximumPurchases: 5,
      registrationDate: '2023.01.01 15:07:00',
    },
    {
      idx: 2,
      name: 'AA 아쿠아리움 상어 밥주기 이용권',
      mainImage: 'https://picsum.photos/id/18/300/300',
      description: 'AA 아쿠아리움 상어 밥주기에 대한 내용입니다.',
      spaceCategory: '서울',
      price: 10000,
      maximumPurchases: 2,
      registrationDate: '2023.01.02 11:07:00',
    },
  ];
  useEffect(() => {
    product.forEach((product) => {
      dispatch(reservationActions.addToCart(product));
    });
  }, []);
  const reservedProducts = useSelector(
    (state) => state.reserve.reservedProducts,
  );

  return (
    <Layout>
      <ReservedProductList reservedProducts={reservedProducts} />
      <Payment />
    </Layout>
  );
}
