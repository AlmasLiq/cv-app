type Experience = {
  info: {
    date: string;
    company: string;
    job: string;
    description: string;
  };
};

type ExpertiseProps = {
  data: Experience[];
};

export default function Expertise({ data }: ExpertiseProps) {
  return (
    <div className="space-y-8">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-12 gap-4 items-start"
        >
            {/* Left column markup */}
          <div className=" text-right pr-4">
            <h3 className="font-bold text-lg">{item.info.company}</h3>
            <p className="text-gray-500 mt-2">{item.info.date}</p>
          </div>

            {/* Right column markup */}
          <div className="col-span-8">
            <p className="font-semibold text-lg">{item.info.job}</p>
            <p className="text-gray-700 mt-2">{item.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
