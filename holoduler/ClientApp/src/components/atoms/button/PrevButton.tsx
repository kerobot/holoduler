import { VFC } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

type Props = {
    onClick: () => void;
};

export const PrevButton: VFC<Props> = (props) => {
    const { onClick } = props;
    return (
        <Button
            leftIcon={<ArrowLeftIcon />}
            colorScheme='facebook'
            variant='outline'
            display="block"
            onClick={onClick}
        />
    );
};
