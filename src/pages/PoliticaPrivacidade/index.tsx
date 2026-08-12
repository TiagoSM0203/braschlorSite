import { Container, PageSection } from "../../styles";
import ScrollReveal from "../Home/scrollReveal";
import { PolicyContent, PolicyText } from "./styles";

const privacyPolicyText =
  "A Braschlor Produtos Químicos LTDA coleta dados pessoais como nome, telefone e e-mail, fornecidos voluntariamente através dos formulários deste site e de nossos anúncios. Esses dados são utilizados exclusivamente para fins de contato comercial, incluindo o programa de parceria de revenda. Não compartilhamos essas informações com terceiros, exceto quando exigido por lei. Para dúvidas, solicitação de acesso ou exclusão de seus dados, entre em contato através dos canais disponíveis neste site.";

const PoliticaPrivacidadePage = () => (
  <PageSection>
    <Container>
      <ScrollReveal delay={80}>
        {({ revealProps, revealRef }) => (
          <PolicyContent ref={revealRef} {...revealProps}>
            <PolicyText>{privacyPolicyText}</PolicyText>
          </PolicyContent>
        )}
      </ScrollReveal>
    </Container>
  </PageSection>
);

export default PoliticaPrivacidadePage;
