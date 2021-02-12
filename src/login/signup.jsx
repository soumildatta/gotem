import React from 'react'

const Signup = () => {
    return (
        <div className="grid justify-items-center rounded-lg w-4/12 mx-auto my-16 p-15 bg-gray-300">
            
            <br/> <p className="text-6xl"> Gotem </p> <br/>

            <form className="w-2/3">
                <div>
                    Email <br/>
                    <input type="email" className="w-full p-2 rounded-md"/>  
                </div>

                <div>
                    Password<br/>
                    <input type="password" className="w-full p-2 rounded-md" autoComplete="new-password"/>   
                </div>

                <div>
                    Log in as <br/>
                    <select size="2" className="w-full p-2 rounded-md ">
                        <option value="driver" className="p-2 hover:bg-gray-200"> Driver </option>
                        <option value="passenger" className="p-2 hover:bg-gray-200"> Passenger </option>
                    </select>
                </div>
                    
                <br/>
                <input value="Sign Up" className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white w-full text-3xl" type="button"/>
            </form>
            
            <br/> <a href="#" className="text-blue-600 hover:underline"> RETURN HOME </a> <br/>
        </div>
    )
}

export default Signup;
