import PropTypes from "prop-types"

import styles from "./Table.module.css"

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        field: PropTypes.string,
        name: PropTypes.string,
        width: PropTypes.number,
        textAlign: PropTypes.string
    })),
    data: PropTypes.array
}
const defaultProps = {
    columns: [],
    data: []
}

const Table = ({
    columns,
    data
}) => {
    return (
        <div className={styles["table-outer-wrapper"]}>
            <table className={styles["table-wrapper"]}>
                <caption className={styles["table-caption"]}>
                    Caption
                </caption>
                <thead>
                    <tr>
                        {columns.map(({
                            field,
                            name,
                            width,
                            textAlign
                        }) => (
                            <th
                                key={field}
                            >
                                {name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map(({
                                field,
                                name,
                                width,
                                textAlign
                            }) => (
                                <td
                                    key={field}
                                    data-cell={name}
                                >
                                    {row[field]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
Table.propTypes = propTypes
Table.defaultProps = defaultProps

export default Table