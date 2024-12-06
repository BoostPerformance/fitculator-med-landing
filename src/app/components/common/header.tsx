import Image from 'next/image';
import Button from './button';

const Header = () => {
  return (
    <header className="sticky w-full sm:w-auto h-[4.625rem] z-50 flex items-center justify-around top-0 sm:py-[0.5rem] bg-blue-500">
      <Image
        className="w-[11rem] sm:w-[8rem]"
        src="/svg/logo-white.svg"
        width={150}
        height={150}
        alt="orevo logo"
      />
      <Button />
    </header>
  );
};

export default Header;
