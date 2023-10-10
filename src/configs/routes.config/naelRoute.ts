import { lazy } from 'react'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const naelRoute: Routes = [
    {
        key: 'apps.dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
    {
        key: 'agenda.dashboard',
        path: `${APP_PREFIX_PATH}/agenda/dashboard`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },

    {
        key: 'clinic.patientRecord',
        path: `${APP_PREFIX_PATH}/clinic/patient-record`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
    {
        key: 'clinic.prescriptions',
        path: `${APP_PREFIX_PATH}/clinic/prescriptions`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
    {
        key: 'clinic.medicalDocs',
        path: `${APP_PREFIX_PATH}/clinic/medical-docs`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
    {
        key: 'clinic.laboratory',
        path: `${APP_PREFIX_PATH}/clinic/laboratory`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
    {
        key: 'clinic.insurance',
        path: `${APP_PREFIX_PATH}/clinic/insurances`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
    {
        key: 'clinic.billing',
        path: `${APP_PREFIX_PATH}/clinic/billing`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
    {
        key: 'clinic.dentalChart',
        path: `${APP_PREFIX_PATH}/clinic/dental-chart`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },

    {
        key: 'admin.privacy',
        path: `${APP_PREFIX_PATH}/admin/privacy`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },

    {
        key: 'admin.consultationsManagement',
        path: `${APP_PREFIX_PATH}/admin/consultations-management`,
        component: lazy(() => import('@/views/pages/FeatureInDevelopment')),
        authority: [ADMIN, USER],
    },
]

export default naelRoute
