import {
  MdPerson,
  MdSchool,
  MdEdit,
  MdWork,
  MdSend,
  MdChat,
} from "react-icons/md";

function Navigation() {
  return (
    <div className="flex flex-col gap-11.5 pt-10 sm:pl-4">
      <a href="#about" className="flex gap-2 text-[#a8abaf] items-center">
        <MdPerson color="#a8abaf" size={24} />{" "}
        <span className="hidden sm:inline">About Me</span>
      </a>

      <a href="#education" className="flex gap-2 text-[#a8abaf] items-center">
        <MdSchool color="#a8abaf" size={24} />
        <span className="hidden sm:inline"> Education</span>
      </a>

      <a href="#skills" className="flex gap-2 text-[#a8abaf] items-center">
        <MdEdit color="#a8abaf" size={24} />{" "}
        <span className="hidden sm:inline">Expierence</span>
      </a>

      <a href="#experience" className="flex gap-2 text-[#a8abaf] items-center">
        <MdWork color="#a8abaf" size={24} />{" "}
        <span className="hidden sm:inline">Portfolio</span>
      </a>

      <a href="#contact" className="flex gap-2 text-[#a8abaf] items-center">
        <MdSend color="#a8abaf" size={24} />{" "}
        <span className="hidden sm:inline">Contacts</span>
      </a>

      <a href="#chat" className="flex gap-2 text-[#a8abaf] items-center">
        <MdChat color="#a8abaf" size={24} />{" "}
        <span className="hidden sm:inline">FeedBack</span>
      </a>
    </div>
  );
}

export default Navigation;
