"use client"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
      <div className="w-full max-w-xl">
        <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">CONTACT US</h1>
          <form className="space-y-5" name="contact" method="post">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm sm:text-base font-medium">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full h-12 rounded-md border border-border bg-background px-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm sm:text-base font-medium">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full h-12 rounded-md border border-border bg-background px-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm sm:text-base font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full min-h-[140px] rounded-md border border-border bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 sm:h-14 bg-primary text-primary-foreground font-semibold tracking-wide uppercase transition-colors hover:bg-primary/90"
            >
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
