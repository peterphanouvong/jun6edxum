export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col">
      <header className="py-6 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">TaskNest</h1>
          {/* The login and register links remain in layout.tsx per instruction */}
        </div>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center px-4">
        <section className="text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Welcome to TaskNest</h2>
          <p className="text-lg text-gray-700 mb-8">
            Your personal todo list app to organize tasks effortlessly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Create Tasks</h3>
              <p className="text-gray-600">
                Quickly add tasks with due dates and descriptions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Organize</h3>
              <p className="text-gray-600">
                Categorize and prioritize your tasks to stay focused.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Mark tasks as done and track your productivity over time.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Sign in or sign up to get started!
          </p>
        </section>
      </main>
      <footer className="py-6 bg-white text-center text-gray-500 text-sm">
        &copy; 2024 TaskNest. All rights reserved.
      </footer>
    </div>
  );
}
