# 🚀 Guia de Deploy no Render - Portfólio Evandro Jorge

Este guia mostra como fazer deploy do portfólio estático no Render em poucos minutos.

---

## 📋 Pré-requisitos

- ✅ Conta no GitHub (você já tem)
- ✅ Repositório criado: `https://github.com/ErickBrendal/evandro-motorista-portfolio`
- ✅ Conta no Render (crie em https://render.com)

---

## 🔧 Passo 1: Criar Arquivo de Build para Site Estático

Primeiro, vamos criar um arquivo `render.yaml` na raiz do projeto para configurar o deploy:

**Localização**: `/render.yaml` (na raiz do projeto, mesmo nível de `package.json`)

```yaml
services:
  - type: web
    name: evandro-motorista-portfolio
    env: node
    plan: free
    buildCommand: npm run build
    startCommand: npm run preview
    envVars:
      - key: NODE_ENV
        value: production
```

---

## 📝 Passo 2: Atualizar `package.json`

Certifique-se de que seu `package.json` tem os scripts corretos. Abra o arquivo e verifique se tem:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview --host 0.0.0.0 --port 3000",
    "lint": "eslint ."
  }
}
```

Se não tiver, adicione esses scripts.

---

## 🌐 Passo 3: Fazer Login no Render

1. Acesse https://render.com
2. Clique em **"Sign Up"** ou **"Sign In"**
3. Escolha **"Sign in with GitHub"** para facilitar
4. Autorize o Render a acessar sua conta GitHub

---

## 🚀 Passo 4: Criar Novo Serviço Web

1. No dashboard do Render, clique em **"New +"** (canto superior direito)
2. Selecione **"Web Service"**
3. Escolha **"Build and deploy from a Git repository"**

---

## 🔗 Passo 5: Conectar Repositório GitHub

1. Clique em **"Connect a repository"**
2. Procure por **"evandro-motorista-portfolio"**
3. Clique em **"Connect"** ao lado do repositório

---

## ⚙️ Passo 6: Configurar Deployment

Preencha os campos conforme abaixo:

| Campo | Valor |
|-------|-------|
| **Name** | `evandro-motorista-portfolio` |
| **Environment** | `Node` |
| **Region** | `São Paulo (São Paulo)` ou `US East (N. Virginia)` |
| **Branch** | `main` |
| **Build Command** | `npm run build` |
| **Start Command** | `npm run preview -- --host 0.0.0.0 --port 3000` |
| **Plan** | `Free` |

---

## 🔐 Passo 7: Variáveis de Ambiente (Opcional)

Se precisar de variáveis de ambiente, clique em **"Advanced"** e adicione:

```
NODE_ENV = production
```

Para este projeto estático, não é necessário adicionar mais nada.

---

## ✅ Passo 8: Deploy

1. Clique em **"Create Web Service"**
2. O Render começará a fazer build automaticamente
3. Você verá o progresso em tempo real:
   - ⏳ Building...
   - ✅ Build successful
   - 🚀 Deployed

O processo leva cerca de **3-5 minutos**.

---

## 📊 Passo 9: Acessar o Site

Após o deploy ser concluído:

1. Você verá uma URL como: `https://evandro-motorista-portfolio.onrender.com`
2. Clique no link para acessar seu portfólio ao vivo
3. Compartilhe com seus clientes!

---

## 🎯 Próximas Vezes (Atualizações)

Depois que o primeiro deploy estiver pronto, qualquer `push` para a branch `main` no GitHub **acionará automaticamente um novo deploy** no Render. Não precisa fazer nada manualmente!

### Para fazer atualizações:

```bash
# 1. Faça suas alterações localmente
# 2. Commit e push para GitHub
git add .
git commit -m "Descrição da alteração"
git push origin main

# 3. O Render detectará automaticamente e fará o deploy
```

---

## 🔄 Redeployar Manualmente

Se precisar redeployar sem fazer alterações:

1. Acesse o dashboard do Render
2. Clique no serviço **"evandro-motorista-portfolio"**
3. Clique em **"Manual Deploy"** (canto superior direito)
4. Selecione a branch `main`
5. Clique em **"Deploy"**

---

## 🌍 Configurar Domínio Customizado (Opcional)

Se quiser usar um domínio próprio (ex: `evandro-motorista.com.br`):

1. No dashboard do Render, clique em seu serviço
2. Vá para **"Settings"**
3. Procure por **"Custom Domain"**
4. Digite seu domínio
5. Siga as instruções para configurar DNS

---

## ❌ Troubleshooting

### Build falha com erro de dependências

```bash
# Solução: Limpe o cache e reconstrua
npm install
npm run build
```

### Site mostra erro 404

- Verifique se o `Build Command` está correto: `npm run build`
- Verifique se o `Start Command` está correto: `npm run preview -- --host 0.0.0.0 --port 3000`

### Porta incorreta

O Render usa a porta `3000` por padrão. Certifique-se de que o comando `preview` está usando `--port 3000`.

---

## 📞 Suporte

- **Documentação Render**: https://render.com/docs
- **GitHub Issues**: https://github.com/ErickBrendal/evandro-motorista-portfolio/issues

---

## ✨ Pronto!

Seu portfólio estará online em poucos minutos. Qualquer dúvida durante o processo, consulte este guia ou entre em contato!

**Boa sorte! 🚀**
