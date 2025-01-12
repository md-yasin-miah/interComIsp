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
  const [HeroSlide, setHeroSlide] = useState(initial);
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


  return (
    <HomeAPIContext.Provider
      value={{
        HeroSlide,
        getHeroSlideData
      }}>
      {children}
    </HomeAPIContext.Provider>
  );
};
