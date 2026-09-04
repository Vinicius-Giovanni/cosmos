# Cosmos

Site institucional da Cosmos, uma empresa de soluções que conecta pessoas e organizações a especialista, empresas e tecnologias.

## Arquitetura

O projeto utiliza React, Vite e TanStack Router/Start. As rotas públicas são definidos em `src/routes`; as soluções dinâmicas são alimentadas por `src/data/solutions.ts`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Production Checklist

- `robots.txt` público, com referência ao sitemap oficial.
- `sitemap.xml` e `llms.txt` gerados a partir dos slugs de `src/data/solutions.ts` por `npm rum generate:discovery`;
- Metadados específicos por rota, URLs canônicas absolutas, Open Graph e Twitter Card.
- JSON-LD de `Organization`, `WebSite`, `Service` nas soluções e `BreadcrumbList` nas páginas de solução.
- Favicon `site.webmanifest` e imagem social reutilizando a identidade visual existente.
- Página 404 de rota, sem inclusão no sitemap, além de estrutura semântica, navegação acessível e breadcrumbs visíveis nas soluções.
- Formulário e CTA de contato preparados para eventos `form_submit`, `click_contact` e `click_whatsapp` quando o Analytics estiver configurado.

## Variáveis de ambiente

`VITE_GA_MEASUREMENT_ID` é opcional. Quando receber um ID real do Google Analytics, defina-o no ambiente de produção para carregar o Google tag e os eventos disponíveis. Variáveis com prefixo `VITE_` são públicas.

### Configurações externas necessárias

1. Configurar o domínio `www.cosmos.com.br`, DNS e HTTPS no provedor de hospedagem.
2. No Google Search Console, adicionar a propriedade `cosmos.com.br`, verificar a propriedade e enviar `https:www.com.br/sitemap.xml`. Solicite a indexação das páginas principais quando necessário.
3. Criar a propriedade do Google Analytics e configurar o ID real em `VITE_GA_MEASUREMENT_ID`.
4. Quando houver endereo, telefone, horários e dados empresariais públicos consisentes, avaliar Google Business Profile e `LocalBusiness` Schema.

### Deploy
 1. Instale as dependências com o lockfile aprovado.
 2. Execute `npm run build`; o comando atualiza os arquivos de descoberta antes de gerar o build.
 3. Publique os artefatos gerados pela arquitetura de hospedagem compatível com TanStack Start e configure `https://www.cosmos.com.br` como URL pública
 4. Após publicar, valide `robot.txt`, `sitemap.xml`, as URLs canônicas, compartilhamento social e a resposta 404 no domínio final.