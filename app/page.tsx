"use client"

import Image from "next/image"
import Styles from "./components/style.module.css"
import logo from "./images/netflixlogo.png"
import bigBack from "./images/largeimage.jpg"
import { Button } from "@mui/base"
  import {Input} from "@mui/base"
import Textfield from "@mui/material/TextField"
import tv from "./images/tv.png"
import Kids from "./images/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png"
import Dropdown from "./components/Dropdown"


import phone from "./images/mobile-0819.jpg"



export default function Home() {
  return (<>
    <main className="h-screen w-screen">

      {/* first_section */}
      <section className="text-white   text-center md:h-screen w-screen border-b-8 border-b-neutral-800 h-5/6 bg-slate-400">

        <Image className=" object-cover h-full brightness-50" src={bigBack} alt=''/>
      <section className="px-4 w-screen h-full mt-10 py-6 mx-auto absolute top-1">


        <div className="mb-20 w-full mx-auto px-5 flex justify-between md:px-40">
        <Image src={logo} alt=''className="md:w-36"  width={100} />
        {/* <Image src={logo} alt=''className=""  width={150} /> */}
       

        <Button className="bg-red-600 rounded-md h-fit py-1 px-2 w-fit ">Sign in</Button>

        </div>

        <h1 className='font-bold md:font-extrabold text-4xl md:mt-40 md:text-5xl' >Unlimited movies, Tv shows, and more</h1>

        <p className="mt-2 mb-2 text-lg md:font-semibold md:text-2xl md:mt-4">Watch anywhere. Cancel anytime.</p>
         
         <p  className='px-12 mt-1 md:font-semibold md:text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        
       <Textfield type="email" className={Styles.inp}   sx={{
        '& .MuiInputLabel-root': {
          color: '#ffffff', // Set the label text color to white
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#ffffff', // Set the label text color to white even when focused
        },
        '& .MuiInputBase-root': {
          color: '#ffffff', // Set the input text color to white
        },
        '& .MuiInputBase-root.Mui-focused': {
          color: '#ffffff', // Set the input text color to white when focused
        },
      }}
 variant="standard" label='Email address'  />
     
        
        <Button className="bg-red-600 mt-3 rounded px-12 py-2 md:py-4 md:relative md:top-4 md:mt-0">Get Started </Button>
        

      
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

      </section>

     
      

    </main>
  </>

  
  )
}
