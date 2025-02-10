interface HeaderProps{
    color:string
    text:string
}


export default function Header({color,text}: HeaderProps){
    return(
        <div className={`${color} text-black w-full h-[100px] text-4xl flex justify-center items-center font-Orbitron`}>
        {text}
        </div>
    );
}