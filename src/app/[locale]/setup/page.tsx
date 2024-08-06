'use client'
import { Button } from "@/components/ui/button"
import Icons from "@/components/ui/icons"
import DLayout from "@/components/modules/DLayout"

function PageSetup() {
  return (
    <DLayout>
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-4">恭喜新店开业！</h1>
      <p className="text-center text-sm mb-8">完成这些简单的步骤即可启动并运行您的商店</p>
      <ol className="space-y-8">
        <li className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-4">1</div>
          <div className="flex-1">
            <p className="font-semibold">Create your store</p>
            <p className="text-sm">Take the first step towards making a living online</p>
          </div>
          <Icons.checkone size="28" className="text-green-600 " />
        </li>
        <li className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-4">2</div>
          <div className="flex-1">
            <p className="font-semibold">Fine tune your store settings</p>
            <p className="text-sm">Add a logo, contact email, and more</p>
          </div>
          <Icons.checkone size="28" className="text-green-600 " />
        </li>
        <li className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-4">3</div>
          <div className="flex-1">
            <p className="font-semibold">Activate your store</p>
            <p className="text-sm">Enable live payments and all features</p>
          </div>
          <Icons.checkone size="28" className="text-green-600 " />
        </li>
        <li className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-4">4</div>
          <div className="flex-1">
            <p className="font-semibold">Create your first product</p>
            <p className="text-sm">Create and share your products</p>
          </div>
          <Icons.checkone size="28" className="text-green-600 " />
        </li>
        <li className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-4">5</div>
          <div className="flex-1">
            <p className="font-semibold">Add discount code</p>
            <p className="text-sm">Level up your sales with discounts</p>
          </div>
          <Button className="ml-auto" variant="secondary">
            Add Discount
          </Button>
        </li>
        <li className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-4">6</div>
          <div className="flex-1">
            <p className="font-semibold">Connect a bank account</p>
            <p className="text-sm">Set up payout details so you can get paid</p>
          </div>
          <Button className="ml-auto" disabled>Connect bank</Button>
        </li>
      </ol>
    </div>
    </DLayout>
  )
}
export default PageSetup 

