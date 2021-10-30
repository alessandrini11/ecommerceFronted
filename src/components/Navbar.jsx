import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import {mobile} from "../responsive"
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;

    ${mobile({
        height: "50px"
    })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    ${mobile({
        paddind: "10px 0"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center
`
const Language = styled.span` 
    font-size: 14px;
    cursor: pointer;

    ${mobile({
        display: "none"
    })}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-content: center;
    margin-left: 25px;
    padding: 5px


`
const Input = styled.input`
    border: none;

    ${mobile({
        width: "50px"
    })}
`
const Center = styled.div`
    flex: 1;
    text-align: center
`
const Logo = styled.h1`
    font-weight: bold;

    ${mobile({
        fontSize: "24px"
    })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: flex-end;

    ${mobile({
        flex: 2,
        justifyContent: "center"
    })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 0 10px;

    ${mobile({
        fontSize: "12px",
        marginLeft: "10px"
    })}
`
const Navbar = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"></Input>
                        <Search style={{color: "gray", fontSize: "16px"}}/>  
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
