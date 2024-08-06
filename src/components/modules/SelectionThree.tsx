import Image from "next/image"
const SelectionThree = () => {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            了解您的业务和客户
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            经营软件公司需要一套独特的见解，包括免费试用转化率、月度重复收入（MRR）、流失率等。深入了解您的客户，这样您就能理解您的业务需求，提升营销效果，将您的业务推向新的高度。
          </p>
        </div>
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
          <div>
            <div className="mx-auto max-w-2xl">
              <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <defs>
                    <linearGradient
                      id=":R2menla:"
                      x1="11.5"
                      y1={18}
                      x2={36}
                      y2="15.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".194" stopColor="#fff" />
                      <stop offset={1} stopColor="#6692F1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                    stroke="url(#:R2menla:)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-blue-600">
                了解您的收入
              </h3>
              <p className="mt-2 font-display text-xl text-slate-900">
                清晰的指标与数据
              </p>
              <p className="mt-4 text-sm text-slate-600">
                像您的业务一样，准确的指标至关重要。<strong>以自信的姿态引领您的业务</strong>。没有什么比模糊的指标更令人沮丧.
              </p>
            </div>
            <div className="relative mt-10 pb-10">
              <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
              <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                <Image width={1688}
                  className="w-full"
                  height={856} src="/assets/images/profit-loss.png" alt="图片" />
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto max-w-2xl">
              <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <path
                    opacity=".5"
                    d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                    fill="#fff"
                  />
                  <path
                    opacity=".3"
                    d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                    fill="#fff"
                  />
                  <path
                    d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-blue-600">
                实时收入洞察
              </h3>
              <p className="mt-2 font-display text-xl text-slate-900">
                监控业务指标.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                放心地监控与您业务相关的最重要的指标。从MRR、退款、平均订单价值等等.
              </p>
            </div>
            <div className="relative mt-10 pb-10">
              <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
              <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                <Image width={1688}
                  className="w-full"
                  height={856} src="/assets/images/profit-loss.png" alt="图片" />
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto max-w-2xl">
              <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <path
                    opacity=".5"
                    d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                    fill="#fff"
                  />
                  <path
                    d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-blue-600">了解您的受众</h3>
              <p className="mt-2 font-display text-xl text-slate-900">
                清晰的用户画像.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                通过将您的电子商务和客户数据集中在一个位置，您可以以全新的方式<strong>与您的受众建立联系</strong>。背景信息至关重要.
              </p>
            </div>
            <div className="relative mt-10 pb-10">
              <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
              <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                <Image width={1688}
                  className="w-full"
                  height={856} src="/assets/images/profit-loss.png" alt="图片" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-20 lg:block">
          <div
            className="grid grid-cols-3 gap-x-8"
            role="tablist"
            aria-orientation="horizontal"
          >
            <div className="relative">
              <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <defs>
                    <linearGradient
                      id=":Rarenla:"
                      x1="11.5"
                      y1={18}
                      x2={36}
                      y2="15.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".194" stopColor="#fff" />
                      <stop offset={1} stopColor="#6692F1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                    stroke="url(#:Rarenla:)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-blue-600">
                <button
                  className="ui-not-focus-visible:outline-none"
                  id="headlessui-tabs-tab-:Rirenla:"
                  role="tab"
                  type="button"
                  aria-selected="true"
                  tabIndex={0}
                  data-headlessui-state="selected"
                  aria-controls="headlessui-tabs-panel-:Rbbenla:"
                >
                  <span className="absolute inset-0" />
                  了解您的收入
                </button>
              </h3>
              <p className="mt-2 font-display text-xl text-slate-900">
                清晰的指标与数据
              </p>
              <p className="mt-4 text-sm text-slate-600">
                像您的业务一样，准确的指标至关重要。<strong>以自信的姿态引领您的业务</strong>。没有什么比模糊的指标更令人沮丧.
              </p>
            </div>
            <div className="relative opacity-75 hover:opacity-100">
              <div className="w-9 rounded-lg bg-slate-500">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <path
                    opacity=".5"
                    d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                    fill="#fff"
                  />
                  <path
                    opacity=".3"
                    d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                    fill="#fff"
                  />
                  <path
                    d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-slate-600">
                <button
                  className="ui-not-focus-visible:outline-none"
                  id="headlessui-tabs-tab-:Rkrenla:"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  tabIndex={-1}
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-:Rjbenla:"
                >
                  <span className="absolute inset-0" />
                  实时收入洞察
                </button>
              </h3>
              <p className="mt-2 font-display text-xl text-slate-900">
                监控业务指标
              </p>
              <p className="mt-4 text-sm text-slate-600">
                放心地监控与您业务相关的最重要的指标。从MRR、退款、平均订单价值等等.
              </p>
            </div>
            <div className="relative opacity-75 hover:opacity-100">
              <div className="w-9 rounded-lg bg-slate-500">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <path
                    opacity=".5"
                    d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                    fill="#fff"
                  />
                  <path
                    d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-slate-600">
                <button
                  className="ui-not-focus-visible:outline-none"
                  id="headlessui-tabs-tab-:Rmrenla:"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  tabIndex={-1}
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-:Rrbenla:"
                >
                  <span className="absolute inset-0" />
                  了解您的受众
                </button>
              </h3>
              <p className="mt-2 font-display text-xl text-slate-900">
                清晰的用户画像
              </p>
              <p className="mt-4 text-sm text-slate-600">
                通过将您的电子商务和客户数据集中在一个位置，您可以以全新的方式<strong>与您的受众建立联系</strong>。背景信息至关重要.
              </p>
            </div>
          </div>
          <div className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              <div
                className="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none"
                style={{ transform: "translateX(-0%)" }}
                aria-hidden="false"
                id="headlessui-tabs-panel-:Rbbenla:"
                role="tabpanel"
                tabIndex={0}
                data-headlessui-state="selected"
                aria-labelledby="headlessui-tabs-tab-:Rirenla:"
              >
                <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <Image width={1688}
                    className="w-full"
                    height={856} src="/assets/images/profit-loss.png" alt="图片" />
                </div>
              </div>
              <div
                className="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none opacity-60"
                style={{ transform: "translateX(-0%)" }}
                aria-hidden="true"
                id="headlessui-tabs-panel-:Rjbenla:"
                role="tabpanel"
                tabIndex={-1}
                data-headlessui-state=""
                aria-labelledby="headlessui-tabs-tab-:Rkrenla:"
              >
                <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <Image width={1688}
                    className="w-full"
                    height={856} src="/assets/images/profit-loss.png" alt="图片" />
                </div>
              </div>
              <div
                className="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none opacity-60"
                style={{ transform: "translateX(-0%)" }}
                aria-hidden="true"
                id="headlessui-tabs-panel-:Rrbenla:"
                role="tabpanel"
                tabIndex={-1}
                data-headlessui-state=""
                aria-labelledby="headlessui-tabs-tab-:Rmrenla:"
              >
                <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <Image width={1688}
                    className="w-full"
                    height={856} src="/assets/images/profit-loss.png" alt="图片" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectionThree