import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle";
import { Route, Routes } from "react-router-dom";
import Account from "./routes/Account";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import { useEffect, useState } from "react";
import axios from "axios";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import CrossRoute from "./components/CrossRoute";
function App() {

  const [coins,setCoins] = useState([])


const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"

useEffect(()=>{
 axios.get(url).then((response)=>{
   setCoins(response.data)
   console.log(response.data);
 })

},[url])

  return (
    <ThemeProvider>
    <AuthContextProvider>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home coins={coins}/>}/>
     
        <Route path="/signin" element={
          <CrossRoute>

        <Signin/>
          </CrossRoute>
        }
          
        />
        <Route path="/signup" element={
 <CrossRoute>
   
        <Signup/>
 </CrossRoute>
        }/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/coin/:coinId" element={<CoinPage/>}/>
            {/* <Route path=":coinId"/>
        </Route> */}
      </Routes>
      <Footer/>
    </AuthContextProvider>

    </ThemeProvider>
  );
}

export default App;
