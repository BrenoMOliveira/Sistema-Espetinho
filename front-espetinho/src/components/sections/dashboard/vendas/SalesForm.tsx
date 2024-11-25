import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Card, CardContent, Typography, Grid } from '@mui/material';

// Definindo e exportando a interface Sale para que possa ser usada em outros componentes
export interface Sale {
  quantity: number;
  type: string;
  total: number;
}

// Definindo o tipo para a função que adiciona vendas
type AddSaleFunction = (sale: Sale) => void;

// Propriedades esperadas pelo componente SalesForm
interface SalesFormProps {
  addSale: AddSaleFunction;
}

// Componente funcional SalesForm
const SalesForm: React.FC<SalesFormProps> = ({ addSale }) => {
  const [sale, setSale] = useState({ type: '', quantity: 0, total: 0 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sale.type || sale.quantity === 0 || sale.total === 0) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    addSale({ type: sale.type, quantity: sale.quantity, total: sale.total });
    setSale({ type: '', quantity: 0, total: 0 });
  };

  return (
    <Card raised sx={{ maxWidth: 2000, height: 300, m: 6, p: 6 }}>
      <CardContent>
        <Typography variant="h6" color='white' gutterBottom>
          Registro de Vendas de Espetinhos
        </Typography>   
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="type-label">Tipo de Espetinho</InputLabel>
                <Select
                  labelId="type-label"
                  value={sale.type}
                  label="Tipo de Espetinho"
                  onChange={(e) => setSale({ ...sale, type: e.target.value })}
                >
                  <MenuItem value="Bovino">Bovino</MenuItem>
                  <MenuItem value="Medalhão de Frango">Medalhão de Frango</MenuItem>
                  <MenuItem value="Linguiça">Linguiça</MenuItem>
                  <MenuItem value="Pão de Alho">Pão de Alho</MenuItem>
                  <MenuItem value="Queijo">Queijo</MenuItem>
                  <MenuItem value="Picanha">Picanha</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Quantidade"
                type="number"
                value={sale.quantity}
                fullWidth
                onChange={(e) => setSale({ ...sale, quantity: parseInt(e.target.value, 10) })}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Total (R$)"
                type="number"
                value={sale.total}
                fullWidth
                onChange={(e) => setSale({ ...sale, total: parseFloat(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>Registrar Venda</Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

// Exportando o componente SalesForm
export default SalesForm;
