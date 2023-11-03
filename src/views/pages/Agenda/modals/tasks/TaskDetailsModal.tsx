import { useState } from 'react';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import type { MouseEvent } from 'react';
import Table from '@/components/ui/Table';
import { HiReply } from 'react-icons/hi';

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
    taskDetails: TaskProps,
}

const { Tr, Th, Td, THead, TBody } = Table

const detailsLabels = [
    "Titre",
    "Categorie",
    "Statut",
    "Description",
    "Réquerant",
    "Exécutant",
];

const TaskDetailsModal = ({dialogIsOpen, setIsOpen, taskDetails}:ModalProps  ) => {
    const { title, category, status, description, applicant, executor } = taskDetails;

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
            <h4 className="mb-4">Details de la tache</h4>
            <div className="max-h-[67vh] overflow-y-auto">
                <Table>
                    <TBody>

                    {Object.entries(taskDetails).map(([key, value], index) => (
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
                Tache terminée
            </Button>
            <Button variant="twoTone" size='sm' onClick={onDialogOk}>
                Modifier
            </Button>
        </div>
    </Dialog>
    </>
  )
}

export default TaskDetailsModal;

