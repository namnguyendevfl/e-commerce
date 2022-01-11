import React from "react";
import { BsXLg } from "react-icons/bs"

const items = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      price: '$32.00',
      color: 'Sienna',
      inStock: true,
      size: 'Large',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      price: '$32.00',
      color: 'Black',
      inStock: false,
      leadTime: '3–4 weeks',
      size: 'Large',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35.00',
      color: 'White',
      inStock: true,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
      imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
  ]

export default function ShoppingCart() {
    const quantities = ['1', '2', '3', '4']
    const optionList = quantities.map(idx => {
        return (
            <option key = {idx} value = {idx}>{Number(idx)}</option>
        )
    })
    const renderedItems = items.map((item, idx) => {
        return (<>
            <li key = {idx} className="list-group-item border-outline-none p-0">
                <div  className="py-5 d-flex">
                    <img className="me-4" src={item.imageSrc} alt="Front of men's Basic Tee in sienna." style = {{width:"12rem", height:"12rem"}}/>
                    <div className="d-flex flex-column justify-content-between w-100">
                        <div className="row">
                            <div className="col-6">
                                <h6 className="txt-sm fw-medium text-gray-9">{item.name}</h6>
                                <div className="d-flex align-items-center">
                                    <p className="txt-md fw-medium text-gray-9">{item.price}</p>
                                </div>
                            </div> 
                            <div className="col-6 d-flex justify-content-between">
                                <select className="" style = {{height:"35px"}}> 
                                    {optionList}                                
                                </select>
                                <button className="border-outline-none bg-none" style = {{width:"35px", height: "35px"}}>
                                <BsXLg />
                                </button>
                            </div>
                        </div>
                        <p>
                            In stock
                        </p>
                    </div>
                </div>
                <hr className="m-0 p-0"></hr>                 
            </li>
        </>)
    })
    return (
        <div className='px-5 mx-5'>
            <h1 className="txt-4xl fw-extrabold">Shopping Cart</h1>
            <hr></hr>
            <form>
                <div className="d-flex justify-content-between">
                    <div className="col pe-5">
                        <ul className="list-group">
                            {renderedItems}
                        </ul>
                    </div>
                    <div className="" style = {{height:"100px"}}>
                        <div className="p-3 border-radius-8px" style = {{width:"320px", height:"295px", border: "1px solid #d1d5db"}}>
                            <h5 className="txt-l fw-medium letter-space-tight">Order Summary</h5>
                            <div className="d-flex justify-content-between">
                                <p className="text-sm text-gray-9">Product: </p>
                                <p className="txt-md fw-medium text-gray-9">$90</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-sm text-gray-9">Shipping </p>
                                <p className="txt-md fw-medium text-gray-9">$90</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-sm text-gray-9">Tax </p>
                                <p className="txt-md fw-medium text-gray-9">$90</p>
                            </div>
                            <hr className="p-0 m-0"></hr>
                            <div className="d-flex justify-content-between py-3">
                                <h5 className="txt-l fw-medium letter-space-tight">Order Total</h5>
                                <p className="txt-l fw-medium text-gray-9">$90</p>
                            </div>
                            <div>
                                <button className="border-outline-none w-100 border-radius-8px" style = {{height:"37px", background:"#0ea5e9", color:"white"}}>
                                    Place order
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}