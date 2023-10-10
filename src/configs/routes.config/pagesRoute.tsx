import { lazy } from 'react'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const pagesRoute: Routes = [
    {
        key: 'pages.featureInDevelopment',
        path: '/feature-not-found',
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
]
 
export default pagesRoute
