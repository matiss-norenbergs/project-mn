import PropTypes from "prop-types"
import { forwardRef, useRef } from "react"

import Button from "components/button"
import ModalComponent from "components/modalComponent"

import styles from "./Components.module.css"

const propTypes = {}

const TestComp = forwardRef((props, ref) => {
    //console.log(props)

    return "Content"
})

const Components = () => {

    const modalRef = useRef(null)

    const openModal = () => {
        modalRef.current?.open({ work: true })
    }

    return (
        <>
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
        </>
    )
}
Components.propTypes = propTypes

export default Components