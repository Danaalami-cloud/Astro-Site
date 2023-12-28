import React, { useState, useEffect } from "react";
import fortuneTeller from "/fortuneTeller.png?url";
import "../styles/global.scss";

const DailyHoroscope = () => {
  const [horoscopeData, setHoroscopeData] = useState(null);

  useEffect(() => {
    const fetchHoroscopeData = async () => {
      const url =
        "https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=libra";
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
        setHoroscopeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHoroscopeData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section className="dailyHoroscope">
      <div className="horoscope-container">
        <img
          className="horoscopeImage absolute w-[30%] left-[37%] top-[124%]"
          src={fortuneTeller}
          alt="fortune teller"
        />
        <div className="horoscope-content absolute top-[71rem] text-white left-[27%] w-[47%] leading-[39px]">
          <h3>Your Horoscope for Today:</h3>
          {horoscopeData ? (
            <>
              <p>Description: {horoscopeData.horoscope}</p>
            </>
          ) : (
            <p>No horoscope data available</p>
          )}
        </div>
        <div class="orbit">
          <ul class="orbit-wrap">
            <li>
              <ul class="ring-0">
                <li>
                  <i class="orbit-icon fa fa-windows">Aries</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-safari">Taurus</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-edge">Gemini</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-linux">Cancer</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-apple">Leo</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-chrome">Virgo</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-android">Libra</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-firefox">Scorpio</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-firefox">Sagitarius</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-firefox">Capricorn</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-firefox">Aquarius</i>
                </li>
                <li>
                  <i class="orbit-icon fa fa-firefox">Pisces</i>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default DailyHoroscope;
