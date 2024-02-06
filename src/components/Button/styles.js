import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Input = styled.div`
    height: 3em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.6em;
    background-color: #000000;
    color: #fafafa;
    padding: 0.5em;
    outline: 1px solid #888888;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    flex: 1;
    outline: 1px solid #888;
    height: 3.5em;

    background-color: ${({$isNum,$isEquals}) => {
        if($isNum){
            return "#e0e1e6"
        } else if ($isEquals){
            return "#c5c3cd"
        } else{
            return "#fe9241"
        }
    }};

    color: ${({$isNum,$isEquals}) => {
        if($isNum){
            return "#888"
        } else if ($isEquals){
            return "#000000"
        } else{
            return "#fff"
        }
    }}; 
`