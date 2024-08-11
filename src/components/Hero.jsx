import React from "react";
import "./MainPage.scss";
import { CiMicrophoneOn } from "react-icons/ci";

const MainPage = () => {

  return (
    <div className="main-page">
      <div className="borderline w-full h-[1px]"></div>
      <section className="main-page__hero">
        <div className="main-page__hero-content">
          <h1>A Landline For Your Mobile</h1>
          <p>
            Our Virtual Phone Numbers give you a Local (01/02), 0800, 0333 or
            0300 number that can be sent to your existing landline or mobile
            phone. Tamar Telecom provide over 10 free features to help you
            manage when you're open, when you're on holiday and send calls to
            different telephone numbers at different times of the day.
          </p>
          <button className="main-page__cta-button">Choose Your Number</button>
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
          Choose A Telephone Number
        </h2>
        <div className="main-page__numbers-options">
          <div className="main-page__number-option">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/uk1.png"
              alt="0800 Numbers"
            />
            <h3>0800 Numbers</h3>
            <p>
              Help increase enquiries by offering your customers a number that's
              free to call from landlines AND mobiles..
            </p>
            <button>Choose Your Number</button>
          </div>
          <div className="main-page__number-option">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/uk2.png"
              alt="Local Numbers"
            />
            <h3>Local Numbers</h3>
            <p>
              Show customers that you are an established local business with our
              Virtual Landlines services.
            </p>
            <button>Choose Your Number</button>
          </div>
          <div className="main-page__number-option">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/uk3.png"
              alt="0333 Numbers"
            />
            <h3>0333 Numbers</h3>
            <p>
              Give your business a professional, nationwide presence with our
              0333 National Telephone Numbers.
            </p>
            <button>Choose Your Number</button>
          </div>
        </div>
      </section>

      <div className="borderline w-full h-[1px]"></div>

      <section className="main-page__features">
        <h2>Free Features Included With All Numbers</h2>
        <p>
          All Tamar numbers come with over 10 free features to help your
          business grow and control when you receive calls.
        </p>
        <p className="feature-link">View all free Features</p>
        <div className="w-full flex gap-5 px-6 text-left">
          <div className="w-[65%] flex flex-col gap-7 px-9 py-2">
            <div className="flex md:flex-row flex-col gap-9">
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-9">
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-9">
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
            </div>
          </div>
          <div className="w-[35%] flex justify-center items-center">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/lady-headset.webp"
              alt=""
              className="h-[80%]"
            />
          </div>
        </div>
        <div>
          <button className="view-feature font-sans font-semibold text-xl">Choose Your Number</button>
        </div>
      </section>

      <div className="borderline w-full h-[1px]"></div>

      <section className="main-page__premium">
        <h2>Premium Features</h2>
        {/* <div className="main-page__features-container main-page__features-container2" style={{ marginTop: '20px' }}>
          <div className="main-page__premium-image">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/vsb-man.png"
              alt="Premium Features"
            />
          </div>
          <div className="main-page__premium-content">
            <div className="main-page__features-list">
              <div className="main-page__feature">
                <img
                  src="https://www.tamartelecommunications.co.uk/phonedivert/images/icons/new/greeting-new.png"
                  alt=""
                />
                <h3>Professional </h3>
                <p>Tamar's Professional are designed</p>
              </div>
              <div className="main-page__feature">
                <img
                  src="https://www.tamartelecommunications.co.uk/phonedivert/images/icons/new/greeting-new.png"
                  alt=""
                />
                <h3>Professional </h3>
                <p>Tamar's Professional are designed</p>
              </div>
              <div className="main-page__feature">
                <img
                  src="https://www.tamartelecommunications.co.uk/phonedivert/images/icons/new/greeting-new.png"
                  alt=""
                />
                <h3>Professional </h3>
                <p>Tamar's Professional are designed</p>
              </div>
              <div className="main-page__feature">
                <img
                  src="https://www.tamartelecommunications.co.uk/phonedivert/images/icons/new/greeting-new.png"
                  alt=""
                />
                <h3>Professional </h3>
                <p>Tamar's Professional are designed</p>
              </div>
            </div>
            <button className="main-page__cta-button">
              Choose Your Number
            </button>
          </div>
        </div> */}
        <div className="w-fullh-auto md:h-96 flex gap-5 px-6 text-left">
          <div className="w-[35%] flex justify-center items-center">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/vsb-man.png"
              alt=""
              className=""
            />
          </div>
          <div className="w-[65%] flex flex-col gap-7 px-9 py-2">
            <div className="flex md:flex-row flex-col gap-9">
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-9">
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
              <div className="w-[50%] space-y-3 border px-6 py-5 bg-white rounded-md shadow-md">
                <div className="flex px-2 ">
                  <CiMicrophoneOn className="text-4xl text-[#c6117d]" />
                  <p className="text-2xl text-[#c6117d] font-sans font-semibold">Welcome Announcement</p>
                </div>
                <p className="text-xl font-sans font-thin px-4">Play a welcome announcement before the call is connected.</p>
              </div>
            </div>
          </div>

        </div>
        <div>
          <button className="view-feature font-sans font-semibold text-xl">Choose Your Number</button>
        </div>
      </section>

      <div className="borderline w-full h-[1px]"></div>
      
      <section className="main-page__testimonials">
        <h2>What Our Customers Say About Tamar</h2>
        <p className="">Happy customers are at the heart of what we do. Don't take our word for it, look at what over 2000 customers are saying.</p>
        <div className="flex justify-end items-center gap-24">
        <img
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png"
            alt="Tamar Logo"

            className="h-7 w-[42%]"
          />
        <img style={{ marginTop: '20px' }} src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/review.png" alt="" />
        </div>
      </section>


    </div>
  );
};

export default MainPage;
