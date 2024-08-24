import Image from "next/image";
import logo from "../../../public/images/Group 1.png";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer (){
    return(
        <>
         <section className='flex justify-between p-4 m-4 items-center border-b-2'>
         <div className="logo">
                    <Image src={logo} alt="logo" className="logo-inner"/>
            </div>
            <ul className=" capitalize hidden sm:flex gap-4 font-bold">
            <Link href={"/"}><li>home</li></Link>
                <Link href={"/services"}><li>services</li></Link>
                <Link href={"/blogs"}><li>blogs</li></Link>
                <Link href={"/about"}><li>about</li></Link>
                <Link href={"/contact"}><li>contact</li></Link>
            </ul>
        </section>
        <section className="sm:flex justify-between p-4 m-4">
            <span >All rights reserved &copy; Mohamed Hisham  | Terms and conditions apply!</span>
        <ul className=" capitalize my-4 sm:my-0  flex gap-4 font-bold">
                <Link href={""} aria-label='link to Facebook'><FacebookIcon/></Link>
                <Link href={""} aria-label='link to Instgram'><InstagramIcon/></Link>
                <Link href={""} aria-label='link to Linkedin'><LinkedInIcon/></Link>
                <Link href={""} aria-label='link to Youtube'><YouTubeIcon/></Link>
            </ul>

        </section>
        </>
    )
}