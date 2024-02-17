import Table from "components/table"

import styles from "./Todos.module.css"

const columns = [
    {
        field: "name",
        name: "Name",
    },
    {
        field: "surname",
        name: "Surname",
    },
    {
        field: "birth",
        name: "Date of birth",
    },
    {
        field: "age",
        name: "Age",
    },
    {
        field: "phone",
        name: "Phone",
    },
    {
        field: "fav1",
        name: "My favorite column to have in a table",
    }
]

const data = [
    {
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    },
    {
        name: "Matīss",
        surname: "Norenbergs",
        birth: "05/03/02",
        age: 21,
        phone: "123456778"
    }
]

const Todos = () => {
    return (
        <div className={styles["page-wrapper"]}>
            <Table
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default Todos