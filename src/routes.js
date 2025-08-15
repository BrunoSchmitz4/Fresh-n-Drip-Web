
import Home from "pages/Home";
import Shop from "pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/carrinho" element={<Shop />}></Route>
                <Route path="/pedidos" element={<Home />}></Route>
                <Route path="/usuario" element={<Home />}></Route>
                <Route path="/catalogo" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;