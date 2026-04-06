export type NavigationLink = {
    to: string;
    label: string;
    end?: boolean;
};

export type ExternalActionLink = {
    href: string;
    label: string;
};

export const homeContactSectionId = "entre-em-contato";

export const navigationLinks: NavigationLink[] = [
    {
        to: "/",
        label: "In\u00EDcio",
        end: true
    },
    {
        to: "/quem-somos",
        label: "Quem somos"
    },
    {
        to: "/nossos-produtos",
        label: "Nossos produtos"
    },
    {
        to: "/seja-parceiro",
        label: "Seja nosso parceiro"
    },
    {
        to: `/#${homeContactSectionId}`,
        label: "Contato"
    }
];

export const headerSellerLink: ExternalActionLink = {
    href: "https://wa.me/5511993521508",
    label: "Falar com um vendedor"
};
