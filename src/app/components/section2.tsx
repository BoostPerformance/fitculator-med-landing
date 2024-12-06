import Image from 'next/image';

export default function Section2() {
  return (
    <div className="py-[20rem] bg-beige flex flex-col gap-[4rem] items-center justify-center sm:py-[6rem] md:py-[6rem] bg-blue-2 bg-blueGradient">
      <div className="flex text-1.875-400 sm:text-1-400 sm:px-[1rem] sm:flex-col sm:items-center">
        <div className="sm:text-1.125-400">환자는&nbsp;</div>
        <div className="flex">
          <div className="relative">
            <div className="text-1.875-700 sm:text-1.125-700 h-[2rem] sm:h-[1rem]">
              병원 밖에서도 관리받고, 병원은 신뢰
            </div>
            <div className="absolute border-b-[0.5rem] w-full border-blue-1"></div>
          </div>
          <div>를 쌓습니다</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[1rem] sm:gap-[0.4rem] items-center sm:px-[1rem]">
        <div className="text-green flex items-center gap-[1rem] col-span-2 bg-[#E8EFFF] rounded-[1.25rem] py-[3rem] sm:h-[10rem]">
          <div className="w-full flex items-center justify-around sm:px-[1rem]">
            <div>
              <div className="text-1.5-700 sm:text-1-700 text-black">
                위고비 처방 환자 연계
              </div>
              <div className="text-1.25-600 sm:text-0.875-500 text-gray">
                병원에서 핏큘레이터 앱을 추천하여 <br /> 환자에게 간편한 관리
                환경 제공
              </div>
            </div>
            <Image
              className="w-[14rem] sm:w-[5.5rem]"
              src="/images/Rectangle1.png"
              width={1000}
              height={1000}
              alt="logo"
            />
          </div>
        </div>

        <div className="text-green relative flex flex-col  bg-[#F4EBF6] rounded-[1.25rem] py-[2rem] px-[2rem] w-[26rem] h-[18rem] sm:w-[10rem] sm:h-[8rem] sm:px-[0.8rem] sm:py-[1.2rem] md:w-[24rem]">
          <div className="relative z-10">
            <div className="text-1.5-700 sm:text-0.875-700 text-black">
              병원 전용 커스터마이징
            </div>
            <div className="text-1.25-600 sm:text-0.75-600 text-gray">
              병원별 환자 데이터 관리 및 <br /> 개인별 보고서 제공
            </div>
          </div>
          <Image
            className="absolute right-[2rem] bottom-[2rem] w-[11rem] sm:w-[3rem] sm:right-[0.5rem] sm:bottom-[1.2rem]"
            src="/images/Rectangle3.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>

        <div className="text-green relative flex flex-col  bg-[#E6E6FF] rounded-[1.25rem] py-[2rem] px-[2rem] w-[26rem] h-[18rem] sm:w-[10rem] sm:h-[8rem] sm:px-[0.8rem] sm:py-[1.2rem]  md:w-[24rem]">
          <div className="relative z-10">
            <div className="text-1.5-700 sm:text-0.875-700 text-black">
              비대면 솔루션
            </div>
            <div className="text-1.25-600 sm:text-0.75-600 text-gray">
              병원 밖에서도 환자가 <br className="hidden sm:inline" />
              운동과 체중 관리를
              <br />
              지속할 수 있도록 설계
            </div>
          </div>
          <Image
            className="absolute right-[2rem] bottom-[2rem] w-[11rem] sm:w-[3rem] sm:right-[0.5rem] sm:bottom-[1.2rem]"
            src="/images/Rectangle2.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
