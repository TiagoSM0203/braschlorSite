import { IoChevronDownOutline, IoSearchOutline } from "react-icons/io5";
import { Container, PageSection } from "../../styles";
import { BuscaWrapper, ProdutosToolbar, SelectWrapper } from "./styles";

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
    </Container>
  </PageSection>
)

export default NossosProdutosPage;
