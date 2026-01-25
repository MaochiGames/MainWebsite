"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Twitter, Youtube, Twitch, Instagram, ChevronDown } from "lucide-react"

type SiteChromeProps = {
  children: React.ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const shouldUseDark = storedTheme ? storedTheme === "dark" : true

    document.documentElement.classList.toggle("dark", shouldUseDark)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[10vh]">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/maochi-games-logo.png"
                  alt="Maochi Games"
                  className="w-[35vw] sm:w-[25vw] md:w-[10vw] sm:pt-[20vw] h-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link
                  href="/#home"
                  className="text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                >
                  HOME
                </Link>
                <Link
                  href="/#our-team"
                  className="text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                >
                  OUR TEAM
                </Link>
                <Link
                  href="/#work"
                  className="text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                >
                  WORK
                </Link>
                <div className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                    aria-haspopup="true"
                  >
                    SERVICES
                    <ChevronDown size={14} className="text-foreground/70 group-hover:text-primary" />
                  </button>
                  <div className="absolute left-0 top-full w-64 pt-2 opacity-0 pointer-events-none transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto">
                    <div className="rounded-md border border-border/60 bg-black/70 backdrop-blur-md shadow-lg py-1">
                      <Link
                        href="/#ui-ux-design"
                        className="block px-4 py-[0.6rem] text-left text-sm text-foreground/80 hover:text-red-500 hover:bg-muted/60 active:bg-muted/80 active:text-red-500 cursor-pointer"
                      >
                        UI/UX DESIGN
                      </Link>
                      <Link
                        href="/#game-asset-creation"
                        className="block px-4 py-[0.6rem] text-left text-sm text-foreground/80 hover:text-red-500 hover:bg-muted/60 active:bg-muted/80 active:text-red-500 cursor-pointer"
                      >
                        GAME ASSET CREATION
                      </Link>
                      <Link
                        href="/#game-development"
                        className="block px-4 py-[0.6rem] text-left text-sm text-foreground/80 hover:text-red-500 hover:bg-muted/60 active:bg-muted/80 active:text-red-500 cursor-pointer"
                      >
                        GAME DEVELOPMENT
                      </Link>
                      <Link
                        href="/#cgi-video-production"
                        className="block px-4 py-[0.6rem] text-left text-sm text-foreground/80 hover:text-red-500 hover:bg-muted/60 active:bg-muted/80 active:text-red-500 cursor-pointer"
                      >
                        CGI & VIDEO PRODUCTION
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  href="/#ips"
                  className="text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                >
                  ORIGINAL IPs
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-red-600 text-white hover:bg-red-500 transition-colors duration-200 px-3 py-1.5 rounded-none text-[14px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                >
                  CONTACT US
                </Link>
                {/*<button*/}
                {/*  onClick={handleThemeToggle}*/}
                {/*  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/60 text-foreground hover:text-primary transition-colors"*/}
                {/*  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}*/}
                {/*>*/}
                {/*  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}*/}
                {/*</button>*/}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/#home" className="block px-3 py-2 text-foreground hover:text-primary">
                HOME
              </Link>
              <Link href="/#our-team" className="block px-3 py-2 text-foreground hover:text-primary">
                OUR TEAM
              </Link>
              <Link href="/#work" className="block px-3 py-2 text-foreground hover:text-primary">
                WORK
              </Link>
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-3 py-2 text-foreground hover:text-primary"
                aria-expanded={isServicesOpen}
                aria-controls="mobile-services-menu"
              >
                <span>SERVICES</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesOpen && (
                <div id="mobile-services-menu" className="space-y-1 pb-1">
                  <Link href="/#ui-ux-design" className="block px-6 py-2 text-foreground hover:text-primary">
                    UI/UX DESIGN
                  </Link>
                  <Link
                    href="/#game-asset-creation"
                    className="block px-6 py-2 text-foreground hover:text-primary"
                  >
                    GAME ASSET CREATION
                  </Link>
                  <Link href="/#game-development" className="block px-6 py-2 text-foreground hover:text-primary">
                    GAME DEVELOPMENT
                  </Link>
                  <Link
                    href="/#cgi-video-production"
                    className="block px-6 py-2 text-foreground hover:text-primary"
                  >
                    CGI & VIDEO PRODUCTION
                  </Link>
                </div>
              )}
              <Link href="/#ips" className="block px-3 py-2 text-foreground hover:text-primary">
                ORIGINAL IPs
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary">
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </nav>

      {children}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">NEXUS</div>
              <p className="text-muted-foreground text-pretty">
                Creating extraordinary gaming experiences that bring players together from around the world.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Games</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Legends of Nexus
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Shadow Realm
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cyber Strike
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitch size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Nexus Gaming. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
