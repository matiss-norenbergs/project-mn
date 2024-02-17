//import PropTypes from "prop-types"

import Sections from "components/sections"

import { homeSections } from "helpers/constants"

//import styles from "./Home.module.css"

const Home = () => {
    return (
        <Sections
            items={homeSections}
        />
    )
}

export default Home