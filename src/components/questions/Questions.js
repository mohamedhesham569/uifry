import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Questios(){
    return (
        <>
        <section className='flex flex-col items-center'>
        <div className="landing_content relative w-fit ml-10 pl-5 flex flex-col items-center  p-4 sm:p-1 w-full">
            <h1 className="my-6 mb-1">Frequently Ask Question</h1>
            <p className='my-8 mt-4'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            </div>

        <div className="questions sm:w-1/3">
            <div className="accordions flex flex-col items-center">
            <Accordion className=' '>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className='accordion_summary'>
            Can I see who reads my email campaigns?
            <span><ArrowDropDownIcon/></span>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
            </AccordionDetails>
            </Accordion>
            <Accordion className=''>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className='accordion_summary'>
            Do you offer non-profit discounts?
            <span><ArrowDropDownIcon/></span>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
            </AccordionDetails>
            </Accordion>
            <Accordion className=' '>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className='accordion_summary'>
            Can I see who reads my email campaigns?
            <span><ArrowDropDownIcon/></span>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
            </AccordionDetails>
            </Accordion>
            <Accordion className=' '>
            <AccordionSummary id="panel-header" aria-controls="panel-content" className='accordion_summary'>
            Can I see who reads my email campaigns?
            <span><ArrowDropDownIcon/></span>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.
            </AccordionDetails>
            </Accordion>
            </div>
 

        </div>
                   
</section>
        </>
    )
}