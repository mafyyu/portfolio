interface CircleProps {
    color: string;
    hsize: number;
    wsize: number;
    text: string;
    link: string;
    position:string
}

export default function Circle({color,hsize,wsize,text,link,position}:CircleProps){
    return(
        <a href={link}>
            <div className={`rounded-[90%] ${color} ${position}`}>
                <div className="flex justify-center items-center" style={{ height: `${hsize}px`, width: `${wsize}px` }}>
                    <div className="font-ZenakuGothicNew text-4xl font-black">{text}</div>
                </div>
            </div>
        </a>
    );
}