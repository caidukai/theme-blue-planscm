'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import Icon from "@/components/ui/icons"
import { useState } from "react"
import cls from 'classnames'
import _ from 'lodash'
import { storeNavs, settingNavs } from "@/lib/navs"
const kvStoreNavs = _.keyBy(storeNavs, 'h')
const kvSettingNavs = _.keyBy(settingNavs, 'h')
const CollapseStore = ({ children }: any) => {
  const u = usePathname()
  const [open, setOpen] = useState(_.has(kvStoreNavs, u))
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <div
        onClick={handleClick}
        className="select-none cursor-pointer flex items-center px-2 gap-2 rounded-md py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
      >
        <Icon.weixinmarket theme="outline" size="18" /> 商店
      </div>
      <div className={cls("overflow-hidden transition-all	", { 'h-0': !open })}>
        {storeNavs.map((it, idx) => {
          return (
            <Link
              key={idx}
              className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
              href={it.h}
            >
              {it.t}
            </Link>
          )
        })}
      </div>
    </>
  )
}



const CollapseSet = ({ children }: any) => {
  const u = usePathname()
  const [open, setOpen] = useState(_.has(kvSettingNavs, u))
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <div
        onClick={handleClick}
        className="select-none cursor-pointer flex items-center px-2 gap-2 rounded-md py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
      >
        <Icon.setting theme="outline" size="18" /> 设置
      </div>
      <div className={cls("overflow-hidden transition-all	", { 'h-0': !open })}>
        {settingNavs.map((it, idx) => {
          return (
            <Link
              key={idx}
              className="flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
              href={it.h}
            >
              {it.t}
            </Link>
          )
        })}
      </div>
    </>
  )
}


export default function Component(props: any) {
  return (
    <>
      <div className="fixed h-screen flex h-screen w-60 flex-col  bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="flex h-16 shrink-0 items-center  px-6 dark:border-gray-800">
          <Link className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50" href="#">
            <img className="h-8" src="/assets/images/logo.jpg" alt="Logo" />
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-6">
          <nav className="space-y-1">
            <Link
              className="flex items-center px-2 gap-2 rounded-md py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
              href="/dashboard"
            >
              <Icon.home theme="outline" size="18" /> 首页
            </Link>

            <CollapseStore />


            <CollapseSet />
            <Link
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
              href="/setup"
            >
              <Icon.settingconfig theme="outline" size="18" />
              审核
            </Link>
          </nav>
        </div>
      </div>
      <main className="ds-main pl-60">
        {props.children}
      </main>

    </>
  )
}
