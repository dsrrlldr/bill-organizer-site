<template>
  <div>
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div class="container mx-auto px-4 py-16">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Bill Organizer</h1>
            <p class="text-xl mb-6">Never miss a bill payment again. Track, organize, and manage all your monthly expenses in one place.</p>
            <div class="flex space-x-4">
              <a href="https://chromewebstore.google.com/detail/monthly-bill-tracker/phlfhkmdofajnbhgmbmjkbkdgppgoppb?authuser=0&hl=en" class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Add to Chrome</a>
              <a href="#features" class="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">Learn More</a>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="bg-white p-0 rounded-lg shadow-xl">
              <img src="/bill-organizer.png" alt="Monthly Bill Tracker Extension Screenshot" class="rounded-lg w-full">
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section id="features" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="text-indigo-500 text-3xl mb-4">
              <i class="fas fa-calendar-check"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Bill Reminders</h3>
            <p class="text-gray-600">Get timely notifications so you never miss a payment deadline again.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="text-indigo-500 text-3xl mb-4">
              <i class="fas fa-chart-pie"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Expense Overview</h3>
            <p class="text-gray-600">Visualize your monthly expenses and track spending patterns.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="text-indigo-500 text-3xl mb-4">
              <i class="fas fa-lock"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Privacy First</h3>
            <p class="text-gray-600">Your financial data stays on your device, with no cloud storage.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="flex flex-col items-center">
            <div class="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
            <h3 class="text-lg font-bold mb-2">Install Extension</h3>
            <p class="text-gray-600">Add Monthly Bill Tracker to Chrome in just one click.</p>
          </div>

          <div class="flex flex-col items-center">
            <div class="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
            <h3 class="text-lg font-bold mb-2">Add Your Bills</h3>
            <p class="text-gray-600">Enter your recurring expenses and payment dates.</p>
          </div>

          <div class="flex flex-col items-center">
            <div class="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
            <h3 class="text-lg font-bold mb-2">Get Reminders</h3>
            <p class="text-gray-600">Receive notifications before payments are due.</p>
          </div>

          <div class="flex flex-col items-center">
            <div class="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
            <h3 class="text-lg font-bold mb-2">Stay Organized</h3>
            <p class="text-gray-600">Track your payments and manage your budget easily.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Take Control of Your Bills?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Join hundreds of users who have simplified their bill management with our Chrome extension.</p>
        <a href="https://chromewebstore.google.com/detail/monthly-bill-tracker/phlfhkmdofajnbhgmbmjkbkdgppgoppb?authuser=0&hl=en" class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block">Add to Chrome - It's Free</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h3 class="text-xl font-bold">Monthly Bill Tracker</h3>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-twitter text-xl"></i></a>
            <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-facebook text-xl"></i></a>
            <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-instagram text-xl"></i></a>
            <a href="#" class="hover:text-blue-400 transition"><i class="fas fa-envelope text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
