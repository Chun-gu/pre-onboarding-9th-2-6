import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Layout, ReservedProductList } from '../components';
import Payment from '../components/Payment';
import { reservationActions } from '../store/slices/reservationSlice';

export default function Reservations() {
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
