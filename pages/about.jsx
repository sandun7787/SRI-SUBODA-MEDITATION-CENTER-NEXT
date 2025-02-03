import Navbar from '../components/Nav/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-10">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">About Us</h1>
          <p className="text-gray-700">
            This is the About page of our Next.js application. We have used
            Tailwind CSS for styling and created reusable components for an efficient
            and scalable project.
          </p>
        </div>
      </main>
    </div>
  );
}
