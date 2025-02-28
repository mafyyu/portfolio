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
      <div className="flex flex-col items-center space-y-10">
        <div className="flex justify-between items-center max-w-4xl w-full">
          <div className="text-xl font-NotoSans">趣味</div>
          <div className="text-left text-xl font-NotoSans">ゲーム(OW2,Valorant,etc...)、音楽鑑賞、アニメ</div>
        </div>
        <div className="flex justify-between items-center max-w-4xl w-full">
          <div className="text-xl font-NotoSans">興味があること</div>
          <div className="text-left text-xl font-NotoSans">ボルダリング、自宅サーバー(詳しい人いたら教えてください！)</div>
        </div>
        <div className="flex justify-between items-center max-w-4xl w-full">
          <div className="text-xl font-NotoSans">好きなアーティスト</div>
          <div className="text-left text-xl font-NotoSans">にしな、NizuU、Twice</div>
        </div>
        <div className="flex justify-between items-center max-w-4xl w-full">
        <div className="text-xl font-NotoSans"></div>
          <div className="h-full w-full flex justify-end space-x-10">
            <a href="https://x.com/midw_inter"><img src="/x.png" alt="x" className="w-8 h-8"/></a>
            <a href="https://github.com/mafyyu"><img src="/github.png" alt="github" className="w-8 h-8"/></a>
            <a href="mailto:morita0126m@gmail.com"><img src="/mail.png" alt="mail" className="w-8 h-8"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
