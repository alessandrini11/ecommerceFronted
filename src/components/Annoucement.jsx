import styled  from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center
`

const Annoucement = () => {
    return (
        <Container>
            super deal! free shipping on orders over $50
        </Container>
    )
}

export default Annoucement
