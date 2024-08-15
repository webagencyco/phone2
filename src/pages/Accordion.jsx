import React, { useState } from 'react';
import "./MainPage.scss";


const Accordion = () => {
    const [activeNestedSections, setActiveNestedSections] = useState([]);


    const toggleNestedSection = (section) => {
        setActiveNestedSections((prevSections) => {
            if (prevSections.includes(section)) {
                return prevSections.filter((s) => s !== section);
            } else {
                return [...prevSections, section];
            }
        });
    };

    return (
        <div data-accordion="collapse">
            <div data-accordion="collapse">
                <div className='flex gap-6 w-full'>
                    <div className='w-[50%]'>
                        <h2 id="">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium"
                                onClick={() => toggleNestedSection(1)}
                                aria-expanded={activeNestedSections.includes(1)}
                                aria-controls="accordion-nested-collapse-body-1"
                            >
                                <span className='text-2xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>What is VoIP?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeNestedSections.includes(1) ? 'rotate-180' : ''} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-1"
                            className={`accordion-content ${activeNestedSections.includes(1) ? 'open' : ''}`}
                            aria-labelledby="accordion-nested-collapse-heading-1"
                        >
                            <div className="px-6 ">
                                <p className="text-2xl font-thin font-sans">
                                VoIP (voice over Internet Protocol) is the transmission of voice over an internet connection. VoIP allows users to make voice calls from a smartphone, other mobile devices, computers, and even dedicated VoIP phones. VoIP is particularly useful for businesses as it enables you to have a range of features that would be unavailable on traditional phone services. Features like on demand recording, welcome greetings, on hold music, call transfer and many more. VoIP is a great tool to keep a whole team connected and working harmoniously together, unifying businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h2 id="accordion-nested-collapse-heading-1">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5"
                                onClick={() => toggleNestedSection(2)}
                                aria-expanded={activeNestedSections.includes(2)}
                                aria-controls="accordion-nested-collapse-body-1"
                            >
                                <span className='text-2xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>How do I get set up?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeNestedSections.includes(2) ? 'rotate-180' : ''} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-1"
                            className={`accordion-content ${activeNestedSections.includes(2) ? 'open' : ''}`}
                            aria-labelledby="accordion-nested-collapse-heading-1"
                        >
                            <div className="px-6">
                                <p className="text-2xl font-thin font-sans">
                                Setting up VoIP is a lot easier than most people expect. Simply sign up by selecting your tariff, we’ll send you log in details for the VoIP App and within a few minutes you’ll be customising your new VoIP system and making/receiving business calls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-6 w-full'>
                    <div className='w-[50%]'>
                        <h2 id="accordion-nested-collapse-heading-2">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 gap-3"
                                onClick={() => toggleNestedSection(3)}
                                aria-expanded={activeNestedSections.includes(3)}
                                aria-controls="accordion-nested-collapse-body-2"
                            >
                                <span className='text-2xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Is there a catch?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeNestedSections.includes(3) ? 'rotate-180' : ''} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-2"
                            className={`accordion-content ${activeNestedSections.includes(3) ? 'open' : ''}`}
                            aria-labelledby="accordion-nested-collapse-heading-2"
                        >
                            <div className="px-6">
                                <p className="text-2xl font-thin font-sans">
                                There is no catch. We’re rated 5 stars for a reason. When we set out on our telecoms journey over 20 years ago, we wanted to rival the companies making telecoms complicated so they could charge extortionate prices making professional setups completely unapproachable for smaller businesses. We’re making telecoms easy, affordable and approachable to businesses of ALL sizes and our reviews from 1000’s of customers back up our claims. We’re transparent with out costs and strive to make sure our customers know exactly what they’re paying. We even made almost all of our call features completely free!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h2 id="accordion-nested-collapse-heading-2">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 gap-3"
                                onClick={() => toggleNestedSection(4)}
                                aria-expanded={activeNestedSections.includes(4)}
                                aria-controls="accordion-nested-collapse-body-2"
                            >
                                <span className='text-2xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Could I have multiple numbers?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeNestedSections.includes(4) ? 'rotate-180' : ''} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-2"
                            className={`accordion-content ${activeNestedSections.includes(4) ? 'open' : ''}`}
                            aria-labelledby="accordion-nested-collapse-heading-2"
                        >
                            <div className="px-6">
                                <p className="text-2xl font-thin font-sans">
                                Yes, this is common for our customers as we make the price so affordable. We often have customers set up a primary business number then use a secondary number to track various marketing campaigns. If you’re based in multiple locations it’s common practice to have numbers for these areas to help increase enquiries… all your business numbers can come to the same phone and you can use Call Whisper to track where the call came from.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-6 w-full'>
                    <div className='w-[50%]'>
                        <h2 id="accordion-nested-collapse-heading-3">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 gap-3"
                                onClick={() => toggleNestedSection(5)}
                                aria-expanded={activeNestedSections.includes(5)}
                                aria-controls="accordion-nested-collapse-body-3"
                            >
                                <span className='text-2xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>How much does it cost?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeNestedSections.includes(5) ? 'rotate-180' : ''} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-3"
                            className={`accordion-content ${activeNestedSections.includes(5) ? 'open' : ''}`}
                            aria-labelledby="accordion-nested-collapse-heading-3"
                        >
                            <div className="px-6">
                                <p className="text-2xl font-thin font-sans">
                                There’s no hidden costs and a 30 day rolling contact. Simply select your tariff above and what you see is what you pay!
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h2 id="accordion-nested-collapse-heading-3">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 gap-3"
                                onClick={() => toggleNestedSection(6)}
                                aria-expanded={activeNestedSections.includes(6)}
                                aria-controls="accordion-nested-collapse-body-3"
                            >
                                <span className='text-2xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Where Can I Find The Fair Usage Policy?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeNestedSections.includes(6) ? 'rotate-180' : ''} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-nested-collapse-body-3"
                            className={`accordion-content ${activeNestedSections.includes(6) ? 'open' : ''}`}
                            aria-labelledby="accordion-nested-collapse-heading-3"
                        >
                            <div className="px-6">
                                <p className="text-2xl font-thin font-sans">
                                Our fair usage policy can be found here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
