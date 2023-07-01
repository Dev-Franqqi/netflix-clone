"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Styles from "./components/style.module.css"
import logo from "./images/netflixlogo.png"
import bigBack from "./images/largeimage.jpg"
import Textfield from "@mui/material/TextField"
import tv from "./images/tv.png"
import Kids from "./images/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png"
import Dropdown from "./components/Dropdown"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import phone from "./images/mobile-0819.jpg"



export default function Home() {
  const placeHolder = (
    <div className="flex space-x-2">
      <svg width="15" className="mt-1" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      <span>English</span>
    </div>
  );
  return (<>
    <main className="h-screen w-screen">

      {/* first_section */}
      <section className="text-white   text-center md:h-screen w-screen border-b-8 border-b-neutral-800 h-5/6 bg-slate-400">

        <Image className=" object-cover h-full brightness-50" src={bigBack} alt=''/>
      <section className="px-4 w-screen h-full mt-10 py-6 mx-auto absolute top-1">


        <div className="mb-20 w-full mx-auto px-5 flex justify-between md:px-40">
        <Image src={logo} alt=''className="md:w-36"  width={100} />
        {/* <Image src={logo} alt=''className=""  width={150} /> */}
       

        <Link href='/signin'><Button className="bg-red-600 rounded-md h-fit py-1 px-2 md:py-2 md:px-5 w-fit ">Sign in</Button></Link>

        </div>

        <h1 className='font-bold md:font-extrabold text-4xl md:mt-40 md:text-5xl' >Unlimited movies, Tv shows, and more</h1>

        <p className="mt-2 mb-2 text-lg md:font-semibold md:text-2xl md:mt-4">Watch anywhere. Cancel anytime.</p>
         
         <p  className='px-12 mt-1 md:font-semibold md:text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        
         <div className="flex items-center flex-col mt-7 md:flex-row max-w-lg md:mx-auto justify-around  space-x-2">
      <Input type="email" className="py-6 w-full bg-transparent text-base bg-opacity-50 placeholder:text-gray-400" placeholder="Email address" />
      <Button className=" mt-3  py-6 text-xl  md:mt-0  w-3/5 bg-red-600 hover:bg-red-600" type="submit">Get Started  <svg width="15" className="font-semibold mt-1" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
    </div>


      
      </section>
      </section>


      {/* second section */}

      <section className="w-full bg-black h-fit border-b-8 border-b-neutral-800 px-8 py-6 text-white text-center md:flex ">
        <div className="md:w-3/5 md:pt-20 md:px-32 md:text-left">

        <h2 className="font-bold text-3xl mt-10 md:text-5xl md:font-extrabold">Enjoy on your TV</h2>
        <p className="text-lg mt-3 md:text-2xl">Watch on Smart Tvs, Playstatio, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>

        <Image src={tv} alt=''/>
      
      </section>


      {/* third section */}

      <section className="text-white w-full text-center bg-black border-b-8 border-b-neutral-800 py-6 px-8 md:py-20 ">
      <div className="md:w-4/5 md:flex  md:flex-row-reverse md:mx-auto ">

        <div className=" md:text-left">

        <h3 className="text-3xl  mt-10 font-extrabold mb-2 md:text-extrabold md:text-5xl md:leading-normal "  >Download your shows to watch offline</h3>
        

        <p className=" text-lg md:text-2xl md:mt-4">
          Save your favorites easily and always have something to watch.
        </p>
        </div>

        
      

        <Image src={phone} width={900}  alt='' />
    
        </div>


      </section>


      {/* fourth section */}

      <section className='text-white text-center md:text-left bg-black border-b-8 border-b-neutral-800 w-full md:py-16 bg py-8 px-8'> 
<div className="md:ml-48">

    <h3 className='text-3xl md:w-1/5 md:text-5xl font-extrabold mt-8 mb-2 md:leading-normal' >Watch everywhere</h3>

    <p className="text-lg md:text-2xl md:w-2/6 md:font-normal">Stream unlimited movies and TV shows on your phone tabet, laptop, and TV.</p>
    </div>

    

      </section>



      {/* fifth section */}

      <section className='text-white text-center py-8 px-12 border-b-8 bg-black border-b-neutral-800 md:flex md:flex-row-reverse md:text-left'>
        <div>
        <h3 className='text-3xl md:text-5xl md:w-4/5 font-extrabold mb-3 mt-8 md:leading-normal' >
          Create profiles for kids
        </h3>

        <p className=" md:max-w-lg text-lg md:text-2xl md:font-normal">

          Send kids on adventures with their favorite characters in a space made just for them &mdash; <span className="md:block">free with your membership</span>

        </p>

        </div>

        <Image src={Kids} width={500} alt='' />

      </section>


      <section className=" text-white text-center py-8  border-b-8 bg-black  border-b-neutral-800">
        <h3 className="text-3xl md:font-extrabold font-bold mb-5 mt-8">Frequently Asked Questions</h3>
          <Dropdown />

        <h3 className="text-center text-lg md:text-2xl px-4">Ready to watch? Enter your email to create or restart your membership.</h3>
    
       
        <div className="flex items-center flex-col mt-7 md:flex-row max-w-lg md:mx-auto justify-around  space-x-2">
      <Input type="email" className="py-6 border border-green-500 w-full bg-transparent text-base bg-opacity-50 placeholder:text-gray-400" placeholder="Email address" />
      <Button className=" mt-3  py-6 text-xl  md:mt-0  w-3/5 bg-red-600 hover:bg-red-600" type="submit">Get Started  <svg width="15" className="font-semibold mt-1" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
    </div>

          
      </section>


      <section className="  py-20 text-gray-300 leading-loose  border-b-8 bg-black  border-b-neutral-800">

      <div className="md:ml-48 ml-10">

        <p className="md:w-2/6 underline">Questions? Contact us.</p>

        <div className="text-left md:w-4/5 md:flex md:justify-between">
          <p className="md:w-2/6 underline">FAQ</p>
          <p className="md:w-2/6 underline">Help Center</p>
          <p className="md:w-2/6 underline">Account</p>

        </div>

        <div className="text-left md:w-4/5 md:flex md:justify-between">
          <p className="underline md:w-2/6">Media Center</p>
          <p className="underline md:w-2/6">Investor Relations</p>
          <p className="underline md:w-2/6">Jobs</p>

        </div>

        <div className="text-left md:w-4/5 md:flex md:justify-between">
          <p className="md:w-2/6 underline">Ways to Watch</p>
          <p className="md:w-2/6 underline">Terms of Use</p>
          <p className="md:w-2/6 underline">Privacy</p>

        </div>

        <div className="text-left md:w-4/5 md:flex md:justify-between">
          <p className="md:w-2/6 underline">Cookies Preferences</p>
          <p className="md:w-2/6 underline">Corporate Information</p>
          <p className="md:w-2/6 underline">Contact Us</p>

        </div>

        <div className="text-left md:w-4/5 md:flex md:justify-between">
          <p className="md:w-2/6 underline">Speed Test</p>
          <p className="md:w-2/6 underline">Legal Notices</p>
          <p className="md:w-2/6 underline">Only on Netflix</p>

        </div>

        <Select>
  <SelectTrigger className="mt-8 w-[180px]">
    <SelectValue placeholder={placeHolder} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="English">English</SelectItem>
  
  </SelectContent>
</Select>


        <p className="mt-2">Netflix Nigeria</p>

      </div>
     


        </section>
     
      

    </main>
  </>

  
  )
}
