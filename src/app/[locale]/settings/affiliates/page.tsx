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
        <SettingItem t="程序设置" tclass="text-xl" d="查看和更新您的联盟设置">
          <div>
            <Button>保存更改</Button>
          </div>
        </SettingItem>
        <SettingItem t="联属网络营销中心简介" required d="通过 Pilotle 联盟中心激活您的联盟计划并允许新的联盟应用程序">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode"></Label>
          </div>

        </SettingItem>
        <SettingItem t="会员注册网址" required d="任何人都可以通过此链接申请成为您的会员">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="附属机构批准" required d="自动批准所有新的联属网络营销申请">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode"></Label>
          </div>
        </SettingItem>
        <SettingItem t="会员推荐网址" required d="设置您的默认联属营销 URL ">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="会员跟踪脚本" required d="将跟踪代码复制并粘贴到您网站的 <head> 或结束正文标记之前">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="最低赔付额" required d="联属会员在收到自动付款之前必须达到的最低余额">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="推荐人类型" required d="归功于第一个或最后一个推荐人">
          <div className="max-w-96 w-1/2">
            <Select defaultValue="light">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">第一个推荐人</SelectItem>
                <SelectItem value="dark">最后推荐人</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </SettingItem>
        <SettingItem t="跟踪长度" required d="跟踪代码的有效期是多少天">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>


        <SettingItem t="委员会" required d="设置佣金类型和金额">
          <div className="max-w-96 w-1/2">
            <Input />
          </div>
        </SettingItem>
        <SettingItem t="认购佣金" required d="奖励附属公司订阅续订付款佣金">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">启用定期佣金</Label>
          </div>
        </SettingItem>
        <SettingItem t="附属产品" required d="选择联营公司可以推广哪些产品，并为每个产品设置自定义佣金类型和金额">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">启用特定产品并设置自定义费率</Label>
          </div>
        </SettingItem>
      </div>
    </DLayout>
  )
}
export default PageDashBoard