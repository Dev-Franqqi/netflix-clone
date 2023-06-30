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


import phone from "./images/mobile-0819.jpg"



export default function Home() {
  return (<>
    <main className="h-screen w-screen">

      {/* first_section */}
      <section className="text-white   text-center md:h-screen w-screen border-b-8 border-b-slate-800 h-5/6 bg-slate-400">

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
         <div className="md:w-full md:flex md:justify-around">

        <div className="flex border-3 border-black w-full justify-center">
        
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
     
        </div>
        <Button className="mx-auto mt-3 mb-4 font-bold py-3 w-2/5 bg-red-600 block rounded-md text-white text-center hover:bg-red-600 md:w-1/5 md:relative -left-72">Get Started </Button>
        </div>

      
      </section>
      </section>


      {/* second section */}

      <section className="w-full bg-black h-fit border-b-8 border-b-slate-800 px-8 py-6 text-white text-center md:flex ">
        <div className="md:w-3/5 md:pt-20 md:px-32 md:text-left">

        <h2 className="font-bold text-3xl mt-10 md:text-5xl md:font-extrabold">Enjoy on your TV</h2>
        <p className="mt-3 md:text-2xl">Watch on Smart Tvs, Playstatio, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>

        <Image src={tv} alt=''/>
      
      </section>


      {/* third section */}

      <section className="text-white w-full text-center bg-black border-b-8 border-b-slate-800 py-6 px-8 md:flex  md:justify-center">
      <div className="md:flex w-4/5 md:flex-row-reverse">

        <div className="md:text-left  md:w-2/5">

        <h3 className="text-3xl mt-10 font-bold mb-2 md:text-extrabold md:text-5xl"  >Download your shows to watch offline</h3>
        

        <p className="md:text-2xl">
          Save your favorites easily and always have something to watch.
        </p>
        </div>

        <Image src={phone} alt='' />
      </div>


      </section>


      {/* fourth section */}

      <section className='text-white text-center bg-black border-b-8 border-b-slate-800 py-8 px-8'> 

    <h3 className='text-3xl font-bold mt-8 mb-2' >Watch everywhere</h3>

    <p>Stream unlimited movies and TV shows on your phone tabet, laptop, and TV.</p>

    

      </section>



      {/* fifth section */}

      <section className='text-white text-center py-8 px-12 border-b-8 bg-black border-b-slate-800'>

        <h3 className='text-3xl font-bold mb-3 mt-8' >
          Create profiles for kids
        </h3>

        <p>

          Send kids on adventures with their favorite characters in a space made just for them--free with your membership

        </p>
        <Image src={Kids} alt='' />

      </section>


      <section className="text-white text-center py-8 px-12 border-b-8 bg-black border-b-slate-800">
        <h3 className="text-3xl font-bold mb-3 mt-8">Frequently Asked Questions</h3>

      </section>

      

    </main>
  </>

  
  )
}
