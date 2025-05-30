import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
    {
        isActive: true,
        question: "What is Carbonio Community Edition?",
        answer:
            "Carbonio Community Edition is the open-source version of the Carbonio digital collaboration suite. It includes essential features like email, calendar, file sharing, and chat — all in one platform, free to use.",
    },
    {
        isActive: false,
        question: " Is Carbonio Community Edition free to use?",
        answer:
            "Yes, it’s 100% free. You can download, install, and run Carbonio Community Edition without paying for a license. It’s perfect for individuals, developers, or small teams who want secure communication tools.",
    },
    {
        isActive: false,
        question: " What features are included in Carbonio Community Edition?",
        answer:
            "It includes core collaboration tools like webmail, calendar, address book, file management, team chat, and mobile sync via ActiveSync. It’s built for productivity and privacy.",
    },
    {
        isActive: false,
        question: "How is Carbonio Community Edition different from the paid version?",
        answer:
            "The Community Edition offers the basics, while the Enterprise Edition includes advanced features like backup, high-availability support, native mobile apps, and professional support services.",
    },
    {
        isActive: false,
        question: "Who should use Carbonio Community Edition?",
        answer:
            "It’s ideal for IT professionals, small businesses, open-source enthusiasts, or anyone looking for a self-hosted alternative to services like Microsoft 365 or Google Workspace.",
    },
    {
        isActive: false,
        question: "Can I use Carbonio Community Edition for my business?",
        answer:
            "Yes, you can. As long as you’re comfortable managing your own server, Carbonio Community Edition works well for small to mid-sized businesses that want full control over their data.",
    },
    {
        isActive: false,
        question: " How do I install Carbonio Community Edition?",
        answer:
            "You can install it on a Linux server (like Ubuntu) using official installation guides from Zextras. It’s a step-by-step process and mostly suited for users with basic server administration knowledge.",
    },
     {
        isActive: false,
        question: " Does Carbonio Community Edition offer mobile access?",
        answer:
            "Yes. You can sync emails, contacts, and calendars with your mobile device using ActiveSync-compatible apps like Outlook or your phone’s default mail client.",
    },
     {
        isActive: false,
        question: " Is Carbonio Community Edition secure?",
        answer:
            "Absolutely. It’s built with strong security features like HTTPS, authentication, and access controls. Since it’s self-hosted, you have full control over your data and privacy settings.",
    },
     {
        isActive: false,
        question: " Where can I download Carbonio Community Edition?",
        answer:
            "You can download it directly from the official Zextras website or Contact sixth star Tech is an Official Authorized Zextras Partner . Just make sure to follow the installation documentation to set it up correctly.",
    },
    
];

const FaqItem = ({ faq, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index;
  const toggleFaq = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div className={`${isOpen ? "" : "mb-4"}`}>
      <a
        href="#!"
        className="btn px-0 py-4 w-full text-start flex justify-between items-center"
        onClick={toggleFaq}
      >
        <span className="font-semibold">{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </a>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        } border-l-2 border-blue-600 pl-4`}
      >
        <p className="opacity-70 py-2">{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func.isRequired,
};



FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

// Main Component
const Faq3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
              <FaqItem
                faq={faq}
                index={i}
                key={`left-${i}`}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="bg-white shadow dark:shadow-none dark:bg-[#1E2735] p-6 rounded-xl">
            {secondColumn.map((faq, i) => (
              <FaqItem
                faq={faq}
                index={i + firstColumn.length}
                key={`right-${i}`}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Faq3;