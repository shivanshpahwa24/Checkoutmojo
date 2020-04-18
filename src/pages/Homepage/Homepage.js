import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion2/Accordion";
import TrySvg from "../../assets/images/background/install.svg";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <section>
        <div class="d-md-flex justify-content-around">
          <div class="col-12 col-md-4 my-2" style={{ zIndex: 10 }}>
            <h3 class="heading">
              Get rid of checkout queues. Know exactly when the cart is ready
              for checkout.{" "}
            </h3>
            <p>
              Tired of waiting for your turn while shopping online? Checkoutmojo
              is a simple chrome extension that alerts you when your cart is
              ready for checkout.{" "}
            </p>
            <Button classes="p-3">
              Install{" "}
              <span className="font-weight-normal text-capitalize">
                Checkoutmojo
              </span>
            </Button>
          </div>

          <div
            class="col-12 col-md-4 my-2 mr-md-5 mt-4 mt-md-0"
            style={{ zIndex: 10 }}
          >
            <video autoplay="" loop="" playsinline="">
              <source src="https://external-preview.redd.it/FuqGGUPh2r8D5y9joV5UzJLme-Q5KVUq-SQYaJrVOvE.gif?format=mp4&s=ff402255f420afbacbd330ae0cb998be8be05e31" />
            </video>
          </div>
        </div>
      </section>
      <section id="demo">
        <h3 className="text-center heading">
          Get going in less than 5 minutes
        </h3>
        <p className="text-center">
          Watch this tutorial and you never have to worry about checkout queues
          at online stores
        </p>
        <div className="embed-responsive embed-responsive-16by9 col-10 col-md-6 mx-auto">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/9o1jmMaWsr8"
            title="demo"
          ></iframe>
        </div>
      </section>

      <section className="text-center">
        <div
          className="d-flex align-items-center"
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(${TrySvg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="install-wrapper mx-auto mt-5 pt-5">
            <h2 className="heading text-white">Try it, it's free.</h2>
            <p className="text-white">Starting version is free, forever.</p>
            <Button children="Get Started Now" classes="p-3" />
          </div>
        </div>
      </section>
      <section id="faqs" className="w-75 text-center mx-auto">
        <h3 className="text-center" /* style={{ color: "#0C3F93" }} */>FAQs</h3>
        <Accordion />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
