import { ShoppingBag, Plus, Copy, ChevronRight, ArrowRight, Briefcase, Hammer, BookOpenText, CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const workOfExperiences = [
  {
    name: "Stockbit",
    tags: "Start on May 2026 - Present",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-600 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">S</span>
      </div>
    ),
  },
  {
    name: "tiket.com",
    tags: "Start on May 2021 - May 2026 (5 years)",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">T</span>
      </div>
    ),
  },
  {
    name: "Nostra Technology",
    tags: "Start on Sep 2019 - May 2021 (2 years)",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">N</span>
      </div>
    ),
  },
];

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-zinc-100 flex justify-center py-10 px-4 max-[500px]:px-5">
      <div className="w-full max-w-2xl space-y-4">
        {/* Profile card */}
        <Card className="rounded-3xl shadow-sm border-none px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm sm:text-base">
              <span className="h-2 w-2 rounded-full bg-zinc-400" />
              iOS Engineer
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 text-xs font-bold tracking-wide rounded-full px-4 py-2 gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              OPEN TO WORK
            </Badge>
          </div>

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
                Hi, I'm Arif
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                iOS Engineer from Jakarta, ID
                <br />
                Passionate in the mobile app development
              </p>
              <div className="flex items-center gap-3">
                <Button className="rounded-full bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 h-auto text-sm font-semibold">
                  <Plus className="h-4 w-4 mr-1" />
                  Hire Me
                </Button>
                <Button variant="outline" className="rounded-full border-zinc-200 px-5 py-3 h-auto text-sm font-semibold hover:bg-zinc-50">
                  <Copy className="h-4 w-4 mr-1" />
                  Copy Email
                </Button>
              </div>
            </div>

            {/* Profile photo */}
            {/* <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-zinc-200 ring-4 ring-zinc-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <span className="text-3xl font-bold text-zinc-500">AL</span>
            </div> */}
          </div>
        </Card>

        {/* Work of experiences */}
        <Card className="rounded-3xl border-none bg-zinc-200/60 shadow-none px-6 py-6">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 text-zinc-900 text-xl font-semibold">
              <span className="h-2 w-2 rounded-full bg-zinc-400" />
              Work of experiences
            </div>
            <Button variant="secondary" className="rounded-full bg-white hover:bg-zinc-50 px-4 py-2.5 h-auto text-sm font-semibold text-zinc-900">
              <span className="max-[400px]:hidden">View All</span>
              <ArrowRight className="h-4 w-4 max-[400px]:ml-0 ml-1" />
            </Button>
          </div>

          <div className="space-y-3">
            {workOfExperiences.map((p) => (
              <Card
                key={p.name}
                className="rounded-2xl border-none shadow-sm px-5 py-4 flex flex-row items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="max-[500px]:hidden">{p.icon}</span>
                  <div>
                    <div className="font-semibold text-zinc-900 text-lg">{p.name}</div>
                    <div className="text-zinc-400 text-sm">{p.tags}</div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-300" />
              </Card>
            ))}
          </div>
        </Card>

        {/* Navbar */}
        <Card className="sticky bottom-4 z-10 rounded-full shadow-lg border-none flex flex-row items-center justify-between px-6 py-4">
          <div className="max-[400px]:flex-1 max-[400px]:justify-between flex items-center gap-2">
            <Button variant="secondary" size="icon" className="h-11 w-11 rounded-full bg-zinc-100 hover:bg-zinc-200">
              <Briefcase className="h-5 w-5 text-zinc-900" />
            </Button>
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full text-zinc-400 hover:text-zinc-900">
              <Hammer className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full text-zinc-400 hover:text-zinc-900">
              <BookOpenText className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full text-zinc-400 hover:text-zinc-900">
              <CircleUserRound className="h-5 w-5" />
            </Button>
          </div>
          <Button className="max-[400px]:hidden rounded-full bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 h-auto text-sm font-semibold">
            <Plus className="h-4 w-4 mr-1" />
            Hire Me
          </Button>
        </Card>
      </div>
    </div>
  );
}