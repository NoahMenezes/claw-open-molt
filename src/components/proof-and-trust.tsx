'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Check, X, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProofAndTrust() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "What you’re actually getting",
      accent: "text-primary",
      borderColor: "border-primary",
      icon: Check,
      items: [
        "Managed VM hosting (we deploy + maintain the instance)",
        "Monitoring + auto-restart (prevents silent downtime)",
        "Backups + logs (so recovery is quick)",
        "Safe update flow (avoid random breaks)",
        "Best-effort support (when upstream platforms change things)"
      ]
    },
    {
      title: "What you don't need to worry about..",
      accent: "text-muted-foreground",
      borderColor: "border-muted-foreground",
      icon: X,
      items: [
        "No lock-in platform",
        "No forced AI billing",
        "No “figure it out yourself” docs"
      ]
    },
    {
        title: "You control",
        accent: "text-green-600",
        borderColor: "border-green-600",
        icon: Lock,
        items: [
          "Your AI keys",
          "Your instance and data boundaries",
          "What the bot is allowed to do"
        ]
      }
  ]

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    Proof and trust
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The boring infra solved.</h2>
                <p className="text-muted-foreground text-lg">
                    We run your OpenClaw like production software so it stays online and predictable.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex p-1 bg-muted rounded-full">
                    {tabs.map((tab, _idx) => (
                        <button
                            key={_idx}
                            onClick={() => setActiveTab(_idx)}
                            className={cn(
                                "flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                activeTab === _idx ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                           <span className="hidden sm:inline">{tab.title.split(' ')[0]}...</span>
                           <span className="sm:hidden">{_idx + 1}</span>
                        </button>
                    ))}
                </div>

                <Card className="p-8 min-h-[300px] relative overflow-hidden transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                    <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50", tabs[activeTab].borderColor.replace('border-', 'bg-'))} />
                    
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
                        <h3 className="text-xl font-bold">{tabs[activeTab].title}</h3>
                        <ul className="space-y-4">
                            {tabs[activeTab].items.map((item, i) => {
                                const Icon = tabs[activeTab].icon
                                return (
                                <li key={i} className="flex items-start gap-3">
                                    <Icon className={cn("size-5 mt-0.5 shrink-0", tabs[activeTab].accent)} />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
      </div>
    </section>
  )
}
