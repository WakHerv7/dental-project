import Button from '@/components/ui/Button';
import AddPatientModal from '../modals/waitingRoom/AddPatientModal';

const WaitingRoom = () => {
  return (
    <div>
        <h4 className="my-3">Salle d'attente</h4>
        <div className="flex flex-col gap-3">
            {/* <Button variant="solid">Ajouter un patient en salle d'attente</Button> */}
            <AddPatientModal/>
            <Button variant="twoTone">Voir la liste des patients en la salle d'attente</Button>
        </div> 
    </div>
  )
}

export default WaitingRoom