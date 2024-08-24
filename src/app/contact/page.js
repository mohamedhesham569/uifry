import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import { TextField,MenuItem } from '@mui/material';
export default function Contact (){
    return(
        <>
        <section className="items-center flex flex-col">
         <div className="landing_content p-4 sm:p-1 w-fit">
            <h1 className="my-6 ">Get in touch</h1>
            <p className='my-8'>Book an Appointment to treat your teeth right now.</p>
            </div>
        <section className="flex justify-center flex-col sm:flex-row w-full info p-10">
            <div className="flex sm:w-1/2 flex-col gap-4 p-6">
                <div className=" iframe ">
                <iframe className='sm:w-9/12 w-11/12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.836445612421!2d31.680799026572878!3d31.447247478460643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e3a838ecf3cd%3A0xdbba6eecf8ddca9a!2z2YXYr9mK2YbYqSDYr9mF2YrYp9i3INin2YTYrNiv2YrYr9ip2Iwg2YXYrdin2YHYuNipINiv2YXZitin2Lc!5e1!3m2!1sar!2seg!4v1724442890099!5m2!1sar!2seg"  width="600" height="450" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex gap-4 sm:w-9/12  items-center contact_card">
                    <LocationOnIcon/>
                    <div className="">
                        <h2 className='font-bold'>Office Address</h2>
                        <p className='text-sm'>1441 Morris Ave, Union, NJ 07083</p>
                    </div>
                </div>
                <div className="flex gap-4 sm:w-9/12  items-center contact_card">
                    <AccessTimeIcon/>
                    <div className="">
                        <h2 className='font-bold'>Office Timings</h2>
                        <p className='text-sm'>Monday - Saturday (9:00am to 5pm)
                        Sunday (Closed)</p>
                    </div>
                </div>
                <div className="flex gap-4 sm:w-9/12  items-center contact_card">
                    <LocalPhoneIcon/>
                    <div className="">
                        <h2 className='font-bold'>Phone Number</h2>
                        <p className='text-sm'>0900-78601</p>
                    </div>
                </div>
                <div className="flex gap-4 sm:w-9/12  items-center contact_card">
                    <ChatIcon/>
                    <div className="">
                        <h2 className='font-bold'>Live chat</h2>
                        <p className='text-sm'>+1-2064512559</p>
                    </div>
                </div>
                <div className="flex gap-4 sm:w-9/12  items-center contact_card">
                    <EmailIcon/>
                    <div className="">
                        <h2 className='font-bold'>Emai Address</h2>
                        <p className='text-sm'>Smile01@gmail.com</p>
                    </div>
                </div>
            </div>
                <form action=""className='sm:w-1/3'>
            <div className="flex gap-5 my-5 p-10 flex-col  bg-white">
                <div className="flex justify-between">
                <TextField id="outlined-basic" label="First Name" variant="outlined" required/>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" required/>
                </div>
                <TextField id="outlined-basic" label="Email" variant="outlined" required/>
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" required/>
                <TextField
          id="outlined-multiline-static"
          label="massage"
          multiline
          rows={4}
          
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Mr/Msr"
          helperText="Please select your Gender"
          required
        >
        
            <MenuItem key={1} value={"Male"}>
                Male
            </MenuItem>
            <MenuItem key={1} value={"Female"}>
            Female
            </MenuItem>
        </TextField>

                    <button type="submit" className='btn w-fit m-auto'>Book an appointment</button>
            </div>
            </form>
        </section>
        </section>
        </>
    )
}