'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import CustomInput from './CustomInput'
import { Loader2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { authFormSchema } from '@/lib/utils'

const formSchema = z.object({
    email: z.string().email(),
  })

const AuthForms = ({type}:{type:string}) => {
 const [user, setUser] = useState(null);
 const [isLoading, setisLoading] = useState(false);
 const formSchema=authFormSchema(type);

         // 1. Define your form.
  const form = useForm<z.infer<typeof ormSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email : "",
      password:''
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true)
    console.log(values)
    setisLoading(false)
  }

  return (

    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className=" cursor-pointer flex items-center gap-1 ">
                    <Image 
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                      
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Nextus</h1>
                    </Link>
                    <div className='flex flex-col gap-1 md:gap-3'>
                        <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                            {user
                            ?'Link Account'
                            :type === 'sign-in'
                            ? 'Sign In'
                            : 'Sign Up'
                            
                            }
                            <p className='text-16 font-normal text-gray-600'>
                                {user 
                                    ?'Link your account to get started'
                                    :'please enter your details'
                                }

                            </p>
                        </h1>

                    </div>
        </header>
        {user?(
            <div className='flex flex-col gap-4'>
                {/*plaidlink*/}
            </div>
        ):(
            <>
            
                        
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    
                {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                    <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
                  </div>
                  <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
                  <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='state' label="State" placeholder='Example: NY' />
                    <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                    <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                  </div>
                </>
              )} 
                <  CustomInput 
                 control={form.control} name ='email'label="Email" placeholder='Enter Your Email' />
                <  CustomInput 
                 control={form.control} name ='password'label="password" placeholder='Enter Your password' />
                  <div className='flex flex-col gap-4'>
                    <Button type="submit" disabled={isLoading} className='form-btn'>
                    {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' 
                    ? 'Sign In' : 'Sign Up'}
                    </Button>
                    </div>
                </form>
                </Form>
                <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
            
            </>
        )}
    </section>
  )
}

export default AuthForms