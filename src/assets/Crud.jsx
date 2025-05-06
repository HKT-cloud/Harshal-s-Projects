import React from 'react'

const Crud = ({close}) => {

//post part start
    var image11=document.getElementById("product_image")
    var tittle11 = document.getElementById("product_tittle")
    var price11 = document.getElementById("product_price")
    var description11 = document.getElementById("product_description")
    var addproduct = document.getElementById("Add")

    function manage_add_product(){
        let product = {
            image:image11.value,
            tittle:tittle11.value,
            price:price11.value,
            description:description11.value
        }
       
        fetch("http://localhost:3000/pitches",{
            method: 'POST',
            headers: {
             'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            alert("data added")
        })
        .catch((err)=>{
            console.log(err)
            alert("errror")
        })
    }
    // Post Part End

    

  return (
    <div className='holder23' >
        <button onClick={close}>Back＜</button>
        <h1>Post Section 👇🏼</h1>
        <div className='holder12'>
        <input type="text" className='inputs12' id='product_image'placeholder='Image Address'/>
        <input type="text" className='inputs12' id='product_tittle' placeholder='Tittle'/>
        <input type="text" className='inputs12' id='product_price' placeholder='Price'/>
        <input type="text" className='inputs12' id='product_description' placeholder='Description'/>
        <button onClick={manage_add_product}>Add Product</button>
        </div>
    </div>
  )
}

export default Crud