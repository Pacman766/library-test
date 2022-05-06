import './App.css';
import {
  Form,
  Container,
  Dropdown,
  InputGroup,
  DropdownButton,
  FormControl,
} from 'react-bootstrap';
import { DatePicker, Space, Checkbox, Table } from 'antd';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

function App() {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description:
        'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];

  const { RangePicker } = DatePicker;
  return (
    <div className="App mt-3">
      <Container>
        <Form className="container">
          <div className="row">
            <Form.Group
              className="mb-3 col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Номер: </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3 col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Номер: </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Space direction="horizontal" size={12}>
              <RangePicker />
            </Space>
            <DropdownButton className='mb-3' id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Checkbox>Checkbox</Checkbox>
          </div>
          <div className="row">
            <Form.Group
              className="mb-3 col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Номер: </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3 col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Номер: </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group
              className="mb-3 col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Номер: </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3 col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Номер: </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />
      </Container>
    </div>
  );
}

export default App;
