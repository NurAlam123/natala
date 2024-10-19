interface ButtonProps {
  title?: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-white/80 transition">
      {title}
    </button>
  );
};
