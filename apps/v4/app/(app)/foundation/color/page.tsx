import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

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
            Our color system is designed to be accessible, flexible, and
            consistent across all platforms.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="palette">
          <TabsList>
            <TabsTrigger value="palette">Color Palette</TabsTrigger>
            <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="palette" className="mt-6 space-y-6">
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Theme Colors</h2>
              <p>
                These are the core theme colors that power our UI components and
                ensure consistency across our design system.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ColorCard
                  name="Background"
                  token="--background"
                  description="Used for page backgrounds and primary content surfaces"
                  colorClassName="bg-background dark:bg-background"
                />
                <ColorCard
                  name="Foreground"
                  token="--foreground"
                  description="Used for text and icons on background color"
                  colorClassName="bg-foreground dark:bg-foreground"
                />
                <ColorCard
                  name="Primary"
                  token="--primary"
                  description="Primary interactive elements, buttons, and focused states"
                  colorClassName="bg-primary dark:bg-primary"
                />
                <ColorCard
                  name="Secondary"
                  token="--secondary"
                  description="Used for secondary buttons and interactive elements"
                  colorClassName="bg-secondary dark:bg-secondary"
                />
                <ColorCard
                  name="Muted"
                  token="--muted"
                  description="Used for subtle backgrounds and non-critical content"
                  colorClassName="bg-muted dark:bg-muted"
                />
                <ColorCard
                  name="Accent"
                  token="--accent"
                  description="Used for accent elements that need to stand out without primary emphasis"
                  colorClassName="bg-accent dark:bg-accent"
                />
                <ColorCard
                  name="Destructive"
                  token="--destructive"
                  description="Used for error states and destructive actions"
                  colorClassName="bg-destructive dark:bg-destructive"
                />
                <ColorCard
                  name="Border"
                  token="--border"
                  description="Used for borders and dividers"
                  colorClassName="bg-border dark:bg-border"
                />
                <ColorCard
                  name="Ring"
                  token="--ring"
                  description="Used for focus rings around interactive elements"
                  colorClassName="bg-ring dark:bg-ring"
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Brand Colors</h2>
              <p>
                Our primary brand color is Blue-600, which is used for primary
                actions, links, and highlighting important information.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                <ColorCard
                  name="Blue 50"
                  token="--blue-1"
                  description="Lightest blue, used for subtle backgrounds"
                  colorStyle={{ backgroundColor: "var(--blue-1)" }}
                />
                <ColorCard
                  name="Blue 100"
                  token="--blue-3"
                  description="Light blue, used for hover states"
                  colorStyle={{ backgroundColor: "var(--blue-3)" }}
                />
                <ColorCard
                  name="Blue 200"
                  token="--blue-5"
                  description="Used for secondary elements"
                  colorStyle={{ backgroundColor: "var(--blue-5)" }}
                />
                <ColorCard
                  name="Blue 300"
                  token="--blue-7"
                  description="Medium blue"
                  colorStyle={{ backgroundColor: "var(--blue-7)" }}
                />
                <ColorCard
                  name="Blue 400"
                  token="--blue-8"
                  description="Medium-dark blue"
                  colorStyle={{ backgroundColor: "var(--blue-8)" }}
                />
                <ColorCard
                  name="Blue 500"
                  token="--blue-9"
                  description="Our primary blue"
                  colorStyle={{ backgroundColor: "var(--blue-9)" }}
                />
                <ColorCard
                  name="Blue 600"
                  token="--blue-10"
                  description="Primary action color"
                  colorStyle={{ backgroundColor: "var(--blue-10)" }}
                />
                <ColorCard
                  name="Blue 700"
                  token="--blue-11"
                  description="Dark blue for contrast"
                  colorStyle={{ backgroundColor: "var(--blue-11)" }}
                />
                <ColorCard
                  name="Blue 900"
                  token="--blue-12"
                  description="Darkest blue, used for text"
                  colorStyle={{ backgroundColor: "var(--blue-12)" }}
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Neutral Colors</h2>
              <p>
                Our neutral colors are used for text, backgrounds, and borders.
                Gray-800 is our primary text color, and Gray-50 is our primary
                background color.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                <ColorCard
                  name="Gray 50"
                  token="--gray-1"
                  description="Background color"
                  colorStyle={{ backgroundColor: "var(--gray-1)" }}
                />
                <ColorCard
                  name="Gray 100"
                  token="--gray-3"
                  description="Secondary background"
                  colorStyle={{ backgroundColor: "var(--gray-3)" }}
                />
                <ColorCard
                  name="Gray 200"
                  token="--gray-5"
                  description="Border color"
                  colorStyle={{ backgroundColor: "var(--gray-5)" }}
                />
                <ColorCard
                  name="Gray 400"
                  token="--gray-8"
                  description="Muted text color"
                  colorStyle={{ backgroundColor: "var(--gray-8)" }}
                />
                <ColorCard
                  name="Gray 800"
                  token="--gray-12"
                  description="Primary text color"
                  colorStyle={{ backgroundColor: "var(--gray-12)" }}
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Semantic Colors</h2>
              <p>
                Our semantic colors are used to convey meaning and provide
                feedback to users.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Success</h3>
                  <div className="space-y-3">
                    <ColorCard
                      name="Green 50"
                      token="--success-light"
                      description="Light green background"
                      colorStyle={{ backgroundColor: "hsl(142, 76%, 95%)" }}
                    />
                    <ColorCard
                      name="Green 600"
                      token="--success"
                      description="Primary success color"
                      colorStyle={{ backgroundColor: "hsl(142, 72%, 29%)" }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Warning</h3>
                  <div className="space-y-3">
                    <ColorCard
                      name="Orange 50"
                      token="--warning-light"
                      description="Light warning background"
                      colorStyle={{ backgroundColor: "hsl(43, 100%, 95%)" }}
                    />
                    <ColorCard
                      name="Orange 600"
                      token="--warning"
                      description="Primary warning color"
                      colorStyle={{ backgroundColor: "hsl(35, 92%, 33%)" }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Error</h3>
                  <div className="space-y-3">
                    <ColorCard
                      name="Red 50"
                      token="--error-light"
                      description="Light error background"
                      colorStyle={{ backgroundColor: "hsl(360, 100%, 95%)" }}
                    />
                    <ColorCard
                      name="Red 600"
                      token="--error"
                      description="Primary error color"
                      colorStyle={{ backgroundColor: "hsl(0, 84%, 34%)" }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Info</h3>
                  <div className="space-y-3">
                    <ColorCard
                      name="Blue 50"
                      token="--info-light"
                      description="Light info background"
                      colorStyle={{ backgroundColor: "var(--blue-1)" }}
                    />
                    <ColorCard
                      name="Blue 600"
                      token="--info"
                      description="Primary info color"
                      colorStyle={{ backgroundColor: "var(--blue-10)" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="usage" className="mt-6 space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Color Usage Guidelines</h2>
              <p>
                Our color system is designed to be used consistently across all
                platforms. Here are some guidelines for using our colors
                effectively.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Primary Color</h3>
                <p>
                  Blue-600 is our primary brand color. It should be used for:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Primary buttons and actions</li>
                  <li>Links and interactive elements</li>
                  <li>Selected states</li>
                  <li>Progress indicators</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Text Colors</h3>
                <p>
                  We use Gray-800 as our primary text color for optimal
                  readability. For secondary or less important text, use
                  Gray-400.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Background Colors</h3>
                <p>
                  Gray-50 is our primary background color. For secondary
                  backgrounds or to create visual hierarchy, use Gray-100.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semantic Colors</h3>
                <p>Use semantic colors consistently to convey meaning:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <span className="font-medium">Green-600</span>: Success,
                    completion, positive actions
                  </li>
                  <li>
                    <span className="font-medium">Red-600</span>: Errors,
                    destructive actions, critical alerts
                  </li>
                  <li>
                    <span className="font-medium">Orange-600</span>: Warnings,
                    important notifications
                  </li>
                  <li>
                    <span className="font-medium">Blue-600</span>: Information,
                    help, neutral notifications
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accessibility" className="mt-6 space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Color Accessibility</h2>
              <p>
                Our color system is designed to meet WCAG 2.1 AA standards for
                color contrast. Here are some guidelines for ensuring
                accessibility when using our colors.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Text Contrast</h3>
                <p>
                  All text should have a contrast ratio of at least 4.5:1
                  against its background for normal text, and 3:1 for large text
                  (18pt or 14pt bold).
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="bg-gray-1 rounded-md border border-gray-200 p-4">
                    <p className="text-gray-12 font-medium">
                      Gray-800 on Gray-50
                    </p>
                    <p className="text-gray-8 text-sm">
                      Contrast ratio: 10.5:1 (Passes AAA)
                    </p>
                  </div>
                  <div className="bg-blue-9 rounded-md p-4">
                    <p className="font-medium text-white">White on Blue-600</p>
                    <p className="text-blue-1 text-sm">
                      Contrast ratio: 4.8:1 (Passes AA)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Non-Text Contrast</h3>
                <p>
                  UI components and graphical objects should have a contrast
                  ratio of at least 3:1 against adjacent colors.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Color Blindness</h3>
                <p>
                  Don&apos;t rely solely on color to convey information. Always
                  use additional visual cues such as text labels, icons, or
                  patterns.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface ColorCardProps {
  name: string
  token: string
  description: string
  colorClassName?: string
  colorStyle?: React.CSSProperties
  textStyle?: React.CSSProperties
}

function ColorCard({
  name,
  token,
  description,
  colorClassName,
  colorStyle,
  textStyle,
}: ColorCardProps) {
  return (
    <Card>
      <div className={`h-24 ${colorClassName || ""}`} style={colorStyle}></div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-black" style={textStyle}>
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 pt-0">
        <CardDescription className="font-mono text-xs text-black">
          {token}
        </CardDescription>
        <CardDescription className="text-xs text-black">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
