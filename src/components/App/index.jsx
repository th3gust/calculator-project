import { useState } from "react";
import Button from "../Button";
import { Container, Wrapper, Row } from "./styles";
import { arrOperators } from "../../utils/Operators";
import * as math from "mathjs";

const App = () =>{
    
    const [input, setInput] = useState('')

    const insertNumber = (value) =>{
        setInput(input + value)
    }

    const insertOperator = (value) =>{
        if (input === "" || arrOperators.includes(input[input.length - 1]) && arrOperators.includes(value)){
            return
        } else{
            setInput(input+value)
        }
    }

    const calculate = () =>{
        if (input === '' || arrOperators.includes(input[input.length - 1])){
            return
        } else{
            setInput(math.evaluate(input))
        }
    }

    return (
        <Container>
            <Wrapper>
            <Button isInput={true}>{input}</Button>
            <Row>
                <Button onClick={insertNumber}>7</Button>
                <Button onClick={insertNumber}>8</Button>
                <Button onClick={insertNumber}>9</Button>
                <Button onClick={insertOperator}>/</Button>
            </Row>
            <Row>
                <Button onClick={insertNumber}>4</Button>
                <Button onClick={insertNumber}>5</Button>
                <Button onClick={insertNumber}>6</Button>
                <Button onClick={insertOperator}>*</Button>
            </Row>
            <Row>
                <Button onClick={insertNumber}>1</Button>
                <Button onClick={insertNumber}>2</Button>
                <Button onClick={insertNumber}>3</Button>
                <Button onClick={insertOperator}>+</Button>
            </Row>
            <Row>
                <Button onClick={insertOperator}>.</Button>
                <Button onClick={insertNumber}>0</Button>
                <Button onClick={() => setInput('')}>C</Button>
                <Button onClick={insertOperator}>-</Button>
            </Row>
            <Row>
                <Button onClick={calculate}>=</Button>
            </Row>
            
            </Wrapper>
        </Container>
    )
}

export default App