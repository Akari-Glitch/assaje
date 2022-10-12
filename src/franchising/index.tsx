import React from 'react'
import Diventa from '../components/franchising/Diventa'
import Form from '../components/franchising/Form'
import FrontPage from '../components/franchising/FrontPage'
import Section1 from '../components/franchising/Section1'
import Section2 from '../components/franchising/Section2'

function Franchising() {
    return (
        <>
            <FrontPage />
            <Diventa />
            <Section1 />
            <Section2 />
            <Form />
        </>
    )
}

export default Franchising