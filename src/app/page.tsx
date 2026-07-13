export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32 text-[1.05rem] leading-7">
      <section className="mb-12 animate-fade-in-up">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl sm:text-3xl font-semibold">Hey I&apos;m Hitesh Patil An Embedded Systems Developer</h1>
          <div className="flex flex-wrap gap-3 text-[0.95rem] text-gray-600 dark:text-gray-300">
            <a href="mailto:hiteshpatil4000@gmail.com" className="hover:text-gray-900 dark:hover:text-white">hiteshpatil4000@gmail.com</a>
            <span className="text-gray-400">|</span>
            <a href="tel:+919921134796" className="hover:text-gray-900 dark:hover:text-white">+91 9921134796</a>
            <span className="text-gray-400">|</span>
            <a href="https://github.com/HiteshPatill" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="https://www.linkedin.com/in/hitesh-patil-25hp/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">LinkedIn</a>
          </div>
        </div>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Embedded Systems Trainee with hands-on experience in Embedded C, Linux System Programming, and Bare Metal Programming. 
          Skilled in C/C++, Data Structures, UART, SPI, I2C and CAN with practical experience in Linux Device Drivers and Embedded Projects. 
        </p>
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "C",
              "C++",
              "Python (Basic)",
              "Embedded C",
              "Linux System Programming",
              "Device Drivers",
              "Interrupts",
              "Timers",
              "PWM",
              "ADC", 
              "UART",
              "SPI",
              "I2C",
              "CAN",
              "PIC18F4580",
              "STM32 Blue Pill",
              "VS Code",
              "MPLAB X IDE",
              "STM32CubeIDE",
              "GCC",
              "Git",
              "GitHub",
              "Makefiles",
              "dmesg",
              "printk",
            ].map((skill) => (
              <span key={skill} className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '50ms', animationFillMode: 'both' }}>
        <h2 className="text-xl font-semibold mb-6">Experience</h2>

        <div className="flex flex-col gap-0 mb-10">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-100 mt-[6px] shrink-0 ring-4 ring-white dark:ring-black"></div>
              <div className="w-px flex-1 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700 mt-1"></div>
            </div>
            <div className="pb-8">
              <p className="text-[0.82rem] text-gray-400 dark:text-gray-500 mb-1 tracking-wide uppercase">Nov 2025 — Present</p>
              <p className="font-semibold leading-snug">Embedded Systems Trainee</p>
              <p className="text-gray-500 dark:text-gray-400 text-[0.95rem]">Emertxe Information Technologies · Bengaluru, Karnataka, India</p>
              <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Training in Embedded Systems with emphasis on low-level programming and system development.</li>
                <li>Hands-on work in C, C++, Data Structures, Linux System Programming, PIC18F4580 programming, debugging, interrupts, timers, UART, SPI, and I2C.</li>
                <li>Developed projects including a USB Device Driver, MP3 Tag Reader, Steganography, Inverted Search, and Address Book.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-100 mt-[6px] shrink-0 ring-4 ring-white dark:ring-black"></div>
            </div>
            <div className="pb-2">
              <p className="text-[0.82rem] text-gray-400 dark:text-gray-500 mb-1 tracking-wide uppercase">Feb 2024 — Mar 2025</p>
              <p className="font-semibold leading-snug">Flutter Developer Intern</p>
              <p className="text-gray-500 dark:text-gray-400 text-[0.95rem]">MR Network Web Solution · Pune, Maharashtra, India</p>
              <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Contributed to Android application development using Flutter.</li>
                <li>Collaborated on feature implementation, API integration, testing, and bug fixing.</li>
                <li>Worked on projects including Shetimitra, an E-Commerce Platform, and a Billing System.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
        <h2 className="text-xl font-semibold mb-6">Projects</h2>

        <div className="space-y-6">
          {[
            {
              title: 'Car Dashboard Simulation Using CAN Bus',
              tech: 'Embedded C, PIC18F4580, CAN, UART, ADC, CLCD, Digital Keypad',
              description: 'Developed a distributed automotive dashboard system using three PIC18F4580-based ECUs communicating over the CAN protocol. Implemented ADC to acquire vehicle speed and engine RPM using potentiometers, while a digital keypad was used for gear selection and turn indicator control. Designed a Master ECU to receive CAN messages from both ECUs and display real-time vehicle information on a CLCD. Used UART with Tera Term for debugging and validating CAN communication between the ECUs.',
              link: 'https://github.com/HiteshPatill/car_dashboard_simulation',
            },
            {
              title: 'USB Device Driver for Linux Kernel',
              tech: 'C, Linux Kernel, Makefile, dmesg, printk',
              description: 'Built a Loadable Kernel Module to detect USB devices by Vendor ID/Product ID, manage probe/disconnect events, and log driver actions with printk for kernel debugging. Designed a character driver interface to expose USB status to userspace and handle device communication. Gained practical experience writing Makefiles, handling kernel memory, and debugging with dmesg.',
              link: 'https://github.com/HiteshPatill/usb_driver',
            },
            {
              title: 'Steganography',
              tech: 'C, File Handling, Bit Manipulation',
              description: 'Implemented message encoding and decoding inside image files using bit-level manipulation and binary file operations to hide and retrieve secret payloads. Added support for variable-length message embedding while preserving image integrity. Strengthened understanding of low-level data representation, buffer handling, and secure encoding techniques.',
              link: 'https://github.com/HiteshPatill/steganography',
            },
            {
              title: 'Inverted Search',
              tech: 'C, Hashing, Linked Lists, File Handling, Data Structures',
              description: 'Developed a text search engine that indexes words across multiple files using hashing and linked lists for fast lookup and file tracking. Implemented word normalization, collision handling, and file position mapping to return accurate search results. Built tools for parsing file input and maintaining dynamic indices in memory-efficient structures.',
              link: 'https://github.com/HiteshPatill/Inverted_Search',
            },
            {
              title: 'Arbitrary Precision Calculator (APC)',
              tech: 'C, Linked Lists, Dynamic Memory Allocation',
              description: 'Created a console calculator that performs arithmetic on very large integers using doubly linked lists and dynamic memory management. Implemented addition, subtraction, multiplication, and division with input validation and overflow-safe handling. Learned to manage node allocation, deallocation, and performance tradeoffs in pure C code.',
              link: 'https://github.com/HiteshPatill/APC',
            },
          ].map((project) => (
            <article key={project.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <p className="font-semibold text-lg">{project.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{project.tech}</p>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm">
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8 animate-fade-in-up" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li><span className="font-medium">North Maharashtra University</span> · 2024 · B.E. Mechanical Engineering · 75.38%</li>
          <li><span className="font-medium">Maharashtra State Board</span> · 2021 · Diploma in Mechanical · 76.00%</li>
        </ul>
      </section>
    </main>
  );
}
