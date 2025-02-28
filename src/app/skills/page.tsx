import Hamburger from "../components/hamburger";
import Header from "../components/header";

export default function skills() {
  return (
    <div className="min-h-screen">
      <div>
        <Header color="bg-[#FFE375]" text="Skills"/>
        <Hamburger/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-NotoSans">🚀Under Construction🚀</div>
        <div className="text-4xl font-NotoSans">このページは作成中です</div>
      </div>
    </div>
  );
}
