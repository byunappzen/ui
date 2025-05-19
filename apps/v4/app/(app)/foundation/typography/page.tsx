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
  title: "Typography | AppZen Design System",
  description: "Typography system used in the AppZen design system.",
}

export default function TypographyPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Typography is the foundation of clear communication in our
            interfaces.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="font">
          <TabsList className="mb-4">
            <TabsTrigger value="font">Font Family</TabsTrigger>
            <TabsTrigger value="scale">Type Scale</TabsTrigger>
            <TabsTrigger value="styles">Text Styles</TabsTrigger>
          </TabsList>

          <TabsContent value="font" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Font Family</CardTitle>
                  <CardDescription>
                    AppZen uses Inter as its primary font family
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Inter is a variable font family designed for computer
                    screens, with a focus on high legibility. It works
                    exceptionally well for interfaces across many sizes and
                    resolutions.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    The system uses fallbacks of system-ui, sans-serif to ensure
                    consistent rendering across all platforms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Font Stack</CardTitle>
                  <CardDescription>
                    CSS configuration for font families
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Sans (UI)</h3>
                    <pre className="bg-muted mt-2 overflow-auto rounded-md p-3 text-xs">
                      font-family: Inter, system-ui, sans-serif;
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">Mono (Code)</h3>
                    <pre className="bg-muted mt-2 overflow-auto rounded-md p-3 text-xs">
                      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                      Consolas, "Liberation Mono", "Courier New", monospace;
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Font Weights</CardTitle>
                <CardDescription>
                  Available font weights in the AppZen design system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-3xl font-light">Aa Bb Cc</div>
                    <div className="text-muted-foreground text-sm">
                      <p>Light (300)</p>
                      <p className="text-xs">
                        Used sparingly for large headings
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-normal">Aa Bb Cc</div>
                    <div className="text-muted-foreground text-sm">
                      <p>Regular (400)</p>
                      <p className="text-xs">Primary weight for body text</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-medium">Aa Bb Cc</div>
                    <div className="text-muted-foreground text-sm">
                      <p>Medium (500)</p>
                      <p className="text-xs">
                        Used for emphasis and sub-headings
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-semibold">Aa Bb Cc</div>
                    <div className="text-muted-foreground text-sm">
                      <p>Semibold (600)</p>
                      <p className="text-xs">
                        Used for strong emphasis and headings
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-bold">Aa Bb Cc</div>
                    <div className="text-muted-foreground text-sm">
                      <p>Bold (700)</p>
                      <p className="text-xs">Used for primary headings</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-extrabold">Aa Bb Cc</div>
                    <div className="text-muted-foreground text-sm">
                      <p>Extrabold (800)</p>
                      <p className="text-xs">
                        Used sparingly for high emphasis
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scale" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Type Scale</CardTitle>
                <CardDescription>
                  The typographic scale used throughout the AppZen design system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-8">
                  <TypeSample
                    name="Display"
                    size="text-5xl"
                    className="text-5xl font-extrabold tracking-tight"
                    description="72px / 4.5rem (Desktop), 60px / 3.75rem (Mobile)"
                    usage="Hero sections, landing pages"
                  >
                    Display Text
                  </TypeSample>

                  <TypeSample
                    name="H1"
                    size="text-4xl"
                    className="text-4xl font-bold tracking-tight"
                    description="48px / 3rem (Desktop), 36px / 2.25rem (Mobile)"
                    usage="Page titles, major section headings"
                  >
                    Heading Level 1
                  </TypeSample>

                  <TypeSample
                    name="H2"
                    size="text-3xl"
                    className="text-3xl font-semibold tracking-tight"
                    description="36px / 2.25rem (Desktop), 30px / 1.875rem (Mobile)"
                    usage="Section headings, card titles"
                  >
                    Heading Level 2
                  </TypeSample>

                  <TypeSample
                    name="H3"
                    size="text-2xl"
                    className="text-2xl font-semibold"
                    description="30px / 1.875rem (Desktop), 24px / 1.5rem (Mobile)"
                    usage="Sub-section headings, group titles"
                  >
                    Heading Level 3
                  </TypeSample>

                  <TypeSample
                    name="H4"
                    size="text-xl"
                    className="text-xl font-semibold"
                    description="24px / 1.5rem (Desktop), 20px / 1.25rem (Mobile)"
                    usage="Card headings, form section titles"
                  >
                    Heading Level 4
                  </TypeSample>

                  <TypeSample
                    name="H5"
                    size="text-lg"
                    className="text-lg font-medium"
                    description="18px / 1.125rem"
                    usage="Minor headings, emphasized content"
                  >
                    Heading Level 5
                  </TypeSample>

                  <TypeSample
                    name="H6"
                    size="text-base"
                    className="text-base font-medium"
                    description="16px / 1rem"
                    usage="Small headings, grouped content titles"
                  >
                    Heading Level 6
                  </TypeSample>

                  <TypeSample
                    name="Body"
                    size="text-base"
                    className="text-base"
                    description="16px / 1rem"
                    usage="Primary body text"
                  >
                    Body text is used for the main content of a page. It should
                    be easy to read and have good contrast. This text uses a
                    line-height of 1.5, which provides enough space for
                    comfortable reading.
                  </TypeSample>

                  <TypeSample
                    name="Small"
                    size="text-sm"
                    className="text-sm"
                    description="14px / 0.875rem"
                    usage="Secondary text, metadata, captions"
                  >
                    Small text is used for secondary information, metadata,
                    labels, and helper text. It's still legible but less
                    prominent than body text.
                  </TypeSample>

                  <TypeSample
                    name="XS"
                    size="text-xs"
                    className="text-xs"
                    description="12px / 0.75rem"
                    usage="Fine print, legal text, tooltips"
                  >
                    Extra small text should be used sparingly for tertiary
                    information like legal text, footnotes, and other secondary
                    content that doesn't need to stand out.
                  </TypeSample>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="styles" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Text Styles</CardTitle>
                  <CardDescription>
                    Common text styles for different content types
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Page Title</h3>
                    <div className="rounded-md border p-4">
                      <h1 className="text-3xl font-bold tracking-tight">
                        Analytics Dashboard
                      </h1>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used for main page titles. Large, bold, and with tighter
                      letter spacing.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Section Title</h3>
                    <div className="rounded-md border p-4">
                      <h2 className="text-2xl font-semibold">
                        Monthly Performance
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used for major content sections within a page.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Subsection Title</h3>
                    <div className="rounded-md border p-4">
                      <h3 className="text-xl font-medium">Revenue Breakdown</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used for subsections within major content areas.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Card Title</h3>
                    <div className="rounded-md border p-4">
                      <h3 className="text-lg font-medium">
                        Customer Acquisition
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used for card and panel headers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Text Variations</CardTitle>
                  <CardDescription>
                    Additional text styles for specific content scenarios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Lead Paragraph</h3>
                    <div className="rounded-md border p-4">
                      <p className="text-muted-foreground text-lg">
                        The dashboard provides an overview of key performance
                        indicators and metrics for your business.
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used for introductory text at the beginning of a section.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Emphasized Text</h3>
                    <div className="rounded-md border p-4">
                      <p className="text-base">
                        Regular text with{" "}
                        <span className="font-medium">emphasized portions</span>{" "}
                        for highlighting key information.
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used to bring attention to specific parts of content.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Subdued Text</h3>
                    <div className="rounded-md border p-4">
                      <p className="text-muted-foreground">
                        Additional information that complements the main content
                        but isn't essential.
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used for supplementary information, hints, and helper
                      text.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Code Text</h3>
                    <div className="rounded-md border p-4">
                      <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        npm install @appzen/ui
                      </code>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Used for displaying code snippets inline.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface TypeSampleProps {
  name: string
  size: string
  className: string
  description: string
  usage: string
  children: React.ReactNode
}

function TypeSample({
  name,
  size,
  className,
  description,
  usage,
  children,
}: TypeSampleProps) {
  return (
    <div className="space-y-3">
      <div className={className}>{children}</div>
      <div className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-8">
        <div className="min-w-[120px]">
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-muted-foreground text-xs">{size}</p>
        </div>
        <div className="min-w-[200px]">
          <h4 className="text-sm font-medium">Size</h4>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Usage</h4>
          <p className="text-muted-foreground text-xs">{usage}</p>
        </div>
      </div>
      <Separator />
    </div>
  )
}
