import emailIcon from "../assets/email-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import youtubeIcon from "../assets/youtube-icon.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] py-6 mt-auto text-center text-sm text-[var(--color-text)]">
      <div className="flex justify-center gap-6 items-center mb-2">
        <img src={emailIcon} alt="Email" className="w-6 h-6" />
        <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
        <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
      </div>
      <p className="opacity-70">Designed & built by Connie Xu © {new Date().getFullYear()}</p>
    </footer>
  );
}
