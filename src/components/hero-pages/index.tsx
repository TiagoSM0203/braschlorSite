import { Container } from "../../styles";
import {
    HeroPagesBreadcrumb,
    HeroPagesContent,
    HeroPagesCurrent,
    HeroPagesDot,
    HeroPagesHomeLink,
    HeroPagesSection,
    HeroPagesTitle
} from "./styles";

type HeroPagesProps = {
    title: string;
};

const HeroPages = ({ title }: HeroPagesProps) => (
    <HeroPagesSection>
        <Container>
            <HeroPagesContent>
                <HeroPagesTitle>{title}</HeroPagesTitle>
                <HeroPagesBreadcrumb>
                    <HeroPagesHomeLink to="/">Início</HeroPagesHomeLink>
                    <HeroPagesDot>&bull;</HeroPagesDot>
                    <HeroPagesCurrent>{title}</HeroPagesCurrent>
                </HeroPagesBreadcrumb>
            </HeroPagesContent>
        </Container>
    </HeroPagesSection>
);

export default HeroPages;
