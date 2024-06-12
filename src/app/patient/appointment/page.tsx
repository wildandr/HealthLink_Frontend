"use client";
import { useState } from "react";

export default function Appointment() {
  const [patientName, setPatientName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const appointmentData = {
      patient_id: 1, // This should be dynamically set based on actual data
      doctor_id: parseInt(doctorId),
      appointment_time: `${appointmentDate} ${appointmentTime}`,
      status: "Scheduled",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/appointments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Appointment created successfully:", data);
      // Handle success (e.g., display a success message or redirect)
    } catch (error) {
      console.error("Error creating appointment:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <main className="sm:ml-64 bg-[#28a99e] h-[100vh]">
      <div className="px-8 py-12">
        <div className="w-full max-w-full rounded-xl bg-white">
          <form className="p-5" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="nama_pasien"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Nama Pasien
              </label>
              <input
                type="text"
                id="nama_pasien"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="doctor_id"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Doctor ID
              </label>
              <input
                type="number"
                id="doctor_id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="tanggal"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Hari & Tanggal
              </label>
              <input
                type="date"
                id="tanggal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="waktu"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Waktu
              </label>
              <input
                type="time"
                id="waktu"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
