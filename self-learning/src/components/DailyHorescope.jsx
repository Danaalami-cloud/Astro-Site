import React, { useState, useEffect } from "react";
import fortuneTeller from "/fortuneTeller.png?url";
import "../styles/global.scss";

const DailyHoroscope = () => {
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [selectedSign, setSelectedSign] = useState(null);
    
  const fetchHoroscopeData = async (sunsign) => {
    const formattedSign = sunsign.trim().toLowerCase();
    console.log("Fetching data for:", sunsign);
    console.log(sunsign);
                                // DAILY HOROSCOPE API
//     const url = `https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=${formattedSign}&timePeriod=today`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9768e1c98cmsh0656b49fad03c05p1178e7jsn475a3f9b5bb1',
// 		'X-RapidAPI-Host': 'daily-horoscope-api.p.rapidapi.com'
// 	}
// };

  const url =
        `https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=${formattedSign}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9768e1c98cmsh0656b49fad03c05p1178e7jsn475a3f9b5bb1",
          "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
        },
      };

try {
  const response = await fetch(url, options);
  const data = await response.json();

  // Check if the response contains valid data
  if (data && data.horoscope) {
    console.log("API Data:", data);
    setHoroscopeData(data);
  } else {
    console.error("API Error: Invalid response format");
  }
} catch (error) {
  console.error("API Error:", error);
}
};

      

      // try {
      //   const response = await fetch(url, options);
      //   const data = await response.json();
      //   // Check if the response contains valid data
      //   if (data && data.horoscope) {
      //     console.log("API Data:", data);
      //     setHoroscopeData(data);
      //   } else {
      //     console.error("API Error: Invalid response format");
      //   }
      // } catch (error) {
      //   console.error("API Error:", error);
      // }
    // };
      const handleSignClick = (sunsign) => {
        console.log("clicked sign:", sunsign);

        setSelectedSign(sunsign);
        fetchHoroscopeData(sunsign);
      };

    useEffect(() => {
      console.log("Selected Sign in useEffect", selectedSign);
      if(selectedSign) {
      fetchHoroscopeData(selectedSign);
      }
    },[selectedSign]);
  
 
  return (
    <section className="dailyHoroscope absolute top-[11em]">
      <div className="horoscope-container">
        <img
          className="horoscopeImage absolute w-[30%] left-[37%] top-[124%]"
          src={fortuneTeller}
          alt="fortune teller"
        />
        <div className="horoscope-content absolute top-[84rem] text-white left-[36%] w-[41%] leading-[25px]">
          <h3>Your Horoscope for Today:</h3>
          {horoscopeData ? (
            <>
              <p>Description: {horoscopeData.horoscope}</p>
            </>
          ) : (
            <p>No horoscope data available</p>
          )}
        </div>
        <div className="orbit">
          <ul className="orbit-wrap">
            <li>
              <ul className="ring-0">
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "aries"? "selected" : ""}`} onClick={() => handleSignClick("Aries")} >Aries</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "taurus" ? "selected" : ""}`} onClick={() => handleSignClick("Taurus")}>Taurus</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "gemini" ? "selected" : ""}`} onClick={() => handleSignClick("Gemini")}>Gemini</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "cancer" ? "selected" : ""}`} onClick={() => handleSignClick("Cancer")}>Cancer</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "leo" ? "selected" : ""}`} onClick={() => handleSignClick("Leo")}>Leo</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "virgo" ? "selected" : ""}`} onClick={() => handleSignClick("Virgo")}>Virgo</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "libra" ? "selected" : ""}`} onClick={() => handleSignClick("Libra")}>Libra</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "scorpio" ? "selected" : ""}`} onClick={() => handleSignClick("Scorpio")}>Scorpio</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "sagitarius" ? "selected" : ""}`} onClick={() => handleSignClick("Sagitarius")}>Sagitarius</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "capricorn" ? "selected" : ""}`} onClick={() => handleSignClick("Capricorn")}>Capricorn</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "aquarius" ? "selected" : ""}`} onClick={() => handleSignClick("Aquarius")}>Aquarius</i>
                </li>
                <li>
                  <i className={`orbit-icon fa fa-firefox ${selectedSign === "pisces" ? "selected" : ""}`}onClick={() => handleSignClick("Pisces")}>Pisces</i>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {selectedSign && (
          <div className="selected-sign bg-violet-400	 w-[8vw] h-[15vh] absolute left-[48%] bottom-[-56%] rounded-[55%]">
            <h3 className="relative text-white top-[23%] left-[5%] bg-none text-[24px] padding-[7px]">{selectedSign}</h3>
          </div>
        )}
      </div>
    </section>
  );
};
export default DailyHoroscope;
