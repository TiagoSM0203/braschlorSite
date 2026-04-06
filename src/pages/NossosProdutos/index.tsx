import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { useSearchParams } from "react-router-dom";
import {
  IoBusinessOutline,
  IoCarSportOutline,
  IoCloseOutline,
  IoFlashOutline,
  IoFlaskOutline,
  IoFilterOutline,
  IoLayersOutline,
  IoShirtOutline,
  IoSparklesOutline,
  IoStorefrontOutline,
  IoWaterOutline,
} from "react-icons/io5";
import { Container, PageSection } from "../../styles";
import ProdutoMarketplaces from "./ProdutoMarketplaces";
import { categoriasProduto, getProdutoPath, produtos } from "./produtos";
import type { CategoriaProduto } from "./produtos";
import {
  CategoriaCard,
  CategoriaCardContent,
  CategoriaCardCount,
  CategoriaCardFooter,
  CategoriaCardHint,
  CategoriaCardIcon,
  CategoriasGrid,
  CategoriasSidebarDescription,
  CategoriasSidebar,
  CategoriasSidebarBackdrop,
  CategoriasSidebarCloseButton,
  CategoriasSidebarHeader,
  CategoriasSidebarIntro,
  CategoriasSidebarPanel,
  FiltroGhostButton,
  ProdutoAction,
  ProdutoCard,
  ProdutosContent,
  ProdutosEmpty,
  ProdutosEmptyText,
  ProdutosEmptyTitle,
  ProdutoImageBox,
  ProdutoNome,
  ProdutosGrid,
  ProdutosLayout,
  SidebarSummary,
  SidebarToggleBar,
  SidebarToggleButton,
} from "./styles";

const categoriaMeta: Record<
  CategoriaProduto,
  { icon: IconType }
> = {
  Detergentes: {
    icon: IoWaterOutline,
  },
  "Linha Cloro": {
    icon: IoFlaskOutline,
  },
  "Limpeza pesada": {
    icon: IoFlashOutline,
  },
  Desinfetantes: {
    icon: IoSparklesOutline,
  },
  Lavanderia: {
    icon: IoShirtOutline,
  },
  "Linha automotiva": {
    icon: IoCarSportOutline,
  },
  Revenda: {
    icon: IoStorefrontOutline,
  },
  "Para superfícies": {
    icon: IoLayersOutline,
  },
  "Uso profissional": {
    icon: IoBusinessOutline,
  },
};

const quantidadePorCategoria = categoriasProduto.reduce(
  (acc, categoria) => {
    acc[categoria] = produtos.filter(
      (produto) => produto.categoria === categoria,
    ).length;

    return acc;
  },
  {} as Record<CategoriaProduto, number>,
);

const NossosProdutosPage = () => {
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 901px)");
    const atualizarSidebar = (event?: MediaQueryListEvent) => {
      const correspondeDesktop = event?.matches ?? mediaQuery.matches;
      setSidebarAberta(correspondeDesktop);
    };

    atualizarSidebar();
    mediaQuery.addEventListener("change", atualizarSidebar);

    return () => {
      mediaQuery.removeEventListener("change", atualizarSidebar);
    };
  }, []);

  const categoriasNaUrl = searchParams.getAll("categoria");
  const categoriasSelecionadas = categoriasProduto.filter((categoria) =>
    categoriasNaUrl.includes(categoria),
  );
  const semCategoriasSelecionadas = categoriasSelecionadas.length === 0;

  const atualizarCategoriasSelecionadas = (
    proximasCategorias: CategoriaProduto[],
  ) => {
    const proximosSearchParams = new URLSearchParams(searchParams);

    proximosSearchParams.delete("categoria");
    proximasCategorias.forEach((categoria) => {
      proximosSearchParams.append("categoria", categoria);
    });

    setSearchParams(proximosSearchParams);
  };

  const alternarCategoria = (categoria: CategoriaProduto) => {
    if (categoriasSelecionadas.includes(categoria)) {
      atualizarCategoriasSelecionadas(
        categoriasSelecionadas.filter((item) => item !== categoria),
      );

      return;
    }

    atualizarCategoriasSelecionadas(
      categoriasProduto.filter(
        (item) => item === categoria || categoriasSelecionadas.includes(item),
      ),
    );
  };

  const mostrarTodasCategorias = () => {
    atualizarCategoriasSelecionadas([]);
  };

  const produtosFiltrados = semCategoriasSelecionadas
    ? produtos
    : produtos.filter((produto) =>
        categoriasSelecionadas.includes(produto.categoria),
      );

  return (
    <PageSection>
      <Container>
        <SidebarToggleBar>
          <SidebarToggleButton
            type="button"
            onClick={() => setSidebarAberta((estadoAtual) => !estadoAtual)}
            aria-expanded={sidebarAberta}
            aria-controls="categorias-sidebar"
          >
            {sidebarAberta ? <IoCloseOutline /> : <IoFilterOutline />}
            <span>{sidebarAberta ? "Fechar categorias" : "Abrir categorias"}</span>
          </SidebarToggleButton>

          <SidebarSummary>
            <strong>{produtosFiltrados.length}</strong>
            <span>produtos visíveis</span>
            <small>
              {semCategoriasSelecionadas
                ? "Todas as categorias"
                : `${categoriasSelecionadas.length} categorias ativas`}
            </small>
          </SidebarSummary>
        </SidebarToggleBar>

        <CategoriasSidebarBackdrop
          type="button"
          $open={sidebarAberta}
          onClick={() => setSidebarAberta(false)}
          aria-label="Fechar painel de categorias"
        />

        <ProdutosLayout $sidebarOpen={sidebarAberta}>
          <CategoriasSidebar id="categorias-sidebar" $open={sidebarAberta}>
            <CategoriasSidebarPanel>
              <CategoriasSidebarHeader>
                <CategoriasSidebarIntro>
                  <strong>Categorias</strong>
                  <CategoriasSidebarDescription>
                    Selecione a categoria que deseja para filtrar os produtos.
                  </CategoriasSidebarDescription>
                </CategoriasSidebarIntro>

                <CategoriasSidebarCloseButton
                  type="button"
                  onClick={() => setSidebarAberta(false)}
                  aria-label="Fechar categorias"
                >
                  <IoCloseOutline />
                </CategoriasSidebarCloseButton>
              </CategoriasSidebarHeader>

              <FiltroGhostButton
                type="button"
                onClick={mostrarTodasCategorias}
                disabled={semCategoriasSelecionadas}
              >
                Mostrar todas
              </FiltroGhostButton>

              <CategoriasGrid>
                {categoriasProduto.map((categoria) => {
                  const categoriaAtiva = categoriasSelecionadas.includes(categoria);
                  const categoriaDisponivel = quantidadePorCategoria[categoria] > 0;
                  const { icon: Icon } = categoriaMeta[categoria];

                  return (
                    <CategoriaCard
                      key={categoria}
                      $checked={categoriaAtiva}
                      $disabled={!categoriaDisponivel && !categoriaAtiva}
                    >
                      <input
                        type="checkbox"
                        checked={categoriaAtiva}
                        aria-label={`Filtrar categoria ${categoria}`}
                        onChange={() => alternarCategoria(categoria)}
                      />

                      <CategoriaCardIcon
                        $checked={categoriaAtiva}
                        $disabled={!categoriaDisponivel && !categoriaAtiva}
                      >
                        <Icon />
                      </CategoriaCardIcon>

                      <CategoriaCardContent>
                        <strong>{categoria}</strong>
                      </CategoriaCardContent>

                      <CategoriaCardFooter>
                        <CategoriaCardCount $checked={categoriaAtiva}>
                          {quantidadePorCategoria[categoria]} itens
                        </CategoriaCardCount>
                        <CategoriaCardHint $checked={categoriaAtiva}>
                          {categoriaAtiva ? "Filtrando" : "Selecionar"}
                        </CategoriaCardHint>
                      </CategoriaCardFooter>
                    </CategoriaCard>
                  );
                })}
              </CategoriasGrid>
            </CategoriasSidebarPanel>
          </CategoriasSidebar>

          <ProdutosContent>
            <ProdutosGrid>
              {produtosFiltrados.length > 0 ? (
                produtosFiltrados.map((produto) => {
                  const { chave, nome, imagem } = produto;

                  return (
                    <ProdutoCard key={chave}>
                      <ProdutoImageBox>
                        <img src={imagem} alt={nome} />
                        <ProdutoAction to={getProdutoPath(chave)}>
                          Ver produto
                        </ProdutoAction>
                      </ProdutoImageBox>
                      <ProdutoNome>{nome}</ProdutoNome>
                      <ProdutoMarketplaces produto={produto} />
                    </ProdutoCard>
                  );
                })
              ) : (
                <ProdutosEmpty>
                  <ProdutosEmptyTitle>Nenhum produto encontrado.</ProdutosEmptyTitle>
                  <ProdutosEmptyText>
                    Selecione outra categoria para visualizar mais itens do catálogo.
                  </ProdutosEmptyText>
                </ProdutosEmpty>
              )}
            </ProdutosGrid>
          </ProdutosContent>
        </ProdutosLayout>
      </Container>
    </PageSection>
  );
};

export default NossosProdutosPage;
