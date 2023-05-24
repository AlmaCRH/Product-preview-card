import "./App.css";
import cardMobile from "../images/image-product-mobile.jpg";
import iconCart from '../images/icon-cart.svg'

function App() {
  return (
    <container className="container grid grid-cols-1  mx-auto min-w-100 max-w-144 sm:grid-cols-2 ">
      <div>
        <img className="rounded-t-lg h-full" src={cardMobile} />
      </div>
      <div className="bg-white p-7 rounded-b-lg md:rounded-l-lg xl:rounded-l-lg">
        <div className="text-left">
          <p className="tracking-[8px] text-grayish-blue font-Montserrat">
            PERFUME
          </p>
          <h1 className="font-bold text-3xl text-very-dark-blue font-Fraunces">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-grayish-blue mt-2 mb-5 font-Montserrat">
            A floral, solar and voluptous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <div className="w-full flex justify-left space-x-5 font-Fraunces">
            <h1 className="text-emerald-900 font-bold text-2xl">$149.99</h1>
            <p className="text-grayish-blue line-through text-xs">$169.99</p>
          </div>
        </div>
        <div className="bg-emerald-800 hover:bg-emerald-700 flex justify-center rounded-lg h-11 font-Montserrat ">
          <button className="w-40 text-white flex justify-center mt-2.5">
            <img className="text-center h-6 mr-4" src={iconCart} />
            <p className="font-semibold">Add to Cart</p>
          </button>
        </div>
      </div>
    </container>
  );
}

export default App;
