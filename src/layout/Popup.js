import React from "react";
import { Centralize } from "../utils/centralize";
import { AiFillStar } from "react-icons/ai"
import { BsXLg } from "react-icons/bs"
import { IconContext } from "react-icons";

function YellowStar() {
    return (
            <IconContext.Provider value={{ color: "#facc15", className: "global-class-name" }}>
                <div>
                    <AiFillStar />
                </div>
            </IconContext.Provider>
    )
}


function Info() {
    return (
        <>
            <div className="">
                <h1 className="mb-0 pb-0 txt-xl fw-medium text-gray-9 mt-2">I'm an item</h1>
                <div className = "mt-0 pt-0 d-flex">
                    <YellowStar/>
                    <YellowStar/>
                    <YellowStar/>
                    <YellowStar/>
                    <YellowStar/>
                    <p className="mx-2"> 50,000 ratings </p>
                </div>
                <div className="d-flex align-items-center">
                    <p className="txt-sm fw-medium text-gray-9">Price: </p>
                    <p className="txt-xl fw-medium text-gray-9 mx-3">$35</p>
                </div>
                <p className='text-sm fw-medium text-gray-9 m-0 p-0 '>Color</p>
                <div className="d-flex">
                    <div className="my-1" style = {{borderRadius: "50%", height:"30px", width: "30px", background:"black"}}></div>
                    <div className="my-1 ms-2" style = {{borderRadius: "50%", height:"30px", width: "30px", background:"red"}}></div>
                    <div className="my-1 ms-2" style = {{borderRadius: "50%", height:"30px", width: "30px", background:"blue"}}></div>
                    <div className="my-1 ms-2" style = {{borderRadius: "50%", height:"30px", width: "30px", background:"orange"}}></div>
                </div>
                <p className='text-sm fw-medium text-gray-9'>Quantity</p>
                
                <div className="position-absolute" style = {{bottom:"50px"}}>
                    <div className="my-2 me-4" style = {{height:"45px"}}> 
                        <button className="h-100 w-100 me-3">Add to Cart</button> 
                    </div>
                    <div>
                        <a href="#">See more details</a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function Popup({popup, setPopup}) {
    const cancelPopup = () => {
        setPopup(() => false)
    }
    const position = {
        height: 550, top: 50, width:900, left: 50 
    }
    const { height, top, width, left } = position
    //Call the Centralize component in the utils/style and pass in appropriate arguments to get background and element set up for the popup 
    const { bgPosition, elementPosition, offsetElementPosition } = Centralize(height, top, width, left)
    //Style the popup form 
    const elementStyle = { 
        ...elementPosition,
        width: `${position.width}px`,
        height: `${position.height}px`,
        zIndex: "4",
        background: "white",
        borderRadius: "4px",
        // boxShadow: "0px 0px 10px 2px" 

    }
    return ( popup &&
        <>
        <div>  
            <div className="position-fixed t-0 l-0 w-100 h-100" style = {{background:"black", opacity:"0.7"}}>
            </div>
            <div className = "popup-background" style = {bgPosition} >
                <div style = {elementStyle}>
                    <div className="row d-flex h-100 position-relative">
                        <div className="position-absolute t-0 l-0">
                            <button className="border-outline-none bg-none" style = {{width:"35px", height: "35px"}} onClick = {cancelPopup}>
                                <BsXLg /></button>
                        </div>
                        <div className="col-7 h-100">
                            <div className="py-5 w-100 d-flex justify-content-center" style = {{height:"70%"}}>
                                <img className='' style = {{width: "70%"}} src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green." />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="py-2 bg-none border-outline-none">
                                    Images
                                </button>
                                <button className=" bg-none border-outline-none">
                                    Videos
                                </button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button  style = {{width: "100px", height: "100px"}}>pic 1</button>
                                <button className="ms-2" style = {{width: "100px", height: "100px"}}>pic 1</button>
                                <button className="ms-2" style = {{width: "100px", height: "100px"}}>pic 1</button>
                                <button className="ms-2" style = {{width: "100px", height: "100px"}}>pic 1</button>
                            </div>
                        </div>
                        <div className="col position-relative">
                            <nav className="me-3">
                                <div>
                                <div className="d-flex align-items-center justify-content-center" style = {{height: "4rem"}}>
                                    <div>
                                        <button className="ms-3 bg-white border-outline-none text-sm fw-medium text-gray-7">Product Info</button>
                                        <button className="ms-3 bg-white border-outline-none text-sm fw-medium text-gray-7">Details</button>
                                        <button className="ms-3 bg-white border-outline-none text-sm fw-medium text-gray-7">Review</button>
                                        <button className="mx-3 bg-white border-outline-none text-sm fw-medium text-gray-7">Q&A</button>
                                    </div>
                                </div>
                                </div>
                            </nav>
                            <hr className='me-3 my-0'></hr>
                            <div>
                                <Info />
                            </div>
                        </div>
                    </div>
                </div>
                <div style ={offsetElementPosition}></div>
            </div>
        </div>
        </>
    )
}