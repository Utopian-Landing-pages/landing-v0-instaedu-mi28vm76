'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What age group is InstaEdu designed for?',
    answer: 'InstaEdu is specifically designed for children aged 6-12, offering age-appropriate content and a safe environment.',
  },
  {
    question: "How does InstaEdu ensure my child's safety online?",
    answer: 'We implement strict content moderation, robust parental oversight tools, and a closely monitored comment section to ensure a safe learning experience.',
  },
  {
    question: 'Is InstaEdu free to use?',
    answer: 'We offer a freemium model with basic content accessible for free. A premium subscription unlocks full curated content, advanced controls, and an ad-free experience.',
  },
  {
    question: 'What kind of content can my child access?',
    answer: 'Children can explore a wide range of educational videos and images across various subjects, all curated to be engaging and age-appropriate.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Everything you need to know about InstaEdu
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-balance">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-pretty">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
