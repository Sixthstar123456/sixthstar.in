import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
    {
        isActive: true,
        question: "What is Carbonio and how can it help in the telecom industry?",
        answer:
            "Carbonio is a secure, self-hosted email and collaboration suite built for enterprise use. For telecom companies, it offers a scalable alternative to traditional communication systems, enhancing data privacy, internal collaboration, and customer service efficiency.",
    },
    {
        isActive: false,
        question: " Can Carbonio integrate with existing telecom infrastructure?",
        answer:
            "Yes, Carbonio can be seamlessly integrated with existing IT and telecom infrastructure using APIs and standard protocols like IMAP, CalDAV, and WebDAV. It’s designed to be flexible for deployment in complex enterprise environments.",
    },
    {
        isActive: false,
        question: " Why should telecom providers choose Carbonio over Google Workspace or Microsoft 365?",
        answer:
            "If you're a telecom provider looking for more data control and lower operating costs, Carbonio is a smart alternative. It gives you full ownership of your data without vendor lock-in, making it perfect for compliance-driven industries like telecommunications.",
    },
    {
        isActive: false,
        question: " Is Carbonio suitable for internal communication within telecom teams?",
        answer:
            "Absolutely! Carbonio comes with email, chat, calendars, file sharing, and task management — everything a telecom company needs for unified team collaboration, especially across multiple branches or regions.",
    },
    {
        isActive: false,
        question: "How secure is Carbonio for telecom companies handling sensitive data?",
        answer:
            "Carbonio offers end-to-end encryption, two-factor authentication, role-based access controls, and the ability to self-host — ensuring that sensitive customer and network data remains protected and compliant with telecom regulations.",
    },
    {
        isActive: false,
        question: " Can I use Carbonio as a white-labeled solution for my telecom clients?",
        answer:
            "Yes, you can! Carbonio Community Edition allows branding customization, so telecom providers can offer it as a white-labeled secure email and collaboration platform to their B2B or enterprise clients.",
    },
    {
        isActive: false,
        question: " Does Carbonio support mobile access for field telecom staff?",
        answer:
            "Yes, Carbonio supports both web and mobile access. Your on-field technicians and sales teams can securely access their emails, calendars, and files anytime, anywhere — all while keeping company data under control.",
    },
     {
        isActive: false,
        question: " How does Carbonio help reduce telecom IT overhead?",
        answer:
            "By consolidating multiple tools (email, chat, storage, calendar) into a single platform and allowing on-premise or private cloud hosting, Carbonio significantly reduces licensing costs, third-party dependencies, and IT complexity.",
    },
     {
        isActive: false,
        question: " Is Carbonio easy to deploy and manage for telecom IT teams?",
        answer:
            "It’s built for IT professionals. Whether you’re deploying on a single server or scaling across data centers, Carbonio’s modular architecture and admin console make management straightforward — even for large telecom networks.",
    },
     {
        isActive: false,
        question: "  Where can I download or get a quote for Carbonio for my telecom company?",
        answer:
            "You can try the Carbonio Community Edition for free or contact the team for an enterprise quote based on your user volume and hosting preferences. Head over to the official Carbonio website or fill out the contact form to get started.",
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
const Faq5 = () => {
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


export default Faq5;