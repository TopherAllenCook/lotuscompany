import React from "react";

// ── Platform slides ────────────────────────────────────────────────────────
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
import { LotusWaySlide }            from "./LotusWaySlide";
import { LIHTCRentsSlide }          from "./LIHTCRentsSlide";
import { PartnersSlide }            from "./PartnersSlide";
import { ClosingSlide }             from "./ClosingSlide";

// ── Per-project slide components ───────────────────────────────────────────
import { ProjectCoverSlide }            from "./ProjectCoverSlide";
import { ProjectLotusWaySlide }         from "./ProjectLotusWaySlide";
import { ProjectImpactDirectiveSlide }  from "./ProjectImpactDirectiveSlide";
import { ProjectInvestmentDirectiveSlide } from "./ProjectInvestmentDirectiveSlide";
import { ProjectCommitmentSlide }       from "./ProjectCommitmentSlide";
import { ProjectPartnershipTermsSlide } from "./ProjectPartnershipTermsSlide";
import { ProjectTeamSlide }             from "./ProjectTeamSlide";

// ── Project data ───────────────────────────────────────────────────────────
import { STEELTON, FORGE, UPARKWAY, LOTUS_VALE } from "./projectData";

export const SLIDE_REGISTRY = [
  // Platform — intro
  { key: "cover",            component: LotusOpening,             title: "Cover"                       },
  { key: "why-lotus",        component: LotusWhyLotusSlide,       title: "Why Lotus"                   },
  { key: "mandate",          component: LotusMandateSlide,        title: "The Mandate"                 },
  { key: "housing-problem",  component: LotusHousingProblemSlide, title: "Why Housing Needs This"      },
  { key: "structure",        component: LotusStructureSlide,      title: "Why This Structure Exists"   },
  { key: "lotus-way",        component: LotusWaySlide,            title: "The Lotus Way"               },

  // Platform — capital mechanics
  { key: "lihtc",            component: LIHTCSlide,               title: "What LIHTC Is"               },
  { key: "lihtc-rents",      component: LIHTCRentsSlide,          title: "How LIHTC Lowers Rents"      },
  { key: "capital-engine",   component: CapitalEngineSlide,       title: "How the Capital Engine Works" },
  { key: "collective-model", component: CollectiveModelSlide,     title: "Why the Collective Model"    },
  { key: "membership",       component: MembershipSlide,          title: "Membership Model"            },

  // Platform — structure & risk
  { key: "dual-directives",  component: DualDirectivesSlide,      title: "Dual Directives"             },
  { key: "economics",        component: EconomicsSlide,           title: "Economics"                   },
  { key: "risk-controls",    component: RiskControlsSlide,        title: "Risk Controls"               },

  // Platform — results & partners
  { key: "impact-dashboard", component: ImpactDashboardSlide,     title: "Impact Dashboard"            },
  { key: "pipeline",         component: PipelineSlide,            title: "Pipeline + Readiness"        },
  { key: "partners",         component: PartnersSlide,            title: "Capital Partners"            },

  // ── Steelton Village ──────────────────────────────────────────────────────
  { key: "steelton-cover",        component: () => React.createElement(ProjectCoverSlide,            { project: STEELTON }), title: "Steelton Village — Cover"              },
  { key: "steelton-lotus-way",    component: () => React.createElement(ProjectLotusWaySlide,         { project: STEELTON }), title: "Steelton Village — The Lotus Way"      },
  { key: "steelton-team",         component: () => React.createElement(ProjectTeamSlide,             { project: STEELTON }), title: "Steelton Village — Development Team"   },

  // ── Forge ─────────────────────────────────────────────────────────────────
  { key: "forge-cover",           component: () => React.createElement(ProjectCoverSlide,            { project: FORGE }),    title: "Forge — Cover"              },
  { key: "forge-lotus-way",       component: () => React.createElement(ProjectLotusWaySlide,         { project: FORGE }),    title: "Forge — The Lotus Way"      },
  { key: "forge-team",            component: () => React.createElement(ProjectTeamSlide,             { project: FORGE }),    title: "Forge — Development Team"   },

  // ── University Parkway ────────────────────────────────────────────────────
  { key: "uparkway-cover",        component: () => React.createElement(ProjectCoverSlide,            { project: UPARKWAY }), title: "University Parkway — Cover"              },
  { key: "uparkway-lotus-way",    component: () => React.createElement(ProjectLotusWaySlide,         { project: UPARKWAY }), title: "University Parkway — The Lotus Way"      },
  { key: "uparkway-team",         component: () => React.createElement(ProjectTeamSlide,             { project: UPARKWAY }), title: "University Parkway — Development Team"   },

  // ── Lotus Vale ────────────────────────────────────────────────────────────
  { key: "lotus-vale-cover",       component: () => React.createElement(ProjectCoverSlide,            { project: LOTUS_VALE }), title: "Lotus Vale — Cover"              },
  { key: "lotus-vale-lotus-way",   component: () => React.createElement(ProjectLotusWaySlide,         { project: LOTUS_VALE }), title: "Lotus Vale — The Lotus Way"      },
  { key: "lotus-vale-team",        component: () => React.createElement(ProjectTeamSlide,             { project: LOTUS_VALE }), title: "Lotus Vale — Development Team"   },

  // Platform — close
  { key: "closing",          component: ClosingSlide,             title: "Closing"                     },
] as const;

export const slides = SLIDE_REGISTRY.map(({ key, component: Slide }) =>
  React.createElement(Slide, { key })
);
