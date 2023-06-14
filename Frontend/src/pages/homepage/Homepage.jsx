import React, { useEffect, useState } from "react";
import { getAllProductsApi, testApi } from "../../apis/Api";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";

// import testapi

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // get all products
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // instance of navigate hook
  const navigate = useNavigate();

  // navigate to search page when search button is clicked
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className="container-fluid slide ">
      <form action="">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="form-control mb-3"
          placeholder="Search products by name"
        />
        <button onClick={handleSearch} type="submit" hidden>
          Search
        </button>
      </form>

      {/* <div
        class="bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1592321050904-8c615b8f11e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')",
          height: "100vh",
        }}
      ></div> */}
      <section>
        <div className="container-fluid mt-3 ">
          <div className="flex flex-col mb-3 position-relative">
            <div
              className="bg-cover d-flex "
              style={{
                backgroundColor: "#884A39",
                height: "100vh",
              }}
            >
              <div
                className="bg-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1592321050904-8c615b8f11e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')",
                  height: "100vh",
                  width: "50%",

                  // position: "absolute",
                  //   top: "11 rem",
                  //   left: "1rem"
                }}
              ></div>
              <div className="quote position-absolute ">
                <h1 className="  text-right ">where creativity meets craft</h1>
                <h5 className="mt-5 text-center ">Settle in with us</h5>

                {/* <button type="button" class="btn text-white mt-5 text-center" data-mdb-ripple-color="dark"
        style ={{
          backgroundColor: "#6a994e"
        }}
        >Light</button> */}
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn text-white mt-2 text-center"
                    data-mdb-ripple-color="dark"
                    style={{
                      backgroundColor: "#6a994e",
                    }}
                  >
                    Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <h1 className="mt-5 mb-4 p-3 poppins">Available products</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4 p-3">
        {products.map((product) => {
          return (
            <Link to={`/product/details/${product._id}`} class="col">
              <div class="card">
                <img
                  src={product.image}
                  class="card-img-top object-cover"
                  alt="Hollywood Sign on The Hill"
                  width={"100px"}
                  height={"220px"}
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title text-black">{product.name}</h5>
                    <h5 class="card-title text-black">NPR.{product.price}</h5>
                  </div>
                  <hr />
                  <p className="text-black">{product.description}</p>
                  <button className="btn w-100 btn-outline-black">
                    View more
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div> */}
      <div className="mid " style={{backgroundColor:"#a68a64"}}>
<h2 className="text-center ">We're the biggest problem solvers in furniture</h2>
<i class="fas fa-cart-flatbed-suitcase px-5 fs-1"> </i>
<p className="px-4">Fast and free shipping<br/>
Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
      </div>
    </div>
  );
};

export default Homepage;
