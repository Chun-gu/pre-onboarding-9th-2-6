import { Grid } from '@chakra-ui/react';

import ProductCard from '../ProductCard';

export default function ProductList({ products }) {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      {products.map((product) => (
        <ProductCard key={product.idx} product={product} />
      ))}
    </Grid>
  );
}
