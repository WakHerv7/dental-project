import {
    Button,
    Card,
    Dropdown,
    Input,
    Table,
    FormItem,
    Select,
    Upload,
    AvatarInput,
    Radio,
} from '@/components/ui';
import {
    Field,
    Form,
    Formik,
    FieldProps,
    FormikTouched,
    FormikErrors,
    FormikProps,
    FieldInputProps,
} from 'formik'
import DoubleSidedImage from '@/components/shared/DoubleSidedImage'
import type { PropsWithChildren } from 'react';
import nationalities from '@/assets/data/nationalities.json';
import cities from '@/assets/data/cities.json';
import professions from '@/assets/data/professions.json';

import {
    HiDotsVertical,
    HiOutlineSearch,
    HiPlus
} from 'react-icons/hi';
import PriorityTag from '@/components/shared/PriorityTag';
import { useState, useEffect } from 'react';
import { HiReply } from 'react-icons/hi';

const { Tr, Th, Td, THead, TBody } = Table

type Option = {
    value: string
    label: string
}
const categories: Option[] = [
    { value: 'a', label: 'Catégorie A'},
    { value: 'b', label: 'Catégorie B'},
    { value: 'c', label: 'Catégorie C'},
];
const civilities: Option[] = [
    { value: 'enft', label: 'Enft'},
    { value: 'mlle', label: 'Mlle'},
    { value: 'mme', label: 'Mme'},
    { value: 'mr', label: 'Mr'},
    { value: 'dr', label: 'Dr'},
    { value: 'pr', label: 'Pr'},
    { value: 'me', label: 'Me'},
];
const patientIsNewOptions: Option[] = [
    { value: 'o', label: 'Oui'},
    { value: 'n', label: 'Non'},
];
const genres: Option[] = [
    { value: 'male', label: 'Homme'},
    { value: 'female', label: 'Femme'},
    { value: 'other', label: 'Autre'},
];
const situations: Option[] = [
    { value: 'single', label: 'Celibataire'},
    { value: 'maried', label: 'Marié(e)'},
    { value: 'divorced', label: 'Divorcé(e)'},
    { value: 'maried', label: 'Marié(e)'},
    { value: 'pacsed', label: 'Pacsé(e)'},
    { value: 'widowed', label: 'Veuf(ve)'},
];
const referrers: Option[] = [
    { value: 'internet', label: 'Internet'},
    { value: 'patient', label: 'Patient'},
    { value: 'socialmedia', label: 'Réseaux sociaux'},
    { value: 'wordofmouth', label: 'Bouche à oreille'},
    { value: 'website', label: 'Site internet'},
];
const idDocuments: Option[] = [
    { value: 'cni', label: 'CNI'},
    { value: 'passeport', label: 'Passeport'},
    { value: 'residencepermit', label: 'Carte de séjour'},
    { value: 'drivinglicense', label: 'Permis de conduire'},
];

export type IdentificationType = {
    documentType: string
    passportCover: string
    passportDataPage: string
    nationalIdFront: string
    nationalIdBack: string
    driversLicenseFront: string
    driversLicenseBack: string
}
type FormModel = IdentificationType;

type IdentificationProps = {
    data: IdentificationType
    onNextChange?: (
        values: FormModel,
        formName: string,
        setSubmitting: (isSubmitting: boolean) => void
    ) => void
    onBackChange?: () => void
    currentStepStatus?: string
}
type DocumentUploadFieldProps = PropsWithChildren<{
    label: string
    name: keyof IdentificationType
    touched?: FormikTouched<IdentificationType>
    errors?: FormikErrors<IdentificationType>
}>

const DocumentUploadField = (props: DocumentUploadFieldProps) => {
    const { label, name, children, touched, errors } = props

    const onSetFormFile = (
        form: FormikProps<IdentificationType>,
        field: FieldInputProps<IdentificationType>,
        file: File[]
    ) => {
        form.setFieldValue(field.name, URL.createObjectURL(file[0]))
    }

    return (
        <FormItem
            label={label}
            invalid={errors && errors[name] && touched && touched[name]}
            errorMessage={errors && errors[name]}
        >
            <Field name={name}>
                {({ field, form }: FieldProps) => (
                    <Upload
                        draggable
                        className="cursor-pointer h-[300px]"
                        showList={false}
                        uploadLimit={1}
                        onChange={(files) => onSetFormFile(form, field, files)}
                        onFileRemove={(files) =>
                            onSetFormFile(form, field, files)
                        }
                    >
                        {field.value ? (
                            <img
                                className="p-3 max-h-[300px]"
                                src={field.value}
                                alt=""
                            />
                        ) : (
                            <div className="text-center">
                                {children}
                                <p className="font-semibold">
                                    <span className="text-gray-800 dark:text-white">
                                        Drop your image here, or{' '}
                                    </span>
                                    <span className="text-blue-500">
                                        browse
                                    </span>
                                </p>
                                <p className="mt-1 opacity-60 dark:text-white">
                                    Support: jpeg, png
                                </p>
                            </div>
                        )}
                    </Upload>
                )}
            </Field>
        </FormItem>
    )
}


type EtatCivilProps = {
    isInsured: number,
    setIsInsured: (val:number) => any
}

const EtatCivil = (props:EtatCivilProps) => {
    const { isInsured, setIsInsured } = props;

    const [patientIsNew, setPatientIsNew] = useState<any | null>();
    const [jobs, setJobs] = useState<any | null>();
    const [job, setJob] = useState<any | null>();
    const [countries, setCountries] = useState<any | null>();
    const [country, setCountry] = useState<any | null>();
    const [selectedCities, setSelectedCities] = useState<any | null>();
    const [nationality, setNationality] = useState<any | null>();
    const [city, setCity] = useState<any | null>();
    const [category, setCategory] = useState<any | null>();
    const [situation, setSituation] = useState<any | null>();
    const [civility, setCivility] = useState<any | null>();
    const [genre, setGenre] = useState<any | null>();
    const [referrer, setReferrer] = useState<any | null>();
    const [idDocument, setIdDocument] = useState<any | null>();

    useEffect(() => {
        groupCitiesByCountry(cities, nationalities);
    }, [])
    useEffect(() => {
        const villes = countries?.filter((item:any) => item.id === country)[0]?.villes;
        setSelectedCities(villes);    
    }, [country])
    
    function restructureData(inputData:any, dataType:string) {
        
        if (dataType == 'nationalite') {
            let pays = [];
            inputData['pays']?.map((item:any) => {
                pays = [...pays, {
                    value: item.id,
                    label: item.nationalite,
                }]
            });
            
            
            return pays;
            
         } else if (dataType == 'pays') {
            let pays = [];
            inputData[dataType].map((item:any) => {
                pays = [...pays, {
                    value: item.id,
                    label: item.libelle,
                }]
            });
            
            
            return pays;
            
         } else if (dataType == 'jobs') {
            let jobs = [];
            inputData['professions'].map((item:any) => {
                jobs = [...jobs, {
                    value: item.id,
                    label: item.name,
                }]
            });
            
            
            return jobs;
            
         } else if (dataType == 'ville') {
            return inputData.map((item:any) => {
                return {
                    value: item.id,
                    label: item.libelle,
                    // Add other properties as needed
                };
            });
         }

         
         
    }
    function restructuredCities(inputData:any) {
        return inputData.map((item:any) => {
            return {
                value: item.id,
                label: item.libelle,
                // Add other properties as needed
            };
        });
    }
    function groupCitiesByCountry(cities:any, nats:any) {
        let citiesByCountry = [];
        
        nats['pays']?.map((country:any) => {
          const citiesInCountry = cities['villes'].filter((city:any) => city.pays.id === country.id);      
          const updatedCountry ={... country, villes:restructureData(citiesInCountry, 'ville')}
          citiesByCountry = [...citiesByCountry, updatedCountry] ;
        });
        setCountries(citiesByCountry)
    }
    
    return (
        <>
        <div className="">
            <h2 className='text-center text-nael-gray'>Etat Civil</h2>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-7">
                <div className='wgrid-column'>
                    <FormItem label="Civilité" className='my-4'>
                        <Select<Option>
                            options={civilities}
                            size="sm"
                            className="mb-4"
                            name="civility"
                            value={civilities.filter((option) => option.value === civility)}
                            onChange={(cat)=>setCategory(cat?.value)}
                        />
                    </FormItem>
                    <FormItem label="Prénom" className='my-4'>
                        <Input
                        size="sm"                 
                        type="text"
                        name="lastname"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Nationalité" className='my-4'>
                        <Select<Option>
                            options={restructureData(nationalities, 'nationalite')}
                            size="sm"
                            className=""
                            name="nationality"
                            value={nationality?.value}
                            onChange={(elt)=>setNationality(elt?.value)}
                        />
                    </FormItem>
                    <FormItem label="Adresse" className='my-4'>
                        <Input
                        size="sm"
                        type="text"
                        name="address"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Site web" className='my-4'>
                        <Input
                        size="sm"                        
                        type="text"
                        name="website"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Profession" className='my-4'>
                        <Select<Option>
                            options={restructureData(professions, 'jobs')}
                            size="sm"
                            className=""
                            name="profession"
                            value={job?.value}
                            onChange={(item)=>setJob(item?.value)}
                        />
                    </FormItem>
                    <FormItem label="Nouveau patient" className='my-4'>
                        <Select<Option>
                            options={patientIsNewOptions}
                            size="sm"
                            className=""
                            name="new-patient"
                            value={patientIsNewOptions.filter((option) => option.value === patientIsNew)}
                            onChange={(item)=>setPatientIsNew(item?.value)}
                        />
                    </FormItem>
                </div>
                <div className='wgrid-column'>
                    <FormItem label="Nom" className='my-4'>
                        <Input
                        size="sm"                      
                        type="text"
                        name="firstname"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Date de naissance" className='my-4'>
                        <Input
                        size="sm"                       
                        type="date"
                        name="birthday"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Ethnie" className='my-4'>
                        <Input
                        size="sm"                        
                        type="text"
                        name="ethnicity"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Code postal" className='my-4'>
                        <Input
                        size="sm"                        
                        type="text"
                        name="postal-code"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Num. téléphone personnel" className='my-4'>
                        <Input
                        size="sm"                        
                        type="phone"
                        name="personal-phone"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Société" className='my-4'>
                        <Input
                        size="sm"                        
                        type="text"
                        name="company"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Date du 1er rdv" className='my-4'>
                        <Input
                        size="sm"                        
                        type="date"
                        name="first-date"
                        placeholder=""
                        />
                    </FormItem>
                </div>
                <div className='wgrid-column'>
                    <FormItem label="Nom de jeune fille/garcon"  className='my-4'>
                        <Input
                        size="sm"                        
                        type="text"
                        name="youth-name"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Age"  className='my-4'>
                        <Input
                        size="sm"                        
                        type="number"
                        name="age"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Pays de résidence" className='my-4'>
                        <Select<Option>
                            options={restructureData(nationalities, 'pays')}
                            size="sm"
                            className=""
                            name="living-country"
                            value={country?.value}
                            onChange={(item)=>setCountry(item?.value)}
                        />
                    </FormItem>
                    <FormItem label="Adresse mail personnelle"  className='my-4'>
                        <Input
                        size="sm"                        
                        type="email"
                        name="personal-mail"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Num. téléphone professionnel" className='my-4'>
                        <Input
                        size="sm"                        
                        type="phone"
                        name="work-phone"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Référé(e)" className='my-4'>
                        <Select<Option>
                            options={referrers}
                            size="sm"
                            className=""
                            name="referee"
                            value={referrers.filter((option) => option.value === referrer)}
                            onChange={(item)=>setReferrer(item?.value)}
                        />
                    </FormItem>
                    <FormItem label="Pièce d'identité" className='my-4'>
                        <Select<Option>
                            options={idDocuments}
                            size="sm"
                            className=""
                            name="id-card-type"
                            value={idDocuments.filter((option) => option.value === idDocument)}
                            onChange={(item)=>setIdDocument(item?.value)}
                        />
                    </FormItem>
                </div>
                <div className='wgrid-column'>
                    <FormItem className='my-4'>
                    <AvatarInput
                        name="photo"
                        size={100}
                        label="Charger la photo" 
                    />
                    </FormItem>
                    <FormItem label="Sexe" className='my-4'>
                        <Select<Option>
                            options={genres}
                            size="sm"
                            className=""
                            name="genre"
                            value={genres.filter((option) => option.value === genre)}
                            onChange={(item)=>setGenre(item?.value)}
                        />
                    </FormItem>
                    <FormItem label="Ville de résidence"  className='my-4'>                        
                        <Select<Option>
                            options={selectedCities}
                            size="sm"
                            className=""
                            name="genre"
                            value={city?.value}
                            onChange={(item)=>setCity(item?.value)}
                        />
                        
                    </FormItem>
                    <FormItem label="Adresse mail professionnelle"  className='my-4'>
                        <Input
                        size="sm"                        
                        type="email"
                        name="personal-mail"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Numero Whatsapp"  className='my-4'>
                        <Input
                        size="sm"                        
                        type="phone"
                        name="whatsapp-number"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem label="Nom du référant"  className='my-4'>
                        <Input
                        size="sm"                        
                        type="text"
                        name="referrer-name"
                        placeholder=""
                        />
                    </FormItem>
                    <FormItem className='my-4'>
                    <AvatarInput
                        name="id-document"
                        size={60}
                        label="Scanner la pièce d'identité" 
                    />
                    </FormItem>
                    <FormItem label="Etes)vous assuré(e) ?">                        
                        <Radio.Group 
                        value={isInsured} 
                        className='mt-3'
                        onChange={(val)=>setIsInsured(val)}
                        >
                            <Radio className='mb-2' value={1}>Oui</Radio>
                            <Radio  className='mb-2' value={0}>Non</Radio>
                        </Radio.Group>
                    </FormItem>
                </div>
            </div>
        </div>
        </>
    )
}

export default EtatCivil

