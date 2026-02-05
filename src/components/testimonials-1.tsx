import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Testimonial } from '@/payload-types'

export default async function Testimonials() {
  const payload = await getPayload({ config })

  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    limit: 100,
    depth: 1, // ensure avatar media is populated
  })

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="bg-background @container py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="space-y-4">
          <h2 className="text-balance font-serif text-4xl font-medium">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-balance">
            Hear from the teams and individuals who have transformed their workflow with our platform.
          </p>
        </div>

        <div className="@xl:grid-cols-2 mt-12 grid gap-3">
          {testimonials.map((testimonial: Testimonial) => {
            const avatar =
              testimonial.avatar && typeof testimonial.avatar !== 'string'
                ? testimonial.avatar
                : null

            return (
              <div
                key={testimonial.id}
                className="bg-card ring-border text-foreground space-y-3 rounded-2xl p-4 text-sm ring-1"
              >
                <div className="flex gap-3">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/10">
                    {avatar?.url && (
                      <Image
                        src={avatar.url}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="size-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  {testimonial.quote}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
