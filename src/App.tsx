import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import HomePage from "./pages/Home";
import QuemSomosPage from "./pages/QuemSomos";
import NossosProdutosPage from "./pages/NossosProdutos";
import SejaParceiroPage from "./pages/SejaParceiro";
import ContatoPage from "./pages/Contato";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/nossos-produtos" element={<NossosProdutosPage />} />
        <Route path="/seja-parceiro" element={<SejaParceiroPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
