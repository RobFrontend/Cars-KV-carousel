import React, { Suspense } from "react";

import Loading from "./components/Loading";
import { Fade, Slide } from "react-awesome-reveal";

function App() {
  const LazyComponent = React.lazy(() => import("./components/KVsCarousel"));
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
      <div className="bg-neutral-950 text-neutral-50 px-8 pt-32 overflow-hidden max-sm:px-4 pb-24">
        <Fade triggerOnce delay={250}>
          <div className="grid gap-8">
            <div className="pb-4">
              <h3 className="text-3xl text-red-700">
                The Evolution of Speed and Technology
              </h3>
              <h2 className="text-5xl uppercase">
                From Beginnings to Modern Marvels
              </h2>
            </div>
            <div className="flex gap-8 justify-center items-center max-lg:gap-6 max-sm:gap-4">
              <div>
                <img
                  src="f1old.webp"
                  alt="f1 car"
                  className="w-full h-full imgCard transition-all duration-500"
                />
              </div>

              <div>
                <img
                  src="f1modern.webp"
                  alt="f1 car"
                  className="w-full h-full imgCard transition-all duration-500"
                />
              </div>
            </div>
            <div>
              <p className="px-8 text-justify font-light tracking-wide max-md:hidden">
                Formula 1 has come a long way since its inaugural championship
                race in 1950, held at the iconic Silverstone Circuit in England.
                The early years were defined by a raw and unfiltered passion for
                speed, where cars like the Alfa Romeo 158 dominated the grid.
                These machines were relatively simple, relying on mechanical
                prowess and driver courage rather than the cutting-edge
                technology we associate with the sport today. Drivers wore
                leather caps instead of helmets, and safety barriers were often
                non-existent, highlighting the sheer risk involved. As the
                decades unfolded, the sport became a fertile ground for
                innovation. The 1960s saw the introduction of mid-engine cars, a
                revolutionary shift that transformed the dynamics of racing. The
                1970s brought about the advent of ground effect aerodynamics,
                pioneered by teams like Lotus, allowing cars to generate
                unparalleled downforce and cornering speed. Alongside these
                advancements, safety standards improved, with the introduction
                of fire-resistant suits, crash barriers, and mandatory seat
                belts. The 1980s and 1990s marked an era of turbocharged engines
                and fierce rivalries, epitomized by battles between legends like
                Ayrton Senna and Alain Prost. Cars became faster and more
                sophisticated, with onboard telemetry and electronic aids
                becoming crucial to success. This period also saw the birth of
                the modern F1 aesthetic, with sleek designs and sponsorship
                liveries that made the sport a global phenomenon. Entering the
                21st century, Formula 1 embraced a new wave of technological
                advancements, including hybrid power units and advanced energy
                recovery systems. Cars are now designed with wind tunnel
                precision, featuring intricate aerodynamics and lightweight
                materials like carbon fiber. Simultaneously, the sport has
                prioritized safety, introducing the Halo device to protect
                drivers from serious head injuries and continuously refining
                crash test standards. Today, Formula 1 is a blend of human skill
                and technological brilliance, a showcase of what happens when
                engineering meets the relentless pursuit of excellence. Each era
                has built upon the last, pushing the boundaries of what is
                possible and cementing Formula 1&apos;s place as the pinnacle of
                motorsport innovation and performance.
              </p>
              <p className="px-4 text-justify font-light tracking-wide md:hidden">
                Formula 1 has evolved dramatically since its first race in 1950
                at Silverstone. The early years featured mechanically simple
                cars and minimal safety measures, where raw driver skill and
                courage were key. By the 1960s, mid-engine designs
                revolutionized the sport, followed by ground effect aerodynamics
                in the 1970s, enabling unprecedented speed and control. The
                1980s and 1990s brought turbocharged engines, onboard telemetry,
                and iconic rivalries like Ayrton Senna vs. Alain Prost, while
                safety measures such as crash barriers and fire-resistant suits
                improved driver protection. In the 21st century, F1 embraced
                hybrid power units, energy recovery systems, and advanced
                aerodynamics, making cars faster, safer, and more efficient.
                Today, Formula 1 stands as the ultimate combination of human
                skill and cutting-edge technology, with each era pushing the
                boundaries of innovation and performance.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="bg-neutral-950 text-neutral-50  pt-12 overflow-hidden max-sm:px-4 pb-24 grid justify-center items-center">
        <Fade triggerOnce delay={500}>
          <div className="px-8 pb-12">
            <h3 className="text-3xl text-red-700">Icons of the Track</h3>
            <h2 className="text-5xl uppercase">The Teams and Drivers</h2>
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-6 ">
            <div className="max-sm:flex max-sm:justify-center max-sm:items-center ">
              <img
                src="f1team.webp"
                alt="f1 team"
                className="h-full w-full max-sm:max-w-[75%] max-[475px]:max-w-[100%]"
              />
            </div>
            <div className="text-center grid content-center justify-items-center px-24 sm:col-span-2 max-lg:px-12 max-md:px-8">
              <h4 className="text-2xl pb-4 ">
                A Battle of Strategy, Skill, and Precision
              </h4>
              <p className="font-light tracking-wide max-md:text-justify max-md:text-sm">
                Formula 1 is more than just cars—it&apos;s a battle of brilliant
                minds and fearless drivers. Teams like Ferrari, Mercedes, and
                Red Bull bring cutting-edge innovation, while drivers like Lewis
                Hamilton and Ayrton Senna have become legends on the track. In
                Formula 1, every second counts. From pit stop strategies to
                daring overtakes, the drama unfolds at every turn. Witness
                rivalries, nail-biting finishes, and the relentless pursuit of
                the championship title.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
