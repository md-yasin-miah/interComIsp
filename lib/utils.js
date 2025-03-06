import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const heroSliderOptions = {
  type: 'loop',
  arrows: false,
  perPage: 1,
  pagination: true,
  classes: {
    pagination: 'splide__pagination custom-pagination',
  },
}
export const testimonialSplideOptions = {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  arrows: false,
  pagination: false,
  perPage: 3,
  gap: '2rem',
  autoScroll: {
    speed: 1,
  },
  breakpoints: {
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1,
    },
  },
};
export const reviewSplideOptions = {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  arrows: false,
  perPage: 3,
  gap: '16px',
  autoScroll: {
    speed: 1,
  },
  breakpoints: {
    1024: {
      perPage: 2,
    },
    640: {
      perPage: 1,
    },
  },
}
