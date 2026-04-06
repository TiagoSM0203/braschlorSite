const categoriasProduto = [
  "Detergentes",
  "Linha Cloro",
  "Limpeza pesada",
  "Desinfetantes",
  "Lavanderia",
  "Linha automotiva",
  "Revenda",
  "Para superfícies",
  "Uso profissional",
] as const;

export type CategoriaProduto = (typeof categoriasProduto)[number];
export type ProdutoMarketplaceNome = "shopee" | "mercadoLivre";
export type ProdutoMarketplaceValue = true | string;
export type ProdutoMarketplaces = Partial<
  Record<ProdutoMarketplaceNome, ProdutoMarketplaceValue>
>;

export type ProdutoInfoSection = {
  titulo: string;
  itens: string[];
};

export type Produto = {
  chave: string;
  nome: string;
  imagem: string;
  categoria: CategoriaProduto;
  descricao: string;
  destaques: string[];
  secoes: ProdutoInfoSection[];
  marketplaces?: ProdutoMarketplaces;
};

type ProdutoMetadata = Omit<Produto, "chave" | "imagem">;

const imagensProdutos = import.meta.glob(
  "../../assets/imgs/produtos-imgs/*.png",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const secao = (titulo: string, itens: string[]): ProdutoInfoSection => ({
  titulo,
  itens,
});

const criarProduto = (
  nome: string,
  categoria: CategoriaProduto,
  descricao: string,
  destaques: string[],
  indicadoPara: string[],
  informacoes: string[] = [],
  marketplaces?: ProdutoMarketplaces,
): ProdutoMetadata => ({
  nome,
  categoria,
  descricao,
  destaques,
  secoes: [
    secao("Indicado para", indicadoPara),
    ...(informacoes.length > 0 ? [secao("Informações gerais", informacoes)] : []),
  ],
  marketplaces,
});

const criarProdutoProfissional20L = (
  nome: string,
  descricao: string,
  destaques: string[],
  indicadoPara: string[],
  informacoes: string[] = [],
): ProdutoMetadata =>
  criarProduto(
    `${nome} 20 L profissional`,
    "Uso profissional",
    `${descricao} Esta versão em bombona de 20 L foi pensada para uso profissional, reposição e operações de maior volume.`,
    [
      ...destaques,
      "Bombona de 20 L para rotinas profissionais.",
      "Produto exclusivamente para uso profissional.",
    ],
    indicadoPara,
    [
      ...informacoes,
      "Versão em bombona de 20 L para operações de maior escala.",
      "Indicado exclusivamente para uso profissional e reposição em maior volume.",
    ],
  );

const criarProdutoBaseConcentrado = (
  nome: string,
  categoria: CategoriaProduto,
  descricao: string,
  destaques: string[],
  indicadoPara: string[],
  informacoes: string[] = [],
): ProdutoMetadata =>
  criarProduto(
    nome,
    categoria,
    descricao,
    destaques,
    indicadoPara,
    informacoes,
  );

const produtosOcultos = new Set(["bombona", "bombona1"]);

const produtosMetadata: Record<string, ProdutoMetadata> = {
  "agua-sanitaria-5l-2l": criarProduto(
    "Água sanitária Lune Blanche",
    "Linha Cloro",
    "Água sanitária indicada para higienização de superfícies laváveis e para o branqueamento de roupas, disponível nas versões de 2 L e 5 L.",
    [
      "Disponível em embalagens de 2 L e 5 L.",
      "Apoia a limpeza de banheiros, quintais e áreas laváveis.",
      "Pode ser usada no branqueamento de roupas conforme o rótulo.",
    ],
    [
      "Pisos, banheiros, quintais e superfícies laváveis.",
      "Branqueamento de roupas brancas, conforme o modo de uso do rótulo.",
    ],
    [
      "Formato pensado para uso doméstico, reposição e revenda.",
      "Evite misturas com outros produtos químicos.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206870923/",
    },
  ),
  alvejante: criarProduto(
    "Alvejante sem cloro Lune Blanche",
    "Lavanderia",
    "Alvejante sem cloro desenvolvido para auxiliar na remoção de manchas e reforçar a lavagem de roupas brancas e coloridas.",
    [
      "Fórmula sem cloro para reforço da lavagem.",
      "Ajuda na remoção de manchas do dia a dia.",
      "Bom apoio para pré-lavagem e molho, conforme o rótulo.",
    ],
    [
      "Roupas brancas e coloridas em rotinas de lavanderia.",
      "Pré-lavagem e molho, sempre conforme a embalagem comprada.",
    ],
    [
      "A linha aparece publicamente nas versões de 2 L e 5 L.",
      "Siga a dosagem do rótulo para manter o desempenho do produto.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/22599424135/",
    },
  ),
  amaciante: criarProduto(
    "Amaciante azul Lune Blanche",
    "Lavanderia",
    "Amaciante líquido voltado para a etapa final da lavagem, ajudando a deixar as roupas mais macias e com perfume agradável.",
    [
      "Contribui para a maciez das roupas.",
      "Ajuda a manter perfume agradável nas peças lavadas.",
      "Indicado para complementar a rotina de lavagem.",
    ],
    [
      "Último enxágue de roupas do dia a dia.",
      "Lavanderias domésticas e reposição de produto em maior volume.",
    ],
    [
      "A linha aparece publicamente em versões de 2 L e 5 L.",
      "Use conforme a orientação de diluição e aplicação do rótulo.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58257010062/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/amaciante-5l--roupas-macias-e-cheirosas/up/MLBU3730619540?pdp_filters=item_id:MLB6164084222",
    },
  ),
  "alvejante-concentrado-azul": criarProdutoBaseConcentrado(
    "Alvejante sem cloro azul base 2/20",
    "Lavanderia",
    "Alvejante sem cloro azul em versão base concentrada, indicado para o preparo de produto pronto em rotinas de lavanderia. Na relação 2/20, 2 L da base rendem 20 L de produto pronto.",
    [
      "Produto concentrado para preparo e diluição.",
      "Na relação 2/20, 2 L rendem 20 L de produto pronto.",
      "Versão azul para apoio às rotinas de lavagem e tratamento de roupas.",
    ],
    [
      "Preparo de produto para lavanderias e rotinas de lavagem de roupas.",
      "Uso conforme o rótulo e a diluição adotada para o processo de limpeza.",
    ],
    [
      "A relação 2/20 indica rendimento de 20 L de produto pronto a partir de 2 L da base.",
      "Siga a diluição e o modo de uso indicados no rótulo.",
    ],
  ),
  "alvejante-concentrado-incolor": criarProdutoBaseConcentrado(
    "Alvejante sem cloro incolor base 2/20",
    "Lavanderia",
    "Alvejante sem cloro incolor em versão base concentrada, indicado para o preparo de produto pronto em rotinas de lavanderia. Na relação 2/20, 2 L da base rendem 20 L de produto pronto.",
    [
      "Produto concentrado para preparo e diluição.",
      "Na relação 2/20, 2 L rendem 20 L de produto pronto.",
      "Versão incolor para composições de lavanderia conforme o modo de uso.",
    ],
    [
      "Preparo de produto para lavanderias e rotinas de lavagem de roupas.",
      "Uso conforme o rótulo e a diluição adotada para o processo de limpeza.",
    ],
    [
      "A relação 2/20 indica rendimento de 20 L de produto pronto a partir de 2 L da base.",
      "Siga a diluição e o modo de uso indicados no rótulo.",
    ],
  ),
  "anti-mofo": criarProduto(
    "Antimofo antitraça Sampa Clean",
    "Revenda",
    "Cartela antimofo e antitraça indicada para armários, gavetas e maleiros, ajudando a reduzir odores típicos de umidade em espaços fechados.",
    [
      "Cartela pronta para uso em armários e maleiros.",
      "Ajuda no controle de odores em espaços fechados.",
    ],
    [
      "Guarda-roupas, gavetas, sapateiras e maleiros.",
      "Ambientes fechados que pedem cuidado extra com umidade e odores.",
    ],
    [
      "O anúncio público da linha cita cartela com 6 unidades.",
      "Use e substitua conforme a orientação da embalagem.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/22794904478/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/antimofo-e-antitraca-sampa-clean-cartela-com-6-unidades/up/MLBU3741586449?pdp_filters=item_id:MLB6187924266",
    },
  ),
  bombona: criarProduto(
    "Bombona 20 L azul",
    "Uso profissional",
    "Bombona de 20 litros indicada para envase, armazenamento e transporte de produtos líquidos em operações de maior volume.",
    [
      "Capacidade de 20 litros para reposição e logística.",
      "Boa opção para uso profissional e armazenamento de insumos.",
    ],
    [
      "Envase e armazenamento de produtos líquidos em maior volume.",
      "Operações de distribuição, reposição e uso profissional.",
    ],
  ),
  bombona1: criarProduto(
    "Bombona 20 L profissional",
    "Uso profissional",
    "Bombona de 20 litros pensada para manuseio, transporte e reposição de produto em rotinas profissionais, com foco em praticidade logística.",
    [
      "Embalagem robusta para rotinas de maior escala.",
      "Apoia armazenamento, transporte e reposição de produtos.",
    ],
    [
      "Uso profissional, industrial leve e distribuição.",
      "Armazenamento e movimentação de líquidos em maior volume.",
    ],
  ),
  "bb-agua-sanitaria": criarProdutoProfissional20L(
    "Água sanitária",
    "Água sanitária indicada para higienização de superfícies laváveis e para o branqueamento de roupas em rotinas de maior volume.",
    [
      "Apoia a limpeza de banheiros, quintais e áreas laváveis.",
      "Pode ser usada no branqueamento de roupas conforme o rótulo.",
    ],
    [
      "Pisos, banheiros, quintais e superfícies laváveis.",
      "Branqueamento de roupas brancas, sempre conforme a recomendação do rótulo.",
    ],
    [
      "Boa opção para abastecimento e reposição em maior escala.",
    ],
  ),
  "bb-amaciante-azul": criarProdutoProfissional20L(
    "Amaciante azul",
    "Amaciante líquido voltado para a etapa final da lavagem, ajudando a deixar as roupas mais macias e com perfume agradável.",
    [
      "Contribui para a maciez das roupas.",
      "Ajuda a manter perfume agradável nas peças lavadas.",
    ],
    [
      "Último enxágue de roupas em lavanderias e operações de maior volume.",
      "Rotinas profissionais de lavagem e reposição de produto.",
    ],
    [
      "Use conforme a orientação de diluição e aplicação do rótulo.",
    ],
  ),
  "bb-branquinho": criarProdutoProfissional20L(
    "Branquinho",
    "Limpador de uso geral voltado para rotinas de limpeza pesada e para a remoção de sujeiras mais intensas em superfícies laváveis.",
    [
      "Indicado para sujeira mais pesada no dia a dia.",
      "Bom apoio para manutenção de áreas com maior acúmulo de sujeira.",
    ],
    [
      "Pisos, banheiros, áreas de serviço e superfícies laváveis.",
      "Rotinas de limpeza pesada em ambientes profissionais.",
    ],
    [
      "Use conforme a indicação de diluição e aplicação do rótulo.",
    ],
  ),
  "bb-detergente-coco": criarProdutoProfissional20L(
    "Detergente coco",
    "Detergente indicado para a lavagem de louças, panelas e utensílios, com fragrância de coco e foco em uso frequente na rotina de limpeza.",
    [
      "Ajuda na limpeza diária de utensílios e louças.",
      "Fragrância de coco para a rotina da cozinha.",
    ],
    [
      "Louças, copos, panelas, talheres e utensílios em geral.",
      "Cozinhas profissionais, áreas de apoio e rotinas com maior consumo.",
    ],
    [
      "Use na dosagem adequada ao nível de gordura e à quantidade de peças.",
    ],
  ),
  "bb-detergente-cristal": criarProdutoProfissional20L(
    "Detergente cristal",
    "Detergente para a rotina de louças, copos, panelas e utensílios, indicado para limpeza frequente com espuma e enxágue práticos.",
    [
      "Indicado para limpeza cotidiana de utensílios e louças.",
      "Boa opção para cozinhas e áreas de apoio com alto giro.",
    ],
    [
      "Louças, copos, panelas, talheres e utensílios em geral.",
      "Operações com uso frequente do produto em maior volume.",
    ],
    [
      "Use na dosagem adequada ao nível de gordura.",
    ],
  ),
  "bb-detergente-neutro": criarProdutoProfissional20L(
    "Detergente neutro",
    "Detergente neutro voltado para a rotina da cozinha, ajudando a remover gordura do dia a dia na lavagem de louças, panelas e utensílios.",
    [
      "Ajuda a remover a gordura do uso diário.",
      "Indicado para louças, panelas e utensílios.",
    ],
    [
      "Louças, talheres, panelas, copos e utensílios em geral.",
      "Cozinhas profissionais, áreas de apoio e limpeza frequente.",
    ],
    [
      "Use a quantidade adequada ao nível de gordura e enxágue normalmente.",
    ],
  ),
  "bb-erva-doce": criarProdutoProfissional20L(
    "Sabão erva-doce",
    "Sabão líquido com fragrância de erva-doce, indicado para rotinas profissionais de limpeza e reposição em maior volume, sempre conforme o rótulo da linha.",
    [
      "Fragrância de erva-doce para a rotina de limpeza.",
      "Pensado para abastecimento e uso contínuo em operações profissionais.",
    ],
    [
      "Rotinas profissionais de limpeza e abastecimento interno.",
      "Aplicações compatíveis com a indicação de uso do rótulo.",
    ],
    [
      "Siga sempre a diluição, a aplicação e os cuidados indicados na embalagem.",
    ],
  ),
  "bb-lava-autos": criarProdutoProfissional20L(
    "Lava-autos",
    "Shampoo automotivo para lavagem externa, indicado para remover a sujeira do uso diário e ajudar a manter o brilho da lataria.",
    [
      "Pensado para a lavagem da parte externa do veículo.",
      "Ajuda a limpar a lataria e valorizar o acabamento da pintura.",
    ],
    [
      "Lavagem de lataria, teto, portas e outras áreas externas do veículo.",
      "Centros automotivos, lava-rápidos e operações com maior volume.",
    ],
    [
      "Use conforme a diluição e a aplicação recomendadas no rótulo.",
    ],
  ),
  "bb-lava-roupas-azul": criarProdutoProfissional20L(
    "Lava-roupas azul líquido",
    "Lava-roupas líquido indicado para lavagem de tecidos e roupas do dia a dia, com foco em limpeza eficiente, perfume e bom rendimento.",
    [
      "Indicado para lavagem em máquina ou à mão.",
      "Bom apoio para roupas do uso frequente.",
    ],
    [
      "Lavagem de roupas em lavanderias e rotinas profissionais.",
      "Peças que pedem limpeza com espuma e perfume após o enxágue.",
    ],
    [
      "Siga sempre a composição, a dosagem e as precauções do rótulo.",
    ],
  ),
  "bb-lava-roupas-coco": criarProdutoProfissional20L(
    "Lava-roupas coco líquido",
    "Lava-roupas líquido de coco indicado para a limpeza diária das roupas, unindo praticidade, rendimento e fragrância tradicional para a lavanderia.",
    [
      "Boa opção para a rotina diária de lavagem.",
      "Perfil de fragrância de coco para quem prefere essa linha.",
    ],
    [
      "Roupas do dia a dia em lavanderias e operações com maior volume.",
      "Uso em máquina ou à mão, conforme o rótulo da embalagem.",
    ],
    [
      "Use a dosagem recomendada para o volume de roupa e de água.",
    ],
  ),
  "bb-sabao-dowe": criarProdutoProfissional20L(
    "Sabão Dowe",
    "Sabão líquido indicado para rotinas profissionais de limpeza e reposição em maior volume, com aplicação conforme a orientação do rótulo da linha.",
    [
      "Pensado para uso contínuo e abastecimento profissional.",
      "Bom apoio para operações que exigem maior volume de produto.",
    ],
    [
      "Rotinas profissionais de limpeza e abastecimento interno.",
      "Aplicações compatíveis com a indicação de uso do rótulo.",
    ],
    [
      "Siga sempre a diluição, a aplicação e os cuidados indicados na embalagem.",
    ],
  ),
  branquinho: criarProduto(
    "Branquinho Lune Blanche",
    "Limpeza pesada",
    "Limpador de uso geral da linha Branquinho, voltado para rotinas de limpeza pesada e para a remoção de sujeiras mais intensas.",
    [
      "Linha conhecida publicamente como limpador de uso geral.",
      "Indicado para sujeira mais pesada no dia a dia.",
      "Aparece em revendas nas versões de 2 L e 5 L.",
    ],
    [
      "Pisos, banheiros, áreas de serviço e superfícies laváveis.",
      "Rotinas de limpeza pesada em casa ou no trabalho.",
    ],
    [
      "Use conforme a indicação de diluição e aplicação do rótulo.",
      "Boa opção para manutenção de áreas com maior acúmulo de sujeira.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/23194876051/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-uso-geral-multiuso-5l-para-limpeza-domestica/up/MLBU3723758625?pdp_filters=item_id:MLB4418935873",
    },
  ),
  "casa-limpa": criarProduto(
    "Desinfetante Casa Limpa Lune Blanche",
    "Desinfetantes",
    "Desinfetante perfumado indicado para a limpeza de superfícies laváveis e para deixar os ambientes com a sensação de limpeza recém-feita.",
    [
      "Fragrância Casa Limpa para reforçar a sensação de ambiente limpo.",
      "Indicado para pisos, banheiros e áreas internas laváveis.",
      "Bom apoio para manutenção diária e perfumação do ambiente.",
    ],
    [
      "Pisos, banheiros, corredores e áreas internas laváveis.",
      "Perfumação do ambiente após a limpeza de manutenção.",
    ],
    [
      "A linha aparece em revendas nas versões de 2 L e 5 L.",
      "Use conforme a diluição e as instruções do rótulo.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  ),
  cloro: criarProduto(
    "Cloro líquido 6% Lune Blanche",
    "Linha Cloro",
    "Cloro líquido com cloro ativo 6%, voltado para higienização de pisos, banheiros, quintais e outras áreas laváveis que exigem limpeza mais pesada.",
    [
      "Cloro ativo 6% para rotinas de limpeza intensa.",
      "Apoia a remoção de sujeira, odores e limo em áreas laváveis.",
      "Produto encontrado publicamente em embalagens de 5 L e 10 L.",
    ],
    [
      "Banheiros, pisos, quintais e áreas externas laváveis.",
      "Situações em que a rotina pede limpeza com cloro ativo.",
    ],
    [
      "Use apenas conforme as instruções do rótulo.",
      "Evite misturas com outros produtos.",
    ],
  ),
  "cloro-gel": criarProduto(
    "Cloro em gel Lune Blanche",
    "Linha Cloro",
    "Cloro em gel com aplicação mais controlada, pensado para limpeza localizada em superfícies laváveis como vasos sanitários, rejuntes e cantos.",
    [
      "Textura em gel para aplicação mais direcionada.",
      "Boa aderência em superfícies verticais e pontos localizados.",
      "Apoia limpezas pontuais que pedem maior permanência do produto.",
    ],
    [
      "Vasos sanitários, rejuntes, cantos e superfícies laváveis.",
      "Rotinas em que a textura em gel ajuda no controle da aplicação.",
    ],
    [
      "Use conforme a recomendação do rótulo da embalagem.",
      "Mantenha o produto separado de outras misturas químicas.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58207010745/",
    },
  ),
  cristal: criarProduto(
    "Detergente cristal Lune Blanche",
    "Detergentes",
    "Detergente para a rotina de louças, copos, panelas e utensílios, indicado para a limpeza diária com espuma e enxágue práticos.",
    [
      "Indicado para limpeza cotidiana de utensílios e louças.",
      "Boa opção para cozinhas domésticas e profissionais leves.",
      "Pensado para uso frequente no dia a dia.",
    ],
    [
      "Louças, copos, panelas, talheres e utensílios em geral.",
      "Limpeza leve e frequente na cozinha.",
    ],
    [
      "Use na dosagem adequada ao nível de gordura.",
      "Enxágue normalmente após a aplicação.",
    ],
  ),
  esfregao: criarProduto(
    "Esfregão Esfrega Forte",
    "Revenda",
    "Esfregão indicado para reforçar a limpeza de pisos e superfícies que exigem maior atrito para remoção de sujeira aderida.",
    [
      "Apoia limpezas mais pesadas.",
      "Bom para reforçar a ação manual em pisos e áreas laváveis.",
    ],
    [
      "Pisos, áreas externas e superfícies com sujeira mais aderida.",
      "Limpezas em que o atrito faz diferença no resultado final.",
    ],
  ),
  "esponja-mu": criarProduto(
    "Esponja multiuso dupla face",
    "Revenda",
    "Esponja dupla face indicada para a limpeza de louças, panelas, utensílios e pequenas superfícies da rotina doméstica.",
    [
      "Formato dupla face para usos diferentes na limpeza.",
      "Muito útil na rotina da cozinha e da pia.",
      "Aparece publicamente também em kits com múltiplas unidades.",
    ],
    [
      "Louças, panelas, talheres e utensílios em geral.",
      "Pequenas superfícies que pedem limpeza manual do dia a dia.",
    ],
    [],
    {
      shopee: "https://shopee.com.br/product/1738012223/58257434099/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/esponja-dupla-face-multiuso-12-unid-superpro-betamin/up/MLBU3741326811?pdp_filters=item_id:MLB6187915336",
    },
  ),
  "flores-do-campo": criarProduto(
    "Desinfetante Flores do Campo Lune Blanche",
    "Desinfetantes",
    "Desinfetante perfumado indicado para a limpeza de superfícies laváveis e para deixar o ambiente com fragrância floral.",
    [
      "Fragrância Flores do Campo para perfumação do ambiente.",
      "Indicado para pisos, banheiros e áreas internas laváveis.",
      "Bom apoio para manutenção diária e perfumação do ambiente.",
    ],
    [
      "Pisos, banheiros, corredores e áreas internas laváveis.",
      "Perfumação do ambiente após a limpeza de manutenção.",
    ],
    [
      "A linha aparece em revendas nas versões de 2 L e 5 L.",
      "Use conforme a diluição e as instruções do rótulo.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  ),
  "lava-autos": criarProduto(
    "Lava-autos Lune Blanche",
    "Linha automotiva",
    "Shampoo automotivo para lavagem externa, indicado para remover a sujeira do uso diário e ajudar a manter o brilho da lataria.",
    [
      "Pensado para a lavagem da parte externa do veículo.",
      "Ajuda a limpar a lataria e valorizar o acabamento da pintura.",
      "A linha pública associa esse tipo de shampoo à proteção do brilho.",
    ],
    [
      "Lavagem de lataria, teto, portas e outras áreas externas do veículo.",
      "Manutenção periódica do carro, com foco em limpeza e brilho.",
    ],
    [
      "Use conforme a diluição e a aplicação recomendadas no rótulo.",
      "Evite aplicação em superfícies quentes ou sob sol intenso.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58257011501/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/shampoo-automotivo-lava-autos-5l--limpa-e-da-brilho/up/MLBU3721335283",
    },
  ),
  lavanda: criarProduto(
    "Desinfetante Lavanda Lune Blanche",
    "Desinfetantes",
    "Desinfetante perfumado indicado para a limpeza de superfícies laváveis e para deixar o ambiente com fragrância de lavanda.",
    [
      "Fragrância Lavanda para perfumação do ambiente.",
      "Indicado para pisos, banheiros e áreas internas laváveis.",
      "Bom apoio para manutenção diária e perfumação do ambiente.",
    ],
    [
      "Pisos, banheiros, corredores e áreas internas laváveis.",
      "Perfumação do ambiente após a limpeza de manutenção.",
    ],
    [
      "A linha aparece em revendas nas versões de 2 L e 5 L.",
      "Use conforme a diluição e as instruções do rótulo.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  ),
  "limpa-azuleijo": criarProduto(
    "Rodo limpa-azulejo",
    "Revenda",
    "Acessório pensado para facilitar a limpeza de azulejos, revestimentos e outras superfícies verticais ou laváveis que exigem alcance e praticidade no manuseio.",
    [
      "Apoia a limpeza de paredes e revestimentos.",
      "Facilita o alcance em áreas de banheiro, cozinha e lavanderia.",
    ],
    [
      "Azulejos, paredes revestidas e áreas laváveis do banheiro e da cozinha.",
      "Rotinas de limpeza em que um acessório com cabo melhora o alcance.",
    ],
  ),
  "limpa-facil": criarProduto(
    "Vassoura Limpa Fácil",
    "Revenda",
    "Vassoura indicada para a varrição de ambientes internos, com proposta de praticidade para a limpeza seca do dia a dia.",
    [
      "Apoio prático para a rotina de limpeza seca.",
      "Pensada para uso doméstico ou profissional leve.",
    ],
    [
      "Pisos internos e áreas de circulação com sujeira leve.",
      "Rotinas de varrição rápida em casa, escritório e pequenos comércios.",
    ],
  ),
  "limpa-vidros-5l-2l": criarProduto(
    "Limpa-vidros Lune Blanche",
    "Para superfícies",
    "Limpador voltado para vidros, espelhos, janelas e boxes, ajudando a remover marcas do uso diário e a manter um acabamento mais limpo.",
    [
      "Indicado para janelas, espelhos e superfícies transparentes.",
      "A linha aparece publicamente nas versões de 2 L e 5 L.",
      "Bom apoio para limpeza de manutenção com acabamento visual mais limpo.",
    ],
    [
      "Vidros, espelhos, janelas, box e outras superfícies transparentes.",
      "Manutenção de marcas de dedos, poeira e sujeira leve do dia a dia.",
    ],
    [
      "Use pano limpo e seco ou levemente umedecido, conforme o rótulo.",
      "A aplicação correta ajuda a reduzir marcas e melhorar o acabamento.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58207015602/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-multiuso-para-vidros-janelas-e-espelhos/p/MLB64882702?pdp_filters=item_id:MLB6194489088",
    },
  ),
  "limpadores-perfumados": criarProduto(
    "Limpadores perfumados concentrados 1/25",
    "Para superfícies",
    "Linha de limpadores concentrados com diluição 1/25, desenvolvida para render mais e perfumar o ambiente durante a limpeza de manutenção.",
    [
      "Diluição 1/25 para alto rendimento.",
      "Fragrância de longa duração na rotina de limpeza.",
      "A linha pública cita uso em pisos frios, banheiros e quintal.",
    ],
    [
      "Pisos frios, banheiros, quintais e superfícies laváveis do dia a dia.",
      "Limpeza com perfume marcante e bom aproveitamento do produto concentrado.",
    ],
    [
      "Referências públicas da linha indicam que 1 litro rende até 25 litros de produto diluído.",
      "Siga a diluição do rótulo para manter o desempenho e a segurança do uso.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/23699409280/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-perfumado-concentrado-1l--limpeza-geral/up/MLBU3860249052?pdp_filters=item_id:MLB6487178814",
    },
  ),
  "lp-alcool": criarProduto(
    "Limpador perfumado base álcool Lune Blanche",
    "Para superfícies",
    "Limpador perfumado com base álcool, indicado para a manutenção rápida de superfícies laváveis que pedem praticidade na aplicação.",
    [
      "Base álcool para rotinas rápidas de limpeza.",
      "Ajuda a manter superfícies laváveis com sensação de limpeza e perfume.",
      "Boa opção para manutenção cotidiana.",
    ],
    [
      "Mesas, bancadas, pisos e outras superfícies laváveis do dia a dia.",
      "Limpezas rápidas em casa, escritório e áreas de circulação.",
    ],
    [
      "Use conforme a orientação do rótulo da embalagem.",
      "A aplicação e a secagem variam de acordo com a superfície.",
    ],
  ),
  "lustra-moveis": criarProduto(
    "Lustra-móveis Lune Blanche",
    "Para superfícies",
    "Produto indicado para limpeza e acabamento de móveis, ajudando a realçar o brilho e melhorar o aspecto visual de superfícies de madeira e similares.",
    [
      "Ajuda a realçar o brilho dos móveis.",
      "Pensado para acabamento e manutenção de superfícies mobiliárias.",
      "A linha pública aparece na versão de 500 ml.",
    ],
    [
      "Móveis de madeira e superfícies similares compatíveis com a categoria.",
      "Limpeza leve e acabamento visual do mobiliário.",
    ],
    [
      "Use pano macio para espalhar e dar acabamento, conforme o rótulo.",
      "Teste antes em uma pequena área quando houver dúvida sobre a superfície.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58207020924/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/lustra-moveis-500ml--realca-o-brilho-dos-moveis/up/MLBU3724653579?pdp_filters=item_id:MLB4419940939",
    },
  ),
  marine: criarProduto(
    "Desinfetante Marine Lune Blanche",
    "Desinfetantes",
    "Desinfetante perfumado indicado para a limpeza de superfícies laváveis e para deixar o ambiente com fragrância refrescante.",
    [
      "Fragrância Marine com perfil refrescante.",
      "Indicado para pisos, banheiros e áreas internas laváveis.",
      "Bom apoio para manutenção diária e perfumação do ambiente.",
    ],
    [
      "Pisos, banheiros, corredores e áreas internas laváveis.",
      "Perfumação do ambiente após a limpeza de manutenção.",
    ],
    [
      "A linha aparece em revendas nas versões de 2 L e 5 L.",
      "Use conforme a diluição e as instruções do rótulo.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  ),
  "multiuso-incolor-concentrado": criarProdutoBaseConcentrado(
    "Multiuso incolor base 2/10",
    "Limpeza pesada",
    "Multiuso incolor em versão base concentrada, indicado para o preparo de produto pronto em limpezas gerais e rotinas de limpeza pesada. Na relação 2/10, 2 L da base rendem 10 L de produto pronto.",
    [
      "Produto concentrado para preparo e diluição.",
      "Na relação 2/10, 2 L rendem 10 L de produto pronto.",
      "Versão incolor para limpeza geral de superfícies laváveis.",
    ],
    [
      "Limpeza de pisos, azulejos, bancadas e outras superfícies compatíveis.",
      "Preparo de produto para manutenção e limpeza pesada, conforme o rótulo.",
    ],
    [
      "A relação 2/10 indica rendimento de 10 L de produto pronto a partir de 2 L da base.",
      "Faça a diluição e a aplicação conforme as orientações do rótulo.",
    ],
  ),
  "multiuso-verde-concentrado": criarProdutoBaseConcentrado(
    "Multiuso verde base 2/10",
    "Limpeza pesada",
    "Multiuso verde em versão base concentrada, indicado para o preparo de produto pronto em limpezas gerais e rotinas de limpeza pesada. Na relação 2/10, 2 L da base rendem 10 L de produto pronto.",
    [
      "Produto concentrado para preparo e diluição.",
      "Na relação 2/10, 2 L rendem 10 L de produto pronto.",
      "Versão verde para limpeza geral de superfícies laváveis.",
    ],
    [
      "Limpeza de pisos, azulejos, bancadas e outras superfícies compatíveis.",
      "Preparo de produto para manutenção e limpeza pesada, conforme o rótulo.",
    ],
    [
      "A relação 2/10 indica rendimento de 10 L de produto pronto a partir de 2 L da base.",
      "Faça a diluição e a aplicação conforme as orientações do rótulo.",
    ],
  ),
  "multi-uso": criarProduto(
    "Multiuso incolor Lune Blanche",
    "Limpeza pesada",
    "Limpador multiuso indicado para a limpeza geral de diversas superfícies laváveis, ajudando na manutenção de rotina com praticidade.",
    [
      "Limpeza geral de várias superfícies.",
      "Boa opção para manutenção doméstica ou comercial leve.",
      "Produto anunciado publicamente como limpador multiuso 5 L.",
    ],
    [
      "Pisos, bancadas, azulejos e outras superfícies compatíveis com a categoria.",
      "Rotinas de limpeza geral em casa, comércio e áreas de apoio.",
    ],
    [
      "A dosagem deve seguir a recomendação do rótulo.",
      "Faça teste prévio em superfícies mais delicadas quando necessário.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58257018984/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpador-multiuso-5l-limpa-diversas-superficies/p/MLB64420230?pdp_filters=item_id:MLB4426707071",
    },
  ),
  naftalina: criarProduto(
    "Naftalina cartela Sampa Clean",
    "Revenda",
    "Cartela de naftalina para uso em armários, gavetas e outros espaços fechados, ajudando a conservar peças guardadas por mais tempo.",
    [
      "Uso tradicional em armários e gavetas.",
      "Boa opção para ambientes fechados com peças armazenadas.",
    ],
    [
      "Armários, gavetas, sapateiras e espaços fechados.",
      "Organização e conservação de roupas e objetos guardados.",
    ],
    [],
    {
      shopee: "https://shopee.com.br/product/1738012223/58257018984/",
    },
  ),
  neutro: criarProduto(
    "Detergente neutro Lune Blanche",
    "Detergentes",
    "Detergente neutro voltado para a rotina da cozinha, ajudando a remover gordura do dia a dia na lavagem de louças, panelas e utensílios.",
    [
      "Indicado para louças, panelas e utensílios.",
      "Ajuda a remover a gordura do uso diário.",
      "A linha pública destaca o equilíbrio entre limpeza e uso frequente.",
    ],
    [
      "Louças, talheres, panelas, copos e utensílios em geral.",
      "Limpeza diária da pia e da cozinha.",
    ],
    [
      "Produto encontrado publicamente em versões de 2 L e 5 L.",
      "Use a quantidade adequada ao nível de gordura e enxágue normalmente.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/22594898238/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/detergente-neutro-5l--remove-gordura-e-nao-agride-as-maos/up/MLBU3713564825?pdp_filters=item_id:MLB4411213333",
    },
  ),
  novica: criarProduto(
    "Vassoura Noviça",
    "Revenda",
    "Vassoura para varrição diária de ambientes internos, indicada para a manutenção de pisos lisos e limpeza leve.",
    [
      "Apoio prático para a rotina de limpeza seca.",
      "Pensada para uso doméstico ou profissional leve.",
    ],
    [
      "Pisos lisos e áreas internas de circulação.",
      "Rotina de varrição diária em casas, escritórios e pequenos comércios.",
    ],
  ),
  "odorizante-para-ambiente": criarProduto(
    "Odorizante para ambiente Sampa Clean",
    "Revenda",
    "Odorizante indicado para perfumar ambientes internos e complementar a sensação de limpeza em quartos, salas, banheiros e áreas de convivência.",
    [
      "Perfuma o ambiente de forma prática.",
      "Complementa a rotina de limpeza com sensação de frescor.",
    ],
    [
      "Salas, quartos, banheiros e áreas internas em geral.",
      "Ambientes que pedem reforço de perfume após a limpeza.",
    ],
    [],
    {
      shopee: "https://shopee.com.br/product/1738012223/23994885772/",
    },
  ),
  pa: criarProduto(
    "Pá de lixo",
    "Revenda",
    "Pá de lixo indicada para recolhimento de resíduos após a varrição, com uso prático em limpezas residenciais e profissionais.",
    [
      "Apoio básico para a limpeza seca.",
      "Facilita o recolhimento de poeira e pequenos resíduos.",
    ],
    [
      "Recolhimento de poeira, areia e pequenos resíduos após a varrição.",
      "Uso doméstico e profissional leve.",
    ],
  ),
  "pasta-de-brilho": criarProduto(
    "Pasta de brilho Fab Limp",
    "Revenda",
    "Pasta de brilho indicada para limpeza e acabamento de superfícies e utensílios, contribuindo para um aspecto mais limpo e brilhante em materiais compatíveis.",
    [
      "Ajuda no brilho e no acabamento visual das peças.",
      "Boa opção para reforçar a limpeza manual em utensílios e superfícies.",
    ],
    [
      "Utensílios e superfícies compatíveis com produtos de polimento e brilho.",
      "Limpeza manual em situações que pedem acabamento visual reforçado.",
    ],
  ),
  "cera-branca-base": criarProdutoBaseConcentrado(
    "Cera branca base 2/20",
    "Uso profissional",
    "Cera branca em versão base concentrada, indicada para o preparo de produto pronto em rotinas de acabamento e manutenção de superfícies compatíveis. Na relação 2/20, 2 L da base rendem 20 L de produto pronto.",
    [
      "Produto concentrado para preparo e diluição.",
      "Na relação 2/20, 2 L rendem 20 L de produto pronto.",
      "Indicada para acabamento e manutenção de superfícies compatíveis.",
    ],
    [
      "Preparo de cera para manutenção e acabamento de pisos e áreas compatíveis.",
      "Aplicação conforme o tipo de superfície e as orientações do rótulo.",
    ],
    [
      "A relação 2/20 indica rendimento de 20 L de produto pronto a partir de 2 L da base.",
      "Siga a diluição e o modo de uso indicados no rótulo.",
    ],
  ),
  "pedra-sanitaria": criarProduto(
    "Pedra sanitária Sampa Clean",
    "Revenda",
    "Pedra sanitária para uso em vasos sanitários, ajudando na perfumação e na manutenção visual da limpeza do banheiro.",
    [
      "Contribui para perfume contínuo no vaso sanitário.",
      "Apoia a rotina de manutenção do banheiro.",
      "Aparece publicamente também em kits com múltiplas unidades.",
    ],
    [
      "Vasos sanitários e banheiros de uso doméstico ou comercial leve.",
      "Reforço de perfume e manutenção da rotina de limpeza.",
    ],
    [],
    {
      shopee: "https://shopee.com.br/product/1738012223/58207430695/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/pedra-sanitaria-sampa-clean-para-seu-banheiro--12-unidades/up/MLBU3739494838?pdp_filters=item_id:MLB4424641647",
    },
  ),
  percarbonato: criarProduto(
    "Percarbonato de sódio Branquinho",
    "Lavanderia",
    "Tira-manchas em pó com percarbonato de sódio, indicado para reforçar a lavagem e auxiliar na remoção de manchas em roupas brancas e coloridas.",
    [
      "Ajuda na remoção de manchas do dia a dia.",
      "Apoia a lavagem de roupas brancas e coloridas.",
      "A linha pública destaca o produto como apoio para clarear o branco.",
    ],
    [
      "Reforço de lavagem em máquina ou molho, conforme o rótulo.",
      "Roupas com manchas que pedem um apoio extra na lavanderia.",
    ],
    [
      "Use na quantidade indicada na embalagem para evitar excessos.",
      "Sempre verifique a compatibilidade do tecido antes da aplicação.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206740631/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/tira-manchas-roupas-brancas-coloridas-clareia-branco-1-kg/p/MLB64291832?pdp_filters=item_id:MLB4420979863",
    },
  ),
  "pop-madeira": criarProduto(
    "Vassoura pop madeira",
    "Revenda",
    "Vassoura com base em madeira indicada para varrição de pisos secos e limpeza diária de áreas internas ou externas cobertas.",
    [
      "Apoio prático para a rotina de limpeza seca.",
      "Pensada para uso doméstico ou profissional leve.",
    ],
    [
      "Pisos secos em ambientes internos e externos cobertos.",
      "Rotinas de varrição frequente com acessório simples e resistente.",
    ],
  ),
  pretinho: criarProduto(
    "Limpa pneu em gel Lune Blanche",
    "Linha automotiva",
    "Gel limpa pneu indicado para renovar o brilho dos pneus e valorizar o aspecto visual da borracha após a lavagem do veículo.",
    [
      "Ajuda a renovar o brilho do pneu.",
      "Contribui para melhorar o aspecto visual da borracha.",
      "Referências públicas destacam proteção contra ressecamento visual.",
    ],
    [
      "Pneus e borrachas externas do veículo.",
      "Finalização estética após a lavagem automotiva.",
    ],
    [
      "Use com a superfície limpa e seca, conforme o rótulo.",
      "A linha pública aparece em embalagem de 500 g.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58256857657/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/limpa-pneu-gel-automotivo--brilho-e-conservacao/up/MLBU3719225425",
    },
  ),
  "querosene-5l-2l": criarProduto(
    "Sabão querosene Branquinho",
    "Limpeza pesada",
    "Sabão querosene indicado para limpeza pesada de pisos e superfícies laváveis, especialmente quando a rotina exige ação reforçada contra sujeira impregnada.",
    [
      "Produto voltado para limpeza pesada.",
      "Apoia a remoção de sujeira mais difícil em áreas laváveis.",
      "A linha aparece publicamente nas versões de 2 L e 5 L.",
    ],
    [
      "Pisos, azulejos, áreas de serviço e outras superfícies laváveis.",
      "Rotinas em que gordura e sujeira aderida pedem reforço na limpeza.",
    ],
    [
      "Use conforme a diluição recomendada no rótulo.",
      "Faça teste prévio em materiais mais sensíveis ou pintados.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206736966/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/sabo-querosene-limpeza-eficiente-para-os-pisos-5l/p/MLB64888889?pdp_filters=item_id:MLB6194625792",
    },
  ),
  "rodo-30": criarProduto(
    "Rodo 30 cm",
    "Revenda",
    "Rodo de 30 cm indicado para puxar água, acelerar a secagem e apoiar a manutenção de pisos em áreas menores.",
    [
      "Medida de 30 cm para ambientes compactos.",
      "Bom apoio para retirada de água e secagem após a lavagem.",
    ],
    [
      "Pisos laváveis em banheiros, cozinhas e áreas de serviço.",
      "Rotinas de secagem e acabamento após a lavagem do ambiente.",
    ],
  ),
  "rodo-40": criarProduto(
    "Rodo 40 cm",
    "Revenda",
    "Rodo de 40 cm indicado para puxar água, acelerar a secagem e apoiar a manutenção de pisos em áreas de tamanho intermediário.",
    [
      "Medida de 40 cm para uso frequente.",
      "Bom apoio para retirada de água e secagem após a lavagem.",
    ],
    [
      "Pisos laváveis em cozinhas, corredores e áreas de serviço.",
      "Rotinas de secagem e acabamento após a lavagem do ambiente.",
    ],
  ),
  "rodo-60": criarProduto(
    "Rodo 60 cm",
    "Revenda",
    "Rodo de 60 cm indicado para puxar água, acelerar a secagem e apoiar a manutenção de pisos em áreas maiores.",
    [
      "Medida de 60 cm para áreas amplas.",
      "Bom apoio para retirada de água e secagem após a lavagem.",
    ],
    [
      "Pisos laváveis em quintais, corredores e áreas maiores.",
      "Rotinas de secagem e acabamento após a lavagem do ambiente.",
    ],
  ),
  "sabao-azul": criarProduto(
    "Lava-roupas azul líquido Lune Blanche",
    "Lavanderia",
    "Lava-roupas líquido indicado para lavagem de tecidos e roupas do dia a dia, com foco em limpeza eficiente, perfume e bom rendimento.",
    [
      "Indicado para lavagem em máquina ou à mão.",
      "A linha pública aparece nas versões de 2 L e 5 L.",
      "Bom apoio para roupas do uso frequente.",
    ],
    [
      "Lavagem de roupas do dia a dia, em máquina ou no tanque.",
      "Peças que pedem limpeza com espuma e perfume após o enxágue.",
    ],
    [
      "Referências públicas da linha citam uso de 100 mL por lavagem, conforme o volume de água.",
      "Siga sempre a composição, a dosagem e as precauções do rótulo.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58256794837/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/sabo-azul-liquido-para-roupas-5l-lava-bem-e-rende-muito/p/MLB64886724?pdp_filters=item_id:MLB4440317849",
    },
  ),
  "sabao-coco": criarProduto(
    "Lava-roupas coco líquido Lune Blanche",
    "Lavanderia",
    "Lava-roupas líquido de coco indicado para a limpeza diária das roupas, unindo praticidade, rendimento e fragrância tradicional para a lavanderia.",
    [
      "Boa opção para a rotina diária de lavagem.",
      "Perfil de fragrância de coco para quem prefere essa linha.",
      "A linha pública aparece em embalagem de 5 L.",
    ],
    [
      "Roupas do dia a dia em lavagens domésticas frequentes.",
      "Uso em máquina ou à mão, conforme o rótulo da embalagem.",
    ],
    [
      "Use a dosagem recomendada para o volume de roupa e de água.",
      "A aplicação correta ajuda no desempenho e no rendimento do produto.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58256794837/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/sabo-coco-liquido-para-roupas-5l-roupas-limpas-e-cheirosas/p/MLB64880197?pdp_filters=item_id:MLB4439929023",
    },
  ),
  "silicone-g-p": criarProduto(
    "Silicone em gel Lune Blanche",
    "Linha automotiva",
    "Silicone em gel para acabamento automotivo, indicado para painéis, plásticos, borrachas e detalhes internos ou externos compatíveis.",
    [
      "Ajuda a dar brilho e melhorar o acabamento visual.",
      "Indicado para painéis, plásticos e borrachas.",
      "A linha pública aparece em versões de 450 g e 3,6 kg.",
    ],
    [
      "Painéis, laterais plásticas, borrachas e acabamentos automotivos.",
      "Finalização estética após a limpeza do veículo.",
    ],
    [
      "Aplique em camada fina, conforme a orientação do rótulo.",
      "Evite excesso para não deixar o acabamento carregado.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/23599379861/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/silicone-automotivo--brilho-intenso-e-protecao-do-painel/up/MLBU3727901640",
    },
  ),
  talco: criarProduto(
    "Desinfetante Talco Lune Blanche",
    "Desinfetantes",
    "Desinfetante perfumado indicado para a limpeza de superfícies laváveis e para deixar o ambiente com fragrância suave de talco.",
    [
      "Fragrância Talco com perfil suave e aconchegante.",
      "Indicado para pisos, banheiros e áreas internas laváveis.",
      "Bom apoio para manutenção diária e perfumação do ambiente.",
    ],
    [
      "Pisos, banheiros, corredores e áreas internas laváveis.",
      "Perfumação do ambiente após a limpeza de manutenção.",
    ],
    [
      "A linha aparece em revendas nas versões de 2 L e 5 L.",
      "Uma referência pública da linha indica diluição de 100 mL para até 1 litro de água, conforme o rótulo.",
    ],
    {
      shopee: "https://shopee.com.br/product/1738012223/58206808922/",
      mercadoLivre:
        "https://www.mercadolivre.com.br/desinfetante-perfumado-5l--casa-limpa-e-cheirosa/up/MLBU3733151670?product_trigger_id=MLB64301490&pdp_filters=item_id%3AMLB4419771463&applied_product_filters=MLBU3733151670&picker=true&quantity=1",
    },
  ),
  "varre-tudo": criarProduto(
    "Vassoura Varre Tudo",
    "Revenda",
    "Vassoura indicada para varrição de uso geral, com proposta de praticidade para a limpeza seca de ambientes internos.",
    [
      "Apoio prático para a rotina de limpeza seca.",
      "Pensada para uso doméstico ou profissional leve.",
    ],
    [
      "Pisos internos e áreas de circulação do dia a dia.",
      "Rotinas domésticas e comerciais leves de varrição.",
    ],
  ),
  "vassoura-pelo": criarProduto(
    "Vassoura de pelo",
    "Revenda",
    "Vassoura de pelo pensada para recolher poeira fina e apoiar limpezas mais delicadas em pisos lisos.",
    [
      "Apoio prático para a rotina de limpeza seca.",
      "Indicada para limpezas mais delicadas.",
    ],
    [
      "Pisos lisos, laminados, porcelanatos e áreas com poeira fina.",
      "Ambientes internos que pedem limpeza mais delicada.",
    ],
  ),
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
        "Informações detalhadas deste produto ainda estão sendo atualizadas.",
      destaques: metadata?.destaques ?? [],
      secoes: metadata?.secoes ?? [],
      marketplaces: metadata?.marketplaces,
    };
  })
  .filter((produto) => !produtosOcultos.has(produto.chave))
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

export const getNossosProdutosPath = (
  categoriasSelecionadas: CategoriaProduto[] = [],
) => {
  if (categoriasSelecionadas.length === 0) {
    return "/nossos-produtos";
  }

  const searchParams = new URLSearchParams();

  categoriasSelecionadas.forEach((categoria) => {
    searchParams.append("categoria", categoria);
  });

  return `/nossos-produtos?${searchParams.toString()}`;
};

export const getProdutoPath = (chave: string) => `/nossos-produtos/${chave}`;

export { categoriasProduto };
