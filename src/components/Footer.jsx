import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
const Container = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column"
    })}
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex: 1;

`
const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcons = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color };
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({
        backgroundColor: "#fff8f8"
    })}
`
const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({
        display: "none"
    })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px,
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 100%
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ad enim alias voluptatem cumque, possimus praesentium fugit, 
                    iure dolores odio obcaecati totam. Odit eos cumque, error et beatae, 
                    nemo non repellendus placeat fugit
                </Description>
                <SocialContainer>
                    <SocialIcons color="3b5999">
                        <Facebook/>
                    </SocialIcons>
                    <SocialIcons color="e4405f">
                        <Instagram/>
                    </SocialIcons>
                    <SocialIcons color="55acee">
                        <Twitter/>
                    </SocialIcons>
                    <SocialIcons color="e60023">
                        <Pinterest/>
                    </SocialIcons>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}></Room>
                    Akwa 2 églises, Rue 253 Dr Jamot
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}></Phone>
                    +237 695254870
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight: "10px"}}></Mail>
                    alexandreschuame@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
            </Right>
        </Container>
    )
}

export default Footer
