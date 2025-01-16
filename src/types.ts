export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    portfolio: string;
    email: string;
    works: Array<{
      title: string;
      description: string;
      link: string;
    }>;
  }
  
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }