const NSLogo = ({ animate }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="56"
      viewBox="0 0 100 56"
      fill="none"
    >
      <path
        d="M90 6C90 6 82 6 66 6C50 6 50 28 66 28C82 28 66 28 82 28C98 28 98 50 82 50C82 50 49 50 43 50C37 50 37 50 37 44C37 38 37 43 37 22C37 1 6 1 6 22C6 43 6 50 6 50"
        stroke="black"
        stroke-width="12"
        stroke-linecap="round"
        stroke-dasharray="400px"
        stroke-dashoffset="0px"
      >
        {animate ? (
          <animate
            attributeType="CSS"
            attributeName="stroke-dashoffset"
            dur="1.5s"
            repeatCount="indefinite"
            from="-270px"
            to="400px"
          ></animate>
        ) : (
          <></>
        )}
      </path>
    </svg>
  );
};

export default NSLogo;
