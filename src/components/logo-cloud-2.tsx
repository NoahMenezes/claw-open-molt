'use client'
import { Claude } from '@/components/ui/svgs/claude'
import { Slack } from '@/components/ui/svgs/slack'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { 
    WhatsApp, 
    Telegram, 
    Discord, 
    DigitalOcean, 
    Cloudflare, 
    OpenAI, 
    Hostinger,
    LumaDock,
    LightNode
} from '@/components/ui/svgs/social-logos'
import { motion } from 'framer-motion'

const partnerLogos = [
    { name: 'WhatsApp', icon: <WhatsApp className="h-7 w-auto" /> },
    { name: 'Telegram', icon: <Telegram className="h-7 w-auto" /> },
    { name: 'Discord', icon: <Discord className="h-7 w-auto" /> },
    { name: 'Slack', icon: <Slack className="h-7 w-auto" /> },
    { name: 'OpenAI', icon: <OpenAI className="h-6 w-auto" /> },
    { name: 'Claude', icon: <Claude className="h-7 w-auto" /> },
    { name: 'Vercel', icon: <VercelFull className="h-4 w-auto" /> },
    { name: 'Cloudflare', icon: <Cloudflare className="h-7 w-auto" /> },
    { name: 'DigitalOcean', icon: <DigitalOcean className="h-8 w-auto" /> },
    { name: 'Hostinger', icon: <Hostinger className="h-7 w-auto" /> },
    { name: 'LumaDock', icon: <LumaDock className="h-7 w-auto" /> },
    { name: 'LightNode', icon: <LightNode className="h-7 w-auto" /> },
]

export default function LogoCloud() {
    // Duplicate the logos to create a seamless loop
    const doubledLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos]

    return (
        <section className="bg-background py-16 border-y border-border/50 overflow-hidden relative">
            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <p className="text-center text-sm font-medium text-muted-foreground/80 mb-10">
                    Trusted to run across your favorite channels & infra
                </p>
            </div>
            
            <div className="flex select-none">
                <motion.div 
                    className="flex shrink-0 items-center justify-around gap-20 min-w-full"
                    animate={{ x: [0, '-33.33%'] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {doubledLogos.map((logo, i) => (
                        <div
                            key={`${logo.name}-${i}`}
                            className="flex items-center justify-center text-foreground hover:scale-110 transition-transform duration-300"
                        >
                            {logo.icon}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient overlays for smooth fading at the edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />
        </section>
    )
}
