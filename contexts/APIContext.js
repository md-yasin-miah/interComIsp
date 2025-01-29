"use client";
import { COLLECTION } from "@/helper/config";
import { DB, getUrl } from "@/helper/functions";
import { createContext, useState } from "react";

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const initial = {
    data: null,
    isLoading: false,
    isError: false,
  }

  //home page state
  const [HeroSlide, setHeroSlide] = useState(initial);
  const [About, setAbout] = useState(initial);
  const [Testimonial, setTestimonial] = useState(initial);
  const [ClientReview, setClientReview] = useState(initial);
  const [FAQ, setFAQ] = useState(initial);
  const [Packages, setPackages] = useState(initial);
  const [Offers, setOffers] = useState(initial);
  const [OfferDetails, setOfferDetails] = useState(initial);
  const [WhyChooseUs, setWhyChooseUs] = useState(initial);

  //page banner state
  const [PageBanners, setPageBanners] = useState(initial);

  //service page state
  const [Services, setServices] = useState(initial);
  const [ServiceDetails, setServiceDetails] = useState(initial);
  const homePage = () => {
    // get hero slide data
    const getHeroSlideData = () => {
      setHeroSlide({ ...initial, isLoading: true });
      DB.collection(COLLECTION.HERO_SLIDE).getFullList({ requestKey: null }).
        then((result) => {
          const data = result.map((item) => {
            return {
              ...item,
              featureImage_url: getUrl(item, 'featureImage')
            }
          })
          setHeroSlide({ ...initial, data: data });
        }).catch((error) => {
          console.log(COLLECTION.HERO_SLIDE, error)
          setHeroSlide({ ...initial, isError: true });
        });
    }
    // get about data
    const getAboutData = () => {
      setAbout({ ...initial, isLoading: true });
      DB.collection(COLLECTION.ABOUT).getFullList({ requestKey: null }).then((result) => {
        const data = result.map((item) => {
          return {
            ...item,
            featureImgUrl: getUrl(item, 'feature_img')
          }
        })
        setAbout({ ...initial, data: data[0] });
      }).catch((error) => {
        console.log(COLLECTION.ABOUT, error)
        setAbout({ ...initial, isError: true });
      })
    }
    // get testimonial data
    const getTestimonialData = () => {
      setTestimonial({ ...initial, isLoading: true });
      DB.collection(COLLECTION.TESTIMONIAL).getFullList({ requestKey: null }).then((result) => {
        const data = result.map((item) => {
          return {
            ...item,
            videoUrl: getUrl(item, 'video'),
            thumbnailUrl: getUrl(item, 'thumbnail')
          }
        })
        setTestimonial({ ...initial, data: data });
      }).catch((error) => {
        console.log(COLLECTION.TESTIMONIAL, error)
        setTestimonial({ ...initial, isError: true });
      })
    }
    // get client review data
    const getClientReviewData = () => {
      setClientReview({ ...initial, isLoading: true });
      DB.collection(COLLECTION.CLIENT_REVIEW).getFullList({ requestKey: null }).then((result) => {
        const data = result.map((item) => {
          return {
            ...item,
            client_image_url: getUrl(item, 'client_img')
          }
        })
        setClientReview({ ...initial, data: data });
      }).catch((error) => {
        console.log(COLLECTION.CLIENT_REVIEW, error)
        setClientReview({ ...initial, isError: true });
      })
    }
    // get faq data
    const getFaqData = () => {
      setFAQ({ ...initial, isLoading: true });
      DB.collection(COLLECTION.FAQ).getFullList({ requestKey: null }).then((result) => {
        setFAQ({ ...initial, data: result });
      }).catch((error) => {
        console.log(COLLECTION.FAQ, error)
        setFAQ({ ...initial, isError: true });
      })
    }
    //get data packages
    const getPackagesData = () => {
      setPackages({ ...initial, isLoading: true });
      DB.collection(COLLECTION.PACKAGES).getFullList({ requestKey: null }).then((result) => {
        setPackages({
          ...initial,
          data: result,
          // unique type
          type: [...new Set(result.map((item) => item.type))]
        });
      }).catch((error) => {
        console.log(COLLECTION.PACKAGES, error)
        setPackages({ ...initial, isError: true });
      })
    }
    //get offers data
    const getOffersData = () => {
      setOffers({ ...initial, isLoading: true });
      DB.collection(COLLECTION.OFFERS).getFullList(
        { filter: `view_in_home = true` },
        { requestKey: null }
      ).then((result) => {
        const data = result.map((item) => {
          return {
            ...item,
            bannerImgUrl: getUrl(item, 'banner_img')
          }
        })
        setOffers({ ...initial, data });
      }).catch((error) => {
        console.log(COLLECTION.OFFERS, error)
        setOffers({ ...initial, isError: true });
      })
    }
    const getOfferDetails = (id) => {
      setOfferDetails({ ...initial, isLoading: true });
      DB.collection(COLLECTION.OFFERS).getOne(id, { requestKey: null }).then((result) => {
        setOfferDetails({
          ...initial, data: {
            ...result,
            bannerImgUrl: getUrl(result, 'banner_img')
          }
        });
      }).catch((error) => {
        console.log(COLLECTION.OFFERS, error)
        setOfferDetails({ ...initial, isError: true });
      })
    }

    //why_choose_us data
    const getWhyChooseUsData = () => {
      setWhyChooseUs({ ...initial, isLoading: true });
      DB.collection(COLLECTION.WHY_CHOOSE_US).getFullList({ requestKey: null }).then((result) => {
        setWhyChooseUs({ ...initial, data: result });
      }).catch((error) => {
        console.log(COLLECTION.WHY_CHOOSE_US, error)
        setWhyChooseUs({ ...initial, isError: true });
      })
    }

    return {
      //function
      getHeroSlideData,
      getAboutData,
      getTestimonialData,
      getClientReviewData,
      getFaqData,
      getPackagesData,
      getOffersData,
      getOfferDetails,
      getWhyChooseUsData,
      //data
      HeroSlide,
      About,
      Testimonial,
      ClientReview,
      FAQ,
      Packages,
      Offers,
      OfferDetails,
      WhyChooseUs
    }
  }

  const servicePage = () => {
    //get services data
    const getServicesData = () => {
      setServices({ ...initial, isLoading: true });
      DB.collection(COLLECTION.SERVICE).getFullList(
        { filter: `active = true` },
        { requestKey: null }
      ).then((result) => {
        const data = result.map((item) => {
          return {
            ...item,
            bannerImgUrl: getUrl(item, 'banner_img_url')
          }
        })
        setServices({ ...initial, data });
      }).catch((error) => {
        console.log(COLLECTION.SERVICE, error)
        setServices({ ...initial, isError: true });
      })
    }
    //get service details
    const getServiceDetails = (id) => {
      setServiceDetails({ ...initial, isLoading: true });
      DB.collection(COLLECTION.SERVICE).getOne(id, { requestKey: null }).then((result) => {
        setServiceDetails({
          ...initial, data: {
            ...result,
            bannerImgUrl: getUrl(result, 'banner_img_url')
          }
        });
      }).catch((error) => {
        console.log(COLLECTION.SERVICE, error)
        setServiceDetails({ ...initial, isError: true });
      })
    }

    return {
      //function
      getServicesData,
      getServiceDetails,

      //data
      Services,
      ServiceDetails
    }
  }

  //page banner data
  const getPageBannerData = () => {
    setPageBanners({ ...initial, isLoading: true });
    DB.collection(COLLECTION.PAGE_BANNER).getFullList({ requestKey: null }).then((result) => {
      setPageBanners({
        ...initial, data: result.map((item) => {
          return {
            ...item,
            bannerImgUrl: getUrl(item, 'banner_img')
          }
        })
      });
    }).catch((error) => {
      console.log(COLLECTION.PAGE_BANNER, error)
      setPageBanners({ ...initial, isError: true });
    })
  }

  // connection request
  const connectionRequest = {
    create: (data) => {
      DB.collection(COLLECTION.CONNECTION_REQUEST).create(data).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
  //client support request
  const clientSupportRequest = {
    create: (data) => {
      DB.collection(COLLECTION.SUPPORT_REQUEST).create(data).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    }
  }


  return (
    <APIContext.Provider
      value={{
        ...homePage(),
        ...servicePage(),
        getPageBannerData,
        PageBanners,
        connectionRequest,
        clientSupportRequest
      }}>
      {children}
    </APIContext.Provider>
  );
};
