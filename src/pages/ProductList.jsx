import styled from "styled-components"
import Navbar from "../components/Navbar"
import Annoucement from "../components/Annoucement"
import Products from "../components/Products"
import Newletter from "../components/Newletter"
import Footer from "../components/Footer"
const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px
`
const FilterContainer =  styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`

const Select = styled.select`
    padding: 10px;
    margin: 0 20px;
`
const Option = styled.option``
const ProductList = () => {
    return (
        <Container>
            <Annoucement></Annoucement>
            <Navbar></Navbar>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products :</FilterText>
                    <Select>
                        <Option disabled selected >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products :</FilterText>
                    <Select>
                        <Option selected >Newsest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products></Products>
            <Newletter></Newletter>
            <Footer></Footer>
        </Container>
    )
}

export default ProductList
