import mercadoLivre from "../../assets/imgs/mercado-livre.png";
import shopee from "../../assets/imgs/shopee.png";
import { IoLinkOutline } from "react-icons/io5";
import type { Produto, ProdutoMarketplaceNome, ProdutoMarketplaceValue } from "./produtos";
import {
  ProdutoMarketplaceButton,
  ProdutoMarketplaceCaption,
  ProdutoMarketplaceLink,
  ProdutoMarketplaceRow,
  ProdutoMarketplaceSection,
} from "./styles";

type ProdutoMarketplacesProps = {
  produto: Produto;
  caption?: string;
};

const marketplaceItems: Array<{
  nome: ProdutoMarketplaceNome;
  label: string;
  logo: string;
  variant: "shopee" | "mercadoLivre";
}> = [
  {
    nome: "shopee",
    label: "Shopee",
    logo: shopee,
    variant: "shopee",
  },
  {
    nome: "mercadoLivre",
    label: "Mercado Livre",
    logo: mercadoLivre,
    variant: "mercadoLivre",
  },
];

const renderMarketplaceControl = (
  label: string,
  logo: string,
  variant: "shopee" | "mercadoLivre",
  valor: ProdutoMarketplaceValue,
  isSingle: boolean,
) => {
  const content = (
    <>
      <img src={logo} alt={label} />
      <IoLinkOutline />
    </>
  );

  if (typeof valor === "string") {
    return (
      <ProdutoMarketplaceLink
        key={label}
        href={valor}
        target="_blank"
        rel="noreferrer"
        $variant={variant}
        $isSingle={isSingle}
        aria-label={`Comprar na ${label}`}
      >
        {content}
      </ProdutoMarketplaceLink>
    );
  }

  return (
    <ProdutoMarketplaceButton
      key={label}
      type="button"
      disabled
      $variant={variant}
      $isSingle={isSingle}
      aria-label={`Disponível em ${label}`}
    >
      {content}
    </ProdutoMarketplaceButton>
  );
};

const ProdutoMarketplaces = ({ produto, caption }: ProdutoMarketplacesProps) => {
  const marketplacesAtivos = marketplaceItems.filter(
    (marketplace) => produto.marketplaces?.[marketplace.nome],
  );
  const isSingle = marketplacesAtivos.length === 1;
  const controles = marketplacesAtivos.map((marketplace) =>
    renderMarketplaceControl(
      marketplace.label,
      marketplace.logo,
      marketplace.variant,
      produto.marketplaces?.[marketplace.nome] as ProdutoMarketplaceValue,
      isSingle,
    ),
  );

  if (controles.length === 0) {
    return null;
  }

  return (
    <ProdutoMarketplaceSection>
      {caption ? <ProdutoMarketplaceCaption>{caption}</ProdutoMarketplaceCaption> : null}
      <ProdutoMarketplaceRow $isSingle={isSingle}>
        {controles}
      </ProdutoMarketplaceRow>
    </ProdutoMarketplaceSection>
  );
};

export default ProdutoMarketplaces;
