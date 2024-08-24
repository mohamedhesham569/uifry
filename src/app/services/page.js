import InfoCard from "@/components/infoCard/InfoCard";
import tooth from "../../../public/images/tooth-solid.svg"
import teeth from "../../../public/images/teeth-solid.svg"
import teethopen from "../../../public/images/teeth-open-solid.svg";
import info1 from "../../../public/images/shield-heart-solid.svg"
import info2 from "../../../public/images/user-doctor-solid.svg"
import info3 from "../../../public/images/heart-pulse-solid.svg"
import WatchVedio from "@/components/watchvedio/WatchVedio";
import DoctorCard from "@/components/doctorCard/DoctorCard";
import BeforeFooter from "@/components/beforefooter/BeforeFooter";
export default function Services(){
    return(
        <>
        <section className="">
        <div className="landing_content p-4 sm:p-1 flex flex-col items-center justify-center w-full">
            <h1 className="my-6 mb-1">Services</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <section className="info flex-col sm:flex-row flex gap-4 p-8 mt-5 mb-0 mx-10">
          <InfoCard icon={tooth} header="Root Canal Treatment" content="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth." />
          <InfoCard icon={teeth} header="Cosmetic Dentist" content="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile." />
          <InfoCard icon={teethopen} header="Dental Implants" content="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge." />
        </section>
            <section className="info flex-col sm:flex-row flex gap-4 p-8 mx-10">
          <InfoCard icon={info1} header="Teeth Whitening" content="It's never been easier to brighten your smile at home. There are all kinds of products you can try." />
          <InfoCard icon={info2} header="Emergency Dentistry" content="In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain." />
          <InfoCard icon={info3} header="Prevention" content="Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental." />
        </section>
            </div>
            </section>


            <section className='flex flex-col sm:flex-row items-center sm:justify-around my-10 beforefooter py-10 m-auto' style={{borderRadius:"0"}}>
          <div className="landing_content items-center flex flex-col sm:block p-4 sm:p-1 sm:w-1/3 w-full">
            <h1 className="my-6 text-white">Leave your worries at the door and enjoy a healthier, more precise smile</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
              
              <a href="http://"><button type="button" className='btn m-4 '>Learn More</button></a>
          </div>
          <div className="sm:w-3/12 w-10/12 sm:h-fit px-10 flex justify-center form">
              <form action="" className="flex flex-col gap-4 my-4">
                <header className="my-4 font-bold text-xl">Request Appointment</header>
                <input type="text" placeholder="Name" required/>
                <input type="number" placeholder="Phone Number" required/>
                <input type="email" placeholder="Email" required/>
                <button type="submit" className="btn my-4" style={{padding:"10px 40px"}}>submit</button>
              </form>
          </div>
        </section>


        <section>
            <WatchVedio/>
        </section>

        <section>
            <DoctorCard/>
        </section>

        <section>
            <BeforeFooter/>
        </section>
        </>
    )
}