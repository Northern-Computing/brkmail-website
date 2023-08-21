import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-center text-4xl font-bold mb-6">
          Welcome to BrkMail.app
        </p>
        <p className="mb-4 text-xl">
          The ultimate marketing automation platform for comedians and comedy clubs.
        </p>
      </div>

      <div className="relative flex place-items-center mb-16">
        <Image
          src="/logo.png"
          alt="BrkMail Logo"
          width={240}
          height={80}
          priority
        />
      </div>


      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Features
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the powerful features of BrkMail.app to elevate your comedy marketing.
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Pricing
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Affordable plans tailored to fit your needs. From beginners to established comedians.
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Request Demo
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Reach out to request a demo of BrkMail.app.
          </p>
        </a>
      </div>

    </main>
  )
}
