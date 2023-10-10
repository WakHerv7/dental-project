import { AgendaSvg, BillingSvg, ConsultationsManagementSvg, DentalChartSvg, HomeSvg, InsuranceSvg, LaboratorySvg, MedicalDocSvg, PatientRecordSvg, PrescriptionSvg, PrivacySvg } from '@/assets/svg'
import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer, 
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
} from 'react-icons/hi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <HomeSvg />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
    prescription: <PrescriptionSvg />,
    agenda: <AgendaSvg />,
    medicalDocs : <MedicalDocSvg />,
    patientRecord: <PatientRecordSvg />,
    laboratory: <LaboratorySvg />,
    insurance: <InsuranceSvg />,
    billing: <BillingSvg />,
    dentalChart : <DentalChartSvg />,
    privacy: <PrivacySvg />,
    consultationsManagement : <ConsultationsManagementSvg />,
    
}

export default navigationIcon
