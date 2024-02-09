import React, { useRef } from "react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <div
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="question-icon">
          <p className="question-content">{question}</p>{!isOpen? "+" : "-"}
        </div>
        <div
          ref={contentHeight}
          className="answer-container"
          style={
            isOpen
              ? { height: contentHeight.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className="answer-content">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
