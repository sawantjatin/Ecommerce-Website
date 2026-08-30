const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} interactive-button cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg py-2 px-8 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
