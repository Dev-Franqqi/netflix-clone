"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 import Style from "./style.module.css"
export default function Dropdown() {
  return (
    <Accordion type="single" collapsible className={Style.almostFull}>
      <AccordionItem className="border-0 mb-2" value="item-1">
        <AccordionTrigger className="md:px-10 px-2 md:py-6 hover:no-underline font-normal md:text-2xl text-left text-lg bg-neutral-800 mb-1">What is Netflix?</AccordionTrigger>
        <AccordionContent className="text-left py-4 bg-neutral-800 px-10">
          <p className="text-lg md:text-2xl">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
          <p className="text-lg md:text-2xl mt-4">You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
       
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className="border-0 mb-2" value="item-2">
        <AccordionTrigger className="md:px-10 px-2 hover:no-underline font-normal md:text-2xl text-left text-lg bg-neutral-800 mb-1">How much does Netflix cost?</AccordionTrigger>
        <AccordionContent className="text-left py-4 bg-neutral-800 px-10">
          <p className="text-lg md:text-2xl">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.</p>
        </AccordionContent>
      </AccordionItem>


      <AccordionItem className="border-0 mb-2" value="item-3">
        <AccordionTrigger className="md:px-10 px-2 hover:no-underline font-normal md:text-2xl text-left text-lg bg-neutral-800 mb-1">Where can i watch?</AccordionTrigger>
        <AccordionContent className="text-left py-4 bg-neutral-800 px-10">
          <p className="text-lg md:text-2xl">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
</p>
          <p className="text-lg mt-4 md:text-2xl">You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className="border-0 mb-2" value="item-4">
        <AccordionTrigger className="md:px-10 px-2 hover:no-underline font-normal md:text-2xl text-left text-lg bg-neutral-800 mb-1">How do i cancel?</AccordionTrigger>
        <AccordionContent className="text-left py-4 bg-neutral-800 px-10">
          <p className="text-lg md:text-2xl">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.


</p>
        
        </AccordionContent>
      </AccordionItem>


      <AccordionItem className="border-0 mb-2" value="item-5">
        <AccordionTrigger className="md:px-10 px-2 hover:no-underline font-normal md:text-2xl text-left text-lg bg-neutral-800 mb-1">What can i watch on Netflix?</AccordionTrigger>
        <AccordionContent className="text-left py-4 bg-neutral-800 px-10">
          <p className="text-lg md:text-2xl">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.


</p>
        
        </AccordionContent>
      </AccordionItem>

      
      <AccordionItem className="border-0 mb-3" value="item-6">
        <AccordionTrigger className="md:px-10 px-2 hover:no-underline font-normal md:text-2xl text-left text-lg bg-neutral-800 mb-1">Is Netflix good for kids?</AccordionTrigger>
        <AccordionContent className="text-left py-4 bg-neutral-800 px-10">
          <p className="text-lg md:text-2xl">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.



</p>
          <p className="text-lg md:text-2xl mt-4">Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.



</p>
        
        </AccordionContent>
      </AccordionItem>

      
    
    </Accordion>
  )
}