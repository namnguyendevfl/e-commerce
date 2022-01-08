import React, { useState } from 'react';
import Category from './Category';
import Popup from './Popup';

export default function Layout() {
  const [popup, setPopup] = useState(false)
  return (
      <>
        <Category popup = {popup} setPopup = {setPopup}/>
        <Popup popup = {popup} setPopup = {setPopup}/>
      </>
  
  )
}