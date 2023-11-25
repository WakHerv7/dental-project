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
const items: Option[] = [
    { value: 'a', label: 'Item A'},
    { value: 'b', label: 'Item B'},
    { value: 'c', label: 'Item C'},
];
const categories: Option[] = [
    { value: 'cadre', label: 'Cadre'},
    { value: 'am', label: 'Agent de maitrise'},
    { value: 'eo', label: 'Employé/Ouvrier'},
];
const coverageRates: Option[] = [
    { value: '100', label: '100%'},
    { value: '90', label: '90%'},
    { value: '80', label: '80%'},
    { value: '70', label: '70%'},
    { value: '60', label: '60%'},
    { value: '50', label: '50%'},
];
const tiersPayants: Option[] = [
    { value: 'o', label: 'Oui'},
    { value: 'n', label: 'Non'},
];

const insuranceNames: Option[] = [
    { value: 'a', label: 'Ascoma'},
    { value: 'b', label: 'Willis Tower Watson LTD Cameroun'},
    { value: 'c', label: 'Olea Cameroun'},
    { value: 'a', label: 'Chanas Assurances'},
    { value: 'a', label: 'Pas 24'},
    { value: 'a', label: 'AXA Cameroun'},
    { value: 'a', label: 'Atlantique Assurances'},
    { value: 'a', label: 'Prudential Beneficial'},
    { value: 'a', label: 'Activa Assurances'},
    { value: 'a', label: 'GMC(Garantie Mutuelle des Cadres) Assurances'},
    { value: 'a', label: 'Allianz Cameroun Assurances'},
];


type AssurancePrincipaleProps = {
    hasSuppInsurance: number,
    setHasSuppInsurance: (val:number) => any
}
const AssurancePrincipale = (props:AssurancePrincipaleProps) => {
    const { hasSuppInsurance, setHasSuppInsurance } = props;

    const [category, setCategory] = useState<any | null>();
    const [item, setItem] = useState<any | null>();
    const [coverageRate, setCoverageRate] = useState<any | null>();
    const [coverageRate2, setCoverageRate2] = useState<any | null>();
    const [tiersPayant, setTiersPayant] = useState<any | null>();
    const [insuranceName, setInsuranceName] = useState<any | null>();
    
    return (
        <>
        <div className="">
            <h2 className={`relative text-center text-nael-gray`}
            >Assurance Maladie Principale
            </h2>
            <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-4">
                <div className="">
                    <FormItem label="Nom de l'assurance" className='my-4'>
                        <Select<Option>
                            options={insuranceNames}
                            size="sm"
                            className="mb-4"
                            name="insurance"
                            value={insuranceNames.filter((option) => option.value === insuranceName)}
                            onChange={(cat)=>setInsuranceName(cat?.value)}
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
                                    options={coverageRates}
                                    size="sm"
                                    className=""
                                    name="insured-coverage-rate"
                                    value={coverageRates.filter((option) => option.value === coverageRate)}
                                    onChange={(item)=>setCoverageRate(item?.value)}
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
                            name="recipient-firstname"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Prénom(s)" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="recipient-lastname"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <div>
                        <FormItem label="Date de naissance" className='my-0'>
                            <Input
                            size="sm"                       
                            type="date"
                            name="recipient-birthday"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                        <FormItem label="Adresse personnelle"  className='my-0'>
                            <Input
                            size="sm"                        
                            type="text"
                            name="recipient-address"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Téléphone" className='my-0'>
                            <Input
                            size="sm"                        
                            type="phone"
                            name="recipient-phone"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <div>
                        <FormItem label="Lien avec l'assuré(e) principal(e)" className='my-0'>
                            <Select<Option>
                                options={items}
                                size="sm"
                                className=""
                                name="recipient-insured-relationship"
                                value={items.filter((option) => option.value === item)}
                                onChange={(cat)=>setItem(cat?.value)}
                            />
                        </FormItem>
                    </div>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                        <FormItem label="N° adhésion" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="recipient-registration-number"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Taux de couverture" className='my-0'>
                            <Select<Option>
                                options={coverageRates}
                                size="sm"
                                className=""
                                name="recipient-coverage-rate"
                                value={coverageRates.filter((option) => option.value === coverageRate2)}
                                onChange={(cat)=>setCoverageRate2(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Valide du" className='my-0'>
                            <Input
                            size="sm"                       
                            type="date"
                            name="recipient-validity-start"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Au" className='my-0'>
                            <Input
                            size="sm"                       
                            type="date"
                            name="recipient-validity-end"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Tiers payant" className='my-0'>
                            <Select<Option>
                                options={tiersPayants}
                                size="sm"
                                className=""
                                name="recipient-tiers-payant"
                                value={tiersPayants.filter((option) => option.value === tiersPayant)}
                                onChange={(val)=>setTiersPayant(val?.value)}
                            />
                        </FormItem>
                        <FormItem label="Montant" className='my-0'>
                            <Input
                            size="sm"                       
                            type="number"
                            name="recipient-amount"
                            disabled
                            />
                        </FormItem>
                    </div>
                    <div >
                        <FormItem label="Nature de l'affection" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="recipient-affection-type"
                            placeholder=""
                            />
                        </FormItem>
                    </div>

                </div>
                <div className="col-span-2  flex flex-col justify-between">
                    <div className='flex flex-col gap-4'>
                        <FormItem label="Centre exécutant" className='my-0'>
                            <Select<Option>
                                options={items}
                                size="sm"
                                className=""
                                name="executing-centre"
                                value={items.filter((option) => option.value === item)}
                                onChange={(cat)=>setItem(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Prestataire exécutant" className='my-0'>
                            <Select<Option>
                                options={items}
                                size="sm"
                                className=""
                                name="service-provider"
                                value={items.filter((option) => option.value === item)}
                                onChange={(cat)=>setItem(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Code affection" className='my-0'>
                            <Select<Option>
                                options={items}
                                size="sm"
                                className=""
                                name="affection-code"
                                value={items.filter((option) => option.value === item)}
                                onChange={(cat)=>setItem(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Accident causé par un tiers" className='my-0'>
                            <Select<Option>
                                options={items}
                                size="sm"
                                className=""
                                name="accident-caused-by-third-party"
                                value={items.filter((option) => option.value === item)}
                                onChange={(cat)=>setItem(cat?.value)}
                            />
                        </FormItem>
                        <FormItem label="Numéro de consultation" className='my-0'>
                            <Input
                            size="sm"                 
                            type="text"
                            name="consultation-number"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <SectionTitle title={'Assurance maladie complémentaire'}/>
                        <FormItem label="En avez vous une ?">                        
                            <Radio.Group
                            value={hasSuppInsurance} 
                            className='mt-3'
                            onChange={(val)=>setHasSuppInsurance(val)}>
                                <Radio  className='mb-2' value={1}>Oui</Radio>
                                <Radio  className='mb-2' value={0}>Non</Radio>
                            </Radio.Group>
                        </FormItem>
                    </div>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default AssurancePrincipale
