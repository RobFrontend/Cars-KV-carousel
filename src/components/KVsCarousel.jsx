import { useRef, useState } from "react";
import { copyvisuals } from "../data/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../features/counterSlice";

function KVsCarousel() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const kvArr = copyvisuals;
  const [isHover, setIsHover] = useState(false);
  const [indexKv, setIndexKv] = useState(0);
  const [currentKV, setCurrentKV] = useState(kvArr.at(count).kv);
  const [currentCopy, setCurrentCopy] = useState(kvArr.at(count));
  const [move, setMove] = useState("");
  const [fullScreen, setFullScreen] = useState(false);

  const scrollRef = useRef(null);

  useEffect(function () {
    const handleScroll = () => {
      // Jeśli użytkownik jest na samej górze strony
      if (window.scrollY === 0) {
        setFullScreen(false);
      }
    };
    // Dodaj nasłuchiwacz scroll
    window.addEventListener("scroll", handleScroll);
    if (scrollRef.current) {
      const scrollDiv = scrollRef.current;

      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFullScreen(true);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
      });

      observer.observe(scrollDiv);
      return () => {
        observer.unobserve(scrollDiv);
      };
    }
  }, []);

  // useEffect(
  //   function () {
  //     if (!isHover) {
  //       const interval = setInterval(() => {
  //         setMove("copyAnim");
  //         setIndexKv((prevIndex) => {
  //           const nextIndex = (prevIndex + 1) % kvArr.length;
  //           dispatch(changeIndex(nextIndex));
  //           setCurrentKV(kvArr.at(nextIndex).kv);
  //           setCurrentCopy(kvArr.at(nextIndex));
  //           return nextIndex;
  //         });
  //         const timeout = setTimeout(() => {
  //           setMove("");
  //         }, 1000);
  //         return () => clearTimeout(timeout);
  //       }, 5000);
  //       return () => clearInterval(interval);
  //     }
  //   },
  //   [indexKv, currentKV, isHover, kvArr, currentCopy, setMove, count, dispatch]
  // );

  function handleClick(id) {
    if (id !== indexKv) {
      setMove("copyAnim");
      setTimeout(() => {
        setMove("");
      }, 500);
      dispatch(changeIndex(id));
      // cardArr.push(cardArr.shift());
      setIndexKv(id);
      setCurrentKV(kvArr.at(id).kv);
      setCurrentCopy(kvArr.at(id));
    }
  }
  return (
    <>
      <div
        className={` ${
          fullScreen ? "" : `px-12`
        }  relative  min-h-screen w-full grid items-center overflow-hidden text-neutral-50 max-xl:px-8 max-lg:px-0 transition-all duration-500`}
      >
        <div>
          <div
            className={`${
              fullScreen ? `h-[100vh]` : `h-[90vh] rounded-lg`
            } overflow-hidden transition-all duration-500 g max-lg:h-screen max-lg:rounded-none`}
            // className={`h-[100vh] overflow-hidden transition-all duration-500`}
            style={{
              backgroundImage: `url(${currentKV})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className={`${move} grid px-12 py-[150px] max-2xl:py-[100px] max-[1800px]:w-[65%] max-xl:py-[100px] max-lg:w-[80%] max-sm:py-12 drop-shadow-lg gap-2 w-[50%] duration-500 max-md:w-full max-sm:drop-shadow-xl max-md:px-8`}
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
              <div className="flex gap-12 text-2xl p-8 w-full content-center  justify-center max-xl:text-lg max-sm:gap-6 max-sm:text-base max-xl:p-4">
                <a
                  href="#history"
                  className="px-6 py-3 rounded-md font-bold active:shadow-2xl active:translate-y-[2px]  active:opacity-75 transition-all duration-300 bg-neutral-50/90 shadow-lg hover:-translate-y-1 active:scale-90 scale-[1.0000001] uppercase max-xl:px-4 max-xl:py-2"
                  style={{
                    color: `${currentCopy.compcol}`,
                  }}
                >
                  History
                </a>
                <a
                  href="#more"
                  className="px-6 py-3 rounded-md font-bold active:shadow-2xl active:translate-y-[2px] active:opacity-75 transition-all duration-300 shadow-lg hover:-translate-y-1 active:scale-90 scale-[1.0000001] uppercase max-xl:px-4 max-xl:py-2"
                  style={{
                    backgroundColor: `${currentCopy.compcol}`,
                  }}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-[20%] translate-y-[50%] opacity-80  right-[6%] flex gap-4 h-[15vh] hover:h-[20vh] hover:right-[1%] hover:opacity-100  transition-all duration-300 max-lg:h-[20vh] max-lg:opacity-100 max-lg:right-[1%] max-lg:gap-3 max-md:max-h-[15vh] max-md:px-4 "
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {kvArr.map((card) => (
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
      <div ref={scrollRef} className="absolute opacity-0 -z-50">
        <h1>SCROLL VH</h1>
      </div>
    </>
  );
}

export default KVsCarousel;
