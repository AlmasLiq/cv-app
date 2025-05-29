type PhotoBoxProps = {
  name: string;
  title?: string;
  description?: string;
};

function PhotoBox({ name, title, description }: PhotoBoxProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="src/assets/Almas.png"
        className="rounded-full border-2 border-white w-10 h-10 sm:w-24 sm:h-24"
        alt={name}
      />
      <div className="hidden sm:block mt-2 text-white">
        <div className="hidden sm:block mt-2 text-white">
                {name}
        </div>        
        {title && <p className="text-sm text-gray-300">{title}</p>}
        {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
      </div>
    </div>
  );
}

export default PhotoBox;
