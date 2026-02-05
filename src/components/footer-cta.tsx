import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FooterCTA() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          Want a virtual employee that stays online?
        </h2>
        <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 text-lg h-12">
                <Link href="#contact">Book a Call</Link>
            </Button>
            <p className="text-muted-foreground text-lg">
                Tell us what you want it to do. We’ll recommend the setup and share a quote.
            </p>
        </div>
      </div>
    </section>
  )
}
