import Rating from '@mui/material/Rating';
import { getDatabase } from '@/lib/notion/notion';

export default async function Skill() {
    const databaseid = process.env.DATABASE_ID;
    const fetchdata = await getDatabase(databaseid);
    
    return (
        <div>
            <div className="flex flex-wrap my-10 justify-center items-center gap-12">
                {fetchdata.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col justify-center items-center space-y-4 w-[15%] h-[15%]">
                        {item.properties['image'] && item.properties['image'].rich_text && item.properties['image'].rich_text[0]?.plain_text ? (
                            <img
                                src={item.properties['image'].rich_text[0].plain_text}
                                alt=""
                                className="w-1/2 h-1/2 object-contain"
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
            <div className='flex flex-col'>
            <Rating defaultValue={0} precision={0.5} readOnly />
            <Rating defaultValue={1} precision={0.5} readOnly />
            <Rating defaultValue={2} precision={0.5} readOnly />
            <Rating defaultValue={3} precision={0.5} readOnly />
            <Rating defaultValue={4} precision={0.5} readOnly />
            <Rating defaultValue={5} precision={0.5} readOnly />
            </div>
        </div>
    );
}
