import { useState, type FormEvent } from "react";
import { homeContactSectionId } from "../../../../data/navigation";
import { Container } from "../../../../styles";
import ScrollReveal from "../../scrollReveal";
import {
    FaleConoscoActions,
    FaleConoscoButton,
    EntreEmContatoSection,
    EntreEmContatoTitle,
    FaleConoscoColuna,
    FaleConosco,
    FaleConoscoForm,
    FaleConoscoStatus,
    NomeSobrenome,
    PerguntaBotao,
    PerguntaItem,
    Perguntas,
    PerguntasLista
} from "./styles";

const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send-form";
const EMAILJS_SERVICE_ID = "service_xotmwsv";
const EMAILJS_TEMPLATE_ID = "template_m8ach7r";
const EMAILJS_PUBLIC_KEY = "IY6j-Fhch5_fAaHaA";

type FormStatus = "idle" | "loading" | "success" | "error";

const perguntasFrequentes = [
    {
        pergunta: "Como faço para ser revendedor?",
        resposta: "Entre em contato pelo formulário ao lado ou pelo nosso WhatsApp: (11) 99352-1508. Se preferir, ligue para (11) 4442-2403 e fale com um de nossos vendedores."
    },
    {
        pergunta: "Como faço para comprar seus produtos para uso próprio?",
        resposta: "Nossos produtos estão disponíveis para compra on-line em marketplaces como Mercado Livre e Shopee. Acesse a página Nossos Produtos para conferir as opções."
    },
    {
        pergunta: "Posso misturar água sanitária com outros produtos?",
        resposta: "Não é recomendado. A mistura pode causar reações perigosas e trazer riscos à sua saúde durante o uso."
    },
    {
        pergunta: "O que fazer se o produto cair no olho ou na pele?",
        resposta: "Lave a região imediatamente com água em abundância e procure orientação médica se houver irritação persistente. Em caso de emergência, ligue para o Centro de Intoxicações (CEATOX): 0800-722-6001."
    },
    {
        pergunta: "Vocês têm loja física?",
        resposta: "Sim. Nossa loja física, com preço direto da fábrica, está localizada na R. Canário, 143 - Laranjeiras, Caieiras - SP, 07745-015. Venha nos visitar."
    }
];

const EntreEmContato = () => {
    const [perguntaAberta, setPerguntaAberta] = useState<number | null>(0);
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");

    const alternarPergunta = (index: number) => {
        setPerguntaAberta((atual) => (atual === index ? null : index));
    };

    const handleFormChange = () => {
        setFormStatus((atual) => (atual === "idle" ? atual : "idle"));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("service_id", EMAILJS_SERVICE_ID);
        formData.append("template_id", EMAILJS_TEMPLATE_ID);
        formData.append("user_id", EMAILJS_PUBLIC_KEY);

        setFormStatus("loading");

        try {
            const response = await fetch(EMAILJS_API_URL, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Falha ao enviar contato");
            }

            form.reset();
            setFormStatus("success");
        } catch {
            setFormStatus("error");
        }
    };

    return (
        <Container id={homeContactSectionId}>
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
                                    const aberta = perguntaAberta === index;

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
                                    );
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
                                <FaleConoscoForm onSubmit={handleSubmit} onChange={handleFormChange}>
                                    <NomeSobrenome>
                                        <div>
                                            <label htmlFor="nome">Nome</label>
                                            <input type="text" name="nome" id="nome" required />
                                        </div>
                                        <div>
                                            <label htmlFor="sobrenome">Sobrenome</label>
                                            <input type="text" name="sobrenome" id="sobrenome" required />
                                        </div>
                                    </NomeSobrenome>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" required />
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="tel" name="telefone" id="telefone" />
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea name="mensagem" id="mensagem" required></textarea>
                                    <FaleConoscoActions>
                                        <FaleConoscoButton type="submit" disabled={formStatus === "loading"}>
                                            {formStatus === "loading" ? "Enviando..." : "Enviar mensagem"}
                                        </FaleConoscoButton>
                                        <FaleConoscoStatus
                                            $status={formStatus}
                                            aria-live="polite"
                                        >
                                            {formStatus === "success"
                                                ? "Mensagem enviada com sucesso. Em breve entraremos em contato."
                                                : null}
                                            {formStatus === "error"
                                                ? "Não foi possível enviar agora. Tente novamente em instantes."
                                                : null}
                                        </FaleConoscoStatus>
                                    </FaleConoscoActions>
                                </FaleConoscoForm>
                            </FaleConosco>
                        </FaleConoscoColuna>
                    )}
                </ScrollReveal>
            </EntreEmContatoSection>
        </Container>
    );
};

export default EntreEmContato;
