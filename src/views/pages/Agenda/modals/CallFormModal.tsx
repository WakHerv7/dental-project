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
import {Checkbox, Radio} from '@/components/ui'
import InputGroup from '@/components/ui/InputGroup'
import { HiPlus, HiMinus } from 'react-icons/hi'
import Progress from '@/components/ui/Progress'
import Switcher from '@/components/ui/Switcher'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './style.css';

type ModalProps = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}


const CallFormModal = ({dialogIsOpen, setIsOpen}:ModalProps  ) => {

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

    const [rangeSlideValue, setRangeSlideValue] = useState([0, 1]);

    const handleChange = (value: number[]) => {
        setRangeSlideValue(value);
    };
    //-------------------------------------------------------

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
            <h4 className="mb-4">Fiche d'appel</h4>

            <div className="max-h-[67vh] overflow-y-auto px-5">
                <div className="mb-2">
                    <Input
                        placeholder="Rechercher un patient déjà existant..."
                        prefix={<HiOutlineSearch className="text-lg" />}
                    />
                </div>
                <hr />
                <section className="my-4">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
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
                        <FormItem label="Telephone du patient" >                        
                            <Input                        
                            type="text"
                            name="patient-phone"
                            placeholder="Telephone du patient"
                            />
                        </FormItem>
                        <FormItem label="Date de l'appel" >                        
                            <Input                        
                            type="date"
                            name="call-date"
                            placeholder="Date de l'appel"
                            />
                        </FormItem>
                    </div>
                    <div>
                        <FormItem label="Motif de l'appel" >                                
                            <Input
                            textArea
                            name="call-reason"
                            placeholder="Motif de l'appel"
                            />                        
                        </FormItem>
                    </div>
                </section>
                <section className="my-4">
                    <div className="font-[700] mb-4">
                        <Checkbox defaultChecked>
                            Douleurs
                        </Checkbox>
                        <hr />
                    </div>
                    <div>
                        <FormItem label="Intensité" >
                        <div className="mt-4 flex gap-4 items-center">
                            <RangeSlider
                            min={0}
                            max={10}
                            className={'single-thumb range-slider-nael'}
                            thumbsDisabled={[false, false]}
                            rangeSlideDisabled={true}
                            value={rangeSlideValue}
                            onInput={handleChange}
                            />
                            <h6>{rangeSlideValue[1]}</h6>
                            
                            {/* <Button size="sm" icon={<HiMinus />} onClick={onDecrease} />
                            <Progress color="nael-blue-600" className="mx-0 md:mx-4" percent={percentage} />
                            <Button size="sm" icon={<HiPlus />} onClick={onIncrease} /> */}
                            {/* <Progress variant="circle" percent={percentage} /> */}
                        </div>
                        </FormItem>

                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                            <FormItem label="Depuis quand" >                        
                                <Input                        
                                type="date"
                                name="since-when"
                                placeholder="Depuis quand"
                                />
                            </FormItem>
                            <FormItem label="Localisation" >                        
                                <div className="flex flex-wrap mt-3 ml-[20px] gap-4 relative w-[250px] h-[150px]">
                                    <Checkbox
                                    labelMargin={false}
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col-reverse gap-2 items-center w-[50px]"
                                    >Haut
                                    </Checkbox>
                                    <Checkbox
                                    labelMargin={false}
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 items-center w-[50px]"
                                    >Bas
                                    </Checkbox>
                                    <Checkbox
                                    labelMargin={false}
                                    className='absolute top-1/2 left-0 transform -translate-y-1/2 flex-row-reverse gap-2 w-[80px]'
                                    >Gauche
                                    </Checkbox>
                                    <Checkbox 
                                    className='absolute top-1/2 right-0 transform -translate-y-1/2 w-[70px]'
                                    >Droite
                                    </Checkbox>
                                </div>
                            </FormItem>
                            <FormItem label="Occurence" >                        
                                <div className="flex flex-wrap mt-3 gap-4">
                                    <Checkbox>Intermittente</Checkbox>
                                    <Checkbox>Continue</Checkbox>
                                    <Checkbox>Empeche de dormir</Checkbox>                                    
                                </div>
                            </FormItem>
                            <FormItem label="Sensibilité" >                        
                                <div className="flex flex-wrap mt-3 gap-4">
                                    <Checkbox>Au chaud</Checkbox>
                                    <Checkbox>Au froid</Checkbox>
                                    <Checkbox>Au sucre</Checkbox>
                                    <Checkbox>A la pression/mastication</Checkbox>                                    
                                </div>
                            </FormItem>
                            
                        </div>
                    </div>
                </section>
                <section className="my-4">
                    <div className="font-[700] mb-4">
                        <Checkbox>
                            Medicaments contre la douleur
                        </Checkbox>
                        <hr />
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                            <FormItem label="Lesquels" >                                
                                <Input
                                textArea
                                name="call-reason"
                                placeholder="Lesquels"
                                />
                            </FormItem>
                            <FormItem label="Sont-ils efficaces ?">
                                {/* <Switcher defaultChecked color="nael-blue-600"/> */}
                                <Radio.Group value={1} className='mt-3'>
                                    <Radio  className='mb-2' value={1}>Oui</Radio>
                                    <Radio  className='mb-2' value={2}>Non</Radio>
                                </Radio.Group>
                            </FormItem>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="my-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        
                        
                        <FormItem label="&nbsp;" >
                            <Checkbox>Oedeme (gonflement)</Checkbox>
                        </FormItem>
                        <FormItem label="&nbsp;" >
                            <Checkbox>Fièvre</Checkbox>
                        </FormItem>
                        <FormItem
                            label="Temperature"
                            className='flex gap-2'
                        >
                            <Input                        
                            type="number"
                            name="temperature"                            
                            />
                        </FormItem>
                    </div>  
                    <FormItem label="Remarques sur l'appel" >                                
                        <Input
                        textArea
                        name="call-notes"
                        placeholder="Remarques sur l'appel"
                        />
                    </FormItem>
                    <FormItem
                       label="Suite donnée à l'appel"
                        className=''
                    >
                        <Select
                            placeholder="..."
                            options={[
                                { value: '1', label: 'Suite 1'},
                                { value: '2', label: 'Suite 2'},
                            ]}
                        ></Select>
                    </FormItem>                  
                </section>

            </div>
        </div>
        <div className="flex justify-between px-6 py-3 rounded-bl-lg rounded-br-lg">
            <div>
                <Button
                    size='sm'
                    className="ltr:mr-2 rtl:ml-2 w-full"
                    onClick={onDialogClose}
                >
                    Donner un rendez-vous
                </Button>
            </div>
            <div>
                <Button
                    className="ltr:mr-2 rtl:ml-2"
                    variant="solid"
                    size='sm'
                    onClick={onDialogOk}
                >
                    Sauvegarder
                </Button>
                <Button variant="twoTone" size='sm' onClick={onDialogClose}>
                    Annuler
                </Button>
            </div>
        </div>
    </Dialog>
    </>
  )
}

export default CallFormModal;

