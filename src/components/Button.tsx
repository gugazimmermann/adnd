type AuthButtonProps = {
  text: string;
  disabled: boolean;
  handler: () => void;
};

const AuthButton = ({ text, disabled, handler }: AuthButtonProps) => (
  <button
    type="button"
    onClick={handler}
    disabled={disabled}
    className={`${
      disabled
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-red-600 cursor-pointer hover:bg-red-900 hover:shadow-md focus:bg-red-900 focus:shadow-md focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-md"
    } inline-block px-2 py-2 text-white font-medium uppercase rounded shadow-md transition duration-150 ease-in-out w-full`}
  >
    {text}
  </button>
);

export default AuthButton;
