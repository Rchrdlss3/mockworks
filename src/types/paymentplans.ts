export class PricingPlan {
    id: string;
    name: string;
    description: string;
    pricePerMonth: number;
    pricePeriodLabel: string; // e.g., "/month/employee"
    baseFee?: string;        // Optional (e.g., "$50/month base fee" or "No base fee")
    badge?: string;          // Optional (e.g., "Popular")
    buttonLabel: string;
    isFeatured: boolean;     // To help your CSS target the highlighted card
    features: string[];
  
    constructor(data: PricingPlan) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.pricePerMonth = data.pricePerMonth;
      this.pricePeriodLabel = data.pricePeriodLabel;
      this.baseFee = data.baseFee;
      this.badge = data.badge;
      this.buttonLabel = data.buttonLabel;
      this.isFeatured = data.isFeatured;
      this.features = data.features;
    }
}

export const paymentPlans: PricingPlan[] = [
    {
      id: "plan_payroll",
      name: "Payroll",
      description: "Payroll & HR Tools with access to Time Tracking",
      pricePerMonth: 8,
      pricePeriodLabel: "/month/employee*",
      baseFee: "+ $50/month base fee",
      buttonLabel: "Get Started",
      isFeatured: false,
      features: [
        "Payroll for all employees",
        "HR tools",
        "Expert support",
        "Access to Time Tracking"
      ]
    },
    {
      id: "plan_peo_basic",
      name: "PEO Basic",
      description: "Payroll, HR Essentials, Support & Compliance",
      pricePerMonth: 79,
      pricePeriodLabel: "/month/employee",
      baseFee: "No base fee",
      buttonLabel: "Get Started",
      isFeatured: false,
      features: [
        "Payroll for all employees",
        "Compliance simplified",
        "HR Consulting & Tools",
        "24/7 Support",
        "401(k)",
        "Access to Time Tracking"
      ]
    },
    {
      id: "plan_peo_plus",
      name: "PEO Plus",
      description: "Comprehensive HR, Modern Benefits & Expert Support",
      pricePerMonth: 109,
      pricePeriodLabel: "/month/employee",
      baseFee: "No base fee",
      badge: "Popular",
      buttonLabel: "Get Started",
      isFeatured: true,
      features: [
        "Everything in PEO Basic",
        "Health Insurance Administration",
        "HSA/FSA Accounts",
        "Mental Health Benefits",
        "Fertility Benefits"
      ]
    }
  ];