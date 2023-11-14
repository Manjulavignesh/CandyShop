import { useRef, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [isAdded,setIsAdded]=useState(false);
  const name = useRef();
  const des = useRef();
  const price = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: name.current.value,
      des: des.current.value,
      price: price.current.value,
    };
    setProducts([...products,obj]);
    setIsAdded(true);
    };
  return (
    <>
      <h1>Enter Product Details</h1>
      <form style={{ marginTop: 50 }} onSubmit={submitHandler}>
        <label>CandyName</label>
        <input
          type="text"
          ref={name}
          placeholder="EnterName"
          style={{ marginLeft: 20, width: 150, height: 25 }}
        />
        <label style={{ marginLeft: 20 }}>Description</label>
        <input
          type="text"
          ref={des}
          placeholder="Description"
          style={{ marginLeft: 20, width: 150, height: 25 }}
        />
        <label style={{ marginLeft: 20 }}>Price</label>
        <input
          type="number"
          placeholder="value"
          ref={price}
          style={{ marginLeft: 20, width: 150, height: 25 }}
        />
        <input type="button"
          style={{ marginLeft: 20, width: 150, height: 30 }}
           value="Add Candy"
        />
        {isAdded && showProducts()}
          
        
      </form>
    </>
  );
}

export default App;
