'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Package, FileText, Cpu, Lightbulb, Terminal, Code, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

const docsNavItems = [
  { title: 'Introduction', url: '/docs', icon: FileText },
  { title: 'Getting Started', url: '/docs/getting-started', icon: Lightbulb },
  { title: 'Theming', url: '/docs/theming', icon: Package },
  { title: 'CLI', url: '/docs/cli', icon: Terminal },
  { title: 'Developing CLI', url: '/docs/contributing/developing-cli', icon: Code },
]

const componentsNavItems = [
  { title: 'Button', url: '/components/button' },
  { title: 'Card', url: '/components/card' },
  { title: 'Dialog', url: '/components/dialog' },
  { title: 'Input', url: '/components/input' },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setMobileOpen] = React.useState(false)

  const toggleMobileSidebar = () => setMobileOpen((prev) => !prev)

  return (
    <Sidebar className="h-full" side="right">
      <SidebarHeader className="border-b px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Go to OpenReactHub home">
          <Package className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">OpenReactHub</span>
        </Link>
        {/* Toggle button for mobile */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={toggleMobileSidebar}
          aria-label="Toggle sidebar"
        >
          <Cpu className="h-5 w-5" />
        </button>
      </SidebarHeader>
      <div className={`lg:block ${isMobileOpen ? 'block' : 'hidden'}`}>
        <ScrollArea className="flex-1">
          <SidebarContent className="p-4">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-9"
                  aria-label="Search documentation and components"
                />
              </div>
            </div>
            {/* Documentation Links */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-base font-semibold px-2">Documentation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {docsNavItems.map((item) => (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                        className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 ${
                          pathname === item.url ? 'bg-accent text-primary' : 'hover:bg-accent'
                        }`}
                      >
                        <Link href={item.url} aria-current={pathname === item.url ? 'page' : undefined}>
                          <item.icon className="h-4 w-4" aria-hidden="true" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {/* Components Links */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-base font-semibold px-2 mt-6">Components</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {componentsNavItems.map((item) => (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                        className={`flex w-full items-center rounded-lg px-2 py-2 ${
                          pathname === item.url ? 'bg-accent text-primary' : 'hover:bg-accent'
                        }`}
                      >
                        <Link href={item.url} aria-current={pathname === item.url ? 'page' : undefined}>
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </ScrollArea>
      </div>
    </Sidebar>
  )
}
