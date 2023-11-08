import CountUp from "react-countup";

const Section2 = () => {
  return (
    <div className="max-w-6xl mx-auto text-black p-12 flex justify-around border-2 bg-slate-300 mb-12 rounded-lg">
      <div className="flex flex-col items-center justify-center text-center space-y-5">
        <div className="text-4xl font-bold">
          <CountUp start={1} end={100} duration={7} delay={1}></CountUp> k+
        </div>
        <span className="text-lg font-semibold">Applied Jobs</span>
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-5">
        <div className="text-4xl font-bold">
          <CountUp start={1} end={80} duration={7} delay={1}></CountUp> k+
        </div>
        <span className="text-lg font-semibold">Total Intern</span>
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-5">
        <div className="text-4xl font-bold">
          <CountUp start={1} end={200} duration={7} delay={1}></CountUp> k+
        </div>
        <span className="text-lg font-semibold">Dollar Payout</span>
      </div>
    </div>
  );
};

export default Section2;
