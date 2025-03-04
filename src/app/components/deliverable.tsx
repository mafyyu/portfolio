export default function Deliverable(){
    return(
        <div className="my-10 w-full h-full flex justify-center items-center">
            <div className="w-[75%] h-[40%] border border-[#FA904F]">
                <div className="flex flex-row justify-start items-center gap-x-[15%] pb-4 w-full h-1/3 ml-[15%] my-10 rounded-lg">
                    <img src="/x.png" alt="" className="w-[15%] h-[15%] object-contain"/>
                    <div className="flex flex-col space-y-3">
                        <div className="font-NotoSans text-3xl flex items-center">My Map</div>
                        <a href="https://beginners-hack-new.vercel.app/" className="font-NotoSans text-sm">https://beginners-hack-new.vercel.app/</a>
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-[15%]">
                    <div className="w-[15%] flex flex-wrap ml-[15%] gap-4 mb-3">
                        <img src="/x.png" alt="" className="w-9 h-9" />
                        <img src="/x.png" alt="" className="w-9 h-9" />
                        <img src="/x.png" alt="" className="w-9 h-9" />
                        <img src="/x.png" alt="" className="w-9 h-9" />
                    </div>
                    <div className="flex flex-wrap font-NotoSans text-sm w-[45%]">これはKC3Hack2025で作成したものです。これはKC3Hack2025で作成したものです。これはKC3Hack2025で作成したものです。</div>
                </div>
            </div>
        </div>    
    )
}
