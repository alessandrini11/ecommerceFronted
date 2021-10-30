
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Annoucement"
import Footer from "../components/Footer"
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;

    ${mobile({
        padding: "10px"
    })}
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
const Toptexts = styled.div`
    ${mobile({
        display: "none"
    })}
`
const Toptext = styled.span`
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column"
    })}
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column"
    })}
`
const ProductDetail = styled.p`
    display: flex;
    flex: 2;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`
const Details = styled.span`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`
const ProductSize = styled.span`

`
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;

    ${mobile({
        margin: "5px 30px"
    })}
`
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;

    ${mobile({
        marginBottom: "20px"
    })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    color: white;
    background-color: black;
    font-weight: 600;
    border: none;
    cursor: pointer
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
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1634028019864-c1f249ad1b03?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></Image>
                                <Details>
                                    <ProductName> <b>Product</b> Jessie Thunder Shoes</ProductName>
                                    <ProductId> <b>ID</b> 00695254870</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size</b>35.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add></Add>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove></Remove>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr></Hr>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></Image>
                                <Details>
                                    <ProductName> <b>Product</b> Jessie Thunder Shoes</ProductName>
                                    <ProductId> <b>ID</b> 00695254870</ProductId>
                                    <ProductColor color="crimson"/>
                                    <ProductSize><b>Size</b>35.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add></Add>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove></Remove>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr></Hr>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1635542653934-46f203fbc88e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></Image>
                                <Details>
                                    <ProductName> <b>Product</b> Jessie Thunder Shoes</ProductName>
                                    <ProductId> <b>ID</b> 00695254870</ProductId>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>Size</b>35.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add></Add>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove></Remove>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 30</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -3.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 30</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer></Footer>
        </Container>
    )
}

export default Cart
