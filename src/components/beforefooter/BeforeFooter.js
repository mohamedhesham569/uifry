import pic from "../../../public/images/Rectangle 655.png"
import Image from "next/image"
import Link from "next/link"
export default function BeforeFooter (){
    return(
        <>
         <section className='sm:flex sm:justify-around my-10 beforefooter sm:w-2/3 m-auto'>
          <div className="landing_content items-center flex flex-col sm:block p-4 sm:p-1 sm:w-1/2 w-full">
            <h1 className="my-6 text-white">Dental Website that's gonna shake the game rules up.</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
              
              <Link href="/contact" aria-label='link to Learn more'><button type="button" className='btn m-4 '>Learn More</button></Link>
          </div>
          <div className="sm:w-1/3 sm:h-fit p-4 flex justify-center">
              <Image src={pic} alt='doctor-pic' />
          </div>
        </section>
        </>
    )
}