import Avaliacao from "./sections/Avaliacao";
import EntreEmContato from "./sections/EntreEmContato";
import Hero from "./sections/Hero";
import MaisPopulares from "./sections/MaisPopulares";
import NossoCatalogo from "./sections/NossoCatalogo";
import PorqueNosEscolher from "./sections/PorqueNosEscolher";

const HomePage = () => (
  <>
    <Hero />
    <NossoCatalogo />
    <MaisPopulares />
    <PorqueNosEscolher />
    <Avaliacao />
    <EntreEmContato />
  </>
);

export default HomePage;
