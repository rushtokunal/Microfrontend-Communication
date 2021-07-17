import React from "react"

const RemoteMFE = React.lazy(() => import("app2/App"));

const addToCart = (item) => () => {
  const event = new CustomEvent('addToCart', { detail: item });
  window.dispatchEvent(event);
}

const productItemView = (product, index) => {
  const price = parseFloat((Math.random() * 100).toFixed(2));

  return (
    <li key={index} style={{ padding: "30px", listStyle: "none", border: "1px solid #000", margin: "5px" }}>
      <b>{product}</b> <br />
      $ {price} <br />
      <button onClick={addToCart({ product, price })}>Buy</button>
    </li>
  );
};

function App() {

    return (<div>
        <section>
        <h2>Products</h2>
        <ul style={{ display: 'flex', padding: '5' }}>
        { ['T-Shirt', 'Jeans', 'Shorts', 'Joggers'].map(productItemView) }
        </ul>
        </section>
        <h1> below is from remote Cart MFE</h1>
        <React.Suspense fallback="Loading Remote MFE">
        <RemoteMFE />
        </React.Suspense>

    </div>)
}

export default App