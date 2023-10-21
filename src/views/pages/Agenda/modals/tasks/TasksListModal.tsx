import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import type { MouseEvent } from 'react';
import Table from '@/components/ui/Table';
import { HiReply } from 'react-icons/hi';
import Select from '@/components/ui/Select';
import { HiDotsVertical } from 'react-icons/hi';
import Dropdown from '@/components/ui/Dropdown';
import type { SyntheticEvent } from 'react';
import TaskDetailsModal from './TaskDetailsModal';

type ModalSettings = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}

const { Tr, Th, Td, THead, TBody } = Table

const tasksList = [
    {
        id: 0,
        title: 'Titre de la tache 1',
        by: 'Louise Martin',
        to: 'Paul Enrique',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        color: 'red',
    },
    {
        id: 1,
        title: 'Titre de la tache 2',
        by: 'Louise Martin',
        to: 'Paul Enrique',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        color: 'green',
    },
    {
        id: 2,
        title: 'Titre de la tache 3',
        by: 'Louise Martin',
        to: 'Paul Enrique',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        color: 'yellow',
    },
    {
        id: 3,
        title: 'Titre de la tache 4',
        by: 'Louise Martin',
        to: 'Paul Enrique',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        color: 'blue',
    },
    {
        id: 4,
        title: 'Titre de la tache 5',
        by: 'Louise Martin',
        to: 'Paul Enrique',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        color: 'indigo',
    },
];

const TasksListModal = ({dialogIsOpen, setIsOpen}:ModalSettings  ) => {
    const [oneTaskDialogIsOpen, setOneTaskDialogIsOpen] = useState(Array(tasksList.length).fill(false));
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
    const openTaskDetailsModal = (index: number) => {
        const updatedDialogIsOpen = [...oneTaskDialogIsOpen];
        updatedDialogIsOpen[index] = true;
        setOneTaskDialogIsOpen(updatedDialogIsOpen);
    };

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
                <h4>Liste des taches</h4>
                <div className="flex items-center gap-2">
                    <Select
                        placeholder="Toutes les taches"
                        options={[
                            { value: '1', label: 'A'},
                            { value: '2', label: 'B'},
                            { value: '3', label: 'C'},
                        ]}
                    ></Select>

                    <Select
                        placeholder="Requerant"
                        options={[
                            { value: '1', label: 'A'},
                            { value: '2', label: 'B'},
                            { value: '3', label: 'C'},
                        ]}
                    ></Select>

                    <Select
                        placeholder="Executant"
                        options={[
                            { value: '1', label: 'A'},
                            { value: '2', label: 'B'},
                            { value: '3', label: 'C'},
                        ]}
                    ></Select>
                </div>
                
            </div>
            <div className="max-h-[67vh] overflow-y-auto">
                <Table>
                    <TBody>

                    {tasksList.map((task, index) => (
                        <Tr key={index}>
                            {/* <Td>
                                
                            </Td> */}
                            <Td className='relative' style={{ width:200}}>
                                <span className={`absolute bg-${task.color}-500`}
                                    style={{
                                        position:'absolute',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        left:0,
                                        display:'block',
                                        width: 4,
                                        height: '70%',
                                        // background: "red",
                                    }}>
                                </span>
                                <strong>{task.title}</strong>
                            </Td>
                            <Td style={{ minWidth:150}}>Par <Link to="#">{task.by}</Link> à <Link to="#">{task.to}</Link></Td>
                            <Td className={"w-200"}
                            style={{ width:450}}
                            >{task.description}</Td>
                            <Td>
                                <Dropdown 
                                renderTitle={
                                    <HiDotsVertical />
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
                                            <span className="text-black" onClick={()=>openTaskDetailsModal(index)}>
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
                                <TaskDetailsModal
                                    dialogIsOpen={oneTaskDialogIsOpen[index]}
                                    setIsOpen={(isOpen) => {
                                    const updatedDialogIsOpen = [...oneTaskDialogIsOpen];
                                    updatedDialogIsOpen[index] = isOpen;
                                    setOneTaskDialogIsOpen(updatedDialogIsOpen);
                                    }}
                                    taskDetails={{
                                        title: task.title,
                                        category: "Clinique",
                                        status: "En cours",
                                        description: task.description,
                                        applicant: task.by,
                                        executor: task.to,
                                    }}
                                />
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

export default TasksListModal;

