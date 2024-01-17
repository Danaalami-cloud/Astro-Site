import React, {useEffect, useRef} from "react";
import "../styles/global.scss";
import gsap from "gsap";
// import mojs from '@mojs/core';

const CrystalsSigns = () => {
  const crystalSpansRef = useRef(null);
  const bubblePool = [];
  const zodiacSigns = [
    {
      sign: "Aries",
      crystals: ["Red Jasper", "Citrine", "Blood Stone"],
    },
    {
      sign: "Taurus",
      crystals: ["Rose Quartz", "Sodalite", "Amazonite"],
    },
    {
      sign: "Gemini",
      crystals: ["Shungite", "Agate", "Aventurine"],
    },
    {
      sign: "Cancer",
      crystals: ["Moonstone", "Smoky Quartz", "Labradorite"],
    },
    {
      sign: "Leo",
      crystals: ["Tiger's Eye", "Obsidian", "Garnet"],
    },
    {
      sign: "Virgo",
      crystals: ["Amethyst", "Fluorite", "Carnelian"],
    },
    {
      sign: "Libra",
      crystals: ["Falcon Eye", "Aventurine", "Blood Stone"],
    },
    {
      sign: "Scorpio",
      crystals: ["Citrine", "Aquamarine", "Pink Tourmaline"],
    },
    {
      sign: "Sagitarius",
      crystals: ["Amethyst", "Lepidolite", "Shungite"],
    },
    {
      sign: "Capricorn",
      crystals: ["Hematite", "Onyx", "Garnet"],
    },
    {
      sign: "Aquarius",
      crystals: ["Quartz", "Chalcedony", "Tourmalinated Quartz"],
    },
    {
      sign: "Pisces",
      crystals: ["Rhodonite", "Fluorite", "Clear Quartz"],
    },
  ];

  const crystalSpansRefs = zodiacSigns.reduce((refs, signData) => {
    refs[signData.sign] = useRef(null);
    console.log("catching here1");
    console.log(refs);
    return refs;
  }, {});
  useEffect(() => {
    const addEventListeners = () => {
      zodiacSigns.forEach((signData) => {
        const targetRef = crystalSpansRefs[signData.sign];
        if ( targetRef.current) {
          targetRef.current.addEventListener("mouseover", () => handleHover(signData));
        }
      });
    };
    addEventListeners();
  },[crystalSpansRef, zodiacSigns]);

  // Creating bubbles before rendering
  for (let i=0; i < 3; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubblePool.push(bubble);
  }
  const handleHover = (signData) => {
    const targetRef = crystalSpansRefs[signData.sign];
    for (let i=0; i < 3; i++) {
      const bubble = bubblePool[i];
    }
    if (targetRef && targetRef.current) {
      console.log(targetRef.current, "here2");
      console.log(signData.sign);
      //creating timeline for the burst animation
      const timeline = gsap.timeline();

      // Initial scale and opacity of the target
      timeline.from(targetRef.current, {
        scale: 1.7,
        opacity: 0,
        duration: 1.3,
        ease: "power1.in",
        // backgroundColor: "purple",
        borderRadius: "50%",     
      });

      // Burst effect
      timeline.to(targetRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.3,
        ease: "power1.out",
      });
      timeline.then(()=> {
            timeline.restart();
          })

      // Creating 3 bubbles
    //   for (let i = 0; i < 3; i++) {
    //     const bubble = document.createElement("div");
    //     bubble.classList.add("bubble");
    //     document.body.appendChild(bubble);

    //   // positioning the bubble at the sign-crystal
    //   const circle = targetRef.current.getBoundingClientRect();
    //   gsap.set(bubble, {
    //     x: circle.left + circle.width / 2,
    //     y: circle.top + circle.height /2,
    //   });

    //   // Animating the bubble
    //   const bubbleTimeline = gsap.timeline();
    //   bubbleTimeline.to(bubble, {
    //     x: "+=" + gsap.utils.random(-100, 100),
    //     y: "+=" + gsap.utils.random(-100, 100),
    //     scale: 0,
    //     duration: 1.5,
    //     ease: "power1.out",
    //   });
    //   timeline.then(()=> {
    //     timeline.restart();
    //   })
    // // Adding bubble timeline to the main timeline
    // timeline.add(bubbleTimeline, 0.1 * i);
    // }
  }
};


  return (
    <section className="crystals-section bg-[black] absolute top-[137em] w-[79%] h-[131%] left-[10%]">
      <div className="crystals-container h-[96%]">
        <h3 className="crystals-title text-white text-[23px] absolute left-[15em] bottom-[22em]">Discover the right crystals for you</h3>
        <div className="signs-container">
          <ul className="signs-wrap flex flex-wrap relative w-[13%] left-[3%] gap-[7em] top-[2em]">
            {/* Group signs in rows of three */}
            {zodiacSigns
              .reduce((rows, sign, index) => {
                const row = Math.floor(index / 3);
                rows[row] = rows[row] || []; // Create a new row if needed
                rows[row].push(sign);
                return rows;
              }, [])
              .map((row, index) => (
                <li
                  key={index}
                  className="allSigns flex justify-around gap-[19em]"
                >
                  {row.map((signData, innerIndex) => (
                    <div key={innerIndex}>
                      <i
                        className="sign-crystal block text-center leading-[4.3em] rounded-[50%] w-[4.3em] h-[4.3em] cursor-pointer fa fa-firefox"   onMouseEnter={() => handleHover(signData)}

                        // onMouseEnter={() => handleHover(signData)}
                      >
                        {signData.sign}
                      <span ref={crystalSpansRefs[signData.sign]} className="crystalSpan absolute w-[30vw]">
                        {signData.crystals.map((crystal) => (
                          <span className={`crystal-span w-[13vw] crystals-${signData.sign}`}
                          key={crystal} 
                          >
                            {crystal}
                          </span>
                        ))}
                        {/* Remove text-[pink] for now */}
                        {/* Render crystals only for the current sign */}
                        {/* {signData.crystals.map((crystal, crystalIndex) => ( */}
                          
                         {/* ))} */}
                      </span>
                        </i>
                    </div>
                  ))}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default CrystalsSigns;
