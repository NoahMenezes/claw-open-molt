import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Faq } from '@/payload-types'
import { RichText } from '@/components/RichText'

export default async function FAQsTwo() {
    const payload = await getPayload({ config })
    const { docs: faqs } = await payload.find({
        collection: 'faqs',
        limit: 100,
    })



    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">FAQ</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqs.map((item: Faq, _index: number) => (
                            <AccordionItem
                                key={item.id}
                                value={String(item.id)}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <RichText content={item.answer} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>


                    <p className="text-muted-foreground mt-6 px-8">
                        Can{"'"}t find what you{"'"}re looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
