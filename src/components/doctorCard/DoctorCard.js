import Image from "next/image"
import doc1 from "../../../public/images/Group 1000001016.png"
import doc2 from "../../../public/images/Mask group (1).png"
import doc3 from "../../../public/images/Mask group (2).png"
import doc4 from "../../../public/images/doc6 (1).png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function DoctorCard (){
    return (
        <>
        <section className="why_us">
        <div className="landing_content items-center flex flex-col justify-center p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">Meet our specialists</h1>
            <p className='my-8'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
          </div> 
          <div className="flex justify-center flex-col sm:flex-row">

            <div className="sm:w-3/12 m-3 relative doctor_card">
            <div className="linkedin absolute">
                <LinkedInIcon/>
            </div>
            <Image src={doc1} alt="docto-pic"/>
            <div className="absolute doc_name">
                <h2>Jim Carry
                </h2>
                <p>Orthodontist.</p>
            </div>
            </div>
            <div className="sm:w-3/12 m-3 relative doctor_card">
            <div className="linkedin absolute">
                <LinkedInIcon/>
            </div>
            <Image src={doc2} alt="docto-pic"/>
            <div className="absolute doc_name">
                <h2>Jenny Wilson
                
                </h2>
                <p>Periodontist.</p>
            </div>
            </div>
            <div className="sm:w-3/12 m-3 relative hidden sm:block doctor_card">
            <div className="linkedin absolute">
                <LinkedInIcon/>
            </div>
            <Image src={doc3} alt="docto-pic"/>
            <div className="absolute doc_name">
                <h2>Wade Warren
                </h2>
                <p>Endodontist.</p>
            </div>
            </div>

            <div className="sm:w-3/12 m-3 relative hidden sm:block doctor_card">
            <div className="linkedin absolute">
                <LinkedInIcon/>
            </div>
            <Image src={doc4} alt="docto-pic"/>
            <div className="absolute doc_name">
                <h2>Jacob Jones
                </h2>
                <p>Pediatric Dentist.</p>
            </div>
            </div>

        </div>
          
        </section>
       
        </>
    )
}