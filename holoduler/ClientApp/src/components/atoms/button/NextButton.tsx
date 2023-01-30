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
            leftIcon={<ArrowRightIcon />}
            colorScheme='facebook'
            variant='outline'
            display="block"
            onClick={onClick}
        />
    );
};
