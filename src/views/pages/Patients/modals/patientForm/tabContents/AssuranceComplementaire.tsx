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
    HiPlus
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
const statuses: Option[] = [
    { value: 'a', label: 'Statut A'},
    { value: 'b', label: 'Statut B'},
    { value: 'c', label: 'Statut C'},
];
const requerants: Option[] = [
    { value: 'a', label: 'Requérant A'},
    { value: 'b', label: 'Requérant B'},
    { value: 'c', label: 'Requérant C'},
];
const executants: Option[] = [
    { value: 'a', label: 'Exécutant A'},
    { value: 'b', label: 'Exécutant B'},
    { value: 'c', label: 'Exécutant C'},
];



const AssuranceComplementaire = () => {
    const [category, setCategory] = useState<any | null>();
    const [status, setStatus] = useState<any | null>();
    const [requerant, setRequerant] = useState<any | null>();
    const [executant, setExecutant] = useState<any | null>();
    
    return (
        <>
        <div className="">
            <h2 className={`relative text-center text-nael-gray`}
            >Assurance Maladie Complementaire
            </h2>
            <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-4">
                <div className="">
                    <FormItem label="Nom de l'assurance" className='my-4'>
                        <Select<Option>
                            options={categories}
                            size="sm"
                            className="mb-4"
                            name="insurance"
                            value={categories.filter((option) => option.value === category)}
                            onChange={(cat)=>setCategory(cat?.value)}
                        />
                    </FormItem>
                </div>
            </div>
            <div className="grid md:grid-cols-7 sm:grid-cols-1 gap-10 mb-10">
                <div className="col-span-3 flex flex-col justify-between">
                    <div>
                        <SectionTitle title={'Souscripteur du contrat(Entreprise)'}/>
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                            <FormItem label="Nom ou raison sociale" className='my-0'>
                                <Input
                                size="sm"                 
                                type="text"
                                name="insruance-name"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Numero d'Identifiant Unique" className='my-0'>
                                <Input
                                size="sm"                 
                                type="text"
                                name="insurance-nui"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Adresse" className='my-0'>
                                <Input
                                size="sm"                 
                                type="text"
                                name="address"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Numéro de la police" className='my-0'>
                                <Input
                                size="sm"                 
                                type="phone"
                                name="police-number"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Nom de l'agent gestionnaire" className='my-0'>
                                <Input
                                size="sm"                 
                                type="text"
                                name="insurance-contact-name"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Numéro de l'agent gestionnaire" className='my-0'>
                                <Input
                                size="sm"                 
                                type="phone"
                                name="insurance-contact-number"
                                placeholder=""
                                />
                            </FormItem>
                        </div>                    
                    </div>
                    <div className='mt-10'>
                        <SectionTitle title={'Assuré(e) principal(e)'}/>
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-4 gap-4">
                            <FormItem label="N° adhésion" className='my-0'>
                                <Input
                                size="sm"                 
                                type="text"
                                name="registration-number"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Nom(s) (Majuscule)" className='my-0'>
                                <Input
                                size="sm"                 
                                type="text"
                                name="insured-firstname"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Prénom(s)" className='my-0'>
                                <Input
                                size="sm"                 
                                type="text"
                                name="insured-lastname"
                                placeholder=""
                                />
                            </FormItem>
                        </div>
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                            <FormItem label="Date de naissance" className='my-0'>
                                <Input
                                size="sm"                       
                                type="date"
                                name="insured-birthday"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Adresse personnelle"  className='my-0'>
                                <Input
                                size="sm"                        
                                type="text"
                                name="insured-address"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Téléphone" className='my-0'>
                                <Input
                                size="sm"                        
                                type="phone"
                                name="insured-phone"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Catégorie" className='my-0'>
                                <Select<Option>
                                    options={categories}
                                    size="sm"
                                    className=""
                                    name="insured-category"
                                    value={categories.filter((option) => option.value === category)}
                                    onChange={(cat)=>setCategory(cat?.value)}
                                />
                            </FormItem>
                        </div>         
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-4 gap-4">
                            <FormItem label="Valide du" className='my-0'>
                                <Input
                                size="sm"                       
                                type="date"
                                name="insured-validity-start"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Au" className='my-0'>
                                <Input
                                size="sm"                       
                                type="date"
                                name="insured-validity-end"
                                placeholder=""
                                />
                            </FormItem>
                            <FormItem label="Taux de couverture" className='my-0'>
                                <Select<Option>
                                    options={categories}
                                    size="sm"
                                    className=""
                                    name="insured-coverage-rate"
                                    value={categories.filter((option) => option.value === category)}
                                    onChange={(cat)=>setCategory(cat?.value)}
                                />
                            </FormItem>
                        </div>           
                    </div>
                
                </div>
                <div className="col-span-2 flex flex-col justify-between">
                    <SectionTitle title={'Bénéficiare'}/>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                        <FormItem label="Nom(s) (Majuscule)" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="insured-firstname"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Prénom(s)" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="insured-lastname"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <div>
                        <FormItem label="Date de naissance" className='my-0'>
                            <Input
                            size="sm"                       
                            type="date"
                            name="insured-birthday"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                        <FormItem label="Adresse personnelle"  className='my-0'>
                            <Input
                            size="sm"                        
                            type="text"
                            name="insured-address"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Téléphone" className='my-0'>
                            <Input
                            size="sm"                        
                            type="phone"
                            name="insured-phone"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <div>
                        <FormItem label="Lien avec l'assuré(e) principal(e)" className='my-0'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className=""
                                name="insured-coverage-rate"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                        </FormItem>
                    </div>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                        <FormItem label="N° adhésion" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="registration-number"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Taux de couverture" className='my-0'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className=""
                                name="insured-coverage-rate"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Valide du" className='my-0'>
                            <Input
                            size="sm"                       
                            type="date"
                            name="insured-validity-start"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Au" className='my-0'>
                            <Input
                            size="sm"                       
                            type="date"
                            name="insured-validity-end"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Tiers payant" className='my-0'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className=""
                                name="insured-coverage-rate"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Montant" className='my-0'>
                            <Input
                            size="sm"                       
                            type="number"
                            name="insured-validity-end"
                            disabled
                            />
                        </FormItem>
                    </div>
                    <div >
                        <FormItem label="Nature de l'affection" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="registration-number"
                            placeholder=""
                            />
                        </FormItem>
                    </div>

                </div>
                <div className="col-span-2  flex flex-col justify-between">
                    <div className='flex flex-col gap-4'>
                        <FormItem label="Centre exécutant" className='my-0'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className=""
                                name="insured-coverage-rate"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Prestataire exécutant" className='my-0'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className=""
                                name="insured-coverage-rate"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Code affection" className='my-0'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className=""
                                name="insured-coverage-rate"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Accident causé par un tiers" className='my-0'>
                            <Select<Option>
                                options={categories}
                                size="sm"
                                className=""
                                name="insured-coverage-rate"
                                value={categories.filter((option) => option.value === category)}
                                onChange={(cat)=>setCategory(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Numéro de consultation" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="registration-number"
                            placeholder=""
                            />
                        </FormItem>
                    </div>                    
                </div>
            </div>
           
        </div>
        </>
    )
}

export default AssuranceComplementaire
