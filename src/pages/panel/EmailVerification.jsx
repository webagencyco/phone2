import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../App';

const EmailVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token');

    //   if (!token) {
    //     setVerificationStatus('Invalid verification link');
    //     return;
    //   }

      try {
        const response = await axios.get(`${server}/api/auth/verify-email/${token}`);
        setVerificationStatus(response.data.message);
        setTimeout(() => navigate('/login'), 3000);
      } catch (error) {
        setVerificationStatus("");
      }
    };

    verifyEmail();
  }, [location, navigate]);

  return (
    <div className="email-verification">
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default EmailVerification;