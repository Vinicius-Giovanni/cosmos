export type CaseStudy = {
  slug: string;
  title: string;
  area: string;
  problem: string;
  context: string;
  solution: string;
  process: string[];
  technologies: string[];
  result: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "dashboard-executivo",
    title: "Dashboard executivo",
    area: "Data & Business Intelligence",
    problem:
      "Relatórios mensais consolidados manualmente, com divergência de números entre áreas e decisões tomadas sobre dados desatualizados.",
    context:
      "Operação comercial com informação distribuída entre ERP, planilhas de equipe e controles paralelos, sem uma fonte única de verdade.",
    solution:
      "Modelagem dos indicadores essenciais, carga automatizada das bases e um painel executivo com leitura por período, canal e margem.",
    process: [
      "Diagnóstico das fontes e das regras de cálculo em uso",
      "Definição de indicadores e dicionário de dados",
      "Construção do fluxo de carga e do modelo",
      "Publicação do painel e ciclo de validação",
    ],
    technologies: ["Power BI", "SQL", "Python", "ETL"],
    result:
      "Resultado esperado: fechamento sem consolidação manual, indicadores alinhados entre áreas e acompanhamento contínuo em vez de mensal.",
  },
  {
    slug: "automacao-de-processos",
    title: "Automação de processos",
    area: "Automação & Integrações",
    problem:
      "Equipe dedicando horas diárias a conferências, cadastros e transferência de informação entre sistemas.",
    context:
      "Rotina administrativa com etapas repetitivas, alta chance de erro de digitação e dependência de pessoas específicas.",
    solution:
      "Mapeamento do processo, automação das etapas repetitivas e integração direta entre os sistemas envolvidos, com registro de execução.",
    process: [
      "Mapeamento do fluxo atual e dos pontos de falha",
      "Desenho do processo automatizado",
      "Implementação das rotinas e das integrações",
      "Monitoramento e tratamento de exceções",
    ],
    technologies: ["Python", "APIs REST", "Webhooks", "Agendamento"],
    result:
      "Resultado esperado: redução expressiva do tempo operacional, menos retrabalho e processo auditável de ponta a ponta.",
  },
  {
    slug: "website-corporativo",
    title: "Website corporativo",
    area: "Tecnologia & Design",
    problem:
      "Presença digital desatualizada, que não comunicava a real capacidade da empresa nem gerava contatos qualificados.",
    context:
      "Empresa consolidada no mercado, com site antigo, sem padrão visual e sem estrutura de conversão.",
    solution:
      "Reposicionamento de mensagem, arquitetura de conteúdo orientada a conversão e site responsivo com base técnica de SEO.",
    process: [
      "Definição de posicionamento e mensagem",
      "Arquitetura de informação e wireframes",
      "Direção visual e interface",
      "Implementação, SEO técnico e medição",
    ],
    technologies: ["React", "TypeScript", "SEO técnico", "Analytics"],
    result:
      "Resultado esperado: percepção de valor coerente com a entrega e um canal comercial mensurável.",
  },
  {
    slug: "sistema-personalizado",
    title: "Sistema personalizado",
    area: "Tecnologia & Software",
    problem:
      "Controle da operação em planilhas compartilhadas, sem histórico confiável, permissões ou rastreabilidade.",
    context:
      "Crescimento do volume de operações tornou o controle informal insustentável e arriscado.",
    solution:
      "Sistema web sob medida com cadastro estruturado, níveis de acesso, histórico de alterações e relatórios operacionais.",
    process: [
      "Levantamento de requisitos com as áreas envolvidas",
      "Modelagem de dados e definição de permissões",
      "Desenvolvimento em ciclos com validação",
      "Migração de dados e implantação assistida",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Autenticação"],
    result:
      "Resultado esperado: informação centralizada, rastreável e disponível para decisão, com processo padronizado.",
  },
];
