import { Button } from "./Button/Button.tsx";
import { ButtonColor } from "./Button/ButtonProps.ts";

function App() {
  return (
    <>
      <Button>Primary</Button>
      <br />
      <Button color={ButtonColor.Secondary}>Secondary</Button>
    </>
  );
}

export default App;
