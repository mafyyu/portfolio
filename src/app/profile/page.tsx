import Hamburger from "../components/hamburger";
import Header from "../components/header";

export default function Profile() {
  const comment = "どんどん絡んでください！\n 絡んでくれると心の中ではしゃぎます。";

  return (
    <div className="space-y-10">
      <div>
        <Header color="bg-[#FFDA9A]" text="About Me" />
        <Hamburger />
      </div>


      <div className="flex items-center justify-center gap-10">
        <div>
          <img src="/myimage.jpg" alt="Image" className="rounded-full w-60 h-60" />
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <div className="font-NotoSans text-5xl">もりりん</div>
          <div className="font-NotoSans text-xl whitespace-pre">{comment}</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 text-xl font-NotoSans">趣味</div>
        <div className="text-xl font-NotoSans">ゲーム(OW2,Valorant,etc...)、音楽鑑賞、アニメ</div>
      </div>
    </div>
  );
}
