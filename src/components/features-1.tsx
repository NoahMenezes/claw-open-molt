import { Card } from '@/components/ui/card'
import { Server, Share2, Zap, Activity } from 'lucide-react'

export default function Features() {
    const steps = [
        {
            title: "We deploy your instance",
            icon: Server,
            description: "Provision a VM based on your workload. Deploy OpenClaw/Moltbot/Clawdbot in a clean, maintainable setup. Configure stability defaults from day one.",
            bullets: ["Provision VM", "Clean Deployment", "Custom Setup"]
        },
        {
            title: "We connect your channels",
            icon: Share2,
            description: "Whatever you need: WhatsApp, Telegram, Slack, Discord, Webhooks / custom routes.",
            bullets: ["WhatsApp & Telegram", "Slack & Discord", "Custom Webhooks"]
        },
        {
            title: "We enable popular skills",
            icon: Zap,
            description: "Based on your use-case: inbox help (draft, summarize), calendar, research, content writing, workflow automations, browser-based tasks.",
            bullets: ["Inbox & Calendar", "Research & Writing", "Browser Automation"]
        },
        {
            title: "We monitor + maintain",
            icon: Activity,
            description: "Uptime monitoring, auto-restart, logs + backups, safe update assistance, troubleshooting when upstream platforms break things.",
            bullets: ["Uptime Monitoring", "Logs & Backups", "Troubleshooting"]
        }
    ]

    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16">
                    <h2 className="text-balance font-serif text-4xl font-medium">What we exactly do?</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">We turn OpenClaw into a managed service for you.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {steps.map((step, index) => (
                        <Card key={index} className="p-8 space-y-4 hover:bg-secondary/10 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <step.icon className="size-6" />
                                </div>
                                <h3 className="text-xl font-bold font-serif">{index + 1}) {step.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{step.description}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                                {step.bullets.map((bullet, i) => (
                                    <li key={i} className="text-sm font-medium flex items-center gap-2">
                                        <span className="size-1.5 rounded-full bg-primary" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                     <p className="text-muted-foreground text-lg mb-6">
                        We move fast, customize freely, and don’t force you into a rigid template.
                    </p>
                </div>
            </div>
        </section>
    )
}
