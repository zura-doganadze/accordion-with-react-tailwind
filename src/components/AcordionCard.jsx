import { useState } from "react";
import AccordionItem from "./AccordionItem";
import questions from "./data";
import upcheveron from "../images/upchevron.svg" 
import downcheveron from "../images/downCheveron.svg"

function AcordionCard() {
  const [active, setActive] = useState(null);

  const handleClock = (accordionNumber) => {
    if (active === accordionNumber) {
      setActive(null);
    } else {
      setActive(accordionNumber);
    }
  };

  return (
    <div>
      <img src={upcheveron} alt="" />
      {questions.map((item) => (
        <AccordionItem
          handleClock={handleClock}
          active={active}
          itemNumber={item.id}
          title={item.title}
          content={item.info}
          upcheveron={upcheveron}
          downcheveron={downcheveron}
        />
      ))}
    </div>
  );
}

export default AcordionCard;
