// pages/index.js
export default function Home() {
  const menu = [
    { name: 'Ayam Goreng', price: 'Rp25.000' },
    { name: 'Es Teh Manis', price: 'Rp5.000' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Menu Restoran</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menu.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>{item.name}</span> - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
