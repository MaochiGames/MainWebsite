"use client"

import { useFormState, useFormStatus } from "react-dom"
import { sendContactEmail } from "./api/contactroute"

const initialState = { status: "idle" as const, message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="w-full h-12 sm:h-14 bg-primary text-primary-foreground font-semibold tracking-wide uppercase transition-colors hover:bg-primary/90 disabled:opacity-70"
      disabled={pending}
    >
      {pending ? "Sending..." : "Let's Talk"}
    </button>
  )
}

export default function ContactPage() {
  const [state, formAction] = useFormState(sendContactEmail, initialState)

  return (
    <main className="relative min-h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: "url('/Asset3_1080.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/Diagonal_black_trans_80.png')" }}
        aria-hidden="true"
      />
      <div className="w-full max-w-xl md:max-w-[50rem]">
        <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">GOT A PROJECT IN MIND?</h1>
          <p className="text-left text-base sm:text-lg font-sans-regular font-light pb-[5svh] text-white/70 mb-6">
            Let&apos;s make something cool together
          </p>
          <form className="space-y-5" name="contact" action={formAction}>
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
            {state.status !== "idle" ? (
              <p
                className={`text-sm ${
                  state.status === "success" ? "text-emerald-400" : "text-red-400"
                }`}
                role="status"
                aria-live="polite"
              >
                {state.message}
              </p>
            ) : null}
            <SubmitButton />
          </form>
        </div>
      </div>
    </main>
  )
}
