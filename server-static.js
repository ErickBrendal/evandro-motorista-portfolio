import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Verificar se a pasta dist/public existe
const publicPath = path.join(__dirname, 'dist/public');
console.log(`📁 Servindo arquivos de: ${publicPath}`);
console.log(`✅ Pasta existe: ${fs.existsSync(publicPath)}`);

// Middleware para logging
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.path}`);
  next();
});

// Servir arquivos estáticos com cache
app.use(express.static(publicPath, {
  maxAge: '1d',
  etag: false
}));

// Rota catch-all para SPA (Single Page Application)
app.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  console.log(`🔄 Redirecionando ${req.path} para index.html`);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`❌ Erro ao servir index.html:`, err);
      res.status(404).send('404 - Página não encontrada');
    }
  });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(`⚠️ Erro:`, err);
  res.status(500).send('Erro interno do servidor');
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✅ Servidor rodando com sucesso!`);
  console.log(`🌐 URL: http://0.0.0.0:${PORT}`);
  console.log(`📍 Porta: ${PORT}`);
  console.log(`🚀 Pronto para receber requisições\n`);
});

// Tratamento de sinais de encerramento gracioso
process.on('SIGTERM', () => {
  console.log('📛 SIGTERM recebido, encerrando graciosamente...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('📛 SIGINT recebido, encerrando graciosamente...');
  process.exit(0);
});
