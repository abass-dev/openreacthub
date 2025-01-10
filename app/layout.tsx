import './globals.css'
import { Inter } from 'next/font/google'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenReactHub Documentation',
  description: 'Documentation for OpenReactHub, an open-source React and Next.js component library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SidebarProvider>
            <div className="flex w-full min-h-screen">
              <div className="hidden h-screen border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:block">
                <AppSidebar />
              </div>
              <div className="flex w-full flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

