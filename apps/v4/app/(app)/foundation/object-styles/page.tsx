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
  title: "Object Styles | AppZen Design System",
  description: "Object styles and variants used in the AppZen design system.",
}

export default function ObjectStylesPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Object Styles</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Object styles define the visual treatment of UI elements like cards,
            containers, and interactive objects.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="elevation">
          <TabsList className="mb-4">
            <TabsTrigger value="elevation">Elevation</TabsTrigger>
            <TabsTrigger value="containers">Containers</TabsTrigger>
            <TabsTrigger value="interactive">Interactive</TabsTrigger>
          </TabsList>

          <TabsContent value="elevation" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Elevation Styles</CardTitle>
                  <CardDescription>
                    The AppZen design system uses elevation to establish
                    hierarchy and focus.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Elevation is achieved through a combination of shadows,
                    borders, and subtle background shifts. Components have
                    consistent elevation patterns to create a cohesive
                    experience.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <ElevationExample
                  title="Flat"
                  description="No elevation, used for background elements"
                  className="border"
                />

                <ElevationExample
                  title="Low"
                  description="Subtle elevation for cards and containers"
                  className="border shadow-sm"
                />

                <ElevationExample
                  title="Medium"
                  description="Noticeable elevation for interactive elements"
                  className="border shadow-md"
                />

                <ElevationExample
                  title="High"
                  description="Significant elevation for floating elements like modals"
                  className="border shadow-lg"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="containers" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StyleExample
                title="Default Card"
                description="Standard container for content"
              >
                <div className="bg-card text-card-foreground rounded-lg border p-6">
                  <h3 className="font-medium">Card Title</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    This is a standard card with default styling.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Outlined Container"
                description="Container with emphasis on borders"
              >
                <div className="bg-background text-foreground rounded-lg border-2 p-6">
                  <h3 className="font-medium">Outlined Container</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Uses a more prominent border for emphasis.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Filled Container"
                description="Container with background fill"
              >
                <div className="bg-muted text-foreground rounded-lg p-6">
                  <h3 className="font-medium">Filled Container</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Uses background color instead of borders.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Floating Card"
                description="Card with elevation"
              >
                <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-md">
                  <h3 className="font-medium">Floating Card</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Elevated card with shadow for emphasis.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Rounded Container"
                description="Container with increased rounding"
              >
                <div className="bg-card text-card-foreground rounded-2xl border p-6">
                  <h3 className="font-medium">Rounded Container</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Uses increased border radius for a softer look.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Accent Container"
                description="Container with accent border"
              >
                <div className="bg-card text-card-foreground border-primary rounded-lg border border-l-4 p-6">
                  <h3 className="font-medium">Accent Container</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Uses an accent color on one side for emphasis.
                  </p>
                </div>
              </StyleExample>
            </div>
          </TabsContent>

          <TabsContent value="interactive" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StyleExample
                title="Hover Effect"
                description="Objects that respond to hover"
              >
                <div className="bg-card text-card-foreground hover:border-primary/50 cursor-pointer rounded-lg border p-6 transition-all duration-200 hover:shadow-md">
                  <h3 className="font-medium">Hover Me</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    This container changes on hover to indicate interactivity.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Active State"
                description="Objects in active/selected state"
              >
                <div className="bg-primary/10 text-foreground border-primary/30 rounded-lg border p-6">
                  <h3 className="font-medium">Active State</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Visual indicator for the currently selected item.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Disabled State"
                description="Objects in disabled state"
              >
                <div className="bg-muted/50 text-muted-foreground rounded-lg border border-dashed p-6 opacity-70">
                  <h3 className="font-medium">Disabled State</h3>
                  <p className="mt-2 text-sm">
                    Visual treatment for items that are currently unavailable.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Focus State"
                description="Objects with focus"
              >
                <div className="bg-card text-card-foreground ring-primary/30 rounded-lg border p-6 ring-2 ring-offset-2">
                  <h3 className="font-medium">Focus State</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Visual treatment for objects that have keyboard focus.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Interactive Card"
                description="Card design for clickable elements"
              >
                <div className="group bg-card text-card-foreground hover:bg-accent/10 cursor-pointer rounded-lg border p-6 transition-all duration-200 hover:shadow-md">
                  <h3 className="group-hover:text-primary font-medium transition-colors">
                    Interactive Card
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Card design specifically for interactive elements.
                  </p>
                </div>
              </StyleExample>

              <StyleExample
                title="Error State"
                description="Objects showing error states"
              >
                <div className="bg-destructive/10 text-foreground border-destructive/30 rounded-lg border p-6">
                  <h3 className="text-destructive font-medium">Error State</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Visual indicator for elements with errors or issues.
                  </p>
                </div>
              </StyleExample>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ElevationExample({
  title,
  description,
  className,
}: {
  title: string
  description: string
  className: string
}) {
  return (
    <div className="space-y-2">
      <div
        className={`bg-card text-card-foreground flex h-16 items-center justify-center rounded-lg ${className}`}
      >
        {title}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  )
}

function StyleExample({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      {children}
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  )
}
