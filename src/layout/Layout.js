import React, { useState } from 'react';
import Popup from './Popup';
import { Routes, Route, Link } from "react-router-dom";
import ShoppingCart from './ShoppingCart';
import NewItem from './NewItem';
import Products from './Products';

export default function Layout() {
  const [popup, setPopup] = useState(false);
  const [newItem, setNewItem] = useState(false);
  const [category, setCategory] = useState("all")
  const [properties, setProperties] = useState(null)
  const handleChoseCategory = ({target: {id}}) => {
    setCategory(() => id)
  }
  const handleNewItem = () => {
    setNewItem(true)
  }
  return (
      <>
        <div>
          <header>
            <p className = "m-0 text-sm fw-medium d-flex justify-content-center align-items-center" style = {{background:"rgb(79 70 229)", height:"2.5rem", color:"white"}}>
              Get free delivery on orders over $100
            </p>
            <nav className='px-5 mx-5'>
              <div>
                <div className="d-flex align-items-center" style = {{height: "4rem"}}>
                    <div>
                      <Link to = "/" id = "all" className="txt-dec-none ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7" onClick={handleChoseCategory}>All</Link>
                      <Link to = "/women" id = "women" className="ms-4 txt-dec-none bg-white border-outline-none text-sm fw-medium text-gray-7" onClick={handleChoseCategory}>Women</Link>
                      <Link to = "/men" id = "men" className=" ms-4 txt-dec-none bg-white border-outline-none text-sm fw-medium text-gray-7" onClick={handleChoseCategory}>Men</Link>
                      <button className="txt-dec-none ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7" onClick = {handleNewItem}>Add product</button>
                    </div>
                    <div className="d-flex align-items-center" style = {{marginLeft:"auto"}}>
                      <div className="d-flex justify-content-end align-items-center">
                        <button className="bg-white border-outline-none text-sm fw-medium text-gray-7">Owner</button>
                        <Link to = "checkout" className="txt-dec-none ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7" >Check out</Link>
                      </div>
                    </div>
                </div>
              </div>
            </nav>
          </header>
          <Routes>
            <Route path="/" element = {<Products properties = {properties} setProperties = {setProperties} category = {category} popup = {popup} setPopup = {setPopup}/>} />
            <Route path="/men" element = {<Products popup = {popup} setPopup = {setPopup}/>} />
            <Route path="/women" element = {<Products category = {category} popup = {popup} setPopup = {setPopup}/>} />
            <Route path="/checkout" element = {<ShoppingCart />}/>
          </Routes>
          <NewItem properties = {properties} newItem = {newItem} setNewItem = {setNewItem}/>
          <Popup popup = {popup} setPopup = {setPopup}/>
        </div>
      </>
  
  )
}