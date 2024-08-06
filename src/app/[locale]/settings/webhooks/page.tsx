'use client'
import DLayout from "@/components/modules/DLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import SettingItem from "@/components/modules/SettingItem"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Icons from "@/components/ui/icons"
import SettingTabs from "@/components/modules/SettingTabs"
import TopHeader from "@/components/modules/TopHeader"
const PageDashBoard = () => {
  return (
    <DLayout>
      <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <TopHeader title="设置"></TopHeader>
        <SettingTabs />
        <SettingItem t="Webhooks" tclass="text-xl" d="使用webhook来监听事件并引发反应">
          <div>
            <Button variant="ghost" className="text-gray-400" ><Icons.plus size={26} /></Button>
          </div>
        </SettingItem>
      </div>
    </DLayout>
  )
}
export default PageDashBoard