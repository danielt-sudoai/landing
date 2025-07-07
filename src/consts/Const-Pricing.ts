import { TypePricing } from "@/types/type-Pricing";

export const const_pricing: TypePricing[] = [
  {
    title: {
      it_IT: "Starter",
      en_GB: "Starter",
    },
    price: {
      it_IT: "Gratis",
      en_GB: "Free",
    },
    features: {
      it_IT: ["3 progetti attivi", "Task illimitati", "Sync calendario base"],
      en_GB: ["3 active projects", "Unlimited tasks", "Base calendar sync"],
    },
    button: {
      it_IT: "Inizia ora",
      en_GB: "Start now",
    },
  },
  {
    isMostPopular: true,
    currency: {
      currency: {
        it_IT: "€",
        en_GB: "€",
      },
      recurring: {
        it_IT: "mese",
        en_GB: "month",
      },
    },
    title: {
      it_IT: "Base",
      en_GB: "Base",
    },
    price: {
      it_IT: "4.90",
      en_GB: "4.90",
    },

    features: {
      it_IT: [
        "10 progetti attivi",
        "Generazione progetti con IA",
        "Calendario intelligente",
        "Analisi avanzate",
      ],
      en_GB: [
        "10 active projects",
        "AI project generation",
        "Smart calendar",
        "Advanced analytics",
      ],
    },
    button: {
      it_IT: "Ordina ora",
      en_GB: "Order now",
    },
  },
  {
    title: {
      it_IT: "Premium",
      en_GB: "Premium",
    },
    price: {
      it_IT: "14.90",
      en_GB: "14.90",
    },
    currency: {
      currency: {
        it_IT: "€",
        en_GB: "€",
      },
      recurring: {
        it_IT: "mese",
        en_GB: "month",
      },
    },
    features: {
      it_IT: [
        "Tutto il piano Base",
        "Progetti illimitati",
        "Collaborazione team",
        "Reporting avanzato",
        "Integrazioni enterprise",
      ],
      en_GB: [
        "All Base features",
        "Unlimited projects",
        "Team collaboration",
        "Advanced reporting",
        "Enterprise integrations",
      ],
    },
    button: {
      it_IT: "Ordina ora",
      en_GB: "Order now",
    },
  },
];
