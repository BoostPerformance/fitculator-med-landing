'use client';
import { useRouter } from 'next/navigation';

export default function Button() {
  const router = useRouter();
  return (
    <button
      className={`flex w-[15rem] h-[2.75rem]  rounded-[6.25rem] px-[2.25rem] items-center justify-center text-1.25-900 sm:text-0.875-700 sm:w-[10rem] sm:h-[2.2rem] sm:py-[1rem] sm:px-0 md:px-[1rem] md:w-[12rem] bg-white text-blue`}
      onClick={() => router.push('https://tally.so/r/n0oB5y')}
    >
      지금 제휴 상담하기
    </button>
  );
}
