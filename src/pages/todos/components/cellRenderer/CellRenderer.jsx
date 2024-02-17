import FaIcon from "components/faIcon"

const CellRenderer = ({
    value,
    data
}) => {
    return (
        <span>
            <FaIcon icon={data?.alter ? "check" : "home"} padded />
            {value}
        </span>
    )
}

export default CellRenderer