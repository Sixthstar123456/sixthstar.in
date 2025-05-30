import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
	{
		isActive: true,
		question: "What is Carbonio Community Edition?",
		answer:
			"Carbonio Community Edition is an open-source email and collaboration suite designed for organizations seeking a self-hosted, secure, and privacy-respecting alternative to cloud-based platforms. It includes email, calendars, video meetings, file sharing, and more.",
	},
	{
		isActive: false,
		question: "Is Carbonio Community Edition free to use?",
		answer:
			"Yes, Carbonio Community Edition is completely free and open-source. It’s ideal for developers, small teams, and organizations that prefer full control over their collaboration tools without licensing fees.",
	},
	{
		isActive: false,
		question: "What are the system requirements for Carbonio Community Edition?",
		answer:
			"To run Carbonio Community Edition, you'll need a modern Linux server, a minimum of 4 CPU cores, 8GB RAM, 100GB storage, and a stable internet connection. Requirements may vary depending on the number of users.",
	},
	{
		isActive: false,
		question: "What features are included in Carbonio Community Edition?",
		answer:
			"Carbonio Community Edition offers email, calendar and events management, video meetings, team chat, file sharing, and mobile sync. It’s built to support productivity and collaboration—all on your own infrastructure.",
	},
	{
		isActive: false,
		question: "How do I install Carbonio Community Edition on Linux?",
		answer:
			"You can install Carbonio Community Edition on Linux using its official installation guide, which supports distributions like Ubuntu and RHEL. The process typically includes configuring packages, mail server, DNS settings, and SSL certificates.",
	},
	{
		isActive: false,
		question: "What are the system requirements for Carbonio Community Edition?",
		answer:
			"To run Carbonio Community Edition, you'll need a modern Linux server, a minimum of 4 CPU cores, 8GB RAM, 100GB storage, and a stable internet connection. Requirements may vary depending on the number of users.",
	},
	{
		isActive: false,
		question: "Can I host Carbonio Community Edition on a VPS or cloud server?",
		answer:
			"Yes, Carbonio Community Edition can be hosted on any VPS or cloud provider that meets the minimum requirements, giving you full control over deployment, data security, and scalability.",
	},
	{
		isActive: false,
		question: "Does Carbonio Community Edition support mobile and desktop sync?",
		answer:
			"Yes, Carbonio supports mobile synchronization via ActiveSync and desktop access via IMAP/SMTP for email and CalDAV/CardDAV for calendar and contacts, ensuring smooth integration with most devices.",
	},
	{
		isActive: false,
		question: "Can I host Carbonio Community Edition on a VPS or cloud server?",
		answer:
			"Yes, Carbonio Community Edition can be hosted on any VPS or cloud provider that meets the minimum requirements, giving you full control over deployment, data security, and scalability.",
	},
	{
		isActive: false,
		question: "Is Carbonio Community Edition secure?",
		answer:
			"Absolutely. Carbonio is built with enterprise-grade security, including encrypted connections (SSL/TLS), anti-spam, anti-virus tools, and role-based access controls to protect your data.",
	},
	{
		isActive: false,
		question: "What is the difference between Carbonio Community and Carbonio CE+ or Pro editions?",
		answer:
			"The Community Edition is open-source and free, while CE+ and Pro editions offer additional enterprise features, premium support, advanced backup, multi-tenancy, and integration with third-party tools.",
	},
	{
		isActive: false,
		question: "Where can I get support for Carbonio Community Edition?",
		answer:
			"Community support is available via official forums, GitHub issues, and documentation. For professional or enterprise support, you can upgrade to Carbonio CE+ or contact Zextras directly.",
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
const HomeFaq = () => {
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


export default HomeFaq;