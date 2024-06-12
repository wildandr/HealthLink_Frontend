"use client";
import { useState } from "react";

export default function Record() {
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [record, setRecord] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const data = {
      patient_id: Number(patientId),
      doctor_id: Number(doctorId),
      record_details: record,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/patient_records`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      setAlertMessage("Record added successfully");
      setIsSuccess(true);

      // Clear the form inputs after successful submission
      setDoctorId("");
      setPatientId("");
      setRecord("");
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Failed to add record");
      setIsSuccess(false);
    }
  };

  return (
    <main className="sm:ml-64 bg-[#28a99e] h-[100vh]">
      <div className="px-8 py-12">
        <div className="w-full max-w-full rounded-xl bg-white">
          <form className="p-5" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Doctor ID
              </label>
              <input
                type="text"
                id="doctor_id"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Patient ID
              </label>
              <input
                type="text"
                id="patient_id"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Record
              </label>
              <input
                type="text"
                id="record"
                value={record}
                onChange={(e) => setRecord(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Record
              </button>
            </div>
          </form>
          {alertMessage && (
            <div
              className={`mt-5 p-4 text-sm ${
                isSuccess
                  ? "text-green-800 bg-green-100"
                  : "text-red-800 bg-red-100"
              } rounded-lg`}
              role="alert"
            >
              {alertMessage}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
