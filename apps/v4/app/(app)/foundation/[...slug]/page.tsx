import { type Metadata } from "next"
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

export default function FoundationCatchAllPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const slug = params.slug[0]

  // If the slug is one of our valid foundation pages, redirect to it
  if (availablePages.includes(slug)) {
    redirect(`/foundation/${slug}`)
  }

  // Otherwise, show 404
  return notFound()
}
