import React from "react";
import "./MainPage.scss";

const ContactUs = () => {
  return (
    <div className="main-page">
      <div className="borderline w-full h-[1px]"></div>
      <section className="main-page__hero ">
        <div className="main-page__hero-content space-y-5">
          <h2 className="text-7xl font-sans font-semibold">Get In Contact</h2>
          <h2 className="text-5xl font-sans font-thin">We Love To Chat</h2>
          <p className="text-2xl px-2 pt-6 font-sans font-thin">
            We love talking to customers. Our team are here to help answer any
            questions you may have, there’s nothing we haven’t heard before.
          </p>
          <p className="text-2xl px-2 pb-4 font-sans font-thin">
            We answer 98% of calls within 10 seconds and we’re proud of our 5
            star rating on TrustPilot.
          </p>
          <div className="flex gap-6">
            <button className="main-page__cta-button font-sans font-semibold">
              Call 0800 772 0000
            </button>
            <button className="main-page__cta-button font-sans font-semibold">
              Email Us
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/lady.png"
            alt="Hero"
            className="w-[]"
          />
        </div>
      </section>

      <form className="px-24 py-12 space-y-4">
        <h1 className="text-3xl font-sans font-semibold">Send Us A Message</h1>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="first_name"
              class=" border border-gray-300  text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="last_name"
              class=" border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            class=" border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Message
          </label>
          <textarea
            type="email"
            id="email"
            class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none"
            placeholder="Tell Us how we can help?"
            rows="4"
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
