export default function Deliverable({ data }: { data: any[] }) {
    return (
      <div className="my-10 w-full h-full flex flex-col justify-center items-center space-y-[2%]">
        {data.map((item, index) => (
          <a href={item.data.url} key={index} className="w-full flex justify-center items-center">
            <div className="w-[75%] h-[auto] border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102">
              <div className="flex flex-row justify-start items-center gap-x-[10%] p-4 bg-white">
                <img
                  src={`/workicon/${item.data.image}`}
                  alt={item.data.title}
                  className="w-[150px] h-[150px] object-contain border-2 border-gray-100 shadow-sm"
                />
                <div className="flex flex-col space-y-2">
                  <div className="font-NotoSans text-3xl text-gray-800">{item.data.title}</div>
                  <div className="font-NotoSans text-sm text-gray-600">{item.content}</div>
                  <div className="flex space-x-2">
                    {item.data.tags.map((tag:string[],index:number)=>(
                    <div key={index} className="flex space-x-2">
                        <div className="font-NotoSans text-sm text-gray-600">{`#${tag}`}</div>
                    </div>
                    ))}
                </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
  