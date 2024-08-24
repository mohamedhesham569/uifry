import doc from "../../../public/images/Group 1000001015.png"
import Image from "next/image"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
export default function WatchVedio(){
    return(
        <>
        <section className="">
        <div className="landing_content items-center justify-center flex flex-col p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1 ">We’re welcoming new patients and can’t wait to meet you.</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <div className="relative">
                <Image src={doc} alt="doctor-pic"/>
                <div className="layer">
                    <a href="http://" aria-describedby='link to watch video'>
                    <PlayCircleIcon/>
                    </a>
                </div>
            </div>
              
              <a href="http://" aria-describedby='link to book appointment'><button type="button" className='btn m-4'>Book an appointment</button></a>
          </div>
        </section>
        </>
    )
}