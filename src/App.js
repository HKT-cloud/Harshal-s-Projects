
import './App.css';
import shoes from './shoes.jpg';





function App() {
  return (
    <div className="App">
      
      <div class="container">
          
          <div class="image_section">
            <hr></hr>
          <img src={shoes} alt="shoes" style={{width:'300px', height:'300px'}}></img>
          <hr></hr>
          <h4>Select Size</h4>
          <div class="size_section">
                <button class="btn 5">UK 5</button>
                <button class="btn 6">UK 6</button>
                <button class="btn 7">UK 7</button>
                <button class="btn 8">UK 8</button>
                <button class="btn 9">UK 9</button>
                <button class="btn 10">UK 10</button>
                <button class="btn 11">UK 11</button>
          </div>
          <hr></hr>
          </div>
          <div class="content">
          <input class="search" placeholder="Search" type="text" name="username"></input>
              <h4 class="sus">Sustainable Materials</h4>
              <hr></hr>
              <h3>Nike Dunk Low Retro Men's Shoes</h3>
              <a href="https://www.nike.com/in/t/dunk-low-retro-shoes-mh4Q5d">Visit Us</a>
              <hr></hr>
              <h4>MRP : ₹  8 295.00</h4>
              <h5>Inclusive of all taxes
              (Also includes all applicable duties)</h5>
              <button onClick={() => alert("Added To Cart")}>Add To Cart</button>
          </div>
      </div>
    </div>
  );
}

export default App;
