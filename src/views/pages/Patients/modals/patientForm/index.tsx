import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import type { MouseEvent } from 'react';
import Table from '@/components/ui/Table';
import { HiReply } from 'react-icons/hi';
import { FormItem, Input, Select } from '@/components/ui';

import { TabList, Tab, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabs-style.css";
import EtatCivil from './tabContents/EtatCivil';
import AssurancePrincipale from './tabContents/AssurancePrincipale';
import AssuranceComplementaire from './tabContents/AssuranceComplementaire';
import RelationFamiliale from './tabContents/RelationFamiliale';
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

const tabsData = [
    { title: 'Etat civil', content: 'Content of Tab 1' },
    { title: 'Assurance maladie principale', content: 'Content of Tab 2' },
    { title: 'Assurance maladie complementaire', content: 'Content of Tab 3' },
    { title: 'Relation familiale', content: 'Content of Tab 3' },
];

const PatientFormModal = ({dialogIsOpen, setIsOpen}:ModalProps  ) => {
    const [isInsured, setIsInsured] = useState<number>(0);
    const [hasSuppInsurance, setHasSuppInsurance] = useState<number>(0);  
    const [requerant, setRequerant] = useState<any | null>();
    const [executant, setExecutant] = useState<any | null>();
    const [activeTab, setActiveTab] = useState(0);

    // useEffect(() => {
    //   console.log("isInsured: ", isInsured);
    // }, [isInsured])
    
    const handleTabClick = (move: string) => {
        const lookupTable = {
            'next': {
                0: isInsured == 0 ? 3 : 1,
                1: hasSuppInsurance == 0 ? 3 : 2,
                2: 3
            },
            'prev': {
                1: 0,
                2: 1,
                3: isInsured == 0 ? 0 : isInsured == 1 && hasSuppInsurance == 0 ? 1 : 2
            }
        };
     
        let index = lookupTable[move][activeTab];
        setActiveTab(index);
     };  

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }
    //dialogIsOpen
  return (
    <>
    <Dialog
        isOpen={dialogIsOpen}        
        contentClassName="pb-0 px-0"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
        width={'90vw'}
    >
        <div className="px-6 pb-6">
            <div className="patient-w px-0 py-0">
                <Tabs selectedIndex={activeTab}>
                    <div className="flex flex-col w-full items-center h-full ">
                        <TabList className="flex justify-between h-[70px] mt-5 gap-2 w-[85%]">
                            {tabsData.map((item, index) => (
                                <Tab className={`new-patient-tab ${index < activeTab ? 'tab-completed':index > activeTab? 'tab-todo':''} w-[25%] text-[13px] text-center text-nael-blue-600 py-3 px-4 hover:cursor-pointer`}>
                                    {item.title}
                                </Tab>
                            ))}
                        </TabList>
                        <div className="flex-grow mt-7 pb-4 px-5 w-full">
                        <TabPanel>
                            <EtatCivil 
                            isInsured={isInsured}
                            setIsInsured={setIsInsured}
                            />
                        </TabPanel>
                        <TabPanel>
                            <AssurancePrincipale
                            hasSuppInsurance={hasSuppInsurance}
                            setHasSuppInsurance={setHasSuppInsurance}
                            />                            
                        </TabPanel>
                        <TabPanel>
                            <AssuranceComplementaire/>
                        </TabPanel>
                        <TabPanel>
                            <RelationFamiliale/>
                        </TabPanel>
                        </div>
                    </div>
                </Tabs>
                <div className="flex justify-between">
                    {activeTab<3 &&
                    <Button variant="twoTone" className='bg-transparent text-nael-second-blue border border-nael-second-blue hover:bg-nael-second-blue-light' size='md' onClick={onDialogClose}>
                        Quitter
                    </Button>
                    }
                    <div className="flex gap-4">
                    {activeTab>0 &&
                    <Button variant="twoTone" className="bg-transparent text-nael-second-blue border border-nael-second-blue hover:bg-nael-second-blue-light" size='md' onClick={()=>handleTabClick('prev')}>
                        Précédent
                    </Button>
                    }
                    {activeTab<3 ?
                    <Button
                        className="ltr:mr-2 rtl:ml-2 bg-nael-second-blue hover:bg-nael-second-blue"
                        variant="solid"
                        size='md'
                        onClick={()=>handleTabClick('next')}
                    >
                        Suivant
                    </Button>
                    :
                    <Button
                        className="ltr:mr-2 rtl:ml-2 bg-nael-second-blue hover:bg-nael-second-blue"
                        variant="solid"
                        size='md'
                        onClick={onDialogClose}
                    >
                        Terminer
                    </Button>
                    }
                    
                    
                    </div>
                </div>
            </div>
            
        </div>
    </Dialog>
    </>
  )
}

export default PatientFormModal;

