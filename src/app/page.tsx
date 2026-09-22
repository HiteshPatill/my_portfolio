export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32 text-[1.05rem] leading-7">
      <section className="mb-12 animate-fade-in-up">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl sm:text-3xl font-semibold">Hey, I&apos;m Hitesh Patil — Embedded Systems Developer</h1>
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
          Skilled in C/C++, Data Structures, UART, SPI, I2C, and CAN, with practical experience in Linux Device Drivers and embedded project development.
        </p>
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "C",
              "C++",
              "Embedded C",
              "Linux (Ubuntu)",
              "Windows",
              "Linux System Programming",
              "Device Drivers",
              "Memory Management",
              "Interrupts",
              "Timers",
              "PWM",
              "ADC",
              "RTC",
              "System Calls",
              "Processes",
              "Multi-Threading",
              "IPC",
              "CPU Scheduling",
              "File Management",
              "File Descriptors",
              "Pipes",
              "Shared Memory",
              "Semaphores",
              "Mutex",
              "TCP",
              "UDP",
              "Sockets",
              "Network Programming",
              "GPIO",
              "SPI",
              "I2C",
              "UART",
              "CAN",
              "USB",
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
              "Kernel Log Analysis",
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
                <li>Training in Embedded Systems with focus on low-level programming, debugging, and system development.</li>
                <li>Hands-on experience in C, C++, Data Structures, Linux System Programming, PIC18F4580 programming, interrupts, timers, UART, SPI, and I2C.</li>
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
              description: 'Developed an automotive dashboard system using three PIC18F4580-based ECUs communicating over the CAN protocol. Implemented ADC to acquire vehicle speed and engine RPM using potentiometers, while a digital keypad was used for gear selection and turn indicator control. Designed a Master ECU to receive CAN messages from both ECUs and display real-time vehicle information on a CLCD. Used UART with Tera Term for debugging and validating CAN communication between the ECUs.',
              link: 'https://github.com/HiteshPatill/car_dashboard_simulation',
            },
            {
              title: 'Car Black Box',
              tech: 'Embedded C, PIC18F4580, I2C, UART, ADC, EEPROM, DS1307 RTC',
              description: 'Developed an embedded vehicle event logging system using PIC18F4580 to monitor and record vehicle information such as speed, gear, and time. Implemented event storage with timestamps in EEPROM using I2C and DS1307 RTC. Added View Log, Download Log, Clear Log, and Set Time features using a matrix keypad and CLCD. Used UART with Tera Term to download and view stored logs.',
              link: 'https://github.com/HiteshPatill/Car-Black-Box',
            },
            {
              title: 'USB Device Driver for Linux Kernel',
              tech: 'C, Linux Kernel, Makefile, dmesg, printk',
              description: 'Developed a custom USB device driver as a Loadable Kernel Module (LKM) for Linux. Implemented USB device detection using Vendor ID and Product ID, handled probe/disconnect events, and explored character driver operations with kernel logging using printk and dmesg. Gained hands-on experience in USB device detection and Linux kernel driver development.',
              link: 'https://github.com/HiteshPatill/usb_driver',
            },
            {
              title: 'Linux Mini Shell',
              tech: 'C, Linux System Programming, System Calls, Signals, Pipes, Process Management',
              description: 'Developed a Linux command-line shell in C supporting built-in and external command execution. Implemented process creation and management using fork() and waitpid(). Added signal handling, pipes, background process handling, process tracking, and command parsing. Gained hands-on experience with Linux system calls, process management, file descriptors, and IPC concepts.',
              link: 'https://github.com/HiteshPatill/Linux-Mini-Shell',
            },
            {
              title: 'Steganography',
              tech: 'C, File Handling, Bit Manipulation',
              description: 'Implemented message encoding and decoding inside image files using bit-level manipulation and file operations. The project focused on secure data hiding, file integrity, and understanding how data can be stored in binary formats.',
              link: 'https://github.com/HiteshPatill/steganography',
            },
            {
              title: 'Inverted Search',
              tech: 'C, Hashing, Linked Lists, Data Structures',
              description: 'Created a file indexing system that stored words with their file locations using hashing and linked lists. It improved my understanding of search optimization, memory handling, and efficient data organization in C.',
              link: 'https://github.com/HiteshPatill/Inverted_Search',
            },
            {
              title: 'Arbitrary Precision Calculator (APC)',
              tech: 'C, Linked Lists, Dynamic Memory Allocation',
              description: 'Built a large-number calculator using dynamic memory and linked-list-based arithmetic operations. The project involved addition, subtraction, multiplication, and division for very large integer values, reinforcing core programming and memory-management concepts.',
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
          <li><span className="font-medium">North Maharashtra University</span> · 2024 · B.E. in Mechanical Engineering · 75.38%</li>
          <li><span className="font-medium">Maharashtra State Board</span> · 2021 · Diploma in Mechanical Engineering · 76.00%</li>
        </ul>
      </section>
    </main>
  );
}
