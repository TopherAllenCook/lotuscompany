/**
 * SLIDE REGISTRY — edit this file to add, remove, or reorder slides.
 *
 * To add a new slide:
 *   1. Create  src/slides/YourNameSlide.tsx
 *   2. Add images to  public/slides/your-name/
 *   3. Import and add an entry below — done.
 *
 * Slide image convention:
 *   public/slides/[slide-key]/   ← put this slide's images here
 *
 * Existing image locations (legacy):
 *   public/intro/                ← IntroSlide frame images
 *   public/steelton-village/     ← Steelton renders (committed)
 *   public/nova/                 ← Nova shoot (gitignored — use public/slides/ for new)
 */

import React from "react";
import { IntroSlide }         from "./IntroSlide";
import { BeliefSlide }        from "./BeliefSlide";
import { ExecSummarySlide }   from "./ExecSummarySlide";
import { CoverSlide }         from "./CoverSlide";
import { ImpactSlide }        from "./ImpactSlide";
import { CommunitySlide }     from "./CommunitySlide";
import { RenderingsSlide }    from "./RenderingsSlide";
import { PortfolioSlide }     from "./PortfolioSlide";
import { LotusWaySlide }      from "./LotusWaySlide";
import { ImpactProfileSlide } from "./ImpactProfileSlide";

export const SLIDE_REGISTRY = [
  { key: "intro",          component: IntroSlide,          title: "Intro" },
  { key: "belief",         component: BeliefSlide,         title: "Belief" },
  { key: "exec-summary",   component: ExecSummarySlide,    title: "Executive Summary" },
  { key: "cover",          component: CoverSlide,          title: "Steelton Village" },
  { key: "impact",         component: ImpactSlide,         title: "Impact" },
  { key: "community",      component: CommunitySlide,      title: "Community" },
  { key: "renderings",     component: RenderingsSlide,     title: "Renderings" },
  { key: "portfolio",      component: PortfolioSlide,      title: "Portfolio" },
  { key: "lotus-way",      component: LotusWaySlide,       title: "The Lotus Way" },
  { key: "impact-profile", component: ImpactProfileSlide,  title: "Impact Profile" },
] as const;

export const slides = SLIDE_REGISTRY.map(({ key, component: Slide }) =>
  React.createElement(Slide, { key })
);
