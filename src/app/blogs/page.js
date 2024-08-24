import Image from "next/image"
import aticle1 from "../../../public/images/Rectangle 652.png";
import aticle2 from "../../../public/images/Rectangle 652 (1).png";
import aticle3 from "../../../public/images/Rectangle 652 (2).png";
import aticle4 from "../../../public/images/Rectangle 652 (3).png";
import aticle5 from "../../../public/images/Rectangle 652 (4).png";
import aticle6 from "../../../public/images/Rectangle 652 (5).png";
import aticle7 from "../../../public/images/Rectangle 652 (6).png";
import aticle8 from "../../../public/images/Rectangle 652 (7).png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WatchVedio from "@/components/watchvedio/WatchVedio";
import BeforeFooter from "@/components/beforefooter/BeforeFooter";
import SearchIcon from '@mui/icons-material/Search';

export default function Blogs(){
    return(
        <>
        <section className="m-10">
        <div className="landing_content relative w-fit items-center sm:ml-30 ml-10 pl-5 flex flex-col  p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">News & Articles</h1>
            <p className='my-8 mt-4'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <div className="phone_input">
                <SearchIcon/>
              <input type="text" placeholder='Search'/>
              </div>
            </div>
            <div className="flex gap-5 justify-center flex-col sm:flex-row my-4">
                <div className="article_card flex flex-col gap-4 sm:w-1/5">
                    <Image src={aticle1} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                    <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
                <div className="article_card flex flex-col gap-4 sm:w-1/5">
                    <Image src={aticle2} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                   <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
                <div className="article_card flex flex-col  sm:flex gap-4 sm:w-1/5">
                    <Image src={aticle3} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-10">Lorem ipsum dolor sit amet consectetur.</p>
                   <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
                <div className="article_card flex flex-col  sm:flex gap-4 sm:w-1/5">
                    <Image src={aticle4} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-8">Lorem ipsum dolor sit amet consectetur.</p>
                   <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
            </div>
            <div className="flex gap-5 justify-center flex-col sm:flex-row my-4">
                <div className="article_card flex flex-col gap-4 sm:w-1/5">
                    <Image src={aticle5} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                    <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
                <div className="article_card flex flex-col gap-4 sm:w-1/5">
                    <Image src={aticle6} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                   <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
                <div className="article_card flex flex-col  sm:flex gap-4 sm:w-1/5">
                    <Image src={aticle7} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-10">Lorem ipsum dolor sit amet consectetur.</p>
                   <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
                <div className="article_card flex flex-col  sm:flex gap-4 sm:w-1/5">
                    <Image src={aticle8} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-8">Lorem ipsum dolor sit amet consectetur.</p>
                   <a href="http://" className="">
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </a>
                </div>
            </div>
        </section>

        <section>
            <WatchVedio/>
        </section>

        <section>
            <BeforeFooter/>
        </section>
        </>
    )
}