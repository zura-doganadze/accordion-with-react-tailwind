
export default function AccordionItem(props) {
  const { handleClock, active, itemNumber, title, content, upcheveron, downcheveron} = props;
  return (
    <div>
      <div
        onClick={() => {
          handleClock(itemNumber);
        }}
      >
        <h1>{title}</h1>
        <button onClick={() => handleClock(itemNumber)}>
          {active === itemNumber ? <img src={upcheveron}  /> : <img src={downcheveron}/>}
        </button>
        {active === itemNumber ? <p>{content}</p> : null}
      </div>
    </div>
  );
}
