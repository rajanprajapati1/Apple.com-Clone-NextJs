import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqQuestions } from '@/constants/config'
const ProductFaq = () => {
    return (
        <div className="accordian w-full h-auto flex justify-center">
            <main className="w-[70%]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-4xl font-bold hover:text-blue-700 ">Frequently Asked Questions</AccordionTrigger>
                        <AccordionContent>
                            {faqQuestions.map((val, i) => {
                                return <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1" key={i}>
                                        <AccordionTrigger><h1 className='font-semibold  '>{val.question}</h1></AccordionTrigger>
                                        <AccordionContent>
                                            {val.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            })}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    )
}

export default ProductFaq