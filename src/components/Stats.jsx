import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { server } from "../App";
import "./MainPage.scss";
import { Link } from "react-router-dom";

const Stats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${server}/api/numbers`, {
          headers: { Authorization: `Bearer ${user}` },
        });
        console.log(response.data);
        const numbers = response.data;
        const totalNumbers = numbers.length;
        let totalUsageMinutes = 0;

        const usageData = await Promise.all(
          numbers.map(async (number) => {
            const usageResponse = await axios.get(
              `${server}/api/numbers/${number._id}/usage`,
              {
                headers: { Authorization: `Bearer ${user}` },
              }
            );
            const usage = Array.isArray(usageResponse.data)
              ? usageResponse.data
              : [];
            totalUsageMinutes += usage.reduce(
              (sum, u) => sum + u.usageMinutes,
              0
            );
            return {
              number: number.number,
              usage,
            };
          })
        );

        console.log(usageData);
        setStats({
          totalNumbers,
          totalUsageMinutes,
          usageData,
        });
        console.log(stats);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated, user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="stats-container">
      <div>
        {/* <img
          src="https://faithtelecom.co.uk/wp-content/uploads/2018/11/logo.svg"
          alt="Faith Logo"
          className="h-[80px] px-12 my-4"
        /> */}
        <div className="getTouch flex flex-col gap-1 px-12 py-10 items-start">
          <h1 className="text-lg">
            <Link to="/" className="text-lg">
              {" "}
              Tamar Home{" "}
            </Link>{" "}
            / Control panel home /
          </h1>
          <h2 className="text-5xl">Number usage</h2>
        </div>
        <div className="px-16 space-y-7 py-12">
          <p className="font-sans text-xl font-thin">
            The table below shows tariff and minute usage. Minutes are
            calculated 3 times per hour and tariffs are updated at midnight each
            day.
          </p>
          <div className="px-7 py-4 bg-blue-200 rounded-lg">
            <p className="font-sans text-xl text-pink-600">
              Please allow 3 working days for tariff changes to be applied
            </p>
          </div>
          {/* <div className='flex justify-between'>
                    <div className='w-[80%]'>
                        <label for="email" className="block ml-2 text-xl font-sans font-normal text-gray-900 dark:text-white">Search:</label>
                        <input type="text" id="email" className=" border border-gray-300 text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[25%] p-2 focus:shadow-blue outline-none" placeholder="Search...." required />
                    </div>
                    <div>
                        <button className='message py-1 px-4 font-sans text-[16px]'>Download</button>
                    </div>
                </div> */}
          <div className="-m-1.5 overflow-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="border-collapse table-auto w-[98%] divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-start text-xl font-bold font-sans uppercase">
                        Telephone Number
                      </th>
                      {/* <th class="px-6 py-3 text-start text-xl font-bold font-sans uppercase">
                        Tariff
                      </th> */}
                      {/* <th class="px-6 py-3 text-xl font-bold font-sans uppercase">
                        Included Minutes
                      </th> */}
                      <th class="px-6 py-3 text-xl font-bold font-sans uppercase">
                        Minutes Used
                      </th>
                      <th class="px-6 py-3 text-xl font-bold font-sans uppercase">
                        Usage Date
                      </th>
                      {/* <th class="px-6 py-3 text-xl font-bold font-sans uppercase">
                        Available Minutes
                      </th>
                      <th class="px-6 py-3 text-xl font-bold font-sans uppercase">
                        Overage
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stats.usageData.map((data, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {data.totalUsageMinutes}
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {data.number}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {data.usage.length > 0
                            ? data.usage[0].usageMinutes
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {data.usage.length > 0
                            ? new Date(data.usage[0].date).toLocaleString()
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-pink-500 w-full h-[1px] "></div>
          {/* <p className="text-xl font-sans">Showing 1 to 2 of 2 entries</p>

          <nav>
            <ul class="inline-flex h-16 font-sans">
              <li>
                <a
                  href="#"
                  class="flex items-center font-sans justify-center px-4 h-10 ms-0 text-xl text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-md hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center font-sans justify-center px-4 h-10 text-xl text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center font-sans justify-center px-4 h-10 text-xl text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="flex items-center font-sans justify-center px-4 h-10 text-xl text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center font-sans px-4 h-10 text-xl text-gray-500 bg-white border border-gray-300 rounded-e-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
