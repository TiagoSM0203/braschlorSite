import { useState } from "react";
import { IoChevronDownOutline, IoSearchOutline } from "react-icons/io5";
import { Container, PageSection } from "../../styles";
import ProdutoMarketplaces from "./ProdutoMarketplaces";
import { categoriasProduto, getProdutoPath, produtos } from "./produtos";
import type { CategoriaProduto } from "./produtos";
import {
  BuscaWrapper,
  ProdutoAction,
  ProdutoCard,
  ProdutosEmpty,
  ProdutoImageBox,
  ProdutoNome,
  ProdutosGrid,
  ProdutosToolbar,
  SelectWrapper,
} from "./styles";

const normalizarBusca = (valor: string) =>
  valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const NossosProdutosPage = () => {
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<"Todos" | CategoriaProduto>("Todos");

  const termoBusca = normalizarBusca(busca.trim());
  const produtosFiltrados = produtos.filter(({ nome, categoria }) => {
    const correspondeCategoria =
      categoriaSelecionada === "Todos" || categoria === categoriaSelecionada;
    const correspondeBusca =
      termoBusca.length === 0 || normalizarBusca(nome).includes(termoBusca);

    return correspondeCategoria && correspondeBusca;
  });

  return (
    <PageSection>
      <Container>
        <ProdutosToolbar>
          <BuscaWrapper>
            <input
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar produtos"
              value={busca}
              onChange={({ target }) => setBusca(target.value)}
            />
            <IoSearchOutline />
          </BuscaWrapper>

          <SelectWrapper>
            <select
              value={categoriaSelecionada}
              aria-label="Filtrar por categoria"
              onChange={({ target }) =>
                setCategoriaSelecionada(target.value as "Todos" | CategoriaProduto)
              }
            >
              <option value="Todos">Todos</option>
              {categoriasProduto.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <IoChevronDownOutline />
          </SelectWrapper>
        </ProdutosToolbar>

        <ProdutosGrid>
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => {
              const { chave, nome, imagem } = produto;

              return (
                <ProdutoCard key={chave}>
                  <ProdutoImageBox>
                    <img src={imagem} alt={nome} />
                    <ProdutoAction to={getProdutoPath(chave)}>Ver produto</ProdutoAction>
                  </ProdutoImageBox>
                  <ProdutoNome>{nome}</ProdutoNome>
                  <ProdutoMarketplaces produto={produto} />
                </ProdutoCard>
              );
            })
          ) : (
            <ProdutosEmpty>Nenhum produto encontrado com esse filtro.</ProdutosEmpty>
          )}
        </ProdutosGrid>
      </Container>
    </PageSection>
  );
};

export default NossosProdutosPage;
