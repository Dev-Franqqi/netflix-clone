"use client"

import Image from "next/image"
import logo from "./images/netflixlogo.png"
import bigBack from "./images/largeimage.jpg"
import Button from "@mui/material/Button/Button"
import { Typography } from "@mui/material"
import Textfield from "@mui/material/TextField"
import tv from "./images/tv.png"
import phone from "./images/mobile-0819.jpg"

export default function Home() {
  return (<>
    <main className="h-screen">

      {/* first_section */}
      <section className="text-white text-center border-b-8 border-b-slate-800 h-4/5 bg-slate-400">

        <Image className="object-cover h-full brightness-50" src={bigBack} />
      <section className="px-6 py-6 absolute top-1">


        <div className="mb-20 flex justify-between">
        <Image src={logo} width={100} />

        <Button className="bg-red-600 font-bold" typography={{ variantMapping: { button: 'span' } }} size='small' variant='contained'>S<span className="text-lowercase">ign in</span></Button>

        </div>

        <Typography align='center'className='font-bold text-3xl' variant='h1'>Unlimited movies, Tv shows, and more</Typography>

        <Typography align='center' className="mt-2" paragraph>Watch anywhere. Cancel anytime.</Typography>
         
         <Typography align='center' className='px-10 mt-1' paragraph>Ready to watch? Enter your email to create or restart your membership.</Typography>
        <div className="flex justify-center">

       <Textfield className='bg-white rounded px-2  w-full '  InputLabelProps={{
    className: ' ml-4 mt-1 mb-3', // Add Tailwind CSS classes here
  }} variant='standard' label='Email address'/>
     
        </div>
        <Button  size='large' className="mx-auto mt-3 font-bold py-3 w-2/5 bg-red-600 block text-white text-center hover:bg-red-600">Get Started </Button>

      
      </section>
      </section>


      {/* second section */}

      <section className="bg-black h-fit border-b-8 border-b-slate-800 px-8 py-6 text-white text-center">

        <Typography className="font-bold text-3xl mt-10" align='center' variant='h2'>Enjoy on your TV</Typography>
        <Typography align='center'className="mt-3">Watch on Smart Tvs, Playstatio, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Typography>
        <Image src={tv} alt=''/>
      
      </section>


      {/* third section */}

      <section className="text-white text-center bg-black border-b-8 border-b-slate-800 py-6 px-8">
        <Typography className="text-3xl mt-10 font-bold mb-2" variant="h3" align='center'>Download your shows to watch offline</Typography>
        

        <Typography align='center' paragraph>
          Save your favorites easily and always have something to watch.
        </Typography>

        <Image src={phone} alt='' />

      </section>


      {/* fourth section */}

      <section className='text-white text-center bg-black border-b-8 border-b-slate-800 py-8 px-8'> 

    <Typography className='text-3xl font-bold mt-8 mb-2' variant='h3' align='center'>Watch everywhere</Typography>

    <Typography paragraph align='center'>Stream unlimited movies and TV shows on your phone tabet, laptop, and TV.</Typography>

    

      </section>



      {/* fifth section */}

      <section className='text-white text-center py-8 px-12 border-b-8 bg-black border-b-slate-800'>

        <Typography className='text-3xl font-bold mb-3 mt-8' align='center' variant='h3'>
          Create profiles for kids
        </Typography>

        <Typography paragraph align='center'>

          Send kids on adventures with their favorite characters in a space made just for them--free with your membership

        </Typography>

      </section>

      

    </main>
  </>

  
  )
}
