import { IS_BROWSER } from "$fresh/runtime.ts";

import { SlButton } from "https://esm.sh/@shoelace-style/shoelace@2.8.0?alias=react:preact/compat,@types/react:preact/compat&external=preact&exports=SlButton";

export default function Example() {
  if (IS_BROWSER) {
    return (
      <SlButton>Test</SlButton>
    );
  } else {
    return <></>;
  }
}
