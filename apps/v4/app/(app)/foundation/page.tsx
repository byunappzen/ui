import { Metadata } from "next"
import Link from "next/link"
import {
  Command,
  Download,
  Layers,
  Palette,
  Ruler,
  Shuffle,
  ToggleLeft,
  Type,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export const metadata: Metadata = {
  title: "Foundation | AppZen Design System",
  description: "Foundation elements of the AppZen design system.",
}

// Foundation navigation with icons
const foundationItems = [
  {
    title: "Color",
    description: "Colors used throughout the design system",
    url: "/foundation/color",
    icon: Palette,
  },
  {
    title: "Design Tokens",
    description: "Design variables that power the system",
    url: "/foundation/design-tokens",
    icon: Command,
  },
  {
    title: "Motion",
    description: "Animation principles and guidelines",
    url: "/foundation/motion",
    icon: Shuffle,
  },
  {
    title: "Object Styles",
    description: "Common object styles like shadows and borders",
    url: "/foundation/object-styles",
    icon: Layers,
  },
  {
    title: "Spacing",
    description: "Spacing principles and scale",
    url: "/foundation/spacing",
    icon: Ruler,
  },
  {
    title: "States",
    description: "Interactive state guidelines",
    url: "/foundation/states",
    icon: ToggleLeft,
  },
  {
    title: "Typography",
    description: "Typography scale and guidelines",
    url: "/foundation/typography",
    icon: Type,
  },
  {
    title: "Brand Assets",
    description: "AppZen brand assets and guidelines",
    url: "/foundation/brand-assets",
    icon: Download,
  },
]

export default function FoundationPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Foundation</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            The building blocks of the AppZen design system.
          </p>
        </div>
        <Separator />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foundationItems.map((item) => (
            <Link key={item.title} href={item.url} className="group">
              <Card className="hover:border-primary h-full transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="bg-muted group-hover:bg-primary group-hover:text-primary-foreground rounded-md p-2">
                      {item.icon && <item.icon className="h-5 w-5" />}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
