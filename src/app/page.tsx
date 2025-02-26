import Hamburger from "./components/hamburger";
import Tab from "./components/tab";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <Hamburger />
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="flex items-center gap-10">
          <img src="/myimage.jpg" alt="Image" className="rounded-full w-60 h-60" />
          <div className="flex flex-col items-center justify-center">
            <div className="font-Orbitron text-8xl text-center">Welcome</div>
            {/* <div className="font-extrabold text-5xl pt-0">もりりん</div> */}
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full">
        <Tab
            color="bg-[#FFDA9A]"
            hsize={230}
            wsize={350}
            text="About Me"
            link="/profile"
            position="absolute left-[15%] bottom-1/3"
        >
        </Tab>
        <Tab
            color="bg-[#FFE375]"
            hsize={170}
            wsize={250}
            text="Skill"
            link="/skills"
            position="absolute left-[30%] bottom-[90%]"
        >
        </Tab>
        <Tab
            color="bg-[#FA904F]"
            hsize={200}
            wsize={290}
            text="Works"
            link="/works"
            position="absolute left-[70%] bottom-[45%]"
        >
        </Tab>
      </div>
    </div>
    
  );
}
