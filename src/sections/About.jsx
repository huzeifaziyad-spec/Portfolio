import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/copyEmailButton";
import {Frameworks} from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading-2">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex item-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg-scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi I'm Ziyad</p>
            <p className="subtext">
              Over the last 1 year, I developed my frontend and backend dev
              skills to deliver dynamic and responsive software and web
              applications.
            </p>
            <div
              className="absolute inset-x-0 pointer-events-none
                    -bottom-4 h-1/2 sm:h-1.3 bg-gradient-to-t from-indigo"
            />
          </div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", left: "10%", top: "40%" }}
              text={"GRASP"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", left: "45%", top: "60%" }}
              text={"SOLID"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", left: "70%", bottom: "30%" }}
              text={"DESIGN PATTERNS"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", left: "40%", top: "5%" }}
              text={"DESIGN PRINCIPLES"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-33deg", left: "2%", top: "15%" }}
              text={"SRP"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", left: "70%", top: "70%" }}
              image={"assets/logos/nextjs.png"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", left: "70%", top: "25%" }}
              image={"assets/logos/javascript.svg"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", left: "10%", top: "5%" }}
              image={"assets/logos/react.svg"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", left: "10%", top: "60%" }}
              image={"assets/logos/typeScript.png"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", left: "10%", top: "60%" }}
              image={"assets/logos/typeScript.png"}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headertext">Time Zone</p>
            <p>I'm based in Addis Ababa, and open to remote works worldwide.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Skills & Frameworks</p>
            <p className="subtext">I specialize in building responsive and user-friendly web applications using modern technologies.</p>
          </div>
          <div
            className="absolute inset-y-0 md:inset-y9 w-full 
          h-full start-[50%] md:scale-125"
          >
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
