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
  title: "Spacing | AppZen Design System",
  description: "Spacing system used in the AppZen design system.",
}

export default function SpacingPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Spacing</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            A consistent spacing system helps maintain visual harmony across the
            interface.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="scale">
          <TabsList className="mb-4">
            <TabsTrigger value="scale">Scale</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="scale" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale</CardTitle>
                <CardDescription>
                  AppZen uses a consistent spacing scale across the entire
                  design system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Token</TableHead>
                        <TableHead>Pixel Value</TableHead>
                        <TableHead>Rem Value</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-0</TableCell>
                        <TableCell>0px</TableCell>
                        <TableCell>0rem</TableCell>
                        <TableCell>No spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">
                          --spacing-px
                        </TableCell>
                        <TableCell>1px</TableCell>
                        <TableCell>0.0625rem</TableCell>
                        <TableCell>Single pixel spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">
                          --spacing-0.5
                        </TableCell>
                        <TableCell>2px</TableCell>
                        <TableCell>0.125rem</TableCell>
                        <TableCell>Micro spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-1</TableCell>
                        <TableCell>4px</TableCell>
                        <TableCell>0.25rem</TableCell>
                        <TableCell>Tiny spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">
                          --spacing-1.5
                        </TableCell>
                        <TableCell>6px</TableCell>
                        <TableCell>0.375rem</TableCell>
                        <TableCell>Extra small spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-2</TableCell>
                        <TableCell>8px</TableCell>
                        <TableCell>0.5rem</TableCell>
                        <TableCell>Small spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">
                          --spacing-2.5
                        </TableCell>
                        <TableCell>10px</TableCell>
                        <TableCell>0.625rem</TableCell>
                        <TableCell>Small-medium spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-3</TableCell>
                        <TableCell>12px</TableCell>
                        <TableCell>0.75rem</TableCell>
                        <TableCell>Medium spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-4</TableCell>
                        <TableCell>16px</TableCell>
                        <TableCell>1rem</TableCell>
                        <TableCell>Base spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-5</TableCell>
                        <TableCell>20px</TableCell>
                        <TableCell>1.25rem</TableCell>
                        <TableCell>Medium-large spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-6</TableCell>
                        <TableCell>24px</TableCell>
                        <TableCell>1.5rem</TableCell>
                        <TableCell>Large spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">--spacing-8</TableCell>
                        <TableCell>32px</TableCell>
                        <TableCell>2rem</TableCell>
                        <TableCell>Extra large spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">
                          --spacing-10
                        </TableCell>
                        <TableCell>40px</TableCell>
                        <TableCell>2.5rem</TableCell>
                        <TableCell>2x large spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">
                          --spacing-12
                        </TableCell>
                        <TableCell>48px</TableCell>
                        <TableCell>3rem</TableCell>
                        <TableCell>3x large spacing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">
                          --spacing-16
                        </TableCell>
                        <TableCell>64px</TableCell>
                        <TableCell>4rem</TableCell>
                        <TableCell>4x large spacing</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Spacing Guidelines</CardTitle>
                  <CardDescription>
                    How to use spacing effectively in designs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Consistency First</h3>
                    <p className="text-muted-foreground text-sm">
                      Always use the spacing tokens rather than arbitrary values
                      to maintain consistency across the interface.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Component Spacing</h3>
                    <p className="text-muted-foreground text-sm">
                      For component internal spacing, use smaller values (1-4).
                      For spacing between components, use medium to large values
                      (4-10).
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Layout Spacing</h3>
                    <p className="text-muted-foreground text-sm">
                      For section and page-level spacing, use larger values
                      (8-16). Consider using even more spacing for major
                      sectional divisions.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Proximity and Hierarchy</h3>
                    <p className="text-muted-foreground text-sm">
                      Items that are related should be grouped closer together.
                      Use spacing to establish visual hierarchy and
                      relationships.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Common Use Cases</CardTitle>
                    <CardDescription>
                      Recommended spacing values for common UI patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="font-semibold">Button padding:</span> 2
                        (8px) for small buttons, 3 (12px) for medium, 4 (16px)
                        for large
                      </li>
                      <li>
                        <span className="font-semibold">Form field gaps:</span>{" "}
                        4 (16px) to 6 (24px)
                      </li>
                      <li>
                        <span className="font-semibold">Card padding:</span> 4
                        (16px) to 6 (24px)
                      </li>
                      <li>
                        <span className="font-semibold">Section padding:</span>{" "}
                        6 (24px) to 10 (40px)
                      </li>
                      <li>
                        <span className="font-semibold">Icon to text:</span> 1.5
                        (6px) to 2 (8px)
                      </li>
                      <li>
                        <span className="font-semibold">Paragraph margin:</span>{" "}
                        3 (12px) to 4 (16px)
                      </li>
                      <li>
                        <span className="font-semibold">
                          List item spacing:
                        </span>{" "}
                        2 (8px) to 3 (12px)
                      </li>
                      <li>
                        <span className="font-semibold">Grid gaps:</span> 4
                        (16px) to 8 (32px)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Responsive Considerations</CardTitle>
                    <CardDescription>
                      Adapting spacing for different screen sizes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="font-semibold">Mobile:</span> Generally
                        reduce spacing by one step (e.g. from 4 to 3)
                      </li>
                      <li>
                        <span className="font-semibold">Tablet:</span> Use
                        standard spacing values
                      </li>
                      <li>
                        <span className="font-semibold">Desktop:</span> May
                        increase spacing for some layout elements
                      </li>
                      <li>
                        <span className="font-semibold">Page margins:</span> 4
                        (16px) for mobile, 6 (24px) for tablet, 8+ (32px+) for
                        desktop
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <div className="space-y-10">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Inset Spacing (Padding)
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
                  <SpacingExample name="p-1" value="0.25rem (4px)">
                    <div className="bg-muted-foreground/10 border-muted-foreground flex items-center justify-center border border-dashed p-1">
                      <div className="bg-primary text-primary-foreground w-full rounded-sm p-2 text-center text-xs">
                        p-1
                      </div>
                    </div>
                  </SpacingExample>

                  <SpacingExample name="p-2" value="0.5rem (8px)">
                    <div className="bg-muted-foreground/10 border-muted-foreground flex items-center justify-center border border-dashed p-2">
                      <div className="bg-primary text-primary-foreground w-full rounded-sm p-2 text-center text-xs">
                        p-2
                      </div>
                    </div>
                  </SpacingExample>

                  <SpacingExample name="p-4" value="1rem (16px)">
                    <div className="bg-muted-foreground/10 border-muted-foreground flex items-center justify-center border border-dashed p-4">
                      <div className="bg-primary text-primary-foreground w-full rounded-sm p-2 text-center text-xs">
                        p-4
                      </div>
                    </div>
                  </SpacingExample>

                  <SpacingExample name="p-6" value="1.5rem (24px)">
                    <div className="bg-muted-foreground/10 border-muted-foreground flex items-center justify-center border border-dashed p-6">
                      <div className="bg-primary text-primary-foreground w-full rounded-sm p-2 text-center text-xs">
                        p-6
                      </div>
                    </div>
                  </SpacingExample>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Gap Spacing</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <SpacingExample name="gap-2" value="0.5rem (8px)">
                    <div className="bg-muted-foreground/10 border-muted-foreground flex flex-col gap-2 border border-dashed p-4">
                      <div className="bg-primary text-primary-foreground rounded-sm p-2 text-center text-xs">
                        Item 1
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-sm p-2 text-center text-xs">
                        Item 2
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-sm p-2 text-center text-xs">
                        Item 3
                      </div>
                    </div>
                  </SpacingExample>

                  <SpacingExample name="gap-4" value="1rem (16px)">
                    <div className="bg-muted-foreground/10 border-muted-foreground flex flex-col gap-4 border border-dashed p-4">
                      <div className="bg-primary text-primary-foreground rounded-sm p-2 text-center text-xs">
                        Item 1
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-sm p-2 text-center text-xs">
                        Item 2
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-sm p-2 text-center text-xs">
                        Item 3
                      </div>
                    </div>
                  </SpacingExample>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Margin Spacing</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <SpacingExample name="m-4" value="1rem (16px)">
                    <div className="bg-muted-foreground/10 border-muted-foreground border border-dashed p-8">
                      <div className="bg-primary text-primary-foreground m-4 rounded-sm p-4 text-center text-xs">
                        m-4
                      </div>
                    </div>
                  </SpacingExample>

                  <SpacingExample
                    name="mx-4 my-2"
                    value="Horizontal: 1rem, Vertical: 0.5rem"
                  >
                    <div className="bg-muted-foreground/10 border-muted-foreground border border-dashed p-8">
                      <div className="bg-primary text-primary-foreground mx-4 my-2 rounded-sm p-4 text-center text-xs">
                        mx-4 my-2
                      </div>
                    </div>
                  </SpacingExample>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface SpacingExampleProps {
  name: string
  value: string
  children: React.ReactNode
}

function SpacingExample({ name, value, children }: SpacingExampleProps) {
  return (
    <div className="space-y-2">
      {children}
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground text-xs">{value}</p>
      </div>
    </div>
  )
}
