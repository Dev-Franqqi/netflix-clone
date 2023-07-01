"use client"
import { SyntheticEvent } from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Dropdown() {
    const [expanded, setExpanded] = useState<string | false>(false);
  
    const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <>
        <Accordion className='mb-3' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<AddOutlinedIcon className="text-white" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className='bg-neutral-800 text-white'
          > 
            <Typography className='md:text-2xl md:py-3 font-medium'>
              What is Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className=' bg-neutral-800 text-white'>
            <Typography className='md:text-2xl text-left'>
          <p> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p> 

            <p className='mt-4'>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion className='mb-3' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<AddOutlinedIcon className="text-white" />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className='bg-neutral-800 text-white'
          > 
            <Typography className='md:text-2xl md:py-3 font-medium'>
              How much does Netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className=' bg-neutral-800 text-white'>
            <Typography className='md:text-2xl text-left'>
           Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.

          
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<AddOutlinedIcon className="text-white" />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            className='bg-neutral-800  text-white'
          > 
            <Typography className='md:text-2xl md:py-3 font-medium'>
             Where can I watch?
             
            </Typography>
          </AccordionSummary>
          <AccordionDetails className=' bg-neutral-800 text-white'>
            <Typography className='md:text-2xl text-left'>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
          
            </Typography>
            <Typography className='md:text-2xl md:mt-4 text-left'>
                
                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  }
  