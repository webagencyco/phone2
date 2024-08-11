import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { server } from "../App";
// import "./Stats.css";

const Stats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useContext(AuthContext);
//   console.log("Stats component user:", user);
//   console.log("Stats component isAuthenticated:", isAuthenticated);

  useEffect(() => {
    const fetchStats = async () => {
      if (!isAuthenticated) {
        setError("User is not authenticated");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${server}/api/numbers`, {
          headers: { Authorization: `Bearer ${user}` },
        });
        console.log ("response.data", response.data);
        const numbers = response.data;
        const totalNumbers = numbers.length;
        let totalUsageMinutes = 0;

        const usageData = await Promise.all(
          numbers.map(async (number) => {
            const usageResponse = await axios.get(
              `/api/numbers/${number._id}/usage`,
              {
                headers: { Authorization: `Bearer ${user.token}` },
              }
            );
            const usage = usageResponse.data;
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

        setStats({
          totalNumbers,
          totalUsageMinutes,
          usageData,
        });
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
      <h2>Account Statistics</h2>
      <p>Total Numbers Owned: {stats.totalNumbers}</p>
      <p>Total Usage Minutes: {stats.totalUsageMinutes}</p>

      <div className="usage-details">
        <h3>Usage Details</h3>
        {stats.usageData.map((data, index) => (
          <div key={index} className="number-usage">
            <h4>Number: {data.number}</h4>
            <ul>
              {data.usage.map((usage, idx) => (
                <li key={idx}>
                  Date: {new Date(usage.date).toLocaleDateString()}, Usage
                  Minutes: {usage.usageMinutes}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
