import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData.js";
import { clearErrors, getProduct } from "../../actions/productAction";
// import { getProduct } from "../../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Home = () => {
  // const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {

    // if (error) {
    //  return alert.error(error);
    // //  alert.error(error);
    //   // dispatch(clearErrors());
    // }
    if (error) {
      toast.error(error);
      dispatch(clearErrors()); 
    }

    dispatch(getProduct());
  // }, [dispatch, error, alert]);
}, [dispatch,error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ShoppingAdda" />

          <div className="banner">
            <p>Welcome to ShoppingAdda</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;