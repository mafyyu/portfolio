interface HeaderProps{
    color:string
    text:string
}


export default function Header({color,text}: HeaderProps){
    return(
        <div className={`${color} text-white w-full h-[100px] text-6xl flex justify-center items-center`}>
        {text}
        </div>
    );
}