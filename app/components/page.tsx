import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { ArrowRight, BoxIcon as ButtonIcon, CreditCard, Layers, SlidersHorizontal, Type } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Components | OpenReactHub',
  description: 'Explore the components available in the OpenReactHub library',
}

const components = [
  { name: 'Button', description: 'A clickable button element with multiple variants and sizes.', icon: ButtonIcon },
  { name: 'Card', description: 'A container for content with header, footer, and content sections.', icon: CreditCard },
  { name: 'Dialog', description: 'A modal dialog that interrupts the user with important content.', icon: Layers },
  { name: 'Input', description: 'An input field for collecting user data with various states.', icon: Type },
  { name: 'Select', description: 'A dropdown select component with support for groups and search.', icon: SlidersHorizontal },
]

export default function ComponentsPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">Components</h1>
          <p className="text-xl text-muted-foreground">
            Explore the components available in the OpenReactHub library. Each component is designed to be accessible, customizable, and easy to use.
          </p>
        </div>
      </div>
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card key={component.name} className="flex flex-col transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{component.name}</CardTitle>
                <component.icon className="w-8 h-8 text-primary" />
              </div>
              <CardDescription className="mt-2">{component.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href={`/components/${component.name.toLowerCase()}`} className="flex items-center justify-center">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

