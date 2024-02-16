import Header from "components/header"
import MNIcon from 'components/mnIcon'
import Anchor from "components/anchor"
import Section from "components/section"

import styles from "./PageLayout.module.css"

const PageLayout = ({ children }) => {

    const anchorData = children.filter(item => {
        //console.log(item)
        return item.type === Section
    }).map(({ props }) => {
        //console.log(props)
        return {
            key: props.id,
            href: `/#${props.id}`,
            title: props?.title
        }
    })


    return (
        <>
            <Header
                logo={<MNIcon />}
                extraContent={<Anchor anchors={anchorData} />}
            />
            <section className={styles["page-wrapper"]}>
                {children}
            </section>
        </>
    )
}

export default PageLayout