import { Navigate, useParams } from "react-router-dom";
import { Container, PageEyebrow, PageSection } from "../../styles";
import ProdutoMarketplaces from "./ProdutoMarketplaces";
import { getProdutoByChave } from "./produtos";
import {
  ProdutoDetalheActions,
  ProdutoDetalheContent,
  ProdutoDetalheDescription,
  ProdutoDetalheFragranciaCard,
  ProdutoDetalheFragranciasGrid,
  ProdutoDetalheHighlightsCard,
  ProdutoDetalheHighlightsItem,
  ProdutoDetalheHighlightsList,
  ProdutoDetalheInfoCard,
  ProdutoDetalheInfoGrid,
  ProdutoDetalheLayout,
  ProdutoDetalheLink,
  ProdutoDetalheMedia,
  ProdutoDetalheMediaColumn,
  ProdutoDetalheProfessionalCard,
  ProdutoDetalheTitle,
} from "./produtoDetalheStyles";

const fragranciasPorProduto: Partial<Record<string, string[]>> = {
  "limpadores-perfumados": [
    "Chá branco",
    "Gaby",
    "Casa Limpa",
    "Eucalipto",
    "Lavanda",
    "Marine",
    "Dama da Noite",
    "Campos Verdes",
    "Talco",
    "Wedo",
    "Violeta",
    "Jasmim",
    "Floral",
    "Bambu",
  ],
};

const ProdutoDetalhePage = () => {
  const { produtoId } = useParams();
  const produto = getProdutoByChave(produtoId);

  if (!produto) {
    return <Navigate to="/nossos-produtos" replace />;
  }

  const fragrancias = fragranciasPorProduto[produto.chave] ?? [];
  const isProdutoProfissional20L = produto.chave.startsWith("bb-");
  const temConteudoLateral =
    Boolean(produto.imagem) ||
    Boolean(produto.marketplaces && Object.keys(produto.marketplaces).length > 0) ||
    isProdutoProfissional20L ||
    fragrancias.length > 0;

  return (
    <PageSection>
      <Container>
        <ProdutoDetalheLayout $hasMedia={temConteudoLateral}>
          {temConteudoLateral ? (
            <ProdutoDetalheMediaColumn>
              {produto.imagem ? (
                <ProdutoDetalheMedia>
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    loading="eager"
                    decoding="async"
                  />
                </ProdutoDetalheMedia>
              ) : null}
              <ProdutoMarketplaces
                produto={produto}
                caption="Compre este produto on-line em nossos marketplaces."
              />
              {isProdutoProfissional20L ? (
                <ProdutoDetalheProfessionalCard>
                  <strong>Uso profissional</strong>
                  <p>
                    Produto exclusivamente para uso profissional, fornecido em
                    bombona de 20 L para operações de maior volume, reposição e
                    abastecimento contínuo.
                  </p>
                </ProdutoDetalheProfessionalCard>
              ) : null}
              {fragrancias.length > 0 ? (
                <ProdutoDetalheHighlightsCard>
                  <h2>Fragrâncias disponíveis</h2>
                  <ProdutoDetalheFragranciasGrid>
                    {fragrancias.map((fragrancia) => (
                      <ProdutoDetalheFragranciaCard key={fragrancia}>
                        {fragrancia}
                      </ProdutoDetalheFragranciaCard>
                    ))}
                  </ProdutoDetalheFragranciasGrid>
                </ProdutoDetalheHighlightsCard>
              ) : null}
            </ProdutoDetalheMediaColumn>
          ) : null}

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

            {produto.secoes.length > 0 ? (
              <ProdutoDetalheInfoGrid>
                {produto.secoes.map((secao) => (
                  <ProdutoDetalheInfoCard key={secao.titulo}>
                    <h2>{secao.titulo}</h2>
                    <ProdutoDetalheHighlightsList>
                      {secao.itens.map((item) => (
                        <ProdutoDetalheHighlightsItem key={item}>
                          {item}
                        </ProdutoDetalheHighlightsItem>
                      ))}
                    </ProdutoDetalheHighlightsList>
                  </ProdutoDetalheInfoCard>
                ))}
              </ProdutoDetalheInfoGrid>
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
