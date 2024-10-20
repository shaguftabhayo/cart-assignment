import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from './components/header';
import Products from './components/products';
import CartList from './components/CartList';

function App() {
  return (

  <div>
    <Header />
   <Products/>
   <CartList />
  </div>
  );
}

export default App;
