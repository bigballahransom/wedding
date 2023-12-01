import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Second = () => {
  return (
<div clasName='flex p-8 bg-white'>
<div>
    <h1 className='font-bold text-3xl text-orange text-center'>F.A.Q.</h1>
</div>
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Can we bring pets?</AccordionTrigger>
    <AccordionContent>
      Pets are not allowed at the wedding, you may bring pets to your lodging areas.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Alcohol</AccordionTrigger>
    <AccordionContent>
      Please do not bring any alcohol to the wedding, the wedding and reception will be dry. You are welcome to drink after we leave the venue :)
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>How did you fall in love?</AccordionTrigger>
    <AccordionContent>
      We tripped. No falling involved.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>How did you fall in love?</AccordionTrigger>
    <AccordionContent>
      We tripped. No falling involved.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger>How did you fall in love?</AccordionTrigger>
    <AccordionContent>
      We tripped. No falling involved.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>

  )
}

export default Second