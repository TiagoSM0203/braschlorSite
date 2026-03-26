import { useState } from "react"
import { Container } from "../../../../styles"
import ScrollReveal from "../../scrollReveal"
import {
    EntreEmContatoSection,
    EntreEmContatoTitle,
    FaleConoscoColuna,
    FaleConosco,
    FaleConoscoForm,
    NomeSobrenome,
    PerguntaBotao,
    PerguntaItem,
    Perguntas,
    PerguntasLista
} from "./styles"

const perguntasFrequentes = [
    {
        pergunta: "Como faço para ser revendedor?",
        resposta: "Entre em contato pelo formulário ao lado ou pelo nosso numero de whatsapp: (11)99352-1508 ou Telefone: 4442-2403 para falar com um de nossos vendedores."
    },
    {
        pergunta: "Como faço para comprar seus produtos para uso próprio?",
        resposta: "Nossos produtos estão disponiveis para compra online nos marketplaces: Mercado Livre e Shopee! Acesse Nossos Produtos e saiba mais!"
    },
    {
        pergunta: "Posso misturar água sanitária com outros produtos?",
        resposta: "Não é recomendado. A mistura pode causar reações perigosas e causar danos a sua saúde durante o uso."
    },
    {
        pergunta: "O que fazer se o produto cair no olho ou na pele?",
        resposta: "Lave a região imediatamente com água em abundância e procure orientação médica se houver irritação persistente. Em caso de emergência, ligue para o centro de intoxicações (CEATOX) 0800-722-6001."
    },
    {
        pergunta: "Vocês têm loja física?",
        resposta: "Sim, nosso loja física com preço direto da fábrica esta localizada na R. Canário, 143 - Laranjeiras, Caieiras - SP, 07745-015. Venha nos visitar!"
    }
]

const EntreEmContato = () => {
    const [perguntaAberta, setPerguntaAberta] = useState<number | null>(0)

    const alternarPergunta = (index: number) => {
        setPerguntaAberta((atual) => (atual === index ? null : index))
    }

    return (
        <Container>
            <ScrollReveal>
                {({ revealProps, revealRef }) => (
                    <EntreEmContatoTitle ref={revealRef} {...revealProps}>
                        <h1>Entre em contato</h1>
                    </EntreEmContatoTitle>
                )}
            </ScrollReveal>
            <EntreEmContatoSection>
                <ScrollReveal variant="left">
                    {({ revealProps, revealRef }) => (
                        <Perguntas ref={revealRef} {...revealProps}>
                            <h2>Perguntas frequentes</h2>
                            <PerguntasLista>
                                {perguntasFrequentes.map((item, index) => {
                                    const aberta = perguntaAberta === index

                                    return (
                                        <PerguntaItem key={item.pergunta} $aberta={aberta}>
                                            <PerguntaBotao
                                                type="button"
                                                onClick={() => alternarPergunta(index)}
                                                aria-expanded={aberta}
                                                aria-controls={`resposta-pergunta-${index}`}
                                            >
                                                <span>{item.pergunta}</span>
                                                <span aria-hidden="true">{aberta ? "-" : "+"}</span>
                                            </PerguntaBotao>
                                            {aberta && (
                                                <p id={`resposta-pergunta-${index}`}>
                                                    {item.resposta}
                                                </p>
                                            )}
                                        </PerguntaItem>
                                    )
                                })}
                            </PerguntasLista>
                        </Perguntas>
                    )}
                </ScrollReveal>
                <ScrollReveal delay={90} variant="right">
                    {({ revealProps, revealRef }) => (
                        <FaleConoscoColuna ref={revealRef} {...revealProps}>
                            <h2>Fale conosco</h2>
                            <FaleConosco>
                                <FaleConoscoForm action="form">
                                    <NomeSobrenome>
                                        <div>
                                            <label htmlFor="nome">Nome</label>
                                            <input type="text" name="nome" id="nome" />
                                        </div>
                                        <div>
                                            <label htmlFor="sobrenome">Sobrenome</label>
                                            <input type="text" name="sobrenome" id="sobrenome" />
                                        </div>
                                    </NomeSobrenome>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" />
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="number" name="telefone" id="telefone" />
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea name="mensagem" id="mensagem"></textarea>
                                </FaleConoscoForm>
                            </FaleConosco>
                        </FaleConoscoColuna>
                    )}
                </ScrollReveal>
            </EntreEmContatoSection>
        </Container>
    )
}

export default EntreEmContato
