"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

type SiteChromeProps = {
  children: React.ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  // Rebrand notice dismissal is disabled for now, so the notice always shows.
  // To re-enable: restore this state, the two blocks below, and the button's onClick.
  // const [isRebrandNoticeOpen, setIsRebrandNoticeOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const shouldUseDark = storedTheme ? storedTheme === "dark" : true

    document.documentElement.classList.toggle("dark", shouldUseDark)
  }, [])

  // useEffect(() => {
  //   try {
  //     setIsRebrandNoticeOpen(localStorage.getItem("rebrandNoticeDismissed") !== "true")
  //   } catch {
  //     setIsRebrandNoticeOpen(true)
  //   }
  // }, [])

  // Darken the header once the page scrolls so the white logo stays visible over light sections
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // const dismissRebrandNotice = () => {
  //   setIsRebrandNoticeOpen(false)
  //   try {
  //     localStorage.setItem("rebrandNoticeDismissed", "true")
  //   } catch {}
  // }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[10vh]">
            <div className="mr-3 flex min-w-0 items-center gap-3 sm:gap-6 lg:gap-12">
              <Link href="/" className="flex shrink-0 items-center">
                <img
                  src="/company-logo.png"
                  alt="Labrats Studios"
                  className="w-auto h-auto max-w-[35vw] sm:max-w-[10vw] max-h-[8vh] object-contain"
                />
              </Link>

              {/* Rebrand notice */}
              {/* {isRebrandNoticeOpen && ( */}
                <div
                  role="status"
                  className="flex min-w-0 items-center gap-2 rounded-md bg-green-500 py-1.5 pl-2 pr-1.5 text-black shadow-lg sm:gap-2.5 sm:py-2 sm:pl-2.5 sm:pr-2"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black font-serif text-xs font-bold italic text-green-400 sm:h-6 sm:w-6 sm:text-sm"
                  >
                    i
                  </span>
                  <span className="text-[11px] font-semibold leading-tight sm:text-[13px]">
                    MaochiGames is now Labrats Studios
                  </span>
                  <button
                    type="button"
                    // onClick={dismissRebrandNotice}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="group shrink-0 cursor-pointer rounded-sm p-0.5 text-black"
                  >
                    <X
                      size={16}
                      strokeWidth={3}
                      className="transition-transform duration-200 ease-out group-hover:scale-150"
                    />
                  </button>
                </div>
              {/* )} */}
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
                  href="/projects"
                  className="text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                >
                  PROJECTS
                </Link>
                <div className="relative hidden group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                    aria-haspopup="true"
                  >
                    SERVICES
                    <ChevronDown size={14} className="text-foreground/70 group-hover:text-primary" />
                  </button>
                  <div className="absolute left-0 top-full w-74 pt-2 opacity-0 pointer-events-none transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto">
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
                          href="/#web-application-development"
                          className="block px-4 py-[0.6rem] text-left text-sm text-foreground/80 hover:text-red-500 hover:bg-muted/60 active:bg-muted/80 active:text-red-500 cursor-pointer"
                      >
                        WEB & APPLICATION DEVELOPMENT
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
                  href="/games"
                  className="text-[14px] text-foreground hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-red-500 pb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                >
                  GAMES
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
              <Link
                href="/#home"
                className="block px-3 py-2 text-foreground hover:text-primary"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
              <Link
                href="/#our-team"
                className="block px-3 py-2 text-foreground hover:text-primary"
                onClick={closeMobileMenu}
              >
                OUR TEAM
              </Link>
              <Link
                href="/projects"
                className="px-3 py-2 text-foreground hover:text-primary"
                onClick={closeMobileMenu}
              >
                PROJECTS
              </Link>
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="hidden w-full items-center justify-between px-3 py-2 text-foreground hover:text-primary"
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
                <div id="mobile-services-menu" className="hidden space-y-1 pb-1">
                  <Link
                    href="/#ui-ux-design"
                    className="block px-6 py-2 text-foreground hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    UI/UX DESIGN
                  </Link>
                  <Link
                    href="/#game-asset-creation"
                    className="block px-6 py-2 text-foreground hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    GAME ASSET CREATION
                  </Link>
                  <Link
                    href="/#game-development"
                    className="block px-6 py-2 text-foreground hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    GAME DEVELOPMENT
                  </Link>
                  <Link
                    href="/#web-application-development"
                    className="block px-6 py-2 text-foreground hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    WEB & APPLICATION DEVELOPMENT
                  </Link>
                  <Link
                    href="/#cgi-video-production"
                    className="block px-6 py-2 text-foreground hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    CGI & VIDEO PRODUCTION
                  </Link>
                </div>
              )}
              <Link
                href="/games"
                className="block px-3 py-2 text-foreground hover:text-primary"
                onClick={closeMobileMenu}
              >
                GAMES
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </nav>

      {children}

      {/* Footer */}
      <footer className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/40" />
          <div className="absolute right-0 top-0 hidden h-full w-[80%] lg:block">
            <img
              src="/footer_side.png"
              alt=""
              className="h-full w-full object-cover opacity-60 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/100 to-transparent" />
          </div>
        </div>

        <div className="relative w-full px-0 py-10 pl-[5px]">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-black/40 p-3 sm:h-24 sm:w-24 sm:p-4 md:h-56 md:w-56 md:p-8">
              <img src="/mainicon.png" alt="Labrats Studios" className="h-auto w-full" />
            </div>
            <div className="max-w-xl space-y-2 text-xs text-white/85 sm:text-sm">
              <p className="text-lg font-semibold text-white sm:text-4xl md:text-4xl">Labrats Studios</p>
              {/*<p>
                19th Floor, OMM Citra Bldg., 39 San Miguel Avenue,
                <br />
                Brgy. San Antonio, Pasig City, Philippines 1605
              </p>*/}
              <p className="text-lg text-white/70">
                {/*Level 24 One Bonifacio High Street,*/}
                {/*<br />*/}
                {/*Bonifacio Global City, Philippines 1634*/}
                Cavite, Philippines 4107
              </p>
              <p className="text-lg text-white/70">contact@labratzstudios.com</p>
            </div>
          </div>

          <div className="mt-3 ml-5 text-xs text-white/50 sm:mt-2 sm:ml-5 sm:text-base md:-mt-2 md:ml-10 md:grid md:grid-cols-1 md:items-center">
            <span className="md:col-start-1">© 2019 Labrats Studios. Philippines. All Rights Reserved.</span>
          </div>

          <div className="mt-3 flex flex-col items-center gap-2 text-center landscape:flex-col landscape:items-center sm:w-full sm:items-center md:col-start-2 md:mt-0 md:w-auto md:flex-row md:justify-center md:gap-6 md:landscape:flex-row lg:col-start-2 lg:mt-0 lg:w-auto lg:flex-row lg:justify-center lg:gap-6 lg:landscape:flex-row">
            <Link href="/terms-of-use" className="text-white/70 hover:text-white">
              TERMS OF USE
            </Link>
            <Link href="/privacy-policy" className="text-white/70 hover:text-white">
              PRIVACY POLICY
            </Link>
          </div>
          
          
        </div>
      </footer>
    </div>
  )
}
