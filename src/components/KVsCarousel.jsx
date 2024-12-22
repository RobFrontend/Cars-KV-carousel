import { useState } from "react";
import { cardvisuals, copyvisuals, kvisuals } from "../data/data";
import { useEffect } from "react";

function KVsCarousel() {
  const kvArr = kvisuals;
  const cardArr = cardvisuals;
  const copyArr = copyvisuals;
  const [isHover, setIsHover] = useState(false);
  const [indexKv, setIndexKv] = useState(0);
  const [currentKV, setCurrentKV] = useState(kvArr.at(indexKv));
  const [currentCopy, setCurrentCopy] = useState(copyArr.at(indexKv));
  const [move, setMove] = useState("");

  useEffect(
    function () {
      if (!isHover) {
        const interval = setInterval(() => {
          setMove("copyAnim");
          setIndexKv((prevIndex) => {
            const nextIndex = (prevIndex + 1) % kvArr.length;
            setCurrentKV(kvArr.at(nextIndex));
            setCurrentCopy(copyArr.at(nextIndex));
            return nextIndex;
          });
          const timeout = setTimeout(() => {
            setMove("");
          }, 1000);
          return () => clearTimeout(timeout);
        }, 5000);
        return () => clearInterval(interval);
      }
    },
    [indexKv, currentKV, isHover, kvArr, currentCopy, copyArr, setMove]
  );

  function handleClick(id) {
    if (id !== indexKv) {
      setMove("copyAnim");
      setTimeout(() => {
        setMove("");
      }, 500);

      // cardArr.push(cardArr.shift());
      setIndexKv(id);
      setCurrentKV(kvArr.at(id));
      setCurrentCopy(copyArr.at(id));
    }
  }
  return (
    <div className="relative bg-neutral-950 min-h-screen w-full px-12 grid items-center overflow-hidden text-neutral-50 max-xl:px-8 max-lg:px-0 ">
      <div>
        <div
          className={`h-[90vh] overflow-hidden transition-all duration-500 rounded-lg max-lg:h-screen max-lg:rounded-none`}
          // className={`h-[100vh] overflow-hidden transition-all duration-500`}
          style={{
            backgroundImage: `url(${currentKV})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className={`${move} grid px-12 py-[200px] max-2xl:py-[100px] max-[1800px]:w-[65%] max-xl:py-[100px] max-lg:w-[80%] drop-shadow-lg gap-2 w-[50%] duration-500 max-md:w-full max-sm:drop-shadow-xl max-md:px-8`}
          >
            <h2 className="text-6xl  font-bold uppercase max-xl:text-4xl max-sm:text-3xl">
              {currentCopy.h2}
              <br></br>
              {currentCopy.h2b}
            </h2>
            <h1
              className={`text-7xl font-bold ${currentCopy.color} uppercase max-xl:text-5xl max-sm:text-4xl`}
            >
              {currentCopy.h1}
            </h1>

            <p className="text-2xl max-xl:text-lg max-sm:text-base">
              {currentCopy.p}
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-[20%] translate-y-[50%] opacity-80  right-[6%] flex gap-4 h-[15vh] hover:h-[20vh] hover:right-[1%] hover:opacity-100  transition-all duration-300 max-lg:h-[20vh] max-lg:opacity-100 max-lg:right-[1%] max-lg:gap-3 max-md:max-h-[15vh] max-md:px-4 "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {cardArr.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer "
              onClick={() => handleClick(card.id)}
            >
              <img
                src={card.image}
                alt="card"
                className="h-full w-auto max-[360px]:h-auto opacity-80 rounded-md hover:opacity-100 transition-all duration-300 cardShadow  imgCard"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KVsCarousel;
