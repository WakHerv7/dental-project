import { useState, useCallback } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'
import Avatar from '@/components/ui/Avatar';
import Table from '@/components/ui/Table';
import Select from '@/components/ui/Select';
import { HiReply, HiOutlineSearch } from 'react-icons/hi';
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'
import Checkbox from '@/components/ui/Checkbox'
import InputGroup from '@/components/ui/InputGroup'
import { HiPlus, HiMinus, HiX } from 'react-icons/hi'
import Progress from '@/components/ui/Progress'
import Switcher from '@/components/ui/Switcher'

import { TabList, Tab, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabs-style.css";
import Affichage from './tabPanels/Affichage';
import Utilisateurs from './tabPanels/Utilisateurs';
import RendezVous from './tabPanels/userParameters/RendezVous';

const tabsData = [
    { title: 'Tab 1', content: 'Content of Tab 1' },
    { title: 'Tab 2', content: 'Content of Tab 2' },
    { title: 'Tab 3', content: 'Content of Tab 3' },
];

type ModalProps = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}


const ParametersModal = ({dialogIsOpen, setIsOpen}:ModalProps  ) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

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
        contentClassName="relative pb-0 px-0 overflow-hidden"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
        width={1000}
    >
        <div className={`absolute top-0 w-full text-white bg-nael-violet-600 p-0 flex justify-between`}>
            <div className='pl-3 py-2'>Paramètres de l'agenda</div>
            <div className='bg-red-400 hover:bg-red-500 px-3 py-2 cursor-pointer' onClick={onDialogClose}>
                <HiX size={24}/>
            </div>
        </div>
        <div className="px-0 py-0">
            <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
                <div className="flex flex-row h-full min-h-[600px]">
                    <TabList className="flex flex-col w-[150px] pt-7 bg-nael-blue-600">
                    <Tab className="text-white py-3 px-4 hover:cursor-pointer">
                        Affichage
                    </Tab>
                    <Tab className="text-white py-3 px-4 hover:cursor-pointer">
                        Utilisateurs
                    </Tab>
                    <Tab className="text-white py-3 px-4 hover:cursor-pointer">
                        Rendez-vous
                    </Tab>
                    </TabList>
                    <div className="flex-grow mt-7 pb-4 px-5 max-h-[85vh] overflow-y-auto">
                    <TabPanel>
                        <Affichage/>
                    </TabPanel>
                    <TabPanel>
                        <Utilisateurs/>
                    </TabPanel>
                    <TabPanel>
                        <RendezVous/>
                    </TabPanel>
                    </div>
                </div>
            </Tabs>
        </div>
    </Dialog>
    </>
  )
}

export default ParametersModal;

