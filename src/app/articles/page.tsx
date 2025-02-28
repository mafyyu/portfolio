import Hamburger from "../components/hamburger";
import Header from "../components/header";

export default function Articles() {
  return (
    <div>
      <div>
        <Header color="bg-[#FFA1A3]" text="Articles" />
        <Hamburger />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-NotoSans">🚀Under Construction🚀</div>
        <div className="text-4xl font-NotoSans">このページは作成中です</div>
      </div>
    </div>
  );
}
