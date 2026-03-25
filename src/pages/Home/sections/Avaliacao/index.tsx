import { FaStar } from "react-icons/fa6";
import { Container } from "../../../../styles";
import mascotMobile from "../../../../assets/imgs/mascote-bracos-cruzados.png";
import mascot from "../../../../assets/imgs/mascote-encostado.png";
import {
    AvaliacaoBody,
    AvaliacaoCard,
    AvaliacaoCards,
    AvaliacaoMascot,
    AvaliacaoSection,
    AvaliacaoStars,
    AvaliacaoTitle
} from "./styles";

const avaliacoes = [
    {
        texto: "Comprei o lava roupas e o percarbonato e me surpreendi muito. Qualidade excelente, limpa de verdade e rende bastante.",
        autor: "Carla Mendes"
    },
    {
        texto: "Trabalho com limpeza h\u00e1 anos e posso dizer que esses produtos t\u00eam um \u00f3timo padr\u00e3o. Pre\u00e7o bom e qualidade consistente. Meus clientes est\u00e3o elogiando bastante!",
        autor: "Patr\u00edcia Oliveira"
    },
    {
        texto: "N\u00e3o entendo nada de lavagem de roupas, comprei esse percarbonato sem botar muita f\u00e9, fiquei surpreso com o resultado! Voc\u00eas est\u00e3o de parab\u00e9ns, vou comprar mais!",
        autor: "Bruno Carvalho"
    },
    {
        texto: "Peguei alguns produtos pra testar, principalmente o percarbonato e o lava roupas azul. Vendeu mais r\u00e1pido do que eu esperava. O pessoal gostou bastante! Parab\u00e9ns!",
        autor: "Diego Martins"
    }
];

const Avaliacao = () => (
    <Container>
        <AvaliacaoSection>
            <AvaliacaoTitle>
                <h1>Confian\u00e7a Constru\u00edda na Pr\u00e1tica</h1>
                <p>Avalia\u00e7\u00f5es reais que comprovam a performance e a qualidade da nossa linha.</p>
            </AvaliacaoTitle>
            <AvaliacaoBody>
                <AvaliacaoMascot>
                    <picture>
                        <source media="(max-width: 920px)" srcSet={mascotMobile} />
                        <img src={mascot} alt="Mascote apoiado nos cards de avaliacao" />
                    </picture>
                </AvaliacaoMascot>
                <AvaliacaoCards>
                    {avaliacoes.map(({ texto, autor }) => (
                        <AvaliacaoCard key={autor}>
                            <AvaliacaoStars aria-label="5 estrelas">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </AvaliacaoStars>
                            <p>{texto}</p>
                            <h4>{autor}</h4>
                        </AvaliacaoCard>
                    ))}
                </AvaliacaoCards>
            </AvaliacaoBody>
        </AvaliacaoSection>
    </Container>
);

export default Avaliacao;
