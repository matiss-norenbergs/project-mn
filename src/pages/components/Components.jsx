//import PropTypes from "prop-types"
import { forwardRef, useRef } from "react"

import Button from "components/button"
import ModalComponent from "components/modalComponent"
import Dropdown from "components/dropdown"
import Tooltip from "components/tooltip"

import styles from "./Components.module.css"

const propTypes = {}

const TestComp = forwardRef((props, ref) => {
    //console.log(props)

    return "Content"
})

const Item = ({
    children,
    label,
    height
}) => {
    return (
        <div
            className={styles["item-wrapper"]}
            data-label={label}
            style={{ height }}
        >
            <div className={styles["item-content"]}>
                {children}
            </div>
        </div>
    )
}

const Components = () => {

    const modalRef = useRef(null)

    const openModal = () => {
        modalRef.current?.open({ work: true })
    }

    const handleDropdownClick = (dKey) => {
        console.log(`Item clicked: ${dKey}`)
    }

    return (
        <div className={styles["page-wrapper"]}>
            <Item label="Button & group">
                <Button>
                    {"Button"}
                </Button>
                <Button type="primary">
                    {"Primary"}
                </Button>
                <Button
                    type="ghost"
                    faIcon="ghost"
                >
                    {"Ghost"}
                </Button>
                <Button.Group>
                    <Button>
                        {"Group"}
                    </Button>
                    <Button
                        type="primary"
                        faIcon="person"
                    >
                        {"of"}
                    </Button>
                    <Button>
                        {"buttons"}
                    </Button>
                </Button.Group>
                <Button.Group disabled>
                    <Button type="primary">
                        {"Disabled"}
                    </Button>
                    <Button>
                        {"buttons"}
                    </Button>
                </Button.Group>
            </Item>
            <Item label="Modal component">
                <Button onClick={openModal}>
                    {"Open modal"}
                </Button>
                <ModalComponent
                    ref={modalRef}
                    title="Title"
                    component={
                        <TestComp />
                    }
                />
            </Item>
            <Item label="Dropdown">
                <Dropdown
                    items={[
                        {
                            key: 1,
                            label: "Item 1",
                            onClick: handleDropdownClick
                        },
                        {
                            key: 2,
                            label: "Item 2",
                            selected: true,
                            disabled: false,
                            onClick: handleDropdownClick
                        },
                        {
                            key: 3,
                            label: "Longer item 3",
                            onClick: handleDropdownClick
                        },
                        {
                            key: 4,
                            label: "Disabled item 4",
                            disabled: true,
                            onClick: handleDropdownClick
                        }
                    ]}
                >
                    <Button type="primary">
                        {"Dropdown"}
                    </Button>
                </Dropdown>
            </Item>
            <Item label="Tooltip">
                <Tooltip text="Šaursliežu dzelzceļš">
                    <Button>{"I have a tooltip"}</Button>
                </Tooltip>
            </Item>
        </div>
    )
}
Components.propTypes = propTypes

export default Components