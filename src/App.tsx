import { Button } from "./Button/Button.tsx";
import { ButtonColor, ButtonVariant } from "./Button/ButtonProps.ts";
import { Checkbox } from "./Checkbox/Checkbox.tsx";
import { CheckboxColor } from "./Checkbox/CheckboxProps.ts";

function App() {
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
    </>
  );
}

export default App;
