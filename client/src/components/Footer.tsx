export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              We are a team dedicated to providing the best content and
              resources. Follow us to stay updated.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-violet-500 transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56v15.09c0 2.54-2.06 4.6-4.6 4.6H4.6C2.06 24 0 21.94 0 19.5V4.6C0 2.06 2.06 0 4.6 0h14.8C21.94 0 24 2.06 24 4.56zM9.54 20.11h4.92V11h3.3l.44-3.4h-3.74V5.8c0-.98.27-1.66 1.66-1.66h2.08V1.2c-.36-.05-1.61-.16-3.07-.16-3.05 0-5.14 1.86-5.14 5.28v2.94H6.24V11h3.3v9.11z" />
                </svg>
              </a>
              <a href="#" className="hover:text-violet-500 transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.6 0H2.4C1.07 0 0 1.07 0 2.4v19.2C0 22.93 1.07 24 2.4 24h19.2c1.33 0 2.4-1.07 2.4-2.4V2.4C24 1.07 22.93 0 21.6 0zM7.2 19.2H3.6v-9.6h3.6v9.6zM5.4 8.16A2.16 2.16 0 113.24 6a2.16 2.16 0 012.16 2.16zM20.4 19.2h-3.6v-4.8c0-1.2-.48-2.4-2.16-2.4-1.2 0-1.92.84-2.16 1.68-.12.24-.12.6-.12.96v4.56h-3.6v-9.6h3.6v1.2c.48-.96 1.56-1.92 3.36-1.92 2.4 0 4.08 1.56 4.08 4.8v5.52z" />
                </svg>
              </a>
              <a href="#" className="hover:text-violet-500 transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .29A11.76 11.76 0 000 12a11.76 11.76 0 0012 11.71A11.76 11.76 0 0024 12 11.76 11.76 0 0012 .29zm5.7 8.89c0 .1 0 .2-.01.3a8.14 8.14 0 01-8.18 8.18 8.14 8.14 0 01-4.41-1.3c.19.02.38.03.58.03a5.76 5.76 0 003.57-1.23 2.88 2.88 0 01-2.69-2 .57.57 0 00.54-.01 2.87 2.87 0 01-2.3-2.82v-.03c.39.22.84.35 1.32.37a2.87 2.87 0 01-.89-3.83 8.15 8.15 0 005.92 3 3.24 3.24 0 01-.07-.66 2.87 2.87 0 015.01-1.96 5.66 5.66 0 001.82-.7 2.86 2.86 0 01-1.26 1.58 5.73 5.73 0 001.64-.43 5.88 5.88 0 01-1.43 1.49z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
