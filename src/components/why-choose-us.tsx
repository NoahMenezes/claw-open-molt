import { Card } from '@/components/ui/card'
import { AlertTriangle, ShieldCheck } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why choose us?</h2>
            <p className="mt-4 text-xl text-muted-foreground w-full max-w-3xl mx-auto">
                Because OpenClaw isn’t the hard part. Reliability is.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-destructive/20 bg-destructive/5">
                <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="size-6 text-destructive" />
                    <h3 className="text-xl font-bold">Most setups fail for boring reasons</h3>
                </div>
                <ul className="space-y-3">
                    {["Session drops", "Updates break configs", "Heavy tasks kill the server", "No alerts, no logs, no recovery plan"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="size-1.5 rounded-full bg-destructive" />
                            {item}
                        </li>
                    ))}
                </ul>
            </Card>

            <Card className="p-8 border-primary/20 bg-primary/5">
                <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck className="size-6 text-primary" />
                    <h3 className="text-xl font-bold">We’ve already fought those battles</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                    <p>So instead of spending nights debugging “why it stopped replying”, you get a virtual employee that stays online—with people to call when things get messy.</p>
                    <p className="font-medium text-foreground pt-4 border-t border-primary/10">
                        Agency Advantage: <span className="text-muted-foreground font-normal">We move fast, customize freely, and don’t force you into a rigid template.</span>
                    </p>
                </div>
            </Card>
        </div>
      </div>
    </section>
  )
}
