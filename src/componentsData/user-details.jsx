import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../components/mode-toggle";
import { userUser } from "./UserContext";

const UserDetails = () => {
    const { selectedUser } = userUser();

    if (!selectedUser) {
        return <h1>User not Found</h1>;
    }

    return (
        <div>
            <div className="flex justify-between items-start h-[10%] py-5 mb-5 px-12 ">
                <img src="https://i.ibb.co/HB94PKs/Screenshot-2025-01-19-114522.png" className="h-16 w-16 rounded-md" />
                <ModeToggle />
            </div>
            <Link to='/' className="font-bold px-5 ml-auto mr-auto">Go Back</Link>
            <div className="px-14 pb-5 max-sm:px-6 w-full flex justify-center items-center">
                <div className="border-2 rounded-2xl w-[40%] h-[60%] max-sm:w-full mt-3 p-7 flex flex-col justify-center items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="h-20 w-20 rounded flex justify-center items-center" />
                    <h1 className="font-bold p-2">{selectedUser?.name}</h1>
                    <div className="self-start flex flex-col  px-3 py-3 gap-1">

                    <p className="text-sm font-semibold text-gray-600   max-sm:px-2"><span className="font-bold">Email : </span>{selectedUser?.email}</p>
                    <p className="text-sm font-semibold text-gray-600   max-sm:px-2"><span className="font-bold">  Phone : </span>{selectedUser?.phone}</p>
                    </div>
                    <div className="flex justify-between w-full gap-2 px-3">

                    <div >
                        <p className="font-bold text-sm text-gray-600 ">Company Name:</p>
                        <p className="text-sm font-semibold text-gray-600 max-sm:px-2">{selectedUser.company.name}</p>
                    </div>
                    <div >
                        <p className="font-bold text-sm text-gray-600 ">Website : </p>
                        <Link className="text-sm font-semibold text-blue-500 max-sm:px-2">{selectedUser.website}</Link>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserDetails;