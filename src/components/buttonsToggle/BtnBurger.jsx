const BtnBurger = ({ funct1 }) => {
  return (
    <button className="btn-toggle" onClick={() => funct1(true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 42 42"
        className="h-10 w-10"
      >
        <path
          d="M7 10.5h28V14H7v-3.5zm0 8.75h28v3.5H7v-3.5zM7 28h28v3.5H7V28z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
};
export default BtnBurger;
