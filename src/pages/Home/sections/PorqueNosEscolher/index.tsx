import { Container, TitleAndSubtitle } from "../../../../styles";
import industria from "../../../../assets/imgs/mascote-industria.png";
import rendimento from "../../../../assets/imgs/rendimento.png";
import entrega from "../../../../assets/imgs/entrega.png";
import atendimento from "../../../../assets/imgs/escritorio.png";
import estoque from "../../../../assets/imgs/estoque.png";
import linha from "../../../../assets/imgs/linha.png";
import revenda from "../../../../assets/imgs/venda.png";

import numero1 from "../../../../assets/imgs/numero1.png";
import numero2 from "../../../../assets/imgs/numero2.png";
import numero3 from "../../../../assets/imgs/numero3.png";
import numero4 from "../../../../assets/imgs/numero4.png";
import numero5 from "../../../../assets/imgs/numero5.png";
import numero6 from "../../../../assets/imgs/numero6.png";
import numero7 from "../../../../assets/imgs/numero7.png";

import {
  PorqueNosEscolherCard,
  PorqueNosEscolherContent,
  PorqueNosEscolherContentTitle,
  PorqueNosEscolherCta,
  PorqueNosEscolherSection,
} from "./styles";
import { Button } from "../../../../components/header/styles";

const PorqueNosEscolher = () => (
  <Container>
    <TitleAndSubtitle>
      <h1>Por que escolher a nossa marca?</h1>
      <p>
        Qualidade de indústria, rendimento real e produto que entrega resultado.
      </p>
    </TitleAndSubtitle>
    <PorqueNosEscolherSection>
      <PorqueNosEscolherCard>
        <img src={industria} alt="Mascote Industria" />
        <PorqueNosEscolherContent>
          <PorqueNosEscolherContentTitle>
            <img className="number" src={numero1} alt="Numero 1" />
            <h2>Direto da indústria</h2>
          </PorqueNosEscolherContentTitle>
          <h4>Produção própria e padrão de qualidade.</h4>
          <p>
            Nossos produtos saem direto da fábrica, com controle no processo e
            mais custo-benefício para quem compra para usar ou para revender.
          </p>
        </PorqueNosEscolherContent>
      </PorqueNosEscolherCard>
      <PorqueNosEscolherCard>
        <PorqueNosEscolherContent>
          <PorqueNosEscolherContentTitle>
            <img className="number" src={numero2} alt="Numero 2" />
            <h2>Alto rendimento</h2>
          </PorqueNosEscolherContentTitle>
          <h4>Mais produto, mais resultado.</h4>
          <p>
            Fórmulas pensadas para render mais no uso diário, entregando limpeza eficiente sem desperdício e com excelente performance.
          </p>
        </PorqueNosEscolherContent>
        <img src={rendimento} alt="Mascote Rendimento" />
      </PorqueNosEscolherCard>
      <PorqueNosEscolherCard>
        <img src={entrega} alt="Mascote Entrega" />
        <PorqueNosEscolherContent>
          <PorqueNosEscolherContentTitle>
            <img className="number" src={numero3} alt="Numero 3" />
            <h2>Entrega rápida e eficiente</h2>
          </PorqueNosEscolherContentTitle>
          <h4>Entrega de qualidade e com mais segurança.</h4>
          <p>
            Nós mesmos fazemos a entrega para distribuidores, garantindo mais agilidade, menos atrasos e mais controle do pedido até chegar no destino.
          </p>
        </PorqueNosEscolherContent>
      </PorqueNosEscolherCard>
      <PorqueNosEscolherCard>
        <PorqueNosEscolherContent>
          <PorqueNosEscolherContentTitle>
            <img className="number" src={numero4} alt="Numero 4" />
            <h2>Atendimento rápido</h2>
          </PorqueNosEscolherContentTitle>
          <h4>Você fala direto com quem resolve.</h4>
          <p>
            Atendimento simples e direto, com suporte para tirar dúvidas, indicar produtos e ajudar você a comprar ou revender com segurança.
          </p>
        </PorqueNosEscolherContent>
        <img src={atendimento} alt="Mascote Atendimento" />
      </PorqueNosEscolherCard>
      <PorqueNosEscolherCard>
        <img src={linha} alt="Mascote Linha Completa" />
        <PorqueNosEscolherContent>
          <PorqueNosEscolherContentTitle>
            <img className="number" src={numero5} alt="Numero 5" />
            <h2>Linha completa</h2>
          </PorqueNosEscolherContentTitle>
          <h4>Produtos para toda necessidade.</h4>
          <p>
            Temos opções para lavanderia, limpeza pesada, perfumados e uso profissional, atendendo tanto consumidores quanto revendedores.
          </p>
        </PorqueNosEscolherContent>
      </PorqueNosEscolherCard>
      <PorqueNosEscolherCard>
        <PorqueNosEscolherContent>
          <PorqueNosEscolherContentTitle>
            <img className="number" src={numero6} alt="Numero 6" />
            <h2>Estoque e reposição constante</h2>
          </PorqueNosEscolherContentTitle>
          <h4>Reposição confiável para revenda.</h4>
          <p>
            Trabalhamos para manter disponibilidade e giro dos produtos, ajudando distribuidores e revendedores a não perderem venda por falta de estoque.
          </p>
        </PorqueNosEscolherContent>
        <img src={estoque} alt="Mascote Estoque" />
      </PorqueNosEscolherCard>
      <PorqueNosEscolherCard>
        <img src={revenda} alt="Mascote Revenda" />
        <PorqueNosEscolherContent>
          <PorqueNosEscolherContentTitle>
            <img className="number" src={numero7} alt="Numero 1" />
            <h2>Condição especial para revenda</h2>
          </PorqueNosEscolherContentTitle>
          <h4>Mais margem e melhor negociação.</h4>
          <p>
            Condições pensadas para revendedores e distribuidores, com opções que facilitam aumentar o lucro e escalar suas vendas.
          </p>
        </PorqueNosEscolherContent>
      </PorqueNosEscolherCard>
      <PorqueNosEscolherCta>
        <p>
          Quer ser um distribuidor dos nossos produtos e aumentar suas vendas? Clique no botão
          abaixo e fale com um de nossos vendedores agora mesmo!
        </p>
        <Button href="https://wa.me/5511993521508">Quero revender</Button>
      </PorqueNosEscolherCta>
    </PorqueNosEscolherSection>
  </Container>
);

export default PorqueNosEscolher;
