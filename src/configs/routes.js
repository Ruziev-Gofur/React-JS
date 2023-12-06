import React from 'react'


// bu avtorizatsiyadan o'tmagan foydalanuvchilar ko'rishi uchun Routelar
export const authRoutes = [
    {
        key: "register",
        path: "/register",
        component: React.lazy(() => import('pages/auth/register'))      
    },
    {
        key: "login",
        path: "/login",
        component: React.lazy(() => import('pages/auth/login'))      
    },
]        

// bu avtorizatsiyadan o'tgan foydalanuvchilar uchun Routelar
export const protectedRoutes = [
    {
        key: "home",
        path: "/",
        authority: ["admin", "user"],
        component: React.lazy(() => import('pages/private/home'))
    },
    {
        key: "books",
        path: "/books",
        authority: ["admin", "user"],
        component: React.lazy(() => import('pages/private/books'))
    },
    {
        key: "profile",
        path: "/profile",
        authority: ["admin", "user"],
        component: React.lazy(() => import('pages/private/profile'))
    },
    {
        key: "security",
        path: "/security",
        authority: ["admin", "user"],
        component: React.lazy(() => import('pages/private/profile/security'))
    },
    {
        key: "settings",
        path: "/settings",
        authority: ["admin", "user"],
        component: React.lazy(() => import('pages/private/profile/settings'))
    },
    {
        key: "create-book",
        path: "/create-book",
        authority: ["admin"],
        component: React.lazy(() => import('pages/private/profile/crate/create-book'))
    },
    {
        key: "create-author",
        path: "/create-author",
        authority: ["admin"],
        component: React.lazy(() => import('pages/private/profile/crate/create-author'))
    },
]       