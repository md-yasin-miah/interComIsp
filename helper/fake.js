import image from '../public/Home-BroadBand-Internet-scaled.webp'

const navMenu = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Packages', url: '/packages' },
  { name: 'Coverage', url: '/coverage' },
  { name: 'Pay Bill', url: '/pay-bill' },
  { name: 'Offers', url: '/offers' },
  { name: 'Support', url: '/support' },
]
const footerMenu = [
  {
    title: 'company',
    menu: [
      { name: 'about', url: '/about' },
      { name: 'careers', url: '/careers' },
      { name: 'internship', url: '/internship' },
      { name: 'BTRC License', url: '/btrc-license' },
      { name: ' terms of use', url: '/terms-of-use' },
      { name: 'privacy policy', url: '/privacy-policy' },
      { name: 'return & refund policy', url: '/return-refund-policy' },
    ]
  },
  {
    title: 'services',
    menu: [
      { name: 'offers', url: '/offers' },
      { name: 'pay bill', url: '/pay-bill' },
      { name: 'services', url: '/services' },
      { name: 'products', url: '/products' },
      { name: 'packages', url: '/packages' },
    ]
  },
  {
    title: 'support',
    menu: [
      { name: "FAQ's", url: '/faqs' },
      { name: 'get quote', url: '/get-quote' },
      { name: 'coverage', url: '/coverage' },
      { name: 'user manual', url: '/user-manual' },
      { name: 'schedule of charges', url: '/schedule-of-charges' },
      { name: 'contact', url: '/contact' },
    ]
  }
]
const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
  // { name: 'Pinterest', url: 'https://pinterest.com' },
  // { name: 'Snapchat', url: 'https://snapchat.com' },
  // { name: 'Reddit', url: 'https://reddit.com' },
  // { name: 'WhatsApp', url: 'https://whatsapp.com' },
  // { name: 'Telegram', url: 'https://telegram.org' },
  // { name: 'TikTok', url: 'https://tiktok.com' },
  // { name: 'GitHub', url: 'https://github.com' },
  // { name: 'GitLab', url: 'https://gitlab.com' },
  // { name: 'Medium', url: 'https://medium.com' },
  // { name: 'Dribbble', url: 'https://dribbble.com' },
  // { name: 'Behance', url: 'https://behance.net' },
  // { name: 'Vimeo', url: 'https://vimeo.com' },
  // { name: 'Discord', url: 'https://discord.com' },
  // { name: 'Slack', url: 'https://slack.com' },
  // { name: 'Tumblr', url: 'https://tumblr.com' },
  // { name: 'WeChat', url: 'https://wechat.com' },
  // { name: 'Line', url: 'https://line.me' },
  // { name: 'Flickr', url: 'https://flickr.com' },
  // { name: 'Quora', url: 'https://quora.com' },
  // { name: 'SoundCloud', url: 'https://soundcloud.com' },
  // { name: 'Spotify', url: 'https://spotify.com' },
  // { name: 'Apple', url: 'https://apple.com' },
  // { name: 'Google', url: 'https://google.com' },
  // { name: 'Microsoft', url: 'https://microsoft.com' },
];
const services = [
  {
    title: "Home Broadband Internet",
    description: "We are one of the most reliable broadband internet",
    link: "/services/home-internet",
    image: image
  },
  {
    title: "Corporate Broadband Internet",
    description: "Corporate and SME customers dedicated internet connections to ensure network stability.",
    link: "/services/corporate-internet",
    image: image
  },
  {
    title: "Complete Network Solutions",
    description: "Our network engineers work with our clients to provide the most efficient network solutions possible.",
    link: "/services/network-solutions",
    image: image
  },
  {
    title: "Home Broadband Internet",
    description: "We are one of the most reliable broadband internet and network for both gamers and regular users.",
    link: "/services/home-internet",
    image: image
  },
  {
    title: "Corporate Broadband Internet",
    description: "Corporate and SME customers dedicated internet connections to ensure network stability.",
    link: "/services/corporate-internet",
    image: image
  },
  {
    title: "Complete Network Solutions",
    description: "Our network engineers work with our clients to provide the most efficient network solutions possible.",
    link: "/services/network-solutions",
    image: image
  }
]
// Define coverage areas with their coordinates and radius
const coverageAreas = [
  {
    district: "Dhaka",
    area: [
      {
        name: 'Banasree',
        lat: 23.7614,
        lng: 90.4279,
        radius: 1.5 // in kilometers
      },
      {
        name: 'South Banasree',
        lat: 23.7544,
        lng: 90.4283,
        radius: 1.2
      },
      {
        name: 'Aftabnagar',
        lat: 23.7677,
        lng: 90.4259,
        radius: 1.0
      },
      {
        name: 'Rampura',
        lat: 23.7651,
        lng: 90.4208,
        radius: 2.0
      },
      {
        name: 'Khilgaon',
        lat: 23.7465,
        lng: 90.4159,
        radius: 5
      },
      {
        name: 'Badda',
        lat: 23.7586,
        lng: 90.4186,
        radius: 1.6
      },
      {
        name: 'Gulshan',
        lat: 23.7722,
        lng: 90.4186,
        radius: 1.6
      },
      {
        name: 'Bashundhara',
        lat: 23.7722,
        lng: 90.4186,
        radius: 1.6
      },
      {
        name: 'Khilkhet',
        lat: 23.8313,
        lng: 90.4161,
        radius: 5
      }
    ]
  },
  {
    district: "Chittagong",
    area: [
      {
        name: 'Chittagong',
        lat: 23.8313,
        lng: 90.4161,
        radius: 5
      },
      {
        name: 'Chittagong',
        lat: 23.8313,
        lng: 90.4161,
        radius: 5
      },
      {
        name: 'Chittagong',
        lat: 23.8313,
        lng: 90.4161,
        radius: 5
      }
    ]
  },
  {
    district: "Rajshahi",
    area: [
      {
        name: 'Rajshahi',
        lat: 23.8313,
        lng: 90.4161,
        radius: 5
      }
    ]
  }
]
const pricingData = [
  {
    title: "PACCO",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "75",
    price: "3,499",
    features: [
      { name: "YouTube", value: "100Mbps" },
      { name: "Facebook", value: "100Mbps" },
      { name: "BDIX", value: "100Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: false,
    type: "basic"
  },
  {
    title: "STANDARD",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "100",
    price: "4,499",
    features: [
      { name: "YouTube", value: "200Mbps" },
      { name: "Facebook", value: "200Mbps" },
      { name: "BDIX", value: "200Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: true,
    type: "standard"
  },
  {
    title: "PREMIUM",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "150",
    price: "5,499",
    features: [
      { name: "YouTube", value: "300Mbps" },
      { name: "Facebook", value: "300Mbps" },
      { name: "BDIX", value: "300Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: false,
    type: "premium"
  },
  {
    title: "PACCO",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "75",
    price: "3,499",
    features: [
      { name: "YouTube", value: "100Mbps" },
      { name: "Facebook", value: "100Mbps" },
      { name: "BDIX", value: "100Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: false,
    type: "basic"
  },
  {
    title: "STANDARD",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "100",
    price: "4,499",
    features: [
      { name: "YouTube", value: "200Mbps" },
      { name: "Facebook", value: "200Mbps" },
      { name: "BDIX", value: "200Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: true,
    type: "standard"
  },
  {
    title: "PREMIUM",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "150",
    price: "5,499",
    features: [
      { name: "YouTube", value: "300Mbps" },
      { name: "Facebook", value: "300Mbps" },
      { name: "BDIX", value: "300Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: false,
    type: "premium"
  },
  {
    title: "PACCO",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "75",
    price: "3,499",
    features: [
      { name: "YouTube", value: "100Mbps" },
      { name: "Facebook", value: "100Mbps" },
      { name: "BDIX", value: "100Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: false,
    type: "basic"
  },
  {
    title: "STANDARD",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "100",
    price: "4,499",
    features: [
      { name: "YouTube", value: "200Mbps" },
      { name: "Facebook", value: "200Mbps" },
      { name: "BDIX", value: "200Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: true,
    type: "standard"
  },
  {
    title: "PREMIUM",
    subtitle: "UNLIMITED TRAFFIC",
    speed: "150",
    price: "5,499",
    features: [
      { name: "YouTube", value: "300Mbps" },
      { name: "Facebook", value: "300Mbps" },
      { name: "BDIX", value: "300Mbps" },
    ],
    vat: "5% VAT Included",
    installation: "Installation Charge: 1,500 Tk",
    featured: false,
    type: "premium"
  }
];



export {
  navMenu,
  footerMenu,
  socialLinks,
  services,
  coverageAreas,
  pricingData
}