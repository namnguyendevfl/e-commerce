import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export default function Category({popup, setPopup}) {
  const [enter, setEnter] = useState(false)
  const mouseEnter = () => {
    setEnter(() => true)
  }

  const mouseLeave = () => {
    setEnter(() => false)
  }
  // const imgStyle = {
  //   opacity: "0.8"
  // }
  const quickView = {
    height: "3rem",
    background:"black",
    opacity: "0.7",
    color: "white",
    zIndex:"2",
  }

  const handleQuickView = () => {
    setPopup(() => !popup)
    setEnter(() => false)
  }

  return (
    <div>
      <div>
        <header>
          <p className = "m-0 text-sm fw-medium d-flex justify-content-center align-items-center" style = {{background:"rgb(79 70 229)", height:"2.5rem", color:"white"}}>
            Get free delivery on orders over $100
          </p>
          <nav className='px-5 mx-5'>
            <div style = {{borderBottom:"1px solid rgb(229 231 235)"}}>
              <div className="d-flex align-items-center" style = {{height: "4rem"}}>
                  <div>
                    <button className="bg-white border-outline-none text-sm fw-medium text-gray-7">Women</button>
                    <button className=" ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7">Men</button>
                    <button className="ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7">Company</button>
                    <button className="ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7">Store</button>
                  </div>
                  <div className="d-flex align-items-center" style = {{marginLeft:"auto"}}>
                    <div className="d-flex justify-content-end align-items-center">
                      <button className="bg-white border-outline-none text-sm fw-medium text-gray-7">Sign in</button>
                      <button className="ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7">Create account</button>
                      <BiSearch className="ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7"/>
                      <div className="ms-4 bg-white border-outline-none text-sm fw-medium text-gray-7" >text</div>
                    </div>
                  </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className='px-5 mx-5'>
        <main>
          <div>
            <h1 className='text-gray-9 fw-extrabold text-xl4 letter-space-tight'>New Arrivals</h1>
            <p className='text-gray-5'>Checkout the lastest release of Basic Tees, new and improved with four openings</p>
          </div>
          <hr></hr>
          <div className='row'>
            <aside className='col-2'>
              <h2 className='sr-only'>filter</h2>
              <div>
                <form>
                  <div>
                    <fieldset>
                      <legend className='text-sm fw-medium text-gray-9'>Color</legend>
                      <div>
                        <input type ="checkbox" style = {{width: "1rem", height:"1rem"}}></input>
                        <label className='ms-2 text-sm text-gray-6'>White</label>
                      </div>
                      <div>
                        <input type ="checkbox" style = {{width: "1rem", height:"1rem"}}></input>
                        <label className='ms-2 text-sm text-gray-6'>Blue</label>
                      </div>
                      <div>
                        <input type ="checkbox" style = {{width: "1rem", height:"1rem"}}></input>
                        <label className='ms-2 text-sm text-gray-6'>Red</label>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset>
                      <legend className='text-sm fw-medium text-gray-9'>Category</legend>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset>
                      <legend className='text-sm fw-medium text-gray-9'>Sizes</legend>
                    </fieldset>
                  </div>
                </form>
              </div>
            </aside>
            <section className='col m-0 p-0'>
              <div className='row'>
                <div className='col-3'> 
                  <div>
                  <img className='item w-100 h-100' src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green." />
                  </div>
                  <div>
                    <h3 className='text-sm fw-medium text-gray-9'>product 1</h3>
                    <p className="text-sm text-gray-5">Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.</p>
                    <p className='txt-base fw-medium' style = {{color: "#ea580c"}}>$200</p>
                  </div>
                </div>
                <div className='col-3'> 
                  <div>
                  <img className='item' style = {{width: "100%", height: "100%"}} src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green." />
                  </div>
                  <div>
                    <h3 className='text-sm fw-medium text-gray-9'>product 1</h3>
                    <p className="text-sm text-gray-5">Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.</p>
                    <p className='txt-base fw-medium' style = {{color: "#ea580c"}}>$200</p>
                  </div>
                </div>
                <div className='col-3'> 
                  <div>
                    <img className='item' style = {{width: "100%", height: "100%"}} src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green." />
                  </div>
                  <div>
                    <h3 className='text-sm fw-medium text-gray-9'>product 1</h3>
                    <p className="text-sm text-gray-5">Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.</p>
                    <p className='txt-base fw-medium' style = {{color: "#ea580c"}}>$200</p>
                  </div>
                </div>
                <div className='col-3'> 
                  <div>
                  <img className='item' style = {{width: "100%", height: "100%"}} src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green." />
                  </div>
                  <div>
                    <h3 className='text-sm fw-medium text-gray-9'>product 1</h3>
                    <p className="text-sm text-gray-5">Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.</p>
                    <p className='txt-base fw-medium' style = {{color: "#ea580c"}}>$200</p>
                  </div>
                </div>
                <div className='col-3' > 
                  <div className='position-relative' onMouseEnter={mouseEnter} onMouseLeave = {mouseLeave} >
                  <button className='p-0 m-0 w-100 h-100 border-outline-none bg-none' >
                    <img className='item w-100 h-100' src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green." />
                  </button>
                  {enter &&
                    <>
                      <div style = {quickView} className='position-absolute w-100  b-0 l-0' >
                      <button className='w-100 h-100 border-outline-none bg-none' style={{color:"white"}} onClick = {handleQuickView}>
                        Quick view
                      </button>
                    </div>
                    </>
                  }
                  </div>
                  <div>
                    <h3 className='text-sm fw-medium text-gray-9'>product 1</h3>
                    <p className="text-sm text-gray-5">Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.</p>
                    <p className='txt-base fw-medium' style = {{color: "#ea580c"}}>$200</p>
                  </div>
                </div>
              </div>
            </section>
            <nav className='d-flex align-items-center justify-content-center'>
                <div>
                  <button className='bg-none border-radius-4px border-gray px-2 pag-h-1 fw-6'>previous</button>
                </div>
                <div>
                  <button className='bg-none border-radius-4px border-gray ms-1 pag-w-1 pag-h-1 fw-6'>1</button>
                  <button className='bg-none border-radius-4px border-gray ms-1 pag-w-1 pag-h-1 fw-6'>2</button>
                  <button className='bg-none border-radius-4px border-gray ms-1 pag-w-1 pag-h-1 fw-6'>3</button>
                  <button className='bg-none border-radius-4px border-gray ms-1 pag-w-1 pag-h-1 fw-6'>...</button>
                  <button className='bg-none border-radius-4px border-gray ms-1 pag-w-1 pag-h-1 fw-6'>6</button>
                </div>
                <div>
                  <button className='bg-none border-radius-4px border-gray ms-1 px-2 pag-h-1 fw-6'>next</button>
                </div>
            </nav>
          </div>
        </main>
      </div>
    </div>
  )
}