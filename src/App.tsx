import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Header from "./components/header/header";
import CoinInfo from "./pages/coinInfo";
import { ModalProvider } from "./components/modals/context/modal.context";
function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/coin/*" element={<CoinInfo />}></Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
