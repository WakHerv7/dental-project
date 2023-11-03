import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { MouseEvent } from 'react';
import {Table, Input, Dialog, Button} from '@/components/ui';
import { HiReply } from 'react-icons/hi';
import Select from '@/components/ui/Select';
import { HiDotsVertical, HiOutlineSearch } from 'react-icons/hi';
import Dropdown from '@/components/ui/Dropdown';
import type { SyntheticEvent } from 'react';
import {getFormattedDate, getFormattedTime, getPersonAge} from '@/utils';
import MemoFormModal from './MemoFormModal';

type ModalSettings = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}

const { Tr, Th, Td, THead, TBody } = Table

const memoList = [
    {
        id: 0,
        title: 'Titre memo 1',        
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",        
    },
    {
        id: 1,
        title: 'Titre memo 2',        
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",        
    },
    {
        id: 2,
        title: 'Titre memo 3',        
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",        
    },
    {
        id: 3,
        title: 'Titre memo 4',        
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",        
    },
    {
        id: 4,
        title: 'Titre memo 5',        
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",        
    },
];

const MemoListModal = ({dialogIsOpen, setIsOpen}:ModalSettings  ) => {
    
    const [memoFormDialogOpen, setMemoFormDialogOpen] = useState(false)

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    // *********************************************************
    const dropdownItems = [
        // { key: 'a', name: 'Details', url:'#' },
        // { key: 'b', name: 'Terminer', url:'#' },
        { key: 'c', name: 'Modifier', url:'#' },
        // { key: 'd', name: 'Archiver', url:'#' },
        { key: 'e', name: 'Supprimer', url:'#' },
    ]    
    const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
        console.log('Dropdown Item Clicked', eventKey, e)
    }    
    const onDropdownClick = (e: SyntheticEvent) => {
        console.log('Dropdown Clicked', e)
    }
    

  return (
    <>
    <Dialog
        isOpen={dialogIsOpen}        
        contentClassName="pb-0 px-0"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
        width={1000}
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
            <div className="flex items-center justify-between mb-6">
                <h4>Liste des mémos</h4>
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Rechercher une tache"
                        prefix={<HiOutlineSearch className="text-xs" />}
                        className='max-w-[200px]'
                    />
                    <Button
                        className="ltr:mr-2 rtl:ml-2 h-full bg-nael-violet-600"
                        variant="solid"
                        size='sm'
                        onClick={()=>setMemoFormDialogOpen(true)}
                    >
                        Nouveau mémo
                    </Button>
                    <MemoFormModal
                    dialogIsOpen={memoFormDialogOpen}
                    setIsOpen={setMemoFormDialogOpen}
                    />
                </div>
                
            </div>
            <div className="max-h-[67vh] overflow-y-auto">
                <Table className='table-auto'>
                    <THead>
                        <Tr>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Titre</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Description</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Actions</Th>
                        </Tr>
                    </THead>
                    <TBody>

                    {memoList.map((task, index) => (
                        <Tr key={index}>
                            <Td className='relative text-xs align-top' >                                
                                <strong>{task.title}</strong>
                            </Td>
                            <Td className={"text-xs align-top"} style={{width:500, paddingLeft:'0px'}}>{task.description}</Td>
                            <Td className={"text-xs align-top"}>
                                <div>
                                <Dropdown 
                                renderTitle={
                                    <HiDotsVertical size={18} className='cursor-pointer'/>
                                }
                                menuClass="p-0 min-w-[100px] "
                                onClick={onDropdownClick}
                                placement={'bottom-end'}
                                >
                                    {dropdownItems.map((item, dindex) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            eventKey={item.key}
                                            onSelect={onDropdownItemClick}
                                        >
                                            {dindex===0 ?
                                            <span className="text-black" >
                                            {item.name}
                                            </span>
                                            :
                                            <span className="text-black">
                                            {item.name}
                                            </span>
                                            }
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown>
                                
                                </div>
                            </Td>
                        </Tr>
                    ))}

                    </TBody>
                </Table>
            </div>
        </div>
        {/* <div className="text-right px-6 py-3 rounded-bl-lg rounded-br-lg">
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
        </div> */}
    </Dialog>
    </>
  )
}

export default MemoListModal;
