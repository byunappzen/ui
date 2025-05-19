import { Metadata } from "next"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

export const metadata: Metadata = {
  title: "States | AppZen Design System",
  description: "Component states in the AppZen design system.",
}

export default function StatesPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">States</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            States help users understand the current condition of interface
            elements and provide appropriate feedback.
          </p>
        </div>
        <Separator />

        <Tabs defaultValue="interactive">
          <TabsList className="mb-4">
            <TabsTrigger value="interactive">Interactive States</TabsTrigger>
            <TabsTrigger value="validation">Validation States</TabsTrigger>
            <TabsTrigger value="control">Control States</TabsTrigger>
          </TabsList>

          <TabsContent value="interactive" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Interactive States</CardTitle>
                  <CardDescription>
                    States that represent user interaction with elements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Interactive states communicate the current state of
                    interactive elements in response to user actions.
                    Consistency in interactive states helps users understand how
                    to interact with the interface.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <StateCard
                  title="Default"
                  description="Normal state before any interaction"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="default-button">Button</Label>
                      <Button id="default-button">Default Button</Button>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="default-input">Input</Label>
                      <Input id="default-input" placeholder="Default input" />
                    </div>
                  </div>
                </StateCard>

                <StateCard
                  title="Hover"
                  description="Element being pointed at by cursor"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="hover-button">Button</Label>
                      <Button
                        id="hover-button"
                        className="bg-primary/90 hover:bg-primary/90"
                      >
                        Hover Button
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hover-input">Input</Label>
                      <Input
                        id="hover-input"
                        className="border-input/90"
                        placeholder="Hover input"
                      />
                    </div>
                  </div>
                </StateCard>

                <StateCard
                  title="Focus"
                  description="Element receiving keyboard focus"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="focus-button">Button</Label>
                      <Button
                        id="focus-button"
                        className="ring-primary/30 ring-2 ring-offset-2"
                      >
                        Focus Button
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="focus-input">Input</Label>
                      <Input
                        id="focus-input"
                        className="ring-primary/30 ring-2 ring-offset-2"
                        placeholder="Focus input"
                      />
                    </div>
                  </div>
                </StateCard>

                <StateCard
                  title="Active/Pressed"
                  description="Element being clicked or activated"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="active-button">Button</Label>
                      <Button
                        id="active-button"
                        className="translate-y-[1px] shadow-sm"
                      >
                        Active Button
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="active-input">Input</Label>
                      <Input
                        id="active-input"
                        className="border-primary bg-primary/5"
                        placeholder="Active input"
                      />
                    </div>
                  </div>
                </StateCard>

                <StateCard
                  title="Disabled"
                  description="Element that cannot be interacted with"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="disabled-button"
                        className="text-muted-foreground"
                      >
                        Button
                      </Label>
                      <Button id="disabled-button" disabled>
                        Disabled Button
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="disabled-input"
                        className="text-muted-foreground"
                      >
                        Input
                      </Label>
                      <Input
                        id="disabled-input"
                        disabled
                        placeholder="Disabled input"
                      />
                    </div>
                  </div>
                </StateCard>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="validation" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Validation States</CardTitle>
                  <CardDescription>
                    States that represent validation feedback
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Validation states provide feedback about the validity of
                    user input. Clear visual indicators help users understand
                    and correct issues.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <StateCard
                  title="Default"
                  description="No validation applied yet"
                >
                  <div className="space-y-2">
                    <Label htmlFor="default-validation">Input</Label>
                    <Input id="default-validation" placeholder="Enter value" />
                  </div>
                </StateCard>

                <StateCard
                  title="Valid"
                  description="Input meets all requirements"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="valid-input"
                      className="text-green-700 dark:text-green-500"
                    >
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="valid-input"
                        value="user@example.com"
                        className="border-green-500 pr-10 focus-visible:ring-green-500/20"
                      />
                      <div className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-green-500 p-0.5 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-500">
                      Email is valid
                    </p>
                  </div>
                </StateCard>

                <StateCard
                  title="Invalid"
                  description="Input has errors that need correction"
                >
                  <div className="space-y-2">
                    <Label htmlFor="invalid-input" className="text-destructive">
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="invalid-input"
                        value="invalid-email"
                        className="border-destructive focus-visible:ring-destructive/20 pr-10"
                      />
                      <div className="bg-destructive text-destructive-foreground absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-3"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-destructive text-xs">
                      Please enter a valid email address
                    </p>
                  </div>
                </StateCard>

                <StateCard
                  title="Warning"
                  description="Input may need attention but is not invalid"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="warning-input"
                      className="text-amber-600 dark:text-amber-500"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="warning-input"
                        type="password"
                        value="password123"
                        className="border-amber-500 pr-10 focus-visible:ring-amber-500/20"
                      />
                      <div className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-amber-500 p-0.5 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-3"
                        >
                          <path d="M12 9v4" />
                          <path d="M12 17h.01" />
                          <path d="m19 6-7-4-7 4v12l7 4 7-4z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-amber-600 dark:text-amber-500">
                      Password is too weak
                    </p>
                  </div>
                </StateCard>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="control" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Control States</CardTitle>
                  <CardDescription>
                    States for selection and control elements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Control states represent the current state of selection
                    components like checkboxes, radio buttons, and toggles. They
                    help users understand what options are currently selected.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <StateCard
                  title="Selected/Checked"
                  description="Control is in an active/selected state"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="checked" checked />
                      <Label htmlFor="checked">Checkbox (selected)</Label>
                    </div>

                    <RadioGroup defaultValue="selected">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="selected" id="selected" />
                        <Label htmlFor="selected">Radio (selected)</Label>
                      </div>
                    </RadioGroup>

                    <div className="flex items-center space-x-2">
                      <Switch id="switch-checked" checked />
                      <Label htmlFor="switch-checked">Toggle (on)</Label>
                    </div>
                  </div>
                </StateCard>

                <StateCard
                  title="Unselected"
                  description="Control is not selected"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="unchecked" />
                      <Label htmlFor="unchecked">Checkbox (unselected)</Label>
                    </div>

                    <RadioGroup defaultValue="selected">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unselected" id="unselected" />
                        <Label htmlFor="unselected">Radio (unselected)</Label>
                      </div>
                    </RadioGroup>

                    <div className="flex items-center space-x-2">
                      <Switch id="switch-unchecked" />
                      <Label htmlFor="switch-unchecked">Toggle (off)</Label>
                    </div>
                  </div>
                </StateCard>

                <StateCard
                  title="Indeterminate"
                  description="Control is partially selected"
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className="border-primary bg-primary/30 flex h-4 w-4 items-center justify-center rounded border"
                      aria-checked="mixed"
                    >
                      <div className="bg-primary h-1.5 w-1.5 rounded-full"></div>
                    </div>
                    <Label>Checkbox (indeterminate)</Label>
                  </div>
                </StateCard>

                <StateCard
                  title="Disabled"
                  description="Control cannot be interacted with"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="disabled-checkbox" disabled />
                      <Label
                        htmlFor="disabled-checkbox"
                        className="text-muted-foreground"
                      >
                        Checkbox (disabled)
                      </Label>
                    </div>

                    <RadioGroup disabled>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="disabled-radio"
                          id="disabled-radio"
                        />
                        <Label
                          htmlFor="disabled-radio"
                          className="text-muted-foreground"
                        >
                          Radio (disabled)
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="flex items-center space-x-2">
                      <Switch id="disabled-switch" disabled />
                      <Label
                        htmlFor="disabled-switch"
                        className="text-muted-foreground"
                      >
                        Toggle (disabled)
                      </Label>
                    </div>
                  </div>
                </StateCard>

                <StateCard
                  title="Disabled & Selected"
                  description="Control is selected but cannot be changed"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="disabled-checked" disabled checked />
                      <Label
                        htmlFor="disabled-checked"
                        className="text-muted-foreground"
                      >
                        Checkbox (disabled & checked)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="disabled-checked-switch" disabled checked />
                      <Label
                        htmlFor="disabled-checked-switch"
                        className="text-muted-foreground"
                      >
                        Toggle (disabled & on)
                      </Label>
                    </div>
                  </div>
                </StateCard>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface StateCardProps {
  title: string
  description: string
  children: React.ReactNode
}

function StateCard({ title, description, children }: StateCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="mb-3">
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="pt-2">{children}</div>
    </div>
  )
}
