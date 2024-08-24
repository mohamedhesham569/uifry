import pic from "../../../public/images/Rectangle 682.png"
import Image from "next/image"
import doc1 from "../../../public/images/Group 1000001016.png"
import doc2 from "../../../public/images/Mask group (1).png"
import doc3 from "../../../public/images/Mask group (2).png"
import doc4 from "../../../public/images/doc6 (1).png";
import pic2 from "../../../public/images/Rectangle 662.png"
import tooth from "../../../public/images/tooth-solid.svg"
import teeth from "../../../public/images/teeth-solid.svg"
import teethopen from "../../../public/images/teeth-open-solid.svg";
import InfoCard from "@/components/infoCard/InfoCard"
import WatchVedio from "@/components/watchvedio/WatchVedio"
export default function About (){
    return(
        <>
        <div className="landing_content relative w-fit items-center sm:ml-30 ml-10 pl-5 flex flex-col  p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">About Us</h1>
            
            </div>
         <section className='sm:flex sm:justify-around my-10 beforefooter m-auto'>
          <div className="landing_content items-center flex flex-col sm:block p-4 sm:p-1 sm:w-1/2 w-full">
            <h1 className="my-6 text-white">Our Mission</h1>
            <p className='my-8'>At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being.</p>
            <h3 className="my-6 text-white">More than anything else we love creating happy, healthy smiles.</h3>
            <p className='my-8'>We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.</p>
          </div>
          <div className="sm:w-1/3 sm:h-fit p-4 flex justify-center">
              <Image src={pic} alt='doctor-pic' />
          </div>
        </section>

        <section>
        <div className="landing_content items-center flex flex-col justify-center p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">Meet our specialists</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
          </div>

          <div className="flex  flex-col gap-4 items-center">
            <div className="flex info flex-col sm:flex-row p-4 rounded-md sm:w-2/3 items-center gap-4">
            <div className="w-full">
                <Image src={doc1} alt="doctor-pic"/>
            </div> 
            <div className=" flex flex-col gap-4">
                <div className=" flex gap-2 items-center">
                    <h2 className="text-2xl font-bold">Jim Carry</h2>
                    <span className="text-sm text-gray-500">(Orthodontist.)</span>
                </div>
                <p className="text-sm">Dr. Jim Carry provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.</p>
                <button type="button" className="btn w-fit">Book an appointment</button>
            </div> 
            </div>

            <div className="flex info flex-col sm:flex-row p-4 rounded-md sm:w-2/3 items-center gap-4">
            <div className="w-full">
                <Image src={doc2} alt="doctor-pic"/>
            </div> 
            <div className=" flex flex-col gap-4">
                <div className=" flex gap-2 items-center">
                    <h2 className="text-2xl font-bold">Jenny Wilson</h2>
                    <span className="text-sm text-gray-500">(Periodontist.)</span>
                </div>
                <p className="text-sm">Dr. Jenny Wilson provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.</p>
                <button type="button" className="btn w-fit">Book an appointment</button>
            </div> 
            </div>

            <div className="flex info flex-col sm:flex-row p-4 rounded-md sm:w-2/3 items-center gap-4">
            <div className="w-full">
                <Image src={doc3} alt="doctor-pic"/>
            </div> 
            <div className=" flex flex-col gap-4">
                <div className=" flex gap-2 items-center">
                    <h2 className="text-2xl font-bold">Jacob Jones</h2>
                    <span className="text-sm text-gray-500">(Pediatric Dentist.)</span>
                </div>
                <p className="text-sm">Dr. Jacob Jones provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.</p>
                <button type="button" className="btn w-fit">Book an appointment</button>
            </div> 
            </div>


            <div className="flex info flex-col sm:flex-row p-4 rounded-md sm:w-2/3 items-center gap-4">
            <div className="w-full">
                <Image src={doc4} alt="doctor-pic"/>
            </div> 
            <div className=" flex flex-col gap-4">
                <div className=" flex gap-2 items-center">
                    <h2 className="text-2xl font-bold">Wade Warren</h2>
                    <span className="text-sm text-gray-500">(Endodontist.)</span>
                </div>
                <p className="text-sm">Dr. Wade Warren provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.</p>
                <button type="button" className="btn w-fit">Book an appointment</button>
            </div> 
            </div>


          </div> 
        </section>

        <div className="landing_content items-center flex flex-col justify-center p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">Latest Technology</h1>
            <p className='my-8'>Thanks to major technological advancements, dentistry allows treating the most complex cases with less time and more efficiency.</p>
          </div>
        <section className='sm:flex sm:justify-around sm:my-10 beforefooter py-10'>
        <div className="sm:w-1/3 p-4">
              <Image src={pic2} alt='doctor-pic' />
          </div>
          <div className="landing_content items-center flex flex-col sm:block p-4 sm:p-1 sm:w-1/2 w-full">
            <h2 className="sm:my-6 text-xl font-bold text-white">The Future of Dentistry is Digital:</h2>
            <p className='my-8'>Dentists today already utilize software to capture insights in clinical decision-making. These practices will continue to develop to integrate AI algorithms that enable clinicians to find the best modalities for their patients.</p>
            <p className='my-8'>In the 21st century, digital radiographs and 3D imaging have become the standard of dental care. Using an intraoral scanner with digitized data for 3D dental impressions (vs. polyvinyl siloxane and rubber base impressions) for a dental crown is now commonplace.</p>
            <p className='my-8'>Artificial intelligence is laying the groundwork for the future of the dental industry. Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth</p>
            
            
          </div>
          
        </section>


        <section className="info hidden sm:flex gap-3 p-8 my-10 mx-10">
          <InfoCard icon={tooth} header="Root Canal Treatment" content="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth." />
          <InfoCard icon={teeth} header="Cosmetic Dentist" content="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile." />
          <InfoCard icon={teethopen} header="Dental Implants" content="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge." />
        </section>
        <section className="info sm:hidden flex flex-col gap-3 p-8 my-10 mx-10">
          <InfoCard icon={tooth} header="Root Canal Treatment" content="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth." />
          <InfoCard icon={teeth} header="Cosmetic Dentist" content="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile." />
        </section>



        <section>
            <WatchVedio/>
        </section>
        </>
    )
}