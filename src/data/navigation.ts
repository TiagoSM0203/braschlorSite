export type NavigationLink = {
    to: string;
    label: string;
    end?: boolean;
};

export const navigationLinks: NavigationLink[] = [
    {
        to: "/",
        label: "Início",
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
    }
];

export const contactLink: NavigationLink = {
    to: "/contato",
    label: "Contato"
};
