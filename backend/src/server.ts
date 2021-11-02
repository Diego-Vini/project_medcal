import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Rota funcionando' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
