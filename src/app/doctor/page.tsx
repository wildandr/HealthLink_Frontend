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

export default function DashboardDoctor() {
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/doctor_dashboard`,
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
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDoctorRecord = () => {
    router.push("/doctor/record");
  };

  return (
    <div>
      <main className="h-[92vh] sm:ml-64 bg-white">
        <div className="bg-[#28a99e] h-full px-8 py-12 flex justify-center w-full">
          <div className="w-full flex flex-col justify-between rounded-xl bg-white p-10">
            <div className="relative overflow-x-auto rounded-xl shadow-md">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-[#28a99e] uppercase bg-gray-50">
                  <tr className="text-base">
                    <th scope="col" className="px-6 py-3">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Appointment
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date & Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={index} className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-[#28a99e] whitespace-nowrap"
                      >
                        {appointment["Nama Pasien"]}
                      </th>
                      <td className="px-6 py-4">
                        {appointment["Status Janji"]}
                      </td>
                      <td className="px-6 py-4">
                        {formatDateTime(appointment["Waktu Janji"])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full flex justify-end mt-5">
              <button
                type="submit"
                onClick={handleDoctorRecord}
                className="text-white max-w-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Record
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
