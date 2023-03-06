import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./shop/Cart";
import Items from "./shop/Items";
import Navbar from "./shop/Navbar";

function App() {
  const categories = ['fruits','vegetables', 'dairy','meat']

  const products = [
    {id:1, name:'flow semi coldurt', prices: 1200, image:require('./assets/img/fruit/papaya.jpeg')},
    {id:2, name:'Salad', prices: 130, image:require('./assets/img/fruit/salad.jpg')},
    {id:3, name:'Salad2', prices: 140, image:require('./assets/img/fruit/salad.jpg')}
  ]

  const [countItems, setCountItems] = useState(0);
  const [foundItems, setFoundItems ]= useState({});

  const choice_search=(search_name, items = products)=>{
    setFoundItems(items.filter(i=>i.name===search_name));  
  }
  
  const count_items = ()=>{
    setCountItems(countItems+1);
    //show the next page
  }

  const pupular_product = products.reduce((hash,{id, name, prices, image})=>{
    //must be cheaper and favor for people
    hash[id]={name, prices, image};
    return hash
  },{})

  return(
    <div>
      <div className="bg-green-700 flex justify-between">
        <div>logo</div>
        <Navbar numberofitems={countItems} search_function={choice_search}/>
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold">Featured</h2>
        <div className="flex">{categories.map(i=><div key={i} className='px-2 opacity-40 hover:border-b-orange-600 hover:border-b-2'>{i}</div>)}</div>
      </div>
      <Items products={pupular_product} callback={count_items}/>
      <div>
        <h1>Add new Items</h1>
      </div>
    </div>   
  );
}
export default App;
