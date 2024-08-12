const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-solid m-2 p-2">
      <h1 className="font-bold ">{title}</h1>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible();
            console.log("hide-btn ", isVisible);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible();
            // console.log("show-btn ", isVisible);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default Section;
