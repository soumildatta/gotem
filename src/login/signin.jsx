import React from 'react'
import logo from '../shared/logo_v1.png'

const Signin = () => {
    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <img class="mx-auto h-20 w-auto" src={logo} alt="Workflow"/>
                    <h2 class="mt-3 text-center text-3xl font-extrabold text-gray-900">
                        Gotem
                    </h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        New User?  &nbsp;
                        <a href="#" class="font-medium text-primaryBlue hover:text-blue-600">
                          Sign Up
                        </a>
                    </p>
                </div>

                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"/>
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-primaryBlue hover:text-blue-600">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryBlue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Log Into Your Account
                        </button>
                    </div>
                </form>

                <p class="mt-2 text-center text-sm text-gray-600">
                    <a href="#" class="font-medium text-primaryBlue hover:text-blue-600">
                        RETURN HOME
                    </a>
                </p>
                
            </div>
        </div>
    )
}

export default Signin;