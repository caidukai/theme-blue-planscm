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
import Icons from "@/components/ui/icons"
const PageDashBoard = () => {
  return (
    <DLayout>
      <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <TopHeader title="设置">

        </TopHeader>
        <SettingTabs />
        <SettingItem t="商店设置" tclass="text-xl" d="查看并更新您的店铺详细信息">
          <div>
            <Button>保存更改</Button>
          </div>
        </SettingItem>
        <SettingItem t="Logo" d="">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant="secondary" className="mx-4">选择文件</Button>
            <span className="text-gray-400 text-sm">JPG, GIF or PNG. 1MB Max.</span>
            <Icons.delete className="text-gray-400 ml-4 cursor-pointer"></Icons.delete>
          </div>
        </SettingItem>
        <SettingItem t="商店名称" required d="显示在收据、发票等上">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="商店URL" required d="您的店铺在此地址可见">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="邮箱" required d="客户可以在哪里与您联系以获得支持。显示在收据和发票上">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="国家" required d="商店注册地">
          <div className="max-w-96 w-1/2">
            <Select defaultValue="light">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">中国</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </SettingItem>
        <SettingItem t="货币" required d="您商店的主要货币">
          <div className="max-w-96 w-1/2">
            <Select defaultValue="light">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">USD - US Dollar</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </SettingItem>

        <SettingItem t="含税定价" required d="价格应该包括销售税并从总额中扣除，还是单独计算并在顶部收费？">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">启用含税定价</Label>
          </div>

        </SettingItem>
        <SettingItem t="Apple Pay" required d="允许客户使用Apple pay支付">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode"></Label>
          </div>

        </SettingItem>
        <SettingItem t="Google Pay" required d="允许客户使用谷歌支付进行支付">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="text-sm"></Label>
          </div>

        </SettingItem>
        <SettingItem t="订阅续订电子邮件" required d="价格应该包括销售税并从总额中扣除，还是单独计算并在顶部收费？">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
          </div>
        </SettingItem>

      </div>
    </DLayout>
  )
}
export default PageDashBoard