# Programa Resgate seus Valores — reprodução autorizada

Reprodução fiel da página `https://tenhoareceber.com/avb/`, preparada para exportação ao GitHub e implantação no Cloudflare Pages. O proprietário confirmou autorização para reutilizar a identidade, os textos, os ativos e o player da página original.

## Implementação

O projeto usa React 19, TypeScript, Vite e Tailwind CSS 4. A página preserva a faixa superior, as artes responsivas de manchete, o player Vturb, a mensagem de acesso bloqueado, a prova visual de mídia, o rodapé institucional e a liberação da CTA após 470 segundos. O checkout configurado é `https://payt.site/ypCRvNZ`.

## Desenvolvimento e validação

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

O build estático é gerado em `dist/public`.

## Cloudflare Pages

| Opção | Valor |
|---|---|
| Framework preset | Vite |
| Build command | `pnpm build` |
| Build output directory | `dist/public` |
| Root directory | `/` |
| Production branch | `main` |

O arquivo `client/public/_redirects` permite que as rotas do React funcionem em acessos diretos no Cloudflare Pages.

## GitHub

Exporte o projeto pelo painel em **Settings → GitHub**. Depois de selecionar o proprietário e o nome do repositório, conecte esse repositório no Cloudflare Pages usando as opções da tabela acima.
