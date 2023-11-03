import React, {useState} from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form';
import {Select, Checkbox} from '@/components/ui';
import { Accordion } from '@/components/ui';
import Horaire from './userParameters/Horaire';
import ColorSelector from './userParameters/ColorSelector';
import CongesEtFermetures from './userParameters/CongesEtFermetures';
import RendezVous from './userParameters/RendezVous';


import Badge from '@/components/ui/Badge'
import {
    components,
    ControlProps,
    OptionProps,
    SingleValue,
} from 'react-select'
import { HiCheck } from 'react-icons/hi'


const accordionList = [
    {
        title: <h5>Horaires</h5>,
        contentType: "text",
        variant: 'arrow',
        content: <Horaire/>,
    },
    {
        title: <h5>Congés et fermeture</h5>,
        contentType: "text",
        variant: 'arrow',
        content: <CongesEtFermetures/>,
    },
    {
        title: <h5>Couleur</h5>,
        contentType: "text",
        variant: 'arrow',
        content: <ColorSelector label='Définir la couleur associée au practicien'/>,
    },
    {
        title: <h5>Rendez-vous</h5>,
        contentType: "text",
        variant: 'arrow',
        content: <RendezVous/>,
    },
];

type Option = {
    value: string
    label: string
}

const options: Option[] = [
    { value: 'ep', label: 'Elvis Presley'},
    { value: 'jg', label: 'Joel Gabin'},
    { value: 'lm', label: 'Louise Martin'},
]


const { Control } = components

const CustomSelectOption = ({
    innerProps,
    label,
    data,
    isSelected,
}: OptionProps<Option>) => {
    return (
        <div
            className={`flex items-center justify-between p-2 cursor-pointer ${
                isSelected
                    ? 'bg-gray-100 dark:bg-gray-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            {...innerProps}
        >
            <div className="flex items-center gap-2">
                <Badge innerClass={"bg-grey-500"} />
                <span>{label}</span>
            </div>
            {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
        </div>
    )
}

const CustomControl = ({ children, ...props }: ControlProps<Option>) => {
    const selected = props.getValue()[0]
    return (
        <Control {...props}>
            {selected && (
                <Badge
                    className="ltr:ml-4 rtl:mr-4"
                    innerClass={"bg-[#0F94CD]"}
                />
            )}
            {children}
        </Control>
    )
}

const Utilisateurs = () => {
    const [userValue, setUserValue] = useState<any | null>('ep');

    // const onUserChange = (selected: SingleValue<Option>) => {
    //     setUserValue(selected)
    // }

  return (
    <div>
        <section className='flex gap-4 justify-between mb-5'>
            <h4 className="text-[#0F94CD]">
                Dr. {options.filter((option) => option.value === userValue)[0]?.label}
            </h4>
            <hr/>
            <FormItem
                label="Sélectionner un practicien"
                className='flex gap-4 ml-3'
            >
                <Select<Option>
                    options={options}
                    size="sm"
                    className="min-w-[130px]"
                    components={{
                        Option: CustomSelectOption,
                        Control: CustomControl,
                    }}
                    value={options.filter((option) => option.value === userValue)}
                    onChange={(user)=>setUserValue(user?.value)}
                />
            </FormItem>
        </section>

        <Accordion accordionItems={accordionList}/>

        {/* <section className=''>
            <h5 className="mb-4">Mise en forme du rendez-vous</h5>
            <FormItem 
            label="Données à afficher dans l'apercu de l'agenda" 
            className='flex flex-col gap-5 ml-3'>                        
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <Checkbox>Heure de debut</Checkbox>
                    <Checkbox>Nom du patient</Checkbox>
                    <Checkbox>N° dossier patient</Checkbox>
                    <Checkbox>Adresse</Checkbox>
                    <Checkbox>Téléphone du patient</Checkbox>
                    <Checkbox>Ville</Checkbox>
                    <Checkbox>Date de naissance</Checkbox>
                    <Checkbox>Notes de rendez-vous</Checkbox>
                    <Checkbox>N° assurance</Checkbox>
                    <Checkbox>Email</Checkbox>
                </div>
            </FormItem>
        </section> */}

    </div>
  )
}

export default Utilisateurs
