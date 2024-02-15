import styled from "styled-components";

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
    bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={ bgColor } />;
}

export default Circle;