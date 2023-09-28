import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <div className="lg:px-14 p-10 text-white flex flex-col gap-4">
      <div className="flex gap-4 text-3xl">
        <span className="cursor-pointer">
          <TiSocialFacebook />
        </span>
        <span className="cursor-pointer">
          <TiSocialInstagram />
        </span>
        <span className="cursor-pointer">
          <TiSocialTwitter />
        </span>
        <span className="cursor-pointer">
          <TiSocialYoutube />
        </span>
      </div>
      <div className="grid grid-cols-4 text-sm gap-4 text-white/50">
        <p>Audio Description</p>
        <p>Help Center</p>
        <p>Gift Cards</p>
        <p>Media Center</p>
        <p>Investor Relations</p>
        <p>Terms of Use</p>
        <p>Privacy</p>
        <p>Legal Notices</p>
        <p>Cookie Preferences</p>
        <p>Corporate Information</p>
        <p>Contact Us</p>
      </div>
      <div className="text-sm text-white/50 border-[1px] border-white/50 w-max px-2 py-1 cursor-pointer">
        Service Code
      </div>
      <div>
        <span className="text-xs text-white/50">
          © 1997-2023 Netflix, Inc. ‎
        </span>
      </div>
    </div>
  );
};

export default Footer;
