import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
    {
        isActive: true,
        question: "What is Carbonio and how does it support high availability?",
        answer:
            "Carbonio is a modern email and collaboration platform that supports high availability through data replication, clustering, and failover mechanisms to ensure minimal downtime and uninterrupted service.",
    },
    {
        isActive: false,
        question: "How does Carbonio handle server failures in a high-availability setup?",
        answer:
            "If a server fails, Carbonio’s high-availability configuration automatically shifts the workload to another healthy node, ensuring that users continue to access services without interruption.",
    },
    {
        isActive: false,
        question: "Can I set up Carbonio in a clustered environment for high availability?",
        answer:
            "Yes, Carbonio fully supports clustered deployment. You can configure multiple nodes to work together, which helps in load balancing and offers redundancy in case of a node failure.",
    },
    {
        isActive: false,
        question: "Does Carbonio require special hardware for high availability?",
        answer:
            "Not necessarily. Carbonio is flexible and can run on standard servers. However, for high availability, you’ll need a proper cluster setup with replicated storage and redundant network paths.",
    },
    {
        isActive: false,
        question: "How do I configure Carbonio for high availability?",
        answer:
            "You can configure Carbonio for high availability by setting up multiple application nodes, using a load balancer, and implementing storage and database replication across servers.",
    },
    {
        isActive: false,
        question: "Is Carbonio a better choice than Zimbra for high availability?",
        answer:
            "Many users find Carbonio to be a modern, open-source alternative to Zimbra, with more scalable architecture and native support for high-availability features like clustering and failover.",
    },
    {
        isActive: false,
        question: "Can Carbonio ensure email service continuity during maintenance or outages?",
        answer:
            "Absolutely. With a proper high-availability setup, Carbonio continues to serve emails and collaboration tools even during scheduled maintenance or unexpected outages.",
    },
    {
        isActive: false,
        question: "What are the benefits of using Carbonio in a high-availability infrastructure?",
        answer:
            "What are the benefits of using Carbonio in a high-availability infrastructure?",
    },
    {
        isActive: false,
        question: "How much does it cost to implement Carbonio with high availability?",
        answer:
            "The cost depends on your infrastructure size and deployment model, but since Carbonio is open-source, it’s typically more cost-effective than proprietary solutions.",
    },
     {
        isActive: false,
        question: "Is Carbonio suitable for enterprise-level high availability requirements?",
        answer:
            "Yes, Carbonio is designed to scale and can meet enterprise-level needs with support for clustering, redundancy, and seamless failover capabilities.",
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
const Faq4 = () => {
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


export default Faq4;