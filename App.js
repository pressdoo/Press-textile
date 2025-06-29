import React from 'react';

const products = [
  {
    name: "Shaddah",
    price: "₦95,000 (10 yards)",
    link: "https://paystack.com/buy/shaddah-10-yards-agvlpm"
  },
  {
    name: "Men Lace",
    price: "₦300,000 (10 yards)",
    link: "https://paystack.com/buy/men-lace-10-yards-ivpxla"
  }
];

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>🧵 Press Textile</h1>

      {products.map((product, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px', borderRadius: '10px' }}>
          <h2>{product.name}</h2>
          <p style={{ fontWeight: 'bold' }}>{product.price}</p>
          <a href={product.link} style={{ backgroundColor: '#0C55A1', color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: '6px' }}>
            Buy Now
          </a>
        </div>
      ))}

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a href="https://wa.me/message/KRVCMSAFBREJE1" style={{ backgroundColor: '#25D366', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;
