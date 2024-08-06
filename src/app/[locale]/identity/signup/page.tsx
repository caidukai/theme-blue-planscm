'use client'
import React from 'react';
import { Button } from "@/components/ui/button"
import {Google} from "@icon-park/react"

const PageSignin = () =>{

  const handleSubmit = (e:React.FormEvent)=>{
    e.stopPropagation()
    e.preventDefault()
    window.location.href = '/dashboard'
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="/assets/images/logo.jpg" alt="Pilotle Logo" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">注册 Pilotle</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">邮箱</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">密码</label>
            <div className="text-sm">

            </div>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">确认密码</label>
            <div className="text-sm">

            </div>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div onClick={handleSubmit}>
          <Button  className="w-full" variant="secondary">登录</Button>
        </div>
      </form>
      
      <p className="mt-2 mb-8 text-right text-sm text-gray-500">
        {/* <a href="#" className="text-xs text-gray-400 hover:text-blue-600 mx-2">忘记密码?</a> */}
        <a href="/identity/signup" className="text-xs  text-gray-400 hover:text-blue-600  mx-2">已有账号？立即登录</a>
      </p>
      <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-100 px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400 rounded-md">或</span>
          </div>
        </div>
      <div className="my-4">
        <Button variant="outline" className='w-full'>
          <Google className='mr-2' theme="outline" size="22" />
            Google
        </Button>
      </div>
    </div>
</div>

  )
}

export default PageSignin