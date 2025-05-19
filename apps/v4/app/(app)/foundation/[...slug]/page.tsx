import { notFound, redirect } from "next/navigation"

// Available foundation pages
const availablePages = [
  "color",
  "design-tokens",
  "motion",
  "object-styles",
  "spacing",
  "states",
  "typography",
  "brand-assets",
]

export default async function FoundationCatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const first = slug[0]

  // If the slug is one of our valid foundation pages, redirect to it
  if (availablePages.includes(first)) {
    redirect(`/foundation/${first}`)
  }

  // Otherwise, show 404
  return notFound()
}
