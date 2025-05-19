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
  Table,
  TableBody,
  TableCaption,
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
  title: "Design Tokens | AppZen Design System",
  description:
    "All design tokens used in the AppZen design system with descriptions.",
}

export default function DesignTokensPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Design tokens are the visual design atoms of the design system —
            specifically, they are named entities that store visual design
            attributes.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="color">
          <TabsList className="mb-4">
            <TabsTrigger value="color">Color</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="radius">Radius</TabsTrigger>
            <TabsTrigger value="shadow">Shadow</TabsTrigger>
          </TabsList>

          <TabsContent value="color" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Color Tokens</CardTitle>
                <CardDescription>
                  Color tokens used throughout the AppZen design system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <code>--background</code>
                      </TableCell>
                      <TableCell>oklch(1 0 0)</TableCell>
                      <TableCell>Primary background color</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--foreground</code>
                      </TableCell>
                      <TableCell>oklch(0.129 0.042 264.695)</TableCell>
                      <TableCell>Primary text color</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--primary</code>
                      </TableCell>
                      <TableCell>oklch(0.444 0.181 264.059)</TableCell>
                      <TableCell>Primary action color</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--primary-foreground</code>
                      </TableCell>
                      <TableCell>oklch(0.984 0.003 247.858)</TableCell>
                      <TableCell>Text color on primary background</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--secondary</code>
                      </TableCell>
                      <TableCell>oklch(0.95 0.03 260.123)</TableCell>
                      <TableCell>Secondary action color</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--muted</code>
                      </TableCell>
                      <TableCell>oklch(0.968 0.007 247.896)</TableCell>
                      <TableCell>Muted background color</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--accent</code>
                      </TableCell>
                      <TableCell>oklch(0.85 0.105 261.345)</TableCell>
                      <TableCell>Accent color for highlights</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Typography Tokens</CardTitle>
                <CardDescription>
                  Typography tokens for consistent text styling across the
                  system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <code>--font-sans</code>
                      </TableCell>
                      <TableCell>Inter, system-ui, sans-serif</TableCell>
                      <TableCell>Primary font family</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--font-heading</code>
                      </TableCell>
                      <TableCell>Inter, system-ui, sans-serif</TableCell>
                      <TableCell>Font family for headings</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--font-mono</code>
                      </TableCell>
                      <TableCell>monospace</TableCell>
                      <TableCell>Monospace font for code</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spacing Tokens</CardTitle>
                <CardDescription>
                  Spacing tokens for consistent layout across the system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <code>--spacing-0</code>
                      </TableCell>
                      <TableCell>0px</TableCell>
                      <TableCell>No spacing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--spacing-1</code>
                      </TableCell>
                      <TableCell>0.25rem (4px)</TableCell>
                      <TableCell>Extra small spacing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--spacing-2</code>
                      </TableCell>
                      <TableCell>0.5rem (8px)</TableCell>
                      <TableCell>Small spacing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--spacing-3</code>
                      </TableCell>
                      <TableCell>0.75rem (12px)</TableCell>
                      <TableCell>Medium-small spacing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--spacing-4</code>
                      </TableCell>
                      <TableCell>1rem (16px)</TableCell>
                      <TableCell>Medium spacing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--spacing-6</code>
                      </TableCell>
                      <TableCell>1.5rem (24px)</TableCell>
                      <TableCell>Medium-large spacing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--spacing-8</code>
                      </TableCell>
                      <TableCell>2rem (32px)</TableCell>
                      <TableCell>Large spacing</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="radius" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Border Radius Tokens</CardTitle>
                <CardDescription>
                  Border radius tokens for consistent component shapes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <code>--radius</code>
                      </TableCell>
                      <TableCell>0.625rem (10px)</TableCell>
                      <TableCell>Default border radius</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--radius-sm</code>
                      </TableCell>
                      <TableCell>0.375rem (6px)</TableCell>
                      <TableCell>Small border radius</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--radius-md</code>
                      </TableCell>
                      <TableCell>0.625rem (10px)</TableCell>
                      <TableCell>Medium border radius</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--radius-lg</code>
                      </TableCell>
                      <TableCell>0.875rem (14px)</TableCell>
                      <TableCell>Large border radius</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--radius-full</code>
                      </TableCell>
                      <TableCell>9999px</TableCell>
                      <TableCell>Fully rounded radius</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shadow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shadow Tokens</CardTitle>
                <CardDescription>
                  Shadow tokens for consistent elevation across the system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <code>--shadow-sm</code>
                      </TableCell>
                      <TableCell>0 1px 2px 0 rgb(0 0 0 / 0.05)</TableCell>
                      <TableCell>Small shadow</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--shadow</code>
                      </TableCell>
                      <TableCell>
                        0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 /
                        0.1)
                      </TableCell>
                      <TableCell>Default shadow</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--shadow-md</code>
                      </TableCell>
                      <TableCell>
                        0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0
                        0 / 0.1)
                      </TableCell>
                      <TableCell>Medium shadow</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>--shadow-lg</code>
                      </TableCell>
                      <TableCell>
                        0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0
                        0 0 / 0.1)
                      </TableCell>
                      <TableCell>Large shadow</TableCell>
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
