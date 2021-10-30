import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react"
import { sliderItems } from "../data"
import { mobile } from "../responsive"
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 20px;

    ${mobile({
        display: "none"
    })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all .8s ease;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg}
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%
`
const Image = styled.img`
    height: 80%;
    width: 100%;
`
const InfosContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer
`
const Slider = () => {
    const [slideIndex,setSlideIndex] =  useState(0)
    const handleClick = (direction) => {
        switch (direction) {
            case ("left"):
                setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
                break;
            case ("right"):
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
                break;
            default:
                break;
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                { sliderItems.map(item => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImageContainer>
                            <Image src={item.img}></Image>
                        </ImageContainer>
                        <InfosContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfosContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("left")}>
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>
        </Container>
    )
}

export default Slider
