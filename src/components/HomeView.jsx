import {
  ChevronRight,
  ArrowRight,
  Briefcase,
  Hammer,
  BookOpenText,
  CircleUserRound,
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EMAIL = "lutluthfiansyah@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/arif-luthfiansyah";
// ponytail: fill in your WhatsApp number, e.g. "https://wa.me/628123456789"
const WHATSAPP_URL = "https://wa.me/6285216863058";

const myExperiences = [
  {
    name: "Stockbit",
    duration: "Start on May 2026 - Present",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-600 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">S</span>
      </div>
    ),
  },
  {
    name: "tiket.com",
    duration: "Start on May 2021 - May 2026 (5 years)",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">T</span>
      </div>
    ),
  },
  {
    name: "Nostra Technology",
    duration: "Start on Sep 2019 - May 2021 (2 years)",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">N</span>
      </div>
    ),
  },
  {
    name: "Halo Ustadz",
    badge: "Freelance",
    duration: "Start on Sep 2019 - May 2021 (2 years)",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">H</span>
      </div>
    ),
  },
];

const projects = [
  {
    name: "Hopecardis",
    tags: "Android · iOS · Flutter",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-700 to-pink-500 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">H</span>
      </div>
    ),
  },
  {
    name: "Ina HF Carmet",
    tags: "Android · iOS · Flutter",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">I</span>
      </div>
    ),
  },
  {
    name: "Usee TV GO",
    tags: "iOS · UIKit · In App Purchase",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-700 to-violet-500 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">T</span>
      </div>
    ),
  },
  {
    name: "Halo Ustadz",
    tags: "Android · VoIP · WebSocket",
    icon: (
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center ring-2 ring-white">
        <span className="text-white font-bold text-lg">H</span>
      </div>
    ),
  },
];

function Duration({ value }) {
  const parts = value
    .replace("Start on ", "")
    .replace(" - ", " • ")
    .replace("(", " • ")
    .replace(")", "")
    .split(" • ");
  return parts.map((p, i) => (
    <span key={i}>
      {i > 0 && " • "}
      <span className={p.includes("year") ? "" : "font-normal"}>{p}</span>
    </span>
  ));
}

function SectionCard({ id, title, items }) {
  return (
    <Card
      id={id}
      className="rounded-3xl border-none bg-zinc-200/60 shadow-none px-6 py-6"
    >
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2 text-zinc-900 text-xl font-semibold">
          <span className="h-2 w-2 rounded-full bg-zinc-400" />
          {title}
        </div>
        <Button
          variant="secondary"
          className="rounded-full bg-white hover:bg-zinc-50 px-4 py-2.5 h-auto text-sm font-semibold text-zinc-900"
        >
          <span className="max-[400px]:hidden">View All</span>
          <ArrowRight className="h-4 w-4 max-[400px]:ml-0 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {items.map((p) => (
          <Card
            key={p.name}
            className={`rounded-2xl border-none shadow-sm px-5 py-4 flex flex-row items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer ${p.duration?.includes("Present") ? "snake-border overflow-visible" : ""}`}
          >
            <div className="flex items-center gap-4">
              <span className="max-[500px]:hidden">{p.icon}</span>
              <div>
                <div className="font-semibold text-zinc-900 text-lg">
                  {p.name}
                </div>
                <div className="text-zinc-400 text-sm">
                  {p.duration ? <Duration value={p.duration} /> : p.tags}
                </div>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-zinc-300" />
          </Card>
        ))}
      </div>
    </Card>
  );
}

export default function ProfileCard() {
  const tabClass = "h-11 w-11 rounded-full text-zinc-400 hover:text-zinc-900";
  // TODO(scrollspy): active nav indicator doesn't track scroll position reliably
  // (e.g. wrong section at the very top). Revisit before enabling.
  // useEffect(() => {
  //   const map = {
  //     profile: "user",
  //     "my-experiences": "briefcase",
  //     "my-projects": "hammer",
  //   };
  //   const onScroll = () => {
  //     let current = null;
  //     for (const [id, key] of Object.entries(map)) {
  //       const rect = document.getElementById(id)?.getBoundingClientRect();
  //       if (rect && rect.top <= 0) current = key;
  //     }
  //     setActive(current ?? "user");
  //   };
  //   onScroll();
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   window.addEventListener("resize", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //     window.removeEventListener("resize", onScroll);
  //   };
  // }, []);
  return (
    <div className="min-h-screen bg-zinc-100 flex justify-center py-10 px-4 max-[500px]:px-5">
      <script
        async
        src="https://filytics-ewa3qg43f-arif-luthfiansyahs-projects.vercel.app/script.js"
        data-website-id="186ac253-77a9-408c-a55f-e385437d76f5"
      />
      <div className="w-full max-w-[600px] space-y-4">
        {/* Profile card */}
        <Card
          id="profile"
          className="rounded-3xl shadow-sm border-none px-8 py-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm sm:text-base">
              <span className="h-2 w-2 rounded-full bg-zinc-400" />
              iOS Engineer
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 text-xs font-bold tracking-wide rounded-full px-4 py-2 gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              OPEN TO WORK
            </Badge>
          </div>

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
                Hi, I'm Arif
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                I am a mobile developer skilled in Swift, Kotlin, Flutter, Clean
                Architecture, and SOLID principle. Strong software engineering
                and like to learn, share, and craft remarkable and scalable
                software by following good software engineering disciples and
                principles that can supports product for long term business.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  asChild
                  className="rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3 h-auto text-sm font-semibold"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HugeiconsIcon
                      icon={WhatsappIcon}
                      size={16}
                      className="mr-1"
                    />
                    Contact Me
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-zinc-200 px-5 py-3 h-auto text-sm font-semibold hover:bg-zinc-50"
                >
                  <a href={`mailto:${EMAIL}`}>
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      size={16}
                      className="mr-1"
                    />
                    Email Me
                  </a>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-3 h-auto text-sm font-semibold"
                >
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HugeiconsIcon
                      icon={Linkedin01Icon}
                      size={16}
                      className="mr-1"
                    />
                    Reach Me
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile photo */}
            {/* <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-zinc-200 ring-4 ring-zinc-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <span className="text-3xl font-bold text-zinc-500">AL</span>
            </div> */}
          </div>
        </Card>

        {/* My experiences */}
        <SectionCard
          id="my-experiences"
          title="My Experiences"
          items={myExperiences}
        />

        {/* My Projects */}
        <SectionCard id="my-projects" title="My Projects" items={projects} />

        <p className="text-center text-sm text-zinc-400">
          Last updated: {__LAST_DEPLOYED__}
        </p>

        {/* Navbar */}
        <Card className="sticky bottom-4 z-10 rounded-full shadow-lg border-none flex flex-row items-center justify-between px-6 py-4">
          <Button
            variant="ghost"
            size="icon"
            className={tabClass}
            onClick={() => {
              document
                .getElementById("profile")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <CircleUserRound className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={tabClass}
            onClick={() => {
              document
                .getElementById("my-experiences")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Briefcase className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={tabClass}
            onClick={() => {
              document
                .getElementById("my-projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Hammer className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-full text-zinc-400 hover:text-zinc-900"
          >
            <BookOpenText className="h-5 w-5" />
          </Button>
          <Button
            asChild
            className="max-[400px]:hidden rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3 h-auto text-sm font-semibold"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <HugeiconsIcon
                icon={WhatsappIcon}
                size={16}
                className="mr-1"
              />
              Contact Me
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
}
