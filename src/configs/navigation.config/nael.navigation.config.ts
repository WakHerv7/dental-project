import { APP_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const naelNavigationConfig: NavigationTree[] = [
    {
        key: 'apps.dashboard',
        path:  `${APP_PREFIX_PATH}/dashboard`,
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
        extraClass : "mb-4" 
    },
    {
        key: 'clinic.patientRecord',
        path: `${APP_PREFIX_PATH}/clinic/patient-record`,
        title: 'Dossier patient',
        translateKey: 'nav.singleMenuItem',
        icon: 'patientRecord',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'agenda.dashboard',
        path: `${APP_PREFIX_PATH}/agenda/dashboard`,
        title: 'Agenda',
        translateKey: 'nav.singleMenuItem',
        icon: 'agenda',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'clinic.prescriptions',
        path: `${APP_PREFIX_PATH}/clinic/prescriptions`,
        title: 'Ordonnances',
        translateKey: 'nav.singleMenuItem',
        icon: 'prescription',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'clinic.medicalDocs',
        path: `${APP_PREFIX_PATH}/clinic/medical-docs`,
        title: 'Documents médicaux',
        translateKey: 'nav.singleMenuItem',
        icon: 'medicalDocs',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'clinic.laboratory',
        path: `${APP_PREFIX_PATH}/clinic/laboratory`,
        title: 'Laboratoire',
        translateKey: 'nav.singleMenuItem',
        icon: 'laboratory',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'clinic.insurance',
        path: `${APP_PREFIX_PATH}/clinic/insurances`,
        title: 'Assurances',
        translateKey: 'nav.singleMenuItem',
        icon: 'insurance',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'clinic.billing',
        path: `${APP_PREFIX_PATH}/clinic/billing`,
        title: 'Facturation',
        translateKey: 'nav.singleMenuItem',
        icon: 'billing',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'clinic.dentalChart',
        path: `${APP_PREFIX_PATH}/clinic/dental-chart`,
        title: 'Schéma dentaire',
        translateKey: 'nav.singleMenuItem',
        icon: 'dentalChart',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'admin.privacy',
        path: `${APP_PREFIX_PATH}/admin/privacy`,
        title: 'Privacy',
        translateKey: 'nav.privacy',
        icon: 'privacy',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'admin.consultationsManagement',
        path: `${APP_PREFIX_PATH}/admin/consultations-management`,
        title: 'Gestion des consultations',
        translateKey: 'nav.logout',
        icon: 'consultationsManagement',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]

export default naelNavigationConfig
