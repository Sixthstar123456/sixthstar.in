'use client'
import { FaUsers, FaCheckCircle, FaClock, FaSyncAlt, FaShieldAlt, FaBullseye } from 'react-icons/fa'

const points = [
  {
    icon: <FaUsers className="text-blue-500 w-6 h-6" />,
    title: "Committed Teamwork",
    desc: (
      <div className="text-gray-700 leading-relaxed">
        <p>
          We have a solid team and an efficient working environment, which guarantee:
        </p>
        <ul className="list-disc list-inside mt-2 ml-5 space-y-1">
          <li>Quality outcome</li>
          <li>Expanding and profitable</li>
          <li>Shortened time</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <FaCheckCircle className="text-blue-500 w-6 h-6" />,
    title: "Effectiveness and Efficiency",
    desc: (
      <div className="text-gray-700 leading-relaxed">
        Efficiency, in our opinion, is doing the correct thing by comprehending the needs of the client. Our knowledgeable staff delivers the intended execution without wasting time or money. To meet our goals in a specific amount of time, business ethics and efficiency are crucial.
      </div>
    ),
  },
  {
    icon: <FaClock className="text-blue-500 w-6 h-6" />,
    title: "Prompt Delivery",
    desc: (
      <div className="text-gray-700 leading-relaxed">
        Utilising the most recent IT technologies, our organisation delivers its services to each client on time. We are able to complete our task ahead of schedule for our clients.
      </div>
    ),
  },
  {
    icon: <FaSyncAlt className="text-blue-500 w-6 h-6" />,
    title: "Flexibility",
    desc: (
      <div className="text-gray-700 leading-relaxed">
        <p>
          Flexibility is a key concept in our workplace; it refers to the ability for each person to modify when, where, and how they work in order to accommodate the demands of the company and its clients.
        </p>
        <ul className="list-disc list-inside mt-2 ml-5 space-y-1">
          <li>Operational adaptability</li>
          <li>Products’ adaptability</li>
          <li>Process flexibility</li>
          <li>Program flexibility</li>
          <li>Production flexibility</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <FaShieldAlt className="text-blue-500 w-6 h-6" />,
    title: "Reliability",
    desc: (
      <div className="text-gray-700 leading-relaxed">
        By accurately and honestly attaining our goal, we as a team constantly perform effectively. Customers trust and give us positive ratings based on the services we deliver. The dependability is attained via Precision, Security, and Authenticity.
      </div>
    ),
  },
  {
    icon: <FaBullseye className="text-blue-500 w-6 h-6" />,
    title: "Accountability",
    desc: (
      <div className="text-gray-700 leading-relaxed">
        In our solutions, it is the individual obligation of every employee to do the tasks they have been given in order to meet the organisational objective. Our objective is to submit the goods to the appropriate clients in good condition and deliver them on schedule.
      </div>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Why Choose Us
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 leading-relaxed">
          It’s our obligation to make your company appear opulent by utilising cutting-edge IT technology with a positive return on investment.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {points.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">{icon}</div>
                <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
              </div>
              {desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
