interface HeaderProps{
    color:string
}


export default function Header({color}: HeaderProps){
    return(
        <div className={`${color} text-white w-full h-[100px] text-6xl flex justify-center items-center`}>
        Home
        </div>
    );
}