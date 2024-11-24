import { LinearProgressProps } from '@mui/material';

export interface ProductItem {
  id?: string;
  name: string;
  color: LinearProgressProps['color'];
  sales: number;
}

export const productTableRows: ProductItem[] = [
  {
    id: '01',
    name: 'Bovino',
    color: 'warning',
    sales: 26,
  },
  {
    id: '02',
    name: 'Medalhão de Frango',
    color: 'primary',
    sales: 22,
  },
  {
    id: '03',
    name: 'Pão de Alho',
    color: 'info',
    sales: 17,
  },
  {
    id: '04',
    name: 'Linguiça',
    color: 'secondary',
    sales: 12,
  },
];
