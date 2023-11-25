import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'
import Avatar from '@/components/ui/Avatar';
import Table from '@/components/ui/Table';
import { HiReply } from 'react-icons/hi';

type Props = {
    name: string,
    email: string,
    phone: string,
    date: string,
    startTime: string,
    duration: string,
    rdvType: string,
    consultationReason: string,
    typeOfCare: string,
    status: string,
    postponementReason: string,
    description: string,
    practitioner: string,
  }
type ModalSettings = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
    rdvDetails: Props,
}

const { Tr, Th, Td, THead, TBody } = Table

const detailsLabels = [
    "Nom",
    "Email",
    "Telephone",
    "Date du rendez-vous",
    "Début",
    "Durée",
    "Type de rendez-vous",
    "Motif de consultation",
    "Type de soins",
    "Statut",
    "Motif du report",
    "Description",
    "Practicien traitant",
];

const RdvDetailsModal = ({dialogIsOpen, setIsOpen, rdvDetails}:ModalSettings  ) => {
    const { name, email, date, startTime, duration, rdvType, consultationReason, typeOfCare, status, postponementReason, description, practitioner } = rdvDetails;

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
            <h4 className="mb-4">Details du Rendez-vous</h4>
            <div className="">
                <Table>
                    <TBody>

                    {Object.entries(rdvDetails).map(([key, value], index) => (
                        <Tr key={key}>
                            <Td><strong>{detailsLabels[index]}</strong></Td>
                            <Td>{value}</Td>
                        </Tr>
                    ))}

                    </TBody>
                </Table>
            </div>
        </div>
        <div className="text-right px-6 py-3 rounded-bl-lg rounded-br-lg">
            <Button
                className="ltr:mr-2 rtl:ml-2"
                variant="solid"
                size='sm'
                onClick={onDialogClose}
            >
                Modifier
            </Button>
            <Button variant="solid" size='sm' color="rose-600" onClick={onDialogOk}>
                Supprimer
            </Button>
        </div>
    </Dialog>
    </>
  )
}

export default RdvDetailsModal;

