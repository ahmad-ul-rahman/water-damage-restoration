export interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  iconName: string
  features: string[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  timeframe: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  review: string
  service: string
  date: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface ServiceArea {
  name: string
  state: string
  averageResponseTimeMinutes: number
  emergencyAvailable24_7: boolean
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  contact: {
    phone: string
    phoneRaw: string
    whatsapp: string
    whatsappLink: string
    email: string
    address: string
    hours: string
    emergencyHours: string
  }
  brandColors: {
    darkNavy: string
    aquaAccent: string
    redEmergencyCTA: string
    darkNavyLight: string
    aquaHover: string
    redHover: string
  }
  services: ServiceItem[]
  processSteps: ProcessStep[]
  testimonials: Testimonial[]
  faqs: FAQItem[]
  serviceAreas: ServiceArea[]
}

export const siteConfig: SiteConfig = {
  name: "AquaGuard Restoration",
  tagline: "Rapid 24/7 Emergency Water Damage Restoration",
  description:
    "Certified emergency water extraction, flood cleanup, structural drying, and mold remediation with 45-minute on-site response time.",
  url: "https://aquaguard-restoration.pages.dev",
  contact: {
    phone: "(800) 555-0199",
    phoneRaw: "+18005550199",
    whatsapp: "+1 (800) 555-0199",
    whatsappLink: "https://wa.me/18005550199?text=Hello%2C%20I%20have%20an%20urgent%20water%20damage%20emergency.",
    email: "emergency@aquaguardrestoration.com",
    address: "100 Recovery Way, Metro District",
    hours: "Open 24 Hours / 7 Days a Week",
    emergencyHours: "24/7/365 Immediate Response",
  },
  brandColors: {
    darkNavy: "#0B1528",
    darkNavyLight: "#14233D",
    aquaAccent: "#00E5FF",
    aquaHover: "#00B8D4",
    redEmergencyCTA: "#FF2A2A",
    redHover: "#D50000",
  },
  services: [
    {
      id: "emergency-water-extraction",
      title: "24/7 Emergency Water Extraction",
      shortDescription: "High-capacity truck-mounted pumps remove standing water fast to minimize structural damage.",
      fullDescription:
        "Immediate standing water removal using industrial submersible pumps and truck-mounted vacuum units to eliminate floodwaters within minutes of arrival.",
      iconName: "Droplets",
      features: ["Immediate arrival within 45 min", "Industrial suction pumps", "Deep moisture thermal detection"],
    },
    {
      id: "structural-drying-dehumidification",
      title: "Structural Drying & Dehumidification",
      shortDescription: "Hospital-grade commercial air movers and LGR dehumidifiers dry walls, framing, and subfloors.",
      fullDescription:
        "Scientific psychrometric drying protocols utilizing low-grain refrigerant (LGR) dehumidifiers and high-velocity axial air movers to safeguard wall cavities and flooring.",
      iconName: "Wind",
      features: ["Thermal imaging monitoring", "LGR dehumidifiers", "Cavity drying injectors"],
    },
    {
      id: "sewage-cleanup-sanitization",
      title: "Sewage Cleanup & Biohazard Sanitization",
      shortDescription: "Safe handling, disposal, and antimicrobial disinfection for category 3 black water emergencies.",
      fullDescription:
        "Strict biohazard decontamination using hospital-grade antimicrobial agents, removing hazardous black water contaminants safely and thoroughly.",
      iconName: "ShieldAlert",
      features: ["Category 3 containment", "EPA-registered botanical antimicrobials", "Air scrubbing with HEPA filters"],
    },
    {
      id: "mold-remediation-prevention",
      title: "Mold Remediation & Prevention",
      shortDescription: "Certified mold containment, removal, and anti-fungal barrier sealants to stop regrowth.",
      fullDescription:
        "Negative-pressure containment barriers and HEPA filtration eliminate airborne spores while certified specialists remove infested building materials.",
      iconName: "ShieldCheck",
      features: ["Spore containment barriers", "HEPA air filtration", "Anti-microbial barrier application"],
    },
    {
      id: "flood-storm-restoration",
      title: "Burst Pipe & Storm Damage Repair",
      shortDescription: "Comprehensive storm recovery, burst pipe repair coordination, and full property rehabilitation.",
      fullDescription:
        "Full turnkey reconstruction from burst frozen pipes to hurricane and severe storm flash flooding damage.",
      iconName: "CloudRain",
      features: ["Plumbing isolation & freeze repairs", "Full drywall & flooring restoration", "Direct insurance billing"],
    },
    {
      id: "insurance-claim-assistance",
      title: "Direct Insurance Claim Billing",
      shortDescription: "We work directly with your insurer, document everything with line-item Xactimate estimates.",
      fullDescription:
        "We document all damages with thermal imaging and 3D scans, submitting line-item estimates directly through Xactimate for seamless claims handling.",
      iconName: "FileCheck2",
      features: ["Zero out-of-pocket assistance", "Xactimate line-item reporting", "Direct insurance billing"],
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Emergency Dispatch & Rapid Inspection",
      description: "Our certified technicians dispatch immediately and inspect moisture levels with infrared thermal cameras.",
      timeframe: "0 - 45 Minutes",
    },
    {
      step: 2,
      title: "Water Extraction & Containment",
      description: "Powerful truck-mounted extraction equipment removes bulk standing water from carpets, tiles, and subfloors.",
      timeframe: "Hour 1 - 3",
    },
    {
      step: 3,
      title: "Industrial Drying & Dehumidification",
      description: "LGR dehumidifiers and high-velocity air movers run continuously to pull moisture from deep building materials.",
      timeframe: "Days 1 - 3",
    },
    {
      step: 4,
      title: "Antimicrobial Treatment & Deodorization",
      description: "Hospital-grade sanitization prevents mold growth and eliminates damp odors, restoring healthy indoor air quality.",
      timeframe: "Days 2 - 4",
    },
    {
      step: 5,
      title: "Final Moisture Clearance & Reconstruction",
      description: "Certified moisture meters verify dry standards before repairs and reconstruction return your home to pre-loss condition.",
      timeframe: "Days 3 - 5",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Marcus Sterling",
      location: "Riverdale Metro",
      rating: 5,
      review: "A supply line burst on our second floor at 2 AM. AquaGuard arrived in under 35 minutes, extracted 4 inches of water, and saved our hardwood floors. Handled the insurance directly!",
      service: "Emergency Water Extraction",
      date: "October 2026",
    },
    {
      id: "t2",
      name: "Elena Rodriguez",
      location: "Highland Heights",
      rating: 5,
      review: "Flash flooding flooded our basement. The team was professional, extremely courteous, set up heavy-duty dryers right away, and had everything completely dry in 3 days without any mold.",
      service: "Flood Damage Restoration",
      date: "September 2026",
    },
    {
      id: "t3",
      name: "David Chen",
      location: "Oakridge Estates",
      rating: 5,
      review: "Transparent, fast, and remarkably thorough. The moisture sensor readings gave us total peace of mind. Highly recommend their emergency service.",
      service: "Structural Drying & Dehumidification",
      date: "August 2026",
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "How fast can your team arrive at my property?",
      answer: "Our emergency rapid response crews are staged 24/7/365 and arrive on-site within 45 minutes on average across our service areas.",
    },
    {
      id: "faq-2",
      question: "Do you bill my homeowner's insurance directly?",
      answer: "Yes. We work directly with all major insurance carriers using industry-standard Xactimate pricing. We document all thermal scans and submit the claim directly so you don't have to worry.",
    },
    {
      id: "faq-3",
      question: "What should I do while waiting for your emergency crew?",
      answer: "If safe to do so, shut off the main water shutoff valve immediately. Avoid turning on ceiling fixtures if ceilings are wet, and do not enter rooms with standing water near electrical outlets.",
    },
    {
      id: "faq-4",
      question: "How long does the structural drying process take?",
      answer: "Most water damage dry-outs take between 2 to 4 days, depending on the volume of water, affected materials (hardwood, drywall, concrete), and humidity levels. We perform daily moisture meter checks.",
    },
    {
      id: "faq-5",
      question: "Can water damage cause mold to grow?",
      answer: "Yes, mold spores can start colonizing within 24 to 48 hours in damp conditions. That is why immediate water extraction and antimicrobial application are critical.",
    },
  ],
  serviceAreas: [
    { name: "Downtown Metro", state: "Metro Region", averageResponseTimeMinutes: 30, emergencyAvailable24_7: true },
    { name: "Riverdale & West Suburbs", state: "Metro Region", averageResponseTimeMinutes: 35, emergencyAvailable24_7: true },
    { name: "Highland Heights & North County", state: "Metro Region", averageResponseTimeMinutes: 40, emergencyAvailable24_7: true },
    { name: "Oakridge & East Valley", state: "Metro Region", averageResponseTimeMinutes: 45, emergencyAvailable24_7: true },
    { name: "Southfield & Lakeshore", state: "Metro Region", averageResponseTimeMinutes: 40, emergencyAvailable24_7: true },
  ],
}
