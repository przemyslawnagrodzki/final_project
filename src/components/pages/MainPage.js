import { useSelector } from "react-redux"
import ListGroup from 'react-bootstrap/ListGroup';
import { Stack, Button, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllTables } from '../../redux/tablesRedux';

const MainPage = () => {
    const tables = useSelector(getAllTables)
    return (
        <form>
            <h1 className='my-3'>All tables</h1>
            <ListGroup variant="flush">
                {tables.map(table => (
                    <ListGroup.Item className="px-04">
                        <Stack direction="horizontal" gap={4}>
                            <h2>Table {table.id}</h2>
                            <p className="mb-0"><strong>Status:</strong>{table.status}</p>
                            <p className="mb-0"></p>
                            <Link className="ms-auto" to={`/table/${table.id}`}>
                                <Button variant="primary">Show more</Button>
                            </Link>
                        </Stack>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </form>
    )
}

export default MainPage