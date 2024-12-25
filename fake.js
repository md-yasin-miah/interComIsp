// Define coverage areas with their coordinates and radius
const coverageAreas = [
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

export { coverageAreas, pricingData }