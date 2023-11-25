import { useState, useCallback } from 'react';
import type { MouseEvent } from 'react';
import Select from '@/components/ui/Select';
import { HiReply, HiOutlineSearch } from 'react-icons/hi';
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'
import Checkbox from '@/components/ui/Checkbox'
import InputGroup from '@/components/ui/InputGroup'
import { Avatar, Card, Tag, Table, Dialog, Button, Radio } from '@/components/ui';

type ModalProps = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}

const { Tr, Th, Td, THead, TBody } = Table

const timeSlots = [
    {
        date: "5 Sept. 2023",
        weekday: "Mardi",
        startTime: "14:00",
        endTime: "14:00",
    },
    {
        date: "5 Sept. 2023",
        weekday: "Mardi",
        startTime: "14:00",
        endTime: "14:00",
    },
    {
        date: "5 Sept. 2023",
        weekday: "Mardi",
        startTime: "14:00",
        endTime: "14:00",
    },
];

const daysList = [
    {
        jour: "Lundi",
    },
    {
        jour: "Mardi",
    },
    {
        jour: "Mercredi",
    },
    {
        jour: "Jeudi",
    },
    {
        jour: "Vendredi",
    },
    {
        jour: "Samedi",
    },
];

const TimeSlotFormModal = ({dialogIsOpen, setIsOpen}:ModalProps  ) => {

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

    //-------------------------------------------------------
    const [percentage, setPercentage] = useState(10)

    const onIncrease = useCallback(() => {
        let value = percentage + 10
        if (value > 100) {
            value = 100
        }
        setPercentage(value)
    }, [percentage])

    const onDecrease = useCallback(() => {
        let value = percentage - 10
        if (value < 0) {
            value = 0
        }
        setPercentage(value)
    }, [percentage])
    //-------------------------------------------------------

  return (
    <>
    <Dialog
        isOpen={dialogIsOpen}        
        contentClassName="pb-0 px-0"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
        width={1200}
    >
        <Button
            className="ml-4 ltr:mr-2 rtl:ml-2 mb-4"
            variant="twoTone"
            size='sm'
            onClick={onDialogClose}
            icon={<HiReply/>}
        >
            Retour
        </Button>
        <div className="grid md:grid-cols-7 sm:grid-cols-1 gap-4">
            <div className="pl-6 pr-0 pb-6 col-span-4">
                <h4 className="mb-4">Recherche de creneau horaire</h4>

                <div className="">
                    <div className="mb-2">
                        <Input
                            placeholder="Rechercher un patient déjà existant..."
                            prefix={<HiOutlineSearch className="text-lg" />}
                        />
                    </div>
                    <hr />
                    <section className="my-4">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                            <FormItem label="Nom du patient" >
                                <Input                        
                                type="text"
                                name="patient-name"
                                placeholder="Nom du patient"
                                />
                            </FormItem>
                            <FormItem label="Prenom du patient" >
                                <Input                        
                                type="text"
                                name="patient-surname"
                                placeholder="Prenom du patient"
                                />
                            </FormItem>            
                        </div>
                        <div>
                        <FormItem label="Telephone du patient" >                        
                                <Input                        
                                type="text"
                                name="patient-phone"
                                placeholder="Telephone du patient"
                                />
                            </FormItem> 
                        </div>
                    </section>
                    <section className="my-4">
                        <div className="font-[700] mb-4">
                            <span>Disponibilité du patient</span>
                            <hr />
                        </div>
                        <div>
                            <div>
                                <FormItem label="Definir une plage de date">                        
                                    <div className="flex gap-4">
                                        <Input                        
                                        type="date"
                                        name="slot-start"
                                        placeholder="Debut"
                                        />
                                        <Input                        
                                        type="date"
                                        name="slot-end"
                                        placeholder="Fin"
                                        />
                                    </div>
                                </FormItem>
                            </div>
                            <div className="">
                            {daysList.map((item, index) => (
                                <>
                                <FormItem label={item.jour} className="mb-0">                        
                                    <Radio.Group value={1} className=''>
                                        <div className="flex items-center gap-4 p-2 w-full text-[13px]">
                                        <Radio  className='' value={1}>Toute la journée</Radio>
                                        <Radio  className='' value={2}>Non</Radio>
                                        <Radio  className='mb-0' value={3}>
                                            <div className='flex items-center gap-3'>
                                                De
                                                <Input type="Time" name="monday-start"/>
                                                à
                                                <Input type="Time" name="monday-start"/>                                                
                                            </div>
                                        </Radio>
                                        </div>
                                    </Radio.Group>
                                </FormItem>
                                </>
                            ))}
                            </div>

                            
                        </div>
                    </section>
                </div>
                <div className=" flex justify-end items-center text-right px-6 pt-3 rounded-bl-lg rounded-br-lg">
                    <Button
                        className="ltr:mr-2 rtl:ml-2 flex gap-2 items-center"
                        variant="solid"
                        size='sm'
                        onClick={onDialogClose}
                    >
                        <HiOutlineSearch/>
                        Rechercher
                    </Button>
                    <Button variant="twoTone" size='sm' onClick={onDialogOk}>
                        Annuler
                    </Button>
                </div>
            </div>


            <div className="pl-0 pr-6 pb-6 col-span-3">
                <h4 className="mb-4">Disponibilité trouvée</h4>
                <div>
                    <Table>
                        <THead>
                            <Tr>
                                <Th>Jours</Th>
                                <Th>Horaires</Th>
                                <Th>Action</Th>
                            </Tr>
                        </THead>
                        <TBody>
                        {/* timeSlots */}
                        {timeSlots.map((item, index) => (
                            <Tr key={index}>
                                <Td className='flex flex-col'>
                                    <span>{item.weekday}</span>
                                    <small className="whitespace-nowrap" color='indigo'>{item.date}</small>
                                </Td>
                                <Td className="whitespace-nowrap">
                                    {`${item.startTime} - ${item.endTime}`}
                                </Td>
                                <Td>
                                    <Button
                                        size='sm'
                                        className="ltr:mr-2 rtl:ml-2 w-full"
                                    >
                                        Placer le patient
                                    </Button>
                                </Td>
                            </Tr>
                        ))}                            
                        </TBody>
                    </Table>
                </div>
            </div>
        </div>
        
    </Dialog>
    </>
  )
}

export default TimeSlotFormModal;

