import Table from "components/table"

import CellRenderer from "./components/cellRenderer"

import styles from "./Todos.module.css"

const columns = [
    {
        field: "select",
        name: "",
        width: 30
    },
    {
        field: "name",
        name: "Name",
        width: 100
    },
    {
        field: "surname",
        name: "Surname",
        width: 150
    },
    {
        field: "birth",
        name: "Date of birth",
        align: "center",
        width: 120
    },
    {
        field: "age",
        name: "Age",
        align: "right",
        width: 80
    },
    {
        field: "phone",
        name: "Phone",
        width: 120
    },
    {
        field: "test",
        name: "My favorite column to have in a table",
        cellRenderer: "test"
    }
]

const data = [
    {
        id: 1,
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778",
        test: "404"
    },
    {
        id: 2,
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778",
        alter: true
    },
    {
        id: 3,
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778",
        test: "kļūda"
    },
    {
        id: 4,
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        id: 5,
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        id: 6,
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778",
        test: "promise",
        alter: true
    },
    {
        id: 7,
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    }
]

const dataMultiply = (data = [], multiplicator = 2) => {
    let newData = []

    for (let i = 0; i < multiplicator; i++) {
        newData.push(...data)
    }

    let id = 1
    newData = newData.map(item => ({
        ...item,
        id: id++
    }))

    return newData
}

const Todos = () => {
    return (
        <div className={styles["page-wrapper"]}>
            <Table
                columns={columns}
                data={dataMultiply(data, 4)}
                cellRenderers={{
                    test: CellRenderer
                }}
            />
        </div>
    )
}

export default Todos