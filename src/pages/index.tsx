import { Plus_Jakarta_Sans } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
const fontFamily = Plus_Jakarta_Sans({ subsets: ["latin"] });
import AOS from "aos";
import "aos/dist/aos.css";
import avatarImage from "public/images/avatar-2.png";
import sleepCat from "public/images/sleep-cat-1.gif";
import danceCat from "public/images/dance-cat-2.gif";
import danceCat2 from "public/images/dance-cat-1.gif";
import backgroundPattern1 from "public/images/bg-pattern-2.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    AOS.init();

    // Update isDay state based on the current time
    const updateDayNightMode = () => {
      let hours = new Date().getHours();
      setIsDay(hours > 6 && hours < 18);
    };

    // Initial check
    updateDayNightMode();

    // Optional: Set up an interval to update the mode (if needed)
    const intervalId = setInterval(updateDayNightMode, 60000); // Check every minute

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isDay) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDay]);

  const CSSBackgroundDots = () => (
    <div className="background-dots">
      <style jsx>{`
        .background-dots {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: transparent; /* Membuat background transparan */
        }
        .background-dots::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle,
            ${isDay ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 0, 0.5)"} 1px,
            /* Warna dan transparansi titik */ transparent 2px
          );
          background-size: 10px 10px; /* Ukuran titik */
          opacity: 0.3; /* Transparansi titik */
        }
      `}</style>
    </div>
  );
  return (
    <main
      className={`min-h-screen bg-white dark:bg-black ${fontFamily.className}`}
    >
      <CSSBackgroundDots />

      <Head>
        <title>Syahril Anwar</title>
      </Head>
      <section className="min-h-screen flex bg-transparent">
        {/* <div className="d-flex w-full fixed bottom-0 hidden dark:block">
          <Image
            src={sleepCat}
            width={155}
            height={155}
            alt="Avatar"
            className="mx-auto mb-6"
          />
        </div> */}
        {/* <div
          className={`bg-repeat bg-fixed h-screen w-full absolute ${
            isDay ? "" : "bg-opacity-50"
          }`}
          style={{
            backgroundImage: `url(${backgroundPattern1.src})`,
          }}
        /> */}
        {/* <div
          className={`bg-no-repeat bg-fixed h-screen w-full absolute ${
            isDay ? "" : "bg-opacity-50"
          }`}
          style={{
            backgroundImage: `url(${backgroundPattern1.src})`,
          }}
        />
        <div
          className="hidden md:block bg-no-repeat bg-right bg-fixed h-screen w-full absolute"
          style={{
            backgroundImage: `url(${backgroundPattern1.src})`,
          }}
        /> */}

        <div className="m-auto z-20 min-w-full">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <div className="hidden dark:flex invert grayscale py-6 mb-12 max-w-sm mx-auto rounded-lg">
              <Image
                src={danceCat}
                width={250}
                height={250}
                alt="Avatar"
                className="mx-auto"
              />
            </div>
            <div className="flex dark:hidden max-w-md mx-auto rounded-lg">
              <Image
                src={danceCat2}
                width={135}
                height={135}
                alt="Avatar"
                className="mx-auto"
              />
            </div>
            <h1
              className={`mb-4 text-4xl font-semibold tracking-wide leading-none text-gray-900 dark:text-white md:text-4xl lg:text-5xl`}
            >
              <div className="uppercase">Syahril Anwar {isDay}</div>
            </h1>
            <p
              className={`mb-8 text-lg font-normal lg:my-16 text-gray-600 dark:text-white lg:text-3xl sm:px-16 lg:px-48`}
            >
              <TypeAnimation
                sequence={[
                  100, // Waits 0.5s
                  "Start Coding, Make It Pop!", // Types 'One'
                  1000, // Waits 1s
                ]}
                speed={55}
                repeat={Infinity}
                cursor={true}
              />
            </p>
            <div className="grid grid-cols-4 items-center gap-x-0 mt-6 max-w-lg mx-auto">
              <div className="col-span-1">
                <div>
                  <a
                    target="_blank"
                    href="https://twitter.com/syahrilanwardev"
                    className="group mx-auto flex w-14 h-14 transition duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      fill="currentColor"
                      className="w-11 h-11 m-auto text-sky-500 group-hover:text-sky-600"
                      viewBox="0 0 30 30"
                    >
                      <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <a
                    target="_blank"
                    href="mailto:syahrilanwar.dev@gmail.com"
                    className="group mx-auto flex w-14 h-14 transition duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      fill="currentColor"
                      className="w-11 h-11 m-auto text-red-500 group-hover:text-red-600"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/syahril-anwar-9872131b8/"
                    className="group mx-auto flex w-14 h-14 transition duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="w-11 h-11 m-auto text-sky-700 group-hover:text-sky-800"
                      fill="currentColor"
                      viewBox="0 0 30 30"
                    >
                      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <a
                    target="_blank"
                    href="https://github.com/syahrilanwar"
                    className="group mx-auto flex w-14 h-14 transition duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="w-11 h-11 m-auto text-purple-700 group-hover:text-purple-800"
                      viewBox="0 0 30 30"
                      fill="currentColor"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
