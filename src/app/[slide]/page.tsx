import { Deck } from "@/components/Deck";
import { slides, SLIDE_REGISTRY } from "@/slides";

export function generateStaticParams() {
  return SLIDE_REGISTRY.map((s) => ({ slide: s.key }));
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ slide: string }>;
}) {
  const { slide } = await params;
  const initialIndex = SLIDE_REGISTRY.findIndex((s) => s.key === slide);
  return <Deck slides={slides} initialIndex={initialIndex >= 0 ? initialIndex : 0} />;
}
