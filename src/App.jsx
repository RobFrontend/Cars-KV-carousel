import React, { Suspense, useState } from "react";

import Loading from "./components/Loading";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { copyvisuals } from "./data/data";

function App() {
  const count = useSelector((state) => state.counter.value);
  const kvArr = copyvisuals.at(count);
  const [isHover, setIsHover] = useState(false);

  const LazyComponent = React.lazy(() => import("./components/KVsCarousel"));
  return (
    <div
      className="mainBG"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url('${kvArr.bg}')`,
      }}
    >
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
      <div className=" text-neutral-50 px-8 pt-32 overflow-hidden max-sm:px-4 pb-24 ">
        <Fade triggerOnce delay={250}>
          <div className="grid gap-8 ">
            <div className="pb-4">
              <h3
                className={`text-3xl max-xl:text-2xl max-sm:text-xl`}
                style={{ color: `${kvArr.compcol}` }}
              >
                {kvArr.comp1h3}
              </h3>
              <h2 className="text-5xl uppercase max-xl:text-4xl max-sm:text-3xl">
                {kvArr.comp1h2}
              </h2>
            </div>
            <div
              className={`flex gap-8 justify-center mx-auto  items-center max-lg:gap-6 max-sm:gap-4 border-2 border-red-700/0  p-12 hover:border-[inherit] rounded-2xl max-w-[1720px] max-xl:p-8 max-lg:p-6 max-md:border-0 transition-all duration-300 hovechildren`}
              style={{
                border: `solid 2px ${
                  isHover ? kvArr.compcol : "rgba(0,0,0, 0)"
                }`,
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div>
                <img
                  src={kvArr.subkv1}
                  alt="f1 car"
                  className="w-full h-full imgCard transition-all duration-500 hover:rounded-lg max-md:rounded-none"
                />
              </div>

              <div>
                <img
                  src={kvArr.subkv2}
                  alt="f1 car"
                  className="w-full h-full imgCard transition-all duration-500 hover:rounded-lg max-md:rounded-none"
                />
              </div>
            </div>
            <div>
              <p className="px-8 text-justify font-light tracking-wide max-md:hidden">
                {kvArr.comp1pPC}
              </p>
              <p className="px-4 text-justify font-light tracking-wide md:hidden">
                {kvArr.comp1pM}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="flex">
        <div
          className={`  w-[50%]`}
          style={{
            borderTop: `1px solid ${kvArr.compcol}`,
            borderBottom: `1px solid ${kvArr.compcol}`,
          }}
        ></div>

        <div className="border-y-[1px] border-red-700/0 w-[50%]"></div>
      </div>
      <div className=" text-neutral-50 overflow-hidden pt-12 max-sm:px-4 pb-24  grid justify-center items-center object-cover ">
        <Fade triggerOnce delay={500}>
          <div className="px-8 pb-12">
            <h3
              className={`text-3xl max-xl:text-2xl max-sm:text-xl`}
              style={{ color: `${kvArr.compcol}` }}
            >
              {kvArr.comp2h3}
            </h3>
            <h2 className="text-5xl uppercase max-xl:text-4xl max-sm:text-3xl">
              {kvArr.comp2h2}
            </h2>
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-6 ">
            <div className="max-sm:flex max-sm:justify-center max-sm:items-center ">
              <img
                src={kvArr.subkv3}
                alt="f1 team"
                className="h-full w-full max-sm:max-w-[75%] max-[475px]:max-w-[100%]"
              />
            </div>
            <div className="text-center grid content-center justify-items-center px-24 sm:col-span-2 max-lg:px-12 max-md:px-8">
              <h4 className="text-2xl pb-4 max-xl:text-xl max-sm:text-lg">
                {kvArr.comp2h4}
              </h4>
              <p className="font-light tracking-wide max-md:text-justify max-md:text-sm">
                {kvArr.comp2p}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <footer className="text-neutral-200/40 pt-4 pb-8 text-center">
        &copy;{new Date().getFullYear()} robfrontend
      </footer>
    </div>
  );
}

export default App;
