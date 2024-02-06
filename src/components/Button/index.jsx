import { Container, Input, Wrapper } from "./styles";
import { isEquals, isNum } from "../../utils/ButtonControllers";

const Button = ({children, onClick, isInput}) =>{

    return(
        <Container>
            {
                isInput
                ? <Input>{children}</Input>
                :<Wrapper
                    onClick={() => onClick(children)}
                    $isNum = {isNum(children)}
                    $isEquals = {isEquals(children)}
                >
                    {children}
                </Wrapper>
            }

        </Container>
    )
}

export default Button