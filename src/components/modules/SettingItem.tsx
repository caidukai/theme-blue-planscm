
interface SettingItemProps {
  t: string, d: string,
  tclass?: string
  children: any,
  required?: boolean,
  className?: string
}
export default function SettingItem({ children, t, d, tclass = '', required = false, className = 'items-center' }: SettingItemProps) {
  return (
    <div className={`flex justify-between  border-b py-6 ${className}`}>
      <div>
        <h1 className={"mb-2 " + tclass}>{t}{required && <span className="text-red-500">*</span>}</h1>
        <p className="text-sm text-gray-400">{d}</p>
      </div>
      {children}
    </div>
  )
}