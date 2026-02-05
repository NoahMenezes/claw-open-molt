import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroHeader } from './header'
import { ChevronRight } from 'lucide-react'
import { Supabase } from '@/components/ui/svgs/supabase'
import { Slack } from '@/components/ui/svgs/slack'
import { Twilio } from '@/components/ui/svgs/twilio'
import { Linear } from '@/components/ui/svgs/linear'
import { Figma } from '@/components/ui/svgs/figma'
import { Vercel } from '@/components/ui/svgs/vercel'
import { Firebase } from '@/components/ui/svgs/firebase'
import { ClerkIconLight as Clerk } from '@/components/ui/svgs/clerk'
import { Claude } from '@/components/ui/svgs/claude'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="bg-background">
                    <div className="relative py-32 md:pt-44">
                        <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5">
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
                                <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">Get a Virtual Employee with<br /> Moltbot • OpenClaw • Clawdbot</h1>
                                <p className="text-muted-foreground mt-4 text-balance">We host it. We connect it. We keep it running.<br /> Your virtual employee: VM hosted, channels connected, top skills enabled, monitored.<br /> No lock-in. Bring your own AI keys.</p>

                                <Button
                                    asChild
                                    className="mt-6 pr-1.5 cursor-pointer">
                                    <Link href="#book-call">
                                        <span className="text-nowrap">Book a Call</span>
                                        <ChevronRight className="opacity-50" />
                                    </Link>
                                </Button>
                                <p className="text-xs text-muted-foreground mt-2">Tell us what you want it to do. We’ll recommend a setup and share a quote.</p>
                            </div>
                            <div className="mx-auto mt-24 max-w-xl">
                                <div className="**:fill-foreground grid scale-95 grid-cols-3 gap-12">
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Supabase className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Telegram</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Slack className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Slack</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Figma className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">WhatsApp</span>
                                        </Card>
                                    </div>
                                    <div className="mr-auto">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Vercel className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Discord</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Firebase className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Webhooks</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 mx-a flex h-10 h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Linear className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Custom</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Twilio className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Twilio</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 mx-a flex h-10 h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Claude className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Claude AI</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Clerk className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Moltbot</span>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
