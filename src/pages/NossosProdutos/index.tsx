import aguaSanitaria from "../../assets/imgs/produtos-imgs/agua-sanitaria-5l-2l.png";
import alvejante from "../../assets/imgs/produtos-imgs/alvejante.png";
import amaciante from "../../assets/imgs/produtos-imgs/amaciante.png";
import branquinho from "../../assets/imgs/produtos-imgs/branquinho.png";
import cloro from "../../assets/imgs/produtos-imgs/cloro.png";
import cloroGel from "../../assets/imgs/produtos-imgs/cloro-gel.png";
import limpaVidros from "../../assets/imgs/produtos-imgs/limpa-vidros-5l-2l.png";
import mercadoLivre from "../../assets/imgs/mercado-livre.png";
import pretinho from "../../assets/imgs/produtos-imgs/pretinho.png";
import querosene from "../../assets/imgs/produtos-imgs/querosene-5l-2l.png";
import shopee from "../../assets/imgs/shopee.png";
import silicone from "../../assets/imgs/produtos-imgs/silicone-g-p.png";
import { IoChevronDownOutline, IoLinkOutline, IoSearchOutline } from "react-icons/io5";
import { Container, PageSection } from "../../styles";
import {
  BuscaWrapper,
  ProdutoAction,
  ProdutoCard,
  ProdutoImageBox,
  ProdutoMarketplaceButton,
  ProdutoMarketplaceRow,
  ProdutoNome,
  ProdutosGrid,
  ProdutosToolbar,
  SelectWrapper,
} from "./styles";

const produtos = [
  {
    nome: "Sabão fluorescente Branquinho 5L",
    imagem: branquinho,
  },
  {
    nome: "Sabão querosene Branquinho 5L",
    imagem: querosene,
  },
  {
    nome: "Alvejante sem cloro 5L",
    imagem: alvejante,
  },
  {
    nome: "Água sanitária 5L",
    imagem: aguaSanitaria,
  },
  {
    nome: "Cloro perfumado 5L",
    imagem: cloro,
  },
  {
    nome: "Cloro gel 5L",
    imagem: cloroGel,
  },
  {
    nome: "Amaciante concentrado 5L",
    imagem: amaciante,
  },
  {
    nome: "Limpa vidros 5L",
    imagem: limpaVidros,
  },
  {
    nome: "Pretinho automotivo 500ml",
    imagem: pretinho,
  },
  {
    nome: "Silicone gel perfumado",
    imagem: silicone,
  },
];

const NossosProdutosPage = () => (
  <PageSection>
    <Container>
      <ProdutosToolbar>
        <BuscaWrapper>
          <input type="search" placeholder="Buscar..." aria-label="Buscar produtos" />
          <IoSearchOutline />
        </BuscaWrapper>

        <SelectWrapper>
          <select defaultValue="Todos" aria-label="Filtrar por categoria">
            <option value="Todos">Todos</option>
            <option value="Detergentes">Detergentes</option>
            <option value="Linha Cloro">Linha Cloro</option>
            <option value="Limpeza pesada">Limpeza pesada</option>
            <option value="Desinfetantes">Desinfetantes</option>
            <option value="Lavanderia">Lavanderia</option>
            <option value="Linha automotiva">Linha automotiva</option>
            <option value="Revenda">Revenda</option>
          </select>
          <IoChevronDownOutline />
        </SelectWrapper>
      </ProdutosToolbar>

      <ProdutosGrid>
        {produtos.map(({ nome, imagem }) => (
          <ProdutoCard key={nome}>
            <ProdutoImageBox>
              <img src={imagem} alt={nome} />
              <ProdutoAction type="button">Ver produto</ProdutoAction>
            </ProdutoImageBox>
            <ProdutoNome>{nome}</ProdutoNome>
            <ProdutoMarketplaceRow>
              <ProdutoMarketplaceButton type="button" $variant="shopee">
                <img src={shopee} alt="Shopee" />
                <IoLinkOutline />
              </ProdutoMarketplaceButton>
              <ProdutoMarketplaceButton type="button" $variant="mercadoLivre">
                <img src={mercadoLivre} alt="Mercado Livre" />
                <IoLinkOutline />
              </ProdutoMarketplaceButton>
            </ProdutoMarketplaceRow>
          </ProdutoCard>
        ))}
      </ProdutosGrid>
    </Container>
  </PageSection>
)

export default NossosProdutosPage;
