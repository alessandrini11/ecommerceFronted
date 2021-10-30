import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategorieItem from './CategorieItem'
import { mobile } from '../responsive'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile({
        padding: "0px",
        flexDirection: "column",
        margin: "10px 0"
    })}
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
