const categoriasProduto = [
  "Detergentes",
  "Linha Cloro",
  "Limpeza pesada",
  "Desinfetantes",
  "Lavanderia",
  "Linha automotiva",
  "Revenda",
  "Para superficies",
  "Uso profissional",
] as const;

export type CategoriaProduto = (typeof categoriasProduto)[number];
export type ProdutoMarketplaceNome = "shopee" | "mercadoLivre";
export type ProdutoMarketplaceValue = true | string;
export type ProdutoMarketplaces = Partial<
  Record<ProdutoMarketplaceNome, ProdutoMarketplaceValue>
>;

export type Produto = {
  chave: string;
  nome: string;
  imagem: string;
  categoria: CategoriaProduto;
  descricao: string;
  destaques: string[];
  marketplaces?: ProdutoMarketplaces;
};

type ProdutoMetadata = Omit<Produto, "chave" | "imagem" | "destaques">;

const imagensProdutos = import.meta.glob(
  "../../assets/imgs/produtos-imgs/*.png",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

// Controle os botoes de marketplace por produto aqui:
// - `marketplaces: marketplacesPadrao` mostra Shopee e Mercado Livre.
// - `marketplaces: { shopee: true }` mostra so Shopee.
// - `marketplaces: { mercadoLivre: "https://..." }` mostra Mercado Livre com link real.
// - Remova `marketplaces` do produto para esconder todos os botoes.

const produtosMetadata: Record<string, ProdutoMetadata> = {
  "agua-sanitaria-5l-2l": {
    nome: "Agua sanitaria Lune Blanche",
    categoria: "Linha Cloro",
    descricao:
      "Disponivel em 5L e 2L, foi pensada para limpeza, desinfeccao e branqueamento de roupas e superficies lavaveis.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58207015602/",
    },
  },
  alvejante: {
    nome: "Alvejante sem cloro Lune Blanche",
    categoria: "Lavanderia",
    descricao:
      "Alvejante sem cloro desenvolvido para auxiliar na remocao de manchas e no cuidado com tecidos do dia a dia.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/22599424135/",
    },
  },
  amaciante: {
    nome: "Amaciante azul Lune Blanche",
    categoria: "Lavanderia",
    descricao:
      "Amaciante liquido com foco em maciez e perfume nas roupas, ideal para complementar a rotina de lavagem.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58257010062/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/amaciante-5l--roupas-macias-e-cheirosas/up/MLBU3730619540?pdp_filters=item_id:MLB6164084222",
    },
  },
  "anti-mofo": {
    nome: "Antimofo antitraca Sampa Clean",
    categoria: "Revenda",
    descricao:
      "Cartela antimofo antitraca indicada para guarda-roupas, gavetas e maleiros, ajudando na protecao contra mofo e odores.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/22794904478/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/antimofo-e-antitraca-sampa-clean-cartela-com-6-unidades/up/MLBU3741586449?pdp_filters=item_id:MLB6187924266",
    },
  },
  bombona: {
    nome: "Bombona 20L azul",
    categoria: "Uso profissional",
    descricao:
      "Embalagem de 20 litros voltada para envase, armazenamento e transporte de produtos em operacoes de maior volume.",
  },
  bombona1: {
    nome: "Bombona 20L profissional",
    categoria: "Uso profissional",
    descricao:
      "Opcao de bombona para uso profissional, pensada para reposicao, logistica e manuseio de produtos em escala maior.",
  },
  branquinho: {
    nome: "Branquinho Lune Blanche",
    categoria: "Limpeza pesada",
    descricao:
      "Sabao para limpeza pesada desenvolvido para atuar em sujeiras mais intensas e apoiar a higienizacao de diferentes ambientes.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/23194876051/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-uso-geral-multiuso-5l-para-limpeza-domestica/up/MLBU3723758625?pdp_filters=item_id:MLB4418935873",
    },
  },
  "casa-limpa": {
    nome: "Desinfetante Casa Limpa Lune Blanche",
    categoria: "Desinfetantes",
    descricao:
      "Versao Casa Limpa da linha de desinfetantes, criada para limpeza de ambientes com perfume marcante e uso recorrente.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  },
  cloro: {
    nome: "Cloro liquido 6% Lune Blanche",
    categoria: "Linha Cloro",
    descricao:
      "Cloro liquido para higienizacao de pisos, banheiros e areas lavaveis, com foco em limpeza pesada e desinfeccao.",
  },
  "cloro-gel": {
    nome: "Cloro gel Lune Blanche",
    categoria: "Linha Cloro",
    descricao:
      "Cloro em gel com aplicacao pratica em superficies onde a formula mais encorpada ajuda no uso e no espalhamento.",
    marketplaces: { shopee: "https://shopee.com.br/product/1738012223/58207010745/" },
  },
  cristal: {
    nome: "Detergente cristal Lune Blanche",
    categoria: "Detergentes",
    descricao:
      "Detergente cristal pensado para lavagem de loucas, utensilios e limpeza leve com rendimento no uso diario.",
  },
  esfregao: {
    nome: "Esfregao Esfrega Forte",
    categoria: "Revenda",
    descricao:
      "Esfregao para apoio em limpezas mais pesadas, indicado para pisos e superficies que exigem maior atrito na limpeza.",
  },
  "esponja-mu": {
    nome: "Esponja multiuso dupla face",
    categoria: "Revenda",
    descricao:
      "Esponja multiuso dupla face indicada para limpeza de loucas, utensilios e superficies com uso pratico no dia a dia.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58257434099/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/esponja-dupla-face-multiuso-12-unid-superpro-betamin/up/MLBU3741326811?pdp_filters=item_id:MLB6187915336",
    },
  },
  "flores-do-campo": {
    nome: "Desinfetante Flores do Campo Lune Blanche",
    categoria: "Desinfetantes",
    descricao:
      "Desinfetante com fragrancia Flores do Campo, indicado para perfumar e higienizar ambientes internos.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  },
  "lava-autos": {
    nome: "Lava autos Lune Blanche",
    categoria: "Linha automotiva",
    descricao:
      "Produto automotivo voltado para lavagem externa e limpeza da lataria, ajudando a remover a sujeira do uso diario.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58257011501/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/shampoo-automotivo-lava-autos-5l--limpa-e-da-brilho/up/MLBU3721335283",
    },
  },
  lavanda: {
    nome: "Desinfetante Lavanda Lune Blanche",
    categoria: "Desinfetantes",
    descricao:
      "Desinfetante com fragrancia Lavanda pensado para limpeza e perfumacao de banheiros, pisos e ambientes internos.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  },
  "limpa-azuleijo": {
    nome: "Rodo limpa azulejo",
    categoria: "Revenda",
    descricao:
      "Acessorio indicado para apoiar a limpeza de azulejos e revestimentos, facilitando o trabalho em paredes e pisos lavaveis.",
  },
  "limpa-facil": {
    nome: "Vassoura Limpa Facil",
    categoria: "Revenda",
    descricao:
      "Vassoura pensada para a varricao de ambientes internos, com cerdas voltadas para praticidade na limpeza cotidiana.",
  },
  "limpa-vidros-5l-2l": {
    nome: "Limpa vidros Lune Blanche",
    categoria: "Para superficies",
    descricao:
      "Limpador para vidros desenvolvido para auxiliar na limpeza de janelas, espelhos e superficies com acabamento transparente.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58207015602/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-multiuso-para-vidros-janelas-e-espelhos/p/MLB64882702?pdp_filters=item_id:MLB6194489088",
    },
  },
  "limpadores-perfumados": {
    nome: "Limpadores perfumados concentrados 1/25",
    categoria: "Para superficies",
    descricao:
      "Linha de limpadores concentrados com rendimento de diluicao 1 para 25, voltada para perfumacao e limpeza de ambientes.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/23699409280/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-perfumado-concentrado-1l--limpeza-geral/up/MLBU3860249052?pdp_filters=item_id:MLB6487178814",
    },
  },
  "lp-alcool": {
    nome: "Limpador perfumado base alcool Lune Blanche",
    categoria: "Para superficies",
    descricao:
      "Limpador perfumado com base alcool, indicado para manutencao de superficies e limpeza rapida no uso diario.",
  },
  "lustra-moveis": {
    nome: "Lustra moveis Lune Blanche",
    categoria: "Para superficies",
    descricao:
      "Produto indicado para limpeza e brilho de moveis, ajudando no acabamento de superficies de madeira e similares.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58207020924/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/lustra-moveis-500ml--realca-o-brilho-dos-moveis/up/MLBU3724653579?pdp_filters=item_id:MLB4419940939",
    },
  },
  marine: {
    nome: "Desinfetante Marine Lune Blanche",
    categoria: "Desinfetantes",
    descricao:
      "Versao Marine da linha de desinfetantes, criada para perfumar e higienizar ambientes com fragrancia refrescante.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  },
  "multi-uso": {
    nome: "Multiuso incolor Lune Blanche",
    categoria: "Limpeza pesada",
    descricao:
      "Multiuso incolor pensado para limpeza geral de varias superficies, apoiando a rotina de manutencao da casa ou do trabalho.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58257018984/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-multiuso-5l-limpa-diversas-superficies/p/MLB64420230?pdp_filters=item_id:MLB4426707071",
    },
  },
  naftalina: {
    nome: "Naftalina cartela Sampa Clean",
    categoria: "Revenda",
    descricao:
      "Cartela de naftalina para uso em armarios, gavetas e espacos fechados, ajudando na protecao e no controle de odores.",
    marketplaces: {shopee: "https://shopee.com.br/product/1738012223/58257018984/"},
  },
  neutro: {
    nome: "Detergente neutro Lune Blanche",
    categoria: "Detergentes",
    descricao:
      "Detergente neutro voltado para limpeza diaria de loucas, panelas e utensilios com uso frequente na cozinha.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/22594898238/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/detergente-neutro-5l--remove-gordura-e-nao-agride-as-maos/up/MLBU3713564825?pdp_filters=item_id:MLB4411213333",
    },
  },
  novica: {
    nome: "Vassoura Novica",
    categoria: "Revenda",
    descricao:
      "Vassoura para varricao diaria de ambientes internos, indicada para manutencao de pisos lisos e rotina de limpeza leve.",
  },
  "odorizante-para-ambiente": {
    nome: "Odorizante para ambiente Sampa Clean",
    categoria: "Revenda",
    descricao:
      "Odorizante indicado para perfumar ambientes internos e complementar a sensacao de limpeza em diferentes espacos.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/23994885772/",
    },
  },
  pa: {
    nome: "Pa de lixo",
    categoria: "Revenda",
    descricao:
      "Pa para recolhimento de residuos durante a varricao, com uso pratico em limpezas residenciais e profissionais.",
  },
  "pasta-de-brilho": {
    nome: "Pasta de brilho Fab Limp",
    categoria: "Revenda",
    descricao:
      "Pasta indicada para limpeza e brilho de superficies e utensilios, ajudando no acabamento de pecas metalicas.",
  },
  "pedra-sanitaria": {
    nome: "Pedra sanitaria Sampa Clean",
    categoria: "Revenda",
    descricao:
      "Pedra sanitaria para uso em vasos sanitarios, contribuindo para perfume e manutencao da limpeza no banheiro.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58207430695/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/pedra-sanitaria-sampa-clean-para-seu-banheiro--12-unidades/up/MLBU3739494838?pdp_filters=item_id:MLB4424641647",
    },
  },
  percarbonato: {
    nome: "Percarbonato de sodio Branquinho",
    categoria: "Lavanderia",
    descricao:
      "Percarbonato de sodio pensado para potencializar a lavagem e apoiar o cuidado com roupas claras e coloridas.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58206740631/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/tira-manchas-roupas-brancas-coloridas-clareia-branco-1-kg/p/MLB64291832?pdp_filters=item_id:MLB4420979863",
    },
  },
  "pop-madeira": {
    nome: "Vassoura pop madeira",
    categoria: "Revenda",
    descricao:
      "Vassoura com base em madeira indicada para varricao de pisos secos e limpeza diaria de areas internas ou externas.",
  },
  pretinho: {
    nome: "Limpa pneu gel Lune Blanche",
    categoria: "Linha automotiva",
    descricao:
      "Gel para limpeza e acabamento de pneus, pensado para renovar o aspecto visual e destacar o brilho da borracha.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58256857657/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpa-pneu-gel-automotivo--brilho-e-conservacao/up/MLBU3719225425",
    },
  },
  "querosene-5l-2l": {
    nome: "Sabao querosene Branquinho",
    categoria: "Limpeza pesada",
    descricao:
      "Sabao querosene voltado para limpeza pesada e remocao de sujeiras mais impregnadas em diferentes rotinas de uso.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58206736966/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/sabo-querosene-limpeza-eficiente-para-os-pisos-5l/p/MLB64888889?pdp_filters=item_id:MLB6194625792",
    },
  },
  "rodo-30": {
    nome: "Rodo 30 cm",
    categoria: "Revenda",
    descricao:
      "Rodo de 30 cm indicado para puxar agua e apoiar a secagem de pisos em ambientes menores.",
  },
  "rodo-40": {
    nome: "Rodo 40 cm",
    categoria: "Revenda",
    descricao:
      "Rodo de 40 cm pensado para limpeza e secagem de pisos com area intermediaria e uso frequente.",
  },
  "rodo-60": {
    nome: "Rodo 60 cm",
    categoria: "Revenda",
    descricao:
      "Rodo de 60 cm indicado para puxar agua em areas maiores, acelerando a manutencao de pisos amplos.",
  },
  "sabao-azul": {
    nome: "Lava roupas azul liquido Lune Blanche",
    categoria: "Lavanderia",
    descricao:
      "Lava roupas liquido azul desenvolvido para a rotina de lavagem com foco em limpeza das pecas e perfume nas roupas.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58256794837/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/sabo-azul-liquido-para-roupas-5l-lava-bem-e-rende-muito/p/MLB64886724?pdp_filters=item_id:MLB4440317849",
    },
  },
  "sabao-coco": {
    nome: "Lava roupas coco liquido Lune Blanche",
    categoria: "Lavanderia",
    descricao:
      "Lava roupas liquido de coco pensado para a limpeza diaria das roupas com perfil de uso pratico e rendimento.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58256794837/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/sabo-coco-liquido-para-roupas-5l-roupas-limpas-e-cheirosas/p/MLB64880197?pdp_filters=item_id:MLB4439929023",
    },
  },
  "silicone-g-p": {
    nome: "Silicone gel Lune Blanche",
    categoria: "Linha automotiva",
    descricao:
      "Silicone gel para acabamento automotivo, indicado para paines, plasticos e outras partes que pedem brilho visual.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/23599379861/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/silicone-automotivo--brilho-intenso-e-protecao-do-painel/up/MLBU3727901640",
    },
  },
  talco: {
    nome: "Desinfetante Talco Lune Blanche",
    categoria: "Desinfetantes",
    descricao:
      "Desinfetante com fragrancia Talco criado para higienizacao de ambientes e perfumacao suave dos espacos.",
    marketplaces: {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  },
  "varre-tudo": {
    nome: "Vassoura Varre Tudo",
    categoria: "Revenda",
    descricao:
      "Vassoura indicada para varricao de uso geral, com proposta de praticidade para a limpeza de ambientes internos.",
  },
  "vassoura-pelo": {
    nome: "Vassoura de pelo",
    categoria: "Revenda",
    descricao:
      "Vassoura de pelo pensada para limpeza mais delicada e para recolher poeira fina em pisos lisos.",
  },
};

const destaquesPorProduto: Record<string, string[]> = {
  "agua-sanitaria-5l-2l": [
    "Disponivel em embalagens de 5L e 2L para diferentes rotinas de compra.",
    "Indicado para limpeza, desinfeccao e branqueamento de areas lavaveis.",
  ],
  alvejante: [
    "Formula sem cloro para apoiar o cuidado com tecidos.",
    "Ajuda na remocao de manchas sem usar cloro na composicao.",
  ],
  amaciante: [
    "Pensado para maciez e perfume nas roupas.",
    "Complementa a etapa final da lavagem com uso liquido.",
  ],
  "anti-mofo": [
    "Cartela pronta para guarda-roupas, gavetas e maleiros.",
    "Ajuda no controle de mofo, tracas e odores em espacos fechados.",
  ],
  bombona: [
    "Capacidade de 20 litros para envase e armazenamento.",
    "Indicada para operacoes com maior volume de produto.",
  ],
  bombona1: [
    "Estrutura pensada para reposicao e logistica.",
    "Boa opcao para uso profissional e transporte.",
  ],
  branquinho: [
    "Sabao voltado para limpeza pesada do dia a dia.",
    "Apoia a remocao de sujeiras mais intensas.",
  ],
  "casa-limpa": [
    "Fragrancia Casa Limpa para perfumacao do ambiente.",
    "Uso recorrente em pisos, banheiros e areas internas.",
  ],
  cloro: [
    "Cloro liquido 6% para higienizacao de areas lavaveis.",
    "Indicado para limpeza pesada e desinfeccao.",
  ],
  "cloro-gel": [
    "Textura em gel para aplicacao mais controlada.",
    "Boa aderencia em superficies que pedem limpeza localizada.",
  ],
  cristal: [
    "Detergente cristal para loucas e utensilios.",
    "Uso diario com limpeza leve e bom rendimento.",
  ],
  esfregao: [
    "Acessorio indicado para limpezas com maior atrito.",
    "Boa opcao para pisos e superficies mais exigentes.",
  ],
  "esponja-mu": [
    "Esponja dupla face para limpeza geral.",
    "Indicada para loucas, utensilios e superficies diversas.",
  ],
  "flores-do-campo": [
    "Fragrancia Flores do Campo para perfumar os ambientes.",
    "Indicado para higienizacao de areas internas.",
  ],
  "lava-autos": [
    "Voltado para lavagem externa e limpeza da lataria.",
    "Ajuda a remover a sujeira do uso diario do veiculo.",
  ],
  lavanda: [
    "Fragrancia Lavanda para limpeza e perfumacao.",
    "Uso em banheiros, pisos e ambientes internos.",
  ],
  "limpa-azuleijo": [
    "Apoia a limpeza de azulejos e revestimentos.",
    "Facilita a manutencao de paredes e pisos lavaveis.",
  ],
  "limpa-facil": [
    "Vassoura pensada para varricao de ambientes internos.",
    "Cerdas voltadas para praticidade na limpeza cotidiana.",
  ],
  "limpa-vidros-5l-2l": [
    "Pensado para janelas, espelhos e vidros.",
    "Ajuda no acabamento transparente das superficies.",
  ],
  "limpadores-perfumados": [
    "Linha concentrada com diluicao de 1 para 25.",
    "Voltada para perfumacao e limpeza de ambientes.",
  ],
  "lp-alcool": [
    "Base alcool para limpeza rapida de superficies.",
    "Indicado para manutencao diaria de areas lavaveis.",
  ],
  "lustra-moveis": [
    "Ajuda no brilho e acabamento de moveis.",
    "Indicado para superficies de madeira e similares.",
  ],
  marine: [
    "Fragrancia Marine com perfil refrescante.",
    "Indicado para limpeza e perfumacao de ambientes internos.",
  ],
  "multi-uso": [
    "Multiuso incolor para limpeza geral.",
    "Apoia a manutencao de varias superficies no dia a dia.",
  ],
  naftalina: [
    "Cartela para armarios, gavetas e espacos fechados.",
    "Ajuda no controle de odores e protecao das roupas.",
  ],
  neutro: [
    "Detergente neutro para loucas e panelas.",
    "Uso frequente na rotina diaria da cozinha.",
  ],
  novica: [
    "Vassoura para varricao diaria de pisos lisos.",
    "Indicada para limpeza leve de ambientes internos.",
  ],
  "odorizante-para-ambiente": [
    "Pensado para perfumar ambientes internos.",
    "Complementa a sensacao de limpeza do espaco.",
  ],
  pa: [
    "Facilita o recolhimento de residuos na varricao.",
    "Uso pratico em limpezas residenciais e profissionais.",
  ],
  "pasta-de-brilho": [
    "Indicada para brilho e acabamento de pecas.",
    "Boa para limpeza de superficies e utensilios.",
  ],
  "pedra-sanitaria": [
    "Uso em vasos sanitarios e banheiros.",
    "Ajuda na perfumacao e manutencao da limpeza.",
  ],
  percarbonato: [
    "Potencializa a lavagem de roupas claras e coloridas.",
    "Boa opcao para reforco na etapa de lavanderia.",
  ],
  "pop-madeira": [
    "Base em madeira para varricao de pisos secos.",
    "Indicada para areas internas ou externas.",
  ],
  pretinho: [
    "Gel para limpeza e acabamento de pneus.",
    "Ajuda a renovar o aspecto visual da borracha.",
  ],
  "querosene-5l-2l": [
    "Sabao querosene voltado para limpeza pesada.",
    "Indicado para sujeiras mais impregnadas.",
  ],
  "rodo-30": [
    "Largura de 30 cm para areas menores.",
    "Apoia a secagem e a retirada de agua do piso.",
  ],
  "rodo-40": [
    "Largura de 40 cm para uso frequente.",
    "Indicado para limpeza e secagem de pisos.",
  ],
  "rodo-60": [
    "Largura de 60 cm para areas maiores.",
    "Ajuda a acelerar a manutencao de pisos amplos.",
  ],
  "sabao-azul": [
    "Lava roupas liquido azul para limpeza das pecas.",
    "Foco em lavagem eficiente e perfume nas roupas.",
  ],
  "sabao-coco": [
    "Lava roupas liquido de coco para uso diario.",
    "Pensado para a rotina pratica da lavanderia.",
  ],
  "silicone-g-p": [
    "Silicone gel para paines e partes plasticas.",
    "Ajuda no acabamento visual automotivo.",
  ],
  talco: [
    "Fragrancia Talco com perfil suave.",
    "Indicado para higienizacao e perfumacao dos ambientes.",
  ],
  "varre-tudo": [
    "Vassoura para varricao de uso geral.",
    "Pensada para praticidade na limpeza diaria.",
  ],
  "vassoura-pelo": [
    "Indicada para poeira fina e pisos lisos.",
    "Boa para limpeza mais delicada em ambientes internos.",
  ],
};

const ordemCategorias = new Map(
  categoriasProduto.map((categoria, index) => [categoria, index]),
);

const formatarChaveProduto = (caminhoArquivo: string) =>
  caminhoArquivo
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") ?? caminhoArquivo;

const formatarNomePadrao = (chaveProduto: string) =>
  chaveProduto
    .split("-")
    .map((parte) => {
      if (parte.length <= 2 || /\d/.test(parte)) {
        return parte.toUpperCase();
      }

      return parte.charAt(0).toUpperCase() + parte.slice(1);
    })
    .join(" ");

export const produtos: Produto[] = Object.entries(imagensProdutos)
  .map(([caminhoArquivo, imagem]) => {
    const chave = formatarChaveProduto(caminhoArquivo);
    const metadata = produtosMetadata[chave];

    return {
      chave,
      imagem,
      nome: metadata?.nome ?? formatarNomePadrao(chave),
      categoria: metadata?.categoria ?? "Revenda",
      descricao:
        metadata?.descricao ??
        "Informacoes detalhadas deste produto ainda nao foram preenchidas.",
      destaques: destaquesPorProduto[chave] ?? [],
      marketplaces: metadata?.marketplaces,
    };
  })
  .sort((produtoA, produtoB) => {
    const ordemA =
      ordemCategorias.get(produtoA.categoria) ?? Number.MAX_SAFE_INTEGER;
    const ordemB =
      ordemCategorias.get(produtoB.categoria) ?? Number.MAX_SAFE_INTEGER;

    if (ordemA !== ordemB) {
      return ordemA - ordemB;
    }

    return produtoA.nome.localeCompare(produtoB.nome, "pt-BR");
  });

export const getProdutoByChave = (chave?: string) =>
  produtos.find((produto) => produto.chave === chave);

export const getProdutoPath = (chave: string) => `/nossos-produtos/${chave}`;

export { categoriasProduto };
