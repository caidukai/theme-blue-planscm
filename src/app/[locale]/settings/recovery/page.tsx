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
import { Card } from "@/components/ui/card"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuItem, DropdownMenuGroup, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal, DropdownMenuSub, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
const PageDashBoard = () => {
  return (
    <DLayout>
      <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <TopHeader title="设置">

        </TopHeader>
        <SettingTabs />
        <SettingItem t="付款恢复" tclass="text-xl" d="管理商店的付款恢复设置">
          <div>
            <Button>保存更改</Button>
          </div>
        </SettingItem>
        <SettingItem t="废弃的购物车电子邮件" required d="向将产品留在购物车但未完成购买的客户发送 3 封提醒电子邮件">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">启用自动废弃购物车电子邮件</Label>
          </div>
        </SettingItem>
        <SettingItem t="续订提醒" required d="在订阅到期前 7 天向客户发送提醒电子邮件">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">发送订阅续订提醒电子邮件</Label>
          </div>
        </SettingItem>
        <SettingItem t="自动复原" required d="当客户付款失败并成为“逾期”时，Pilotle 会在 2 周内尝试重试其银行卡 4 次，然后将付款标记为“未付款” ">
          <div className="max-w-96 w-1/2 flex items-center ">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">启用付款自动恢复</Label>
          </div>
        </SettingItem>

        <SettingItem t="催款管理" required d="查看和更新​​商店的催款设置">
          <div></div>
        </SettingItem>
        <SettingItem t="催款" required d="当付款变为“未付款”时，发送邮件鼓励客户解决问题的电子邮件">
          <div className="max-w-96 w-1/2 ">
            <div className="flex items-center ">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">启用催款</Label>
            </div>
            {/* <div className="flex items-center ">

              <Label htmlFor="airplane-mode">启用付款自动恢复</Label>
            </div> */}
          </div>
        </SettingItem>
        <SettingItem t="客户提醒" required d="发送最多 5 封客户提醒电子邮件" className="items-start">
          <div className="max-w-96 w-1/2">
            <Card className="p-4 my-2">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icons.airplane size={28} className="text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-700 pb-2">"需要有关 订阅付款的帮助吗？"</p>
                  <p className="text-xs text-gray-500">当日发送自动发送失败</p>
                </div>
                <div className="ml-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div><Icons.more /></div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                      <DropdownMenuItem>
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </Card>
            <Card className="p-4 my-2">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icons.airplane size={28} className="text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-700 pb-2">"需要有关 订阅付款的帮助吗？"</p>
                  <p className="text-xs text-gray-500">当日发送自动发送失败</p>
                </div>
                <div className="ml-4">
                  <Icons.more />
                </div>
              </div>
            </Card>
            <Card className="p-4 my-2">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icons.airplane size={28} className="text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-700 pb-2">"需要有关 订阅付款的帮助吗？"</p>
                  <p className="text-xs text-gray-500">当日发送自动发送失败</p>
                </div>
                <div className="ml-4">
                  <Icons.more />
                </div>
              </div>
            </Card>
            <Card className="p-4 my-2">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icons.airplane size={28} className="text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-700 pb-2">"需要有关 订阅付款的帮助吗？"</p>
                  <p className="text-xs text-gray-500">当日发送自动发送失败</p>
                </div>
                <div className="ml-4">
                  <Icons.more />
                </div>
              </div>
            </Card>
            <Card className="p-4 my-2">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icons.airplane size={28} className="text-gray-400" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-700 pb-2">"需要有关 订阅付款的帮助吗？"</p>
                  <p className="text-xs text-gray-500">当日发送自动发送失败</p>
                </div>
                <div className="ml-4">
                  <Icons.more />
                </div>
              </div>
            </Card>
          </div>
        </SettingItem>



      </div>
    </DLayout>
  )
}
export default PageDashBoard