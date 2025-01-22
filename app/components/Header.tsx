import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div className="hidden h-14 lg:flex bg-[#252B42] text-white font-bold text-sm py-2 px-8 justify-between items-center">
      <div className="flex items-center gap-6">
        <span className="flex gap-2">
          <img src="/images/telephone.png" className="h-4" />
          <p>(+92) 123456789</p>
        </span>
        <span className="flex gap-2">
          <img src="/images/mail.png" className="h-4" />
          <p>contact.libasg@gmail.com</p>
        </span>
      </div>
      <p>Follow Us and get a chance to win 80% off</p>
      <div className="flex gap-4">
        <p>Follow Us :</p>
          <Link href="https://www.instagram.com/mharisawan27" target="_blank" >
        <Image src="/images/instagram.png" alt="Instagram" width={16} height={16} className="h-4" />
          </Link>
        <Image src="/images/youtube.png" alt="Youtube" width={16} height={16} className="h-4" />
          <Link
            href="https://www.facebook.com/profile.php?id=61558545486623"
            target="_blank"
          >
        <Image src="/images/facebook.png" alt="Facebook" width={16} height={16} className="h-4" />
          </Link>
          <Link href="https://x.com/harisawan27" target="_blank" >
        <Image src="/images/twitter.png" alt="Twitter" width={16} height={16} className="h-4" />
          </Link>
      </div>
    </div>
  );
};

export default Header;
