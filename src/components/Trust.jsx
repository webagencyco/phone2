import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Trust = () => {
  const navigate = useNavigate();

  const location = useLocation();
  if (location.pathname.includes("admin")){
    return null
  }
  return (
    <div className='main-page'>

    <header className="main-page__header">
        <img onClick={() => navigate("/")} 
          src="https://faithtelecom.co.uk/wp-content/uploads/2018/11/logo.svg"
          alt="Faith Logo"
          className="main-page__logo cursor-pointer"
        />
        <div className="flex justify-around items-center">
          <img
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png"
            alt="Tamar Logo"

            className="h-7 w-[42%]"
          />

          <a href="#" className="flex justify-center items-center">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/basketico.png"
              alt="Tamar Logo"
            />
            <span className="mt-3">View Basket</span>
          </a>
        </div>
      </header>
    </div>

  )
}

export default Trust