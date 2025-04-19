import { COLLECTION } from "@/helper/config";
import { DB, getUrl } from "@/helper/functions";

export async function getHomePageData() {
  try {
    // Fetch all required data in parallel
    const [
      heroSlides,
      about,
      testimonials,
      clientReviews,
      faqs,
      packages,
      offers,
      whyChooseUs
    ] = await Promise.all([
      DB.collection(COLLECTION.HERO_SLIDE).getFullList({ requestKey: null }),
      DB.collection(COLLECTION.ABOUT).getFullList({ requestKey: null }),
      DB.collection(COLLECTION.TESTIMONIAL).getFullList({ requestKey: null }),
      DB.collection(COLLECTION.CLIENT_REVIEW).getFullList({ requestKey: null }),
      DB.collection(COLLECTION.FAQ).getFullList({ requestKey: null }),
      DB.collection(COLLECTION.PACKAGES).getFullList({ requestKey: null }),
      DB.collection(COLLECTION.OFFERS).getFullList({ filter: `view_in_home = true` }, { requestKey: null }),
      DB.collection(COLLECTION.WHY_CHOOSE_US).getFullList({ requestKey: null })
    ]);

    // Process the data
    return {
      heroSlides: heroSlides.map(item => ({
        ...item,
        featureImage_url: getUrl(item, 'featureImage')
      })),
      about: about.map(item => ({
        ...item,
        featureImgUrl: getUrl(item, 'feature_img')
      }))[0],
      testimonials: testimonials.map(item => ({
        ...item,
        videoUrl: getUrl(item, 'video'),
        thumbnailUrl: getUrl(item, 'thumbnail')
      })),
      clientReviews: clientReviews.map(item => ({
        ...item,
        client_image_url: getUrl(item, 'client_img')
      })),
      faqs,
      packages: {
        data: packages,
        type: [...new Set(packages.map(item => item.type))]
      },
      offers: offers.map(item => ({
        ...item,
        bannerImgUrl: getUrl(item, 'banner_img')
      })),
      whyChooseUs
    };
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
}

export async function getServicesData() {
  try {
    const services = await DB.collection(COLLECTION.SERVICE).getFullList(
      { filter: `active = true` },
      { requestKey: null }
    );

    return services.map(item => ({
      ...item,
      bannerImgUrl: getUrl(item, 'banner_img_url')
    }));
  } catch (error) {
    console.error('Error fetching services data:', error);
    throw error;
  }
}