// Const
import { ROUTES } from 'src/constants/routes';

export const PHONE = {
  pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
  maxLength: '14',
};

export const LOCAL_STORAGE_KEYS = {
  USER_INFO: 'userInfo',
  REFERRAL_CODE: 'referralCode',
  SECURED_PASSWORD: 'securedPassword',
};

export const POST_SOURES = {
  TWITTER: 'twitter',
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
};

export const NAVIGATION = [
  { label: 'Benefits', href: ROUTES.HOME },
  { label: 'Community', href: ROUTES.COMMUNITY },
  { label: 'About us', href: ROUTES.ABOUT_US },
];

export const POST_CARD_DESCRIPTION_MAX_WORDS = 20;

export const POST_CARD_LIST = [
  {
    user: {
      name: 'Matt Wallace',
      username: 'MattWallace888',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-one.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: {
      tablet: 'assets/images/community/tablet/card-post-one.webp',
      mobile: 'assets/images/community/mobile/card-post-one.webp',
    },
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname555',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-two.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: {
      tablet: 'assets/images/community/tablet/card-post-two.webp',
      mobile: 'assets/images/community/mobile/card-post-two.webp',
    },
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname123',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-three.webp',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas vitae, volutpat ut neque. Pellentesque massa id condimentum pellentesque at netus quam sed. Sit eu ultricies massa, eros, aliquam. Vivamus in enim, mattis adipiscing massa pretium.',
    thumbnailUrl: {
      tablet: 'assets/images/community/tablet/card-post-three.webp',
      mobile: 'assets/images/community/mobile/card-post-three.webp',
    },
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Matt Wallace',
      username: 'MattWallace888',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-one.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: {
      tablet: 'assets/images/community/tablet/card-post-one.webp',
      mobile: 'assets/images/community/mobile/card-post-one.webp',
    },
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname555',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-two.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: {
      tablet: 'assets/images/community/tablet/card-post-two.webp',
      mobile: 'assets/images/community/mobile/card-post-two.webp',
    },
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname123',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-three.webp',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas vitae, volutpat ut neque. Pellentesque massa id condimentum pellentesque at netus quam sed. Sit eu ultricies massa, eros, aliquam. Vivamus in enim, mattis adipiscing massa pretium.',
    thumbnailUrl: {
      tablet: 'assets/images/community/tablet/card-post-three.webp',
      mobile: 'assets/images/community/mobile/card-post-three.webp',
    },
    source: 'twitter',
    url: '#',
  },
];

export const MEMBER_LIST = [
  {
    className: '',
    name: 'Ryan Fujiu',
    role: 'Founder',
    avatarUrl: 'assets/images/about/team/member-one.webp',
    avatarAlt: 'Ryan Fujiu, Founder',
    address: {
      phone: '415-999-6409',
      personalEmail: 'ryanfujiu@gmail.com',
      workEmail: 'ryan@liquidity.cc',
    },
    introExperiences:
      'I have been working in consumer products for 20 years. Most recently was Chief Product Officer at Bird. Before that was Head of Driver Growth at Uber, and before that, Head of Product at Lyft. Was early teammate creating Micro-Mobility (Bird), On Demand Food Delivery (Ubereats), andRideshare (Lyft)',
    introRersonal: `I am married and have two young boys, Rio (6) and Ace (4). We live in Los Angeles CA. If I'm not working or taking care of my boys, I enjoy learning new things, running and HODLing.`,
    arcDeg: {
      start: '85',
      end: '45',
    },
    linkProfile: [
      {
        href: '#',
        name: 'Twitter',
      },
      {
        href: '#',
        name: 'YouTube',
      },
    ],
  },
  {
    className: '',
    name: 'Phuong Pham',
    role: 'Mobile Engineer',
    avatarUrl: 'assets/images/about/team/member-two.webp',
    avatarAlt: 'Phuong Pham, Mobile Engineer',
    introExperiences: `Phuong is a member of Agility.io. She is a Mobile engineer, based in Vietnam.`,
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Chloe Madison',
    role: ' Marketing Lead',
    avatarUrl: 'assets/images/about/team/member-three.webp',
    avatarAlt: 'Chloe Madison,  Marketing Lead',
    introExperiences:
      'Chloe has over seven years of experience in digital marketing. She grew up in Los Angeles alongside the very first influencers as they pioneered a new form of marketing on social media. Chloe knows how to speak to and deeply connect with newer generations and has breadth of knowledge across all social media platforms and trends that she leans into for her marketing strategies.',
    introRersonal:
      'Chloe started investing in Dogecoin in January 2021 and is a huge fan of the community and culture it nurtures.',
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Rick Bachman',
    role: 'Compliance Officer',
    avatarUrl: 'assets/images/about/team/member-four.webp',
    avatarAlt: 'Rick Bachman, Compliance Officer',
    introExperiences:
      'Rick is the Founder and Managing Member of Scale Consulting. Rick has over 25 years of industry experience, building compliance programs at large banks like Wells Fargo and Bank of the West. Rick is the former Head of Compliance for LendingHome, a FinTech startup specializing in hard money real estate lending. Since starting Scale Consulting in 2017, he has helped several well known FinTech firms, including Blend, Chime, Brex, Mercury, One, Orum and over 80 others across a broad array of financial services, including consumer and business lending, credit cards and consumer and commercial deposits, to design and implement their programs. Rick is a Certified Regulatory Compliance Manager (CRCM) and has an MBA from Webster University.',
    arcDeg: {
      start: '85',
      end: '45',
    },
    linkProfile: [
      {
        href: '#',
        name: 'LinkedIn',
      },
    ],
  },
  {
    className: '',
    name: 'Roman OZMO',
    role: 'Head Designer',
    avatarUrl: 'assets/images/about/team/member-five.webp',
    avatarAlt: 'Roman OZMO, Head Designer',
    introExperiences:
      'I’m a UI UX experienced designer with more than 500 projects designed for the last 9 years. Focused on designing beautiful interfaces & intuitive interactions. I have around 100 different coins, ~10% in doge :) also have few NFT. Also, I like to shoot a macro photos and bake a bread :)',
    arcDeg: {
      start: '85',
      end: '45',
    },
    linkProfile: [
      {
        href: '#',
        name: 'Twitter',
      },
      {
        href: '#',
        name: 'YouTube',
      },
    ],
  },
  {
    className: '',
    name: 'Van Nguyen',
    role: 'Van Nguyen',
    avatarUrl: 'assets/images/about/team/member-six.webp',
    avatarAlt: 'Van Nguyen, Front End Engineer',
    introExperiences:
      'Van is a member of Agility.io. She is a Frontend engineer, based in Vietnam.',
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Glauber Contessoto',
    role: 'Creative Director DogeCard',
    avatarUrl: 'assets/images/about/team/member-seven.webp',
    avatarAlt: 'Glauber Contessoto, Creative Director DogeCard',
    introExperiences:
      'I discovered Dogecoin in January 2021 and immediately fell in love with the community and what it stood for. I saw the incredible potential Dogecoin had to change the monetary system that we have in place today and instantly wanted to invest in this coin that I saw as the future. I invested my life savings into Doge and decided to make it my mission from that day forward to help bring about awareness and mass adoption to Dogecoin and push it forward. I came to realize it was truly “the people’s crypto” and held onto it through the ups and downs because I see it as the future. I was contacted about this project about 6 months ago and have been an integral part in the branding and marketing. I was the Senior Content Creator at HipHopDX and ran the video production team as well as branding for their Youtube channel. Prior to that I worked at a start-up called MyDiveo and ran the marketing team and video production as well.',
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Jason Spencer',
    role: 'Recruiter',
    avatarUrl: 'assets/images/about/team/member-eight.webp',
    avatarAlt: 'Jason Spencer, Recruiter',
    introExperiences:
      'Jason Spencer is a Sr. Technical Recruiter who has over ten years of recruiting experience with both agency and corporate recruiting. Although his specialty it technical recruiting, Jason has also recruited a myriad of positions ranging from accountants to CEOs. Jason became a recruiter because he enjoys helping others advance their career and/or simply make their own lives better.',
    introRersonal:
      'Jason lives in Southern California with his wife and two dogs. He is a voracious reader, enjoys theater (Rent is his current favorite), and believe PC Gaming is far superior to consoles.',
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Hieu Thi Trung',
    role: 'Backend Engineer',
    avatarUrl: 'assets/images/about/team/member-nine.webp',
    avatarAlt: 'Hieu Thi Trung, Backend Engineer',
    introExperiences:
      'Hieu is a member of Agility.io. She is a backend engineer, based in Vietnam.',
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Ni Ngo',
    role: 'Mobile Engineer',
    avatarUrl: 'assets/images/about/team/member-ten.webp',
    avatarAlt: 'Ni Ngo, Mobile Engineer',
    introExperiences:
      'Ni is a member of Agility.io. She is a Mobile engineer, based in Vietnam.',
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Yadiyah Xaedra',
    role: 'Community Manager',
    avatarUrl: 'assets/images/about/team/member-eleven.webp',
    avatarAlt: 'Yadiyah Xaedra, Community Manager',
    introExperiences: `Yadiyah is our Community Manager and is responsible for engaging through social media channels to ensure that the community's voices, opinions, and feedback are heard by our team. She has loved dogecoin since January 2021. Yadiyah worked as a transcriptionist after college with a company called CopyTalk Business Services, where she was introduced to the stock market. After her time as a scribe, she began learning about the cryptocurrency market and the blockchain, and has been involved with these sectors ever since. She has worked as a freelancer for various projects and typically provides organizational support, consultation, and community relations.`,
    introRersonal:
      'The first time I heard of dogecoin was in January 2021 when I saw the original Elon Musk Rafiki Doge meme. I later learned in an article that Musk had known about dogecoin since at least 2019 based on a previous tweet of his. I researched dogecoin, bought my first 500 shares, and was welcomed into effort groups on Twitter aimed at asking Coinbase and other exchanges to list dogecoin. I became a part of the community via Twitter and have been a hodler since January 2021. My favorite thing about dogecoin is that I share a birthday with it (December 6th). My second favorite thing about dogecoin is that a talent show and karaoke night on Twitter exists because of doge that gives prizes from three different dogecoin businesses -- I love how doge has uniquely become a part of culture and creation.',
    arcDeg: {
      start: '85',
      end: '45',
    },
  },
  {
    className: '',
    name: 'Andrew Erskine',
    role: 'Head of Legal',
    avatarUrl: 'assets/images/about/team/member-twelve.webp',
    avatarAlt: 'Andrew Erskine, Head of Legal',
    introExperiences: `Andrew is a partner in the Technology Companies Group at Orrick, advising high-growth companies, their founders, and the investors that support them. Andrew joined the Liquidity team in July of 2021.`,
    arcDeg: {
      start: '85',
      end: '45',
    },
    linkProfile: [
      {
        href: '#',
        name: 'Profile',
      },
    ],
  },
];
