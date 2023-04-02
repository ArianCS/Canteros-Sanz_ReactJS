import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import NavBar from './components/NavBar'
import Welcome from './components/Welcome';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ContextFunctions from './context/ContextFunctions';
import ContextCount from './context/ContextCount';
import Footer from './components/Footer';

const App = () => {
  return (
  <>
    <ChakraProvider>
      <ContextFunctions>
      <ContextCount>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path ="/" element={<Welcome /> } />
            <Route exact path ="/catalogue" element={<ItemListContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path ="/Item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextCount>
      </ContextFunctions>
    </ChakraProvider>
  </>
  )
}

export default App