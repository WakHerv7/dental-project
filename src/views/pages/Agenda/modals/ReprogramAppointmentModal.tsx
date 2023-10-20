import { useState } from 'react';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import type { MouseEvent } from 'react';
import Table from '@/components/ui/Table';
import { HiReply, HiOutlineClock, HiClock, HiCalendar } from 'react-icons/hi';
import Input from '@/components/ui/Input';
import TimeInput from '@/components/ui/TimeInput';


type TaskProps = {
    title: string,
    category: string,
    status: string,
    description: string,
    applicant: string,
    executor: string,
  }
type ModalSettings = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
    // taskDetails: TaskProps,
}

const { Tr, Th, Td, THead, TBody } = Table

const detailsLabels = [
    "Titre",
    "Categorie",
    "Statut",
    "Description",
    "Réquerantt",
    "Exécutant",
];

const ReprogramAppointmentModal = ({dialogIsOpen, setIsOpen, }:ModalSettings  ) => {
    // const { title, category, status, description, applicant, executor } = taskDetails;

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
            <Button
                className="ltr:mr-2 rtl:ml-2 mb-4"
                variant="twoTone"
                size='sm'
                onClick={onDialogClose}
                icon={<HiReply/>}
            >
                Retour
            </Button>
            <h4 className="mb-4">Reprogrammer le rendez-vous</h4>
            <div className='flex flex-col'>
                <div className="mb-4">
                    <label htmlFor='rdv-date'>Nouvelle date</label>
                    <Input
                        // placeholder="Nouvelle date"
                        type="date"
                        name="rdv-date"
                        // suffix={
                        //     <HiCalendar className="text-lg cursor-pointer ml-1" />
                        // }
                    />
                </div>
                <div className="flex gap-2 mb-4">
                    <div>
                        <label>Heure de debut</label>
                        <TimeInput
                            suffix={
                                <HiClock className="text-lg cursor-pointer ml-1" />
                            }
                        />
                    </div>
                    <div>
                        <label>Heure de fin</label>
                        <TimeInput
                            suffix={
                                <HiClock className="text-lg cursor-pointer ml-1" />
                            }
                        />
                    </div>
                </div>
                <div>
                    <label>Motif du report</label>
                    <Input textArea placeholder="" />
                </div>
                             
            </div>
        </div>
        <div className="text-right px-6 py-3 rounded-bl-lg rounded-br-lg">
            <Button
                className="ltr:mr-2 rtl:ml-2"
                variant="solid"
                size='sm'
                onClick={onDialogClose}
            >
                Valider
            </Button>
            <Button variant="twoTone" size='sm' onClick={onDialogOk}>
                Annuler
            </Button>
        </div>
    </Dialog>
    </>
  )
}

export default ReprogramAppointmentModal;

