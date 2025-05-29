type BoxProps = {
  title: string;
  content?: string;
};

function Box({ title, content }: BoxProps) {
  return (
    <>
      <div className="text-green-500 text-2xl font-bold tracking-normal">{title}</div>
      {content && <div className="w-full">{content}</div>}
    </>
  );
}

export default Box;
