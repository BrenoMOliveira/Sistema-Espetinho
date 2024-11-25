// src/pages/abas/Vendas.tsx
import React, { useState } from 'react';
import SalesForm, { Sale } from "../../components/sections/dashboard/vendas/SalesForm";
//import { Sale } from '../../interfaces';  // Supondo que Sale esteja definido em interfaces.ts

const Vendas: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([]);

  const addSale = (sale: Sale) => {  // Agora sale é tipado como Sale
    setSales(prevSales => [...prevSales, sale]);
  };

  return (
    <div>
      <SalesForm addSale={addSale} />
      <ul>
        {sales.map((sale, index) => (
          <li key={index}>{`Tipo: ${sale.type}, Quantidade: ${sale.quantity}, Total: R$${sale.total}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vendas;

