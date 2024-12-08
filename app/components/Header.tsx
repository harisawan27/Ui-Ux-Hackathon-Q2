const Header = () => {
  return (
    <div className="hidden h-14 lg:flex bg-[#252B42] text-white font-bold text-sm py-2 px-8 justify-between items-center">
      <div className="flex items-center gap-6">
        <span className="flex gap-2">
          <img src="/images/telephone.png" className="h-4" />
          <p>(225) 555-0118</p>
        </span>
        <span className="flex gap-2">
          <img src="/images/mail.png" className="h-4" />
          <p>michelle.rivera@example.com</p>
        </span>
      </div>
      <p>Follow Us and get a chance to win 80% off</p>
      <div className="flex gap-4">
        <p>Follow Us :</p>
        <img src="/images/instagram.png" className="h-4" />
        <img src="/images/youtube.png" className="h-4" />
        <img src="/images/facebook.png" className="h-4" />
        <img src="/images/twitter.png" className="h-4" />
      </div>
    </div>
  );
};

export default Header;
