"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SpotifyPlayer() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Toggle player visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  // Attempt to control iframe audio (note: this has limitations due to cross-origin restrictions)
  const toggleMute = () => {
    setIsMuted(!isMuted)

    // Try to send a message to the iframe (this may not work due to Spotify's security restrictions)
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          { command: isMuted ? "unmute" : "mute" },
          "https://open.spotify.com",
        )
      } catch (e) {
        console.log("Could not control Spotify player directly")
      }
    }
  }

  // Initialize player when component mounts
  useEffect(() => {
    // Auto-hide player after 2 seconds, but keep audio playing
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="spotify-player-container">
      {/* Audio controls */}
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/70 text-white border-white/30"
          aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          <span className="ml-2 text-xs">Music</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={toggleVisibility}
          className="bg-black/50 hover:bg-black/70 text-white border-white/30 text-xs"
        >
          {isVisible ? "Hide Player" : "Show Player"}
        </Button>
      </div>

      {/* Spotify iframe */}
      <div
        className={`fixed bottom-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ width: "300px", height: "80px" }}
      >
        <iframe
          ref={iframeRef}
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/0KwGwfSkznhVw7t00qQ8Nl?utm_source=generator&theme=0"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

