'use client'
import DLayout from "@/components/modules/DLayout"
import SettingItem from "@/components/modules/SettingItem"
import SettingTabs from "@/components/modules/SettingTabs"
import TopHeader from "@/components/modules/TopHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Icons from "@/components/ui/icons"
const PageDashBoard = () => {
  return (
    <DLayout>
      <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <TopHeader title="设置">

        </TopHeader>
        <SettingTabs />
        <SettingItem t="邮箱设置" tclass="text-xl" d="查看和更新您的电子邮件营销设置">
          <div>
            <Button>保存更改</Button>
          </div>
        </SettingItem>
        <SettingItem t="公司/组织名称" required d="">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="住址" required d="法律要求遵守CAN-SPAM法案和国际反垃圾邮件法律">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>

        <SettingItem t="默认发件人" required d="您的电子邮件将来自的名称">
          <div className="max-w-96 w-1/2 flex">
            <Input />
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="双重选择加入" d="通过API或集成加入的订阅者需要双重选择过程">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode"></Label>
          </div>
        </SettingItem>
        <SettingItem t="轨道打开" d="轨道打开时，您的电子邮件中嵌入了一个不可见的信标">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode"></Label>
          </div>
        </SettingItem>
        <SettingItem t="权限提醒" d="为了防止虚假的垃圾邮件报告，提醒订阅者为什么会收到您的电子邮件。将显示在您的电子邮件页脚中。">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Textarea placeholder="您之所以收到此电子邮件，是因为您购买了[公司名称]的产品或订阅了营销电子邮件" />
          </div>
        </SettingItem>
        <SettingItem t="Pilotle 品牌" d="表达爱意，并在电子邮件底部展示Pilotle的标志。可以通过付费计划隐藏。">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode"></Label>
          </div>
        </SettingItem>


      </div>
    </DLayout>
  )
}
export default PageDashBoard