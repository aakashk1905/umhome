import React, { useState } from "react";
import "./styles/Faqs.css";
import AccordionItem from "./AccordianItem";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    {
      question: "How do I join Upskill Mafia?",
      answer:
        "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities.",
    },
    {
      question: " Is Upskill Mafia free to use?",
      answer:
        "Yes, Upskill Mafia offers free access to its platform, including courses, communities, and learning resources.",
    },
    {
      question: "Are there any prerequisites for enrolling in courses?",
      answer:
        "All our courses are designed for beginners with no prior experience required. However, some advanced courses may have prerequisites listed in the course description.",
    },
    {
      question: "Can I collaborate with other learners on projects?",
      answer:
        "Absolutely! Upskill Mafia encourages collaboration among learners. You can join communities, participate in group assignments, and connect with peers to collaborate on projects.",
    },
    {
      question: "How can I get help if I have questions or issues?",
      answer:
        "If you have any questions or encounter issues while using Upskill Mafia, you can reach out to our support team through the contact form on our website or via email.",
    },
    {
      question: "Does Upskill Mafia offer job placement assistance?",
      answer:
        "While we do not offer direct job placement services, Upskill Mafia provides resources such as internship opportunities, job boards, and career advice to help you advance your career.",
    },  
  ];
  return (
    <div className="faq-cont" id="faq">
      <div className="faq-inner-cont">
        <div className="faq-left">
          <div className="faq-head">
            Got <b className="faq-head-col">Questions?</b> We've got{" "}
            <b className="faq-head-col">Answers!</b>
          </div>
          <div className="faq-text">
            Explore our frequently asked questions to find quick answers to
            common queries. If you can't find what you're looking for, feel free
            to reach out to our support team for assistance.
          </div>
        </div>
        <div className="faq-right">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
