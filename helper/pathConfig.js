export const PATH = {
  root: '/',
  about: '/about-us',
  // offers: '/offers',
  // contact: '/contact',
  // blog: '/blog',
  // faq: '/faq',
  // packages: '/packages',
  // connectionRequest: '/connection-request',
  // supportRequest: '/support-request'
}
export const navMenu = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Packages', url: '/packages' },
  { name: 'Coverage', url: '/coverage' },
  { name: 'Pay Bill', url: '/pay-bill' },
  { name: 'Offers', url: '/offers' },
  { name: 'Support', url: '/support' },
]

export const footerMenu = [
  {
    title: 'company',
    menu: [
      { name: 'about', url: PATH.about },
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

