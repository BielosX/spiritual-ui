import { Button } from "./Button/Button.tsx";
import { ButtonColor, ButtonVariant } from "./Button/ButtonProps.ts";

function App() {
  return (
    <>
      <Button color={ButtonColor.Primary} variant={ButtonVariant.Contained}>Primary</Button>
      <Button color={ButtonColor.Secondary} variant={ButtonVariant.Contained}>Secondary</Button>
      <Button color={ButtonColor.Primary} variant={ButtonVariant.Text}>Text</Button>
    </>
  );
}

export default App;
