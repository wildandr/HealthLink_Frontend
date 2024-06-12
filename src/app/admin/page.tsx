"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Helper function to format date and time
const formatDateTime = (dateTimeString: string | number | Date) => {
  const date = new Date(dateTimeString);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return `${formattedDate}, at ${formattedTime}`;
};

interface AuditLog {
  "Affected Records": string;
  "Log Akses": string;
  "Waktu dan Tanggal": string | number | Date;
}

interface BlockchainAccess {
  "Blockchain Hash Code": string;
  Details: string;
  "Waktu dan Tanggal": string | number | Date;
}

export default function DashboardAdmin() {
  const router = useRouter();
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [blockchainAccesses, setBlockchainAccesses] = useState<
    BlockchainAccess[]
  >([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/admin_dashboard`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAuditLogs(data["Audit Logs"]);
        setBlockchainAccesses(data["Blockchain Accesses"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main className="sm:ml-64 bg-white">
        <div className="bg-[#28a99e] h-full px-8 py-12 flex justify-center w-full">
          <div className="w-full flex gap-5 flex-col justify-between rounded-xl bg-white p-10">
            <div className=" flex flex-col text-center">
              <h1 className="text-xl font-semibold text-gray-900 my-2">
                Audit Logs
              </h1>
              <div className="relative overflow-x-auto rounded-xl shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-[#28a99e] uppercase bg-gray-50">
                    <tr className="text-base">
                      <th scope="col" className="px-6 py-3">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Access Log
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Affected Records
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log, index) => (
                      <tr key={index} className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-[#28a99e] whitespace-nowrap"
                        >
                          {formatDateTime(log["Waktu dan Tanggal"])}
                        </th>
                        <td className="px-6 py-4">{log["Log Akses"]}</td>
                        <td className="px-6 py-4">{log["Affected Records"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <h1 className="text-xl font-semibold text-gray-900 my-2">
                Blockchain Access
              </h1>
              <div className="relative overflow-x-auto rounded-xl shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-[#28a99e] uppercase bg-gray-50">
                    <tr className="text-base">
                      <th scope="col" className="px-6 py-3">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Blockchain Hash Code
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {blockchainAccesses.map((access, index) => (
                      <tr key={index} className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-[#28a99e] whitespace-nowrap"
                        >
                          {formatDateTime(access["Waktu dan Tanggal"])}
                        </th>
                        <td className="px-6 py-4">
                          {access["Blockchain Hash Code"]}
                        </td>
                        <td className="px-6 py-4">{access.Details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
