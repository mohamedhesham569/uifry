import Image from "next/image"
import pic from "../../../public/images/Rectangle 687 (1) (1).png"
import pic2 from "../../../public/images/Google.png"
import { Checkbox,FormControlLabel } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
export default function Signup (){
    return(
        <>
        <section className="flex justify-center">
            <div className="hidden sm:block w-1/2 p-10">
                <Image src={pic} alt="doctor-pic"style={{width:"70%"}}/>
            </div>
            <div className="s,:w-1/2">
                <form action="" className=" flex flex-col  gap-4 my-10">
                <h1 className=" text-2xl font-bold">Create an account</h1>
                <p className='my-8'>Discover a better way of spandings with Uifry.</p>
                <button type="button" className="flex gap-3 sign_google">
                    <span><Image src={pic2} alt="doctor-pic"style={{}}/></span>
                    <span>Sign up with Google</span>
                </button>

                <div className="relative flex justify-center">

                    <span className="or">Or</span>
                </div>

      <div className="phone_input2">
                <PersonIcon/>
              <input type="text" placeholder='Name' className="mx-2" required/>
              </div>
      <div className="phone_input2">
                <EmailIcon/>
              <input type="text" placeholder='Email' className="mx-2" required/>
              </div>
      <div className="phone_input2">
                <LockIcon/>
              <input type="password" placeholder='Password' className="mx-2" required/>
              </div>

              <div className="flex justify-between items-center">
                <div className="">
                <FormControlLabel  control={<Checkbox />} label="I agree with Terms and Privacy" />
                </div>
              </div>

                <button type="submit" className="btn">Sign up</button>

                <div className="">
                Have account?  <span><Link href="/Login" className=" underline font-bold">Sign In</Link> </span>
                </div>

                </form>
            </div>
        </section>
        </>
    )
}