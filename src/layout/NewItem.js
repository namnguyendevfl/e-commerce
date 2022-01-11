import React, { useState } from "react";
import { Centralize } from "../utils/centralize";
import { BsXLg } from "react-icons/bs"
import { IconContext } from "react-icons";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from "react-icons/md";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"

function CheckBoxBlank() {
    return (
            <IconContext.Provider value={{ className: "global-class-name", style: {width:"25px", height: "25px"} }}>
                <div>
                    <MdOutlineCheckBoxOutlineBlank />
                </div>
            </IconContext.Provider>
    )
}

function CheckBoxChecked() {
    return (
            <IconContext.Provider value={{ className: "global-class-name", style: {width:"25px", height: "25px", color:"green"}}}>
                <div>
                    <MdOutlineCheckBox />
                </div>
            </IconContext.Provider>
    )
}


function ValueList({value, idx, formData, property, setFormData}) {
    console.log(formData)
    const handleSelectValue = () => {
        if (property === "Colors") {
            setFormData(prevData => ({
                ...prevData,
                color: value
                
            }))
        } else {
            setFormData(prevData => ({
                ...prevData,
                size: value
                
            }))
        }
    }
    return (
        <div className="mx-2 d-flex" key = {idx}>
            <button className="d-flex m-0 p-0 border-outline-none bg-none" type = "button" onClick = {handleSelectValue}>
                {formData.color === value || formData.size === value 
                ? <CheckBoxChecked/>
                : <CheckBoxBlank />
                }
                {value}
            </button>
        </div>
    )
}

function Info({categories = [], properties, addDescription, setAddDescription, backDescription, setBackDescription, handleChange, formData, setFormData}) {
    const [selectProperty, setSelectProperty] = useState(null)
    const renderedProperties = properties.map((property, idx) => {
        const key = Object.keys(property)
        const values = Object.values(property)
        const handleSelectProperty = ({target : {id}}) => {
            if (selectProperty === key) {setSelectProperty(null)}
            else {setSelectProperty(id)}
        }
        
        const renderedValues = values[0].map((value, idx) => {
            return (
                <ValueList key = {idx} value = {value} formData = {formData} property = {key[0]} setFormData={setFormData}/>
            )
        })
        return (
            <form className="mx-3">
                <div className="me-3 d-flex justify-content-between">
                    <h4 className='text-sm fw-medium text-gray-9'>{key}</h4>
                    <button type = "button" onClick = {handleSelectProperty} className="border-outline-none bg-none d-flex align-items-center">
                        {selectProperty === key
                        ? <RiArrowUpSLine />
                        : <RiArrowDownSLine id = {key} />
                        }
                    </button>
                </div>
                <div className="ms-3 d-flex">
                    {selectProperty === key && 
                            renderedValues
                        }
                </div>
            </form>
        )
    })

    categories = ["men", "women"]
    const renderedCategories = categories.length && categories.map((category, idx) => {
        return (
            <option key = {idx} value = {category}> {category}</option>
        )
        })

    return (
        <> 
            <div className="">
                <div>
                    <label htmlFor="label" className='txt-medium fw-medium text-gray-9 m-0 p-0 '> Title: </label>
                    <input  className="mb-0 px-2 border-outline-none text-sm fw-medium text-gray-9 mt-2"
                            placeholder="Add title"
                            type = "text"
                            name = "name"
                            value = {formData.name}
                            onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price" className='txt-medium fw-medium text-gray-9 m-0 p-0 '> Price: </label>
                    <input  className="mb-0 px-2 border-outline-none text-sm fw-medium text-gray-9 mt-2"
                            placeholder="Add price"
                            type = "text"
                            name = "price"
                            id = "price"
                            value = {formData.price}
                            onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="quantity" className='txt-medium fw-medium text-gray-9 m-0 p-0 '> Quantity: </label>
                    <input  className="my-1 px-2 border-outline-none text-sm fw-medium text-gray-9 mt-2"
                            placeholder="Add quantity"
                            type = "text"
                            name = "quantity"
                            value = {formData.quantity}
                            onChange = {handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="category" className='txt-medium fw-medium text-gray-9 m-0 p-0 '> Category: </label>
                    <select className="mx-2" value = {formData.category} name = "category" id = "category" onChange = {handleChange}>
                        {renderedCategories}
                    </select>
                </div>
                <p className='text-medium fw-medium text-gray-9 my-2 p-0 '>Properties:</p>
                {renderedProperties}
                <div className="position-absolute" style = {{bottom:"50px", width: "85%"}}>
                    <div className="my-2" style = {{height:"45px"}}> 
                        <button type = "submit" className="h-100 w-100">Save</button> 
                    </div>
                </div>
            </div>
        </>
    )
}


export default function NewItem({newItem, setNewItem, properties}) {
    const [addDescription, setAddDescription] = useState(false)
    const [backDescription, setBackDescription] = useState(false)
    const cancelPopup = () => {
        setNewItem(() => false)
        setAddDescription(() => false)
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
    const initialData = {
        id:"",
        name:"",
        price:"",
        category:"",
        quantity:"",
        color: "",
        size: "",
        imageUrl:"",
    }
    const [formData, setFormData] = useState(initialData)
    // console.log(formData)
    const [imageSrc, setImageSrc] = useState();
    const handleChange = ({target: {name, value}}) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleUploadImg = (changeEvent) => {
        const reader = new FileReader();
        reader.onload = function(onLoadEvent) {
        setImageSrc(onLoadEvent.target.result);
        setUploadData(undefined);
    }
    reader.readAsDataURL(changeEvent.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget
        const fileInput = Array.from(form.elements).find(({id}) => id === "img-upload")
        const formData = new FormData();
        for (const file of fileInput.files) {
        formData.append('file', file);
        }
        formData.append('upload_preset', 'e-commerce');
        const data = await fetch('https://api.cloudinary.com/v1_1/drw8obnjb/image/upload',{
            method: 'POST',
            body: formData
          }).then(r => r.json());
        setFormData(prevData => ({
            ...prevData,
            imageUrl: data.secure_url
        }))
    }
    return (newItem &&
        <>
        <div>  
            <div className="position-fixed t-0 l-0 w-100 h-100" style = {{background:"black", opacity:"0.7"}}>
            </div>
            <form className = "popup-background" style = {bgPosition} onSubmit={handleSubmit}>
                <div style = {elementStyle}>
                    <div className="row d-flex h-100 position-relative">
                        <div className="position-absolute t-0 l-0">
                            <button className="border-outline-none bg-none" style = {{width:"35px", height: "35px"}} onClick = {cancelPopup}>
                                <BsXLg /></button>
                        </div>
                        <div className="col-7 h-100">
                            <div className="p-5 w-100 d-flex justify-content-center" style = {{height:"70%"}}>
                                <img className="" style = {{maxHeight:"100%", maxWidth:"100%"}} src={imageSrc} alt=""/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <input  style = {{border:"1px solid"}} 
                                        className='upload'
                                        name = "upload"
                                        id = "img-upload"
                                        type = "file"
                                onChange = {handleUploadImg}
                                />
                            </div>
                        </div>
                        <div className="col position-relative pt-5">
                            <div>
                                <Info setFormData={setFormData} properties = {properties} formData = {formData} handleChange = {handleChange} addDescription = {addDescription} setAddDescription = {setAddDescription} backDescription={backDescription} setBackDescription={setBackDescription}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style ={offsetElementPosition}></div>
            </form>
        </div>
        </>
    )
}