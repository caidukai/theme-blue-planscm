import Link from "next/link"
import { settingNavs } from "@/lib/navs"
import { usePathname } from 'next/navigation';
import cls from 'classnames'
const SettingTabs = () => {
  const u = usePathname()
  console.log(u)
  return (
    <nav className="flex border-b border-gray-200">
      <div className="-mb-px flex space-x-8">
        {settingNavs.map((item) => {
          return (
            <Link
              className={cls('hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 text-sm', { 'border-black text-black': u === item.h, 'border-transparent text-gray-400': u != item.h })}
              href={item.h}
            >
              {item.t}
            </Link>
          )

        })}
      </div>
    </nav >
  )
}



export default SettingTabs