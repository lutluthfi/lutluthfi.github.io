import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const companies = [
  "tiket.com",
  "Apple Developer Academy",
  "Nostra Technology",
  "Halo Ustadz",
]

export default function HeroBanner() {
  return (
    <section className="px-24 py-18 w-full">
      
      <h1 className="text-6xl font-bold mb-2">
        Arif Luthfiansyah
      </h1>

      <p className="text-lg mb-2">
        I'm an iOS Engineer who loved in mobile app development. I started my career as an Android Engineer until I switch to an iOS Engineer
      </p>

      <p className="text-xs uppercase">
        Previously at
      </p>

      <div className="flex flex-wrap gap-2 mb-10 mt-10">
        {companies.map((company) => (
          <a href="">
            <span
            key={company}
            className="text-sm font-medium px-3 py-2 rounded-md border border-border bg-muted/40"
          >
            {company}
          </span>
          </a>
        ))}
      </div>

      <div className="flex gap-3">
        <Button asChild>
          <a href="mailto:lutluthfiansyah@gmail.com">
            <Mail className="w-4 h-4 mr-2" />
            Email me
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a href="https://linkedin.com/in/arif-luthfiansyah" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a href="https://github.com/lutluthfi" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}