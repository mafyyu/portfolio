interface TabProps {
    color: string;
    hsize: number;
    wsize: number;
    text: string;
    link: string;
  }
  
  export default function Tab({ color, hsize, wsize, text, link }: TabProps) {
    return (
      <a href={link}>
        <div className="w-full h-full max-w-3xl mx-auto">
          <div
            className={`${color} rounded-2xl shadow-lg`}
            style={{ height: `${hsize}px`, width: `${wsize}px` }}
          >
            {/* Window Controls */}
            <div className="bg-white px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
  
            {/* Content */}
            <div className="px-6 pb-8 font-ZenakuGothicNew text-4xl font-black flex justify-center items-center h-full">
              <p className="font-ZenakuGothicNew text-4xl font-black">{text}</p>
            </div>
          </div>
        </div>
      </a>
    );
  }
  