import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';

function Header() {
    return (
        <header 
            className='bg-light d-flex justify-content-around p-3'
        >
            <h1>Quiz Editor</h1>

            <div>
            <Button variant="outline-success">
                <Plus />
                Create New Quiz
            </Button>
            </div>
        </header>
    );
}

export default Header;