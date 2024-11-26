import { Button } from "./Button/Button.tsx";
import { ButtonColor, ButtonVariant } from "./Button/ButtonProps.ts";
import { Checkbox } from "./Checkbox/Checkbox.tsx";
import { CheckboxColor } from "./Checkbox/CheckboxProps.ts";
import { List, ListItem, ListItemIcon, ListItemText } from "./List/List.tsx";
import { ArrowCircleRightIcon } from "./icons/ArrowCircleRightIcon/ArrowCircleRightIcon.tsx";
import { useState } from "react";
import { Dialog } from "./Dialog/Dialog.tsx";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <Button color={ButtonColor.Primary} variant={ButtonVariant.Contained}>
        Primary
      </Button>
      <Button color={ButtonColor.Secondary} variant={ButtonVariant.Contained}>
        Secondary
      </Button>
      <Button
        onClick={() => console.log("Text")}
        color={ButtonColor.Primary}
        variant={ButtonVariant.Text}
      >
        Text
      </Button>
      <Button color={ButtonColor.Primary} variant={ButtonVariant.Outlined}>
        Outlined
      </Button>
      <Button color={ButtonColor.Secondary} variant={ButtonVariant.Outlined}>
        Outlined
      </Button>
      <Checkbox />
      <Checkbox color={CheckboxColor.Secondary} checked={true} />
      <List>
        <ListItem>
          <ListItemText>One</ListItemText>
          <ListItemIcon>
            <ArrowCircleRightIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>Two</ListItemText>
          <ListItemIcon>
            <ArrowCircleRightIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>Third Item</ListItemText>
        </ListItem>
      </List>
      <Button
        color={ButtonColor.Primary}
        onClick={() => setIsModalOpened(true)}
        variant={ButtonVariant.Outlined}
      >
        Open Modal
      </Button>
      <Dialog
        open={isModalOpened}
        onBackdropClick={() => setIsModalOpened(false)}
      >
        Hello
      </Dialog>
    </>
  );
}

export default App;
