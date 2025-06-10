export const HomePage=()=>{
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          This is the main content area. The sidebar on the left is responsive. On large screens, it's always visible. On smaller screens, you can toggle it using the menu icon in the header. This entire layout is built with React and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Card One</h2>
                <p className="text-gray-500 text-center">Some content for the first card to demonstrate the layout.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Card Two</h2>
                <p className="text-gray-500 text-center">Some content for the second card.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex flex-col justify-center items-center sm:col-span-2">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Full Width Card</h2>
                <p className="text-gray-500 text-center">This card spans both columns on larger screens.</p>
            </div>
        </div>
      </div>
    </main>
  );
}
