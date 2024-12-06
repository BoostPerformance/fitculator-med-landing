import { Accordion } from './common/accordion';
import faqItems from '../data/faqItems';

const FaQSection = () => {
  return (
    <section className="flex flex-col items-center w-full py-[10rem] h-auto sm:py-[5rem] gap-[3rem]">
      <div className="flex sm:w-[23rem] sm:flex-col sm:gap-[1.75rem] flex-col gap-[5rem] sm:items-center ">
        <div className="text-center">
          <h2 className="text-2.5-900 mb-[1rem] sm:text-1.75-900 md:text-2-900  sm:text-center ">
            FAQ <br />더 궁금한 점이 있으신가요?
          </h2>

          <p className="text-gray-1 text-1.5-700 text-gray-5 md:text-1.5-700 sm:text-1-500">
            자주 물어보신 질문들만 <br />
            모아둔 FAQ를 참고해 주세요.
          </p>
        </div>
      </div>
      <Accordion items={faqItems} />
    </section>
  );
};

export default FaQSection;
