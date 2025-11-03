import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta dist/public
app.use(express.static(path.join(__dirname, 'dist/public')));

// Rota catch-all para SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor rodando em http://0.0.0.0:${PORT}`);
});
