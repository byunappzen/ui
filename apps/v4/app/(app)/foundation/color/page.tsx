import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export const metadata: Metadata = {
  title: "Color | AppZen Design System",
  description:
    "All colors in the AppZen design system with descriptions and tokens.",
}

export default function ColorPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Color</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            The AppZen design system uses a consistent color palette to create a
            cohesive user experience.
          </p>
        </div>
        <Separator />
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Primary Colors</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Background"
              value="oklch(1 0 0)"
              token="--background"
              description="Used for page backgrounds and primary content surfaces"
              colorClassName="bg-background dark:bg-background"
              textClassName="text-foreground dark:text-foreground"
            />
            <ColorCard
              name="Foreground"
              value="oklch(0.129 0.042 264.695)"
              token="--foreground"
              description="Used for text and icons on background color"
              colorClassName="bg-foreground dark:bg-foreground"
              textClassName="text-background dark:text-background"
            />
            <ColorCard
              name="Primary"
              value="oklch(0.444 0.181 264.059)"
              token="--primary"
              description="Primary interactive elements, buttons, and focused states"
              colorClassName="bg-primary dark:bg-primary"
              textClassName="text-primary-foreground dark:text-primary-foreground"
            />
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Secondary Colors</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Secondary"
              value="oklch(0.95 0.03 260.123)"
              token="--secondary"
              description="Used for secondary buttons and interactive elements"
              colorClassName="bg-secondary dark:bg-secondary"
              textClassName="text-secondary-foreground dark:text-secondary-foreground"
            />
            <ColorCard
              name="Muted"
              value="oklch(0.968 0.007 247.896)"
              token="--muted"
              description="Used for subtle backgrounds and non-critical content"
              colorClassName="bg-muted dark:bg-muted"
              textClassName="text-muted-foreground dark:text-muted-foreground"
            />
            <ColorCard
              name="Accent"
              value="oklch(0.85 0.105 261.345)"
              token="--accent"
              description="Used for accent elements that need to stand out without primary emphasis"
              colorClassName="bg-accent dark:bg-accent"
              textClassName="text-accent-foreground dark:text-accent-foreground"
            />
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Functional Colors</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Destructive"
              value="oklch(0.577 0.245 27.325)"
              token="--destructive"
              description="Used for error states and destructive actions"
              colorClassName="bg-destructive dark:bg-destructive"
              textClassName="text-destructive-foreground dark:text-destructive-foreground"
            />
            <ColorCard
              name="Border"
              value="oklch(0.929 0.013 255.508)"
              token="--border"
              description="Used for borders and dividers"
              colorClassName="bg-border dark:bg-border"
              textClassName="text-foreground dark:text-foreground"
            />
            <ColorCard
              name="Ring"
              value="oklch(0.444 0.181 264.059)"
              token="--ring"
              description="Used for focus rings around interactive elements"
              colorClassName="bg-ring dark:bg-ring"
              textClassName="text-background dark:text-background"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

interface ColorCardProps {
  name: string
  value: string
  token: string
  description: string
  colorClassName: string
  textClassName: string
}

function ColorCard({
  name,
  value,
  token,
  description,
  colorClassName,
  textClassName,
}: ColorCardProps) {
  return (
    <Card>
      <div className={`h-24 rounded-t-lg ${colorClassName}`}></div>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between">
          <span>{name}</span>
          <code className="text-muted-foreground text-sm font-normal">
            {token}
          </code>
        </CardTitle>
        <CardDescription>{value}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
