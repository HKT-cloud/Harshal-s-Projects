import React, { useEffect, useState } from 'react'
import Form from './Form'
import Crud from './Crud'


const Content = () => {

  const [value, setvalue] = useState([])
  const [back, setback] = useState(false)

  function manageback() {
    setback(true)
  }
  function closback() {
    setback(false)
  }
  useEffect(() => {
    fetch("http://localhost:3000/pitches")
      .then((res) => res.json())
      .then((data) => setvalue(data))
      .catch((err) => console.log(err))

  }, [value])

  // Delte Part

  const managedelete = (id) => {
    fetch(`http://localhost:3000/pitches/${id}`, {
      method: 'DELETE'
    }).then((res) => res.json)
      .then((data) => {
        console.log(data)
        alert("Data deleted")
      }).catch((err) => {
        console.log(err)
        alert("error")
      })
  }

  // Patch Part

  const [updateprice, setupdateprice] = useState(0)
  const[ied,setied]=useState(0)

  function patch(id,price) {
    setied(id)
    setupdateprice(price)
    console.log(ied)
  }

  function handleupdate() {
    fetch(`http://localhost:3000/pitches/${ied}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({price:updateprice})
    }).then((res) => res.json())
      .then((data) => { alert("Updated"), console.log(data)})
      .catch((err) => console.log(err))
  }

  return back ? <Crud close={closback} /> : (
    <div className='Main_container'>
      <div className='hdr12'>
      <h1 style={{ marginLeft: "600px", marginTop: "50px", marginBottom: "30px" }}>Shoes Calling📞</h1>
      </div>
      <div className='but'>
        <h3>Too Open Post Section Click Below👇🏼</h3>
        <button className='but2' onClick={manageback}>Open Crud</button>
      </div>
      <div className='butt2'>
          <h3>To Edit</h3>
          <input type="text" value={updateprice} placeholder='Enter updated price' onChange={(e) => setupdateprice(e.target.value)} />
          <button onClick={handleupdate}>update</button>
        </div>

      <div className="cnt-grid">
        {value.map((el) => (
          <div key={el.id} className="cnt123">
            <div className="cnt1234">
              <img className="image123" src={el.image} alt="photo" />
              <h1 className="tittle123">{el.tittle}</h1>
              <h4 className="price123">{el.price}</h4>
              <h6 className="descrip123">{el.description}</h6>
              <button className='btn 1' style={{ color: 'black' }} onClick={() => managedelete(el.id)}>Delete</button>
              <button className='btn 2' style={{ color: "black" }} onClick={() => patch(el.id,el.price)}>Edit</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Content