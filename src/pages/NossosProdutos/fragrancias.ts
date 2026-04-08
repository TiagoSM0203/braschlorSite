import type { CategoriaProduto, Produto, ProdutoInfoSection } from "./produtos";

const categoriaFragrancia: CategoriaProduto = "Fragrâncias";

type FragranciaConfig = {
  chave: string;
  nome: string;
  descricao: string;
  destaques: string[];
  aplicacoes: string[];
  informacoes: string[];
};

const secao = (titulo: string, itens: string[]): ProdutoInfoSection => ({
  titulo,
  itens,
});

const criarFragrancia = ({
  chave,
  nome,
  descricao,
  destaques,
  aplicacoes,
  informacoes,
}: FragranciaConfig): Produto => ({
  chave,
  nome,
  descricao,
  destaques,
  categoria: categoriaFragrancia,
  secoes: [
    secao("Aplicações comuns", aplicacoes),
    secao("Informações gerais", informacoes),
    secao("Observações", [
      "Linha de fragrâncias/essências para composição olfativa de produtos de limpeza e aromatização.",
      "A compatibilidade da essência deve ser validada conforme a base, o solubilizante e o processo adotado.",
    ]),
  ],
});

export const fragrancias: Produto[] = [
  criarFragrancia({
    chave: "fragrancia-casa-limpa",
    nome: "Fragrância Casa Limpa",
    descricao:
      "Fragrância com perfil de limpeza fresca, pensada para reforçar a sensação de ambiente recém-limpo em saneantes e aromatizadores.",
    destaques: [
      "Perfil olfativo associado a limpeza e frescor.",
      "Boa opção para linhas de uso diário.",
      "Ajuda a comunicar sensação de casa limpa no produto final.",
    ],
    aplicacoes: [
      "Desinfetantes, limpadores perfumados e multiusos.",
      "Aromatizadores e odorizantes de ambiente.",
      "Linhas domésticas e institucionais com proposta de limpeza fresca.",
    ],
    informacoes: [
      "Indicação olfativa voltada a notas frescas e limpas.",
      "Pode ser usada em linhas transparentes ou opacas, conforme a formulação.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-marine",
    nome: "Fragrância Marine",
    descricao:
      "Fragrância de perfil aquático e refrescante, muito usada em produtos de limpeza com proposta de frescor prolongado.",
    destaques: [
      "Notas aquáticas e refrescantes.",
      "Boa percepção de limpeza leve e moderna.",
      "Versátil para linhas domésticas e profissionais.",
    ],
    aplicacoes: [
      "Desinfetantes, limpadores e odorizadores.",
      "Produtos de manutenção diária e perfumação do ambiente.",
      "Linhas com apelo de frescor marinho.",
    ],
    informacoes: [
      "Perfil olfativo geralmente associado a notas aquáticas e limpas.",
      "Combina bem com propostas de fragrância fresca e contínua.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-giovana-baby",
    nome: "Fragrância Giovana Baby",
    descricao:
      "Fragrância suave com perfil floral atalcado, indicada para produtos que buscam sensação de cuidado, limpeza e conforto.",
    destaques: [
      "Perfil delicado e aconchegante.",
      "Aroma suave com lembrança atalcada.",
      "Boa escolha para linhas de lavanderia e sabonetes.",
    ],
    aplicacoes: [
      "Amaciantes, lava-roupas e sabonetes líquidos.",
      "Odorizantes e linhas com apelo de conforto.",
      "Produtos perfumados com saída floral suave.",
    ],
    informacoes: [
      "Perfil olfativo associado a notas florais macias e atalcadas.",
      "Pode funcionar bem em linhas de cuidado têxtil e perfumação suave.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-gabriela-sabatine-global",
    nome: "Fragrância Gabriela Sabatine Global",
    descricao:
      "Fragrância com proposta floral sofisticada, indicada para composições que buscam perfume mais marcante e elegante.",
    destaques: [
      "Perfil floral mais elaborado.",
      "Boa presença olfativa no produto final.",
      "Pode valorizar linhas de maior apelo perfumado.",
    ],
    aplicacoes: [
      "Amaciantes, sabonetes líquidos e aromatizadores.",
      "Produtos de limpeza com proposta mais sofisticada.",
      "Linhas que priorizam perfume perceptível após o uso.",
    ],
    informacoes: [
      "Perfil olfativo com leitura floral elegante.",
      "A intensidade final depende da dosagem e da base aplicada.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-algas-marinhas",
    nome: "Fragrância Algas Marinhas",
    descricao:
      "Fragrância fresca de inspiração marinha, indicada para linhas que pedem sensação de leveza e limpeza prolongada.",
    destaques: [
      "Perfil aquático com toque verde.",
      "Comunica frescor e limpeza contínua.",
      "Boa opção para produtos de manutenção diária.",
    ],
    aplicacoes: [
      "Limpadores perfumados, desinfetantes e aromatizadores.",
      "Produtos para pisos, banheiros e áreas internas.",
      "Linhas com proposta marinha ou verde fresca.",
    ],
    informacoes: [
      "Fragrância ligada a notas aquáticas com nuance verde.",
      "Pode reforçar percepção de ambiente limpo e ventilado.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-tutti-frutti",
    nome: "Fragrância Tutti Frutti",
    descricao:
      "Fragrância frutada e alegre, indicada para linhas perfumadas com apelo doce, vibrante e de fácil aceitação.",
    destaques: [
      "Perfil frutado doce e marcante.",
      "Boa percepção olfativa já nas primeiras notas.",
      "Ajuda a diferenciar linhas mais descontraídas.",
    ],
    aplicacoes: [
      "Sabonetes líquidos, aromatizadores e limpadores perfumados.",
      "Linhas voltadas a perfume mais frutado.",
      "Produtos com proposta jovem e vibrante.",
    ],
    informacoes: [
      "Perfil olfativo normalmente construído com notas frutadas doces.",
      "A intensidade da doçura varia conforme a dosagem adotada.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-erva-doce",
    nome: "Fragrância Erva-Doce",
    descricao:
      "Fragrância herbal adocicada de boa aceitação, muito usada em linhas de sabonetes, amaciantes e produtos de limpeza suaves.",
    destaques: [
      "Perfil herbal suave e confortável.",
      "Aroma tradicional e de fácil reconhecimento.",
      "Boa aderência a linhas de uso frequente.",
    ],
    aplicacoes: [
      "Sabonetes líquidos, amaciantes e lava-roupas.",
      "Desinfetantes e limpadores com perfume suave.",
      "Linhas que buscam sensação de cuidado e limpeza.",
    ],
    informacoes: [
      "A fragrância costuma combinar notas herbais, adocicadas e limpas.",
      "É uma das famílias olfativas mais conhecidas em linhas domésticas.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-lavanda-gleid",
    nome: "Fragrância Lavanda Gleid",
    descricao:
      "Fragrância de lavanda com perfil limpo e acolhedor, indicada para produtos de limpeza e lavanderia de uso diário.",
    destaques: [
      "Notas clássicas de lavanda.",
      "Boa leitura de limpeza e conforto.",
      "Versátil para diferentes linhas perfumadas.",
    ],
    aplicacoes: [
      "Desinfetantes, amaciantes e lava-roupas.",
      "Limpadores domésticos de manutenção diária.",
      "Produtos com proposta de perfume tradicional de lavanda.",
    ],
    informacoes: [
      "Família olfativa de ampla aceitação em produtos de limpeza.",
      "Combina bem com linhas que pedem perfume reconhecível e confortável.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-talco",
    nome: "Fragrância Talco",
    descricao:
      "Fragrância atalcada e suave, indicada para linhas que buscam sensação de limpeza delicada e aconchegante.",
    destaques: [
      "Perfil suave e confortável.",
      "Boa percepção de limpeza delicada.",
      "Muito usada em linhas de lavanderia e cuidado.",
    ],
    aplicacoes: [
      "Amaciantes, sabonetes líquidos e odorizadores.",
      "Desinfetantes e limpadores com perfume suave.",
      "Produtos com proposta de conforto e maciez.",
    ],
    informacoes: [
      "Fragrância com leitura atalcada e macia.",
      "Pode ser combinada a linhas que privilegiam suavidade olfativa.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-topo-flor",
    nome: "Fragrância Topo Flor",
    descricao:
      "Fragrância floral leve, indicada para composições que buscam perfume agradável, limpo e de boa permanência.",
    destaques: [
      "Perfil floral limpo e equilibrado.",
      "Boa adaptação a diferentes tipos de base.",
      "Ajuda a construir linhas florais de uso diário.",
    ],
    aplicacoes: [
      "Desinfetantes, amaciantes e aromatizadores.",
      "Limpadores e sabonetes líquidos perfumados.",
      "Produtos com proposta floral fresca.",
    ],
    informacoes: [
      "Família floral de leitura simples e comercial.",
      "A performance final depende do sistema fragrante e da base aplicada.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-coco-brasil",
    nome: "Fragrância Coco Brasil",
    descricao:
      "Fragrância de coco com perfil cremoso e tropical, indicada para linhas de lavanderia, sabonetes e perfumação suave.",
    destaques: [
      "Perfil de coco cremoso e reconhecível.",
      "Boa aceitação em linhas domésticas.",
      "Ajuda a criar identidade olfativa mais quente e confortável.",
    ],
    aplicacoes: [
      "Lava-roupas, amaciantes e sabonetes líquidos.",
      "Aromatizadores e linhas perfumadas suaves.",
      "Produtos com proposta tropical ou cremosa.",
    ],
    informacoes: [
      "Fragrância ligada a notas cremosas e levemente adocicadas.",
      "Pode ser usada em linhas de cuidado têxtil e limpeza perfumada.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-caiaque",
    nome: "Fragrância Caiaque",
    descricao:
      "Fragrância fresca com leitura mais masculina e esportiva, indicada para produtos que pedem perfume moderno e marcante.",
    destaques: [
      "Perfil fresco e contemporâneo.",
      "Boa presença olfativa no produto final.",
      "Ajuda a diferenciar linhas com proposta mais esportiva.",
    ],
    aplicacoes: [
      "Aromatizadores, amaciantes e sabonetes líquidos.",
      "Produtos de limpeza com proposta de perfume fresco.",
      "Linhas em que a identidade olfativa é parte do apelo comercial.",
    ],
    informacoes: [
      "Leitura olfativa normalmente associada a frescor e notas aromáticas.",
      "A fixação final depende da base e do nível de dosagem.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-limao-ajax",
    nome: "Fragrância Limão Ajax",
    descricao:
      "Fragrância cítrica intensa, indicada para linhas de limpeza que precisam transmitir frescor, desengraxe e sensação imediata de limpeza.",
    destaques: [
      "Perfil cítrico forte e direto.",
      "Boa associação com limpeza pesada e cozinha.",
      "Ajuda a comunicar frescor logo na aplicação.",
    ],
    aplicacoes: [
      "Detergentes, multiusos e limpadores perfumados.",
      "Desengraxantes e linhas com apelo cítrico.",
      "Produtos de uso diário em cozinhas e áreas laváveis.",
    ],
    informacoes: [
      "Fragrância de leitura cítrica clássica em produtos saneantes.",
      "Costuma funcionar bem em linhas que buscam percepção de limpeza ativa.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-veja-azul",
    nome: "Fragrância Veja Azul",
    descricao:
      "Fragrância de limpeza fresca e versátil, indicada para produtos de manutenção diária e linhas multiuso.",
    destaques: [
      "Perfil limpo e de fácil reconhecimento.",
      "Boa opção para produtos multiuso.",
      "Ajuda a reforçar percepção de ambiente bem cuidado.",
    ],
    aplicacoes: [
      "Multiusos, limpadores perfumados e desinfetantes.",
      "Produtos para manutenção de pisos e superfícies.",
      "Linhas com proposta de limpeza diária e perfume fresco.",
    ],
    informacoes: [
      "Leitura olfativa relacionada a notas de limpeza e frescor.",
      "É uma fragrância comercial de fácil aceitação no segmento.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-dony",
    nome: "Fragrância Dony",
    descricao:
      "Fragrância suave com perfil de maciez e roupa limpa, indicada para linhas de lavanderia e cuidado têxtil.",
    destaques: [
      "Boa associação com roupa limpa e macia.",
      "Perfil confortável e comercial.",
      "Indicação forte para amaciantes e lava-roupas.",
    ],
    aplicacoes: [
      "Amaciantes, lava-roupas e aromatizadores de tecidos.",
      "Sabonetes líquidos e linhas de cuidado.",
      "Produtos que pedem leitura olfativa de conforto.",
    ],
    informacoes: [
      "Fragrância ligada a notas limpas, suaves e confortáveis.",
      "Funciona bem em linhas em que o perfume precisa lembrar lavanderia.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-trigo-neutral",
    nome: "Fragrância Trigo Neutral",
    descricao:
      "Fragrância neutra e suave, indicada para composições que pedem perfume discreto e fácil adaptação a diferentes linhas.",
    destaques: [
      "Perfil neutro e equilibrado.",
      "Boa opção para linhas com perfume mais discreto.",
      "Versátil para diferentes tipos de produto.",
    ],
    aplicacoes: [
      "Sabonetes líquidos, amaciantes e limpadores suaves.",
      "Linhas técnicas que pedem perfume leve.",
      "Produtos em que o excesso de perfume não é desejado.",
    ],
    informacoes: [
      "Fragrância de baixa agressividade olfativa.",
      "Pode ser usada quando a proposta é suavidade e neutralidade.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-momo-duplicacao",
    nome: "Fragrância Momo Duplicação",
    descricao:
      "Fragrância de perfil comercial conhecida em linhas duplicadas, indicada para produtos que pedem perfume familiar e de boa aceitação.",
    destaques: [
      "Boa identificação comercial.",
      "Perfil olfativo conhecido pelo consumidor.",
      "Pode agregar valor percebido à linha perfumada.",
    ],
    aplicacoes: [
      "Lava-roupas, amaciantes e aromatizadores.",
      "Sabonetes líquidos e produtos de limpeza perfumados.",
      "Linhas que buscam fragrância de reconhecimento rápido.",
    ],
    informacoes: [
      "A construção olfativa final depende do padrão de duplicação utilizado.",
      "A dosagem deve ser ajustada conforme intensidade desejada no produto final.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-dove",
    nome: "Fragrância Dove",
    descricao:
      "Fragrância cremosa e suave, indicada para linhas que buscam sensação de cuidado, conforto e limpeza delicada.",
    destaques: [
      "Perfil cremoso e confortável.",
      "Boa leitura de limpeza suave e cuidado pessoal.",
      "Versátil para linhas perfumadas delicadas.",
    ],
    aplicacoes: [
      "Sabonetes líquidos, amaciantes e aromatizadores.",
      "Produtos de limpeza com perfume suave e limpo.",
      "Linhas com proposta de conforto e maciez.",
    ],
    informacoes: [
      "A leitura olfativa costuma combinar suavidade, cremosidade e sensação de cuidado.",
      "Funciona bem em bases em que o perfume precisa permanecer elegante e discreto.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-floral-rose",
    nome: "Fragrância Floral Rose",
    descricao:
      "Fragrância floral rosada, indicada para produtos que pedem perfume feminino, delicado e marcante na medida certa.",
    destaques: [
      "Perfil floral com leitura de rosas.",
      "Boa aceitação em linhas perfumadas femininas.",
      "Ajuda a criar percepção de elegância e cuidado.",
    ],
    aplicacoes: [
      "Amaciantes, sabonetes líquidos e aromatizadores.",
      "Desinfetantes e limpadores perfumados florais.",
      "Produtos com proposta floral delicada.",
    ],
    informacoes: [
      "Família floral rosada bastante conhecida comercialmente.",
      "A nuance final pode variar entre rosa fresca, suave ou mais aveludada.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-lavanda-musque",
    nome: "Fragrância Lavanda Musque",
    descricao:
      "Fragrância de lavanda com fundo musk, indicada para linhas que buscam perfume limpo, confortável e com boa permanência.",
    destaques: [
      "Combina frescor da lavanda com fundo macio.",
      "Boa sensação de limpeza e aconchego.",
      "Versátil para lavanderia e limpeza perfumada.",
    ],
    aplicacoes: [
      "Amaciantes, lava-roupas e desinfetantes.",
      "Aromatizadores e produtos de perfumação suave.",
      "Linhas com proposta de lavanda mais encorpada.",
    ],
    informacoes: [
      "O fundo musk tende a trazer maior maciez à leitura olfativa.",
      "Pode entregar perfume mais redondo e confortável no produto final.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-pessego",
    nome: "Fragrância Pêssego",
    descricao:
      "Fragrância frutada de pêssego, indicada para linhas perfumadas com proposta doce, agradável e de boa aceitação.",
    destaques: [
      "Perfil frutado doce e macio.",
      "Boa percepção olfativa sem ser excessivamente agressiva.",
      "Ajuda a construir linhas mais alegres e comerciais.",
    ],
    aplicacoes: [
      "Sabonetes líquidos, aromatizadores e limpadores perfumados.",
      "Linhas domésticas com apelo frutado.",
      "Produtos com proposta de perfume doce e amigável.",
    ],
    informacoes: [
      "Família frutada de fácil aceitação no varejo.",
      "A sensação de doçura final depende da concentração aplicada.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-cha-branco",
    nome: "Fragrância Chá Branco",
    descricao:
      "Fragrância leve e elegante, indicada para produtos que buscam frescor sofisticado e perfume limpo de boa permanência.",
    destaques: [
      "Perfil suave, fresco e sofisticado.",
      "Boa aceitação em linhas premium.",
      "Ajuda a construir sensação de limpeza refinada.",
    ],
    aplicacoes: [
      "Aromatizadores, desinfetantes e limpadores perfumados.",
      "Amaciantes e sabonetes líquidos com proposta elegante.",
      "Produtos em que o perfume é parte importante do valor percebido.",
    ],
    informacoes: [
      "A leitura olfativa costuma ser fresca, leve e limpa.",
      "Funciona bem em linhas que buscam perfume sofisticado sem excesso.",
    ],
  }),
  criarFragrancia({
    chave: "fragrancia-bambu",
    nome: "Fragrância Bambu",
    descricao:
      "Fragrância verde e fresca, indicada para produtos de limpeza e aromatização com proposta leve, moderna e natural.",
    destaques: [
      "Perfil verde fresco e muito comercial.",
      "Boa percepção de leveza e ambiente limpo.",
      "Versátil para linhas domésticas e institucionais.",
    ],
    aplicacoes: [
      "Limpadores perfumados, desinfetantes e aromatizadores.",
      "Produtos para pisos, banheiros e áreas internas.",
      "Linhas com apelo verde, fresco e contemporâneo.",
    ],
    informacoes: [
      "Fragrância associada a notas verdes e limpas.",
      "Pode entregar boa sensação de frescor contínuo no ambiente.",
    ],
  }),
];
