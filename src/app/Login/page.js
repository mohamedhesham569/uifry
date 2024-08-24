import Image from "next/image"
import pic from "../../../public/images/Rectangle 687.png"
import pic2 from "../../../public/images/Google.png"
import { Checkbox,FormControlLabel } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Link from "next/link";
export default function Login (){
    return(
        <>
        <section className="flex justify-center">
            <div className="hidden sm:block w-1/2 p-10">
                <Image src={pic} alt="doctor-pic"style={{width:"70%"}}/>
            </div>
            <div >
                <form action="" className=" flex flex-col gap-4 my-10">
                <h1 className=" text-2xl font-bold">Welcome Back</h1>
                <p className='my-8'>Discover a better way of spandings with Uifry.</p>
                <button type="button" className="flex gap-3 sign_google">
                    <span><Image src={pic2} alt="doctor-pic"style={{}}/></span>
                    <span>Log in with Google</span>
                </button>

                <div className="relative flex justify-center">

                    <span className="or">Or</span>
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
                <FormControlLabel  control={<Checkbox />} label="Remember Me" />
                </div>
                <a href="/" className=" underline text-sm">Forget Password?</a>
              </div>

                <button type="submit" className="btn">Log in</button>

                <div className="">
                Not member yet? <span><Link href="/signup" className=" underline font-bold">Create an account</Link> </span>
                </div>

                </form>
            </div>
        </section>
        </>
    )
}