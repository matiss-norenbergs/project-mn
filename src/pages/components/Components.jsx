import PropTypes from "prop-types"

import { Button as AntButton } from "antd"

import PageLayout from "../../components/pageLayout"
import HeadingTitle from "../../components/headingTitle"
import Button from "../../components/button/Button"

import styles from "./Components.module.css"

const propTypes = {}

const Components = () => {

    const onBtnClick = () => console.log("clicked")

    return (
        <PageLayout>
            <HeadingTitle
                text="Components"
                icon="atom"
            />
            <Button.Group>
                <Button
                    type="primary"
                    onClick={onBtnClick}
                >
                    Primary
                </Button>
                <Button
                    onClick={onBtnClick}
                >
                    Default
                </Button>
                <Button
                    disabled
                    onClick={onBtnClick}
                >
                    Disabled
                </Button>
            </Button.Group>
            <AntButton.Group>
                <AntButton
                    type="primary"
                    onClick={onBtnClick}
                >
                    Ant primary
                </AntButton>
                <AntButton
                    onClick={onBtnClick}
                >
                    Ant Button
                </AntButton>
                <AntButton
                    disabled
                    onClick={onBtnClick}
                >
                    Ant disabled
                </AntButton>
            </AntButton.Group>
        </PageLayout>
    )
}
Components.propTypes = propTypes

export default Components