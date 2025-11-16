import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Kids learning"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40 animate-gradient-shift" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            InstaEdu: Social Learning for Kids, Safe & Engaging
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
            Empower your child with safe, engaging, and interactive learning. Discover educational content through fun videos and images.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg font-semibold bg-white text-primary hover:bg-white/90">
              <a href={PROJECT_URL}>Start Their Learning Journey</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll to features"
      >
        <ArrowDown className="w-8 h-8" />
      </a>
    </section>
  )
}
