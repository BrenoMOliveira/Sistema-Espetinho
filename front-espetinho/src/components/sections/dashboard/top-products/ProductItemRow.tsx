import { LinearProgress, TableCell, TableRow } from '@mui/material';
import { ProductItem } from 'data/product-data';
import { ReactElement } from 'react';

const ProductItemRow = ({ productItem }: { productItem: ProductItem }): ReactElement => {
  return (
    <TableRow>
      <TableCell
        align="left"
        component="th"
        variant="head"
        scope="row"
        sx={{
          color: 'common.white',
          fontSize: 'body1.fontSize',
        }}
      >
        {productItem.id}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        {productItem.name}
      </TableCell>
      <TableCell align="left">
          {productItem.sales} Espetos
      </TableCell>
    </TableRow>
  );
};

export default ProductItemRow;
