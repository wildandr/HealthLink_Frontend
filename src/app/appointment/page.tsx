export default function Appointment() {
  return (
    <main className="sm:ml-64 bg-[#28a99e] h-[100vh]">
      <div className="  px-8 py-12 ">
        <div className="w-full max-w-full rounded-xl bg-white ">
          <form className="p-5">
            <div className="mb-5">
              <label
          
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
                Nama Pasien
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="mb-5">
              <label
            
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
               Keterangan
              </label>
              <input
                type="text"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
      
             
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
