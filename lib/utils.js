import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const heroSliderOptions = {
  type: 'loop',
  arrows: false,
  perPage: 1,
  autoPlay: true,
  pagination: true,
  interval: 5000,
  classes: {
    pagination: 'splide__pagination custom-pagination',
  },
}
