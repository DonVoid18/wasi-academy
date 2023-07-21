const ButtonToggle = ({ funct1 }) => {
  return (
    <button className="btn-toggle" onClick={() => funct1(false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 42 42"
        className="h-10 w-10"
      >
        <path
          d="M28.336 11.102l-7.425 7.423-7.424-7.423-2.474 2.474L18.436 21l-7.423 7.423 2.474 2.475 7.424-7.424 7.425 7.424 2.474-2.475L23.387 21l7.423-7.424-2.474-2.474z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
};
export default ButtonToggle;
