import {
    Button,
    Card,
    Dropdown,
    Input,
    Table
} from '@/components/ui';
import type { SyntheticEvent } from 'react';
import {
    HiDotsVertical,
    HiOutlineSearch,
    HiPlus
} from 'react-icons/hi';
import PriorityTag from '@/components/shared/PriorityTag';
import { useState } from 'react';
import PatientFormModal from './modals/patientForm';

const { Tr, Th, Td, THead, TBody } = Table

const statusColor: Record<
    number,
    {
        label: string
        dotClass: string
        textClass: string
    }
> = {
    1: {
        label: 'Oui',
        dotClass: 'bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100',
        textClass: 'text-emerald-600 dark:text-emerald-400',
    },
    0: { label: 'Non', 
        dotClass: 'bg-red-100 dark:bg-red-500/20 dark:text-red-100', 
        textClass: 'text-red-600 dark:text-red-500'
    },
}

const patientList = [
    {
        id: 0,
        fileNumber: 'ND_753159789',
        title: 'Mr.',
        firstname: 'FOTEU',
        lastname: 'Joseph',
        age: 35,
        genre: 'Homme',
        nationality: 'Camerounais(e)',
        city: 'Douala',
        phone: "+237 655-985-423",
        email: 'josephfoteu21@gmail.com',
        profession: 'Enseignant',
        insurance: true,
    },
    {
        id: 0,
        fileNumber: 'ND_453156253',
        title: 'Mlle',
        firstname: 'KAMDEM',
        lastname: 'Victorine',
        age: 43,
        genre: 'Femme',
        nationality: 'Camerounais(e)',
        city: 'Limbé',
        phone: "+237 695-865-684",
        email: 'vickamdem102@gmail.com',
        profession: 'Cuisinière',
        insurance: false,
    },
    {
        id: 0,
        fileNumber: 'ND_685214536',
        title: 'Enft.',
        firstname: 'MBEUMO',
        lastname: 'Junior',
        age: 9,
        genre: 'Homme',
        nationality: 'Camerounais(e)',
        city: 'Douala',
        phone: "+237 657-852-357",
        email: 'mbeumojunior423@gmail.com',
        profession: 'Ecolier',
        insurance: true,
    },
    {
        id: 0,
        fileNumber: 'ND_753159789',
        title: 'Mr.',
        firstname: 'FOTEU',
        lastname: 'Joseph',
        age: 35,
        genre: 'Homme',
        nationality: 'Camerounais(e)',
        city: 'Douala',
        phone: "+237 655-985-423",
        email: 'josephfoteu21@gmail.com',
        profession: 'Enseignant',
        insurance: false,
    },
    {
        id: 0,
        fileNumber: 'ND_453156253',
        title: 'Mlle',
        firstname: 'KAMDEM',
        lastname: 'Victorine',
        age: 43,
        genre: 'Femme',
        nationality: 'Camerounais(e)',
        city: 'Limbé',
        phone: "+237 695-865-684",
        email: 'vickamdem102@gmail.com',
        profession: 'Cuisinière',
        insurance: true,
    },
    {
        id: 0,
        fileNumber: 'ND_685214536',
        title: 'Enft.',
        firstname: 'MBEUMO',
        lastname: 'Junior',
        age: 9,
        genre: 'Homme',
        nationality: 'Camerounais(e)',
        city: 'Douala',
        phone: "+237 657-852-357",
        email: 'mbeumojunior423@gmail.com',
        profession: 'Ecolier',
        insurance: false,
    },
    {
        id: 0,
        fileNumber: 'ND_753159789',
        title: 'Mr.',
        firstname: 'FOTEU',
        lastname: 'Joseph',
        age: 35,
        genre: 'Homme',
        nationality: 'Camerounais(e)',
        city: 'Douala',
        phone: "+237 655-985-423",
        email: 'josephfoteu21@gmail.com',
        profession: 'Enseignant',
        insurance: true,
    },
    {
        id: 0,
        fileNumber: 'ND_453156253',
        title: 'Mlle',
        firstname: 'KAMDEM',
        lastname: 'Victorine',
        age: 43,
        genre: 'Femme',
        nationality: 'Camerounais(e)',
        city: 'Limbé',
        phone: "+237 695-865-684",
        email: 'vickamdem102@gmail.com',
        profession: 'Cuisinière',
        insurance: false,
    },
    {
        id: 0,
        fileNumber: 'ND_685214536',
        title: 'Enft.',
        firstname: 'MBEUMO',
        lastname: 'Junior',
        age: 9,
        genre: 'Homme',
        nationality: 'Camerounais(e)',
        city: 'Douala',
        phone: "+237 657-852-357",
        email: 'mbeumojunior423@gmail.com',
        profession: 'Ecolier',
        insurance: true,
    },
    
];

// *********************************************************
const dropdownItems = [
    { key: 'a', name: 'Details', url:'#' },
    { key: 'b', name: 'Terminer', url:'#' },
    { key: 'c', name: 'Modifier', url:'#' },
    { key: 'd', name: 'Archiver', url:'#' },
    { key: 'e', name: 'Supprimer', url:'#' },
]    
const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
    console.log('Dropdown Item Clicked', eventKey, e)
}    
const onDropdownClick = (e: SyntheticEvent) => {
    console.log('Dropdown Clicked', e)
}
// *********************************************************

const PatientList = () => {

    const [patientFormIsOpen, setPatientFormIsOpen] = useState(false);
    const handlePatientFormModal = (val:boolean) => {
        document.body.style.overflow = val === true ? 'hidden' : '';
        setPatientFormIsOpen(val);
    };
    
    return (
        <div className="h-full w-full">
            <Card className="mb-4 px-0">
            <div className="px-3 pb-6">
                <div className="flex items-center justify-between mb-6">
                    <h4>Liste des patients</h4>
                    <div className="flex items-center gap-4">
                        <Input
                            placeholder="Rechercher un patient"
                            prefix={<HiOutlineSearch className="text-xs" />}
                            className='max-w-[200px]'
                        />
                        <Button
                            className="ltr:mr-2 rtl:ml-2 mb-0"
                            variant="solid"
                            size='sm'
                            icon={<HiPlus/>}
                            onClick={()=>handlePatientFormModal(true)}
                        >
                            Nouveau patient
                        </Button>
                        <PatientFormModal
                        dialogIsOpen={patientFormIsOpen}
                        setIsOpen={handlePatientFormModal}
                        />
                    </div>
                </div>
                
                
                <div className="">
                    <Table className='table-auto'>
                        <THead>
                            <Tr>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Numero de dossier</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Civilité</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Nom</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Prenom</Th>                            
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Age</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Sexe</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Nationalité</Th>                                
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Ville de résidence</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Téléphone personel</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Email</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Profession</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Assuré(e)</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Actions</Th>
                            </Tr>
                        </THead>
                        <TBody>

                        {patientList.map((patient, index) => (
                            <Tr key={index}>                                
                                <Td className={"text-xs text-[#0F94CD] align-middle"} style={{paddingLeft:'0px'}}>{patient.fileNumber}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.title}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.firstname}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.lastname}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.age}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.genre}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.nationality}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.city}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.phone}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.email}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.profession}</Td>                                
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>
                                    <PriorityTag 
                                    label={statusColor[patient.insurance ? 1:0].label}
                                    bgColor={statusColor[patient.insurance ? 1:0].dotClass}
                                    textColor={statusColor[patient.insurance ? 1:0].textClass} 
                                    />
                                </Td>
                                
                                <Td className={"text-xs align-middle"}>
                                    <div>
                                    <Dropdown 
                                    renderTitle={
                                        <HiDotsVertical size={18} className='cursor-pointer'/>
                                    }
                                    menuClass="p-0 min-w-[100px] "
                                    onClick={onDropdownClick}
                                    placement={'bottom-end'}
                                    >
                                        {dropdownItems.map((item, dindex) => (
                                            <Dropdown.Item
                                                key={item.key}
                                                eventKey={item.key}
                                                onSelect={onDropdownItemClick}
                                            >
                                                {dindex===0 ?
                                                <span className="text-black"
                                                >
                                                {item.name}
                                                </span>
                                                :
                                                <span className="text-black">
                                                {item.name}
                                                </span>
                                                }
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown>
                                    
                                    </div>
                                </Td>
                            </Tr>
                        ))}

                        </TBody>
                    </Table>
                </div>
            </div>
            </Card>
            
            
        </div>
    )
}

export default PatientList
