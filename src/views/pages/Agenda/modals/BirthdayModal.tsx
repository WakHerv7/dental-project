import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'
import Avatar from '@/components/ui/Avatar';


type Props = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
    picture: string,
    username: string,
    birthdate: Date
}

const BirthdayModal = ({dialogIsOpen, setIsOpen,
    picture, username, birthdate}: Props) => {
    // const [dialogIsOpen, setIsOpen] = useState(false)

    const getFormattedDate = () => {
        // let date = new Date('2023-09-07');
        let date = new Date();

        // Define the month names in French
        const monthNames = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
        ];

        // Extract the day, month, and year from the date
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        // Generate the formatted date string
        let formattedDate = `${day} ${monthNames[month]} ${year}`;

        return formattedDate;
    }

    const getPersonAge = () => {
        let today = new Date();
        // Calculate the age
        let age = today.getFullYear() - birthdate.getFullYear();
        // Check if the birthdate hasn't occurred yet in the current year
        if (
        today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
            today.getDate() < birthdate.getDate())
        ) {
            age--;
        }
        return `${age}`; // Output: The person's age based on the current date
    }

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
        style={{
            content: {
                marginTop: 250,
            },
        }}
        contentClassName="pb-0 px-0"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
    >
        <div className="px-6 pb-6 justify-center items-center text-center">
            <Avatar
                size={70}
                src={picture}
                shape="circle"                
            />
            <h5 className="mb-4">{username}</h5>
            <p>
                Nous sommes le <strong>{getFormattedDate()}</strong>, et M. <strong>{username}</strong> a exactement <strong>{getPersonAge()} ans</strong> aujourd'hui. Souhaitez lui un
                <br/>
                <strong>JOYEUX ANNIVERSAIRE</strong>
            </p>
        </div>
        <div className="flex px-6 py-3 rounded-bl-lg rounded-br-lg">
            <Button
                className="ltr:mr-2 rtl:ml-2 w-full"
                onClick={onDialogClose}
            >
                Quitter
            </Button>
            <Button className=" w-full" variant="solid" onClick={onDialogOk}>
                Contacter
            </Button>
        </div>
    </Dialog>
    </>
  )
}

export default BirthdayModal