import styled from "styled-components";

export const ProgressBar = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    width: ${(prop) => prop.Percent};
    background-color: #FFD800;

    div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 860px;

    p{
    color: #000;
    padding-left: .5em;
}
}
`