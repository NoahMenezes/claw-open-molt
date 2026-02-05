'use client'
import { Claude } from '@/components/ui/svgs/claude'
import { Slack } from '@/components/ui/svgs/slack'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { WhatsApp, Telegram, Discord, DigitalOcean, Cloudflare } from '@/components/ui/svgs/social-logos'
import { AnimatePresence, motion } from 'framer-motion'

const partnerLogos = [
    { name: 'WhatsApp', icon: <WhatsApp className="h-6 w-auto" /> },
    { name: 'Telegram', icon: <Telegram className="h-6 w-auto" /> },
    { name: 'Discord', icon: <Discord className="h-6 w-auto" /> },
    { name: 'Slack', icon: <Slack className="h-6 w-auto" /> },
    { name: 'Claude', icon: <Claude className="h-6 w-auto" /> },
    { name: 'Vercel', icon: <VercelFull className="h-4 w-auto" /> },
    { name: 'DigitalOcean', icon: <DigitalOcean className="h-6 w-auto" /> },
    { name: 'Cloudflare', icon: <Cloudflare className="h-6 w-auto" /> },
]

export default function LogoCloud() {
    return (
        <section className="bg-background py-16 border-y border-border/50">
            <div className="mx-auto max-w-5xl px-6">
                <p className="text-center text-sm font-medium text-muted-foreground mb-10">
                    Trusted to run across your favorite channels & infra
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partnerLogos.map((logo, i) => (
                        <motion.div
                            key={logo.name}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {logo.icon}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

