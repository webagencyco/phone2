import React from "react";
import "./MainPage.scss";
import { CiMicrophoneOn } from "react-icons/ci";

const About = () => {
  return (
    <div className="main-page">
      <div className="borderline w-full h-[1px]"></div>
      <section className="main-page__hero" style={{ background: "#fff" }}>
        <div className="main-page__hero-content">
          <h1>About Tamar Telecom</h1>
          <p style={{ fontSize: "1.8rem" }}>A Little About Us</p>
          <p style={{ fontSize: "1.5rem", fontWeight: "300" }}>
            We've been providing telecoms solutions to businesses for over 20
            years. We became a network operator in 2012 meaning we can give our
            customers the absolute best prices.
            <br />
            Over the years we've built a loyal customer base, supplying
            telephone numbers to over 25,000 businesses across the UK. We
            believe in simple, approachable and cost effective solutions for
            businesses of all sizes.
          </p>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <button className="main-page__cta-button">
              Choose Your Number
            </button>
            <img
              width={300}
              style={{ marginLeft: "20px" }}
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/excellent.png"
              alt=""
            />
          </div>
        </div>
        <img
          src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/hero-lady.webp"
          alt="Hero"
          className="main-page__hero-image"
        />
      </section>

      <div className="borderline w-full h-[1px]"></div>

      <section className="main-page__numbers">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
          Our Goals
        </h2>
        <p style={{ fontSize: "1.3rem", fontWeight: "300" }}>
          We want to give every business the power to connect with their
          customers, no matter their size. We built our core values around this.
          If you're a solo entrepreneur or a 100+ office we're making telecoms
          solutions approachable for everybody.
        </p>
        <div className="main-page__numbers-options">
          <div className="main-page__number-option">
            <CiMicrophoneOn style={{ height: "50px", scale: "2.5" }} />
            <h3>Reliability</h3>
            <p>
              We answer over 96% of our calls within 10 seconds. Always here
              when you need us.
            </p>
            <button>Choose Your Number</button>
          </div>
          <div className="main-page__number-option">
            <CiMicrophoneOn style={{ height: "50px", scale: "2.5" }} />
            <h3>Credibility</h3>
            <p>We pride ourselves in offering outstanding customer service.</p>
            <button>Choose Your Number</button>
          </div>
          <div className="main-page__number-option">
            <CiMicrophoneOn style={{ height: "50px", scale: "2.5" }} />
            <h3>Simplicity</h3>
            <p>
              No hidden costs, no long contract or complicated jargon. Just
              open, honest telecoms.
            </p>
            <button>Choose Your Number</button>
          </div>
        </div>
      </section>

      <div className="borderline w-full h-[1px]"></div>

      <section className="main-page__features">
        <div className="w-full flex gap-5 px-6 text-left">
          <div className="w-[40%] flex justify-center items-center">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/lady-headset.webp"
              alt=""
              className="h-[80%]"
            />
          </div>
          <div className="w-[35%]">
            <h2 className="text-transparent mt-[70px] bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
              Passionate About Your Business
            </h2>
            <p className="text-lg	">
              Over 20 years in telecoms has given us an incredible insight into
              what businesses need to connect with their customers. We're
              constantly connecting with ours and investing in new and exciting
              features to help them grow.
              <br /> We've proudly maintained a 5 star rating from our customers
              on TrustPilot. If you want to know what we're really about, go
              check out what they're saying about us.
            </p>
          </div>
        </div>
        <button className="view-feature font-sans font-semibold text-xl">
          Customer Reviews
        </button>
      </section>


      <section className="p-[60px]  flex flex-col gap-3">
        <p className="text-xl">Full Company Name - Kalnet4u Ltd t/a Tamar Telecommunications® <br /></p>
        <p className="text-xl">Company Reg Number - 4655311 <br /></p>
        <p className="text-xl">VAT Reg Number - 812 4081 65 <br /></p>
        <p className="text-xl">Data Protection Act Reg Number - Z7785470 <br /></p>
        <p className="text-xl">Registered Company Address - 19 Research Way, Derriford, Plymouth, PL6</p>
        <p className="text-xl">‘Tamar Telecommunications’ and the marble device are registered</p>
        <p className="text-xl">trademarks of Kalnet4u Ltd <br /></p>
      </section>

      <section className="main-page__testimonials bg-slate-50">
        <div className="flex justify-end items-center gap-24">
          <img
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png"
            alt="Tamar Logo"
            className="h-7 w-[42%]"
          />
          <img
            style={{ marginTop: "20px" }}
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/review.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default About;
