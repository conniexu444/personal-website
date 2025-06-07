// src/pages/Contact.tsx

export default function Contact() {
    return (
      <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-[var(--font-display)] mb-6">Contact Us</h1>
  
          <p className="mb-6 text-lg">
            Want to collaborate, host us, or just say hi? We'd love to hear from you.
          </p>
  
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
  
            <button
              type="submit"
              className="bg-[var(--color-link)] text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    );
  }
  