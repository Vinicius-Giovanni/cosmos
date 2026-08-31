export type Solution = {
  slug: string;
  path: string;
  index: string;
  title: string;
  short: string;
  description: string;
  problems: string[];
  examples: string[];
  services: string[];
};

export const solutions: Solution[] = [
  {
    slug: "tecnologia",
    path: "/solucoes/tecnologia",
    index: "01",
    title: "Tecnologia & Software",
    short: "Websites, sistemas, aplicações, APIs, integrações e produtos digitais.",
    description:
      "Estruturamos e coordenamos a construção de software sob medida: da definição do escopo à entrega, com os especialistas certos em cada etapa.",
    problems: [
      "Processos operando em planilhas que já não sustentam o negócio",
      "Sistemas que não conversam entre si",
      "Presença digital desatualizada ou frágil",
      "Projetos técnicos sem alguém responsável pela condução",
    ],
    examples: [
      "Sistema interno de gestão com níveis de acesso",
      "Portal corporativo com área logada",
      "API de integração entre ERP e canais de venda",
      "Aplicação web para operação de campo",
    ],
    services: [
      "Websites e landing pages",
      "Sistemas web sob medida",
      "APIs e integrações",
      "Produtos digitais",
      "Manutenção e evolução",
    ],
  },
  {
    slug: "data",
    path: "/solucoes/data",
    index: "02",
    title: "Data & Business Intelligence",
    short: "Dashboards, Power BI, engenharia de dados, ETL, Analytics e indicadores.",
    description:
      "Transformamos dados dispersos em indicadores confiáveis, com modelagem, automação de carga e leitura executiva.",
    problems: [
      "Relatórios construídos manualmente todos os meses",
      "Números divergentes entre áreas",
      "Falta de indicadores para decisão",
      "Dados presos em sistemas isolados",
    ],
    examples: [
      "Dashboard executivo consolidando vendas e margem",
      "Pipeline de ETL com carga automatizada",
      "Modelo de dados com regras de negócio documentadas",
      "Painel operacional de acompanhamento diário",
    ],
    services: [
      "Dashboards e Power BI",
      "Engenharia de dados e ETL",
      "Modelagem e governança",
      "Analytics e indicadores",
      "Automação de relatórios",
    ],
  },
  {
    slug: "automacao",
    path: "/solucoes/automacao",
    index: "03",
    title: "Automação & Integrações",
    short: "Automação de processos, integrações, scripts, web scraping e automação inteligente.",
    description:
      "Mapeamos tarefas repetitivas e desenhamos automações que reduzem retrabalho, erro humano e tempo de execução.",
    problems: [
      "Tarefas manuais repetidas diariamente",
      "Cadastros e conferências feitos à mão",
      "Informação copiada entre sistemas",
      "Coleta de dados externos sem processo",
    ],
    examples: [
      "Rotina que consolida pedidos e emite conferência automática",
      "Integração entre CRM, financeiro e planilhas",
      "Coleta estruturada de dados públicos",
      "Fluxos com apoio de modelos de linguagem",
    ],
    services: [
      "Automação de processos",
      "Integrações entre sistemas",
      "Scripts e rotinas",
      "Web scraping",
      "Automação com IA",
    ],
  },
  {
    slug: "design",
    path: "/solucoes/design",
    index: "04",
    title: "Design & Comunicação",
    short: "Branding, identidade visual, UI/UX, design gráfico e comunicação digital.",
    description:
      "Construímos a expressão visual do negócio com consistência: da marca à interface, do material impresso ao digital.",
    problems: [
      "Marca sem padrão de aplicação",
      "Interfaces confusas para o usuário",
      "Materiais desalinhados entre canais",
      "Percepção de valor abaixo da entrega real",
    ],
    examples: [
      "Identidade visual e manual de marca",
      "Design de interface para sistema interno",
      "Kit de apresentações comerciais",
      "Direção visual para comunicação digital",
    ],
    services: [
      "Branding e identidade visual",
      "UI/UX de produto",
      "Design gráfico",
      "Design system",
      "Comunicação digital",
    ],
  },
  {
    slug: "marketing",
    path: "/solucoes/marketing",
    index: "05",
    title: "Marketing & Crescimento",
    short: "Marketing digital, SEO, tráfego pago, conteúdo e estratégias de crescimento.",
    description:
      "Estruturamos aquisição e presença com método: posicionamento, canais, conteúdo e medição de resultado.",
    problems: [
      "Investimento em mídia sem leitura de retorno",
      "Site que recebe visitas e não gera contato",
      "Ausência de presença orgânica",
      "Conteúdo produzido sem estratégia",
    ],
    examples: [
      "Estruturação de SEO técnico e de conteúdo",
      "Campanhas de tráfego pago com métrica de conversão",
      "Plano editorial para autoridade no setor",
      "Otimização de páginas de conversão",
    ],
    services: [
      "Estratégia e posicionamento",
      "SEO",
      "Tráfego pago",
      "Conteúdo",
      "Análise de performance",
    ],
  },
  {
    slug: "consultoria",
    path: "/solucoes/consultoria",
    index: "06",
    title: "Consultoria & Soluções Especializadas",
    short: "Diagnóstico, planejamento, arquitetura de soluções, consultoria e projetos multidisciplinares.",
    description:
      "Quando a necessidade ainda não tem forma, começamos pelo diagnóstico e desenhamos a arquitetura da solução antes da execução.",
    problems: [
      "Necessidade clara, caminho indefinido",
      "Projeto que exige várias especialidades ao mesmo tempo",
      "Escopo mal definido e orçamento imprevisível",
      "Falta de coordenação entre fornecedores",
    ],
    examples: [
      "Diagnóstico e plano de solução para operação",
      "Arquitetura de solução multidisciplinar",
      "Coordenação de fornecedores em projeto único",
      "Planejamento de implantação por etapas",
    ],
    services: [
      "Diagnóstico de necessidade",
      "Arquitetura de solução",
      "Planejamento de projeto",
      "Coordenação de execução",
      "Projetos multidisciplinares",
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
