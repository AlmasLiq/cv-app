type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-black hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
