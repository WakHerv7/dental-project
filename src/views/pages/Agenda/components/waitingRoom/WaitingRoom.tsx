import Button from '@/components/ui/Button';
import AddPatientModal from '../../modals/waitingRoom/AddPatientModal';
import WaitingListModal from '../../modals/waitingRoom/WaitingListModal';
import {useState } from 'react';

const WaitingRoom = () => {
    const [searchDialogOpen, setSearchDialogOpen] = useState(false);
    
  return (
    <div>
        <h4 className="my-3">Salle d'attente</h4>
        <div className="flex flex-col gap-3">
            <Button onClick={()=>setSearchDialogOpen(true)} variant="solid">Ajouter un patient en salle d'attente</Button>
            <AddPatientModal
            searchDialogOpen={searchDialogOpen}
            setSearchDialogOpen={setSearchDialogOpen}
            />
            <WaitingListModal
            searchDialogOpen={searchDialogOpen}
            setSearchDialogOpen={setSearchDialogOpen}
            />
            {/* <Button variant="twoTone">Voir la liste des patients en la salle d'attente</Button> */}
        </div> 
    </div>
  )
}

export default WaitingRoom