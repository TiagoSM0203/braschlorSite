import type { CategoriaProduto, Produto, ProdutoInfoSection } from "./produtos";
import { formatarNomeProduto } from "./formatarNomeProduto";

const categoriaMateriaPrima: CategoriaProduto = "Matérias-primas";

type MateriaPrimaConfig = {
  chave: string;
  nome: string;
  descricao: string;
  destaques: string[];
  aplicacoes: string[];
  informacoes: string[];
  cuidados?: string[];
};

const secao = (titulo: string, itens: string[]): ProdutoInfoSection => ({
  titulo,
  itens,
});

const criarMateriaPrima = ({
  chave,
  nome,
  descricao,
  destaques,
  aplicacoes,
  informacoes,
  cuidados = [],
}: MateriaPrimaConfig): Produto => ({
  chave,
  nome: formatarNomeProduto(nome),
  descricao,
  destaques,
  categoria: categoriaMateriaPrima,
  secoes: [
    secao("Aplicações comuns", aplicacoes),
    secao("Informações técnicas", informacoes),
    secao("Cuidados importantes", [
      ...cuidados,
      "Uso técnico/industrial. Dosagem, compatibilidade e processo devem seguir a FISPQ e a formulação adotada pelo cliente.",
    ]),
  ],
});

export const materiasPrimas: Produto[] = [
  criarMateriaPrima({
    chave: "acido-sulfonico-90-labsa-90",
    nome: "Ácido Sulfônico 90% (LABSA 90%)",
    descricao:
      "Tensoativo aniônico ácido de alta matéria ativa, usado como base para detergentes, desengraxantes e limpadores após neutralização controlada.",
    destaques: [
      "Alta detergência e boa ação desengordurante.",
      "Ajuda a reduzir a tensão superficial e emulsificar óleos e gorduras.",
      "É uma das matérias-primas mais usadas em formulações de detergentes líquidos.",
    ],
    aplicacoes: [
      "Detergentes líquidos lava-louças e lava-roupas.",
      "Desengraxantes, limpadores multiuso e saneantes alcalinizados.",
      "Bases concentradas que serão neutralizadas com soda ou aminas.",
    ],
    informacoes: [
      "LABSA 90% indica teor elevado de matéria ativa e uso típico como precursor de tensoativo aniônico neutralizado.",
      "Aspecto comercial usual: líquido viscoso castanho a âmbar.",
      "Costuma trabalhar em sinergia com lauril éter sulfato e coadjuvantes de espuma.",
    ],
    cuidados: [
      "Produto ácido e corrosivo; a neutralização deve ser feita com controle de temperatura e pH.",
      "Não deve ser misturado de forma aleatória com oxidantes fortes ou bases sem procedimento técnico.",
    ],
  }),
  criarMateriaPrima({
    chave: "alcool-etilico-96-etanol",
    nome: "Álcool Etílico 96% (Etanol)",
    descricao:
      "Solvente volátil e miscível em água, muito usado em saneantes, fragrâncias, formulações hidroalcoólicas e sistemas de secagem rápida.",
    destaques: [
      "Excelente solvente para essências e ativos compatíveis.",
      "Evapora rápido e ajuda no acabamento seco da superfície.",
      "Matéria-prima clássica em soluções hidroalcoólicas e aromatizantes.",
    ],
    aplicacoes: [
      "Desinfetantes e limpadores de secagem rápida.",
      "Veículo para fragrâncias, odorizadores e extratos compatíveis.",
      "Formulações industriais, laboratoriais e cosméticas autorizadas para uso de etanol.",
    ],
    informacoes: [
      "O grau 96% representa alto teor alcoólico com pequena fração de água na composição.",
      "Além de solvente, pode atuar como veículo e auxiliar de limpeza em diferentes segmentos industriais.",
      "É amplamente empregado em tintas, vernizes, resinas, detergentes, sabões e preparações especiais.",
    ],
    cuidados: [
      "Produto inflamável; exige ventilação, aterramento e controle de fontes de ignição.",
      "Armazenagem deve ser feita em área apropriada para líquidos inflamáveis.",
    ],
  }),
  criarMateriaPrima({
    chave: "amida-de-coco",
    nome: "Amida de coco",
    descricao:
      "Coadjuvante não iônico derivado de ácidos graxos do coco, usado para reforçar espuma, viscosidade e detergência em produtos de limpeza.",
    destaques: [
      "Ajuda a espessar formulações líquidas.",
      "Melhora o volume e a estabilidade da espuma.",
      "É muito usada em detergentes, shampoos e sabonetes líquidos.",
    ],
    aplicacoes: [
      "Detergentes lava-louças e limpadores espumantes.",
      "Sabonetes líquidos, shampoos e formulações automotivas compatíveis.",
      "Sistemas que pedem reforço de viscosidade sem perda acentuada de espuma.",
    ],
    informacoes: [
      "Normalmente funciona como reforçador de espuma e sobreengordurante em sistemas com tensoativos aniônicos.",
      "Pode contribuir para sensação de fórmula mais encorpada e melhor aparência final.",
      "O desempenho final depende do pH, do sal e da combinação de tensoativos da receita.",
    ],
    cuidados: [
      "A performance varia conforme a base tensoativa; testes de bancada são importantes para acertar viscosidade.",
    ],
  }),
  criarMateriaPrima({
    chave: "amido-de-milho",
    nome: "Amido de Milho",
    descricao:
      "Polissacarídeo vegetal em pó, empregado como agente de corpo, ligante, espessante ou suspensor em diferentes aplicações industriais.",
    destaques: [
      "Matéria-prima de origem vegetal.",
      "Ajuda a dar corpo e consistência a sistemas compatíveis.",
      "Pode atuar como carga funcional em pós e misturas técnicas.",
    ],
    aplicacoes: [
      "Pós, polidores, adesivos e aplicações industriais baseadas em amido.",
      "Sistemas em que se deseja corpo, retenção de água ou textura mais uniforme.",
      "Processos que utilizam amidos como ligantes ou auxiliares de formulação.",
    ],
    informacoes: [
      "É composto principalmente por amilose e amilopectina.",
      "Comercialmente se apresenta como pó branco fino, de odor neutro ou suave.",
      "O uso exato depende do processo industrial, da temperatura e da fase aquosa disponível.",
    ],
    cuidados: [
      "Por ser um pó fino, o manuseio deve considerar controle de umidade e poeira.",
    ],
  }),
  criarMateriaPrima({
    chave: "acucar-invertido",
    nome: "Açúcar Invertido",
    descricao:
      "Xarope obtido pela inversão parcial da sacarose, rico em glicose e frutose, usado como agente umectante e auxiliar de brilho em aplicações específicas.",
    destaques: [
      "Boa solubilidade em água.",
      "Pode contribuir para retenção de umidade e plasticidade.",
      "É citado em linhas técnicas como fornecedor de brilho para borrachas e acabamentos.",
    ],
    aplicacoes: [
      "Formulações que exigem efeito umectante ou retenção de água.",
      "Aplicações técnicas voltadas a brilho e acabamento de borrachas compatíveis.",
      "Misturas aquosas que se beneficiam de uma fase açucarada estável.",
    ],
    informacoes: [
      "Sua composição é baseada principalmente em glicose, frutose e sacarose residual.",
      "Brix, cor e pureza variam de acordo com a especificação de cada fornecedor.",
      "Pode ser usado em segmentos industriais muito diferentes, não apenas no alimentício.",
    ],
    cuidados: [
      "Armazenagem deve evitar contaminação e exposição prolongada a calor excessivo.",
    ],
  }),
  criarMateriaPrima({
    chave: "base-amaciante",
    nome: "Base Amaciante",
    descricao:
      "Base catiônica concentrada para produção a frio de amaciantes têxteis, pensada para entregar maciez, viscosidade e boa retenção de fragrância.",
    destaques: [
      "Facilmente diluível em água fria em muitas linhas comerciais.",
      "Confere toque macio e condicionamento às fibras.",
      "Serve como base para amaciantes perfumados e linhas concentradas.",
    ],
    aplicacoes: [
      "Produção de amaciantes para lavanderia doméstica e profissional.",
      "Desenvolvimento de bases perfumadas para cuidado têxtil.",
      "Linhas concentradas com posterior ajuste de essência, cor e conservante.",
    ],
    informacoes: [
      "Geralmente é formulada com quaternários de amônio, álcoois graxos e auxiliares de viscosidade.",
      "Pode ser fornecida em formato líquido ou pastoso, dependendo da tecnologia da linha.",
      "Compatibilidade com fragrâncias e corantes precisa respeitar o caráter catiônico da base.",
    ],
    cuidados: [
      "Essências, pigmentos e conservantes devem ser escolhidos para sistemas catiônicos.",
    ],
  }),
  criarMateriaPrima({
    chave: "brancol",
    nome: "Brancol",
    descricao:
      "Opacificante em emulsão usado para dar aspecto branco leitoso a detergentes, desinfetantes, limpadores e amaciantes.",
    destaques: [
      "Entrega opacidade e acabamento visual leitoso.",
      "Tem boa compatibilidade com sistemas aniônicos, não iônicos e catiônicos.",
      "É um coadjuvante estético, não o ativo principal de limpeza.",
    ],
    aplicacoes: [
      "Desinfetantes leitosos e perfumados.",
      "Detergentes, limpadores e amaciantes com aparência branca ou opaca.",
      "Formulações em que o apelo visual do produto faz diferença comercial.",
    ],
    informacoes: [
      "Muitas linhas comerciais usam copolímero acrílico/estireno em emulsão.",
      "Costuma ser fornecido como líquido branco de baixa viscosidade.",
      "A intensidade da opacidade depende da dosagem e da transparência da fórmula base.",
    ],
    cuidados: [
      "O ajuste fino costuma ser feito em bancada para acertar a aparência sem perder estabilidade.",
    ],
  }),
  criarMateriaPrima({
    chave: "carbonato-de-sodio-98-barrilha-leve",
    nome: "Carbonato de Sódio 98% (Barrilha Leve)",
    descricao:
      "Sal alcalino em pó, também chamado de barrilha leve, usado para correção de pH, alcalinidade e reforço de lavagem em processos industriais.",
    destaques: [
      "Pureza técnica típica próxima de 98%.",
      "Atua como builder e corretor de pH.",
      "É muito usado em detergentes, sabões, vidro e tratamento de água.",
    ],
    aplicacoes: [
      "Detergentes em pó e líquidos alcalinos.",
      "Sabões, lavanderia técnica e tratamento de água ou efluentes.",
      "Processos que exigem elevação de pH e reforço alcalino.",
    ],
    informacoes: [
      "Apresenta-se como pó branco, inodoro e solúvel em água.",
      "A versão leve tem densidade aparente menor, o que facilita dispersão em muitos processos.",
      "É conhecida no mercado também como barrilha leve ou soda ash light.",
    ],
    cuidados: [
      "Pode elevar significativamente o pH da formulação final.",
      "Deve ser protegido da umidade para evitar empedramento.",
    ],
  }),
  criarMateriaPrima({
    chave: "cloreto-de-benzalconio",
    nome: "Cloreto de Benzalcônio",
    descricao:
      "Quaternário de amônio catiônico muito usado como ativo antimicrobiano, desodorizante e sanitizante em formulações de limpeza e desinfecção.",
    destaques: [
      "Matéria-prima clássica para desinfetantes e sanitizantes.",
      "Ajuda no controle microbiológico em sistemas compatíveis.",
      "Também é empregada em desodorizantes e produtos institucionais.",
    ],
    aplicacoes: [
      "Desinfetantes de uso doméstico e institucional.",
      "Sanitizantes, desodorizantes e eliminadores de odores.",
      "Produtos antimicrobianos, bactericidas e fungicidas compatíveis com quaternários.",
    ],
    informacoes: [
      "No mercado é comum encontrar versões comerciais a 50% ou 80%, dependendo da especificação do fornecedor.",
      "É compatível com tensoativos não iônicos e catiônicos em formulações adequadas.",
      "A ação antimicrobiana está relacionada à sua natureza catiônica e à interação com membranas celulares.",
    ],
    cuidados: [
      "Não deve ser combinado de forma indiscriminada com oxidantes fortes, como hipocloritos.",
      "Compatibilidade com aniônicos deve ser validada em bancada, porque pode haver perda de desempenho.",
    ],
  }),
  criarMateriaPrima({
    chave: "cloreto-de-sodio-sal",
    nome: "Cloreto de Sódio (Sal)",
    descricao:
      "Sal inorgânico amplamente usado como eletrólito de processo, espessante auxiliar e insumo de ajuste em detergentes, shampoos e bases aquosas compatíveis.",
    destaques: [
      "É uma matéria-prima simples e de amplo uso industrial.",
      "Pode atuar como espessante auxiliar em sistemas tensoativos adequados.",
      "Também é usado em segmentos saneante, cosmético, químico e têxtil.",
    ],
    aplicacoes: [
      "Ajuste de viscosidade em detergentes, shampoos e sabonetes líquidos compatíveis.",
      "Formulações saneantes e processos industriais que utilizam cloreto de sódio sem iodo.",
      "Operações em que se deseja reforço eletrolítico ou matéria-prima salina de processo.",
    ],
    informacoes: [
      "No mercado técnico é comum encontrar cloreto de sódio refinado sem iodo ou micronizado.",
      "Em sistemas com lauril éter sulfato, o sal pode influenciar fortemente o ponto de viscosidade.",
      "A resposta do espessamento depende do pacote tensoativo, do pH e da presença de solventes ou hidrotropos.",
    ],
    cuidados: [
      "Excesso de sal pode derrubar viscosidade em vez de aumentar.",
      "Deve ser mantido protegido da umidade para evitar empedramento e perda de fluidez.",
    ],
  }),
  criarMateriaPrima({
    chave: "butil-glicol",
    nome: "Butil Glicol",
    descricao:
      "Solvente glicol éter de boa solvência e evaporação moderada, muito usado em desinfetantes transparentes, multiusos e desengraxantes.",
    destaques: [
      "Bom poder solvente para óleos, sujeira e componentes orgânicos compatíveis.",
      "Ajuda em transparência e desempenho de limpeza em diversas fórmulas.",
      "É bastante usado em multiusos, limpadores e desengraxantes.",
    ],
    aplicacoes: [
      "Formulações de desinfetantes transparentes.",
      "Multiusos, limpadores gerais e desengraxantes.",
      "Sistemas em que se busca reforço de solvência e melhor molhabilidade da superfície.",
    ],
    informacoes: [
      "Quimicamente é conhecido como éter butílico do monoetilenoglicol.",
      "Combina função solvente com boa miscibilidade em água e diversos componentes orgânicos.",
      "É uma matéria-prima recorrente em saneantes domésticos, institucionais e formulações de limpeza técnica.",
    ],
    cuidados: [
      "A dosagem deve respeitar o equilíbrio entre desempenho, odor e segurança ocupacional.",
      "Compatibilidade com embalagens e fragrâncias deve ser validada no desenvolvimento.",
    ],
  }),
  criarMateriaPrima({
    chave: "nonilfenol-etoxilado-renex",
    nome: "Nonilfenol Etoxilado Renex",
    descricao:
      "Tensoativo não iônico da família dos nonilfenóis etoxilados, usado como emulsionante, dispersante, umectante, detergente e desengraxante em diferentes formulações.",
    destaques: [
      "Atua como emulsionante, dispersante e umectante.",
      "Pode reforçar molhabilidade, detergência e desengraxe conforme o grau de etoxilação.",
      "É matéria-prima conhecida no mercado por nomes comerciais como Renex e equivalentes.",
    ],
    aplicacoes: [
      "Detergentes de uso geral, limpadores, sanitizantes e desengraxantes.",
      "Limpa-vidros, amoniacados, xampus automotivos e solubilização de fragrâncias em sistemas compatíveis.",
      "Formulações industriais em que se deseja emulsificação e bom poder de limpeza.",
    ],
    informacoes: [
      "O desempenho varia conforme o número de moles de óxido de eteno, como 6,0 EO ou 9,5 EO.",
      "Quanto maior o grau de etoxilação, maior tende a ser a hidrofilia e a solubilidade em água.",
      "É um tensoativo não iônico cuja escolha do grau correto depende do HLB desejado na fórmula.",
    ],
    cuidados: [
      "O grau de etoxilação deve ser escolhido conforme a aplicação e o equilíbrio entre emulsão, espuma e limpeza.",
      "Compatibilidade com outras matérias-primas deve ser testada para evitar turbidez ou perda de desempenho.",
    ],
  }),
  criarMateriaPrima({
    chave: "trilon-edta-tetrassodico-liquido",
    nome: "Trilon (EDTA Tetrassódico Líquido)",
    descricao:
      "Agente quelante líquido à base de EDTA tetrassódico, usado para sequestrar íons metálicos e melhorar estabilidade e desempenho de detergentes e limpadores.",
    destaques: [
      "Ajuda a complexar cálcio, magnésio e outros metais em solução.",
      "Melhora estabilidade de formulações sensíveis à dureza da água.",
      "É amplamente usado em detergentes, limpeza institucional e industrial.",
    ],
    aplicacoes: [
      "Detergentes e limpadores de uso doméstico, institucional e industrial.",
      "Lavanderia, limpeza de superfícies duras e cuidados automotivos.",
      "Sistemas em que o controle de metais melhora estabilidade, transparência ou eficiência de limpeza.",
    ],
    informacoes: [
      "Trilon é uma família BASF de agentes quelantes; no caso do Trilon B líquido, a descrição química é sal tetrassódico do EDTA.",
      "É fornecido em forma líquida e atua removendo íons metálicos de soluções aquosas.",
      "A quelação ajuda a reduzir interferências da água dura e de metais que podem desestabilizar a fórmula.",
    ],
    cuidados: [
      "A dosagem deve ser ajustada conforme dureza da água e sensibilidade da formulação à presença de metais.",
    ],
  }),
  criarMateriaPrima({
    chave: "isotiazolinona",
    nome: "Isotiazolinona",
    descricao:
      "Biocida e conservante de amplo espectro para sistemas aquosos, indicado para controle de bactérias, fungos e leveduras em formulações compatíveis.",
    destaques: [
      "Atua como preservante em meio aquoso.",
      "Possui amplo espectro de ação microbiológica.",
      "É muito usada em saneantes e outras formulações sensíveis à contaminação.",
    ],
    aplicacoes: [
      "Saneantes, produtos aquosos e formulações que precisam de conservação em estado úmido.",
      "Emulsões, adesivos, selantes e sistemas industriais compatíveis com esse biocida.",
      "Linhas que buscam preservação sem formaldeído, dependendo da tecnologia comercial escolhida.",
    ],
    informacoes: [
      "Existem diferentes tecnologias comerciais à base de isotiazolinonas, inclusive blends como CMIT/MIT e sistemas livres de formaldeído.",
      "Produtos comerciais dessa família costumam apresentar alta solubilidade em água e estabilidade útil em ampla faixa de pH.",
      "Uma referência técnica da categoria cita estabilidade sob luz, até 60 °C e pH entre 2 e 9 para uma linha específica.",
    ],
    cuidados: [
      "A dosagem deve seguir estritamente o limite técnico e regulatório da aplicação.",
      "Compatibilidade com fragrâncias, oxidantes e pH final da fórmula deve ser testada antes da liberação do produto.",
    ],
  }),
  {
    chave: "corantes",
    nome: "Corantes",
    descricao:
      "Linha de corantes técnicos usada para padronização visual de domissanitários e outras formulações aquosas compatíveis, com opções em pó e em pasta para diferentes processos.",
    destaques: [
      "Ajuda a identificar linhas, fragrâncias e versões de produto.",
      "Tem alto rendimento visual, normalmente com dosagens baixas.",
      "A escolha da cor e do formato depende do pH, da transparência da base e da presença de oxidantes.",
    ],
    categoria: categoriaMateriaPrima,
    secoes: [
      secao("Cores disponíveis", [
        "Amarelo",
        "Azul em pasta",
        "Azul em pó",
        "Verde em pó",
        "Violeta",
      ]),
      secao("Aplicações comuns", [
        "Detergentes, desinfetantes, multiusos, amaciantes e outras bases aquosas compatíveis.",
        "Padronização visual de lotes e criação de identidade de produto.",
        "Ajustes finos de tonalidade conforme transparência, fragrância e proposta comercial da fórmula.",
      ]),
      secao("Informações técnicas", [
        "Corantes em pó costumam oferecer alta concentração e normalmente pedem pré-dissolução para melhorar homogeneidade.",
        "Corantes em pasta facilitam dosagem gradual e reduzem poeira no processo produtivo.",
        "A estabilidade final varia conforme sistema aniônico, catiônico ou oxidante, além da exposição à luz e do pH da formulação.",
      ]),
      secao("Cuidados importantes", [
        "Corantes para fórmulas com cloro ativo ou peróxido exigem seleção específica de estabilidade.",
        "Adicionar aos poucos ajuda a evitar sobrecoloração e facilita correção de lote.",
        "Uso técnico/industrial. Dosagem, compatibilidade e processo devem seguir a FISPQ e a formulação adotada pelo cliente.",
      ]),
    ],
  },
  criarMateriaPrima({
    chave: "espessante-em-po",
    nome: "Espessante em Pó",
    descricao:
      "Espessante sintético ou celulósico em pó, usado para elevar viscosidade, melhorar suspensão e dar corpo a detergentes e limpadores.",
    destaques: [
      "Ajuda no controle reológico da fórmula.",
      "Pode melhorar suspensão de partículas e estabilidade visual.",
      "É aplicável a detergentes, lava-roupas, multiuso e shampoos automotivos.",
    ],
    aplicacoes: [
      "Detergentes, sabões líquidos, saneantes e limpadores viscosos.",
      "Formulações que precisam de corpo, aderência ou melhor sensação de rendimento.",
      "Sistemas em que a estabilidade depende de boa hidratação do espessante.",
    ],
    informacoes: [
      "A base química varia conforme a linha comercial; copolímeros acrílicos e derivados de celulose são exemplos comuns.",
      "O desempenho depende de pH, eletrólitos, solventes e pacote tensoativo.",
      "Produtos desse grupo costumam exigir boa dispersão para evitar grumos e perda de viscosidade.",
    ],
    cuidados: [
      "O ponto de adição e a sequência do processo influenciam muito o resultado final.",
    ],
  }),
  criarMateriaPrima({
    chave: "hidroxido-de-sodio-liquido-50",
    nome: "Hidróxido de Sódio Líquido 50% (Soda Cáustica)",
    descricao:
      "Álcali forte em solução aquosa, usado para neutralização, saponificação, correção de pH e fabricação de sabões e detergentes.",
    destaques: [
      "Base clássica para neutralizar LABSA e outros ácidos.",
      "Tem forte ação alcalinizante.",
      "É amplamente usada em sabões, saneantes e diversos processos industriais.",
    ],
    aplicacoes: [
      "Neutralização de ácido sulfônico e ajuste de pH.",
      "Sabões, detergentes alcalinos e formulações desengraxantes.",
      "Tratamento de efluentes, limpeza industrial e processos químicos diversos.",
    ],
    informacoes: [
      "A solução comercial 50% normalmente trabalha próxima de 49 a 51% de NaOH.",
      "É um líquido incolor a levemente opalescente e altamente alcalino.",
      "Também é conhecida como soda cáustica líquida de membrana em muitas especificações.",
    ],
    cuidados: [
      "Produto fortemente corrosivo; a adição deve ser lenta e com controle térmico.",
      "Contato com ácidos libera calor e exige procedimento de segurança.",
    ],
  }),
  criarMateriaPrima({
    chave: "hipoclorito-de-sodio-12",
    nome: "Hipoclorito de Sódio 12% (Cloro)",
    descricao:
      "Solução oxidante com cerca de 10 a 12% de cloro ativo, muito usada como base para água sanitária, branqueamento e sanitização.",
    destaques: [
      "Ação oxidante, branqueante e sanitizante.",
      "É matéria-prima clássica para água sanitária e soluções cloradas.",
      "Perde teor com calor, luz e tempo de armazenagem.",
    ],
    aplicacoes: [
      "Produção de água sanitária e saneantes clorados.",
      "Branqueamento, sanitização e tratamento de água ou efluentes.",
      "Processos que exigem ação oxidante rápida em meio alcalino.",
    ],
    informacoes: [
      "Comercialmente é fornecido como solução aquosa alcalina de cor amarelo-clara e odor característico de cloro.",
      "A estabilidade depende muito da temperatura, da luz e da pureza do sistema.",
      "Em especificações técnicas, o teor costuma ser expresso como cloro ativo disponível.",
    ],
    cuidados: [
      "Nunca deve ser misturado com ácidos, amônia ou redutores.",
      "Precisa ser armazenado ao abrigo de luz e calor para preservar teor ativo.",
    ],
  }),
  criarMateriaPrima({
    chave: "lauril-eter-sulfato-de-sodio-27",
    nome: "Lauril Éter Sulfato de Sódio 27%",
    descricao:
      "Tensoativo aniônico líquido de uso amplo em detergentes, limpa-louças, lava-roupas e limpadores, conhecido por espuma alta e boa detergência.",
    destaques: [
      "Boa solubilidade em água.",
      "Alto poder espumante.",
      "Pode espessar na presença de eletrólitos em sistemas adequados.",
    ],
    aplicacoes: [
      "Detergentes lava-louças, limpadores e shampoos automotivos.",
      "Lava-roupas líquidos, sabonetes e produtos de higiene compatíveis.",
      "Fórmulas em que se busca manuseio mais simples de um tensoativo aniônico líquido.",
    ],
    informacoes: [
      "A concentração de 27% oferece fluidez maior e facilidade de dosagem na produção.",
      "Funciona bem em sinergia com ácido sulfônico neutralizado e coadjuvantes de espuma.",
      "É um dos tensoativos mais tradicionais do mercado por combinar desempenho e custo competitivo.",
    ],
    cuidados: [
      "Viscosidade e estabilidade variam com sal, solvente, pH e presença de hidrotropos.",
    ],
  }),
  criarMateriaPrima({
    chave: "lauril-eter-sulfato-de-sodio-70",
    nome: "Lauril Éter Sulfato de Sódio 70%",
    descricao:
      "Versão concentrada do lauril éter sulfato de sódio, indicada para fórmulas com maior matéria ativa e excelente desempenho de espuma e detergência.",
    destaques: [
      "Maior concentração de matéria ativa que a versão 27%.",
      "Excelente detergência e alto poder espumante.",
      "Muito usada em detergentes, shampoos e limpadores concentrados.",
    ],
    aplicacoes: [
      "Formulações líquidas concentradas para limpeza ou higiene.",
      "Detergentes, lava-roupas, sabonetes líquidos e shampoos compatíveis.",
      "Bases industriais que pedem maior ativo com menor carga de água.",
    ],
    informacoes: [
      "Costuma ser fornecido como pasta ou gel viscoso.",
      "É reconhecido como tensoativo aniônico, umectante, limpador e emulsificante.",
      "Pode atuar em sinergia com ácido sulfônico neutralizado para reforçar espuma e espessamento.",
    ],
    cuidados: [
      "A incorporação deve ser bem conduzida para evitar grumos e aprisionamento de ar.",
    ],
  }),
  criarMateriaPrima({
    chave: "oleo-de-eucalipto",
    nome: "Óleo de Eucalipto",
    descricao:
      "Óleo essencial ou fração aromática de eucalipto, usado para perfumação, sensação de frescor e composição de limpadores e aromatizantes.",
    destaques: [
      "Aroma herbal fresco e marcante.",
      "Ajuda a construir identidade olfativa em linhas de limpeza.",
      "Pode ser incorporado a limpadores, desodorizantes e aromatizantes compatíveis.",
    ],
    aplicacoes: [
      "Aromatizadores, desodorizantes e limpadores perfumados.",
      "Linhas de limpeza com perfil olfativo fresco e herbal.",
      "Essências e composições fragrantes para uso doméstico ou institucional.",
    ],
    informacoes: [
      "Óleos de eucalipto normalmente são obtidos por destilação a vapor das folhas.",
      "O perfil olfativo pode variar conforme a espécie, como globulus, citriodora ou radiata.",
      "Muitos produtos são ricos em 1,8-cineol, componente clássico do aroma de eucalipto.",
    ],
    cuidados: [
      "Por ser fase oleosa, precisa de solubilização adequada em bases aquosas.",
    ],
  }),
  criarMateriaPrima({
    chave: "oleo-de-pinho",
    nome: "Óleo de Pinho",
    descricao:
      "Mistura terpênica usada em desinfetantes e limpadores perfumados, valorizada pelo aroma característico e pela tradição em saneantes domésticos.",
    destaques: [
      "Aroma clássico associado a limpeza e frescor.",
      "Muito usado em desinfetantes à base de óleo de pinho.",
      "Atua como componente aromático e desodorizante em várias formulações.",
    ],
    aplicacoes: [
      "Desinfetantes, multiusos e limpadores perfumados.",
      "Linhas institucionais, domésticas e industriais de higiene e limpeza.",
      "Sistemas em que se deseja efeito blooming e perfume tradicional de pinho.",
    ],
    informacoes: [
      "Óleos comerciais podem ser padronizados em diferentes teores conforme a especificação do fornecedor.",
      "É uma matéria-prima clássica em saneantes transparentes ou levemente opalescentes com solubilizante adequado.",
      "No mercado técnico, o óleo de pinho costuma ser associado a propriedades desodorizantes e ao aroma fresco característico.",
    ],
    cuidados: [
      "A estabilidade em água depende do sistema de solventes, tensoativos e hidrotropos usado na fórmula.",
    ],
  }),
  criarMateriaPrima({
    chave: "peroxido-de-hidrogenio-50",
    nome: "Peróxido Hidrogênio 50%",
    descricao:
      "Oxidante forte usado em alvejamento, oxidação química, clarificação e tratamento de efluentes em processos industriais.",
    destaques: [
      "Libera oxigênio ativo.",
      "É muito usado em branqueamento e processos oxidativos.",
      "A versão 50% é típica de aplicações técnicas e industriais.",
    ],
    aplicacoes: [
      "Branqueamento de fibras, celulose e processos têxteis.",
      "Oxidação química, detoxificação e tratamento de efluentes.",
      "Formulações técnicas que utilizam peróxidos como agente oxidante.",
    ],
    informacoes: [
      "Decompõe-se em água e oxigênio quando catalisado ou contaminado.",
      "Muitas linhas industriais usam estabilização inorgânica para aumentar segurança e vida útil.",
      "É fornecido para aplicações em papel e celulose, têxtil, eletrônica e indústria química.",
    ],
    cuidados: [
      "Oxidante forte; deve ficar afastado de contaminantes, metais, materiais orgânicos e redutores.",
      "A embalagem e o tanque precisam ser compatíveis com peróxido de alta concentração.",
    ],
  }),
  criarMateriaPrima({
    chave: "removedor-comum",
    nome: "Removedor Comum",
    descricao:
      "Removedor solvente de uso geral, geralmente formulado com hidrocarbonetos e fragrância, indicado para dissolver gordura pesada, ceras, colas e sujeiras aderidas.",
    destaques: [
      "Ação solvente rápida para limpeza pesada.",
      "Muito usado em desengraxe e remoção de resíduos difíceis.",
      "A aplicação correta depende do tipo de superfície e acabamento.",
    ],
    aplicacoes: [
      "Limpeza de exaustores, azulejos, inox e superfícies com gordura acumulada.",
      "Remoção de ceras, resíduos adesivos e sujeira aderida em áreas compatíveis.",
      "Linhas de limpeza pesada e manutenção técnica.",
    ],
    informacoes: [
      "Na categoria comercial chamada de removedor, hidrocarbonetos derivados de petróleo são comuns na composição.",
      "A composição exata pode variar entre linhas de baixo odor, mais secas ou mais agressivas.",
      "É uma matéria-prima tradicional em desengraxantes e removedores domésticos ou profissionais.",
    ],
    cuidados: [
      "Pode atacar plásticos, pinturas, vernizes ou borrachas sensíveis; teste prévio é importante.",
      "Muitas formulações dessa categoria são inflamáveis e pedem ventilação adequada.",
    ],
  }),
];
