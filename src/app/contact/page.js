import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient (matching home page) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-black -z-10" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 -z-10" />

      {/* Updated Navbar */}
      <nav className="relative z-10 px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">SendPoint</Link>
          <div className="flex gap-8">
            <Link href="/team" className="text-white/80 hover:text-white transition font-medium">Team</Link>
            <Link href="/contact" className="text-white transition font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="relative px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Contact Us</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <div className="space-y-6 text-white/80">
              <p>
                We&apos;d love to hear from you! Here&apos;s how you can reach us:
              </p>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p>notarealemail@sendpoint.ai</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Office Location</h3>
                <p>123 AI Avenue<br />
                San Francisco, CA 94105<br />
                United States</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Social Media</h3>
                <div className="space-y-2">
                  <p>
                    <a href="https://twitter.com/sendpoint" className="text-blue-300 hover:text-blue-200">
                      Twitter: @sendpoint
                    </a>
                  </p>
                  <p>
                    <a href="https://linkedin.com/company/sendpoint" className="text-blue-300 hover:text-blue-200">
                      LinkedIn: SendPoint
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 