"use client";
import { COLLECTION } from "@/helper/config";
import { DB, getUrl } from "@/helper/functions";
import { createContext, useState } from "react";

export const HomeAPIContext = createContext();

export const HomeAPIProvider = ({ children }) => {
  const initial = {
    data: null,
    isLoading: false,
    isError: false,
  }

  //home page state
  const [HeroSlide, setHeroSlide] = useState(initial);
  const [About, setAbout] = useState(initial);
  const [Testimonial, setTestimonial] = useState(initial);
  const homePage=()=>{
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

    return{
      //function
      getHeroSlideData,
      getAboutData,
      getTestimonialData,

      //data
      HeroSlide,
      About,
      Testimonial
    }
  }


  return (
    <HomeAPIContext.Provider
      value={{
        ...homePage()
      }}>
      {children}
    </HomeAPIContext.Provider>
  );
};
