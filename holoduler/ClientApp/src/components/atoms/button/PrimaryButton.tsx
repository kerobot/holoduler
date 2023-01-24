import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    isFullWidth?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    onClick: () => void;
};

export const PrimaryButton: VFC<Props> = (props) => {
    const {
        children,
        disabled = false,
        isLoading = false,
        onClick
    } = props;

    return (
        <Button
            bg="teal.400"
            color="white"
            disabled={disabled || isLoading}
            isLoading={isLoading}
            _hover={{ opacity: 0.8 }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
