export type LegacyPageKey =
  | 'home'
  | 'nexivus-pos-backend'
  | 'nexivus-pos-frontend'
  | 'course-management-backend'
  | 'course-management-frontend'
  | 'quiz-web-app'
  | 'nic-detail-extractor'

export const LEGACY_PAGE_MARKUP: Record<LegacyPageKey, string> = {
  'home': String.raw`<!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <div class="flex justify-between items-center">
                <div
                    class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    BKDVibuddha
                </div>
                <div class="hidden md:flex space-x-6 lg:space-x-8">
                    <a href="#home" class="nav-item hover:text-purple-400 text-sm lg:text-base">Home</a>
                    <a href="#about" class="nav-item hover:text-purple-400 text-sm lg:text-base">About</a>
                    <a href="#projects" class="nav-item hover:text-purple-400 text-sm lg:text-base">Projects</a>
                    <a href="#contact" class="nav-item hover:text-purple-400 text-sm lg:text-base">Contact</a>
                </div>
                <button class="md:hidden text-white text-xl" id="mobile-menu-btn">☰</button>
            </div>
            <!-- Mobile Menu -->
            <div class="mt-4 pb-4 hidden" id="mobile-menu">
                <div class="flex flex-col space-y-3">
                    <a href="#home" class="nav-item hover:text-purple-400 py-2">Home</a>
                    <a href="#about" class="nav-item hover:text-purple-400 py-2">About</a>
                    <a href="#projects" class="nav-item hover:text-purple-400 py-2">Projects</a>
                    <a href="#contact" class="nav-item hover:text-purple-400 py-2">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
        <div class="absolute inset-0 animate-gradient opacity-20"></div>
        <div class="absolute inset-0 bg-gray-900 bg-opacity-80"></div>

        <!-- Floating Elements - Constrained positioning -->
        <div class="absolute top-20 left-4 sm:left-20 w-12 h-12 sm:w-20 sm:h-20 bg-purple-500 rounded-full opacity-20 animate-float"
            style="max-width: calc(100vw - 2rem);"></div>
        <div class="absolute bottom-20 right-4 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-pink-500 rounded-full opacity-15 animate-float"
            style="animation-delay: -2s; max-width: calc(100vw - 2rem);"></div>
        <div class="absolute top-1/2 left-2 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-blue-500 rounded-full opacity-25 animate-float"
            style="animation-delay: -4s; max-width: calc(100vw - 1rem);"></div>

        <div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <div class="animate-fade-in-up">
                <h1
                    class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                    Vibuddha Vidarshana
                </h1>
                <p class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 animate-slide-in-left"
                    style="animation-delay: 0.2s;">
                    Full Stack Developer
                </p>
                <p class="text-base sm:text-lg mb-8 sm:mb-12 text-gray-400 max-w-xs sm:max-w-2xl mx-auto animate-slide-in-right px-2"
                    style="animation-delay: 0.4s;">
                    Crafting beautiful and functional web experiences with a focus on performance and user
                    engagement. Passionate about modern web technologies and creating seamless digital journeys.
                </p>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up max-w-md sm:max-w-none mx-auto sm:h-20 h-40 items-center"
                    style="animation-delay: 0.6s;">
                    <a href="#projects" class="nav-item">
                        <button
                            class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 animate-pulse-glow text-sm sm:text-base">
                            View My Work
                        </button>
                    </a>
                    <a href="#contact" class="nav-item">
                        <button
                            class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                            Get In Touch
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2
                    class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div class="animate-slide-in-left ">
                    <div class="relative flex justify-center w-full">
                        <div
                            class="w-64 h-64 sm:w-80 sm:h-80 max-w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1">
                            <div class="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                                <img src="/assets/profilepic.jpg" alt="Profile Picture"
                                    class="w-56 h-56 sm:w-72 sm:h-72 max-w-full rounded-full object-cover shadow-lg">
                            </div>
                        </div>
                        <div
                            class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center text-lg sm:text-2xl animate-bounce">
                            ⚡
                        </div>
                    </div>
                </div>

                <div class="animate-slide-in-right ">
                    <h3 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">Full Stack Developer</h3>
                    <p class="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        Hi, I'm Vibuddha Vidarshana, a passionate full stack developer with a love for creating
                        immersive web experiences. With over 1 year of experience in the industry, I specialize in
                        building
                        responsive and interactive applications using modern technologies like React, TypeScript, and
                        Node.js. I also have experience building robust backends using Spring Boot, enabling scalable
                        and secure APIs for modern web applications.
                    </p>
                    <p class="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                        projects, or experimenting with digital art and animation.
                    </p>

                    <!-- Skills -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div
                            class="skill-item bg-gradient-to-br from-orange-500 to-red-500 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base">
                            Spring Boot
                        </div>
                        <div
                            class="skill-item bg-gradient-to-br from-blue-500 to-purple-500 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base">
                            React
                        </div>
                        <div
                            class="skill-item bg-gradient-to-br from-green-500 to-teal-500 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base">
                            Java
                        </div>
                        <div
                            class="skill-item bg-gradient-to-br from-pink-500 to-purple-500 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base">
                            JavaScript
                        </div>
                        <div
                            class="skill-item bg-gradient-to-br from-yellow-500 to-orange-500 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base">
                            Tailwind CSS
                        </div>
                        <div
                            class="skill-item bg-gradient-to-br from-indigo-500 to-blue-500 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base">
                            Node.js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2
                    class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <!-- First Row - 4 Projects -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <!-- Project 1 -->
                <div class="project-card glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-2xl">
                    <div
                        class="w-full h-36 sm:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                        <img class="h-28 sm:h-40" src="/assets/project1.svg" alt="project1.Picture">
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-400">Nexivus - Back End</h3>
                    <p class="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        A comprehensive point of sale system built with Spring Boot featuring JWT authentication
                        and RESTful APIs. <br><br>
                    </p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <span class="px-2 sm:px-3 py-1 bg-orange-600 rounded-full text-xs sm:text-sm">Spring Boot</span>
                        <span class="px-2 sm:px-3 py-1 bg-green-600 rounded-full text-xs sm:text-sm">MySQL</span>
                        <span class="px-2 sm:px-3 py-1 bg-purple-600 rounded-full text-xs sm:text-sm">JWT</span>
                        <span class="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm">REST API</span>
                    </div>
                    <a href="/projects/nexivus-pos-backend">
                        <button
                            class="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                            View Project
                        </button>
                    </a>
                </div>

                <!-- Project 2 -->
                <div class="project-card glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-2xl">
                    <div
                        class="w-full h-36 sm:h-48 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                        <img class="h-28 sm:h-40" src="/assets/project2.svg" alt="project2.Picture">
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-400">Nexivus - Front End</h3>
                    <p class="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        A modern, responsive front end for the Nexivus POS system, built with React for interactive
                        dashboards and smooth user experience.
                    </p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <span class="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm">React 19</span>
                        <span class="px-2 sm:px-3 py-1 bg-purple-600 rounded-full text-xs sm:text-sm">Tailwind
                            CSS</span>
                        <span class="px-2 sm:px-3 py-1 bg-pink-600 rounded-full text-xs sm:text-sm">Vite</span>
                        <span class="px-2 sm:px-3 py-1 bg-orange-600 rounded-full text-xs sm:text-sm">Axios</span>
                    </div>
                    <a href="/projects/nexivus-pos-frontend">
                        <button
                            class="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                            View Project
                        </button>
                    </a>
                </div>

                <!-- Project 3 -->
                <div class="project-card glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-2xl">
                    <div
                        class="w-full h-36 sm:h-48 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                        <img class="h-28 sm:h-40" src="/assets/project3.svg" alt="project3.Picture">
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-400">Course Management - Backend
                    </h3>
                    <p class="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        Enterprise-grade backend system with JWT authentication, role-based access, and comprehensive
                        course management features.
                    </p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <span class="px-2 sm:px-3 py-1 bg-green-600 rounded-full text-xs sm:text-sm">Spring Boot</span>
                        <span class="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm">JWT Auth</span>
                        <span class="px-2 sm:px-3 py-1 bg-yellow-600 rounded-full text-xs sm:text-sm">MySQL</span>
                        <span class="px-2 sm:px-3 py-1 bg-purple-600 rounded-full text-xs sm:text-sm">JPA</span>
                    </div>
                    <a href="/projects/course-management-backend">
                        <button
                            class="w-full py-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                            View Project
                        </button>
                    </a>
                </div>

                <!-- Project 4 -->
                <div class="project-card glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-2xl">
                    <div
                        class="w-full h-36 sm:h-48 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                        <img class="h-28 sm:h-40" src="/assets/project4.svg" alt="project4.Picture">
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-purple-400">Course Management - Frontend
                    </h3>
                    <p class="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        Modern React frontend with Material-UI, role-based dashboards, advanced file management, and
                        optimistic UI patterns.
                    </p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <span class="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm">React 19</span>
                        <span class="px-2 sm:px-3 py-1 bg-purple-600 rounded-full text-xs sm:text-sm">Material-UI</span>
                        <span class="px-2 sm:px-3 py-1 bg-pink-600 rounded-full text-xs sm:text-sm">Vite</span>
                        <span class="px-2 sm:px-3 py-1 bg-orange-600 rounded-full text-xs sm:text-sm">Axios</span>
                    </div>
                    <a href="/projects/course-management-frontend">
                        <button
                            class="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                            View Project
                        </button>
                    </a>
                </div>
            </div>

            <!-- Second Row - Projects 5 & 6 -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <!-- Project 5 -->
                <div class="project-card glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-2xl">
                    <div
                        class="w-full h-36 sm:h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                        <img class="h-28 sm:h-40" src="/assets/project5.svg" alt="project5.Picture">
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-orange-400">Quiz Web App</h3>
                    <p class="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        Interactive learning platform with timed questions, multiple choice answers, instant feedback,
                        and local storage for progress tracking.
                    </p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <span class="px-2 sm:px-3 py-1 bg-yellow-600 rounded-full text-xs sm:text-sm">JavaScript
                            ES6+</span>
                        <span class="px-2 sm:px-3 py-1 bg-orange-600 rounded-full text-xs sm:text-sm">HTML5</span>
                        <span class="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm">Tailwind CSS</span>
                        <span class="px-2 sm:px-3 py-1 bg-green-600 rounded-full text-xs sm:text-sm">Local
                            Storage</span>
                    </div>
                    <a href="/projects/quiz-web-app">
                        <button
                            class="w-full py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                            View Project
                        </button>
                    </a>
                </div>

                <!-- Project 6 -->
                <div class="project-card glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-2xl">
                    <div
                        class="w-full h-36 sm:h-48 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                        <img class="h-28 sm:h-40" src="/assets/project6.svg" alt="project6.Picture">
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-400">NIC Detail Extractor</h3>
                    <p class="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        React application that extracts and displays details from Sri Lankan National Identity Card
                        numbers with modern UI and validation.
                    </p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <span class="px-2 sm:px-3 py-1 bg-blue-600 rounded-full text-xs sm:text-sm">React 19</span>
                        <span class="px-2 sm:px-3 py-1 bg-purple-600 rounded-full text-xs sm:text-sm">Vite</span>
                        <span class="px-2 sm:px-3 py-1 bg-green-600 rounded-full text-xs sm:text-sm">CSS3</span>
                        <span class="px-2 sm:px-3 py-1 bg-orange-600 rounded-full text-xs sm:text-sm">lanka-nic</span>
                    </div>
                    <a href="/projects/nic-detail-extractor">
                        <button
                            class="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                            View Project
                        </button>
                    </a>
                </div>

                <!-- Empty placeholders to maintain grid structure (optional) -->
                <div class="hidden lg:block"></div>
                <div class="hidden lg:block"></div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2
                    class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Let's Connect
                </h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 sm:mb-8"></div>
                <p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Ready to bring your ideas to life? Let's collaborate and create something amazing together.
                </p>
            </div>

            <div class="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12">
                <div class="animate-slide-in-left">
                    <h3 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">Get In Touch</h3>
                    <div class="space-y-4 sm:space-y-6">
                        <div class="flex items-center space-x-3 sm:space-x-4">
                            <div class="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center text-lg sm:text-xl">
                                <img src="/assets/gmail.png" alt="gmail">
                            </div>
                            <div>
                                <p class="font-semibold text-sm sm:text-base">Email</p>
                                <p class="text-gray-400 text-sm sm:text-base">bvibuddha@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3 sm:space-x-4">
                            <div class="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center text-lg sm:text-xl">
                                <img src="/assets/facebook.png" alt="facebook">
                            </div>
                            <div>
                                <p class="font-semibold text-sm sm:text-base">Facebook</p>
                                <p class="text-gray-400 text-sm sm:text-base"><a
                                        href="https://www.facebook.com/vibuddha.vidharshana">Vibuddha Vidarshana</a></p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3 sm:space-x-4">
                            <div class="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center text-lg sm:text-xl">
                                <img src="/assets/linkedin.png" alt="linkedin">
                            </div>
                            <div>
                                <p class="font-semibold text-sm sm:text-base">LinkedIn</p>
                                <p class="text-gray-400 text-sm sm:text-base break-all"><a
                                        href="https://www.linkedin.com/in/vibuddha-vidarshana-818502a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrNWFeyoZT7azZ08J1BSTVA%3D%3D">Vibuddha
                                        Vidarshana</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animate-slide-in-right">
                    <form class="space-y-4 sm:space-y-6 pb-5">
                        <div>
                            <input type="text" placeholder="Your Name"
                                class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-sm sm:text-base">
                        </div>
                        <div>
                            <input type="email" placeholder="Your Email"
                                class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-sm sm:text-base">
                        </div>
                        <div>
                            <textarea rows="4" placeholder="Your Message"
                                class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-sm sm:text-base"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 animate-pulse-glow text-sm sm:text-base">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-6 sm:py-8 border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 text-center">
            <p class="text-gray-400 text-sm sm:text-base px-2">
                © 2025 Vibuddha Vidarshana. All rights reserved. | Built with ❤️ using Tailwind CSS and JavaScript.
            </p>
        </div>
    </footer>

    <script src="/legacy-scripts/index.js"></script>`,
  'nexivus-pos-backend': String.raw`<!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <div
                        class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-cash-register text-white text-lg sm:text-xl"></i>
                    </div>
                    <span class="text-lg sm:text-xl font-bold text-gray-800">Nexivus POS System</span>
                </div>
                <div class="hidden md:flex space-x-6 lg:space-x-8">
                    <a href="/"
                        class="nav-link text-gray-700 hover:text-blue-600 transition-colors font-semibold">Home</a>
                    <a href="#overview"
                        class="nav-link text-gray-700 hover:text-blue-600 transition-colors">Overview</a>
                    <a href="#features"
                        class="nav-link text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                    <a href="#tech-stack" class="nav-link text-gray-700 hover:text-blue-600 transition-colors">Tech
                        Stack</a>
                    <a href="#api" class="nav-link text-gray-700 hover:text-blue-600 transition-colors">API</a>
                </div>
                <button class="md:hidden text-gray-700 p-2" id="mobile-menu-toggle">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="mt-4 pb-4 px-4 sm:px-6 hidden" id="mobile-menu">
            <div class="flex flex-col space-y-3">
                <a href="/" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-blue-400 py-2 px-2 font-semibold">Home</a>
                <a href="#overview" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-blue-400 py-2 px-2">Overview</a>
                <a href="#features" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-blue-400 py-2 px-2">Features</a>
                <a href="#tech-stack" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-blue-400 py-2 px-2">Tech Stack</a>
                <a href="#api" onclick="closeMobileMenu()" class="text-gray-700 hover:text-blue-400 py-2 px-2">API</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-white slide-in">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span class="block">Nexivus</span>
                        <span
                            class="text-xl sm:text-2xl lg:text-3xl font-normal text-blue-200 typewriter typing-animation border-r-2 border-blue-400">
                            Point of Sale System
                        </span>
                    </h1>
                    <p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                        A robust Spring Boot-based Point of Sale system with secure JWT authentication,
                        RESTful APIs, and end-to-end sales and inventory management features.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="https://github.com/Vibuddha94/Nexivus-spring.git">
                            <button
                                class="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                                <i class="fab fa-github mr-2"></i>View Source Code
                            </button>
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="floating">
                        <div class="modern-card rounded-3xl p-6 xl:p-8 shadow-2xl">
                            <div
                                class="code-highlight rounded-xl p-4 xl:p-6 text-green-400 font-mono text-xs sm:text-sm">
                                <div class="flex items-center space-x-2 mb-4">
                                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-400 ml-4 text-xs">InventoryController.java</span>
                                </div>
                                <div id="code-display" class="space-y-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-bold text-blue-600">Point of Sale Backend</h3>
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                        A robust Spring Boot application designed to power retail point of sale systems with
                        comprehensive
                        inventory management, sales processing, and user administration capabilities. Built with
                        enterprise-grade security and scalability in mind.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">3</div>
                            <div class="text-sm text-gray-600">User Roles</div>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">20+</div>
                            <div class="text-sm text-gray-600">API Endpoints</div>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">JWT</div>
                            <div class="text-sm text-gray-600">Authentication</div>
                        </div>
                        <div class="bg-orange-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-orange-600">Sales</div>
                            <div class="text-sm text-gray-600">Management</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-blue-100 to-purple-100 p-6 sm:p-8 rounded-2xl">
                    <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Key Capabilities</h4>
                    <ul class="space-y-3 text-sm sm:text-base">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-users text-blue-500 mt-1"></i>
                            <span class="text-gray-700">Multi-role user management (Admin, Manager, Cashier)</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-cash-register text-green-500 mt-1"></i>
                            <span class="text-gray-700">Complete sales transaction processing</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-boxes text-purple-500 mt-1"></i>
                            <span class="text-gray-700">Real-time inventory management and tracking</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-shield-alt text-red-500 mt-1"></i>
                            <span class="text-gray-700">JWT-based authentication and authorization</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-database text-indigo-500 mt-1"></i>
                            <span class="text-gray-700">JPA/Hibernate with MySQL integration</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- User Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-users text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">User Management</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Complete user lifecycle management with role-based access control. Supports Admin, Manager,
                        and Cashier roles with distinct permissions and capabilities.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">CRUD Operations</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Role-based Access</span>
                    </div>
                </div>

                <!-- Authentication -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-lock text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">JWT Authentication</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Secure JWT-based authentication system with token generation, validation, and refresh
                        capabilities.
                        BCrypt password encryption for enhanced security.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">JWT Tokens</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">BCrypt</span>
                    </div>
                </div>

                <!-- Inventory Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-boxes text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Inventory Management</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Comprehensive inventory control with real-time stock tracking, category management,
                        and automated stock level monitoring for efficient retail operations.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Stock Tracking</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Category System</span>
                    </div>
                </div>

                <!-- Sales Processing -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-cash-register text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Sales Processing</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Advanced sales transaction handling with automated order processing,
                        total calculations, and real-time inventory deduction for seamless operations.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Order Processing</span>
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Auto Calculations</span>
                    </div>
                </div>

                <!-- API Security -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-shield-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Security Framework</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Enterprise-grade security with Spring Security integration, CORS configuration,
                        method-level security annotations, and comprehensive authorization filters.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Spring Security</span>
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">CORS</span>
                    </div>
                </div>

                <!-- Database Integration -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-database text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Database Layer</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Robust data persistence layer using JPA/Hibernate with MySQL. Entity relationships,
                        custom repositories, and optimized queries for efficient retail data management.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">JPA/Hibernate</span>
                        <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
                <!-- Backend Framework -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Backend Framework</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full">
                            Spring Boot 3.x
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full">
                            Spring Security
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-full">
                            Spring Data JPA
                        </div>
                    </div>
                </div>

                <!-- Language & Runtime -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Language & Runtime</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full">
                            Java 17
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full">
                            RESTful APIs
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-red-700 to-red-800 text-white px-4 py-2 rounded-full">
                            JSON Processing
                        </div>
                    </div>
                </div>

                <!-- Security & Auth -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Security & Auth</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full">
                            JWT Authentication
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full">
                            BCrypt Encryption
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-2 rounded-full">
                            CORS Support
                        </div>
                    </div>
                </div>

                <!-- Database & Build -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Database & Build</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-full">
                            MySQL 8.0+
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-2 rounded-full">
                            JPA/Hibernate
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-indigo-700 to-indigo-800 text-white px-4 py-2 rounded-full">
                            Maven
                        </div>
                    </div>
                </div>

                <!-- Additional Libraries -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Additional Libraries</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full">
                            Lombok
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full">
                            SpringDoc OpenAPI
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-700 to-orange-800 text-white px-4 py-2 rounded-full">
                            Swagger UI
                        </div>
                    </div>
                </div>

                <!-- Documentation & Testing -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Documentation & API</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full">
                            Interactive API Docs
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full">
                            Postman Ready
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-700 to-purple-800 text-white px-4 py-2 rounded-full">
                            OpenAPI 3.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- API Section -->
    <section id="api" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">API Endpoints</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Authentication APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">Authentication APIs</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/auth/login</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">User authentication with JWT token generation</p>
                        </div>
                    </div>
                </div>

                <!-- Category Management APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-purple-600 mb-4">Category Management</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/category</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all product categories</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/category</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Create new product category</p>
                        </div>
                    </div>
                </div>

                <!-- Items Management APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-green-600 mb-4">Items Management</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/items</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all inventory items (requires JWT)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/items</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Add new inventory item</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-yellow-500 text-white text-xs rounded font-mono">PUT</span>
                                <code class="text-sm text-gray-700">/items/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Update existing item</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">DEL</span>
                                <code class="text-sm text-gray-700">/items/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Delete inventory item</p>
                        </div>
                    </div>
                </div>

                <!-- Stock Management APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-indigo-600 mb-4">Stock Management</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/stock</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all stock information</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/stock</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Create new stock entry</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-yellow-500 text-white text-xs rounded font-mono">PUT</span>
                                <code class="text-sm text-gray-700">/stock/addto</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Add quantity to existing stock (requires JWT)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-yellow-500 text-white text-xs rounded font-mono">PUT</span>
                                <code class="text-sm text-gray-700">/stock/getfrom</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Reduce quantity from stock (requires JWT)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-yellow-500 text-white text-xs rounded font-mono">PUT</span>
                                <code class="text-sm text-gray-700">/stock</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Update stock quantity directly (requires JWT)</p>
                        </div>
                    </div>
                </div>

                <!-- User Management APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-cyan-600 mb-4">User Management</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-cyan-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/users</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all system users</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-cyan-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/users</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Create new user account</p>
                        </div>
                    </div>
                </div>

                <!-- Orders Management APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-orange-600 mb-4">Orders Management</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/orders</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all sales orders (requires JWT)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/orders</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Create new sales order (requires JWT)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-6 sm:py-8 border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 text-center">
            <p class="text-gray-400 text-sm sm:text-base">
                © 2025 Vibuddha Vidarshana. Nexivus Point of Sale System | Built with Spring Boot & Modern
                Architecture
            </p>
        </div>
    </footer>

    <script src="/legacy-scripts/project1.js"></script>`,
  'nexivus-pos-frontend': String.raw`<!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <div
                        class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-react text-white text-lg sm:text-xl"></i>
                    </div>
                    <span class="text-lg sm:text-xl font-bold text-gray-800">Nexivus Frontend</span>
                </div>
                <div class="hidden md:flex space-x-6 lg:space-x-8">
                    <a href="/"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors font-semibold">Home</a>
                    <a href="#overview"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Overview</a>
                    <a href="#features"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                    <a href="#tech-stack" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Tech
                        Stack</a>
                    <a href="#api" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Demo</a>
                </div>
                <button class="md:hidden text-gray-700 p-2" id="mobile-menu-toggle">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="mt-4 pb-4 px-4 sm:px-6 hidden" id="mobile-menu">
            <div class="flex flex-col space-y-3">
                <a href="/" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2 font-semibold">Home</a>
                <a href="#overview" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Overview</a>
                <a href="#features" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Features</a>
                <a href="#tech-stack" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Tech Stack</a>
                <a href="#api" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Demo</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-teal-500 overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-white slide-in">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span class="block">Nexivus Frontend</span>
                        <span
                            class="text-xl sm:text-2xl lg:text-3xl font-normal text-purple-200 typewriter typing-animation border-r-2 border-purple-400">
                            React Point of Sale UI
                        </span>
                    </h1>
                    <p class="text-lg sm:text-xl text-purple-100 mb-8 leading-relaxed">
                        A modern React-based frontend application for the Nexivus Point of Sale system with
                        intuitive UI, real-time updates, and responsive design for seamless retail operations.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="https://github.com/Vibuddha94/Nexivus-frontend.git">
                            <button
                                class="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
                                <i class="fab fa-github mr-2"></i>View Source Code
                            </button>
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="floating">
                        <div class="modern-card rounded-3xl p-6 xl:p-8 shadow-2xl">
                            <div
                                class="code-highlight rounded-xl p-4 xl:p-6 text-green-400 font-mono text-xs sm:text-sm">
                                <div class="flex items-center space-x-2 mb-4">
                                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-400 ml-4 text-xs">App.jsx</span>
                                </div>
                                <div id="code-display" class="space-y-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-bold text-purple-600">React Frontend Application</h3>
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                        A modern React-based frontend application designed to provide an intuitive user interface
                        for the Nexivus Point of Sale system with real-time data management, responsive design,
                        and seamless user experience for retail operations.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">10+</div>
                            <div class="text-sm text-gray-600">Components</div>
                        </div>
                        <div class="bg-pink-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-pink-600">5</div>
                            <div class="text-sm text-gray-600">Main Views</div>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">React</div>
                            <div class="text-sm text-gray-600">Framework</div>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">API</div>
                            <div class="text-sm text-gray-600">Integration</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-purple-100 to-pink-100 p-6 sm:p-8 rounded-2xl">
                    <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Key Capabilities</h4>
                    <ul class="space-y-3 text-sm sm:text-base">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-mobile-alt text-purple-500 mt-1"></i>
                            <span class="text-gray-700">Responsive design for all device sizes</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-sync text-pink-500 mt-1"></i>
                            <span class="text-gray-700">Real-time data synchronization with backend</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-user-lock text-blue-500 mt-1"></i>
                            <span class="text-gray-700">Secure JWT-based authentication system</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-chart-line text-red-500 mt-1"></i>
                            <span class="text-gray-700">Interactive dashboard and analytics</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-palette text-indigo-500 mt-1"></i>
                            <span class="text-gray-700">Modern UI with Tailwind CSS styling</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- User Authentication -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-user-shield text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">User Authentication</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Secure login system with JWT token management, role-based access control,
                        and automatic session handling for different user types.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">JWT Auth</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Role Management</span>
                    </div>
                </div>

                <!-- Inventory Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-boxes text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Inventory Management</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Comprehensive inventory control interface with real-time stock updates,
                        category management, and intuitive item administration tools.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Stock Tracking</span>
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Real-time Updates</span>
                    </div>
                </div>

                <!-- Sales Interface -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-cash-register text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Sales Interface</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Streamlined point of sale interface with cart management, order processing,
                        and automated calculations for efficient transaction handling.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">POS Interface</span>
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Cart Management</span>
                    </div>
                </div>

                <!-- Responsive Design -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-mobile-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Responsive Design</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Mobile-first responsive design ensuring optimal user experience across
                        all devices from desktop computers to mobile phones and tablets.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Mobile First</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Cross-device</span>
                    </div>
                </div>

                <!-- Modern UI -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-palette text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Modern UI Design</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Clean, modern interface built with Tailwind CSS featuring smooth animations,
                        intuitive navigation, and consistent design patterns throughout the application.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Tailwind CSS</span>
                        <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">Animations</span>
                    </div>
                </div>

                <!-- API Integration -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-plug text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">API Integration</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Seamless integration with the Nexivus backend API using Axios for HTTP requests,
                        error handling, and automatic token management for secure communication.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Axios</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Error Handling</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <!-- Frontend Framework -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Frontend Framework</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full">
                            React 18
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full">
                            TypeScript
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-full">
                            Vite
                        </div>
                    </div>
                </div>

                <!-- Styling & UI -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Styling & UI</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full">
                            Tailwind CSS
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full">
                            FontAwesome
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-700 to-purple-800 text-white px-4 py-2 rounded-full">
                            CSS Animations
                        </div>
                    </div>
                </div>

                <!-- State & Routing -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">State & Routing</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full">
                            React Router
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full">
                            Context API
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-2 rounded-full">
                            Local Storage
                        </div>
                    </div>
                </div>

                <!-- HTTP & Tools -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">HTTP & Tools</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full">
                            Axios
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full">
                            ESLint
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-700 to-orange-800 text-white px-4 py-2 rounded-full">
                            npm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Demo Section -->
    <section id="api" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Application Demo</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Login Interface -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-purple-600 mb-4">Authentication Interface</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-purple-500 text-white text-xs rounded font-mono">LOGIN</span>
                                <code class="text-sm text-gray-700">User Authentication</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Secure login with JWT token management</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">ROLE</span>
                                <code class="text-sm text-gray-700">Role-based Access</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Different interfaces for Admin, Manager, Cashier</p>
                        </div>
                    </div>
                </div>

                <!-- Dashboard Interface -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">Dashboard Features</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">VIEW</span>
                                <code class="text-sm text-gray-700">Inventory Overview</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Real-time inventory status and stock levels</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-orange-500 text-white text-xs rounded font-mono">MANAGE</span>
                                <code class="text-sm text-gray-700">Sales Processing</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Point of sale interface with cart management</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">ADMIN</span>
                                <code class="text-sm text-gray-700">User Management</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Admin interface for user and system management</p>
                        </div>
                    </div>
                </div>

                <!-- Mobile Experience -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-pink-600 mb-4">Mobile Experience</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-pink-500 text-white text-xs rounded font-mono">MOBILE</span>
                                <code class="text-sm text-gray-700">Responsive Design</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Optimized for mobile and tablet devices</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-purple-500 text-white text-xs rounded font-mono">TOUCH</span>
                                <code class="text-sm text-gray-700">Touch Interface</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Touch-friendly controls for mobile POS</p>
                        </div>
                    </div>
                </div>

                <!-- Real-time Features -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-green-600 mb-4">Real-time Features</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">SYNC</span>
                                <code class="text-sm text-gray-700">Data Synchronization</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Real-time sync with backend database</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-indigo-500 text-white text-xs rounded font-mono">UPDATE</span>
                                <code class="text-sm text-gray-700">Live Updates</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Live inventory and sales updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-6 sm:py-8 border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 text-center">
            <p class="text-gray-400 text-sm sm:text-base">
                © 2025 Vibuddha Vidarshana. Nexivus Frontend Application | Built with React & Modern UI/UX
            </p>
        </div>
    </footer>

    <script src="/legacy-scripts/project2.js"></script>`,
  'course-management-backend': String.raw`<!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <div
                        class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-graduation-cap text-white text-lg sm:text-xl"></i>
                    </div>
                    <span class="text-lg sm:text-xl font-bold text-gray-800">Course Management System</span>
                </div>
                <div class="hidden md:flex space-x-6 lg:space-x-8">
                    <a href="/"
                        class="nav-link text-gray-700 hover:text-green-600 transition-colors font-semibold">Home</a>
                    <a href="#overview"
                        class="nav-link text-gray-700 hover:text-green-600 transition-colors">Overview</a>
                    <a href="#features"
                        class="nav-link text-gray-700 hover:text-green-600 transition-colors">Features</a>
                    <a href="#tech-stack" class="nav-link text-gray-700 hover:text-green-600 transition-colors">Tech
                        Stack</a>
                    <a href="#api" class="nav-link text-gray-700 hover:text-green-600 transition-colors">API</a>
                </div>
                <button class="md:hidden text-gray-700 p-2" id="mobile-menu-toggle">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="mt-4 pb-4 px-4 sm:px-6 hidden" id="mobile-menu">
            <div class="flex flex-col space-y-3">
                <a href="/" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-green-400 py-2 px-2 font-semibold">Home</a>
                <a href="#overview" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-green-400 py-2 px-2">Overview</a>
                <a href="#features" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-green-400 py-2 px-2">Features</a>
                <a href="#tech-stack" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-green-400 py-2 px-2">Tech Stack</a>
                <a href="#api" onclick="closeMobileMenu()" class="text-gray-700 hover:text-green-400 py-2 px-2">API</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-white slide-in">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span class="block">Course Management</span>
                        <span
                            class="text-xl sm:text-2xl lg:text-3xl font-normal text-green-200 typewriter typing-animation border-r-2 border-green-400">
                            Spring Boot Backend System
                        </span>
                    </h1>
                    <p class="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
                        A comprehensive educational platform backend featuring role-based authentication,
                        course management, file upload capabilities, and secure API endpoints for managing
                        students, instructors, and educational content.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="https://github.com/Vibuddha94/course-management-system-backend.git">
                            <button
                                class="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                                <i class="fab fa-github mr-2"></i>View Source Code
                            </button>
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="floating">
                        <div class="modern-card rounded-3xl p-6 xl:p-8 shadow-2xl bg-white">
                            <div
                                class="code-highlight rounded-xl p-4 xl:p-6 text-green-400 font-mono text-xs sm:text-sm">
                                <div class="flex items-center space-x-2 mb-4">
                                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-400 ml-4 text-xs">CourseController.java</span>
                                </div>
                                <div id="code-display" class="space-y-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-bold text-green-600">Educational Platform Backend</h3>
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                        A robust Spring Boot application designed to power educational platforms with comprehensive
                        user management, course administration, and content delivery capabilities. Built with
                        enterprise-grade security and scalability in mind.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-green-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">3</div>
                            <div class="text-sm text-gray-600">User Roles</div>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">15+</div>
                            <div class="text-sm text-gray-600">API Endpoints</div>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">JWT</div>
                            <div class="text-sm text-gray-600">Authentication</div>
                        </div>
                        <div class="bg-orange-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-orange-600">File</div>
                            <div class="text-sm text-gray-600">Management</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-green-100 to-blue-100 p-6 sm:p-8 rounded-2xl">
                    <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Key Capabilities</h4>
                    <ul class="space-y-3 text-sm sm:text-base">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-user-graduate text-green-500 mt-1"></i>
                            <span class="text-gray-700">Multi-role user management (Admin, Instructor, Student)</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-book text-blue-500 mt-1"></i>
                            <span class="text-gray-700">Complete course lifecycle management</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-upload text-purple-500 mt-1"></i>
                            <span class="text-gray-700">Secure file upload and storage system</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-shield-alt text-red-500 mt-1"></i>
                            <span class="text-gray-700">JWT-based authentication and authorization</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-database text-indigo-500 mt-1"></i>
                            <span class="text-gray-700">JPA/Hibernate with MySQL integration</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- User Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-users text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">User Management</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Complete user lifecycle management with role-based access control. Supports Admin, Instructor,
                        and Student roles with distinct permissions and capabilities.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">CRUD Operations</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Role-based Access</span>
                    </div>
                </div>

                <!-- Authentication -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-lock text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">JWT Authentication</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Secure JWT-based authentication system with token generation, validation, and refresh
                        capabilities.
                        BCrypt password encryption for enhanced security.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">JWT Tokens</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">BCrypt</span>
                    </div>
                </div>

                <!-- Course Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Course Management</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Comprehensive course administration with instructor assignments, course materials,
                        and hierarchical content organization for effective learning management.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Course CRUD</span>
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Instructor Linking</span>
                    </div>
                </div>

                <!-- File Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-cloud-upload-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">File Storage System</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Advanced file upload and storage capabilities with organized directory structure,
                        secure file handling, and metadata management for course materials.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Multipart Upload</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Secure Storage</span>
                    </div>
                </div>

                <!-- API Security -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-shield-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Security Framework</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Enterprise-grade security with Spring Security integration, CORS configuration,
                        method-level security annotations, and comprehensive authorization filters.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Spring Security</span>
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">CORS</span>
                    </div>
                </div>

                <!-- Database Integration -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-database text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Database Layer</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Robust data persistence layer using JPA/Hibernate with MySQL. Entity relationships,
                        custom repositories, and optimized queries for efficient data management.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">JPA/Hibernate</span>
                        <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
                <!-- Backend Framework -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Backend Framework</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full">
                            Spring Boot 3.x
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full">
                            Spring Security
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-2 rounded-full">
                            Spring Data JPA
                        </div>
                    </div>
                </div>

                <!-- Language & Runtime -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Language & Runtime</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full">
                            Java
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full">
                            RESTful APIs
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-red-700 to-red-800 text-white px-4 py-2 rounded-full">
                            Jakarta EE
                        </div>
                    </div>
                </div>

                <!-- Security & Auth -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Security & Auth</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full">
                            JWT Service
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full">
                            BCrypt Encoder
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-full">
                            Method Security
                        </div>
                    </div>
                </div>

                <!-- Database & ORM -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Database & ORM</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-full">
                            MySQL
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-2 rounded-full">
                            JPA Repository
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-indigo-700 to-indigo-800 text-white px-4 py-2 rounded-full">
                            Hibernate ORM
                        </div>
                    </div>
                </div>

                <!-- File Management -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">File Management</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full">
                            Multipart Upload
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full">
                            File Storage API
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-700 to-purple-800 text-white px-4 py-2 rounded-full">
                            Resource Handling
                        </div>
                    </div>
                </div>

                <!-- Build & Libraries -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Build & Libraries</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full">
                            Maven
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full">
                            Lombok
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-700 to-orange-800 text-white px-4 py-2 rounded-full">
                            ModelMapper
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- API Section -->
    <section id="api" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">API Endpoints</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Authentication APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-green-600 mb-4">Authentication APIs</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/api/v1/auth/login</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">User authentication with JWT token generation</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/api/v1/auth/register</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Student registration (role-restricted)</p>
                        </div>
                    </div>
                </div>

                <!-- User Management APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">User Management</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/api/v1/user</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all users</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/api/v1/user/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get user by ID</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/api/v1/user/getAll-by-role/{role}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get users by role (ADMIN, INSTRUCTOR, STUDENT)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/api/v1/user</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Create new user (Admin only)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-yellow-500 text-white text-xs rounded font-mono">PUT</span>
                                <code class="text-sm text-gray-700">/api/v1/user/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Update user information</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">DEL</span>
                                <code class="text-sm text-gray-700">/api/v1/user/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Delete user (Admin only)</p>
                        </div>
                    </div>
                </div>

                <!-- Course Management APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-purple-600 mb-4">Course Management</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/api/v1/course</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all courses with instructor details</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/api/v1/course/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get course by ID</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/api/v1/course/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Create course (Instructor only)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-yellow-500 text-white text-xs rounded font-mono">PUT</span>
                                <code class="text-sm text-gray-700">/api/v1/course/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Update course (Admin/Instructor)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">DEL</span>
                                <code class="text-sm text-gray-700">/api/v1/course/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Delete course (Admin/Instructor)</p>
                        </div>
                    </div>
                </div>

                <!-- Course Materials APIs -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-orange-600 mb-4">Course Materials</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/api/v1/course-modules/get/all/{courseId}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Get all materials for a course</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">GET</span>
                                <code class="text-sm text-gray-700">/api/v1/course-modules/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Download course material file</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">POST</span>
                                <code class="text-sm text-gray-700">/api/v1/course-modules/{courseId}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Upload multiple course materials (Admin/Instructor)
                            </p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">DEL</span>
                                <code class="text-sm text-gray-700">/api/v1/course-modules/{id}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Delete specific course material (Admin/Instructor)</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">DEL</span>
                                <code class="text-sm text-gray-700">/api/v1/course-modules/delete/all/{courseId}</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Delete all course materials (Admin/Instructor)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-6 sm:py-8 border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 text-center">
            <p class="text-gray-400 text-sm sm:text-base">
                © 2025 Vibuddha Vidarshana. Course Management System Backend | Built with Spring Boot & Modern
                Architecture
            </p>
        </div>
    </footer>

    <script src="/legacy-scripts/project3.js"></script>`,
  'course-management-frontend': String.raw`<!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <div
                        class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-react text-white text-lg sm:text-xl"></i>
                    </div>
                    <span class="text-lg sm:text-xl font-bold text-gray-800">Course Management Frontend</span>
                </div>
                <div class="hidden md:flex space-x-6 lg:space-x-8">
                    <a href="/"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors font-semibold">Home</a>
                    <a href="#overview"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Overview</a>
                    <a href="#features"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                    <a href="#tech-stack" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Tech
                        Stack</a>
                    <a href="#api" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Demo</a>
                </div>
                <button class="md:hidden text-gray-700 p-2" id="mobile-menu-toggle">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="mt-4 pb-4 px-4 sm:px-6 hidden" id="mobile-menu">
            <div class="flex flex-col space-y-3">
                <a href="/" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2 font-semibold">Home</a>
                <a href="#overview" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Overview</a>
                <a href="#features" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Features</a>
                <a href="#tech-stack" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Tech Stack</a>
                <a href="#api" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Demo</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-white slide-in">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span class="block">Course Management Frontend</span>
                        <span
                            class="text-xl sm:text-2xl lg:text-3xl font-normal text-purple-200 typewriter typing-animation border-r-2 border-purple-400">
                            React Educational Platform UI
                        </span>
                    </h1>
                    <p class="text-lg sm:text-xl text-purple-100 mb-8 leading-relaxed">
                        A modern React-based frontend application for the Course Management System with
                        Material-UI components, role-based dashboards, and advanced file management for educational
                        institutions.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="https://github.com/Vibuddha94/course-management-system-frontend">
                            <button
                                class="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
                                <i class="fab fa-github mr-2"></i>View Source Code
                            </button>
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="floating">
                        <div class="modern-card rounded-3xl p-6 xl:p-8 shadow-2xl bg-white">
                            <div
                                class="code-highlight rounded-xl p-4 xl:p-6 text-green-400 font-mono text-xs sm:text-sm">
                                <div class="flex items-center space-x-2 mb-4">
                                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-400 ml-4 text-xs">Dashboard.jsx</span>
                                </div>
                                <div id="code-display" class="space-y-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-bold text-purple-600">React Frontend Application</h3>
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                        A modern React-based frontend application designed to provide an intuitive user interface
                        for the Course Management System with Material-UI components, role-based access control,
                        and advanced file management capabilities for educational institutions.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">15+</div>
                            <div class="text-sm text-gray-600">Components</div>
                        </div>
                        <div class="bg-pink-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-pink-600">6</div>
                            <div class="text-sm text-gray-600">Main Pages</div>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">React 19</div>
                            <div class="text-sm text-gray-600">Framework</div>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">Material-UI</div>
                            <div class="text-sm text-gray-600">UI Library</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-purple-100 to-pink-100 p-6 sm:p-8 rounded-2xl">
                    <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Key Capabilities</h4>
                    <ul class="space-y-3 text-sm sm:text-base">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-mobile-alt text-purple-500 mt-1"></i>
                            <span class="text-gray-700">Mobile-first responsive design with Material-UI Grid v2</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-users-cog text-pink-500 mt-1"></i>
                            <span class="text-gray-700">Role-based dashboards for Admin, Instructor, and Student</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-cloud-upload-alt text-blue-500 mt-1"></i>
                            <span class="text-gray-700">Advanced file management with drag-and-drop upload</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-bolt text-red-500 mt-1"></i>
                            <span class="text-gray-700">Optimistic UI patterns with immediate feedback</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-palette text-indigo-500 mt-1"></i>
                            <span class="text-gray-700">Modern Material-UI components with consistent theming</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- Role-Based Authentication -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-users-cog text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Role-Based Dashboard</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Dynamic dashboards with different interfaces and functionality for Admin, Instructor, and
                        Student roles
                        with conditional rendering and permission-based access control.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Admin Panel</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Role Management</span>
                    </div>
                </div>

                <!-- Course Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Course Management</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Comprehensive course creation, editing, and management interface with material uploads,
                        student enrollment tracking, and real-time course statistics.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">CRUD Operations</span>
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Material Upload</span>
                    </div>
                </div>

                <!-- File Management -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-cloud-upload-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Advanced File Management</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Multi-file upload with drag-and-drop interface, progress tracking, file previews,
                        and secure blob-based download system with optimistic UI patterns.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Drag & Drop</span>
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Progress Tracking</span>
                    </div>
                </div>

                <!-- Material-UI Design -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-palette text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Material-UI Design</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Modern interface built with Material-UI v7 components featuring consistent theming,
                        smooth animations, and responsive Grid v2 system for all screen sizes.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Material-UI v7</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Grid v2</span>
                    </div>
                </div>

                <!-- Optimistic UI -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-bolt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Optimistic UI Patterns</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Immediate user feedback with rollback capability, loading states, pending file management,
                        and smooth state transitions for enhanced user experience.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Instant Feedback</span>
                        <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">Rollback Support</span>
                    </div>
                </div>

                <!-- API Integration -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-plug text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">API Integration</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Seamless integration with the Course Management backend API using Axios for HTTP requests,
                        JWT token management, and comprehensive error handling.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Axios</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Error Handling</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <!-- Frontend Framework -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Frontend Framework</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full">
                            React 19
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full">
                            Material-UI v7
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-full">
                            Vite
                        </div>
                    </div>
                </div>

                <!-- Styling & UI -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">UI Components</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full">
                            Grid v2 System
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full">
                            MUI Icons
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-700 to-purple-800 text-white px-4 py-2 rounded-full">
                            Theme Provider
                        </div>
                    </div>
                </div>

                <!-- State & Routing -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">State & Routing</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full">
                            React Router v7
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full">
                            React Hooks
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-2 rounded-full">
                            Optimistic UI
                        </div>
                    </div>
                </div>

                <!-- HTTP & Tools -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">HTTP & Tools</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full">
                            Axios
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full">
                            Sonner Toast
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-700 to-orange-800 text-white px-4 py-2 rounded-full">
                            ESLint
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Demo Section -->
    <section id="api" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Application Demo</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Authentication Interface -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-purple-600 mb-4">Authentication & Roles</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-purple-500 text-white text-xs rounded font-mono">LOGIN</span>
                                <code class="text-sm text-gray-700">JWT Authentication</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Secure login with role-based dashboard routing</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">ADMIN</span>
                                <code class="text-sm text-gray-700">Admin Dashboard</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Full system access with user management</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span
                                    class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">INSTRUCTOR</span>
                                <code class="text-sm text-gray-700">Course Management</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Course creation and material management</p>
                        </div>
                    </div>
                </div>

                <!-- Dashboard Features -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">Dashboard Components</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">STATS</span>
                                <code class="text-sm text-gray-700">Statistics Cards</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Real-time course and user statistics</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span
                                    class="px-2 py-1 bg-orange-500 text-white text-xs rounded font-mono">COURSES</span>
                                <code class="text-sm text-gray-700">Course Management</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">CRUD operations with Material-UI dialogs</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">USERS</span>
                                <code class="text-sm text-gray-700">User Management</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Student and instructor management interface</p>
                        </div>
                    </div>
                </div>

                <!-- File Management -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-pink-600 mb-4">File Management System</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-pink-500 text-white text-xs rounded font-mono">UPLOAD</span>
                                <code class="text-sm text-gray-700">Multi-file Upload</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Drag-and-drop with progress tracking</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span
                                    class="px-2 py-1 bg-purple-500 text-white text-xs rounded font-mono">DOWNLOAD</span>
                                <code class="text-sm text-gray-700">Secure Downloads</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Blob-based file downloads with error handling</p>
                        </div>
                    </div>
                </div>

                <!-- Material-UI Features -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-green-600 mb-4">Material-UI Integration</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">GRID</span>
                                <code class="text-sm text-gray-700">Responsive Layout</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Material-UI Grid v2 responsive system</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-indigo-500 text-white text-xs rounded font-mono">THEME</span>
                                <code class="text-sm text-gray-700">Consistent Theming</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Material-UI theme provider integration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-6 sm:py-8 border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 text-center">
            <p class="text-gray-400 text-sm sm:text-base">
                © 2025 Vibuddha Vidarshana. Course Management Frontend Application | Built with React 19 & Material-UI
            </p>
        </div>
    </footer>

    <script src="/legacy-scripts/project4.js"></script>`,
  'quiz-web-app': String.raw`<!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <div
                        class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-brain text-white text-lg sm:text-xl"></i>
                    </div>
                    <span class="text-lg sm:text-xl font-bold text-gray-800">Quiz Web App</span>
                </div>
                <div class="hidden md:flex space-x-6 lg:space-x-8">
                    <a href="/"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors font-semibold">Home</a>
                    <a href="#overview"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Overview</a>
                    <a href="#features"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                    <a href="#tech-stack" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Tech
                        Stack</a>
                    <a href="#api" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Demo</a>
                </div>
                <button class="md:hidden text-gray-700 p-2" id="mobile-menu-toggle">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="mt-4 pb-4 px-4 sm:px-6 hidden" id="mobile-menu">
            <div class="flex flex-col space-y-3">
                <a href="/" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2 font-semibold">Home</a>
                <a href="#overview" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Overview</a>
                <a href="#features" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Features</a>
                <a href="#tech-stack" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Tech Stack</a>
                <a href="#api" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-purple-400 py-2 px-2">Demo</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section
        class="relative min-h-screen flex items-center bg-gradient-to-r from-orange-400 to-red-500 overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-white slide-in">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span class="block">Quiz Web App</span>
                        <span
                            class="text-xl sm:text-2xl lg:text-3xl font-normal text-purple-200 typewriter typing-animation border-r-2 border-purple-400">
                            Interactive Learning Platform
                        </span>
                    </h1>
                    <p class="text-lg sm:text-xl text-purple-100 mb-8 leading-relaxed">
                        A modern JavaScript-based quiz application featuring timed questions, multiple choice answers,
                        instant feedback, and local storage for a seamless interactive learning experience.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="https://github.com/Vibuddha94/quiz-web-app">
                            <button
                                class="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
                                <i class="fab fa-github mr-2"></i>View Source Code
                            </button>
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="floating">
                        <div class="modern-card rounded-3xl p-6 xl:p-8 shadow-2xl bg-white">
                            <div
                                class="code-highlight rounded-xl p-4 xl:p-6 text-green-400 font-mono text-xs sm:text-sm">
                                <div class="flex items-center space-x-2 mb-4">
                                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-400 ml-4 text-xs">script.js</span>
                                </div>
                                <div id="code-display" class="space-y-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-bold text-purple-600">Interactive Quiz Application</h3>
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                        A modern JavaScript-based quiz application designed to provide an engaging learning experience
                        with timed questions, multiple choice answers, instant feedback, and progress tracking
                        for interactive educational content.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">15+</div>
                            <div class="text-sm text-gray-600">Questions</div>
                        </div>
                        <div class="bg-pink-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-pink-600">4</div>
                            <div class="text-sm text-gray-600">Categories</div>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">JavaScript</div>
                            <div class="text-sm text-gray-600">ES6+</div>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">Timer</div>
                            <div class="text-sm text-gray-600">Functions</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-purple-100 to-pink-100 p-6 sm:p-8 rounded-2xl">
                    <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Key Capabilities</h4>
                    <ul class="space-y-3 text-sm sm:text-base">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-mobile-alt text-purple-500 mt-1"></i>
                            <span class="text-gray-700">Responsive design for all device sizes</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-clock text-pink-500 mt-1"></i>
                            <span class="text-gray-700">Timed questions with countdown functionality</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-chart-bar text-blue-500 mt-1"></i>
                            <span class="text-gray-700">Instant scoring and performance tracking</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-save text-red-500 mt-1"></i>
                            <span class="text-gray-700">Local storage for progress persistence</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-palette text-indigo-500 mt-1"></i>
                            <span class="text-gray-700">Modern UI with Tailwind CSS styling</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- Timed Questions -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-stopwatch text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Timed Questions</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Interactive countdown timer for each question with visual indicators,
                        automatic progression, and time pressure elements for engaging quiz experience.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Countdown Timer</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Auto Progress</span>
                    </div>
                </div>

                <!-- Multiple Choice -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-list-ul text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Multiple Choice</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Interactive multiple choice questions with clickable options,
                        hover effects, and immediate visual feedback for user selections.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">4 Options</span>
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Click Selection</span>
                    </div>
                </div>

                <!-- Instant Results -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Instant Results</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Real-time scoring system with immediate feedback, percentage calculations,
                        and detailed results display with correct answer explanations.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Live Scoring</span>
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Percentage</span>
                    </div>
                </div>

                <!-- Responsive Design -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-mobile-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Responsive Design</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Mobile-first responsive design ensuring optimal quiz experience across
                        all devices from desktop computers to mobile phones and tablets.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Mobile First</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Cross-device</span>
                    </div>
                </div>

                <!-- Local Storage -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-save text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Progress Storage</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Local storage implementation for saving quiz progress, high scores,
                        and user preferences with persistent data across browser sessions.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Local Storage</span>
                        <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">Persistence</span>
                    </div>
                </div>

                <!-- Event Handling -->
                <div class="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-mouse-pointer text-white text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Event Handling</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Advanced JavaScript event handling for user interactions including
                        click events, keyboard navigation, and dynamic content updates.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Click Events</span>
                        <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Dynamic UI</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <!-- Core Languages -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Core Languages</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full">
                            JavaScript ES6+
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full">
                            HTML5
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-full">
                            Tailwind CSS
                        </div>
                    </div>
                </div>

                <!-- Functionality -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Functionality</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full">
                            Timer Functions
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full">
                            Event Handling
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-purple-700 to-purple-800 text-white px-4 py-2 rounded-full">
                            DOM Manipulation
                        </div>
                    </div>
                </div>

                <!-- Data Management -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Data Management</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full">
                            Local Storage
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full">
                            JSON Data
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-2 rounded-full">
                            Array Methods
                        </div>
                    </div>
                </div>

                <!-- UI & UX -->
                <div class="tech-category text-center">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">UI & UX</h3>
                    <div class="space-y-3">
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full">
                            FontAwesome
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full">
                            CSS Animations
                        </div>
                        <div
                            class="tech-badge bg-gradient-to-r from-orange-700 to-orange-800 text-white px-4 py-2 rounded-full">
                            Responsive Grid
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Demo Section -->
    <section id="api" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Application Demo</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Quiz Flow -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-purple-600 mb-4">Quiz Flow</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-purple-500 text-white text-xs rounded font-mono">START</span>
                                <code class="text-sm text-gray-700">Quiz Initialization</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Start screen with instructions and category selection
                            </p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">TIMER</span>
                                <code class="text-sm text-gray-700">Countdown Display</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Visual timer countdown for each question</p>
                        </div>
                    </div>
                </div>

                <!-- Interactive Elements -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">Interactive Elements</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">CLICK</span>
                                <code class="text-sm text-gray-700">Answer Selection</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Click to select multiple choice answers</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-orange-500 text-white text-xs rounded font-mono">HOVER</span>
                                <code class="text-sm text-gray-700">Visual Feedback</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Hover effects on buttons and options</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-red-500 text-white text-xs rounded font-mono">NEXT</span>
                                <code class="text-sm text-gray-700">Question Navigation</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Automatic progression to next question</p>
                        </div>
                    </div>
                </div>

                <!-- Scoring System -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-pink-600 mb-4">Scoring System</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-pink-500 text-white text-xs rounded font-mono">SCORE</span>
                                <code class="text-sm text-gray-700">Real-time Calculation</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Live score calculation and percentage display</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span
                                    class="px-2 py-1 bg-purple-500 text-white text-xs rounded font-mono">RESULTS</span>
                                <code class="text-sm text-gray-700">Final Summary</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Detailed results with correct answers</p>
                        </div>
                    </div>
                </div>

                <!-- Data Persistence -->
                <div class="api-section bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-green-600 mb-4">Data Persistence</h3>
                    <div class="space-y-3">
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-green-500 text-white text-xs rounded font-mono">SAVE</span>
                                <code class="text-sm text-gray-700">Progress Storage</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Save quiz progress to local storage</p>
                        </div>
                        <div
                            class="api-endpoint p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors">
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-1 bg-indigo-500 text-white text-xs rounded font-mono">LOAD</span>
                                <code class="text-sm text-gray-700">Data Retrieval</code>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Load previous scores and preferences</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-6 sm:py-8 border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 text-center">
            <p class="text-gray-400 text-sm sm:text-base">
                © 2025 Vibuddha Vidarshana. Quiz Web App | Built with JavaScript ES6+ & Modern UI/UX
            </p>
        </div>
    </footer>

    <script src="/legacy-scripts/project5.js"></script>`,
  'nic-detail-extractor': String.raw`<!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <div
                        class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-id-card text-white text-lg sm:text-xl"></i>
                    </div>
                    <span class="text-lg sm:text-xl font-bold text-gray-800">NIC Detail Extractor</span>
                </div>
                <div class="hidden md:flex space-x-6 lg:space-x-8">
                    <a href="/"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors font-semibold">Home</a>
                    <a href="#overview"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Overview</a>
                    <a href="#features"
                        class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                    <a href="#tech-stack" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Tech
                        Stack</a>
                    <a href="#api" class="nav-link text-gray-700 hover:text-purple-600 transition-colors">Demo</a>
                </div>
                <button class="md:hidden text-gray-700 p-2" id="mobile-menu-toggle">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="mt-4 pb-4 px-4 sm:px-6 hidden" id="mobile-menu">
            <div class="flex flex-col space-y-3">
                <a href="/" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-emerald-400 py-2 px-2 font-semibold">Home</a>
                <a href="#overview" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-emerald-400 py-2 px-2">Overview</a>
                <a href="#features" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-emerald-400 py-2 px-2">Features</a>
                <a href="#tech-stack" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-emerald-400 py-2 px-2">Tech Stack</a>
                <a href="#api" onclick="closeMobileMenu()"
                    class="text-gray-700 hover:text-emerald-400 py-2 px-2">Demo</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section
        class="relative min-h-screen flex items-center bg-gradient-to-r from-green-400 to-green-600 overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-white slide-in">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span class="block bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">NIC
                            Detail Extractor</span>
                        <span
                            class="text-xl sm:text-2xl lg:text-3xl font-normal bg-gradient-to-r from-green-100 to-emerald-200 bg-clip-text text-transparent typewriter typing-animation border-r-2 border-green-400">
                            Sri Lankan NIC Parser
                        </span>
                    </h1>
                    <p
                        class="text-lg sm:text-xl bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent mb-8 leading-relaxed">
                        A modern React application that extracts and displays personal information from Sri Lankan
                        National Identity Card (NIC) numbers. Built with clean interface and powerful validation
                        using the lanka-nic library for accurate data parsing.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="https://github.com/Vibuddha94/nic-detail" target="_blank" rel="noopener noreferrer">
                            <button
                                class="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                                <i class="fab fa-github mr-2"></i>View Source Code
                            </button>
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="floating">
                        <div class="modern-card rounded-3xl p-6 xl:p-8 shadow-2xl bg-white">
                            <div
                                class="code-highlight rounded-xl p-4 xl:p-6 text-green-400 font-mono text-xs sm:text-sm">
                                <div class="flex items-center space-x-2 mb-4">
                                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-400 ml-4 text-xs">nicExtractor.js</span>
                                </div>
                                <div id="code-display" class="space-y-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-bold text-green-600">Sri Lankan NIC Parser</h3>
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
                        A modern React application that extracts and displays personal information from Sri Lankan
                        National Identity Card (NIC) numbers. Built with a clean, responsive interface and powerful
                        validation using the lanka-nic library for accurate data parsing.
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-green-50 p-3 sm:p-4 rounded-lg">
                            <div class="text-xl sm:text-2xl font-bold text-green-600 mb-1">100%</div>
                            <div class="text-gray-600 text-xs sm:text-sm">Accurate Parsing</div>
                        </div>
                        <div class="bg-green-50 p-3 sm:p-4 rounded-lg">
                            <div class="text-xl sm:text-2xl font-bold text-green-600 mb-1">React 19</div>
                            <div class="text-gray-600 text-xs sm:text-sm">Modern Framework</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-green-100 to-emerald-100 p-6 sm:p-8 rounded-2xl">
                    <h4 class="text-lg sm:text-xl font-bold text-green-800 mb-4">Key Information Extracted</h4>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-calendar-alt text-green-600"></i>
                            <span class="text-gray-700 text-sm sm:text-base">Date of Birth</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-venus-mars text-green-600"></i>
                            <span class="text-gray-700 text-sm sm:text-base">Gender Information</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-calculator text-green-600"></i>
                            <span class="text-gray-700 text-sm sm:text-base">Age Calculation</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-check-circle text-green-600"></i>
                            <span class="text-gray-700 text-sm sm:text-base">NIC Validation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Core Features</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4"></div>
                <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    Comprehensive NIC parsing with modern UI components and user-friendly interface
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div class="feature-card bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <i class="fas fa-id-card text-green-600 text-xl"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">NIC Validation</h3>
                    <p class="text-gray-600 text-sm sm:text-base">
                        Real-time validation of Sri Lankan NIC numbers with comprehensive error handling and user
                        feedback.
                    </p>
                </div>

                <div class="feature-card bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <i class="fas fa-calendar-day text-blue-600 text-xl"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Date Extraction</h3>
                    <p class="text-gray-600 text-sm sm:text-base">
                        Accurate birth date extraction with proper formatting and validation from NIC numbers.
                    </p>
                </div>

                <div class="feature-card bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <i class="fas fa-user text-purple-600 text-xl"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Gender Detection</h3>
                    <p class="text-gray-600 text-sm sm:text-base">
                        Automatic gender identification based on NIC number patterns and Sri Lankan ID conventions.
                    </p>
                </div>

                <div class="feature-card bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <i class="fas fa-mobile-alt text-red-600 text-xl"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Responsive Design</h3>
                    <p class="text-gray-600 text-sm sm:text-base">
                        Mobile-first responsive design ensuring optimal user experience across all devices.
                    </p>
                </div>

                <div class="feature-card bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <i class="fas fa-cogs text-yellow-600 text-xl"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Reusable Components</h3>
                    <p class="text-gray-600 text-sm sm:text-base">
                        Modular component architecture with reusable input fields, buttons, and form elements.
                    </p>
                </div>

                <div class="feature-card bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <i class="fas fa-shield-alt text-indigo-600 text-xl"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Input Validation</h3>
                    <p class="text-gray-600 text-sm sm:text-base">
                        Comprehensive input validation with real-time feedback and error prevention mechanisms.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4"></div>
                <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    Built with modern web technologies for optimal performance and maintainability
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <!-- Frontend -->
                <div class="tech-category bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl">
                    <h3 class="text-lg sm:text-xl font-bold text-blue-800 mb-4 sm:mb-6 flex items-center">
                        <i class="fas fa-laptop-code mr-3"></i>Frontend
                    </h3>
                    <div class="space-y-2 sm:space-y-3">
                        <div class="tech-badge bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            React 19
                        </div>
                        <div
                            class="tech-badge bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            Vite
                        </div>
                        <div class="tech-badge bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            CSS3
                        </div>
                        <div
                            class="tech-badge bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            HTML5
                        </div>
                    </div>
                </div>

                <!-- Libraries & Tools -->
                <div class="tech-category bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl">
                    <h3 class="text-lg sm:text-xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
                        <i class="fas fa-tools mr-3"></i>Libraries
                    </h3>
                    <div class="space-y-2 sm:space-y-3">
                        <div
                            class="tech-badge bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            lanka-nic
                        </div>
                        <div
                            class="tech-badge bg-yellow-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            JavaScript ES6+
                        </div>
                        <div class="tech-badge bg-gray-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            ESLint
                        </div>
                        <div
                            class="tech-badge bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            CSS Modules
                        </div>
                    </div>
                </div>

                <!-- Development -->
                <div class="tech-category bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl">
                    <h3 class="text-lg sm:text-xl font-bold text-purple-800 mb-4 sm:mb-6 flex items-center">
                        <i class="fas fa-code mr-3"></i>Development
                    </h3>
                    <div class="space-y-2 sm:space-y-3">
                        <div
                            class="tech-badge bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            Component Architecture
                        </div>
                        <div class="tech-badge bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            State Management
                        </div>
                        <div class="tech-badge bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            Form Validation
                        </div>
                        <div class="tech-badge bg-pink-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium">
                            Event Handling
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Demo Section -->
    <section id="api" class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Demo & Features</h2>
                <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4"></div>
                <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    Interactive demonstration of the NIC detail extraction capabilities
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                <!-- Demo Interface -->
                <div class="api-section bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Try the NIC Extractor</h3>
                    <div class="space-y-6">
                        <div class="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
                            <div class="text-center">
                                <i class="fas fa-id-card text-4xl text-green-500 mb-4"></i>
                                <h4 class="text-lg font-semibold text-gray-700 mb-2">Sample NIC Numbers</h4>
                                <p class="text-sm text-gray-600 mb-4">Try these sample NIC numbers:</p>
                                <div class="space-y-2 text-sm">
                                    <div class="bg-white p-2 rounded border">942151234V - Born 1994/05/15 (Male)</div>
                                    <div class="bg-white p-2 rounded border">875432109V - Born 1987/12/25 (Female)</div>
                                    <div class="bg-white p-2 rounded border">199412345678 - Born 1994/05/15 (Male)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature List -->
                <div class="space-y-4 sm:space-y-6">
                    <div class="api-endpoint bg-white p-4 sm:p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
                        <div class="flex items-center justify-between mb-2">
                            <span
                                class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">EXTRACT</span>
                            <code class="text-sm text-gray-600">Birth Date</code>
                        </div>
                        <p class="text-gray-700 text-sm">
                            Extracts accurate birth date from both old format (10 digits) and new format (12 digits) NIC
                            numbers.
                        </p>
                    </div>

                    <div class="api-endpoint bg-white p-4 sm:p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                        <div class="flex items-center justify-between mb-2">
                            <span
                                class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">IDENTIFY</span>
                            <code class="text-sm text-gray-600">Gender</code>
                        </div>
                        <p class="text-gray-700 text-sm">
                            Determines gender based on the day number pattern in Sri Lankan NIC format.
                        </p>
                    </div>

                    <div class="api-endpoint bg-white p-4 sm:p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
                        <div class="flex items-center justify-between mb-2">
                            <span
                                class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">VALIDATE</span>
                            <code class="text-sm text-gray-600">NIC Format</code>
                        </div>
                        <p class="text-gray-700 text-sm">
                            Validates NIC number format and structure according to Sri Lankan NIC standards.
                        </p>
                    </div>

                    <div class="api-endpoint bg-white p-4 sm:p-6 rounded-xl border-l-4 border-orange-500 shadow-sm">
                        <div class="flex items-center justify-between mb-2">
                            <span
                                class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">DISPLAY</span>
                            <code class="text-sm text-gray-600">User Interface</code>
                        </div>
                        <p class="text-gray-700 text-sm">
                            Clean, intuitive interface with real-time validation and instant feedback display.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 py-8 sm:py-12">
        <div class="container mx-auto px-4 sm:px-6 text-center">
            <div class="flex justify-center space-x-6 mb-6 sm:mb-8">
                <a href="https://github.com/Vibuddha94" target="_blank" rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-github text-xl sm:text-2xl"></i>
                </a>
                <a href="https://linkedin.com/in/vibuddha-vidarshana" target="_blank" rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-linkedin text-xl sm:text-2xl"></i>
                </a>
            </div>
            <p class="text-gray-400 text-sm sm:text-base">
                © 2025 Vibuddha Vidarshana. Built with React & Vite for NIC detail extraction.
            </p>
        </div>
    </footer>

    <script src="/legacy-scripts/project6.js"></script>`,
};
