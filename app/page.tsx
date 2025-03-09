import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Assisant</h1>
          <p className="text-xl mb-8">Your AI powered Senior Devoloper</p>
            <a href="/assisant" className="bg-white text-blue-600 py-2 px-4 rounded-full font-semibold">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Senior Devoloper</h3>
                <p className="text-gray-700">Your Senior Devoloper</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Point You wanted</h3>
                <p className="text-gray-700">Concise Point</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get Started Today</h2>
          <p className="text-xl mb-8">Join us and start your journey with our amazing solutions.</p>
          <a href="#contact" className="bg-white text-blue-600 py-2 px-4 rounded-full font-semibold">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
