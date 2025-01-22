// theme
import { APP_NAME, APP_DESCRIPTION, APP_KEYWORDS, APP_AUTHOR } from '@/helper/config';
// import palette from '@/theme/palette';

export const Metadata = (
    title = '',
    description = APP_DESCRIPTION,
    keywords = APP_KEYWORDS,
    authors = APP_AUTHOR,
    manifest = '/manifest.json',
    icons = {
        // icon: '/favicon/favicon-16x16.png',
        // apple: '/favicon/apple-touch-icon.png',
        // favicon: '/favicon/favicon-16x16.png',
    },
) => {
    const fullTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;

  return {
    title: fullTitle,
    description: description,
    keywords: keywords,
    authors: [{ name: authors }],
    // themeColor: palette.light.primary.main, // Your primary color
    manifest: manifest,
    icons: icons,
  };
}; 