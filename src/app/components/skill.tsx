import Rating from '@mui/material/Rating';
import { Typography, Box } from '@mui/material';
import { getDatabase } from '@/lib/notion/notion';

export default async function Skill() {
    const databaseid = process.env.DATABASE_ID;
    const fetchdata = await getDatabase(databaseid);
    
    return (
        <div>
            <div className="flex flex-wrap my-10 justify-center items-center gap-8">
                {fetchdata.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col justify-center items-center space-y-4 pb-4 w-[15%] h-[15%] hover:bg-[#FFF9EE] hover:shadow-md rounded-lg">
                        {item.properties['image'] && item.properties['image'].rich_text && item.properties['image'].rich_text[0]?.plain_text ? (
                            <img
                                src={item.properties['image'].rich_text[0].plain_text}
                                alt=""
                                className="w-1/2 h-1/2 object-contain mt-4"
                            />
                        ) : null}
                        <div className="text-align font-NotoSans text-3xl">
                            {item.properties['name']?.title[0]?.plain_text}
                        </div>
                        <Rating defaultValue={item.properties['rating']?.number} precision={0.5} readOnly />
                        {item.properties['interested'].checkbox ? (
                        <div className='rounded-xl w-1/2 h-5 flex justify-center items-center bg-[#FFDA9A]'>
                            <div className='font-NotoSans text-sm'>興味あり</div>
                        </div>
                        ):(
                        <div className='rounded-xl w-1/2 h-5 flex justify-center items-center  nvisible'>
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
