import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-black -z-10" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 -z-10" />
      
      {/* Navbar */}
      <nav className="relative z-10 px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="text-white text-xl font-bold">SendPoint</div>
          <div className="flex gap-8">
            <a href="/team" className="text-white/80 hover:text-white transition font-medium">Team</a>
            <a href="/contact" className="text-white/80 hover:text-white transition font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-32 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              <span className="text-white/90 text-sm">Introducing SendPoint AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Every email becomes <br />
              <span className="text-blue-300">a conversation.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-8 text-white/80 max-w-2xl mx-auto">
              Create AI-powered newsletters that don&apos;t just speak to your audience—they listen 
              and respond, keeping your customers engaged.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-full bg-white px-8 py-3 text-blue-900 font-semibold hover:bg-blue-50 transition">
                Start your journey
              </a>
              <a href="#" className="text-white hover:text-blue-200 font-semibold flex items-center gap-2">
                See it in action <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl -z-10"></div>
      </section>
    </main>
  )
}
