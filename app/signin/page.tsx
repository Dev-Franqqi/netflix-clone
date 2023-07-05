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

        <div className=" bg-black border-2 border-white">

       <main className={styles.bac}>
        <Image className="md:w-40 " src={logo} width={80} alt="" />
        <div className="text-white  mt-5 bg-black px-2 h-full w-full">

          <h1 className=" font-sans text-3xl font-semibold">Sign In</h1>
          <form className="mt-10 ">
            <Input className="w-full bg-neutral-700 border-none h-12 mb-4 mx-auto" placeholder="Email or phone number" />
            <Input className=" h-12 bg-neutral-700 border-none w-full mb-10  mx-auto" type="password" placeholder="Password" />
            <Button className="block font-semibold h-12 bg-red-600 text-base hover:bg-red-600 mx-auto w-full">Sign in</Button>
              <div className="mt-4 flex px-1 justify-between text-neutral-600">
              <div className="flex">
      <Checkbox className="bg-gray-400 font-sans" id="remember"  />
      <label
        htmlFor="terms2"
        className="text-sm ml-0.5 "
      >
        Remember me
      </label>



              </div>
              <div className="text-sm">Need help?</div>
              </div>

              <div className="text-neutral-400 leading-tight  text-sm">
                <p className="text-base mt-4">New to Netflix? <span className="text-white">Sign up now</span></p>
              
                <p className="mt-2 text-xs">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <span className="text-blue-600">Learn more.</span></p>
                


              </div>
          </form>

          

        </div>

      

         </main>
         <hr className="bg-white" />
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