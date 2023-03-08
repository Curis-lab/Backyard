import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./shop/Cart";
import Items from "./shop/Items";
// import Navbar from "./shop/Navbar";
import { shop_content } from ".";

function App() {
  const { shopData } = useContext(shop_content);

return(
  <div>
      <div className="bg-green-700 flex justify-between">
        <div>logo</div>
        {/* <Navbar numberofitems={3} search_function={choice_search}/> */}
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold">Featured</h2>
        <div className="flex">
          {shopData.map(i=> i.categories.map(category=>
            <div key={category} className='flex justify-between w-32'>{category}</div>)
          )}
        </div>
      </div>
      <Items/>
      <div>
        <h1>Add new Items</h1>
      </div>
    </div>   
  );
}
export default App;
