import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { productAccordian } from "@/constants/config";
const Accordian = () => {
    return (
        <div className="accordian w-full h-auto flex justify-center">
            <main className="w-[70%]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-4xl font-bold hover:text-blue-700 ">Product Information</AccordionTrigger>
                        <AccordionContent>
                            <div className="accordian_content mt-6 mb-10 flex gap-16 ">
                                <div className="head w-1/3 ">
                                    <h1 className="text-xl font-semibold px-1">Legal Metrology</h1>
                                    <h1 className="text-xl font-semibold px-1">Product</h1>
                                    <h1 className="text-xl font-semibold px-1">Declaration</h1>
                                </div>
                                <div className="description flex gap-6 flex-col py-1 ">
                                    {productAccordian.map((val, i) => {
                                        return <div className="desc_box " key={i}>
                                            <h1 className="font-semibold text-sm ">{val.title}</h1>
                                            <p className="py-2">{val.desc}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>

    )
}

export default Accordian;

