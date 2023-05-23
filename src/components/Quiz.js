import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Quiz({ onClose }) {
    return (
        <main className="col-9 text-center p-4">
            <h3>This worked</h3>
            <Button
                variant='outline-danger'
                onClick={onClose}
            >
                Close
            </Button>
        </main>
    )
}

export default Quiz;