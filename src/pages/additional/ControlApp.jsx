import React from 'react';

const TamarApp = () => {
  return (
    <div className="w-[90%] ml-16 my-10 bg-white border border-gray-300 rounded-3xl">
      <div className="flex justify-center items-center pt-24 w-[95%]">
        <div className="pl-24">
          <img src="/bar.png" alt="Bar" className="h-[460px] w-[400px]" />
        </div>
        <div className="flex ml-36 text-sm">
          <ul className="space-y-[45px]">
            <img src="/img1.png" alt="Icon 1" className="h-[60px] w-[60px]" />
            <img src="/img2.png" alt="Icon 2" className="h-[60px] w-[60px]" />
            <img src="/img3.png" alt="Icon 3" className="h-[60px] w-[60px]" />
            <img src="/img4.png" alt="Icon 4" className="h-[60px] w-[60px]" />
          </ul>
          <ul className="space-y-[50px]">
            {[
              { title: "Manage Your Numbers From Anywhere", desc: "The Tamar Control Panel App allows you to manage your numbers using your smart phone from anywhere." },
              { title: "Push Notifications", desc: "Receive push notifications when you miss a call directly to your phone." },
              { title: "Listen To Voicemails", desc: "Listen to your voicemails directly from the app." },
              { title: "Check Your Usage", desc: "Access real time stats to monitor your usage and see who's called you." }
            ].map((item, index) => (
              <li key={index} className="ml-5 font-sans text-[#382e62]">
                <h5 className="text-[22px] font-light pb-3">{item.title}</h5>
                <p className="text-[22px] font-light">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-[90%] pt-24">
        <div className="pl-36 h-[300px]">
          <img className='h-[300px] w-[320px]' src="/img5.png" alt="Mobile" />
        </div>
        <div className="ml-36 text-[20px]">
          <ul className="space-y-2.5 font-sans text-gray-600">
            <h5 className="font-bold">The Brand New Tamar Control Panel App</h5>
            <p>The Tamar Telecommunications app allows virtual phone numbers to be managed on the go via a mobile phone app.</p>
            <p>The free app makes it easy to navigate through the settings, whether it's to change where calls are being diverted to, or to listen to voicemail messages, the Tamar Telecommunications app gives great flexibility and it's free to download.</p>
            <p>Push notifications are available through the app too, which means you can be notified instantly on your mobile phone of any missed calls and new voicemail messages.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TamarApp;