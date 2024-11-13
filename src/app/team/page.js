import Link from 'next/link';
import Image from 'next/image';

const LinkedInIcon = () => (
  <svg 
    className="w-5 h-5" 
    fill="currentColor" 
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const teamMembers = [
  {
    name: "Max Abouchar",
    role: "Founder and CEO/CTO",
    linkedin: "https://linkedin.com/in/maxabouchar",
    description: "Max is a serial AI builder and entrepreneur with a passion for products that solve real-world problems.",
    image: "/team/max-abouchar.jpg"
  },
  {
    name: "Eloise Dupont",
    role: "Founder and CMO",
    linkedin: "https://www.linkedin.com/in/eloise-dupont-lmsw-cc-824b2113b/",
    description: "Eloise is a marketing and communications leader with a passion for building brands and growing businesses.",
    image: "/team/eloise-dupont.jpg"
  },
  {
    name: "Charles Dupont",
    role: "Founder and COO",
    linkedin: "https://www.linkedin.com/in/charles-dupont-8b0233101/",
    description: "As an entrepreneur, Charles loves building communities and partnerships to scale companies.",
    image: "/team/charles-dupont.jpg"
  }
];

export default function Team() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-black -z-10" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 -z-10" />

      <nav className="relative z-10 px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">SendPoint</Link>
          <div className="flex gap-8">
            <Link href="/team" className="text-white transition font-medium">Team</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Team</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition w-full max-w-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-300 mb-4">{member.role}</p>
                  <p className="text-white/80 mb-4">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 p-2 rounded-full hover:bg-white/5 transition"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 