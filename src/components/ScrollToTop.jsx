import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Pega o caminho atual da rota

  useEffect(() => {
    window.scrollTo(0, 0); // Move para o topo da página
  }, [pathname]); // Executa sempre que a rota mudar

  return null; // Este componente não precisa renderizar nada
};

export default ScrollToTop;
