import Image from "next/image"
import aticle1 from "../../../public/images/Rectangle 652.png";
import aticle2 from "../../../public/images/Rectangle 652 (1).png";
import aticle3 from "../../../public/images/Rectangle 652 (2).png";
import aticle4 from "../../../public/images/Rectangle 652 (3).png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from "next/link";
export default function Articles (){
    return(
        <>
        <section className="m-10">
        <div className="landing_content relative w-fit ml-10 pl-5 flex flex-col  p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">News & Articles</h1>
            <p className='my-8 mt-4'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <button type="button" className="btn view_all">View All</button>
            </div>
            <div className="flex gap-5 justify-center flex-col sm:flex-row my-4">
                <div className="article_card flex flex-col gap-4 sm:w-1/5">
                    <Image src={aticle1} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                    <Link href="/blogs" aria-label='link to book appointment'>
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </Link>
                </div>
                <div className="article_card flex flex-col gap-4 sm:w-1/5">
                    <Image src={aticle2} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                   <Link href="/blogs" aria-label='link to blogs'>
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </Link>
                </div>
                <div className="article_card flex flex-col hidden sm:flex gap-4 w-1/5">
                    <Image src={aticle3} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-10">Lorem ipsum dolor sit amet consectetur.</p>
                   <Link href="/blogs" aria-label='link to blogs'>
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </Link>
                </div>
                <div className="article_card flex flex-col hidden sm:flex gap-4 w-1/5">
                    <Image src={aticle4} alt="article_pic"/>
                    <button type="button" className="btn2 mt-4">self care</button>
                    <h3 className="font-bold my-3">Care of your Teeth</h3>
                    <p className="text-sm mb-8">Lorem ipsum dolor sit amet consectetur.</p>
                   <Link href="/blogs" aria-label='link to blogs'>
                    <span>Read more</span>
                    <NavigateNextIcon/>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}