const videos = [
  {
    src: "/Videos/Project_Odyssey_Science.mp4",
    title: "Odyssey The Story Of Science",
    subtitle: "The Young Socratics",
    body: "Level Design | Gameplay Mechanics",
    span: "full",
    url: "https://store.steampowered.com/app/558110/Odyssey__The_Story_of_Science/",
  },
  {
    src: "/Videos/Project_Tinker.mp4",
    title: "Tinker VR",
    subtitle: "Tinker Studio",
    body: "Gameplay Mechanics | Multiplayer | Level Design",
    span: "half",
    url: "https://www.tinkerstudio.io",
  },
  {
    src: "/Videos/Project_DragonFistVR.mp4",
    title: "Dragon Fist VR",
    subtitle: "Ben Olding Games",
    body: "Gameplay Mechanics | Multiplayer",
    span: "half",
    url: "https://store.steampowered.com/app/1481780/Dragon_Fist_VR_Kung_Fu/",
  },
  {
    src: "/Videos/Project_OperationSatoshi.mp4",
    title: "Operation Satoshi",
    subtitle: "MXS Games",
    body: "Gameplay Mechanics | Multiplayer | Level Design",
    span: "full",
    url: "https://www.metaxseed.io",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-[10vh]">
        <h1 className="w-full text-center text-[5vh] leading-[0.9] font-black uppercase tracking-[0.02em] client-works-heading mb-[2vh]">
          CLIENT WORKS
        </h1>
      </div>

      <div className="w-full">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2">
          {videos.map((video, index) => (
            <a
              key={`${video.src}-${index}`}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${video.title} project`}
              className={`group relative block h-[45vh] sm:h-[55vh] md:h-[60vh] ${
                video.span === "full" ? "sm:col-span-2" : "sm:col-span-1"
              }`}
            >
              <video
                className="h-full w-full object-cover border-0 outline-none"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-4 left-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.14em] client-works-heading">
                  {video.title}
                </div>
                <div className="mt-1 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-white/95">
                  {video.subtitle}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs md:text-sm font-light uppercase tracking-[0.2em] text-white/85 hero-text">
                  {video.body}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
