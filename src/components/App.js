import React, { useEffect } from 'react'
import '../styles/App.css';
import DownloadSection from './DownloadSection/DownloadSection';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import MainProduct from './MainProductSlider/MainProduct';
import Trendingproducts from './Trendingproducts/Trendingproducts';
import { Route, Routes } from "react-router-dom"
import Login from './Login/Login';
import Cart from './Cart/Cart';
import { auth } from '../Firebase';
import { useDispatch , useSelector} from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        const profile = {
          name: user.displayName,          
          photoURL: user.photoURL,
          email:user.email
        }
        dispatch(login(profile))
      }
      else {
        dispatch(logout())
      }
    })
  }, [])


  const Layoutone = () => {
    return (
      <>
        <Header />
        <div className='home_section'>
          <Home />
        </div>
        <MainProduct />
        <DownloadSection />
        <Footer />
      </>
    )
  }

  const Layoutwo = () => {
    return (
      <>
        <Header />
        <Cart />
      </>
    )
  }

  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Layoutone />} />
        <Route path="/cart" element={<Layoutwo />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  )
}


export default App;
