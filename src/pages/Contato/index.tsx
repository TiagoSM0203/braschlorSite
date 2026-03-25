import { Container, PageContentCard, PageEyebrow, PageSection } from "../../styles";

const ContatoPage = () => (
  <PageSection>
    <Container>
      <PageContentCard>
        <PageEyebrow>Contato</PageEyebrow>
        <p>
          Esta pagina ja esta isolada para receber formulario, WhatsApp, telefone,
          endereco e qualquer outra forma de contato que voce quiser adicionar.
        </p>
      </PageContentCard>
    </Container>
  </PageSection>
);

export default ContatoPage;
