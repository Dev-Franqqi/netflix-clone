"use client"
import bigBack from "../images/largeimage.jpg"
import logo from "../images/netflixlogo.png"
import Image from "next/image"
import styles from "./style.module.css"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function page() {
  return (

        <div className="w-screen bg-black h-screen">

       <main className={styles.bac}>
        <Image className="md:w-40 " src={logo} width={80} alt="" />
        <div className="text-white mt-5 bg-black px-2 h-full w-full">

          <h1 className=" font-sans text-3xl font-semibold">Sign In</h1>
          <form className="mt-10">
            <Input className="w-full bg-neutral-700 border-none h-12 mb-4 mx-auto" placeholder="Email or phone number" />
            <Input className=" h-12 bg-neutral-700 border-none w-full mb-10  mx-auto" type="password" placeholder="Password" />
            <Button className="block font-semibold h-12 bg-red-600 text-base hover:bg-red-600 mx-auto w-full">Sign in</Button>
              <div className="mt-4 flex justify-between text-neutral-600">
              <div className="flex items-center">
      <Checkbox className="bg-white" id="remember"  />
      <label
        htmlFor="terms2"
        className="text-sm "
      >
        Remember me
      </label>



              </div>
              <div className="text-sm">Need help?</div>
              </div>

              <div className="text-neutral-400 px-3 text-sm">
                <p className="text-base mt-4">New to Netflix? <span className="text-white">Sign up now</span></p>
                <p  className="mt-2">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                <p className="mt-4">The information collected by Google reCAPTCHA is subject to the Google <span className="text-blue-600">Privacy Policy</span> and <span className="text-blue-600">Terms of Service</span>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes {"(" + "it is not used for personalized advertizing by Google" +")."}</p>
              </div>
          </form>

          

        </div>

      

         </main>
         <footer className="bg-black w-screen text-sm text-neutral-400 px-10">
          <div className="text-base mb-5">Questions? Contact us</div>

          <div className="flex w-4/5 justify-between leading-10">


          <div className="">
            <div>FAQ</div>
            <div>Terms of Use</div>
            <div>Cookie Preferences</div>
          </div>
          <div>
            <div>Help Center</div>
            <div>Privacy</div>
            <div>Corporate Information</div>
          </div>
          </div>

        </footer>
        </div>

  )
}