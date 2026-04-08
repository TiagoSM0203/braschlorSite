import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";

const HomePage = lazy(() => import("./pages/Home"));
const QuemSomosPage = lazy(() => import("./pages/QuemSomos"));
const NossosProdutosPage = lazy(() => import("./pages/NossosProdutos"));
const ProdutoDetalhePage = lazy(() => import("./pages/NossosProdutos/ProdutoDetalhe"));
const SejaParceiroPage = lazy(() => import("./pages/SejaParceiro"));

function App() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
