import styled from "styled-components"
import Footer from "../components/Footer"
import Annoucement from "../components/Annoucement"
import Newsletter from "../components/Newletter"
import Navbar from "../components/Navbar"
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div``
const ImageContainer = styled.div`
    flex: 1;

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const Title = styled.h1`
    font-weight: 200
`
const Description = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color };
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.8s ease;
    &:hover{
        background-color: #f8f4f4;
    }
`
const Product = () => {
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://media.istockphoto.com/photos/this-is-how-you-sign-up-and-receive-amazing-offers-picture-id1195041781?b=1&k=20&m=1195041781&s=170667a&w=0&h=X7HmrfFRqWKv1k6yP7HWHTrBt9zYMCpnjte9ZtP_lcs="/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Amazing Shop</Title>
                    <Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Sed alias nihil ipsa cum architecto vitae, commodi suscipit 
                        dignissimos ipsam laborum ratione reprehenderit officia dolor 
                        eius quis possimus quisquam, corrupti veniam beatae. Quos facilis 
                        magnam fuga?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, 
                        ipsum rem praesentium et velit iusto dolores quam consequatur perferendis 
                        deleniti!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quos.
                    </Description>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove></Remove>
                            <Amount>1</Amount>
                            <Add></Add>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    )
}

export default Product
