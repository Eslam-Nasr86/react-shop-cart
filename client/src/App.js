import React ,{ useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {words} from '../../client/src/words';
import data from './data.json' 
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import {Provider} from 'react-redux'
import store from "./store/store";

function App() {
  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])


  const handleFilterBySize = (e)=> {
   setSize(e.target.value)

    if(e.target.value == "ALL"){
      setProducts(data)
    }else{
      let productClone = [...products];
    let newProduct = productClone.filter(p=>p.size.indexOf(e.target.value) != -1)
    setProducts(newProduct)


    }


    
  }

  const handleFilterBySort = (e)=>{

    let order = e.target.value;
    setSort(order)
    let productClone = [...products];
    let newProducts = productClone.sort((a,b) => { 
      if(order == 'Lowest'){
        return a.price - b.price
      }else if(order == 'Highest'){
        return b.price - a.price
      }else {
        return a.id < b.id ?1 : -1
      }

     })
     setProducts(newProducts)


  }


  const addToCart = (product)=>{
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
     cartItemsClone.forEach(p =>{
       if(p.id == product.id){
         p.qty++;
         isProductExist = true;

       }
      })
       if(!isProductExist){
         cartItemsClone.push({...product, qty:1})
       }

       setCartItems(cartItemsClone);
     
  }

  useEffect(()=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  },[cartItems])



  const removeFromCart = (product)=>{
    const cartItemsClone = [...cartItems]
    setCartItems(cartItemsClone.filter(p=> p.id !== product.id))

  }


  return (

    <Provider store={store}>
    <div className="layout">
        <Header/>
        <main>
        <div className="wrapper">
        <Products products={products}  addToCart={addToCart} />
       <Filter handleFilterBySize={handleFilterBySize} size={size}
               handleFilterBySort={handleFilterBySort} sort={sort}
               products={products}/>
        </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>

        </main>
       <Footer/>

    </div>
    </Provider>
  );
}

export default App;
