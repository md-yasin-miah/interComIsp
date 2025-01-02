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
const blogPosts = [
  {
    id: 1,
    title: "10 Tips to Boost Your Wi-Fi Performance",
    excerpt: "Learn how to optimize your home network for better speed and coverage.",
    category: "Tips & Tricks",
    author: "Tech Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/about.webp",
    slug: "10-tips-boost-wifi-performance",
    content: `
      <h2>1. Optimal Router Placement</h2>
      <p>Place your router in a central location, elevated if possible, and away from walls and metal objects. The ideal position is in the center of your home, as Wi-Fi signals spread equally in all directions.</p>

      <h2>2. Update Your Router's Firmware</h2>
      <p>Regular firmware updates can improve performance, security, and add new features. Check your router manufacturer's website monthly for updates.</p>

      <h2>3. Choose the Right Channel</h2>
      <p>Wi-Fi channels can become congested in residential areas. Use a Wi-Fi analyzer app to find less crowded channels for better performance.</p>

      <h2>4. Use Modern Wi-Fi Standards</h2>
      <p>Upgrade to a router that supports modern standards like Wi-Fi 6 (802.11ax) for better speed and device handling capabilities.</p>

      <h2>5. Secure Your Network</h2>
      <p>Use WPA3 encryption and a strong password. An unsecured network can be accessed by others, reducing your bandwidth.</p>

      <h2>6. Consider a Mesh Network</h2>
      <p>For larger homes, a mesh network system can provide better coverage than a single router.</p>

      <h2>7. Regular Router Reboots</h2>
      <p>Schedule weekly router reboots to clear the cache and maintain optimal performance.</p>

      <h2>8. Optimize QoS Settings</h2>
      <p>Use Quality of Service settings to prioritize important traffic like video calls or gaming.</p>

      <h2>9. Remove Interference</h2>
      <p>Keep your router away from other electronic devices, especially those operating on 2.4GHz frequency.</p>

      <h2>10. Monitor Connected Devices</h2>
      <p>Regularly check and remove unauthorized devices from your network to ensure optimal bandwidth allocation.</p>
    `
  },
  {
    id: 2,
    title: "How to Choose the Perfect Internet Plan",
    excerpt: "A comprehensive guide to selecting the right internet package for your needs.",
    category: "Guides",
    author: "Network Expert",
    date: "March 12, 2024",
    readTime: "7 min read",  
    image: "/about.webp",
    slug: "choose-perfect-internet-plan",
    content: `
      <h2>Understanding Your Internet Needs</h2>
      <p>Before selecting a plan, consider your household's internet usage patterns and requirements.</p>

      <h2>Speed Requirements by Activity</h2>
      <ul>
        <li>Basic browsing and email: 5-10 Mbps</li>
        <li>HD video streaming: 15-25 Mbps</li>
        <li>4K streaming: 35-50 Mbps</li>
        <li>Online gaming: 25-35 Mbps</li>
        <li>Work from home: 50-100 Mbps</li>
      </ul>

      <h2>Consider Multiple Users</h2>
      <p>Multiply the basic requirements by the number of simultaneous users in your household.</p>

      <h2>Data Caps vs Unlimited</h2>
      <p>Evaluate your monthly data usage to decide between capped and unlimited plans.</p>

      <h2>Contract Terms</h2>
      <p>Compare long-term contracts with month-to-month options, considering both price and flexibility.</p>

      <h2>Additional Features</h2>
      <p>Look for valuable add-ons like security packages, Wi-Fi equipment, and technical support.</p>
    `
  },
  {
    id: 3,
    title: "Network Upgrade: What's New in Your Area",
    excerpt: "Latest updates on our network infrastructure improvements and coverage expansion.",
    category: "Updates",
    author: "Network Team",
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "/about.webp",
    slug: "network-upgrade-updates",
    content: `
      <h2>Infrastructure Improvements</h2>
      <p>We've completed major fiber optic backbone upgrades in the following areas...</p>

      <h2>Coverage Expansion</h2>
      <p>New service areas added this quarter include...</p>

      <h2>Speed Enhancements</h2>
      <p>Existing customers can now enjoy up to 50% faster speeds in the following regions...</p>

      <h2>Future Plans</h2>
      <p>Upcoming network improvements scheduled for the next quarter...</p>

      <h2>Customer Impact</h2>
      <p>How these upgrades will benefit your internet experience...</p>
    `
  },
  {
    id: 4,
    title: "Cybersecurity Essentials for Home Internet",
    excerpt: "Protect your home network and devices with these essential security tips.",
    category: "Security",
    author: "Security Expert",
    date: "March 8, 2024",
    readTime: "6 min read",
    image: "/about.webp",
    slug: "cybersecurity-essentials",
    content: `
      <h2>Basic Security Measures</h2>
      <p>Essential steps to secure your home network including password protection and encryption.</p>

      <h2>Advanced Security Features</h2>
      <p>Implementing firewalls, VPNs, and other advanced security measures.</p>

      <h2>Device Protection</h2>
      <p>Securing individual devices connected to your network.</p>

      <h2>Common Threats</h2>
      <p>Understanding and protecting against common cybersecurity threats.</p>

      <h2>Regular Maintenance</h2>
      <p>Schedule and checklist for maintaining network security.</p>

      <h2>Family Safety</h2>
      <p>Protecting children and implementing parental controls.</p>
    `
  },
  {
    id: 5,
    title: "Smart Home Setup Guide",
    excerpt: "Everything you need to know about setting up a smart home with reliable internet.",
    category: "Smart Home",
    author: "IoT Specialist",
    date: "March 5, 2024",
    readTime: "8 min read",
    image: "/about.webp",
    slug: "smart-home-setup",
    content: `
      <h2>Getting Started</h2>
      <p>Essential components and considerations for your smart home setup.</p>

      <h2>Network Requirements</h2>
      <p>Ensuring your internet connection can handle smart devices.</p>

      <h2>Device Selection</h2>
      <p>Choosing compatible smart devices and ecosystems.</p>

      <h2>Security Considerations</h2>
      <p>Keeping your smart home secure from cyber threats.</p>

      <h2>Voice Control Integration</h2>
      <p>Setting up and using voice assistants effectively.</p>

      <h2>Automation Tips</h2>
      <p>Creating useful automations and routines for your smart home.</p>

      <h2>Troubleshooting</h2>
      <p>Common issues and how to resolve them.</p>

      <h2>Future Expansion</h2>
      <p>Planning for adding more smart devices in the future.</p>
    `
  }
]; 


export {
  navMenu,
  footerMenu,
  socialLinks,
  services,
  coverageAreas,
  pricingData,
  blogPosts
}