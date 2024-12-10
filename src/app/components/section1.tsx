import Image from 'next/image';

export default function Section1() {
  return (
    <div className="flex flex-col gap-[2rem] pb-[5rem]">
      <div className="py-[6rem] flex flex-col items-center justify-center gap-[8rem] bg-blue-gradient">
        <div className="text-2.5-900 sm:text-1.5-900 sm:text-center">
          환자는 관리받고, 병원은 신뢰받는 <br className="hidden sm:inline" />
          <span className="hidden sm:inline sm:text-2-900">
            위고비 관리 파트너
          </span>
        </div>
        <div>
          <Image
            className="size-[27rem] sm:size-[18rem]"
            src="/images/section1.png"
            width={1000}
            height={1000}
            alt="main image"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[4rem] ">
        <div className="flex sm:flex-col sm:items-center">
          <div className="text-black text-1.875-400 sm:text-1.125-400">
            위고비 처방 환자관리,&nbsp;
          </div>
          <div className="relative">
            <div className="text-1.875-700 h-[2rem] sm:text-1.125-700 sm:h-[1rem]">
              핏큘레이터와 함께하면 달라집니다.
            </div>
            <div className="absolute border-b-[0.5rem] w-full border-blue-1"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[1.5rem]">
          <Image
            className="w-[20rem] z-0 sm:w-[12rem]"
            src="/images/app-image.png"
            width={2000}
            height={2000}
            alt="app image"
          />
          <div className="flex flex-col gap-[0.5rem] items-center sm:gap-[1rem]">
            <div className="text-1.875-700 h-[2.5rem] sm:h-[1.15rem] sm:text-1.5-700">
              트레이닝 이론 기반 운동 관리
            </div>
            <div className="text-1.25-600 sm:text-1-600">
              웨어러블 디바이스와 연동된 데이터 기반 솔루션
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
