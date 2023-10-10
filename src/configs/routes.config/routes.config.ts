import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import naelRoute from './naelRoute'
import pagesRoute from './pagesRoute'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    ...naelRoute,
    ...pagesRoute
]