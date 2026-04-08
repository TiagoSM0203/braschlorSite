import { Container } from "../../styles";
import logo from "../../assets/imgs/logo_braschlor.webp";
import {
    FaFacebookF,
    FaInstagram,
    FaLocationDot,
    FaRegCopyright,
    FaRegEnvelope,
    FaWhatsapp
} from "react-icons/fa6";
import {
    ContactIconBox,
    ContactItem,
    ContactLink,
    ContactList,
    ContactText,
    FooterBottom,
    FooterBrandImage,
    FooterBrandLink,
    FooterColumn,
    FooterDivider,
    FooterExternalLink,
    FooterHeading,
    FooterInner,
    FooterRouteLink,
    FooterSection,
    FooterTop,
    QuickLinksList,
    SocialIconBox,
    SocialList,
    SocialRow
} from "./styles";

type QuickLink =
    | {
        label: string;
        to: string;
        external?: false;
    }
    | {
        label: string;
        href: string;
        external: true;
    };

const quickLinks: QuickLink[] = [
    {
        label: "Início",
        to: "/"
    },
    {
        label: "Nossos produtos",
        to: "/nossos-produtos"
    },
    {
        label: "Quem somos",
        to: "/quem-somos"
    },
    {
        label: "Onde estamos",
        href: "https://www.google.com/maps/search/?api=1&query=R.+Canario,+143+-+Laranjeiras,+Caieiras+-+SP,+07745-015",
        external: true
    },
    {
        label: "Seja revendedor",
        to: "/seja-parceiro"
    },
    {
        label: "Contato",
        href: "https://wa.me/5511993521508",
        external: true
    }
];

const socialItems = [
    {
        icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/braschlor/"
    },
    {
        icon: FaFacebookF,
        label: "Facebook",
        href: "https://www.facebook.com/Braschlor.Aromaty/"
    }
];

const Footer = () => (
    <FooterSection>
        <Container>
            <FooterInner>
                <FooterTop>
                    <FooterColumn>
                        <FooterBrandLink to="/" aria-label="Braschlor">
                            <FooterBrandImage src={logo} alt="Braschlor Logo" />
                        </FooterBrandLink>
                        <FooterHeading>Redes sociais</FooterHeading>
                        <SocialList>
                            {socialItems.map(({ icon: Icon, label, href }) => (
                                <SocialRow key={label} href={href} target="_blank" rel="noreferrer">
                                    <SocialIconBox aria-hidden="true">
                                        <Icon />
                                    </SocialIconBox>
                                    <span>{label}</span>
                                </SocialRow>
                            ))}
                        </SocialList>
                    </FooterColumn>

                    <FooterColumn>
                        <FooterHeading>Links rápidos</FooterHeading>
                        <nav aria-label="Links rápidos do rodapé">
                            <QuickLinksList>
                                {quickLinks.map((item) => (
                                    <li key={item.label}>
                                        {"external" in item && item.external ? (
                                            <FooterExternalLink href={item.href} target="_blank" rel="noreferrer">
                                                {item.label}
                                            </FooterExternalLink>
                                        ) : (
                                            <FooterRouteLink to={item.to}>
                                                {item.label}
                                            </FooterRouteLink>
                                        )}
                                    </li>
                                ))}
                            </QuickLinksList>
                        </nav>
                    </FooterColumn>

                    <FooterColumn>
                        <FooterHeading>Fale conosco</FooterHeading>
                        <ContactList>
                            <ContactItem>
                                <ContactIconBox>
                                    <FaWhatsapp />
                                </ContactIconBox>
                                <ContactLink href="https://wa.me/5511993521508" target="_blank" rel="noreferrer">
                                    (11) 99352-1508
                                </ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <ContactIconBox>
                                    <FaRegEnvelope />
                                </ContactIconBox>
                                <ContactLink href="mailto:vendas@braschlor.com.br">
                                    vendas@braschlor.com.br
                                </ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <ContactIconBox>
                                    <FaLocationDot />
                                </ContactIconBox>
                                <ContactText>
                                    R. Canário, 143 - Laranjeiras, Caieiras - SP, 07745-015
                                </ContactText>
                            </ContactItem>
                        </ContactList>
                    </FooterColumn>
                </FooterTop>

                <FooterDivider />

                <FooterBottom>
                    <FaRegCopyright />
                    <p>
                        Braschlor Produtos Químicos. Todos os direitos reservados. CNPJ: <strong>08.319.371/0001-42</strong>
                    </p>
                </FooterBottom>
            </FooterInner>
        </Container>
    </FooterSection>
);

export default Footer;

