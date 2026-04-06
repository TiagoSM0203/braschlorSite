import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import HomePage from "./pages/Home";
import QuemSomosPage from "./pages/QuemSomos";
import NossosProdutosPage from "./pages/NossosProdutos";
import ProdutoDetalhePage from "./pages/NossosProdutos/ProdutoDetalhe";
import SejaParceiroPage from "./pages/SejaParceiro";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/nossos-produtos" element={<NossosProdutosPage />} />
        <Route path="/nossos-produtos/:produtoId" element={<ProdutoDetalhePage />} />
        <Route path="/seja-parceiro" element={<SejaParceiroPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
