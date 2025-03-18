import { AsciiArt } from "@/components/ascii-art"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:https://discordlookup.com/user/205027905925939200"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            Discord
          </a>
          <a href="tel:5513581893" className="flex items-center text-sm hover:text-primary transition-colors">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            91 85980 00001
          </a>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Jaipur, India
          </div>
          <a
            href="https://www.youtube.com/watch?v=cJ42B8wijx4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            My DOX
          </a>
          <a
            href="https://github.com/x0205x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            @xAGENT
          </a>
        </div>
      </div>
    </div>
  )
}

