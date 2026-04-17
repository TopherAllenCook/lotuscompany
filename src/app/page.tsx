import { Deck } from "@/components/Deck";
import { IntroSlide } from "@/slides/IntroSlide";
import { CoverSlide } from "@/slides/Cover";
import { ImpactSlide } from "@/slides/ImpactSlide";
import { CommunitySlide } from "@/slides/CommunitySlide";
import { RenderingsSlide } from "@/slides/RenderingsSlide";
import { PortfolioSlide } from "@/slides/PortfolioSlide";
import { LotusWaySlide } from "@/slides/LotusWaySlide";
import { ImpactProfileSlide } from "@/slides/ImpactProfileSlide";

const slides = [
  <IntroSlide key="intro" />,
  <CoverSlide key="cover" />,
  <ImpactSlide key="impact" />,
  <CommunitySlide key="community" />,
  <RenderingsSlide key="renderings" />,
  <PortfolioSlide key="portfolio" />,
  <LotusWaySlide key="lotus-way" />,
  <ImpactProfileSlide key="impact-profile" />,
];

export default function Home() {
  return <Deck slides={slides} />;
}
