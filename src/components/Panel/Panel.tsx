import { SlArrowLeft, SlMenu } from "react-icons/sl";
import Button from "../common/Button/Button";
import Navigation from "./components/Navigation/Navigation";
import PhotoBox from "./components/PhotoBox/PhotoBox";

interface PanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Panel({ isOpen, onToggle }: PanelProps) {
  return (
    <>
      <div
        className={`
        bg-[#222935] h-lvh sticky top-0
        flex flex-col items-center justify-start gap-4 pt-5
        w-13.5 sm:w-62
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <button
          className="absolute top-5 right-[-2.2rem] bg-[#222935] p-2 shadow-lg rounded-r-lg"
          onClick={onToggle}
        >
          <SlMenu size={20} color="white" />
        </button>

        <PhotoBox name="Bayazin Almas" />
        <div className="sm:self-start">
          <Navigation />
        </div>

        <div className="mt-auto mb-4">
          <Button onClick={onToggle}>
            <SlArrowLeft />
            <span className="hidden sm:inline ml-2">Go Back</span>
          </Button>
        </div>
      </div>
    </>
  );
}
