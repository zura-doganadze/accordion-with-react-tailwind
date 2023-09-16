import { useState } from "react";
import AccordionItem from "./AccordionItem";
import questions from "./data";
import upcheveron from "../images/upchevron.svg";
import downcheveron from "../images/downCheveron.svg";

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
    <div className="flex flex-col max-w-lg mt-24 w-2/3 lg:ml-96 sm:ml-40 ml-16 mr-11">
      <h1 className="text-white font-sans text-4xl uppercase flex justify-center mb-16">
        faq
      </h1>
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
