import { createContext, useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const CartContext = createContext([]);

const ContextFunctions = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState(0);
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState([]);
    const db = getFirestore();
  
    useEffect(() => {
      const itemsCollection = collection(db, "guitars");
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id,}));
        setProducts(docs);
      });}, []);

    function noProducts() {
        let emptiness = false;
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].quantity === 0 && cart.length <= 1) {
            emptiness = true;
            } } return emptiness;};

    const addProd = (quantity, id) => {
        let result = cartQty;
        let newAdd;
        let prod = findArt(id, products);
        let product = cart.find((product) => product.id === prod.id);
        if (product) {
            product.quantity += quantity;
            newAdd = [...cart];
        } else { newAdd = [...cart, { ...prod, quantity: quantity }]; }
        
        result += quantity;
        setCart(newAdd);
        setCartQty(result);
        addPrice(prod.price, quantity);
        };

    const findArt = (id, array) => array.find((product) => product.id === id);

    function restTotal(price) {
        let amount = total;
        amount -= price;
        setTotal(amount);
    }
    
    function substractQuantify() {
        if (cartQty > 0) {setCartQty(cartQty - 1);}
    }
  
    const removeArt = (id) => {
      let itemIn = findArt(id, cart);
      let quantity = itemIn.quantity--;
      let posInCart = cart.indexOf(itemIn);
      let newCart = cart.filter((product) => product.id !== id);
      substractQuantify();

      if (cart[posInCart].quantity === 0) {
        setCart(newCart);
      } else {
        setCart([...newCart, { ...itemIn, quantity: quantity - 1 }]);
      }
      if (cart.length > 0 && total > 0) {
        restTotal(itemIn.price);
      }
      let cartEmpty = noProducts();
      if (cartEmpty) {
        clean();
      }
    };
  
    function addPrice(price, quantity) {
      let amount = total;
      amount += price * quantity;
      setTotal(amount);
    }

    const clean = () => {
        setCartQty(0);
        setCart([]);
        setTotal(0);
        };
  
    return (
      <CartContext.Provider
        value={{
          findArt,
          addProd,
          cart,
          setCart,
          cartQty,
          total,
          removeArt,
          addPrice,
          clean,
        }}> {children}
      </CartContext.Provider>
    );
  };

export default ContextFunctions
