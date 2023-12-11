import React from 'react'
import { userRole } from 'store'

export default function CheckAuth({ role, children}) {
    console.log(role);
    console.log(userRole);

    return role.some(el => el === userRole) ? children : <h1>Not Found</h1>
}
