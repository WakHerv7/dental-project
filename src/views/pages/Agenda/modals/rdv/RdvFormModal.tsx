import { useState } from 'react';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import type { MouseEvent } from 'react';
import Table from '@/components/ui/Table';
import { HiReply, HiOutlineSearch } from 'react-icons/hi';
import { FormItem, Input, Select } from '@/components/ui';

import Badge from '@/components/ui/Badge'
import {
    components,
    ControlProps,
    OptionProps,
    SingleValue,
} from 'react-select'
import { HiCheck } from 'react-icons/hi'

type TaskProps = {
    title: string,
    category: string,
    status: string,
    description: string,
    applicant: string,
    executor: string,
  }
type ModalProps = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}

type Option = {
    value: string
    label: string
    color?: string
}

const typesOfRdv: Option[] = [
    { value: 'consult', label: 'Consultation'},
    { value: 'care', label: 'Suivi de soins'},
];
const priorities: Option[] = [
    { value: 'a', label: 'Haute'},
    { value: 'b', label: 'Moyenne'},
    { value: 'c', label: 'Basse'},
];
const consultationReasons: Option[] = [
    { value: 'a', label: 'Fonctionnel'},
    { value: 'b', label: 'Esthétique'},
    { value: 'c', label: 'Esthétique et fonctionnel'},
    { value: 'b', label: 'Visite systématique'},
];
const typesOfCare: Option[] = [
    { value: 'a', label: 'Examen et prevention', color:"yellow"},
    { value: 'b', label: 'Soins conservateurs', color:"blue"},
    { value: 'c', label: 'Chirurgie', color:"red"},
    { value: 'd', label: 'Prothèse', color:"green"},
];
const practioners: Option[] = [
    { value: 'a', label: 'Joe Dubois'},
    { value: 'b', label: 'Elvis Dujardin'},
    { value: 'c', label: 'Romaric Durobinet'},
    { value: 'd', label: 'Jean Duplacard'},
];
const rooms: Option[] = [
    { value: 'a', label: 'Salle 1'},
    { value: 'b', label: 'Salle 2'},
    { value: 'c', label: 'Salle 3'},
    { value: 'd', label: 'Salle 4'},
];


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
                <Badge
                className="w-3 h-3" 
                innerClass={`bg-${data.color}-500`} />
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
                    className="ltr:ml-4 rtl:mr-4 w-3 h-3"
                    innerClass={`bg-${selected.color}-500`}
                    
                />
            )}
            {children}
        </Control>
    )
}

const RdvFormModal = ({dialogIsOpen, setIsOpen}:ModalProps  ) => {
    const [rdvType, setRdvType] = useState<any | null>();
    const [priority, setPriority] = useState<any | null>();
    const [consultationReason, setConsultationReason] = useState<any | null>();
    const [careType, setCareType] = useState<any | null>();
    const [practioner, setPractioner] = useState<any | null>();
    const [room, setRoom] = useState<any | null>();

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }
  return (
    <>
    <Dialog
        isOpen={dialogIsOpen}        
        contentClassName="pb-0 px-0"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
    >
        <div className="px-6 pb-6">
            <h4 className="mb-4">Rendez-vous</h4>
            <div className="">
                <div className='mb-4'>
                    <Input
                        placeholder="Rechercher un patient déjè existant"
                        prefix={<HiOutlineSearch className="text-xs" />}
                    />
                </div>
                
                <hr/>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                    
                    <FormItem label="Nom du patient" className='my-0 py-0'>
                        <Input                        
                        type="text"
                        name="patient-firstname"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Prénom du patient" className='my-0 py-0' >
                        <Input                        
                        type="text"
                        name="patient-lastname"
                        placeholder=""
                        />
                    </FormItem>

                    <FormItem label="Téléphone du patient" className='my-0 py-0' >
                        <Input                        
                        type="text"
                        name="patient-phone"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Date du rendez-vous" className='my-0 py-0'>
                        <Input                        
                        type="date"
                        name="rdv-date"
                        placeholder=""
                        />
                    </FormItem>

                    <div className="flex gap-4">
                        <FormItem label="Début" className='my-0 py-0'>
                            <Input                        
                            type="time"
                            name="start-time"
                            placeholder=""
                            />
                        </FormItem>
                        <FormItem label="Fin" className='my-0 py-0'>
                            <Input                        
                            type="time"
                            name="end-time"
                            placeholder=""
                            />
                        </FormItem>
                    </div>
                    <FormItem label="Durée"  className='my-0 py-0'>
                        <Input                        
                        type="text"
                        name="duration"
                        placeholder=""
                        disabled={true}
                        />
                    </FormItem>

                    <FormItem label="Type de rendez-vous" className='my-0 py-0'>
                        <Select<Option>
                            options={typesOfRdv}
                            size="sm"
                            className=""
                            value={typesOfRdv.filter((option) => option.value === rdvType)}
                            onChange={(rdvt)=>setRdvType(rdvt?.value)}
                        />
                    </FormItem>
                    <FormItem label="Priorité du rendez-vous" className='my-0 py-0'>
                        <Select<Option>
                            options={priorities}
                            size="sm"
                            className=""
                            value={priorities.filter((option) => option.value === priority)}
                            onChange={(rdvp)=>setPriority(rdvp?.value)}
                        />
                    </FormItem>
                </div>

                <div> 
                    {rdvType === "consult" ?
                    <FormItem label="Motif de consultation" className='my-3 py-0'>
                        <Select<Option>
                            options={consultationReasons}
                            size="sm"
                            className=""
                            value={consultationReasons.filter((option) => option.value === consultationReason)}
                            onChange={(cr)=>setConsultationReason(cr?.value)}
                        />
                    </FormItem>
                    : rdvType === "care" ?
                    <FormItem label="Type de soins" className='my-3 py-0'>
                        <Select<Option>
                            options={typesOfCare}
                            size="sm"
                            className=""
                            components={{
                                Option: CustomSelectOption,
                                Control: CustomControl,
                            }}
                            value={typesOfCare.filter((option) => option.value === careType)}
                            onChange={(exec)=>setCareType(exec?.value)}
                        />
                    </FormItem>   
                    :
                    <></>
                    }         
                    
                    
                    <FormItem label="Observation" className='my-3 py-0'>
                        <Input textArea placeholder="" />
                    </FormItem> 
                </div>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <FormItem label="Practicien" className='my-0 py-0'>
                        <Select<Option>
                            options={practioners}
                            size="sm"
                            className=""
                            value={practioners.filter((option) => option.value === practioner)}
                            onChange={(pract)=>setPractioner(pract?.value)}
                        />
                    </FormItem>
                    <FormItem label="Salle" className='my-0 py-0'>
                        <Select<Option>
                            options={rooms}
                            size="sm"
                            className=""
                            value={rooms.filter((option) => option.value === room)}
                            onChange={(rm)=>setRoom(rm?.value)}
                        />
                    </FormItem>
                </div>
            </div>
        </div>
        <div className="text-right px-6 pb-3 rounded-bl-lg rounded-br-lg">
            <Button
                className="ltr:mr-2 rtl:ml-2"
                variant="solid"
                size='sm'
                onClick={onDialogClose}
            >
                Sauvegarder
            </Button>
            <Button variant="twoTone" size='sm' onClick={onDialogOk}>
                Annuler
            </Button>
        </div>
    </Dialog>
    </>
  )
}

export default RdvFormModal;

