import { ReactElement } from 'react';
import { Box } from '@mui/material';

//import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
//import Earnings from 'components/sections/dashboard/earnings/Earnings';

const Dashboard = (): ReactElement => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
        <Box gridColumn={{ xs: 'span 15', '2xl': 'span 12' }} order={{ xs: 0 }}>
          <TodaysSales />
        </Box>
        <Box gridColumn={{ xs: 'span 15', lg: 'span 12' }} order={{ xs: 2, '2xl': 2 }}>
          <TopProducts />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
