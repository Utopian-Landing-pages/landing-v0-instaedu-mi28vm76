import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

const pricingPlans = [
  {
    name: 'Free',
    price: 'Free',
    features: ['Limited Content', 'Basic Access', 'Ad-supported'],
    cta: 'Explore Free Content',
    popular: false,
  },
  {
    name: 'Monthly Premium',
    price: '$9.99/month',
    features: ['Full Curated Content', 'Advanced Parental Controls', 'Ad-free'],
    cta: 'Subscribe Monthly',
    popular: false,
  },
  {
    name: 'Annual Premium',
    price: '$99.99/year',
    features: ['Full Curated Content', 'Advanced Parental Controls', 'Ad-free', 'Save $20/year'],
    cta: 'Save with Annual',
    popular: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Choose the Right Plan for Your Family
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Start free or unlock premium features for the ultimate learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? 'border-primary shadow-xl scale-105'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2 text-balance">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary">{plan.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-pretty">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <a href={PROJECT_URL}>{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
