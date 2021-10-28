import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategorieItem from './CategorieItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
const Categorie = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategorieItem item={item}/>
            ))}
        </Container>
    )
}

export default Categorie
