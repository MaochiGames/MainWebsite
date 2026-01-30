"use client"

import { useEffect, useState } from "react"

type Game = {
  title: string
  availability: string
  image: string
  trailerUrl?: string
  wishlistUrl?: string
  platforms?: { label: string; image?: string; url?: string }[]
  actions: {
    label: string
    variant: "primary" | "secondary"
  }[]
}

// Per platform button images.
const defaultPlatformImage = "/Buttons/Button_Steam.png"
const steamPlatformImage = "/Buttons/Button_Steam.png"
const metaPlatformImage = "/Buttons/Button_Meta.png"

// Default game data.
const defaultTrailerUrl = ""
const defaultWishlistUrl = "https://help.steampowered.com/en/faqs/view/0CAD-3B4D-B874-A065"
const defaultBuyNowUrl = ""

const defaultPlatforms = [
  { label: "Steam", image: steamPlatformImage, url: defaultBuyNowUrl },
  { label: "Meta", image: metaPlatformImage, url: defaultBuyNowUrl },
]

// Titan Zero Cold War game data.
const titanZeroTrailerUrl = "https://www.youtube.com/embed/AMhcnfOuqow?autoplay=1&rel=0&start=2";
const titanZeroWishlistUrl = ""
const titanZeroMetaBuyNowUrl = "https://www.meta.com/en-gb/experiences/titan-zero-cold-war/33326899943574963/?require_login=true";

const titanZeroPlatforms = [
  { label: "Meta", image: metaPlatformImage, url: titanZeroMetaBuyNowUrl },
]

const velocityTrailerUrl = "" // https://www.youtube.com/embed/4Bq05ZU1PiM?autoplay=1&rel=0&start=2
const velocityWishlistUrl = ""
const velocityBuyNowUrl = ""

const velocityPlatforms = [
  { label: "Steam", image: steamPlatformImage, url: velocityBuyNowUrl },
]

const featuredGames: Game[] = [
  {
    title: "TITAN ZERO COLD WAR",
    availability: "Available Now on Meta",
    image: "/Games/Game-TitanZeroColdWar.png",
    trailerUrl: titanZeroTrailerUrl,
    wishlistUrl: titanZeroWishlistUrl,
    platforms: titanZeroPlatforms,
    actions: [
      {
        label: "Buy Now",
        variant: "primary",
      },
      { label: "Trailer", variant: "secondary" },
    ],
  },
  // {
  //   title: "Rockwell Siege",
  //   availability: "Coming Soon",
  //   image: "/Rock_Display.png",
  //   trailerUrl: defaultTrailerUrl,
  //   wishlistUrl: defaultWishlistUrl,
  //   platforms: defaultPlatforms,
  //   actions: [
  //     {
  //       label: "Buy Now",
  //       variant: "primary",
  //     },
  //     { label: "Trailer", variant: "secondary" },
  //   ],
  // },
]

const recentReleases: Game[] = [
  {
    title: "VELOCITY",
    availability: "A Web 3.0 Automated Racing Game",
    image: "/Games/Game-Velocity.png",
    trailerUrl: velocityTrailerUrl,
    wishlistUrl: velocityWishlistUrl,
    platforms: velocityPlatforms,
    actions: [
      // { label: "Wishlist", variant: "primary" },
      // { label: "Trailer", variant: "secondary" },
    ],
  },
  // {
  //   title: "Workshop Legends",
  //   availability: "Coming Soon",
  //   image: "/modern-gaming-office-with-developers-working-on-ga.jpg",
  //   trailerUrl: defaultTrailerUrl,
  //   wishlistUrl: defaultWishlistUrl,
  //   platforms: defaultPlatforms,
  //   actions: [
  //     { label: "Wishlist", variant: "primary" },
  //     { label: "Trailer", variant: "secondary" },
  //   ],
  // },
]

const buttonClasses = {
  primary:
    "inline-flex min-w-[110px] items-center justify-center bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-red-500",
  secondary:
    "inline-flex min-w-[110px] items-center justify-center border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/50 hover:text-white",
}

function GameGrid({
  games,
  onTrailerClick,
  onBuyNowClick,
}: {
  games: Game[]
  onTrailerClick: (url: string) => void
  onBuyNowClick: (game: Game) => void
}) {
  return (
    <div className="grid gap-6 landscape:grid-cols-2 md:landscape:grid-cols-3 lg:grid-cols-3">
      {games.map((game) => (
        <article
          key={game.title}
          className="group overflow-hidden rounded-xl border border-white/10 bg-[#13181d] shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={game.image}
              alt={game.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
          <div className="space-y-2 px-5 pb-5 pt-4">
            <h3 className="text-lg font-semibold tracking-wide text-white">{game.title}</h3>
            <p className="text-xs uppercase tracking-[0.16em] text-white/55">{game.availability}</p>
            <div className="flex flex-wrap gap-3 pt-3">
              {game.actions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className={buttonClasses[action.variant]}
                  onClick={() => {
                    if (action.label === "Buy Now" && game.platforms?.length) {
                      onBuyNowClick(game)
                      return
                    }
                    if (action.label === "Trailer" && game.trailerUrl) {
                      onTrailerClick(game.trailerUrl)
                    }
                    if(action.label === "Wishlist" && game.wishlistUrl) window.open(game.wishlistUrl, "_blank", "noopener,noreferrer")
                  }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function GamesPage() {
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null)
  const [activeBuyNow, setActiveBuyNow] = useState<Game | null>(null)

  const platformOptions =
    activeBuyNow?.platforms?.map((platform) => ({
      ...platform,
      image: platform.image ?? defaultPlatformImage,
    })) ?? []

  useEffect(() => {
    if (activeTrailer || activeBuyNow) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [activeTrailer, activeBuyNow])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0f13] text-white">
      <div className="relative isolate">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="h-full w-full bg-[url('/GamePage_BackgroundImage.png')] bg-cover bg-center bg-no-repeat opacity-50" />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/10 blur-[120px]" />
          <div className="absolute right-0 top-20 h-72 w-72 translate-x-1/4 rounded-full bg-cyan-400/10 blur-[140px]" />
          {/*<div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-transparent to-transparent" />*/}
        </div>

        <section className="relative px-5 pb-16 pt-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="flex flex-col gap-6 border-b border-white/70 pb-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-md font-semibold uppercase tracking-[0.32em] text-white sm:text-base">
                  Featured Games
                </p>
                {/*<h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">*/}
                {/*  Discover the worlds we build.*/}
                {/*</h1>*/}
                {/*<p className="max-w-2xl text-sm text-white/60">*/}
                {/*  Premium titles, bold art direction, and immersive storytelling from MaochiGames.*/}
                {/*</p>*/}
              </div>
              <div className="flex items-center gap-3 text-md font-semibold uppercase tracking-[0.3em] text-white">
                <span>Recent Releases</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  v
                </span>
              </div>
            </div>

            <GameGrid
              games={featuredGames}
              onTrailerClick={setActiveTrailer}
              onBuyNowClick={setActiveBuyNow}
            />
          </div>
        </section>

        <section className="relative px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="flex items-center justify-between border-b border-white/90 pb-4">
              <div className="space-y-2">
                <p className="text-lg font-semibold uppercase tracking-[0.35em] text-white/90">
                  Coming Soon
                </p>
                {/*<h2 className="text-2xl font-semibold tracking-wide text-white">LATEST DROPS</h2>*/}
              </div>
              {/*<span className="text-xs uppercase tracking-[0.3em] text-white">*/}
              {/*  Updated Monthly*/}
              {/*</span>*/}
            </div>
            <GameGrid
              games={recentReleases}
              onTrailerClick={setActiveTrailer}
              onBuyNowClick={setActiveBuyNow}
            />
          </div>
        </section>
      </div>

      {activeBuyNow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
          onClick={() => setActiveBuyNow(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#13181d] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/10 px-6 pb-5 pt-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-[#78b1bb]">Platforms</p>
                <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white sm:text-2xl">
                  {activeBuyNow.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveBuyNow(null)}
                className="text-2xl text-white/70 transition-colors hover:text-white"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 px-6 py-6">
              {platformOptions.map((platform) => (
                <button
                  key={platform.label}
                  type="button"
                  className="flex h-[72px] min-w-[160px] flex-col items-center justify-center rounded-xl border border-white/10 bg-black/40 transition-colors hover:border-[#78b1bb] sm:h-[86px] sm:min-w-[190px]"
                  onClick={() => {
                    if (!platform.url) return
                    window.open(platform.url, "_blank", "noopener,noreferrer")
                    setActiveBuyNow(null)
                  }}
                >
                  <img
                    src={platform.image}
                    alt={platform.label}
                    className="h-14 w-auto sm:h-20"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTrailer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
          onClick={() => setActiveTrailer(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative h-[80vh] w-[80vw] overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveTrailer(null)}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
            >
              Close
            </button>
            <iframe
              className="h-full w-full"
              src={activeTrailer}
              title="Game trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    {/*<div className="relative inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/40 via-transparent to-transparent" />*/}
    </div>
  )
}
