import { VFC } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

type Props = {
    onClick: () => void;
};

export const NextButton: VFC<Props> = (props) => {
    const { onClick } = props;
    return (
        <Button
            rightIcon={<ArrowRightIcon />}
            colorScheme='blue'
            variant='solid'
            display="block"
            onClick={onClick}
        >Next</Button>
    );
};
