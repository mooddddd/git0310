import { Home, Login, Logout, Board, Signup } from "./pages";
import { Header } from "./layouts/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./store";

const App = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Header />} />
                </Routes>

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />

                    <Route path="/logout" element={<Logout />} />

                    <Route path="/board" element={<Board />} />
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );
};

export default App;
