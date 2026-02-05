'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroSection() {
    const words = ['Moltbot', 'OpenClaw', 'Clawdbot']
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="overflow-hidden">
            <section className="bg-background">
                <div className="relative py-32 md:pt-44">
                    <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5">
                        {/* Keeping the background image structure or you can update strictly if needed */}
                         <Image
                            src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="hero background"
                            width={2268}
                            height={1740}
                            className="size-full object-cover object-top"
                        />
                    </div>
                    <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-balance font-serif text-4xl font-medium sm:text-6xl flex flex-col items-center gap-2 sm:gap-4">
                                <span>Get a Virtual Employee with</span>
                                <div className="h-[1.2em] relative w-full flex justify-center overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={words[index]}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="text-red-500 font-bold block bg-red-500/10 px-4 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.3)] backdrop-blur-sm"
                                        >
                                            {words[index]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </h1>
                            <h2 className="mt-6 text-xl font-medium text-foreground">
                                We host it. We connect it. We keep it running.
                            </h2>
                            <p className="text-muted-foreground mt-4 text-balance text-lg">
                                OpenClaw as a virtual employee: VM hosted, channels connected, top skills enabled, monitored. No lock-in. Bring your own AI keys.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="pr-2 pl-4 rounded-full text-lg h-12">
                                    <Link href="https://wa.me/9145336569?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.">
                                        <span className="text-nowrap">Book a Call</span>
                                        <ChevronRight className="ml-2 size-5 opacity-50" />
                                    </Link>
                                </Button>
                                <p className="text-sm text-muted-foreground">
                                    Tell us what you want it to do. We’ll recommend a setup and share a quote.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
