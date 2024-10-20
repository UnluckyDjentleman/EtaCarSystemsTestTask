import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/mainPage"
import Header from "./components/header/header"
import CoinInfo from "./pages/coinInfo"
function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/coin/*" element={<CoinInfo/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
