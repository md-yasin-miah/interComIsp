'use client'
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Shade from '../skeleton/Shade';
import { APIContext } from '@/contexts/APIContext';

const PageBanner = ({
  title = '',
  title2 = '',
  subTitle = '',
  loading = false,
  pageName = '',
  boxClassName = ''
}) => {
  const { PageBanners, getPageBannerData } = useContext(APIContext);
  const banner = PageBanners.data?.find((item) => item.page_name === pageName);
  useEffect(() => {
    !PageBanners.data && getPageBannerData();
  }, []);
  console.log({ boxClassName });

  return (
    <section className={`${boxClassName} relative min-h-[300px] flex items-center`}>
      <div className="absolute inset-0 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        {
          banner?.bannerImgUrl && <Image src={banner?.bannerImgUrl} alt={banner?.banner_img} fill className='object-cover bg-opacity-50 absolute inset-0'></Image>
        }
        <div className={`absolute inset-0 dark:bg-black/55 mix-blend-multiply`} aria-hidden="true"></div>
      </div>
      <div className="relative customContainer">
        {
          loading || PageBanners.loading ?
            <Shade className="w-10/12 h-14 mb-8" />
            :
            <h1 className="title capitalize !text-start dark:text-white text-black lg:text-5xl md:text-4xl text-4xl">{title || banner?.title1}{" "} <span className='text-primary'>{title2 || banner?.title2}</span>
            </h1>
        }
        {
          loading || PageBanners.loading ?
            <div className='flex flex-col gap-2'>
              <Shade className="w-full h-4" />
              <Shade className="w-9/12 h-4" />
            </div>
            :
            <p
              className="lg:mt-6 md:mt-3 mt-6 lg:text-lg md:text-base text-lg dark:text-indigo-100 text-black max-w-3xl font-poppins"
              dangerouslySetInnerHTML={{ __html: subTitle || banner?.sub_title }}
            />
        }
      </div>
    </section>
  )
}

export default PageBanner;

PageBanner.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
  subTitle: PropTypes.string,
  loading: PropTypes.bool,
  pageName: PropTypes.string,
  boxClassName: PropTypes.string,
}