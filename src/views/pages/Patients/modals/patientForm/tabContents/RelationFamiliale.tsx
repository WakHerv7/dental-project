import {
    Button,
    Card,
    Dropdown,
    Input,
    Table,
    FormItem,
    Select,
    Upload,
    AvatarInput,
    Radio,
} from '@/components/ui';
import {
    Field,
    Form,
    Formik,
    FieldProps,
    FormikTouched,
    FormikErrors,
    FormikProps,
    FieldInputProps,
} from 'formik'
import DoubleSidedImage from '@/components/shared/DoubleSidedImage'
import type { PropsWithChildren } from 'react';
import type { SyntheticEvent } from 'react';
import {
    HiDotsVertical,
    HiOutlineSearch,
    HiPlus,
    HiOutlinePlus,
} from 'react-icons/hi';
import PriorityTag from '@/components/shared/PriorityTag';
import { useState } from 'react';
import { HiReply } from 'react-icons/hi';
import SectionTitle from '@/components/ui/SectionTitle';

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
type Option = {
    value: string
    label: string
}
const categories: Option[] = [
    { value: 'a', label: 'Catégorie A'},
    { value: 'b', label: 'Catégorie B'},
    { value: 'c', label: 'Catégorie C'},
];

const patientList = [
    {
        id: 0,
        fileNumber: 'ND_753159789',        
        firstname: 'FOTEU',
        lastname: 'Joseph',
        age: 35,
        relation: 'Père',                
        phone: "+237 655-985-423",        
        profession: 'Enseignant',
        insurance: true,
    },
    {
        id: 0,
        fileNumber: 'ND_453156253',        
        firstname: 'KAMDEM',
        lastname: 'Victorine',
        age: 43,
        relation: 'Mère',                
        phone: "+237 695-865-684",        
        profession: 'Cuisinière',
        insurance: false,
    },
    {
        id: 0,
        fileNumber: 'ND_685214536',        
        firstname: 'MBEUMO',
        lastname: 'Junior',
        age: 9,
        relation: 'Frère',                
        phone: "+237 657-852-357",        
        profession: 'Ecolier',
        insurance: true,
    },
];



const RelationFamiliale = () => {
    const [category, setCategory] = useState<any | null>();
    const [status, setStatus] = useState<any | null>();
    const [requerant, setRequerant] = useState<any | null>();
    const [executant, setExecutant] = useState<any | null>();
    
    return (
        <>
        <div className="">
            <h2 className={`relative text-center text-nael-gray`}
            >Relation Familiale
            </h2>
            <div className="grid md:grid-cols-8 sm:grid-cols-1 gap-10 my-10">
                <div className="col-span-2">
                    <SectionTitle title={'Ajouter des relation au patient'}/>
                    <Input
                        placeholder="Rechercher un patient"
                        prefix={<HiOutlineSearch className="text-xs" />}
                        className='w-full my-4'
                    />
                    <FormItem label="Lien familial" className='my-4'>
                        <div className='flex gap-4 w-full'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className="w-full"
                                name="insurance"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                            <Button
                                className="ltr:mr-2 rtl:ml-2 bg-nael-second-blue hover:bg-nael-second-blue"
                                variant="solid"
                                size='sm'
                            >
                                <HiOutlinePlus/>
                            </Button>
                        </div>
                    </FormItem>
                </div>
                <div className="col-span-6">
                    <SectionTitle title={'Famille du patient'}/>
                    <Table className='table-auto'>
                        <THead>
                            <Tr>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Numero de dossier</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Nom</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Prenom</Th>                            
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Age</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Lien familial</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Téléphone personel</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Profession</Th>
                                <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Assuré(e)</Th>
                            </Tr>
                        </THead>
                        <TBody>

                        {patientList.map((patient, index) => (
                            <Tr key={index}>                                
                                <Td className={"text-xs text-[#0F94CD] align-middle"} style={{paddingLeft:'0px'}}>{patient.fileNumber}</Td>                                
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.firstname}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.lastname}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.age}</Td>
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.relation}</Td>                                
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.phone}</Td>                                
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{patient.profession}</Td>                                
                                <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>
                                    <PriorityTag 
                                    label={statusColor[patient.insurance ? 1:0].label}
                                    bgColor={statusColor[patient.insurance ? 1:0].dotClass}
                                    textColor={statusColor[patient.insurance ? 1:0].textClass} 
                                    />
                                </Td>
                            </Tr>
                        ))}

                        </TBody>
                    </Table>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default RelationFamiliale
