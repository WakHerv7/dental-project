import { useState } from 'react';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import type { MouseEvent } from 'react';
import Table from '@/components/ui/Table';
import { HiReply } from 'react-icons/hi';
import { FormItem, Input, Select } from '@/components/ui';
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

const TaskFormModal = ({dialogIsOpen, setIsOpen}:ModalProps  ) => {
    const [category, setCategory] = useState<any | null>();
    const [status, setStatus] = useState<any | null>();
    const [requerant, setRequerant] = useState<any | null>();
    const [executant, setExecutant] = useState<any | null>();

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
            <h4 className="mb-4">Tâche</h4>
            <div className="">
                <div>
                    <FormItem label="Titre"  className='my-2'>
                        <Input                        
                        type="text"
                        name="title"
                        placeholder="Titre"
                        />
                    </FormItem>
                </div>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <FormItem label="Catégorie" className='my-2'>
                        <Select<Option>
                            options={categories}
                            size="sm"
                            className=""
                            value={categories.filter((option) => option.value === category)}
                            onChange={(cat)=>setCategory(cat?.value)}
                        />
                    </FormItem>
                    <FormItem label="Statut" className='my-2'>
                        <Select<Option>
                            options={statuses}
                            size="sm"
                            className=""
                            value={statuses.filter((option) => option.value === status)}
                            onChange={(sta)=>setStatus(sta?.value)}
                        />
                    </FormItem>
                    <FormItem label="Date d'échéance" className='my-2'>
                        <Input                        
                        type="date"
                        name="deadline-date"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Heure d'échéance" className='my-2'>
                        <Input                        
                        type="time"
                        name="deadline-time"
                        placeholder=""
                        />
                    </FormItem>
                </div>

                <div>
                    <FormItem label="Description de la tâche">
                        <Input textArea placeholder="" />
                    </FormItem>                
                    <FormItem label="Requérant" className='my-2'>
                        <Select<Option>
                            options={requerants}
                            size="sm"
                            className=""
                            value={requerants.filter((option) => option.value === requerant)}
                            onChange={(req)=>setRequerant(req?.value)}
                        />
                    </FormItem>
                    <FormItem label="Exécutant" className='my-2'>
                        <Select<Option>
                            options={executants}
                            size="sm"
                            className=""
                            value={executants.filter((option) => option.value === executant)}
                            onChange={(exec)=>setExecutant(exec?.value)}
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

export default TaskFormModal;

