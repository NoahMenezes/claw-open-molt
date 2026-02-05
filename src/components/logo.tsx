import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className="size-8 overflow-hidden">
                <video
                    src="/video/Bot.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="size-full object-cover scale-150"
                />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                ClawOpen
            </span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <div className={cn("size-8 overflow-hidden", className)}>
            <video
                src="/video/Bot.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover scale-150"
            />
        </div>
    )
}
