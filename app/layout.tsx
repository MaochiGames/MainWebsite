import type React from "react"
import type { Metadata } from "next"
import { Bai_Jamjuree, Montserrat } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SiteChrome from "@/components/baselayout/SiteChrome"

export const metadata: Metadata = {
  title: "MaochiGames",
  description: "Experience the ultimate gaming universe with cutting-edge titles and immersive worlds.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
}

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bai-jamjuree",
})

const baiJamjureeRegular = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bai-jamjuree-regular",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "100"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${baiJamjuree.variable} ${baiJamjureeRegular.variable} ${montserrat.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <SiteChrome>{children}</SiteChrome>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
