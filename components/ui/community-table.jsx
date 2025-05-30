import { motion } from "framer-motion";

const data = [
  {
    feature: "Email & Calendar",
    carbonio: "Integrated, enterprise-grade",
    zimbra: "Basic functionality",
  },
  {
    feature: "File Sharing & Storage",
    carbonio: "Built-in file management & sharing",
    zimbra: "Requires third-party integration",
  },
  {
    feature: "Team Collaboration Tools",
    carbonio: "Includes real-time chat, video calls & tasks",
    zimbra: "Limited or unavailable",
  },
  {
    feature: "Mobile & Web Access",
    carbonio: "Modern UI, responsive on all devices",
    zimbra: (
      <>
        Outdated UI on{" "}
        <a
          href="https://www.zimbra.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          open-source version
        </a>
      </>
    ),
  },
  {
    feature: "Security & Data Control",
    carbonio: "Fully self-hosted, GDPR-ready",
    zimbra: "Self-hosted, fewer built-in compliance tools",
  },
  {
    feature: "Admin Dashboard",
    carbonio: "Centralized admin control with real-time insights",
    zimbra: "Basic admin features",
  },
  {
    feature: "Scalability for Enterprises",
    carbonio: "Built for large-scale deployment",
    zimbra: "More suitable for small to mid-sized businesses",
  },
  {
    feature: "Open Source",
    carbonio: "100% open source, active community",
    zimbra: "Open-source core, with fewer updates",
  },
];

const TableComparison = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto mt-12 p-6 sm:p-8 shadow-2xl rounded-2xl bg-white border border-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 leading-snug">
        Carbonio Community Edition vs. Zimbra: Feature Comparison for Enterprises
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full table-auto text-base rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-6 py-4 font-semibold">Feature</th>
              <th className="px-6 py-4 font-semibold">Carbonio Community Edition</th>
              <th className="px-6 py-4 font-semibold">Zimbra (Open-Source Edition)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-5 font-medium align-top">{row.feature}</td>
                <td className="px-6 py-5 align-top">{row.carbonio}</td>
                <td className="px-6 py-5 align-top">{row.zimbra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards */}
      <div className="block md:hidden space-y-6">
        {data.map((row, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-4 bg-gray-50 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-gray-800 mb-2">{row.feature}</h3>
            <div className="text-sm mb-1">
              <span className="font-bold text-green-600">Carbonio: </span>
              <span>{row.carbonio}</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-red-600">Zimbra: </span>
              <span>{row.zimbra}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TableComparison;
