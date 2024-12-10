import Image from 'next/image';

const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[5.625rem] px-[10rem] gap-[6.875rem] text-black bg-beige-1 sm:px-[1rem] md:px-[1rem] md:py-[4rem] md:pb-[6rem]">
      <div className="flex flex-col items-center justify-center gap-[5rem]">
        <div className="relative">
          <div className="text-1.875-700 sm:text-1.5-700 h-[2rem] sm:h-[1.5rem] sm:text-center">
            병원의 경쟁력을 높이는 <br className="hidden sm:inline" /> 사후관리
            솔루션
          </div>
          <div className="absolute border-b-[0.5rem] w-full border-blue-1"></div>
        </div>
        <div className="flex gap-[3rem] md:gap-[2rem] sm:gap-[1rem] sm:flex-col">
          <Image
            className="w-[17.5rem] md:w-[10rem] sm:w-[12rem]"
            src="/images/group1.png"
            width={1000}
            height={1000}
            alt="linear"
          />
          <Image
            className="w-[17.5rem] md:w-[10rem] sm:w-[12rem]"
            src="/images/group2.png"
            width={1000}
            height={1000}
            alt="linear"
          />
          <Image
            className="w-[17.5rem] md:w-[10rem] sm:w-[12rem]"
            src="/images/group3.png"
            width={1000}
            height={1000}
            alt="linear"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
