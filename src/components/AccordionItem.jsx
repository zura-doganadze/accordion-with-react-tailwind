export default function AccordionItem(props) {
  const {
    handleClock,
    active,
    itemNumber,
    title,
    content,
    upcheveron,
    downcheveron,
  } = props;
  return (
    <div className="border-b-2 border-cyan-50">
      <div
        onClick={() => {
          handleClock(itemNumber);
        }}
      >
        <div className="flex items-center justify-between max-w-xl mb-4 mt-1 sm:text-lg text-sm font-serif text-white ">
          <h1 className="mr-5">{title}</h1>
          <button
            className="text-white bg-white w-6 h-6 rounded-3xl flex items-center justify-center  "
            onClick={() => handleClock(itemNumber)}
          >
            {active === itemNumber ? (
              <img src={upcheveron} />
            ) : (
              <img src={downcheveron} />
            )}
          </button>
        </div>

        {active === itemNumber ? (
          <p className="sm:text-sm text-xs font-serif mb-3 px-5 text-white">
            {content}
          </p>
        ) : null}
      </div>
    </div>
  );
}
