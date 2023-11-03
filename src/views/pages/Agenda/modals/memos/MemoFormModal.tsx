import { useState } from 'react';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import type { MouseEvent } from 'react';
import Table from '@/components/ui/Table';
import { HiReply } from 'react-icons/hi';
import { FormItem, Input, Select } from '@/components/ui';

type ModalProps = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}


const MemoFormModal = ({dialogIsOpen, setIsOpen}:ModalProps  ) => {
    const [title, setTitle] = useState<any | null>();
    const [description, setDescription] = useState<any | null>();

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
            <h4 className="mb-4">Mémos</h4>
            <div className="max-h-[67vh] overflow-y-auto pr-4">
                <div>
                    <FormItem label="Titre"  className='my-2'>
                        <Input                        
                        type="text"
                        name="title"
                        placeholder="Titre"
                        />
                    </FormItem>
                </div>
                <div>
                    <FormItem label="Description du mémo">
                        <Input textArea placeholder="" />
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

export default MemoFormModal;

