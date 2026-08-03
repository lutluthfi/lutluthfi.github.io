import { Button } from "@/components/ui/button"

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between px-24 py-4 border-b border-border">
      <span className="scroll-m-20 text-2xl font-semibold tracking-tight">Arif Luthfiansyah</span>

      <div className="flex gap-8 text-sm text-slate-500">
        <Button variant="ghost">Experience</Button>
        <Button variant="ghost">Portfolio</Button>
        <Button variant="ghost">Contact</Button>
      </div>
    </nav>
  )
}