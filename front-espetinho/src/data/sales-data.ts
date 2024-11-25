import totalSales from 'assets/images/todays-sales/total-sales.png';
import totalOrder from 'assets/images/todays-sales/total-order.png';
import productSold from 'assets/images/todays-sales/product-sold.png';
import newCustomer from 'assets/images/todays-sales/new-customer.png';

export interface SaleItem {
  id?: number;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
}

const salesData: SaleItem[] = [
  {
    id: 1,
    icon: totalSales,
    title: 'R$ 2.500',
    subtitle: 'Faturamento',
    color: 'warning.main',
  },
  {
    id: 2,
    icon: totalOrder,
    title: '138',
    subtitle: 'Total de pedidos',
    color: 'primary.main',
  },
  {
    id: 3,
    icon: productSold,
    title: 'Bovino',
    subtitle: 'Produtos em falta',
    color: 'secondary.main',
  },
  {
    id: 4,
    icon: newCustomer,
    title: '12',
    subtitle: 'Novos clientes',
    color: 'info.main',
  },
];

export default salesData;
