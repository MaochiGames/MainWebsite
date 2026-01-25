import type React from "react"
import type { Metadata } from "next"
import { Bai_Jamjuree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SiteChrome from "@/components/SiteChrome"

export const metadata: Metadata = {
  title: "MaochiGames",
  description: "Experience the ultimate gaming universe with cutting-edge titles and immersive worlds.",
  generator: "v0.app",
}

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bai-jamjuree",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${baiJamjuree.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <SiteChrome>{children}</SiteChrome>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
