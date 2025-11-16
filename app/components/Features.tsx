'use client'

import { BookOpen, Shield, Sparkles, MessageSquare, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const features = [
  {
    icon: BookOpen,
    title: 'Curated Educational Content',
    description: 'Engaging videos & images across subjects for safe discovery.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: Shield,
    title: 'Parental Oversight',
    description: 'Monitor activity, manage profiles, and ensure a secure learning journey.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: Sparkles,
    title: 'Personalized Learning Feeds',
    description: 'Tailored content recommendations based on interests and progress.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: MessageSquare,
    title: 'Interactive Engagement',
    description: "'Like' content and safely interact within a moderated community.",
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: Users,
    title: 'Strictly Moderated Community',
    description: 'Fosters positive interactions and collaborative learning in a safe space.',
    image: '/placeholder.svg?height=300&width=400',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything Your Child Needs to Learn Safely
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Discover how InstaEdu combines education with engagement in a secure environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 w-full">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-balance">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
