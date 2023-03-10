import { useCallback } from 'react';

import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { useModal } from '../../hooks';
import { reservationActions } from '../../store/slices/reservationSlice';

export default function ProductCard({ product }) {
  const { openModal } = useModal();
  const dispatch = useDispatch();
  const AddToCart = (e) => {
    e.stopPropagation();
    dispatch(reservationActions.addToCart(product));
  };

  const onClickCard = useCallback(() => {
    openModal('ProductDetail', product);
  }, [openModal, product]);

  return (
    <GridItem p={50} onClick={onClickCard}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        w="300px">
        <Image
          src={product.mainImage}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
          w="300px"
          h="300px"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              @{product.spaceCategory}
            </Badge>
          </Box>
          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
            flexDirection="column">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              #{product.idx}.{product.name}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              gap="3"
              mx="2"
              my="2">
              <Text>{product.price}원</Text>

              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'} onClick={AddToCart}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg"></Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </GridItem>
  );
}
