import React, { useEffect, useState } from 'react';
import { BiPlus } from "react-icons/bi"

const categories = [
    {
        id: 1,
        name: "all",
        items: [
            {
              id: 1,
              name: 'Basic Tee 8-Pack',
              href: '#',
              price: '$256',
              description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
              options: '8 colors',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
              imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
            },
            {
              id: 2,
              name: 'Basic Tee',
              href: '#',
              price: '$32',
              description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
              options: 'Black',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
              imageAlt: 'Front of plain black t-shirt.',
            },
        ],
        properties: [
            {
                Colors: ["white", "blue", "red"]
            },
            {
                Sizes: ["SM", "MD", "X", "XL"]
            }
        ]
    },
    {
        id: 2,
        name: "women",
        items: [
            {
              id: 1,
              name: 'Basic Tee 8-Pack',
              href: '#',
              price: '$256',
              description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
              options: '8 colors',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
              imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
            },
            {
              id: 2,
              name: 'Basic Tee',
              href: '#',
              price: '$32',
              description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
              options: 'Black',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
              imageAlt: 'Front of plain black t-shirt.',
            },
        ],
        properties: [
            {
                color: ["white", "blue", "red"]
            },
            {
                sizes: ["SM", "MD", "X", "XL"]
            }
        ]
    },
    {
        id: 3,
        name: "men",
        items: [
            {
              id: 1,
              name: 'Basic Tee 8-Pack',
              href: '#',
              price: '$256',
              description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
              options: '8 colors',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
              imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
            },
            {
              id: 2,
              name: 'Basic Tee',
              href: '#',
              price: '$32',
              description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
              options: 'Black',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
              imageAlt: 'Front of plain black t-shirt.',
            },
        ],
        properties: [
            {
                color: ["white", "blue", "red"]
            },
            {
                sizes: ["SM", "MD", "X", "XL"]
            }
        ]
    }
]

const itemsMap = new Map();
const propertiesMap = new Map();
categories.forEach((category, idx) => {
    itemsMap.set(category.name, category.items);
    propertiesMap.set(category.name, category.properties)
})
function ItemList({enter, quickView, handleQuickView, item, idx, selectedItem, mouseEnter, mouseLeave}) {
  return (
    <div className='col-3' key = {idx} > 
      <div className='position-relative' onMouseEnter={mouseEnter} onMouseLeave = {mouseLeave} >
      <button className='p-0 m-0 w-100 h-100 border-outline-none bg-none' >
        <img id = {idx} className='item w-100 h-100' src={item.imageSrc} alt={item.imageAlt} />
      </button>
      {enter && (idx == selectedItem) &&
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
        <h3 className='text-sm fw-medium text-gray-9'>{item.name}</h3>
        <div className="">
          <p className="text-sm text-gray-5 m-0">
            {item.description}
          </p>
        </div>
        <p className='txt-base fw-medium mt-2' style = {{color: "#ea580c"}}>{item.price}</p>
      </div>
    </div> 
  )
}

export default function Products({popup, setPopup, category, properties, setProperties}) {
  const [enter, setEnter] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [products, setProducts] = useState()
//   const [properties, setProperties] = useState()
  useEffect(() => {
    if (category === "all") {
        setProducts(itemsMap.get("all"))
        setProperties(propertiesMap.get("all"))
    }
    if (category === "women") {
        setProducts(itemsMap.get("women"))
        setProperties(propertiesMap.get("women"))
    }
    if (category === "men") {
        setProducts(itemsMap.get("men"))
        setProperties(propertiesMap.get("men"))
    }
  }, [category])

  const mouseEnter = (e) => {
    setEnter(() => true)
    setSelectedItem(e.target.id)
  }

  const mouseLeave = () => {
    setEnter(() => false)
  }

  const quickView = {
    height: "18%",
    background:"black",
    opacity: "0.7",
    color: "white",
    zIndex:"2",
  }

  const handleQuickView = () => {
    setPopup(() => !popup)
    setEnter(() => false)
  }
  const renderedProperties = properties && properties.map((property, idx) => {
    const key = Object.keys(property)
    const values = Object.values(property)
    const renderedValues = values[0].map((value, idx) => {
        return (
            <div key = {idx}>
                <input type ="checkbox" style = {{width: "1rem", height:"1rem"}}></input>
                <label className='ms-2 text-sm text-gray-6'>{value}</label>
            </div>
        )
    })

    const placeholder = `New Property`
    return (
        <div>
        <h4 className='text-sm fw-medium text-gray-9'>{key}</h4>
        {renderedValues}
        <div className='d-flex m-0 p-0 align-items-center' style = {{width: "90%", border: "1px solid black" }}>
            <button className='border-outline-none bg-none d-flex align-items-center' style = {{width:"30px", height:"30px"}}>
                <BiPlus />
            </button>
            <input className='border-outline-none text-sm' style = {{width: "100%"}}
                placeholder={placeholder}
            />
        </div>
        </div>
    )
  })

  const renderedItems = products && products.map((item,idx) => {
    return (
      <ItemList key = {idx} 
                enter = {enter} quickView = {quickView} handleQuickView = {handleQuickView}
                item = {item} idx = {idx} selectedItem = {selectedItem} mouseEnter ={mouseEnter} mouseLeave = {mouseLeave} />
    )
  })
  return (
    <div>
      <div className='px-5 mx-5'>
        <main>
          <hr className='row'></hr>
          <div>
            <h1 className='text-gray-9 fw-extrabold text-xl4 letter-space-tight'>New Arrivals</h1>
            <p className='text-gray-5'>Checkout the lastest release of Basic Tees, new and improved with four openings</p>
          </div>
          <hr className='row'></hr>
          <div className='row'>
            <aside className='col-3 ps-0'>
              <h2 className='sr-only'>filter</h2>
              <div>
                  {renderedProperties}
                {/* <form>
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
              
                  <div className='py-2'>
                    <fieldset>
                      <legend className='text-sm fw-medium text-gray-9'>Sizes</legend>
                    </fieldset>
                  </div>
                </form> */}
              </div>
            </aside>
            <section className='col m-0 p-0'>
              <div className='row'>
                {renderedItems}
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