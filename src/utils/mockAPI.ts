export type FakeCompanyType = {
    id: number;
    name: string;
    description: string;
    industry: string;
    logo_url: string;
    founded_year: number;
    active: boolean;
}

export const getFakeCompanies = ():Array<FakeCompanyType> => {
    return [
    {
      "id": 1,
      "name": "Apex Digital",
      "industry": "Technology",
      "description": "Building next-generation cloud infrastructure and AI solutions.",
      "logo_url": "https://picsum.photos/seed/apex/200/200",
      "founded_year": 2021,
      "active": true
    },
    {
      "id": 2,
      "name": "GreenLeaf Urban",
      "industry": "Sustainability",
      "description": "Bringing modular, automated vertical farming to city centers.",
      "logo_url": "https://picsum.photos/seed/greenleaf/200/200",
      "founded_year": 2018,
      "active": true
    },
    {
      "id": 3,
      "name": "Nova Helvetica",
      "industry": "Design & Branding",
      "description": "Minimalist graphic design agency specializing in corporate identity.",
      "logo_url": "https://picsum.photos/seed/nova/200/200",
      "founded_year": 2024,
      "active": true
    },
    {
      "id": 4,
      "name": "Veloce Motors",
      "industry": "Automotive",
      "description": "High-performance electric vehicles with a focus on luxury and track speed.",
      "logo_url": "https://picsum.photos/seed/veloce/200/200",
      "founded_year": 2020,
      "active": true
    },
    {
      "id": 5,
      "name": "Atlas Logistics",
      "industry": "Supply Chain",
      "description": "AI-driven global freight forwarding and last-mile delivery solutions.",
      "logo_url": "https://picsum.photos/seed/atlas/200/200",
      "founded_year": 2015,
      "active": false
    },
    {
      "id": 6,
      "name": "Zenith Wellness",
      "industry": "Healthcare",
      "description": "Holistic mental health and physical wellness platforms for remote teams.",
      "logo_url": "https://picsum.photos/seed/zenith/200/200",
      "founded_year": 2022,
      "active": true
    }
  ]
};