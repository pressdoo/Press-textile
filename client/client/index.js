import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>🧵 Press Textile</h1>

      <Product
        name="Shaddah"
        price="₦95,000 (10 yards)"
        link="https://paystack.com/buy/shaddah-10-yards-agvlpm"
      />
      <Product
        name="Men Lace"
        price="₦300,000 (10 yards)"
        link="https://paystack.com/buy/men-lace-10-yards-ivpxla"
      />

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a
          href="https://wa.me/message/KRVCMSAFBREJE1"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

const Product = ({ name, price, link }) => (
  <div
    style={{
      border: '1px solid #ccc',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '10px',
    }}
  >
    <h2>{name}</h2>
    <p style={{ fontWeight: 'bold' }}>{price}</p>
    <a
      href={link}
      style={{
        backgroundColor: '#0C55A1',
        color: 'white',
        padding: '8px 16px',
        textDecoration: 'none',
        borderRadius: '6px',
        display: 'inline-block',
      }}
    >
      Buy Now
    </a>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
