type InfoProps = {
  text: string;
};

function Info({ text }: InfoProps) {
  return (
    <div className="bg-gray-300 p-2  border-gray-200 text-gray-800">
      <p className="text-base">{text}</p>
    </div>
  )
}

export default Info