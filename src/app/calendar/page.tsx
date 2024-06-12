"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
export default function Scan() {
 
   const router = useRouter();
   const handleScanButtonClick = () => {
     router.push("/appointment");
   };
 
  return (
    <main className="sm:ml-64 bg-[#28a99e] h-[100vh]">
      <div className="  px-8 py-12 ">
      
        <div className="w-full max-w-full rounded-xl bg-white mt-10">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-blue-800">
                <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Sunday </span>
                  <span className="block lg:hidden"> Sun </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Monday </span>
                  <span className="block lg:hidden"> Mon </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Tuesday </span>
                  <span className="block lg:hidden"> Tue </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Wednesday </span>
                  <span className="block lg:hidden"> Wed </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Thursday </span>
                  <span className="block lg:hidden"> Thur </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Friday </span>
                  <span className="block lg:hidden"> Fri </span>
                </th>
                <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Saturday </span>
                  <span className="block lg:hidden"> Sat </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Line 1 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke px-2  transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25  xl:h-31">
                  <span className="font-medium text-blue-800">1</span>
                  <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                    <span className="group-hover:text-primary md:hidden">
                      More
                    </span>
                    <div className="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-[#] md:visible md:w-[190%] md:opacity-100">
                      <span className="event-name text-sm font-semibold text-blue-800">
                        Medical Checkup
                      </span>
                      <span className="time text-sm font-medium text-blue-800">
                        Dr. Wildan Dzaky
                      </span>
                    </div>
                  </div>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    2
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    3
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    4
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    5
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    6
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    7
                  </span>
                </td>
              </tr>
              {/* <!-- Line 1 --> */}
              {/* <!-- Line 2 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    8
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    9
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    10
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    11
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    12
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    13
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    14
                  </span>
                </td>
              </tr>
              {/* <!-- Line 2 --> */}
              {/* <!-- Line 3 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    15
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    16
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    17
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    18
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    19
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    20
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    21
                  </span>
                </td>
              </tr>
              {/* <!-- Line 3 --> */}
              {/* <!-- Line 4 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    22
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    23
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    24
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke px-2  transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25  xl:h-31">
                  <span className="font-medium text-blue-800">25</span>
                  <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                    <span className="group-hover:text-primary md:hidden">
                      More
                    </span>
                    <div className="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-[#] md:visible md:w-[190%] md:opacity-100">
                      <span className="event-name text-sm font-semibold text-blue-800">
                        Appointment
                      </span>
                      <span className="time text-sm font-medium text-blue-800">
                        Dr. Nawal Rizky
                      </span>
                    </div>
                  </div>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    26
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    27
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    28
                  </span>
                </td>
              </tr>
              {/* <!-- Line 4 --> */}
              {/* <!-- Line 5 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 rounded-bl-xl cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    29
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    30
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    31
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    1
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    2
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    3
                  </span>
                </td>
                <td className="ease relative h-20 rounded-br-xl cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-blue-800 dark:text-blue-800">
                    4
                  </span>
                </td>
              </tr>
              {/* <!-- Line 5 --> */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
