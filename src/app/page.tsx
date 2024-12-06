import Section2 from './components/section2';
import Section1 from './components/section1';
import Section3 from './components/section3';
import FaQSection from './components/facsection';

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <FaQSection />
    </div>
  );
}
