"use client"

import Image from "next/image"
import logo from "./images/netflixlogo.png"
import bigBack from "./images/largeimage.jpg"
import { Button } from "@mui/base"
import Textfield from "@mui/material/TextField"
import tv from "./images/tv.png"
import phone from "./images/mobile-0819.jpg"



export default function Home() {
  return (<>
    <main className="h-screen">

      {/* first_section */}
      <section className="text-white text-center border-b-8 border-b-slate-800 h-4/5 bg-slate-400">

        <Image className="object-cover h-full brightness-50" src={bigBack} alt=''/>
      <section className="px-6 py-6 absolute top-1">


        <div className="mb-20 flex justify-between">
        <Image src={logo} alt='' width={100} />

        <Button className="bg-red-600 font-bold rounded-md px-2">Sign in</Button>

        </div>

        <h1 className='font-bold text-3xl' >Unlimited movies, Tv shows, and more</h1>

        <p className="mt-2">Watch anywhere. Cancel anytime.</p>
         
         <p  className='px-10 mt-1'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="flex justify-center">

       <Textfield className='bg-white rounded px-2  w-full '  InputLabelProps={{
    className: ' ml-4 mt-1 mb-3', // Add Tailwind CSS classes here
  }} variant='standard' label='Email address'/>
     
        </div>
        <Button  className="mx-auto mt-3 font-bold py-3 w-2/5 bg-red-600 block rounded-md text-white text-center hover:bg-red-600">Get Started </Button>

      
      </section>
      </section>


      {/* second section */}

      <section className="bg-black h-fit border-b-8 border-b-slate-800 px-8 py-6 text-white text-center">

        <h2 className="font-bold text-3xl mt-10">Enjoy on your TV</h2>
        <p className="mt-3">Watch on Smart Tvs, Playstatio, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        <Image src={tv} alt=''/>
      
      </section>


      {/* third section */}

      <section className="text-white text-center bg-black border-b-8 border-b-slate-800 py-6 px-8">
        <h3 className="text-3xl mt-10 font-bold mb-2"  >Download your shows to watch offline</h3>
        

        <p>
          Save your favorites easily and always have something to watch.
        </p>

        <Image src={phone} alt='' />

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

      </section>

      

    </main>
  </>

  
  )
}
