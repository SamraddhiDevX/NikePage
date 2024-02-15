const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-3 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " text-coral-red border-coral-red"
      } rounded-full ${fullWidth && "w-full"} hover:bg-coral-red hover:text-white`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className=' rounded-full w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
