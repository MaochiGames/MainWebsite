"use client"

import { useEffect, useRef, useState } from "react"

type PlaceholderVideoProps = {
  src: string
  placeholder?: string
  className?: string
}

// Shows a still image until the video can play, then fades the video in.
export function PlaceholderVideo({ src, placeholder, className = "" }: PlaceholderVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [isVideoFailed, setIsVideoFailed] = useState(false)

  // The video may already be ready before hydration attaches the event handlers
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setIsVideoReady(true)
    }
  }, [])

  const handleVideoReady = () => {
    setIsVideoReady(true)
  }

  const handleVideoError = () => {
    setIsVideoFailed(true)
    setIsVideoReady(false)
  }

  const showVideo = !placeholder || (isVideoReady && !isVideoFailed)

  return (
    <>
      {!isVideoFailed && (
        <video
          ref={videoRef}
          className={`${className} transition-opacity duration-700 ease-out ${showVideo ? "opacity-100" : "opacity-0"}`}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onError={handleVideoError}
          src={src}
        />
      )}

      {placeholder && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            showVideo ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </>
  )
}
