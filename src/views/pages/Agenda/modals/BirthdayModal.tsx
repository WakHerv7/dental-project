import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'
import Avatar from '@/components/ui/Avatar';
import getFormattedDate from '@/utils/getFormattedDate';
import getPersonAge from '@/utils/getPersonAge';

type Props = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
    picture: string,
    username: string,
    birthdate: string,
}

const BirthdayModal = ({dialogIsOpen, setIsOpen,
    picture, username, birthdate}: Props) => {
    // const [dialogIsOpen, setIsOpen] = useState(false)

    

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
                Nous sommes le <strong>{getFormattedDate()}</strong>, et M. <strong>{username}</strong> a exactement <strong>{getPersonAge(birthdate)} ans</strong> aujourd'hui. Souhaitez lui un
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