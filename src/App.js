import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda de Ropa</h1>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Mujer</a>
          <a href="#">Hombre</a>
          <a href="#">Accesorios</a>
      a    <a href="#">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Descubre lo último en moda Isai PAWITO   </h2>
      </section>

      <section className="productos">
        <Producto
          img="\img\camisaceleste.jpg"
          nombre="Camisa Elegante"
          descripcion="Camisa de alta calidad perfecta para cualquier ocasión."
          precio="$29.99"
        />
        <Producto
          img="https://example.com/product2.jpg"
          nombre="Vestido de Verano" 
          descripcion="Fresco y ligero, ideal para días soleados."
          precio="$49.99"
        />
        <Producto
          img="https://example.com/product3.jpg"
          nombre="Pantalón Casual"
          descripcion="Comodidad y estilo para el día a día."
          precio="$39.99"
        />
        <Producto
          img="https://example.com/product4.jpg"
          nombre="Accesorios Modernos"
          descripcion="Añade un toque de elegancia con nuestros accesorios."
          precio="$19.99"
        />
      </section>

      <footer>
        <p>&copy; 2024 Tienda de Ropa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function Producto({ img, nombre, descripcion, precio }) {
  return (
    <div className="producto">
      <img src={process.env.PUBLIC_URL + img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p className="precio">{precio}</p>  
    </div>
  );
}
 

export default App; 