
import { Button } from "@/components/ui/button"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"
import { Input } from "@/components/ui/input"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

function ModalPageNew() {
  return (
    <Drawer open={true} direction="right" >
      <DrawerContent >
        <DrawerHeader>
          <DrawerTitle>创建产品</DrawerTitle>
          <DrawerDescription>将新产品添加到您的商店</DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 py-4 px-4 w-96">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-md font-semibold">通用</h2>
                {/* <ChevronUpIcon className="h-5 w-5 text-gray-400" /> */}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-6">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700" htmlFor="name">
                    产品名称
                    <span className="text-red-500">*</span>
                  </label>
                  <Input className="mt-1" id="name" placeholder="" />
                  <p className="mt-2 text-xs text-gray-500">
                    给你的产品一个简短明了的名字
                    <br />
                    50-60个字符是搜索引擎的推荐长度。
                  </p>
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm font-medium text-gray-700" htmlFor="description">
                    产品简介
                  </label>
                  <Input className="mt-1" id="description" placeholder="" />
                  <p className="mt-2 text-xs text-gray-500">
                    给你的产品一个简短而清晰的描述。
                    <br />
                    120-160个字符是搜索引擎的推荐长度。
                  </p>
                </div>

              </div>
            </CollapsibleContent>
          </Collapsible>
          {/* <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <Label className="text-right" htmlFor="theme">
              Theme
            </Label>
            <Select defaultValue="light">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <Label className="text-right" htmlFor="language">
              Language
            </Label>
            <Select defaultValue="en">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <Label className="text-right" htmlFor="timezone">
              Timezone
            </Label>
            <Select defaultValue="UTC">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="EST">EST</SelectItem>
                <SelectItem value="PST">PST</SelectItem>
                <SelectItem value="CET">CET</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <Label className="text-right" htmlFor="notifications">
              Notifications
            </Label>
            <Toggle defaultChecked id="notifications">
              Receive notifications
            </Toggle>
          </div> */}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            {/* <Button variant="outline">Close</Button> */}
          </DrawerClose>
          <Button type="submit">立即创建</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
export default ModalPageNew