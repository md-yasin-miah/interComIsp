import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
  FaGithub,
  FaGitlab,
  FaMedium,
  FaDribbble,
  FaBehance,
  FaVimeo,
  FaDiscord,
  FaSlack,
  FaTumblr,
  FaWeixin,
  FaLine,
  FaFlickr,
  FaQuora,
  FaSoundcloud,
  FaSpotify,
  FaApple,
  FaGoogle,
  FaMicrosoft,
} from 'react-icons/fa';
import { DB_BASE_URL } from './config';
import PocketBase from 'pocketbase';

const getSocialIcon = (icon) => {
  switch (icon.toLowerCase()) {
    case 'facebook':
      return <FaFacebook />;
    case 'twitter':
      return <FaTwitter />;
    case 'instagram':
      return <FaInstagram />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'youtube':
      return <FaYoutube />;
    case 'pinterest':
      return <FaPinterest />;
    case 'snapchat':
      return <FaSnapchat />;
    case 'reddit':
      return <FaReddit />;
    case 'whatsapp':
      return <FaWhatsapp />;
    case 'telegram':
      return <FaTelegram />;
    case 'tiktok':
      return <FaTiktok />;
    case 'github':
      return <FaGithub />;
    case 'gitlab':
      return <FaGitlab />;
    case 'medium':
      return <FaMedium />;
    case 'dribbble':
      return <FaDribbble />;
    case 'behance':
      return <FaBehance />;
    case 'vimeo':
      return <FaVimeo />;
    case 'discord':
      return <FaDiscord />;
    case 'slack':
      return <FaSlack />;
    case 'tumblr':
      return <FaTumblr />;
    case 'wechat':
      return <FaWeixin />;
    case 'line':
      return <FaLine />;
    case 'flickr':
      return <FaFlickr />;
    case 'quora':
      return <FaQuora />;
    case 'soundcloud':
      return <FaSoundcloud />;
    case 'spotify':
      return <FaSpotify />;
    case 'apple':
      return <FaApple />;
    case 'google':
      return <FaGoogle />;
    case 'microsoft':
      return <FaMicrosoft />;
    default:
      return <FaFacebook />;
  }
}
const DB = new PocketBase(DB_BASE_URL);
const getImgUrl = (item, name) => {
  return DB.files.getURL(item, item[name])
}

export {
  getSocialIcon,
  DB,
  getImgUrl
}