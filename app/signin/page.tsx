import bigBack from "../images/largeimage.jpg"
import logo from "../images/netflixlogo.png"
import Image from "next/image"
export default function page() {
  return (
        <main className="w-screen h-screen ">
        <Image src={bigBack} className="brightness-50 " alt='' />

       
            <Image src={logo} className="md:w-48 md:ml-5 md:mt-5 absolute top-1" width={100} alt="" />
    
        </main>
  )
}