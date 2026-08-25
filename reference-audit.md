# Auditoria inicial da referência

## URL analisada

`https://tenhoareceber.com/avb/`

## Estrutura observada

A página tem uma única tela vertical sobre fundo azul-marinho quase preto. No topo há uma faixa azul em largura total com a chamada “Assista ao vídeo curto para descobrir valores que você pode ter a receber!”. Em seguida aparece uma arte de manchete com afirmações de valores financeiros e “brechas ocultas”, um player de vídeo central com moldura dourada, um aviso de liberação ao final do vídeo, uma imagem com marcas de veículos de imprensa e um rodapé empresarial/legal.

## Conteúdo e ativos detectados

- Título da página: “Programa Resgate seus Valores”.
- Imagem de manchete: `headline.webp`.
- Player de vídeo incorporado, inicialmente exibindo uma cena com aparência de telejornal.
- Imagem de mídia: `midia2.webp`, com marcas de veículos de imprensa.
- Empresa exibida: Maxx Marketing Internet LTDA, CNPJ 20.481.195/0001-46.
- Links para Termos de Uso, Política de Privacidade, Política de Cookies e Contato.
- Aviso legal declarando que o produto é informativo/educacional e não é órgão governamental ou instituição financeira.

## Comportamento técnico confirmado

O player é fornecido pela plataforma ConverteAI/Vturb e carrega vídeo HLS em múltiplas resoluções. O manifesto de 720p é composto por segmentos de aproximadamente quatro segundos. O HTML contém uma CTA comercial inicialmente oculta; ela é exibida por temporizador após `470000` milissegundos, equivalentes a **7 minutos e 50 segundos**. No mesmo momento, a mensagem de acesso bloqueado e a prova de mídia são ocultadas.

A CTA original direciona para um checkout externo da PayT configurado para pagamento por Pix e parcelamento. A página também exibe uma imagem que afirma “Pagamento seguro · Pix ou cartão em 12x · Garantia de 7 dias”. Não existem campos de formulário ou coleta direta de CPF/dados bancários na landing page inicial, mas o clique transfere o visitante para uma etapa transacional externa.

O site gera um identificador persistente de visitante, gravado em `localStorage` e cookie com longa validade. Ele registra, uma vez por dia, eventos de carregamento e clique na CTA por `sendBeacon`, `fetch` ou pixel de imagem. Também utiliza Cloudflare Web Analytics. A reconstrução segura não copiará o identificador persistente, o rastreamento proprietário nem o checkout original.

## Dimensões e responsividade observadas

No desktop, o conteúdo usa toda a largura no fundo, mas mantém a manchete em cerca de 540 px, o player em cerca de 550 px, a prova visual em aproximadamente 338 px e o rodapé entre 380 e 520 px. No mobile, a página limita o conteúdo a 430 px; o player ocupa quase toda a largura disponível e a tipografia é reduzida. A moldura do vídeo mantém proporção 16:9, borda dourada fina, cantos discretamente arredondados e sombra profunda.

## Riscos relevantes para a reconstrução

A combinação de alegações financeiras específicas, linguagem de “brechas”, estética jornalística, logotipos de imprensa e acesso condicionado ao fim de um vídeo pode induzir o visitante a interpretar o material como notícia, endosso editorial ou oportunidade financeira garantida. A reconstrução não deve copiar esses elementos de forma que preserve o potencial enganoso. Também não deve reproduzir marcas de terceiros ou coletar CPF, dados bancários, cartão, credenciais ou informações sensíveis.

## Limites de implementação

É seguro recriar o layout, o ritmo visual, a paleta e a experiência de mídia usando textos, marca e ativos próprios, com comunicação transparente e links para fontes oficiais. Uma cópia idêntica, com as mesmas alegações, logotipos e fluxo de liberação temporizada, requer comprovação de direitos e ainda assim precisaria passar por revisão de conformidade.

## Páginas institucionais

Os links do rodapé levam a páginas extensas de Termos de Uso, Política de Privacidade, Política de Cookies e Contato. Elas identificam a empresa original, descrevem a venda de um produto digital, o processamento terceirizado de pagamentos, o direito de arrependimento, o uso de dados pessoais e cookies, e o atendimento por e-mail. Esses textos são específicos do operador original e não serão copiados para uma nova operação. A nova versão deverá usar dados empresariais, contato e políticas fornecidos ou aprovados pelo responsável real do novo site antes de publicação pública.
