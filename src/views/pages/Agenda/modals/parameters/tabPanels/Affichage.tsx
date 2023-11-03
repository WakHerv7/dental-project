import React from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form';
import {Select, Checkbox} from '@/components/ui';

const Affichage = () => {
  return (
    <div>
        <section className='mb-5'>
            <h5 className="mb-4">Planning</h5>
            <FormItem
                label="Découpage des heures"
                className='flex gap-4 ml-3'
            >
                <Select
                    placeholder="30 mins"
                    options={[
                        { value: '5', label: '5 mins'},
                        { value: '10', label: '10 mins'},
                        { value: '15', label: '15 mins'},
                        { value: '20', label: '20 mins'},
                        { value: '25', label: '25 mins'},
                        { value: '30', label: '30 mins'},
                    ]}
                ></Select>
            </FormItem>
        </section>

        <section className=''>
            <h5 className="mb-4">Mise en forme du rendez-vous</h5>
            <FormItem 
            label="Données à afficher dans l'apercu de l'agenda" 
            className='flex flex-col gap-5 ml-3'>                        
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <Checkbox>Heure de debut</Checkbox>
                    <Checkbox>Nom du patient</Checkbox>
                    <Checkbox>N° dossier patient</Checkbox>
                    <Checkbox>Adresse</Checkbox>
                    <Checkbox>Téléphone du patient</Checkbox>
                    <Checkbox>Ville</Checkbox>
                    <Checkbox>Date de naissance</Checkbox>
                    <Checkbox>Notes de rendez-vous</Checkbox>
                    <Checkbox>N° assurance</Checkbox>
                    <Checkbox>Email</Checkbox>
                </div>
            </FormItem>
        </section>

    </div>
  )
}

export default Affichage
