import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york-v4/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

export const metadata: Metadata = {
  title: "Brand Assets | AppZen Design System",
  description: "AppZen brand assets for download and usage guidelines.",
}

export default function BrandAssetsPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Brand Assets</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Official AppZen brand assets and usage guidelines.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="logos">
          <TabsList className="mb-4">
            <TabsTrigger value="logos">Logos</TabsTrigger>
            <TabsTrigger value="colors">Color Palette</TabsTrigger>
            <TabsTrigger value="guidelines">Usage Guidelines</TabsTrigger>
          </TabsList>

          <TabsContent value="logos" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AssetCard
                title="Primary Logo"
                description="Full color AppZen logo on light background"
                assetPath="/assets/appzen-logo-primary.svg"
                downloadFiles={[
                  { name: "SVG", url: "/assets/appzen-logo-primary.svg" },
                  { name: "PNG", url: "/assets/appzen-logo-primary.png" },
                  { name: "EPS", url: "/assets/appzen-logo-primary.eps" },
                ]}
              />

              <AssetCard
                title="Secondary Logo"
                description="Full color AppZen logo on dark background"
                assetPath="/assets/appzen-logo-secondary.svg"
                downloadFiles={[
                  { name: "SVG", url: "/assets/appzen-logo-secondary.svg" },
                  { name: "PNG", url: "/assets/appzen-logo-secondary.png" },
                  { name: "EPS", url: "/assets/appzen-logo-secondary.eps" },
                ]}
                dark
              />

              <AssetCard
                title="Monochrome Logo"
                description="Single color AppZen logo"
                assetPath="/assets/appzen-logo-mono.svg"
                downloadFiles={[
                  { name: "SVG", url: "/assets/appzen-logo-mono.svg" },
                  { name: "PNG", url: "/assets/appzen-logo-mono.png" },
                  { name: "EPS", url: "/assets/appzen-logo-mono.eps" },
                ]}
              />

              <AssetCard
                title="Icon Only"
                description="AppZen symbol without wordmark"
                assetPath="/assets/appzen-icon.svg"
                downloadFiles={[
                  { name: "SVG", url: "/assets/appzen-icon.svg" },
                  { name: "PNG", url: "/assets/appzen-icon.png" },
                  { name: "EPS", url: "/assets/appzen-icon.eps" },
                ]}
              />

              <AssetCard
                title="Wordmark Only"
                description="AppZen wordmark without symbol"
                assetPath="/assets/appzen-wordmark.svg"
                downloadFiles={[
                  { name: "SVG", url: "/assets/appzen-wordmark.svg" },
                  { name: "PNG", url: "/assets/appzen-wordmark.png" },
                  { name: "EPS", url: "/assets/appzen-wordmark.eps" },
                ]}
              />

              <AssetCard
                title="Favicon"
                description="AppZen browser icon"
                assetPath="/assets/appzen-favicon.svg"
                downloadFiles={[
                  { name: "SVG", url: "/assets/appzen-favicon.svg" },
                  { name: "ICO", url: "/assets/appzen-favicon.ico" },
                  { name: "PNG", url: "/assets/appzen-favicon.png" },
                ]}
              />
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Logo Package</CardTitle>
                <CardDescription>
                  Download all logo assets in a single package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  The complete logo package includes all AppZen logo variations
                  in multiple formats (SVG, PNG, EPS) optimized for different
                  use cases, along with usage guidelines.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Logo Package (ZIP)
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="colors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Color Palette</CardTitle>
                <CardDescription>
                  Primary and secondary brand colors for AppZen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Primary Colors</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <ColorSwatch
                      name="Primary Purple"
                      hex="#4A29A7"
                      rgb="74, 41, 167"
                      oklch="oklch(0.444 0.181 264.059)"
                      className="bg-primary h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Primary Purple (Light)"
                      hex="#B4A5E4"
                      rgb="180, 165, 228"
                      oklch="oklch(0.75 0.105 264.752)"
                      className="bg-primary/40 h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Primary Purple (Dark)"
                      hex="#2F1B69"
                      rgb="47, 27, 105"
                      oklch="oklch(0.321 0.133 264.058)"
                      className="bg-primary/90 h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Accent"
                      hex="#D6CEFB"
                      rgb="214, 206, 251"
                      oklch="oklch(0.85 0.105 261.345)"
                      className="bg-accent h-24 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Secondary Colors</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <ColorSwatch
                      name="Success"
                      hex="#10B981"
                      rgb="16, 185, 129"
                      oklch="oklch(0.616 0.15 155.75)"
                      className="h-24 rounded-lg bg-green-500"
                    />
                    <ColorSwatch
                      name="Warning"
                      hex="#F59E0B"
                      rgb="245, 158, 11"
                      oklch="oklch(0.72 0.165 71.58)"
                      className="h-24 rounded-lg bg-amber-500"
                    />
                    <ColorSwatch
                      name="Error"
                      hex="#EF4444"
                      rgb="239, 68, 68"
                      oklch="oklch(0.577 0.245 27.325)"
                      className="bg-destructive h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Information"
                      hex="#3B82F6"
                      rgb="59, 130, 246"
                      oklch="oklch(0.565 0.182 254.14)"
                      className="h-24 rounded-lg bg-blue-500"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Color Palette (PDF)
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Values</CardTitle>
                <CardDescription>
                  Reference values for AppZen brand colors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Color Name</TableHead>
                      <TableHead>HEX</TableHead>
                      <TableHead>RGB</TableHead>
                      <TableHead>OKLCH</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Primary Purple</TableCell>
                      <TableCell>
                        <code>#4A29A7</code>
                      </TableCell>
                      <TableCell>
                        <code>rgb(74, 41, 167)</code>
                      </TableCell>
                      <TableCell>
                        <code>oklch(0.444 0.181 264.059)</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Primary Purple (Light)</TableCell>
                      <TableCell>
                        <code>#B4A5E4</code>
                      </TableCell>
                      <TableCell>
                        <code>rgb(180, 165, 228)</code>
                      </TableCell>
                      <TableCell>
                        <code>oklch(0.75 0.105 264.752)</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Primary Purple (Dark)</TableCell>
                      <TableCell>
                        <code>#2F1B69</code>
                      </TableCell>
                      <TableCell>
                        <code>rgb(47, 27, 105)</code>
                      </TableCell>
                      <TableCell>
                        <code>oklch(0.321 0.133 264.058)</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Accent</TableCell>
                      <TableCell>
                        <code>#D6CEFB</code>
                      </TableCell>
                      <TableCell>
                        <code>rgb(214, 206, 251)</code>
                      </TableCell>
                      <TableCell>
                        <code>oklch(0.85 0.105 261.345)</code>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guidelines" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Logo Usage Guidelines</CardTitle>
                <CardDescription>
                  Rules for using the AppZen logo correctly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Clear Space</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Always maintain adequate clear space around the logo. The
                    minimum required clear space is equal to the height of the
                    "A" in the AppZen wordmark.
                  </p>
                  <div className="bg-muted flex items-center justify-center rounded-lg p-6">
                    <div className="border-primary/50 relative inline-block border-2 border-dashed p-8">
                      <div className="bg-primary rounded-md px-4 py-2 text-lg font-bold text-white">
                        AppZen Logo
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Minimum Size</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    To ensure legibility, the AppZen logo should never be used
                    smaller than 24 pixels in height for digital applications or
                    0.25 inches in print.
                  </p>
                  <div className="bg-muted flex items-center justify-center rounded-lg p-6">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary mb-2 rounded-md px-3 py-1.5 text-sm font-bold text-white">
                        24px
                      </div>
                      <p className="text-muted-foreground text-xs">
                        Minimum Size
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Don&apos;ts</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    To maintain brand integrity, avoid these common misuses of
                    the logo:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    <li>Don&apos;t change the logo colors</li>
                    <li>Don&apos;t distort or stretch the logo</li>
                    <li>Don&apos;t rotate the logo</li>
                    <li>Don&apos;t add effects (shadows, gradients, etc.)</li>
                    <li>
                      Don&apos;t place the logo on busy backgrounds that reduce
                      legibility
                    </li>
                    <li>Don&apos;t rearrange logo elements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Logo Versions</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Use the appropriate logo version for different contexts:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    <li>
                      <strong>Primary Logo:</strong> Use on light backgrounds in
                      most applications
                    </li>
                    <li>
                      <strong>Secondary Logo:</strong> Use on dark backgrounds
                    </li>
                    <li>
                      <strong>Monochrome Logo:</strong> Use when color printing
                      is unavailable
                    </li>
                    <li>
                      <strong>Icon Only:</strong> Use in space-constrained
                      environments where brand is already established
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Brand Guidelines (PDF)
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface ColorSwatchProps {
  name: string
  hex: string
  rgb: string
  oklch: string
  className: string
}

function ColorSwatch({ name, hex, rgb, oklch, className }: ColorSwatchProps) {
  return (
    <div className="space-y-2">
      <div className={className}></div>
      <div>
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-muted-foreground text-xs">{hex}</p>
      </div>
    </div>
  )
}

interface AssetCardProps {
  title: string
  description: string
  assetPath: string
  downloadFiles: Array<{ name: string; url: string }>
  dark?: boolean
}

function AssetCard({
  title,
  description,
  assetPath,
  downloadFiles,
  dark = false,
}: AssetCardProps) {
  return (
    <Card>
      <div
        className={`flex h-48 items-center justify-center p-6 ${dark ? "bg-primary" : "bg-muted"}`}
      >
        <div className="flex h-full w-full items-center justify-center">
          {/* Placeholder for image - in a real app, this would be an actual image */}
          <div
            className={`rounded-md p-4 text-center ${dark ? "bg-primary/80 text-white" : "bg-white"}`}
          >
            <p className="font-bold">{title}</p>
            <p className="text-xs">Logo Preview</p>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-stretch gap-2">
        <div className="flex flex-wrap gap-2">
          {downloadFiles.map((file) => (
            <Button key={file.name} variant="outline" size="sm">
              {file.name}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
