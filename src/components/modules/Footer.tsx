const Footer = () =>{
  return (
    <footer className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="py-16">
      <img className="h-10 mx-auto" src="/assets/images/logo.jpg" alt="Pilotle Logo" />
      {/* <nav className="mt-10 text-sm" aria-label="quick links">
        <div className="-my-1 flex justify-center gap-x-6">
          <a
            className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            href="#features"
          >
            Features
          </a>
          <a
            className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            href="#pricing"
          >
            Pricing
          </a>
        </div>
      </nav> */}
    </div>
    <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
      <div className="flex gap-x-6">
        <a className="group" aria-label="Pilotle on X" href="#">
          <svg
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
          </svg>
        </a>
      </div>
      <p className="mt-6 text-sm text-slate-500 sm:mt-0">
        Copyright © {/* */}2024{/* */} Pilotle. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer