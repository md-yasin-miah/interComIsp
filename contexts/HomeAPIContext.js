"use client";
import { COLLECTION } from "@/helper/config";
import { DB, getImgUrl } from "@/helper/functions";
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

  const homePage=()=>{
    // get hero slide data
    const getHeroSlideData = () => {
      setHeroSlide({ ...initial, isLoading: true });
      DB.collection(COLLECTION.HERO_SLIDE).getFullList({ requestKey: null }).
        then((result) => {
          const data = result.map((item) => {
            return {
              ...item,
              featureImage_url: getImgUrl(item, 'featureImage')
            }
          })
          setHeroSlide({ ...initial, data: data });
        }).catch((error) => {
          console.log(COLLECTION.HERO_SLIDE, error)
          setHeroSlide({ ...initial, isError: true });
        });
    }

    const getAboutData = () => {
      setAbout({ ...initial, isLoading: true });
      DB.collection(COLLECTION.ABOUT).getFullList({ requestKey: null }).then((result) => {
        const data = result.map((item) => {
          return {
            ...item,
            featureImgUrl: getImgUrl(item, 'feature_img')
          }
        })
        setAbout({ ...initial, data: data[0] });
      }).catch((error) => {
        console.log(COLLECTION.ABOUT, error)
        setAbout({ ...initial, isError: true });
      })
    }

    return{
      //function
      getHeroSlideData,
      getAboutData,

      //data
      HeroSlide,
      About
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
