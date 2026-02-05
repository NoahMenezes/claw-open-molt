import { Card } from '@/components/ui/card'
import { AlertTriangle, ShieldCheck } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-start">
                    <div className="sticky top-24 self-start">
                        <h2 className="text-4xl font-serif font-medium mb-4">Why choose us?</h2>
                        <p className="text-muted-foreground text-lg">
                            Because OpenClaw isn’t the hard part. Reliability is.
                        </p>
                    </div>
                    <div className="space-y-6">
                         <Card className="p-6 border-destructive/20 bg-destructive/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="size-5 text-destructive" />
                                <h3 className="font-bold">Most setups fail for boring reasons</h3>
                            </div>
                            <ul className="space-y-2">
                                {["Session drops", "Updates break configs", "Heavy tasks kill the server", "No alerts, no logs, no recovery plan"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="size-1.5 rounded-full bg-destructive" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="p-6 border-primary/20 bg-primary/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="size-5 text-primary" />
                                <h3 className="font-bold">We’ve already fought those battles</h3>
                            </div>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <p>Instead of spending nights debugging “why it stopped replying”, you get a virtual employee that stays online—with people to call when things get messy.</p>
                                <p className="font-medium text-foreground pt-3 border-t border-primary/10">
                                    Agency Advantage: <span className="text-muted-foreground font-normal">We move fast, customize freely, and don’t force you into a rigid template.</span>
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
