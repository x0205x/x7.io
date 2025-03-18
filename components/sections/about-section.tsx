import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            xAGENT
            <br />
            <span className="text-primary/60">Cybersecurity Professional</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            Hello! I'm xAGENT, a cybersecurity professional specializing in threat detection, incident response, and
            security operations.
          </p>

          <p>
            With experience as a SOC Analyst and Microsoft Threat Expert, I focus on identifying and mitigating security
            threats across enterprise environments.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                I'm someone who thrives on challenges, whenever someone tells me something is impossible, my first
                thought is always "how can I make this possible?" This mindset drives me in both my personal and
                professional life.
              </p>

              <p>
                I'm passionate about sports and physical fitness. Cricket is one of my favorite activities, and I also
                make time to hit the gym for at least an hour every day.
              </p>

              <p>
                Staying active is an important part of my routine that helps me maintain both physical and mental
                balance.
              </p>

              <p>
                On the football field, I play as a defender. While I didn't score many goals in that position, I took
                pride in preventing the opposition from scoring.
              </p>

              <p>
                Thinking about it now, it's interesting how that defensive mindset may have influenced my career
                path—perhaps that's what drew me to become a Defender endpoint expert in cybersecurity!
              </p>
            </div>
          </div>

          <p>
            I'm passionate about staying ahead of emerging cyber threats and implementing robust security measures to
            protect critical infrastructure and data.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> New York, NY
              </li>
              <li>
                <span className="text-muted-foreground">Education:</span> M.S. in Cybersecurity, Pace University
              </li>
              <li>
                <span className="text-muted-foreground">Specialty:</span> Threat Hunting, Incident Response, Security
                Operations
              </li>
              <li>
                <span className="text-muted-foreground">Certifications:</span> Microsoft Certified Security Operations
                Associate (SC-200)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

