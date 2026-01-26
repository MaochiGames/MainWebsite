"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Trophy, Zap } from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll(".fade-in")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleScrollAnimation)
    handleScrollAnimation() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleScrollAnimation)
    }
  }, [])

  useEffect(() => {
    const heroVideo = document.querySelector('video[autoplay]') as HTMLVideoElement
    if (isVideoOpen && heroVideo) {
      heroVideo.pause()
    } else if (!isVideoOpen && heroVideo) {
      heroVideo.play()
    }
  }, [isVideoOpen])

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Videos/HomePageVideoClips.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/*<h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text text-balance">*/}
          {/*  ENTER THE*/}
          {/*  <span className="text-primary block">ARENA</span>*/}
          {/*</h1>*/}
          {/*<p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty">*/}
          {/*  Experience the ultimate gaming universe where legends are born and champions rise.*/}
          {/*</p>*/}
          {/* Content intentionally minimal; CTA moved to bottom of viewport */}
        </div>
        {/*<div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-10">*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    className="group inline-flex items-stretch border border-border/10 bg-white/10 text-foreground/10 backdrop-blur-sm transition-colors hover:border-border scale-[1.25]"*/}
        {/*    aria-label="Showreel"*/}
        {/*    onClick={() => setIsVideoOpen(true)}*/}
        {/*  >*/}
        {/*    <span className="flex items-center justify-center border-r border-red-500/80 bg-red-500/75 text-red-400 w-[20%] min-w-[44px]">*/}
        {/*      <Play size={18} className="group-hover:text-red-300" />*/}
        {/*    </span>*/}
        {/*    <span className="flex items-center justify-center px-5 py-4 text-sm tracking-[0.125em] uppercase text-foreground/60 group-hover:text-foreground/80">*/}
        {/*      REELS*/}
        {/*    </span>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </section>
      {/* Our Company Section */}
        <section id="our-company" className="relative min-h-[100svh] md:h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0"
              style={{
                backgroundImage: `url('/Background-Image1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            />
          <div
              className="absolute inset-0 w-full parallax our-company-overlay"
              style={{
                backgroundImage: "url('/Diagonal_black_reverse_trans_80.png')",
                backgroundRepeat: "no-repeat",
              }}
          />
          <div
              className="absolute inset-0 pointer-events-none"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              <img
                src="/TitanZero_Carnage_HeroStyle2.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
                className="absolute inset-0 w-full parallax opacity-90 our-company-overlay-wide"
                style={{
                  backgroundImage: "url('/Diagonal_black_trans_80.png')",
                  backgroundRepeat: "no-repeat",
                }}
            />

            <div className="relative z-10 flex min-h-[100svh] md:min-h-[80vh] items-end md:items-center">
             <div className="hidden portrait:block">
                 {/* PORTRAIT */}
                 <div className="w-full sm:w-[50sv] md:w-[50sv] lg:w-[100sv] pl-6 sm:pl-10 md:pl-[3vh] lg:pl-[5vh] pr-6 sm:pr-8 md:pr-10 pt-8 sm:pt-0 md:pt-[60vh] lg:pt-[60vh] pb-0 sm:pb-16 mb:pb-16 lg:pb-16 text-left text-white/60 our-company-text">
                     <img
                         src="/maochi-games-logo.png"
                         alt="Maochi Games"
                         className="mb-5 w-[180px] sm:w-[100px] md:w-[338px] h-auto object-contain"
                     />
                     <p className="text-[12px] sm:text-[16px] md:text-[16px] lg:text-[22px] leading-relaxed pt-0 sm:pt-0 md:pt-0 lg:pt-0 pb-0 sm:pb-0 md:pb-0 lg:pb-0">
                         Our studio was founded by <span className="text-white/90">John Chung</span>, a passionate technologist and blockchain enthusiast with a deep
                         love for gaming. What began as a collaboration with his close friend <span className="text-white/90">Oliver Resada</span> evolved into a strong,
                         unified vision for building exceptional games.
                     </p>
                     <p className="mt-5 sm:mt-6 md:mt-6 lg:mt-6 text-[12px] sm:text-[16px] md:text-[16px] lg:text-[22px] leading-relaxed pt-0 sm:pt-0 md:pt-0 lg:pt-0 pb-5 sm:pb-5 md:pb-5 lg:pb-5">
                         Today, the studio is powered by a diverse team of industry veterans, bringing together experience from
                         both <span className="text-white/90">AAA studios</span> and <span className="text-white/90">independent game development</span> to create innovative and immersive gaming experiences.
                     </p>
                 </div>
             </div>
            <div className="block portrait:hidden">
                {/* LANDSCAPE */}
                <div className="pl-6 sm:pl-10 md:pl-[10vh] lg:pl-[5vh] pr-6 sm:pr-8 md:pr-10 lg:pr-0 pt-8 sm:pt-[80vh] md:pt-[60vh] lg:pt-[60vh] text-left text-white/60 our-company-text">
                    <img
                        src="/maochi-games-logo.png"
                        alt="Maochi Games"
                        className="mb-5 w-[180px] sm:w-[150px] md:w-[150px] lg:w-[338px] h-auto object-contain"
                    />
                    <p className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[22px] leading-relaxed pt-0 sm:pt-0 md:pt-0 lg:pt-0 pb-0 sm:pb-0 md:pb-0 lg:pb-0">
                        Our studio was founded by <span className="text-white/90">John Chung</span>, a passionate technologist and blockchain enthusiast with a deep
                        love for gaming. What began as a collaboration with his close friend <span className="text-white/90">Oliver Resada</span> evolved into a strong,
                        unified vision for building exceptional games.
                    </p>
                    <p className="mt-5 sm:mt-6 md:mt-6 lg:mt-6 text-[12px] sm:text-[10px] md:text-[12px] lg:text-[22px] leading-relaxed pt-0 sm:pt-0 md:pt-0 lg:pt-0 pb-5 sm:pb-5 md:pb-5 lg:pb-5">
                        Today, the studio is powered by a diverse team of industry veterans, bringing together experience from
                        both <span className="text-white/90">AAA studios</span> and <span className="text-white/90">independent game development</span> to create innovative and immersive gaming experiences.
                    </p>
                </div>


            </div>
                
        </div>
      </section>
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-[60vw] h-[60vh] min-w-[280px] min-h-[200px] max-w-[90vw] max-h-[90vh] border border-border/60 bg-black/80 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-red-600 text-white hover:bg-red-500"
              aria-label="Close video"
            >
              X
            </button>
            <iframe
              className="h-full w-full"
              
              /* 
              *  Make sure to follow the additional parameters that will work with iFrame just in case you forgot or remove here is the 
              *  link: https://www.youtube.com/embed/dO2rM-l-vdQ?autoplay=1&rel=0&controls=0&modestbranding=1&fs=0&disablekb=1&iv_load_policy=3
              */
              src="https://www.youtube.com/embed/dO2rM-l-vdQ?autoplay=1&rel=0&controls=0&modestbranding=1&fs=0&disablekb=1&iv_load_policy=3"
              title="Showreel video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Games Section */}
      <section id="games" className="hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-bold mb-4 text-balance">Our Games</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover worlds beyond imagination with our collection of groundbreaking titles.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]">
            {[
              {
                title: "Legends of Nexus",
                description: "Epic MOBA battles with strategic depth",
                image: "futuristic MOBA game arena with glowing towers",
                status: "Live",
              },
              {
                title: "Shadow Realm",
                description: "Dark fantasy RPG adventure",
                image: "dark fantasy castle with mystical creatures",
                status: "Beta",
              },
              {
                title: "Cyber Strike",
                description: "Fast-paced tactical shooter",
                image: "cyberpunk cityscape with neon lights and combat",
                status: "Coming Soon",
              },
              {
                title: "Titan Zero Cold War",
                description: "A 5v5 competitive mech game on VR",
                image: "mech battle arena with pilots and holographic HUDs",
                status: "Coming Soon",
              },
            ].map((game, index) => (
              <Card
                key={index}
                className="fade-in group w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw] shrink-0 hover:scale-105 transition-all duration-300 bg-card border-border overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=400&query=${game.image}`}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        game.status === "Live"
                          ? "bg-green-600 text-white"
                          : game.status === "Beta"
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {game.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* We Worked With */}
      <section id="we-worked-with" className="py-20 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-5xl font-bold mb-4 text-balance">We Worked With</h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto text-pretty">
              Trusted by studios and teams across games, entertainment, and technology.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Alphack Studios", logo: "" },
              { name: "Clique Games", logo: "/Partners/Partners_CliqueGames.png" },
              { name: "Nissin", logo: "/Partners/Partners_Nissin.png" },
              { name: "The Young Socratics", logo: "/Partners/Partners_TheYoungSocratics.png" },
              { name: "Naughty Dog", logo: "/Partners/Partners_NaughtyDog.png" },
              { name: "Microsoft", logo: "/Partners/Partners_Microsoft.png" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="fade-in flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black"
              >
                {partner.logo ? (
                  <>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 w-auto object-contain"
                    />
                    <span className="sr-only">{partner.name}</span>
                  </>
                ) : (
                  partner.name
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="relative py-20 overflow-hidden hidden">
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('/epic-tournament-arena-with-spotlights-and-crowds.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 fade-in">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            World Championship
            <span className="text-accent block">2024</span>
          </h2>
          <p className="text-xl mb-8 text-pretty">
            The ultimate showdown begins. Watch the world's best players compete for glory and a $2M prize pool.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
            <Trophy className="mr-2" size={20} />
            Watch Live
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-bold mb-4 text-balance">Why Choose Nexus</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience gaming like never before with cutting-edge technology and unparalleled community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: "Lightning Fast",
                description: "Ultra-low latency servers ensure every move counts in competitive play.",
              },
              {
                icon: <Users className="w-12 h-12 text-accent" />,
                title: "Global Community",
                description: "Join millions of players worldwide in our thriving gaming ecosystem.",
              },
              {
                icon: <Trophy className="w-12 h-12 text-primary" />,
                title: "Competitive Scene",
                description: "From casual to pro, climb the ranks in our comprehensive ranking system.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center fade-in group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="relative py-20 overflow-hidden hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/modern-gaming-office-with-developers-working-on-ga.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-background/85" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 fade-in">
          <h2 className="text-5xl font-bold mb-6 text-balance">Join Our Team</h2>
          <p className="text-xl mb-8 text-pretty">
            Help us shape the future of gaming. We're looking for passionate individuals who want to create
            extraordinary experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
            >
              Learn About Culture
            </Button>
          </div>
        </div>
      </section>

    </>
  )
}
