interface OfficeAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
};

export interface SocialMedia {
    twitter: string;
    linkedin: string;
    github: string;
    instagram: string;
};

export interface PersonalInformation {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    pronouns?: string;
    birthday: string; 
    phone: string;
    email: string;
    socialMedia: SocialMedia;
};

interface Employment {
  jobTitle: string;
  department: string;
  managerId: string; 
  startDate: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contractor';
  manager: Array<User>;
  directReports: Array<User>;
  officeAddress: OfficeAddress;
};

interface Policy {
    type: 'Sick Leave' | 'Vacation' | 'Personal Day' | 'Holiday';
    upcoming: number;
    used: number;
    balance: number;
};

interface TimeOff {
  policies: Array<Policy>; 
  upcoming: Array<Policy>;
  current: Array<Policy>;
  past: Array<Policy>;
};

export interface User {
    id: string; 
    personalInformation: PersonalInformation;
    employment: Employment;
    timeOff: TimeOff;
};
