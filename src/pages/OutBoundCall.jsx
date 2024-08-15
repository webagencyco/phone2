import React from 'react'
import "./MainPage.scss";
import Image from "../assets/review.jpg";
import { TiMessages } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { GiHeadphones } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineAccountTree } from "react-icons/md";
import { TfiSignal } from "react-icons/tfi";

const OutBoundCall = () => {
    return (
        <div className='main-page'>
            <div className="borderline w-full h-[1px]"></div>
            <section className="main-page__hero ">
                <div className="main-page__hero-content space-y-5">
                    <h2 className='text-7xl font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Outbound Calling </h2>
                    <h2 className='text-5xl font-sans font-thin'>Make Outbound Calls Fom Your Virtual Number</h2>
                    <p className='text-2xl px-2 pt-6 font-sans font-thin'>Our outbound calling app, Tamar Connect, is available in the app store. You can now make outbound calls displaying your Tamar Telecommunications phone number.</p>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                        Tamar Connect is more than just an outbound calling app. Connect your team and present your business number using multiple phones.
                    </p>
                    <ul className='list-disc pl-12'>
                        <li className='text-2xl px-2 pb-2 font-sans font-thin'>Make outbound calls from your Tamar Number</li>
                        <li className='text-2xl px-2 pb-2 font-sans font-thin'>Make Outbound Calls to your phone</li>
                        <li className='text-2xl px-2 pb-2 font-sans font-thin'>Place callers on hold with hold music</li>
                        <li className='text-2xl px-2 pb-2 font-sans font-thin'>Allow staff to call out from your Tamar number too with multiple extensions</li>
                    </ul>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>All you need to start making outbound calls is a Tamar number, a good internet connection and a mobile device capable of downloading the app.</p>
                    <div className='flex gap-6'>
                        <button className="main-page__cta-button font-sans font-semibold">Choose Your Number</button>
                        <button className="main-page__cta-button font-sans font-semibold">Our Premium Features</button>
                    </div>

                </div>
                <div className=' w-[45%] flex justify-center items-center'>

                    <img
                        src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tc-man.png"
                        alt="Hero"
                    />
                </div>
            </section>

            <div className="borderline w-full h-[1px]"></div>

            {/* <div className='px-24 py-12 space-y-6'>
                <h1 className='mb-8 text-3xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>What features does WhatsApp Business bring to my business?</h1>

                <ul className='list-disc space-y-2 pl-6 ' >
                    <li className='text-2xl font-sans font-thin'>Create a branded profile with your business name and logo.</li>
                    <li className='text-2xl font-sans font-thin'>WhatsApp Business lets you message other WhatsApp users while displaying your business phone number and not your personal one.</li>
                    <li className='text-2xl font-sans font-thin'>You can label your conversations with customers to help stay organised. For example, “New Order” or “Support” etc.</li>
                    <li className='text-2xl font-sans font-thin'>WhatsApp lets you catalogue your products. This allows you to showcase and even purchase your products within the app.</li>
                    <li className='text-2xl font-sans font-thin'>Welcome customers by setting up a greeting that automatically responds when they send a message to your business WhatsApp.</li>
                </ul>
                <h1 className='mb-8 text-3xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Can I integrate my business number with Whatsapp Business?</h1>
                <p className='text-2xl font-sans font-thin'>
                    You can integrate your business phone number with Whatsapp Business. This allows you to display your Tamar number when sending messages. Displaying your Tamar number helps keep up that professional brand image when messaging your customers. Follow the steps below to setup your own Whatsapp Business Numbers in minutes.
                </p>
                <h1 className='mb-8 text-3xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>What features does WhatsApp Business bring to my business?</h1>

                <ul className='list-decimal space-y-2 pl-6 ' >
                    <li className='text-2xl font-sans font-thin'>Pick any number from our website.</li>
                    <li className='text-2xl font-sans font-thin'>We’ll get your new business number setup in 1 working hour.</li>
                    <li className='text-2xl font-sans font-thin'>Download and launch the WhatsApp Business app.</li>
                    <li className='text-2xl font-sans font-thin'>Follow their simple setup instructions. Once you are asked to complete registration with a 6 digit code, press send code then wait 30 seconds. An option will appear to enter code by phone, select that option and you will receive a call from your Tamar Business Number with the 6 digit code.</li>
                    <li className='text-2xl font-sans font-thin'>Finish setting up your WhatsApp account with your business name, logo and any of their business features you would like to add.</li>
                </ul>
                <p className='text-2xl font-sans font-thin'>That’s it! Your Tamar Business number should now be working with your WhatsApp Business app.</p>
                <p className='text-2xl font-sans font-thin'>For existing customers looking to add their Tamar Number to Whatsapp Business, skip to step 3 above. Customers with Virtual Switchboards will need to remove this to complete setup, you can re-activate once setup is complete.</p>
                <p className='text-2xl font-sans font-thin'>Important note: Whatsapp Business is a third-party app and we cannot offer support for any technical issues on their behalf.</p>

            </div> */}

            <div className='flex flex-col md:flex-row w-full gap-6 px-24 py-12'>
                <div className='w-[25%]'>
                    <div class="w-[88%] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='messageBox rounded-none h-32'>
                            <h1 className='text-3xl font-sans font-bold text-center py-9'>Outbound Calling</h1>
                        </div>
                        <div class="p-5">
                            <p className='font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Only £3.47 /month</p>
                            <ul>
                                <li className='font-sans border-b px-1 py-2 text-lg font-medium text-gray-600'>1 Month rolling contract</li>
                                <li className='font-sans border-b px-1 py-2 text-lg font-medium text-gray-600'>Free Connection</li>
                                <li className='font-sans border-b px-1 py-2 text-lg font-medium text-gray-600'>2.32p per min to landlines & mobiles</li>
                                <li className='font-sans border-b px-1 py-2 text-lg font-medium text-gray-600'>Make calls on your phone</li>
                                <li className='font-sans px-1 py-2 text-lg font-medium text-gray-600'>Place callers on hold with music</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='w-[75%] flex flex-col justify-center space-y-4'>
                    <h2 className='text-5xl font-sans font-thin text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Simple Pricing With No Minimum Term</h2>
                    <p className='text-2xl px-2 pt-6 font-sans font-thin pr-12'>There’s more good news. Tamar Connect is just £3.47pm+VAT per extension and only 2.32ppm to landlines and mobiles. There are no additional charges for features. As always, no hidden costs and a simple 1-month rolling contract.</p>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                    Outbound calling can be added at checkout, or via your <span className='text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'> control panel </span> if you're an existing customer.
                    </p>
                    <div className='flex gap-6'>
                        <button className=" py-2 px-4 text-xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">Already A Customer ?</button>
                        <button className="message py-3 px-8 text-xl font-sans font-semibold">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="borderline w-full h-[1px]"></div>

            <section className="flex justify-between px-24 py-12 w-full ">
                <div className="main-page__hero-content w-[55%] space-y-5">
                    <h2 className='text-4xl font-sans text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Setting Up Outbound Calling For Virtual Numbers</h2>
                    <p className='text-2xl px-2 pt-6 font-sans font-thin'>Simply log in to your Control Panel and add Tamar Connect to your account. You can set up as many usernames and extensions as you need, should you have multiple staff you’d like to get connected.</p>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                        Once you have set up your username and extensions on the Control Panel, download the app. Choose which of your Tamar numbers you would like to display and you’re ready to make outbound calls.
                    </p>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>There is a clear walk through guide on the Control Panel should you need any help.</p>
                    <div className='flex gap-6'>
                        <button className="message py-2 px-4 text-xl font-sans font-semibold">Choose Your Number</button>
                        <button className="message py-2 px-4 text-xl font-sans font-semibold">Our Premium Features</button>
                    </div>

                </div>
                <div className=' w-[45%] flex justify-end items-center'>

                    <img
                        src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tc-phone.png"
                        alt="Hero"
                    />
                </div>
            </section>

            <div className="borderline w-full mt-2 h-[1px]"></div>


            <div className='px-[10%] py-16 space-y-8'>
                <div className='text-center space-y-2'>
                    <h1 className='text-4xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Our Premium Features</h1>
                    <p className='text-2xl font-sans font-thin'>Some of our other premium features available to help your business</p>
                </div>
                <div className='flex items-center justify-between px-4 w-full'>
                    <div className='flex justify-center items-center flex-col w-[20%] hover:scale-105 transition-all duration-300 px-3 py-6 space-y-4 border border-pink-500 shadow-xl rounded-md'>
                        <MdOutlineAccountTree className='text-8xl mb-2 text-[#c6117d]' />
                        <p className='text-2xl'>Virtual Switchboard</p>
                        <p className='text-lg font-sans font-thin text-center'>Your virtual phone system with options</p>
                        <div>
                            <button className='border border-pink-500 px-3 py-1 text-lg rounded-full font-sans'>Find Out More</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[20%] hover:scale-105 transition-all duration-300 px-3 py-6 space-y-4 border border-pink-500 shadow-xl rounded-md'>
                        <BiTransfer className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>Call Whisper</p>
                        <p className='text-lg font-sans font-thin text-center'>Your virtual phone system with options</p>
                        <div>
                            <button className='border border-pink-500 px-3 py-1 text-lg rounded-full font-sans'>Find Out More</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[20%] hover:scale-105 transition-all duration-300 px-3 py-6 space-y-4 border border-pink-500 shadow-xl rounded-md'>
                        <TfiSignal className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>Outbound Calling</p>
                        <p className='text-lg font-sans font-thin text-center'>Make outbound calls using your virtual numbers</p>
                        <div>
                            <button className='border border-pink-500 px-3 py-1 text-lg rounded-full font-sans'>Find Out More</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[20%] hover:scale-105 transition-all duration-300 px-3 py-6 space-y-4 border border-pink-500 shadow-xl rounded-md'>
                        <GiHeadphones className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>Tamar Voice AI</p>
                        <p className='text-lg font-sans font-thin text-center'>Instantly generate telephone AI greetings</p>
                        <div>
                            <button className='border border-pink-500 px-3 py-1 text-lg rounded-full font-sans'>Find Out More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center py-12'>
                <img src={Image} alt="Review" className='w-[500px]' />
            </div>
            <div className='getTouch flex justify-center items-center gap-4 py-16 flex-col'>
                <div>
                    <h1 className='text-4xl'>Get In Touch...</h1>
                </div>
                <div className='flex items-center justify-center gap-32 w-full'>
                    <div className='flex justify-center items-center flex-col'>
                        <TiMessages className='text-8xl' />
                        <p className='text-2xl'>hello@tamar.co.uk</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <GiRotaryPhone className='text-8xl' />
                        <p className='text-2xl'>0800 772 0000</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <GiHeadphones className='text-8xl' />
                        <p className='text-2xl'>Contact Page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutBoundCall