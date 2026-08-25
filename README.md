# Consulta Clara

Reconstrução autoral de uma landing page educativa sobre consulta segura de possíveis valores por canais oficiais. O projeto preserva a composição editorial da página de referência, mas não copia seus ativos, vídeo, logotipos de imprensa, rastreamento, checkout ou alegações financeiras.

## Tecnologia

O frontend usa React 19, TypeScript, Vite, Tailwind CSS 4, Wouter e ícones Lucide. Não há banco de dados, área de login, captura de CPF ou backend próprio.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

## Verificação

```bash
pnpm check
pnpm build
```

O build estático é gerado em `dist/public`.

## Publicação pelo GitHub no Cloudflare Pages

Depois de enviar o projeto a um repositório GitHub, crie um projeto no Cloudflare Pages e conecte o repositório. Use estas opções:

| Opção | Valor |
|---|---|
| Framework preset | Vite |
| Build command | `pnpm build` |
| Build output directory | `dist/public` |
| Root directory | `/` |
| Production branch | `main` |

O arquivo `client/public/_redirects` encaminha rotas como `/termos` e `/privacidade` para o `index.html`, permitindo que o roteamento do React funcione em acessos diretos.

## Ativos visuais

Os ativos desta versão são autorais e servidos pela infraestrutura de mídia do projeto. Para uma hospedagem externa independente do Manus, revise as URLs `/manus-storage/...` e migre os arquivos para um armazenamento público próprio, como Cloudflare R2, antes de colocar o domínio em produção.

## Revisão obrigatória antes da publicação comercial

Os textos institucionais são rascunhos de trabalho. Substitua a marca, os dados empresariais, o endereço de contato e as políticas pelos dados reais do responsável. Revise os documentos jurídicos e confirme que toda comunicação comercial corresponde ao produto efetivamente oferecido. Não inclua promessas de valor garantido, endosso jornalístico não autorizado ou solicitação de senhas e códigos bancários.

