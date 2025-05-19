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
                title="Full Logo (Light)"
                description="Full color AppZen logo on light background"
                assetPath="/appzen_logos/Type=Full logo, Color mode=Light.svg"
                downloadFiles={[
                  {
                    name: "SVG",
                    url: "/appzen_logos/Type=Full logo, Color mode=Light.svg",
                  },
                  {
                    name: "PNG",
                    url: "/appzen_logos/Type=Full logo, Color mode=Light.png",
                  },
                  {
                    name: "PNG (2x)",
                    url: "/appzen_logos/Type=Full logo, Color mode=Light@2x.png",
                  },
                ]}
              />

              <AssetCard
                title="Full Logo (Dark)"
                description="Full color AppZen logo on dark background"
                assetPath="/appzen_logos/Type=Full logo, Color mode=Dark.svg"
                downloadFiles={[
                  {
                    name: "SVG",
                    url: "/appzen_logos/Type=Full logo, Color mode=Dark.svg",
                  },
                  {
                    name: "PNG",
                    url: "/appzen_logos/Type=Full logo, Color mode=Dark.png",
                  },
                  {
                    name: "PNG (2x)",
                    url: "/appzen_logos/Type=Full logo, Color mode=Dark@2x.png",
                  },
                ]}
                dark
              />

              <AssetCard
                title="Symbol Only (Light)"
                description="AppZen symbol without wordmark on light background"
                assetPath="/appzen_logos/Type=Symbol only, Color mode=Light.svg"
                downloadFiles={[
                  {
                    name: "SVG",
                    url: "/appzen_logos/Type=Symbol only, Color mode=Light.svg",
                  },
                  {
                    name: "PNG",
                    url: "/appzen_logos/Type=Symbol only, Color mode=Light.png",
                  },
                  {
                    name: "PNG (2x)",
                    url: "/appzen_logos/Type=Symbol only, Color mode=Light@2x.png",
                  },
                ]}
              />

              <AssetCard
                title="Symbol Only (Dark)"
                description="AppZen symbol without wordmark on dark background"
                assetPath="/appzen_logos/Type=Symbol only, Color mode=Dark.svg"
                downloadFiles={[
                  {
                    name: "SVG",
                    url: "/appzen_logos/Type=Symbol only, Color mode=Dark.svg",
                  },
                  {
                    name: "PNG",
                    url: "/appzen_logos/Type=Symbol only, Color mode=Dark.png",
                  },
                  {
                    name: "PNG (2x)",
                    url: "/appzen_logos/Type=Symbol only, Color mode=Dark@2x.png",
                  },
                ]}
                dark
              />

              <AssetCard
                title="Wordmark Only (Light)"
                description="AppZen wordmark without symbol on light background"
                assetPath="/appzen_logos/Type=Wordmark only, Color mode=Light.svg"
                downloadFiles={[
                  {
                    name: "SVG",
                    url: "/appzen_logos/Type=Wordmark only, Color mode=Light.svg",
                  },
                  {
                    name: "PNG",
                    url: "/appzen_logos/Type=Wordmark only, Color mode=Light.png",
                  },
                  {
                    name: "PNG (2x)",
                    url: "/appzen_logos/Type=Wordmark only, Color mode=Light@2x.png",
                  },
                ]}
              />

              <AssetCard
                title="Wordmark Only (Dark)"
                description="AppZen wordmark without symbol on dark background"
                assetPath="/appzen_logos/Type=Wordmark only, Color mode=Dark.svg"
                downloadFiles={[
                  {
                    name: "SVG",
                    url: "/appzen_logos/Type=Wordmark only, Color mode=Dark.svg",
                  },
                  {
                    name: "PNG",
                    url: "/appzen_logos/Type=Wordmark only, Color mode=Dark.png",
                  },
                  {
                    name: "PNG (2x)",
                    url: "/appzen_logos/Type=Wordmark only, Color mode=Dark@2x.png",
                  },
                ]}
                dark
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
                  in multiple formats (SVG, PNG) optimized for different use
                  cases, along with usage guidelines.
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="/appzen_logos/appzen_logos.zip"
                  download
                  className="inline-flex"
                >
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
                </a>
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
                      className="bg-primary h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Primary Purple (Light)"
                      hex="#B4A5E4"
                      className="bg-primary/40 h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Primary Purple (Dark)"
                      hex="#2F1B69"
                      className="bg-primary/90 h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Accent"
                      hex="#D6CEFB"
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
                      className="h-24 rounded-lg bg-green-500"
                    />
                    <ColorSwatch
                      name="Warning"
                      hex="#F59E0B"
                      className="h-24 rounded-lg bg-amber-500"
                    />
                    <ColorSwatch
                      name="Error"
                      hex="#EF4444"
                      className="bg-destructive h-24 rounded-lg"
                    />
                    <ColorSwatch
                      name="Information"
                      hex="#3B82F6"
                      className="h-24 rounded-lg bg-blue-500"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href="/appzen_logos/appzen_color_palette.pdf"
                  download
                  className="inline-flex"
                >
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
                </a>
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
                  Follow these rules to ensure consistent brand representation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Clear Space</h3>
                  <div className="flex items-center gap-6">
                    <div className="bg-muted relative flex-shrink-0 p-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="border-muted-foreground/50 absolute inset-4 border border-dashed"></div>
                        <Image
                          src="/appzen_logos/Type=Full logo, Color mode=Light.svg"
                          alt="AppZen logo with clear space"
                          width={150}
                          height={50}
                          className="relative z-10"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        Always maintain clear space equal to the height of the
                        &quot;Z&quot; character around the entire logo to ensure
                        visibility and impact.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Dos and Don&apos;ts</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Do</TableHead>
                        <TableHead>Don&apos;t</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          Use the primary logo on light backgrounds
                        </TableCell>
                        <TableCell>
                          Modify the logo colors unless using approved
                          variations
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Use the secondary logo on dark backgrounds
                        </TableCell>
                        <TableCell>
                          Stretch, distort, or alter the logo proportions
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Maintain minimum size requirements for legibility
                        </TableCell>
                        <TableCell>
                          Add effects like shadows, outlines, or gradients
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Use the SVG format for digital applications
                        </TableCell>
                        <TableCell>
                          Place the logo on busy backgrounds that reduce
                          visibility
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Ensure adequate contrast with background colors
                        </TableCell>
                        <TableCell>
                          Crop or partially display the logo
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Minimum Size</h3>
                  <div className="flex items-center gap-6">
                    <div className="bg-muted flex items-center justify-center p-4">
                      <Image
                        src="/appzen_logos/Type=Full logo, Color mode=Light.svg"
                        alt="AppZen logo with minimum size"
                        width={100}
                        height={33}
                        className="relative z-10"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        The full logo should not be used smaller than 100px wide
                        for digital applications or 1 inch for print. When space
                        is limited, use the symbol-only logo.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logo File Types & Usage</CardTitle>
                <CardDescription>
                  Choosing the right file format for each application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Format</TableHead>
                      <TableHead>Best For</TableHead>
                      <TableHead>Features</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">SVG</TableCell>
                      <TableCell>
                        Websites, digital platforms, responsive designs
                      </TableCell>
                      <TableCell>
                        Vector format, infinitely scalable, small file size
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">PNG</TableCell>
                      <TableCell>
                        Digital applications requiring transparency
                      </TableCell>
                      <TableCell>
                        Lossless quality, supports transparency
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">PNG (2x)</TableCell>
                      <TableCell>
                        High-resolution screens, retina displays
                      </TableCell>
                      <TableCell>
                        Double resolution for crisp display on high-DPI screens
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
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
  className: string
}

function ColorSwatch({ name, hex, className }: ColorSwatchProps) {
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
        className={`flex h-48 items-center justify-center p-6 ${dark ? "bg-slate-800" : "bg-muted"}`}
      >
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={assetPath}
            alt={title}
            width={200}
            height={100}
            className="max-h-36 w-auto object-contain"
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-stretch gap-2">
        <div className="flex flex-wrap gap-2">
          {downloadFiles.map((file) => (
            <a key={file.name} href={file.url} download className="inline-flex">
              <Button variant="outline" size="sm">
                {file.name}
              </Button>
            </a>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
