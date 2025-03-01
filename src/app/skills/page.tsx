import Hamburger from "../components/hamburger";
import Header from "../components/header";
import Skill from "../components/skill";

export default function skills() {
  return (
    <div className="min-h-screen">
      <div>
        <Header color="bg-[#FFE375]" text="Skills"/>
        <Hamburger/>
      </div>
      <Skill></Skill>
    </div>
  );
}
