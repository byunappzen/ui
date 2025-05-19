import { Metadata } from "next"

import { Button } from "@/registry/new-york-v4/ui/button"
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
  title: "Motion | AppZen Design System",
  description:
    "Motion and animation patterns used in the AppZen design system.",
}

export default function MotionPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Motion</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Motion brings our interface to life, guiding users through workflows
            and providing feedback.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="principles">
          <TabsList className="mb-4">
            <TabsTrigger value="principles">Principles</TabsTrigger>
            <TabsTrigger value="timing">Timing</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="principles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Motion Principles</CardTitle>
                <CardDescription>
                  Core principles that guide motion design in AppZen.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Purposeful</h3>
                  <p>
                    Motion should serve a purpose and enhance the user
                    experience, not distract from it. Every animation should
                    help users understand what&apos;s happening in the
                    interface.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Responsive</h3>
                  <p>
                    Motion should provide immediate feedback to user actions,
                    reinforcing the feeling of direct manipulation and
                    responsiveness.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Natural</h3>
                  <p>
                    Motion should feel natural and adhere to the principles of
                    physics, using appropriate easing curves that mimic the real
                    world.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Consistent</h3>
                  <p>
                    Similar actions should have similar animations to build a
                    cohesive experience and establish a predictable pattern
                    language for users.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Motion Timing</CardTitle>
                <CardDescription>
                  Duration and easing values used for animations in AppZen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Easing</TableHead>
                      <TableHead>Usage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Instant</TableCell>
                      <TableCell>100ms</TableCell>
                      <TableCell>cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
                      <TableCell>
                        Micro-interactions, button state changes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quick</TableCell>
                      <TableCell>150ms</TableCell>
                      <TableCell>cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
                      <TableCell>Small UI element transitions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Standard</TableCell>
                      <TableCell>200ms</TableCell>
                      <TableCell>cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
                      <TableCell>Most interface transitions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Emphasized</TableCell>
                      <TableCell>300ms</TableCell>
                      <TableCell>cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
                      <TableCell>Important elements, modals, drawers</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Large</TableCell>
                      <TableCell>400ms</TableCell>
                      <TableCell>cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
                      <TableCell>
                        Page transitions, complex animations
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <MotionExample
                title="Button Hover"
                description="Subtle background shift on hover"
              >
                <Button className="hover:bg-primary/90 transition-all duration-150">
                  Hover Me
                </Button>
              </MotionExample>

              <MotionExample
                title="Button Press"
                description="Scale reduction on press"
              >
                <Button className="transition-all duration-100 active:scale-95">
                  Press Me
                </Button>
              </MotionExample>

              <MotionExample
                title="Fade In"
                description="Opacity transition for elements entering the view"
              >
                <div className="animate-in fade-in duration-300">
                  <div className="bg-muted flex h-20 w-full items-center justify-center rounded-md">
                    <p>Faded In</p>
                  </div>
                </div>
              </MotionExample>

              <MotionExample
                title="Slide Up"
                description="Elements entering from bottom to current position"
              >
                <div className="animate-in slide-in-from-bottom duration-300">
                  <div className="bg-muted flex h-20 w-full items-center justify-center rounded-md">
                    <p>Slid Up</p>
                  </div>
                </div>
              </MotionExample>

              <MotionExample
                title="Scale In"
                description="Element grows from smaller size"
              >
                <div className="animate-in zoom-in duration-300">
                  <div className="bg-muted flex h-20 w-full items-center justify-center rounded-md">
                    <p>Scaled In</p>
                  </div>
                </div>
              </MotionExample>

              <MotionExample
                title="Bounce"
                description="Playful bounce effect for attention"
              >
                <Button className="animate-bounce">Bounce</Button>
              </MotionExample>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface MotionExampleProps {
  title: string
  description: string
  children: React.ReactNode
}

function MotionExample({ title, description, children }: MotionExampleProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center pt-4">
        {children}
      </CardContent>
    </Card>
  )
}
