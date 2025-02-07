export const PATH = {
  root: '/',
  services: '/services',
  packages: '/packages',
  coverage: '/coverage',
  payBill: '/pay-bill',
  offers: '/offers',
  support: '/support',
  about: '/about-us',
  contact: '/contact-us',
  termsOfUse: '/terms-of-use',
  privacyPolicy: '/privacy-policy',
  returnRefundPolicy: '/return-refund-policy',

  faqs: '/faqs',
  getQuote: '/get-quote',
  userManual: '/user-manual',
  scheduleOfCharges: '/schedule-of-charges',
}

export const navMenu = [
  { name: 'Home', url: PATH.root },
  { name: 'Services', url: PATH.services },
  { name: 'Packages', url: PATH.packages },
  { name: 'Coverage', url: PATH.coverage },
  { name: 'Pay Bill', url: PATH.payBill },
  { name: 'Offers', url: PATH.offers },
  { name: 'Support', url: PATH.support },
]

export const footerMenu = [
  {
    title: 'company',
    menu: [
      { name: 'about', url: PATH.about },
      { name: 'contact', url: PATH.contact },
      // { name: 'internship', url: '/internship' },
      // { name: 'BTRC License', url: '/btrc-license' },
      { name: 'terms of use', url: PATH.termsOfUse },
      { name: 'privacy policy', url: PATH.privacyPolicy },
      { name: 'return & refund policy', url: PATH.returnRefundPolicy },
    ]
  },
  {
    title: 'services',
    menu: [
      { name: 'offers', url: PATH.offers },
      // { name: 'pay bill', url: PATH.payBill },
      { name: 'services', url: PATH.services },
      // { name: 'products', url: '/products' },
      { name: 'packages', url: PATH.packages },
    ]
  },
  {
    title: 'support',
    menu: [
      { name: "FAQ's", url: PATH.faqs },
      { name: 'get quote', url: PATH.getQuote },
      { name: 'coverage', url: PATH.coverage },
      { name: 'user manual', url: PATH.userManual },
      { name: 'schedule of charges', url: PATH.scheduleOfCharges },
      // { name: 'contact', url: PATH.contact },
    ]
  }
]

