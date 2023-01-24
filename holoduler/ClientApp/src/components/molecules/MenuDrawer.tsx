import { VFC, memo } from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay
} from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickNow: () => void;
    onClickPrev: () => void;
    onClickNext: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
    const {
        isOpen,
        onClose,
        onClickNow,
        onClickPrev,
        onClickNext
    } = props;

    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody as="nav" p={0} bg="gray.100">
                        <Button w="100%" onClick={onClickNow}>
                            現在
                        </Button>
                        <Button w="100%" onClick={onClickPrev}>
                            昨日
                        </Button>
                        <Button w="100%" onClick={onClickNext}>
                            明日
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});
