import { useState } from "react";
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
  const [message, setMessage] = useState('hello');
  const [foundItems, setFoundItems ]= useState({});

  const ChangeItems = () =>{
    setCountItems(countItems+1);
    setMessage(message==='trun'? 'value':'trun');
  }

  const choice_search=(search_item, items = products)=>{
    setFoundItems(items.filter(i=>i.name===search_item));  
    setMessage(search_item.length);
    console.log(foundItems);
  }

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
      <Items products={products} callback={ChangeItems}/>

      {/* continues withh this */}
      {foundItems.length !== 0? <Cart item={foundItems} callback_function={ChangeItems}/>:<div>hella</div>}
    </div>   
  );
}
export default App;
