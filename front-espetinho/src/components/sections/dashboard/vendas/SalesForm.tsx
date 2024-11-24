// src/components/SalesForm.js
import React, { useState } from 'react';

function SalesForm({ addSale }) {
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState('');
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quantity || !type || !total) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    addSale({ quantity, type, total });
    setQuantity(0);
    setType('');
    setTotal(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo de Espetinho:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">Selecione</option>
          <option value="carne">Carne</option>
          <option value="frango">Frango</option>
          <option value="misto">Misto</option>
        </select>
      </label>
      <label>
        Quantidade:
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />
      </label>
      <label>
        Total (R$):
        <input
          type="number"
          value={total}
          onChange={e => setTotal(Number(e.target.value))}
        />
      </label>
      <button type="submit">Registrar Venda</button>
    </form>
  );
}

export default SalesForm;

