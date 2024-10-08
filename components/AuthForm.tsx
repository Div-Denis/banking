"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// npx shadcn-ui@latest add she安装
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import PlaidLink from './PlaidLink'


const AuthForm = ({ type } : { type: string }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  

  const formSchema = authFormSchema(type)

  // 1. 定义你的表单
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: '',
        password: '',
    },
  })

  // 2. 定义提交处理进程 , 把函数改为异步函数
  const onSubmit = async(data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      // Sign up with Appwrite & create plain plain token
      
      if(type === 'sign-up'){
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        }
        const newUser = await signUp(userData)

        setUser(newUser)
      }

      if(type === 'sign-in'){
        const response = await signIn({
          email: data.email,
          password: data.password,
        })

        if(response) router.push('/')
      }
    } catch (error) {
      console.log(error);
      
    }finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href="/" className='cursor-pointer flex items-center gap-1'>
               <Image 
                 src="/icons/logo.svg"
                 width={34}
                 height={34}
                 alt='Horizon logo'
               />
               <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
            </Link>

            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user
                      ? 'Link Account'
                      : type === 'sign-in'
                      ? 'Sign In'
                      : 'Sign Up'
                    }
                    <p className='text-16 font-normal text-gray-600'>
                        {user
                          ? 'Link you account to get started'
                          : 'Please enter your details'
                        }
                    </p>
                </h1>
            </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>
                {/* plaidLink */}
                <PlaidLink user={user} variant='primary' />
            </div>
        ): ( 
            <>
               <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                              <div className='form-item'>
                                <FormLabel className='form-label'>
                                  Email
                                </FormLabel>
                                <div className='flex w-full flex-col'>
                                  <FormControl>
                                    <Input 
                                      placeholder='Enter your email'
                                      className='input-class'
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className='form-message mt-2'/>
                                </div>
                              </div>
                          )}
                        /> */}

                       {/* 注册页面 */}
                       {type === 'sign-up' && (
                        <>

                          <div className='flex gap-4'>
                            <CustomInput 
                              control={form.control}
                              name='firstName' label='First Name'
                              placeholder='Enter your first names'
                            />

                            <CustomInput 
                              control={form.control}
                              name='lastName' label='Last Name'
                              placeholder='Enter your last names'
                            />
                          </div>

                          <CustomInput 
                            control={form.control}
                            name='address1' label='Address'
                            placeholder='Enter your specific address'
                          />

                          <CustomInput 
                            control={form.control}
                            name='city' label='City'
                            placeholder='Enter your city'
                          />

                          <div className='flex gap-4'>
                            <CustomInput 
                              control={form.control}
                              name='state' label='State'
                              placeholder='ex: NY'
                            />

                            <CustomInput 
                              control={form.control}
                              name='postalCode' label='Postal Code'
                              placeholder='ex:11101'
                            />
                          </div>

                          <div className='flex gap-4'>
                            <CustomInput 
                              control={form.control}
                              name='dateOfBirth' label='Date of Birth'
                              placeholder='yyyy-mm-dd'
                            />

                            <CustomInput 
                              control={form.control}
                              name='ssn' label='SSN'
                              placeholder='ex:1234'
                            />
                          </div>
                        </>
                       )}


                      {/* 简化了上面的流程 登录页面*/}
                      <CustomInput 
                        control={form.control}
                        name='email'
                        label="Email"
                        placeholder="Enter your email"
                      />

                      <CustomInput 
                        control={form.control}
                        name='password'
                        label="Password"
                        placeholder="Enter your password"
                      />

                      {/* <CustomInput 
                        control={form.control}
                        name='username'
                        label="Username"
                        placeholder="Enter your username"
                      /> */}

                        {/* <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                              <div className='form-item'>
                                <FormLabel className='form-label'>
                                  Password
                                </FormLabel>
                                <div className='flex w-full flex-col'>
                                  <FormControl>
                                    <Input 
                                      placeholder='Enter your password'
                                      className='input-class'
                                      type='password'
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className='form-message mt-2'/>
                                </div>
                              </div>
                          )}
                        /> */}

                        <div className='flex flex-col gap-4'>
                          <Button type="submit" disabled={isLoading} className='form-btn'>
                            {isLoading ? (
                              <>
                                <Loader2 size={20} className='animate-spin' /> &nbsp;
                                Loading...
                              </>
                            ): type === 'sign-in'
                            ? 'Sign In' : 'Sign Up'
                            }
                          </Button>
                        </div>
                    </form>
                </Form>

                <footer className='flex justify-center gap-1'>
                  <p className='text-14 font-normal text-gray-600'>
                    {type === 'sign-in'
                      ? "Don't have an account?"
                      : "Already have an account?"
                    }</p>
                    <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                      {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                    </Link>
                </footer>
            </>
        )} 
    </section>
  )
}

export default AuthForm