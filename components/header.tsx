'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GithubIcon, Menu, Search } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block">OpenReactHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className={pathname === '/docs' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}
            >
              Documentation
            </Link>
            <Link
              href="/components"
              className={pathname.startsWith('/components') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}
            >
              Components
            </Link>
            <Link
              href="/examples"
              className={pathname.startsWith('/examples') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}
            >
              Examples
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2div">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search documentation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search documentation..."
                    className="block w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </SheetContent>
            </Sheet>
            <div className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="block w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Link href="https://github.com/openreacthub" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <ThemeToggle />
            <SidebarTrigger className="lg:hidden" />
          </nav>
        </div>
      </div>
      </div>
    </header>
  )
}

