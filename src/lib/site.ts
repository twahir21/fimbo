import type { IconType } from "react-icons";
import {
  MdFingerprint,
  MdLocalFireDepartment,
  MdOutlineAdminPanelSettings,
  MdOutlineSecurity,
  MdSchool,
  MdVideocam,
} from "react-icons/md";

export const SITE = {
  name: "Fimbo Consultants Company",
  short: "Fimbo Consultants",
  // Set NEXT_PUBLIC_SITE_URL in .env.local / your host to the real domain.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://fimboconsultants.co.tz"
  ).replace(/\/$/, ""),
  tagline: "Security, risk and fraud consultancy in Dar es Salaam, Tanzania",
  description:
    "Fimbo Consultants Company is a registered Tanzanian firm offering physical and technical security consultancy, professional staff vetting, fraud investigation training and fire safety for banks, firms and institutions.",
  email: "info@fimbo.co.tz or adelbert.sugwa@fimbo.co.tz or  tzifanda@fimbo.co.tz",
  phones: [
    // { label: "+255 713 054 387 / +255 753 345 659", e164: "+255713054387" },
    { label: "+255 759 789 196", e164: "+255759789196" },
  ],
  whatsapp: "https://wa.me/255753345659",
  address: {
    street: "Mgulani/Taifa Offices, Room 38",
    poBox: "P. O. Box 3869",
    city: "Dar es Salaam",
    country: "Tanzania",
    countryCode: "TZ",
  },
  policeClearance: { year: 2013, ref: "FB/CID/G.4/2013/VOL 1/95900" },
  lastUpdated: "2026-10-13",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  points: { title: string; detail: string }[];
  keywords: string[];
  icon: IconType;
};

export const SERVICES: Service[] = [
  {
    slug: "physical-security-consultancy",
    title: "Physical security consultancy",
    short:
      "Keep unauthorised people out of your premises and limit the damage when something gets through.",
    intro:
      "Physical security is about restricting access to controlled facilities by unauthorised people. It is also about limiting access inside a facility, protecting specific assets, and reducing physical incidents such as fires and floods. We design and review your controls so each layer has a clear job, and so the cost of every control matches the risk it covers.",
    points: [
      {
        title: "Deter",
        detail:
          "Warning signs and perimeter markings that discourage intruders before they try.",
      },
      {
        title: "Distinguish",
        detail:
          "Keycards and access badges that separate authorised people from everyone else.",
      },
      {
        title: "Delay",
        detail:
          "Strong walls, door locks and safes that frustrate and ideally prevent intrusion.",
      },
      {
        title: "Detect",
        detail:
          "Intruder alarms and CCTV that detect intrusions and record intruders.",
      },
      {
        title: "Respond",
        detail: "Clear incident responses by security guards and police.",
      },
      {
        title: "Right-sized design",
        detail:
          "Controls weighed against cost, aesthetics, human rights, health and safety, and local norms.",
      },
    ],
    keywords: [
      "physical security consultancy Tanzania",
      "access control",
      "CCTV design",
      "security risk assessment Dar es Salaam",
    ],
    icon: MdOutlineSecurity,
  },
  {
    slug: "security-management",
    title: "Security management",
    short:
      "Manage the risk of theft, armed robbery, money laundering and fraud across your institution.",
    intro:
      "We advise institutions, firms, companies and organisations on how to run their security systems against theft, armed robbery, money laundering and fraud. Every recommendation is shaped around the environment your institution actually works in.",
    points: [
      {
        title: "Theft",
        detail:
          "Controls and procedures that reduce loss of cash, stock and equipment.",
      },
      {
        title: "Armed robbery",
        detail:
          "Security arrangements for branches, cash handling and high-value assets.",
      },
      {
        title: "Money laundering",
        detail:
          "Systems that help your institution spot and manage laundering risk.",
      },
      {
        title: "Fraud",
        detail: "Practical safeguards against internal and external fraud.",
      },
      {
        title: "Fit for your setting",
        detail:
          "Advice tailored to the needs of your institution and its environment.",
      },
    ],
    keywords: [
      "security management consultancy",
      "anti money laundering Tanzania",
      "bank security advisory",
      "armed robbery prevention",
    ],
    icon: MdOutlineAdminPanelSettings,
  },
  {
    slug: "staff-vetting",
    title: "Professional staff vetting",
    short:
      "Check the people you hire: education, employment history, fingerprints and criminal records.",
    intro:
      "Our professional investigation supports your human resources department by looking into a candidate's conduct before recruitment, to the depth your type of business requires. We follow up previous conduct and cover police criminal clearance, certificates of good conduct, fingerprint vetting and citizenship.",
    points: [
      {
        title: "Education vetting",
        detail:
          "Secondary school, college or university, and training institution records.",
      },
      {
        title: "Employment vetting",
        detail:
          "Work history, performance, reason for leaving, disciplinary record and re-hire decision.",
      },
      {
        title: "Fingerprint vetting",
        detail:
          "Follow-up on criminal records, physical fingerprint taking and submission of fingerprint documents.",
      },
      {
        title: "Clearance checks",
        detail:
          "Police criminal clearance, certificate of good conduct and citizenship.",
      },
    ],
    keywords: [
      "staff vetting Tanzania",
      "background check Dar es Salaam",
      "pre-employment screening",
      "fingerprint vetting",
      "police clearance",
    ],
    icon: MdFingerprint,
  },
  {
    slug: "technical-security",
    title: "Technical security",
    short:
      "Install and maintain the tools that detect fraud, skimming and crime.",
    intro:
      "We provide technical support on institutional security, fraud, money laundering and skimming. That covers crime detection tools and techniques, such as installing CCTV cameras and checking them regularly, and other measures that protect your institution against crime and hazards.",
    points: [
      {
        title: "CCTV",
        detail:
          "Installation and regular checkups so cameras record when you need them.",
      },
      {
        title: "Skimming and fraud",
        detail:
          "Technical support to detect and respond to ATM skimming and card fraud.",
      },
      {
        title: "Money laundering controls",
        detail:
          "Technical measures that support your compliance and detection work.",
      },
      {
        title: "Crime and hazard protection",
        detail: "Other security measures that protect people, cash and assets.",
      },
    ],
    keywords: [
      "CCTV installation Dar es Salaam",
      "ATM skimming prevention",
      "technical security consultancy",
      "fraud detection tools",
    ],
    icon: MdVideocam,
  },
  {
    slug: "fire-safety-and-risk-management",
    title: "Fire safety and risk management",
    short:
      "Prepare your people for fire: awareness, protection and firefighting.",
    intro:
      "We consult on fire awareness programmes and train staff in fire safety awareness, fire protection and firefighting, so your people know what to do before, during and after an incident.",
    points: [
      {
        title: "Fire awareness programmes",
        detail:
          "Consultation on programmes that keep fire risk visible to every employee.",
      },
      {
        title: "Fire safety training",
        detail: "Training in fire safety awareness for staff and management.",
      },
      {
        title: "Fire protection",
        detail: "Guidance on protecting premises, people and assets.",
      },
      {
        title: "Firefighting",
        detail: "Practical firefighting training for your teams.",
      },
    ],
    keywords: [
      "fire safety training Tanzania",
      "firefighting training Dar es Salaam",
      "fire awareness programme",
      "risk management consultancy",
    ],
    icon: MdLocalFireDepartment,
  },
  {
    slug: "security-and-fraud-training",
    title: "Security and fraud training",
    short:
      "Train staff to prevent, spot and investigate fraud, and to give evidence when it matters.",
    intro:
      "Criminal tactics change every day, so staff training has to keep up. We run periodic training shaped around what your institution needs in a given period. Our staff have worked jointly with the Police Force to deliver training at banks and other institutions across Tanzania.",
    points: [
      {
        title: "Fraud",
        detail:
          "Prevention of fraud and the causes of fraud, drawing on the ACFE 2008 Report to the Nations.",
      },
      {
        title: "Investigation",
        detail:
          "Planning, sources of information, computer forensics, interviewing and evaluating deception.",
      },
      {
        title: "Fraudulent financial transactions",
        detail:
          "Risk assessment, fraud schemes, financial analysis and financial statement fraud.",
      },
      {
        title: "Legal elements",
        detail:
          "Elements of fraud, rules of evidence, legal issues and testifying.",
      },
    ],
    keywords: [
      "fraud investigation training Tanzania",
      "fraud prevention training banks",
      "computer forensics training",
      "ACFE fraud course",
    ],
    icon: MdSchool,
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const VETTING_TABS = [
  {
    id: "education",
    label: "Education",
    lead: "Confirm that qualifications are real and were earned where the candidate says they were.",
    items: [
      "Secondary school",
      "College or university",
      "Training institutions and more",
    ],
  },
  {
    id: "employment",
    label: "Employment",
    lead: "Learn how a candidate behaved at work, from the people who worked with them.",
    items: [
      "Employment background",
      "Work performance",
      "Employer and employee relationship",
      "Reason for termination, resignation or retrenchment",
      "Mode of notice imposed, if not terminated",
      "Integrity and conduct towards the employer",
      "Attitude and interpersonal skills",
      "Disciplinary record",
      "Re-hire decision",
      "Prolonged absence",
    ],
  },
  {
    id: "fingerprint",
    label: "Fingerprint",
    lead: "Match a person's identity against criminal records.",
    items: [
      "Follow-up on criminal records",
      "Fingerprints taken physically",
      "Fingerprint documents submitted",
    ],
  },
];

export const CLEARANCE_CHECKS = [
  "Police criminal clearance",
  "Certificate of good conduct",
  "Fingerprint vetting",
  "Citizenship",
];

export const TRAINING = [
  {
    id: "fraud",
    title: "Fraud",
    summary: "Why fraud happens and how to deter it.",
    modules: [
      {
        name: "Prevention of fraud",
        detail:
          "Deterrence theory and potential offenders, following the ACFE 2008 Report to the Nations.",
      },
      {
        name: "Causes of fraud",
        detail:
          "Classic criminology, biological theory, psychological and social process theories, integrated theory and the theory of fraud causation.",
      },
    ],
  },
  {
    id: "investigation",
    title: "Investigation",
    summary: "How to plan and run a fraud investigation.",
    modules: [
      {
        name: "Planning the investigation",
        detail:
          "Steps of a fraud investigation, the discovery and confirmation processes, and the admission-seeking interview of a suspect.",
      },
      {
        name: "Sources of information",
        detail:
          "In-house sources, public information, public records, local and state records, newspapers, journals and professional papers, plus the legal concerns in obtaining records.",
      },
      {
        name: "Computer forensics",
        detail: "Investigating computer crimes and handling digital evidence.",
      },
      {
        name: "Interviewing prospective witnesses",
        detail:
          "Preparation, effective questioning, physical meetings, rapport building, responses and buried leads, and follow-up interviews.",
      },
      {
        name: "Evaluating deception",
        detail: "The physiology of deception, and norming or calibrating.",
      },
    ],
  },
  {
    id: "financial",
    title: "Fraudulent financial transactions",
    summary: "Finding fraud in the numbers.",
    modules: [
      {
        name: "Fraud risk assessment",
        detail:
          "How to build a fraud assessment team and how to conduct risk assessments.",
      },
      {
        name: "Fraud schemes",
        detail:
          "Asset misappropriation schemes, fraud by vendors and corruption.",
      },
      {
        name: "Analysing and managing financial information",
        detail:
          "Computer analysis, analytical software, detecting illicit income, and software for organising and presenting cases.",
      },
      {
        name: "Financial statement fraud",
        detail:
          "Earnings management and manipulation, reviewing statements for manipulation, and financial statement analysis.",
      },
    ],
  },
  {
    id: "legal",
    title: "Legal elements",
    summary: "Turn findings into evidence that stands up.",
    modules: [
      {
        name: "Legal elements of fraud",
        detail:
          "Burden of proof, predication, the stages of a criminal and a civil fraud investigation and trial, elements of fraud, common civil and criminal actions, and selected criminal statutes.",
      },
      {
        name: "Rules of evidence",
        detail: "Admissibility of evidence and privileged communications.",
      },
      {
        name: "Legal issues",
        detail:
          "Investigation in private actions, rights and duties of employees, and privacy of financial records.",
      },
      {
        name: "Testifying",
        detail:
          "Direct and cross-examination, and the ten commandments of testifying.",
      },
    ],
  },
];

export const CLIENTS = [
  "Access Bank (T) Ltd",
  "Akiba Commercial Bank",
  "Azania Bank (T) Ltd",
  "BOA Bank (T) Ltd",
  "NMB PLC",
  "TIB Ltd",
  "DCB Bank PLC",
  "NBC PLC",
  "I&M Bank Ltd",
  "DTB (T) Ltd",
  "NIC Bank Ltd",
  "Standard Chartered Bank (T) Ltd",
  "Equity Bank",
  "Maendeleo Bank",
  "Mkombozi Bank",
  "Amana Bank",
  "PBZ",
];

export const TEAM = [
  // {
  //   name: "Adelbert Sugwa",
  //   role: "Managing Director",
  //   image: "/albert-sugwa.jpeg",
  //   points: [],
  // },
  {
    name: "Tumaini Z. Ifanda",
    role: "DPO",
    image: "/tumaini-ifanda.png",
    points: [],
  },
];

export const FAQS = [
  {
    q: "What does Fimbo Consultants do?",
    a: "Fimbo Consultants is a registered Tanzanian firm that advises on physical security, security management, technical security, fire safety and risk management, professional staff vetting, and security and fraud training. Our offices are in Dar es Salaam.",
  },
  {
    q: "What does staff vetting cover?",
    a: "We check education records, employment history and conduct, and fingerprints against criminal records. Clearance checks include police criminal clearance, certificate of good conduct, fingerprint vetting and citizenship.",
  },
  {
    q: "Can you train our staff on fraud?",
    a: "Yes. Our training covers fraud prevention and causes, fraud investigation, fraudulent financial transactions, and the legal elements of fraud including rules of evidence and testifying. Our staff have delivered training with the Police Force at banks and other institutions across Tanzania.",
  },
  {
    q: "Do you help with ATM skimming and CCTV?",
    a: "Our technical security service gives support on skimming, fraud and money laundering, including installing CCTV cameras and checking them regularly.",
  },
  {
    q: "Is Fimbo Consultants registered?",
    a: `Yes. Fimbo Consultants Company is a registered Tanzanian firm. It holds a police clearance certificate awarded in ${SITE.policeClearance.year}, reference ${SITE.policeClearance.ref}.`,
  },
  {
    q: "How do I request a consultation?",
    a: `Call ${SITE.phones[0].label}, email ${SITE.email}, message us on WhatsApp, or use the contact form on this site.`,
  },
];
