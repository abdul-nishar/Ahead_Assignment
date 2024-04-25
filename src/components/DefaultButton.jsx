const DefaultButton = ({ children, ...props }) => {
  return (
    <button
      className="bg-black text-white rounded-3xl py-3 px-6 move-up font-custom text-lg"
      {...props}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
