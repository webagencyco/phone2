import React from 'react'
import "./MainPage.scss";
import { TiMessages } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { GiHeadphones } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineAccountTree } from "react-icons/md";
import { TfiSignal } from "react-icons/tfi";


const WhatsAppBussiness = () => {
    return (
        <div className='main-page'>
            <div className="borderline w-full h-[1px]"></div>
            <section className="main-page__hero ">
                <div className="main-page__hero-content space-y-5">
                    <h2 className='text-7xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>WhatsApp Business</h2>
                    <h2 className='text-5xl font-sans font-thin'>Use Your Virtual Number With WhatsApp</h2>
                    <p className='text-2xl px-2 pt-6 font-sans font-thin'>Whatsapp business allows small businesses to send two-way messages to your clients providing they too have the Whatsapp app. You can display your business phone number with Whatsapp Business.</p>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                        With over 2 billion users worldwide, offering a messaging service such as Whatsapp could be a great way for small businesses to connect with customers using a format clients already know and trust. Allowing potential clients to send you a WhatsApp message could be a way to generate new business from those who prefer not to call.
                    </p>
                    <div className='flex gap-6'>
                        <button className="main-page__cta-button font-sans font-semibold">Choose Your Number</button>
                        <button className="main-page__cta-button font-sans font-semibold">Our Free Features</button>
                    </div>

                </div>
                <div className=' w-[35%] flex justify-center items-center'>

                    <img
                        src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/free-shout.png"
                        alt="Hero"
                    />
                </div>
            </section>

            <div className="borderline w-full h-[1px]"></div>

            <div className='px-24 py-12 space-y-6'>
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

            </div>
            <div className="borderline w-full h-[1px]"></div>

            <div className='px-[10%] py-16 space-y-8'>
                <div className='text-center space-y-2'>
                    <h1 className='text-4xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Free Features</h1>
                    <p className='text-2xl font-sans font-thin'>The below features are included with all telephone numbers</p>
                </div>
                <p className='text-2xl leading-[3rem]'>
                    Online Number Management &nbsp; &nbsp; &nbsp;
                    Welcome Announcement &nbsp; &nbsp; &nbsp;
                    Hunt Groups&nbsp; &nbsp; &nbsp;
                    Call Statistics &nbsp; &nbsp; &nbsp;
                    Timed Diverts &nbsp; &nbsp; &nbsp;
                    Voicemail &nbsp; &nbsp;
                    Missed Call Alerts &nbsp; &nbsp; &nbsp;
                    Blacklist &nbsp; &nbsp; &nbsp;
                    Mobile App &nbsp; &nbsp; &nbsp;
                    Anonymous Call Rejection &nbsp; &nbsp; &nbsp;
                    Holiday Settings &nbsp; &nbsp; &nbsp;
                    WhatsApp Business &nbsp; &nbsp; &nbsp;
                    Number Porting &nbsp; &nbsp; &nbsp;
                    Fax To Email &nbsp; &nbsp; &nbsp;
                    International Call Blocking &nbsp; &nbsp; &nbsp;
                </p>
                <section className="WhatsgetTouch rounded-xl ">
                <img
                        src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/hero-lady.webp"
                        alt="Hero"
                        className="w-72"
                    />
                    <div className="space-y-6 px-6">
                        <h1 className='text-4xl font-semibold font-sans'>Online Number Management</h1>
                        <p className='text-xl font-sans font-thin'>
                        The online number management control panel allows changes to be made to numbers instantly 24/7. The control panel allows you to modify numbers with ease, as well as for viewing call statistic reports, all at a click of a button.
                        </p>
                        <button className="messageBox">Find Out More</button>
                    </div>
                    
                </section>
            </div>

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

export default WhatsAppBussiness