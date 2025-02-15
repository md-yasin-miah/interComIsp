export const THEME = { light: 'light', dark: 'dark' };
export const DB_BASE_URL = process.env.NEXT_PUBLIC_DB_BASE_URL;

// data collection name
export const COLLECTION = {
  // home page
  HERO_SLIDE: 'heroSlide',
  ABOUT: 'about',
  TESTIMONIAL: 'testimonial',
  CLIENT_REVIEW: 'client_review',
  FAQ: 'faq',
  PACKAGES: 'packages',
  OFFERS: 'offers',
  // service page
  SERVICE: 'services',
  // page banner
  PAGE_BANNER: 'page_banner',

  CONNECTION_REQUEST: 'connection_request',
  SUPPORT_REQUEST: 'support_request',
  WHY_CHOOSE_US: 'why_choose_us',
  POLICIES: 'all_policies',
  CONTACT_INFO: 'contact_info',
  COVERAGE_AREA: 'coverage_area'
}
export const PAYMENT_METHOD = [
  {
    id: 1,
    name: 'Bikash',
    value: 'bikash'
  },
  {
    id: 2,
    name: 'Nogod',
    value: 'nogod'
  },

]

// app info
export const APP_NAME = 'NetCom Internet';
export const APP_DESCRIPTION = 'NetCom Internet';
export const APP_KEYWORDS = 'NetCom Internet, ISP';
export const APP_AUTHOR = 'NetCom Internet';