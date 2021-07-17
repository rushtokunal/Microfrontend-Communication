import 'regenerator-runtime/runtime';
import React from "react"

function App() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        window.addEventListener('addToCart', (event) => {
            setProducts(products => [...products, event.detail]);
          });
        return ()=> {
          window.removeEventListener('addToCart');
        };
      },[])
      
    const renderProducts =  () => {
        if (products.length === 0) {
          return <p>Your cart is empty</p>;
        }
        return <ul>{products.map(renderProduct()) }</ul>;
      }
    const renderProduct = () => (product, index) => {
        return <li key={index}>{ product.product } - ${ product.price }</li>;
      }

    return (<div>
        <h2>Cart</h2>
        { renderProducts() }
    </div>)
}

export default App;