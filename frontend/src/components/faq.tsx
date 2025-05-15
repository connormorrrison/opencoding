import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading = "Frequently Asked Questions",
  items = [
    {
      question: "What is OpenCoding?",
      answer:
        "OpenCoding is a collaborative development platform where teams can code, brainstorm, and build projects together in real time, powered by AI assistance.",
    },
    {
      question: "Do I need to install anything to use OpenCoding?",
      answer:
        "No installation is required. OpenCoding runs entirely in your browser, offering a seamless, cloud-based experience.",
    },
    {
      question: "Can I integrate with GitHub?",
      answer:
        "Yes. You can connect your OpenCoding workspace with GitHub to sync repositories, branches, and commits.",
    },
    {
      question: "Is OpenCoding free to use?",
      answer:
        "We offer a free tier with essential features and paid plans for teams needing more advanced tools and storage.",
    },
    {
      question: "Can I work solo or is this only for teams?",
      answer:
        "You can absolutely work solo. OpenCoding is built for both individual developers and collaborative teams.",
    }
  ]
  ,
}: Faq1Props) => {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto text-base shadow-[0_0_700px_rgba(64,46,207,0.5)] px-8 py-8 bg-black rounded-xl border border-gray-600">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq1 };
