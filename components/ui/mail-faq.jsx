import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
    {
        isActive: true,
        question: "What is Easy Frontend?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
    },
    {
        isActive: false,
        question: "Who is Easy Frontend for?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
    },
    {
        isActive: false,
        question: "How does Easy Frontend work?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
    },
    {
        isActive: false,
        question: "How often does your team upload resources?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
    },
    {
        isActive: false,
        question: "Can I get a refund if I cancel my subscription?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
    },
    {
        isActive: false,
        question: "Can I use Easy Frontend designs in my portfolio?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
    },
    {
        isActive: false,
        question: "Can I buy Easy Frontend extended license?",
        answer:
            "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
    },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive || false);
  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen ? "active mb-4" : "mb-4"}>
      <a
        href="#!"
        className="btn px-0 py-4 w-full text-start flex justify-between items-center"
        onClick={toggleFaq}
      >
        <span className="font-semibold">{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </a>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } border-l-2 border-blue-600 pl-4`}
      >
        <p className="opacity-70">{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

// Main Component
const HomeFaq = () => {
  const midPoint = Math.ceil(faqList.length / 2);
  const firstColumn = faqList.slice(0, midPoint);
  const secondColumn = faqList.slice(midPoint);

  return (
    <section className="ezy__faq12 light py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 md:px-8 lg:px-28">
        <div className="text-center mb-10">
          <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="bg-white shadow dark:shadow-none dark:bg-[#1E2735] p-6 rounded-xl">
            {firstColumn.map((faq, i) => (
              <FaqItem faq={faq} key={`left-${i}`} />
            ))}
          </div>

          {/* Right Column */}
          <div className="bg-white shadow dark:shadow-none dark:bg-[#1E2735] p-6 rounded-xl">
            {secondColumn.map((faq, i) => (
              <FaqItem faq={faq} key={`right-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;