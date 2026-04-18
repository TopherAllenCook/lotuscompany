import React from "react";
import { LotusOpening }             from "./LotusOpening";
import { LotusMandateSlide }        from "./LotusMandateSlide";
import { LotusHousingProblemSlide } from "./LotusHousingProblemSlide";
import { LotusStructureSlide }      from "./LotusStructureSlide";
import { LotusWhyLotusSlide }       from "./LotusWhyLotusSlide";
import LIHTCSlide                   from "./LIHTCSlide";
import CapitalEngineSlide           from "./CapitalEngineSlide";
import CollectiveModelSlide         from "./CollectiveModelSlide";
import MembershipSlide              from "./MembershipSlide";
import DualDirectivesSlide          from "./DualDirectivesSlide";
import { EconomicsSlide }           from "./EconomicsSlide";
import { RiskControlsSlide }        from "./RiskControlsSlide";
import { ImpactDashboardSlide }     from "./ImpactDashboardSlide";
import { PipelineSlide }            from "./PipelineSlide";
import { ClosingSlide }             from "./ClosingSlide";

export const SLIDE_REGISTRY = [
  { key: "cover",            component: LotusOpening,             title: "Cover" },
  { key: "mandate",          component: LotusMandateSlide,        title: "The Mandate" },
  { key: "housing-problem",  component: LotusHousingProblemSlide, title: "Why Housing Needs This" },
  { key: "structure",        component: LotusStructureSlide,      title: "Why This Structure Exists" },
  { key: "why-lotus",        component: LotusWhyLotusSlide,       title: "Why Lotus" },
  { key: "lihtc",            component: LIHTCSlide,               title: "What LIHTC Is" },
  { key: "capital-engine",   component: CapitalEngineSlide,       title: "How the Capital Engine Works" },
  { key: "collective-model", component: CollectiveModelSlide,     title: "Why the Collective Model" },
  { key: "membership",       component: MembershipSlide,          title: "Membership Model" },
  { key: "dual-directives",  component: DualDirectivesSlide,      title: "Dual Directives" },
  { key: "economics",        component: EconomicsSlide,           title: "Economics" },
  { key: "risk-controls",    component: RiskControlsSlide,        title: "Risk Controls" },
  { key: "impact-dashboard", component: ImpactDashboardSlide,     title: "Impact Dashboard" },
  { key: "pipeline",         component: PipelineSlide,            title: "Pipeline + Readiness" },
  { key: "closing",          component: ClosingSlide,             title: "Closing" },
] as const;

export const slides = SLIDE_REGISTRY.map(({ key, component: Slide }) =>
  React.createElement(Slide, { key })
);
