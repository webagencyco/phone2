import React from 'react';

const Blacklist = () => {
  return (
    <div className="w-[90%] bg-white border border-gray-300 rounded-lg font-sans my-5 ml-10">
      <ul className="p-5 space-y-5">
        <li><h4 className="text-[#382e62] font-bold">Blacklist</h4></li>
        <li><p>You can specify a list of up to 10 callers whom you wish to blacklist free of charge. If you need to blacklist more than 10 numbers, please contact customer services.</p></li>
        <li><p>You can specify a full number or a partial number, for example "020 7946 0933" to block that specific number, or "01632" if you want to block all callers with this area code.</p></li>
        <li><p>You will need to select Use "blacklist" in the number configuration screen to activate this feature on a per-number basis.</p></li>
        <li><p>Calls from blacklisted numbers will hear a recorded message saying "Calls are not currently being accepted from this number".</p></li>
        <li><p>Your blacklist is currently empty.</p></li>
      </ul>
      <div className="mt-7">
        <div className="flex justify-between px-5">
          <h4 className="font-bold">Blocked number</h4>
          <h4 className="font-bold">Description</h4>
        </div>
        <ul className="space-y-5 p-5">
          <li className="border-b border-gray-300"></li>
          <li className="flex items-center">
            <input type="text" className="w-1/2 h-10 rounded-full px-3 bg-gray-200" value="020 7946 0933" disabled />
            <p className="ml-4 text-sm">Example number</p>
          </li>
          <li className="border-b border-gray-300"></li>
          <li className="flex items-center">
            <input type="text" className="w-1/2 h-10 rounded-full px-3 bg-gray-200" value="01632" disabled />
            <p className="ml-4 text-sm">Example area number</p>
          </li>
          <li className="border-b border-gray-300"></li>
          <li className="flex">
            <input type="text" className="w-1/2 h-10 rounded-full px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Add blacklist entry" />
            <input type="text" className="w-1/2 h-10 rounded-full px-3 ml-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Add description" />
          </li>
          <li className="border-b border-gray-300"></li>
          <li className="flex">
            <input type="text" className="w-1/2 h-10 rounded-full px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Add blacklist entry" />
            <input type="text" className="w-1/2 h-10 rounded-full px-3 ml-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Add description" />
          </li>
          <li className="border-b border-gray-300"></li>
        </ul>
      </div>
      <div className="p-5">
        <p>If you wish to block calls from international numbers, simply tick the box below and click Save changes.</p>
        <div className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <p>Block international callers</p>
        </div>
        <button className="mt-4 w-48 h-9 bg-[#251469] text-white rounded-full text-sm">Save Changes</button>
      </div>
    </div>
  );
};

export default Blacklist;