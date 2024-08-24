"use client";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import doc from "../../public/images/Ellipse 3 (3).png"
import doc2 from "../../public/images/doc2.png"
import doc3 from "../../public/images/Rectangle 631.png"
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoCard from '@/components/infoCard/InfoCard';
import tooth from "../../public/images/tooth-solid.svg"
import teeth from "../../public/images/teeth-solid.svg"
import teethopen from "../../public/images/teeth-open-solid.svg";
import patient from "../../public/images/Rectangle 656.png"
import CheckIcon from '@mui/icons-material/Check';
import smile from "../../public/images/Mask group.png"
import WatchVedio from '@/components/watchvedio/WatchVedio';
import DoctorCard from '@/components/doctorCard/DoctorCard';
import rating from "../../public/images/Group 346.png"
import user1 from "../../public/images/Ellipse 3 (1).png"
import user2 from "../../public/images/Ellipse 3 (2).png"
import user3 from "../../public/images/Ellipse 3.png"
import Articles from '@/components/articles/Articles';
import Questios from '@/components/questions/Questions';
import BeforeFooter from '@/components/beforefooter/BeforeFooter';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <section className='sm:flex sm:justify-around'>
          <div className="landing_content p-4 sm:p-1 sm:w-1/2 w-full">
            <h1 className="my-6 ">get ready for your best ever dental experirnce</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
            <div className="flex gap-3 items-center">
              <div className="items-center"><button type="button" className="btn">book an appointment</button></div>
              
              <div className="flex gap-2 items-center">

                <div className="phone_icon"><PhoneEnabledIcon/></div>
              
                <div className="call">     
                  <p style={{color: "#1376F8"}}>Dental 24H Emergency
                  </p>
                  <p>0900-78601</p>
                </div>
              </div>
            </div>

            <div className="my-6 mx-3 doc_card w-8/12">
              <div className="flex justify-between p-3  items-center">
                <div className="flex gap-2 ">
                  <Image src={doc} alt='doctor pic'/>
                  <div>
                    <h5>Thomas daniel</h5>
                    <p>Sr Dental</p>
                  </div>
                  
                </div>
                <LinkedInIcon style={{color: "#1376F8"}}/>
              </div>
              <p className='m-4'>Top Quailty dental treatment done by field experts, Highly Recommended for everyone</p>
            </div>
          </div>
          <div className="sm:w-1/3 doc-pic">
              <Image src={doc2} alt='doctor-pic' style={{    margin: "50px 0px 0px -49px;"}}/>
          </div>
        </section>

        <section className="info hidden sm:flex gap-3 p-8 my-5 mx-10">
          <InfoCard icon={tooth} header="Root Canal Treatment" content="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth." />
          <InfoCard icon={teeth} header="Cosmetic Dentist" content="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile." />
          <InfoCard icon={teethopen} header="Dental Implants" content="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge." />
        </section>
        <section className="info sm:hidden flex gap-3 p-8 my-5 mx-10">
          <InfoCard icon={tooth} header="Root Canal Treatment" content="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth." />
        </section>




        <section className='sm:flex sm:justify-around my-10'>
          <div className="landing_content items-center flex flex-col sm:block p-4 sm:p-1 sm:w-1/2 w-full">
            <h1 className="my-6 ">We’re welcoming new patients and can’t wait to meet you.</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
            <div className=" flex">
              <div className="phone_input">
                <PhoneEnabledIcon/>
              <input type="text" placeholder='Enter your Phone Number'/>
              </div>
              
              <button type="button" className='btn'>submit</button>
            </div>
          </div>
          <div className="sm:w-1/3 p-4">
              <Image src={patient} alt='doctor-pic' />
          </div>
        </section>


        <section className='sm:flex sm:justify-around sm:my-10 why_us'>
        <div className="sm:w-1/3 p-4">
              <Image src={doc3} alt='doctor-pic' />
          </div>
          <div className="landing_content items-center flex flex-col sm:block p-4 sm:p-1 sm:w-1/2 w-full">
            <h1 className="sm:my-6 ">Why choose Smile for all your dental treatments?</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <div className=" flex gap-2 m-3 w-5/6 sm:w-fit justify-btween">
              <div className="check"><CheckIcon/></div>
              <span>Top quality dental team</span>
            </div>
            <div className="m-3 flex gap-2 w-5/6 sm:w-fit justify-btween">
              <div className="check"><CheckIcon/></div>
              <span>State of the art dental services</span>
            </div>
            <div className="m-3 flex gap-2 w-5/6 sm:w-fit justify-btween">
              <div className="check"><CheckIcon/></div>
              <span>Discount on all dental treatment</span>
            </div>
            <div className="m-3 flex gap-2 w-5/6 sm:w-fit justify-btween">
              <div className="check"><CheckIcon/></div>
              <span>Enrollment is quick and easy</span>
            </div>
              <Link href="/contact" aria-label='link to book appointment'><button type="button" className='btn m-4'>Book an appointment</button></Link>
            
          </div>
          
        </section>

        <section className='sm:flex sm:justify-around my-10'>
          <div className="landing_content items-center flex flex-col sm:block p-4 sm:p-1 sm:w-1/2 w-full">
            <h1 className="my-6 ">Leave your worries at the door and enjoy a healthier, more precise smile</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
              
              <Link href="/contact" aria-label='link to book appointment'><button type="button" className='btn m-4'>Book an appointment</button></Link>
          </div>
          <div className="sm:w-1/3 p-4 flex justify-center">
              <Image src={smile} alt='doctor-pic' />
          </div>
        </section>

        <section>
          <WatchVedio/>
        </section>

        <section>
          <DoctorCard/>
        </section>

        <section>
        <div className="landing_content items-center flex flex-col  p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">Our Happy Clients</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <div className="flex flex-col sm:flex-row p-8 mx-8">
            <div className="my-6 mx-3 doc_card w-fitt">
              <div className="flex justify-between p-3  items-center">
                <div className="flex gap-2 ">
                  <Image src={user1} alt='doctor pic'/>
                  <div>
                    <h5>Alena Alex</h5>
                    <p><Image src={rating} alt='rating' /></p>
                  </div>
                  
                </div>
              </div>
              <p className='m-4'>Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.</p>
            </div>
            <div className="my-6 mx-3 sm:block doc_card w-fitt">
              <div className="flex justify-between p-3  items-center">
                <div className="flex gap-2 ">
                  <Image src={user2} alt='doctor pic'/>
                  <div>
                    <h5> Thomas daniel</h5>
                    <p><Image src={rating} alt='rating' /></p>
                  </div>
                  
                </div>
              </div>
              <p className='m-4'>Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.</p>
            </div>
            <div className="my-6 mx-3 hidden sm:block doc_card w-fitt">
              <div className="flex justify-between p-3  items-center">
                <div className="flex gap-2 ">
                  <Image src={user3} alt='doctor pic'/>
                  <div>
                    <h5>Thomas Edison</h5>
                    <p><Image src={rating} alt='rating' /></p>
                  </div>
                  
                </div>
              </div>
              <p className='m-4'>Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.</p>
            </div>
            </div>
          </div>
        </section>

        <section>
          <Articles/>
        </section>
        {/* <section>
          <Questios/>
        </section> */}
        <section className='mt-20'>
          <BeforeFooter/>
        </section>
    </>
  );
}
