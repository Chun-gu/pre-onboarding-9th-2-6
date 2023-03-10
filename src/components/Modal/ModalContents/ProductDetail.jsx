import {
  Badge,
  Box,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from '@chakra-ui/react';

export default function ProductDetail({ content }) {
  const {
    idx,
    name,
    price,
    mainImage,
    description,
    spaceCategory,
    maximumPurchases,
  } = content;

  return (
    <ModalContent size="2xl">
      <ModalHeader fontSize="2xl">{`#${idx} ${name}`}</ModalHeader>
      <ModalCloseButton size="lg" />
      <ModalBody display="flex" gap="20px">
        <Image src={mainImage} />
        <Box display="flex" flexDir="column">
          <Box>
            <Badge colorScheme="blue" flexGrow="0">
              {`@${spaceCategory}`}
            </Badge>
          </Box>
          <Text flexGrow="1">{description}</Text>
          <Box>
            <Text textAlign="end">
              최대 구매 가능 갯수: {maximumPurchases}개
            </Text>
            <Text fontSize="lg" fontWeight="bold" textAlign="end">
              {`${price.toLocaleString()}원`}
            </Text>
          </Box>
        </Box>
      </ModalBody>
    </ModalContent>
  );
}
