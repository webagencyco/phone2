import React from 'react';
import "./MainPage.scss";
import { TiMessages } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { GiHeadphones } from "react-icons/gi";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaMoneyCheck } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { PiPhoneCallBold } from "react-icons/pi";

const ISDN = () => {
    return (
        <div className='main-page'>
            <div className="borderline w-full h-[1px]"></div>
            <section className="main-page__hero ">
                <div className="main-page__hero-content space-y-5">
                    <h2 className='text-5xl font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>ISDN Switch Off</h2>
                    <p className='text-2xl px-2 pt-6 font-sans font-thin'>From 2023 there is a hard stop-sell on traditional phone lines, known nationally as the ISDN Switch Off. From 2025 the network will be ceased entirely. You will need to upgrade your phone system as soon as possible to avoid any disturbances to your business. Don’t worry, switching now is likely going to save you a lot of money!</p>
                    <h2 className='text-5xl font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>What is the ISDN switch off?</h2>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                        Put simply, many current phone, CCTV and even security systems run on a copper based PSTN and ISDN network. This network will be turned off in 2025. This means any systems you currently have using these lines will cease working. You will need to switch to handsets that can use IP (internet protocol).
                    </p>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>Don’t panic, most businesses will save money by switching to Virtual Numbers, so many have already made the switch to a future proof system.</p>
                </div>
                <div className=' w-[45%] flex justify-center items-center'>

                    <img
                        src="https://www.tamartelecommunications.co.uk/wp-content/uploads/2023/03/ISDN-Image-e1678895494487.png"
                        alt="Hero"
                    />
                </div>
            </section>

            <div className="borderline w-full h-[1px]"></div>

            <div className='flex flex-col md:flex-row w-full gap-6 px-24 py-12'>
                <div className='w-[25%]'>
                    <div class="w-[88%] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow">
                        <div className=''>
                            <h1 className='text-3xl font-sans font-bold text-center py-9 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Why <span className='text-3xl font-sans font-bold border-b-4 border-yellow-300'> Switch Now? </span>   </h1>
                        </div>
                        <div class="px-2 ">
                            <div className='flex w-full '>
                                <div className='w-[20%] flex justify-center items-center '>
                                    <TfiAnnouncement className='text-4xl text-[#c6117d]' />
                                </div>
                                <div class="flex flex-col justify-between p-4 w-[80%] leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#c6117d] dark:text-white">The switch off is already happening</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">As of September 2023 there is a stop sell on all IDSN lines. Don’t wait for the inevitable last-minute rush and risk delays.</p>
                                </div>

                            </div>
                            <div className='flex w-full '>
                                <div className='w-[20%] flex justify-center items-center '>
                                    <FaMoneyCheck className='text-4xl text-[#c6117d]' />
                                </div>
                                <div class="flex flex-col justify-between p-4 w-[80%] leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#c6117d] dark:text-white">Ultimate flexibility</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Virtual Numbers can grow with your business and provide solutions for even the most complex requirements.</p>
                                </div>
                            </div>
                            <div className='flex w-full '>
                                <div className='w-[20%] flex justify-center items-center '>
                                    <FaNetworkWired className='text-4xl text-[#c6117d]' />
                                </div>
                                <div class="flex flex-col justify-between p-4 w-[80%] leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#c6117d] dark:text-white">Keep your number</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">No need to change your business number. We’ll port your existing number to us to keep everything as simple as possible</p>
                                </div>
                            </div>
                            <div className='flex w-full '>
                                <div className='w-[20%] flex justify-center items-center '>
                                    <PiPhoneCallBold className='text-4xl text-[#c6117d]' />
                                </div>
                                <div class="flex flex-col justify-between p-4 w-[80%] leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#c6117d] dark:text-white">Save money!</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The good news is, our Virtual Landlines are incredible value and most customers switching to us will save money.</p>
                                </div>
                            </div>
                            <div className='text-center mb-6'>
                                <button className="message py-2 px-5 text-lg font-sans font-semibold">Make the Switch now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-[75%] flex flex-col mt-6 space-y-4'>
                    <div className="main-page__hero-content space-y-5">
                        <h2 className='text-3xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Why is ISDN being switched off?</h2>
                        <p className='text-2xl px-2 pb-3 font-sans font-thin'>BT understands the need to move with the times. The network is outdated and difficult to maintain and with traditional phone usage changing globally to mobile and internet communications, moving forward is the only sensible option. See what Ofcom have said.</p>
                        <h2 className='text-3xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>What’s it going to cost me?</h2>
                        <p className='text-2xl px-2 pb-3 font-sans font-thin'>
                            We have plans to suit any business size from as little as £5.50, no long contracts or hidden costs. You can view all our tariffs here. Every number comes with over 10 free features to tailor your setup, so you can make your business number work harder for your business.
                        </p>
                    </div>
                    <div className="main-page__hero-content space-y-5">
                        <h2 className='text-3xl font-sans  font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>What do I need to do for the ISDN switch off?</h2>
                        <p className='text-2xl px-2 pb-3 font-sans font-thin'>You’ll need to move to a provider that allows you to internet to make calls. We’re offering all businesses having to update their systems free porting. Simply fill in a quick form on our website and we’ll bring your existing numbers over to Tamar with no interruptions to your business.</p>
                        <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                            Simple, affordable, and future proof.
                        </p>
                        <p className='text-2xl px-2 pb-4 font-sans font-thin'>Fill out the form below to start moving your existing phone numbers to your new, future proof Tamar Phone System!</p>
                    </div>
                </div>
            </div>
            <div className="borderline w-full mt-3 h-[1px]"></div>

            <div className='borderline mx-12 my-8 rounded-xl shadow-xl '>
                <h1 className='text-center font-sans text-3xl text-yellow-200 py-6'>Tell us a little about yourself</h1>
                <section className="flex justify-between gap-10 px-24 py-12 w-full ">
                    <div className='w-[50%] flex flex-col gap-4'>
                        <div className='space-y-4'>
                            <label for="company_name" class="text-white text-xl font-sans font-semibold">Company name</label>
                            <input type="text" id="company_name" class=" border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label for="full_name" class="text-white text-xl font-sans font-semibold">Full name</label>
                            <input type="text" id="full_name" class=" border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label for="contact" class="text-white text-xl font-sans font-semibold">Contact number</label>
                            <input type="text" id="contact" class=" border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label for="email" class="text-white text-xl font-sans font-semibold">Email Address</label>
                            <input type="text" id="email" class=" border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" required />
                        </div>
                    </div>
                    <div className='w-[50%] space-y-4 text-center'>
                        <p className='text-white text-xl font-sans px-16 pt-4 text-center'>Enter the number(s) you would like to port to Tamar Telecom</p>
                        <div className='space-y-4'>
                            <textarea type="text" rows="6" id="comment" class=" border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none mt-8" placeholder="e.g. 01752 123456" required />
                        </div>
                        <div className='flex justify-center gap-2'>
                            <input type="checkbox" id="check" class=" w-5 " placeholder="e.g. 01752 123456" required />
                            <label for="check" className="text-white text-lg font-sans"> Accept Terms & conditions</label>
                        </div>
                        <button className="message py-3 px-8 text-xl text-white font-sans font-semibold">Get Started</button>

                    </div>
                </section>
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

export default ISDN