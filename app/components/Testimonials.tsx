'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Parent at Busy Mom Blog',
    quote: "InstaEdu has transformed screen time into learning time for my kids! They love the interactive videos, and I love the peace of mind from parental controls.",
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'David M.',
    role: 'Educator at Elementary School Teacher',
    quote: "As an educator, I appreciate how InstaEdu makes learning fun and accessible. It's truly like a TikTok for education, but safe and curated.",
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Jessica R.',
    role: 'Digital Marketing Specialist at Tech Solutions',
    quote: "My son used to be glued to mindless videos. Now, with InstaEdu, he's actively discovering science facts and history lessons. Highly recommend!",
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Mark T.',
    role: 'Stay-at-Home Dad',
    quote: "The moderation team is fantastic. It's so reassuring to know my kids are interacting in a positive, educational environment without inappropriate content.",
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Emily H.',
    role: 'Child Psychologist at Bright Minds Clinic',
    quote: "The gamified approach to learning on InstaEdu keeps children engaged, and the parental oversight features are crucial for healthy digital development.",
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Robert P.',
    role: 'Software Engineer at Innovate Corp.',
    quote: "Finally, a platform that understands how kids learn today. InstaEdu's personalized feeds mean my daughter is always discovering new, exciting educational content.",
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Trusted by Parents & Educators
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            See what families and educators are saying about InstaEdu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={`${currentIndex}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-balance">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground text-pretty">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
