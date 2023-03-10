import {
  Box,
  Td,
  Tr,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
} from '@chakra-ui/react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';

import { reservationActions } from '../store/slices/reservationSlice';

export default function ReservedProduct({ product }) {
  const dispatch = useDispatch();

  const reservedProducts = useSelector(
    (state) => state.reserve.reservedProducts,
  );
  const quantity = reservedProducts.filter(
    (item) => item.idx === product.idx,
  )[0].quantity;
  return (
    <Tr key={product.idx}>
      <Td>
        <Box width="60px">
          <Image src={product.mainImage} alt={product.name} rounded="lg" />
        </Box>
      </Td>
      <Td>{product.name}</Td>
      <Td>₩{product.price.toLocaleString()}</Td>
      <Td>
        <NumberInput
          size="md"
          maxW={24}
          defaultValue={1}
          min={1}
          max={product.maximumPurchases}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper
              onClick={() =>
                dispatch(
                  reservationActions.changeQuantity({
                    idx: product.idx,
                    newQuantity: 1,
                  }),
                )
              }
            />
            <NumberDecrementStepper
              onClick={() =>
                dispatch(
                  reservationActions.changeQuantity({
                    idx: product.idx,
                    newQuantity: -1,
                  }),
                )
              }
            />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td>
        <Box as="span" mr={2}>
          ₩{(product.price * (quantity ? quantity : 1)).toLocaleString()}
        </Box>
      </Td>
      <Td>
        <Center
          as="span"
          mr={2}
          cursor="pointer"
          onClick={() =>
            dispatch(reservationActions.removeFromCart(product.idx))
          }>
          <RiDeleteBin6Line color="red.500" />
        </Center>
      </Td>
    </Tr>
  );
}
