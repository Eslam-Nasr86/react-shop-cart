import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {words} from '../../client/src/words';
import data from './data.json' 
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";


function App() {
  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")

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


  return (
    <div className="layout">
        <Header/>
        <main>
        <div className="wrapper">
        <Products products={products} />
       <Filter handleFilterBySize={handleFilterBySize} size={size}
               handleFilterBySort={handleFilterBySort} sort={sort}/>
        </div>


        </main>
       <Footer/>

    </div>
  );
}

export default App;
