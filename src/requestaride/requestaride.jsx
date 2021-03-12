import React from 'react'

const Requestaride = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full space-y-10">
                <div>
                    <h2 className="mt-6 text-center text-6xl font-extrabold text-gray-900 flex justify-left ">Request a Ride</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-0 space-y-6">
                        <div className="flex flex-col">
                            <label for="info" className="text-lg">Info:</label>
                            <select name="info" id="info" class="appearance-none rounded-none relative block w-full px-3 py-2 border
                             border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                             focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                             focus:z-10 sm:text-sm">
                                <optgroup label="Info">
                                    <option value="" disabled selected>(Optional)</option>
                                    <option value="pain">Pain</option>
                                    <option value="check-up">Check Up</option>
                                    <option value="dying">Dying</option>
                                </optgroup>

                            </select>
                        </div>
                        <div>
                            <p className="text-lg">Your Location</p>
                            <label for="your-location" class="sr-only">Your location</label>
                            <input id="your-location" name="location" type="text"
                            required class="appearance-none rounded-none relative block w-full px-3 py-2 border
                             border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                             focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                             focus:z-10 sm:text-sm" placeholder="Your location">
                             </input>
                             
                        </div>

                        <div className="flex flex-col">
                            <label for="info" className="text-lg">Available Hospitals:</label>
                            <select name="available-hospitals" id="available-hospitals" class="appearance-none rounded-none relative block w-full px-3 py-2 border
                             border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                             focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                             focus:z-10 sm:text-sm">
                                <optgroup label="Available Hospitals">
                                    <option value="" disabled selected>(Required)</option>
                                    <option value="pain">bruh hospital</option>
                                    <option value="check-up">emergen-c hospital</option>
                                    <option value="dying">uh oh wrong arm hospital</option>
                                </optgroup>

                            </select>
                        </div>
                        {/* <div>
                            <p className="text-lg">Available Hospitals</p>
                            <label for="available-hospitals" class="sr-only">Available hospitals</label>
                            <input id="available-hospitals" name="hospitals" type="text"
                             required class="appearance-none rounded-none relative block w-full px-3 py-2 border
                              border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md 
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 
                              sm:text-sm" placeholder="Available hospitals"/>
                        </div> */}
                        <div className="flex justify-between py-2">
                        <button type="button" class="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                            text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-2" >
                                Cancel
                            </button>
                            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                            text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-2">
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        
    )
}


export default Requestaride;
