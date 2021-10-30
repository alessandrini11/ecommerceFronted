
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Annoucement"
import Footer from "../components/Footer"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"}
    Background-color: ${props => props.type === "filled" ? "black" : "transparent"}
    color: ${props => props.type === "filled" && "none"}
`
const Toptexts = styled.div``
const Toptext = styled.span`
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const infos = styled.div``
const Summary = styled.div`
    flex:1;
`
const Cart = () => {
    return (
        <Container>
            <Announcement></Announcement>
            <Navbar></Navbar>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <Toptexts>
                        <Toptext>Shopping Bag (2)</Toptext>
                        <Toptext>Your Wish List (0)</Toptext>
                    </Toptexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Summary>summary</Summary>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1634028019864-c1f249ad1b03?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></Image>
                            </ProductDetail>
                            <PricetDetail>
                                <ProductName> <b>Product</b> Jessie Thunder Shoes</ProductName>
                            </PricetDetail>
                            <PriceId>
                                <ProductName> <b>ID</b> 695 254 870</ProductName>
                            </PriceId>
                            <PriceSize>
                                <ProductName> <b>Size</b> Jessie Thunder Shoes</ProductName>
                            </PriceSize>
                            <PriceId>
                                <ProductName> <b>Product</b> Jessie Thunder Shoes</ProductName>
                            </PriceId>
                        </Product>
                    </Info>
                </Bottom>
            </Wrapper>
            <Footer></Footer>
        </Container>
    )
}

export default Cart
