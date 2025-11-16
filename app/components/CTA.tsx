import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'
import { Shield, Users, Award } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden animate-gradient-shift">
      <div className="absolute inset-0 bg-black/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Child's Screen Time?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
            Join thousands of families who trust InstaEdu for safe, engaging, and educational content
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg font-semibold bg-white text-primary hover:bg-white/90 mb-12"
          >
            <a href={PROJECT_URL}>Start Their Learning Journey</a>
          </Button>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-12 h-12" />
              <h3 className="font-semibold text-balance">100% Safe</h3>
              <p className="text-sm text-white/80 text-pretty">Moderated content</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="w-12 h-12" />
              <h3 className="font-semibold text-balance">10,000+ Families</h3>
              <p className="text-sm text-white/80 text-pretty">Trust InstaEdu</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-12 h-12" />
              <h3 className="font-semibold text-balance">Award Winning</h3>
              <p className="text-sm text-white/80 text-pretty">EdTech platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
