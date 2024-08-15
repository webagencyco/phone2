import React, { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="p-4">
            <div className='w-full flex justify-center items-center'>
                <div className="flex justify-around items-center w-[65%]">
                    <button
                        className={`px-4 py-2 text-xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471] ${activeTab === 1 ? 'border-b-[6px] border-yellow-400 ' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Feature-Rich Solutions:
                    </button>
                    <button
                        className={`px-4 py-2 text-xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471] ${activeTab === 2 ? 'border-b-[6px] border-yellow-400' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Scalability:
                    </button>
                    <button
                        className={`px-4 py-2 text-xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471] ${activeTab === 3 ? 'border-b-[6px] border-yellow-400' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Security:
                    </button>
                </div>
            </div>
            <div className="mt-4 p-4">
                {activeTab === 1 &&
                    <div className='w-full mt-4 flex justify-center items-center'>
                        <div className='w-[80%] flex justify-between  gap-4'>
                            <div className='w-[25%]'>
                                <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/voip-free.png" alt="Tabs" />
                            </div>
                            <div className='w-[75%]'>
                                <p className='text-2xl px-2 pt-6 font-sans font-thin leading-10'>Empower your business with a huge range of features to make you stand out, present a professional image & manage your workflow. Features like On Hold Music, Branded Voicemail, Call Transfer, On Demand Audio Saving and Holiday Settings are all available to completely tailor your setup to suit your business. Don’t worry if you’re new to VoIP systems, our team are rated 5-Stars on TrustPilot and are happy to assist. If that wasn’t enough, that’s all FREE. All our business phone numbers come with over 10 completely free features that other providers charge for!</p>
                                <a href="#choosenum"><button className='message py-2 px-4 font-sans text-xl font-semibold mt-12'>Choose Your Number</button></a>
                            </div>
                        </div>
                    </div>}
                {activeTab === 2 &&
                    <div className='w-full mt-4 flex justify-center items-center'>
                        <div className='w-[80%] flex justify-between  gap-4'>
                            <div className='w-[25%]'>
                                <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/landing_pages/voip-scalable.png" alt="Tabs" />
                            </div>
                            <div className='w-[75%]'>
                                <p className='text-2xl px-2 pt-6 font-sans font-thin leading-10'>Whether you're a small startup or a large enterprise, our VoIP phone systems can scale with your business. Add or remove users, lines, and features as needed, without the hassle of installing new hardware or infrastructure. Our Free Control Panel & App put you in the driving seat of your communications 24/7 at no extra cost. This ability alone will save you hard cash compared to other providers.</p>
                                <a href="#choosenum"><button className='message py-2 px-4 font-sans text-xl font-semibold mt-12'>Choose Your Number</button></a>
                            </div>
                        </div>
                    </div>}
                {activeTab === 3 &&
                    <div className='w-full mt-4 flex justify-center items-center'>
                        <div className='w-[80%] flex justify-between  gap-4'>
                            <div className='w-[25%]'>
                                <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/landing_pages/voip-security.png" alt="Tabs" />
                            </div>
                            <div className='w-[75%]'>
                                <p className='text-2xl px-2 pt-6 font-sans font-thin leading-10'>As an Ofcom regulated network provider you are assured our security & protection standards are completely up to date with industry requirements. Tamar Telecom is a Network Provider, not a reseller, so you are coming direct to source to guarantee your business the absolute best.</p>
                                <a href="#choosenum"><button className='message py-2 px-4 font-sans text-xl font-semibold mt-12'>Choose Your Number</button></a>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default TabComponent;
