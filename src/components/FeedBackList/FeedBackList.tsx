import { DEFAULT_AVATAR } from "../../utils/constants";
import Info from "../common/Info/Info";

export type Feedback = {
  text: string;
  reporter: {
    photoUrl: string;
    name: string;
    citeUrl: string;
  };
};

type FeedbackListProps = {
  data: Feedback[];
};

function FeedbackList ({ data }: FeedbackListProps)  {
  return (
    <div className="space-y-8">
      {data.map((feedBack, index) => (
        <div key={index} className="space-y-4">
            <Info text={feedBack.text}></Info>
          <div className="flex items-center space-x-3">
            <img
                src={feedBack.reporter.photoUrl || DEFAULT_AVATAR}
                alt={feedBack.reporter.name}
                className="w-18 h-18 rounded-full object-cover"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = DEFAULT_AVATAR;
                }}
            />

            <div className="text-sm">
              <p className="font-semibold text-gray-900">{feedBack.reporter.name}</p>
              <a
                href={feedBack.reporter.citeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                {new URL(feedBack.reporter.citeUrl).hostname}
              </a>
            </div>
          </div>

          {/* Разделитель (опционально) */}
          <div className="border-b border-gray-200 mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList