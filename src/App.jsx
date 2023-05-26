import "./App.css";
import cardMobile from "../images/image-product-mobile.jpg";
import iconCart from "../images/icon-cart.svg";

function App() {
  const handleClick = () => {
    return alert("Product added to cart!");
  };

  return (
    <container
      role="banner"
      className="container grid grid-cols-1 mx-auto min-w-100 max-w-screen-xl sm:grid-cols-2 "
    >
      <div role="img">
        <img
          alt="Image of a perfume named Gabrielle from Chanel "
          className=" max-[639px]:rounded-t-lg h-full sm:rounded-l-lg md:rounded-l-lg lg:rounded-l-lg xl:rounded-l-lg xl2:rounded-l-lg"
          src={cardMobile}
        />
      </div>
      <div
        role="contentinfo"
        className="bg-white p-7 max-[639px]:rounded-b-lg sm:rounded-r-lg md:rounded-r-lg lg:rounded-r-lg xl:rounded-r-lg xl2:rounded-r-lg "
      >
        <div role="article" className="text-left">
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
        <div className=" bg-emerald-800 hover:bg-emerald-700 flex justify-center rounded-lg h-11 font-Montserrat">
          <button
            className="w-40 text-white mt-2.5 flex justify-center "
            onClick={handleClick}
          >
            <img
              alt="Icon of a cart"
              className="text-center h-6 mr-4"
              src={iconCart}
            />
            <p className="font-semibold">Add to Cart</p>
          </button>
        </div>
      </div>
    </container>
  );
}

export default App;
