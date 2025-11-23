export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 dark:from-black dark:to-gray-950">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 shadow-lg">
          <span className="text-6xl">✉️</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Thank You!</h1>

        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          You've successfully subscribed to our newsletter. We'll keep you updated on new features
          and releases.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
