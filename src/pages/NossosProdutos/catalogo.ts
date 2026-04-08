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
  "Matérias-primas",
  "Fragrâncias",
] as const;

export type CategoriaProduto = (typeof categoriasProduto)[number];

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
