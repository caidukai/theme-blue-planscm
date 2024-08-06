import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "@/components/modules/header"
import Footer from "@/components/modules/Footer"
import SelectionOne from "@/components/modules/SelectionOne"
import SelectionTwo from "@/components/modules/SelectionTwo"
import SelectionThree from "@/components/modules/SelectionThree"
import SelectionFour from "@/components/modules/SelectionFour"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SelectionOne />
        <SelectionTwo />
        <SelectionThree />
        <SelectionFour />
        <section
          id="testimonials"
          aria-label="What our customers are saying"
          className="bg-slate-50 py-20 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                您来对了地方
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                您和众多成功的初创公司、软件公司以及数字创作者一样，选择Pilotle作为您的业务支撑。加入我们的平台，成为不断壮大的创新者、创造者、推动者和颠覆者社区的一员。在这里，您与优秀的公司同行.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          Pilotle is so easy to use I can’t help but wonder if it’s
                          really doing the things the government expects me to do.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Sheryl Berge
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            CEO at Lynch LLC
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image width={56}
                            height={56} src="/assets/images/avatar-1.png" alt="图片" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          I’m trying to get a hold of someone in support, I’m in a lot
                          of trouble right now and they are saying it has something to
                          do with my books. Please get back to me right away.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Amy Hahn
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Director at Velocity Industries
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image width={56}
                            height={56} src="/assets/images/avatar-1.png" alt="图片" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          The best part about Pilotle is every time I pay my employees,
                          my bank balance doesn’t go down like it used to. Looking
                          forward to spending this extra cash when I figure out why my
                          card is being declined.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Leland Kiehn
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Founder of Kiehn and Sons
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image width={56}
                            height={56} src="/assets/images/avatar-1.png" alt="图片" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          There are so many things I had to do with my old software
                          that I just don’t do at all with Pilotle. Suspicious but I
                          can’t say I don’t love it.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Erin Powlowski
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            COO at Armstrong Inc
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image width={56}
                            height={56} src="/assets/images/avatar-1.png" alt="图片" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          I used to have to remit tax to the EU and with Pilotle I
                          somehow don’t have to do that anymore. Nervous to travel
                          there now though.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Peter Renolds
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Founder of West Inc
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image width={56}
                            height={56} src="/assets/images/avatar-1.png" alt="图片" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          This is the fourth email I’ve sent to your support team. I
                          am literally being held in jail for tax fraud. Please answer
                          your damn emails, this is important.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Amy Hahn
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Director at Velocity Industries
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image width={56}
                            height={56} src="/assets/images/avatar-1.png" alt="图片" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="pricing"
          aria-label="Pricing"
          className="bg-slate-900 py-20 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                <span className="relative whitespace-nowrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 281 40"
                    preserveAspectRatio="none"
                    className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                    />
                  </svg>
                  <span className="relative">Simple pricing,</span>
                </span>{" "}
                {/* */}for everyone.
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                It doesn’t matter what size your business is, our software won’t work
                well for you.
              </p>
            </div>
            <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
              <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                <h3 className="mt-5 font-display text-lg text-white">Starter</h3>
                <p className="mt-2 text-base text-slate-400">
                  Good for anyone who is self-employed and just getting started.
                </p>
                <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                  $9
                </p>
                <ul
                  role="list"
                  className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
                >
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Send 10 quotes and invoices</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Connect up to 2 bank accounts</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Track up to 15 expenses per month</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Manual payroll support</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Export up to 3 reports</span>
                  </li>
                </ul>
                <a
                  className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"

                  color="white"
                  aria-label="Get started with the Starter plan for $9"
                  href="/register"
                >
                  Get started
                </a>
              </section>
              <section className="flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-blue-600 py-8 lg:order-none">
                <h3 className="mt-5 font-display text-lg text-white">
                  Small business
                </h3>
                <p className="mt-2 text-base text-white">
                  Perfect for small / medium sized businesses.
                </p>
                <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                  $15
                </p>
                <ul
                  role="list"
                  className="order-last mt-10 flex flex-col gap-y-3 text-sm text-white"
                >
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Send 25 quotes and invoices</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Connect up to 5 bank accounts</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Track up to 50 expenses per month</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Automated payroll support</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Export up to 12 reports</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Bulk reconcile transactions</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Track in multiple currencies</span>
                  </li>
                </ul>
                <a
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8"

                  color="white"
                  aria-label="Get started with the Small business plan for $15"
                  href="/register"
                >
                  Get started
                </a>
              </section>
              <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                <h3 className="mt-5 font-display text-lg text-white">Enterprise</h3>
                <p className="mt-2 text-base text-slate-400">
                  For even the biggest enterprise companies.
                </p>
                <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                  $39
                </p>
                <ul
                  role="list"
                  className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
                >
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Send unlimited quotes and invoices</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Connect up to 15 bank accounts</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Track up to 200 expenses per month</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Automated payroll support</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">
                      Export up to 25 reports, including TPS
                    </span>
                  </li>
                </ul>
                <a
                  className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"

                  color="white"
                  aria-label="Get started with the Enterprise plan for $39"
                  href="/register"
                >
                  Get started
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
        >
          <img
            alt=""
            loading="lazy"
            width={1558}
            height={946}
            decoding="async"
            data-nimg={1}
            className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
            style={{ color: "transparent" }}
            src="/assets/images/background-faqs.55d2e36a.jpg"
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="faq-title"
                className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                If you can’t find what you’re looking for, email our support team and
                if you’re lucky someone will get back to you.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Does Pilotle handle VAT?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Well no, but if you move your company offshore you can probably
                      ignore it.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Can I pay for my subscription via purchase order?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Absolutely, we are happy to take your money in all forms.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      How do I apply for a job at Pilotle?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      We only hire our customers, so subscribe for a minimum of 6
                      months and then let’s talk.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      What was that testimonial about tax fraud all about?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Pilotle is just a software application, ultimately your books are
                      your responsibility.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Pilotle sounds horrible but why do I still feel compelled to
                      purchase?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      This is the power of excellent visual design. You just can’t
                      resist it, no matter how poorly it actually functions.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      I found other companies called Pilotle, are you sure you can use
                      this name?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Honestly not sure at all. We haven’t actually incorporated or
                      anything, we just thought it sounded cool and made this website.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      How do you generate reports?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      You just tell us what data you need a report for, and we get our
                      kids to create beautiful charts for you using only the finest
                      crayons.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Can we expect more inventory features?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      In life it’s really better to never expect anything at all.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      I lost my password, how do I get into my account?
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      Send us an email and we will send you a copy of our latest
                      password spreadsheet so you can find your information.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

