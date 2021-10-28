import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-align: center;

`
const Info = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600
`
const CategorieItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}></Image>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategorieItem
