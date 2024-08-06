'use client'
import DLayout from "@/components/modules/DLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Icons from "@/components/ui/icons"
import TopHeader from "@/components/modules/TopHeader"
import Link from "next/link"
const PageDashBoard = () => {
  return (
    <DLayout>
      <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <TopHeader title="产品">
          <Link href="/products/new">
            <Button variant="default"><Icons.add className="mr-2" /> 创建产品</Button>
          </Link>
        </TopHeader>
        <div className="flex gap-4 mb-6">
          <Input placeholder="" />
          {/* <MicroscopeIcon className="text-gray-400" />
          <BellIcon className="text-gray-400" />
          <CircleUserIcon className="text-gray-400" /> */}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="flex flex-col items-center justify-center p-4">
            <span className="text-2xl font-semibold">1</span>
            <span className="text-gray-500">Total products</span>
          </Card>
          <Card className="flex flex-col items-center justify-center p-4">
            <span className="text-2xl font-semibold">0</span>
            <span className="text-gray-500">Total sales</span>
          </Card>
          <Card className="flex flex-col items-center justify-center p-4">
            <span className="text-2xl font-semibold">$0.00</span>
            <span className="text-gray-500">Total revenue</span>
          </Card>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Sales</TableHead>
              <TableHead>Total Revenue</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox id="product1" />
                <Label className="ml-2" htmlFor="product1">
                  Annual membership
                </Label>
              </TableCell>
              <TableCell>$14.99</TableCell>
              <TableCell>
                <Badge variant="secondary">Published</Badge>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost">Share</Button>
                <Icons.more className="text-gray-400" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="pt-4">
          <span className="text-sm text-gray-500">1 result</span>
        </div>
      </div>
    </DLayout>
  )
}
export default PageDashBoard