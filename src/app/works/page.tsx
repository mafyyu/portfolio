import Hamburger from "../components/hamburger";
import Header from "../components/header";
import Timeline from "../components/timeline";

export default function works() {
  return (
    <div>
      <div>
        <Header color="bg-[#FA904F]" text="Works"/>
        <Hamburger/>
      </div>
      <Timeline></Timeline>
    </div> 
  );
}
