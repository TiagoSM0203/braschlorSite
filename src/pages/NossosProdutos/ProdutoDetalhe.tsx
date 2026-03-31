import { Navigate, useParams } from "react-router-dom";
import { Container, PageEyebrow, PageSection } from "../../styles";
import ProdutoMarketplaces from "./ProdutoMarketplaces";
import { getProdutoByChave } from "./produtos";
import {
  ProdutoDetalheActions,
  ProdutoDetalheContent,
  ProdutoDetalheDescription,
  ProdutoDetalheHighlightsCard,
  ProdutoDetalheHighlightsItem,
  ProdutoDetalheHighlightsList,
  ProdutoDetalheLayout,
  ProdutoDetalheLink,
  ProdutoDetalheMedia,
  ProdutoDetalheMediaColumn,
  ProdutoDetalheTitle,
} from "./produtoDetalheStyles";

const ProdutoDetalhePage = () => {
  const { produtoId } = useParams();
  const produto = getProdutoByChave(produtoId);

  if (!produto) {
    return <Navigate to="/nossos-produtos" replace />;
  }

  return (
    <PageSection>
      <Container>
        <ProdutoDetalheLayout>
          <ProdutoDetalheMediaColumn>
            <ProdutoDetalheMedia>
              <img src={produto.imagem} alt={produto.nome} />
            </ProdutoDetalheMedia>
            <ProdutoMarketplaces
              produto={produto}
              caption="Compre este produto online nos nossos marketplaces."
            />
          </ProdutoDetalheMediaColumn>

          <ProdutoDetalheContent>
            <div>
              <PageEyebrow>{produto.categoria}</PageEyebrow>
              <ProdutoDetalheTitle>{produto.nome}</ProdutoDetalheTitle>
            </div>

            <ProdutoDetalheDescription>{produto.descricao}</ProdutoDetalheDescription>

            {produto.destaques.length > 0 ? (
              <ProdutoDetalheHighlightsCard>
                <h2>Destaques do produto</h2>
                <ProdutoDetalheHighlightsList>
                  {produto.destaques.map((destaque) => (
                    <ProdutoDetalheHighlightsItem key={destaque}>
                      {destaque}
                    </ProdutoDetalheHighlightsItem>
                  ))}
                </ProdutoDetalheHighlightsList>
              </ProdutoDetalheHighlightsCard>
            ) : null}

            <ProdutoDetalheActions>
              <ProdutoDetalheLink to="/nossos-produtos">
                Voltar aos produtos
              </ProdutoDetalheLink>
              <ProdutoDetalheLink target="_blank" to="https://wa.me/5511993521508" $variant="secondary">
                Falar com um vendedor
              </ProdutoDetalheLink>
            </ProdutoDetalheActions>
          </ProdutoDetalheContent>
        </ProdutoDetalheLayout>
      </Container>
    </PageSection>
  );
};

export default ProdutoDetalhePage;
