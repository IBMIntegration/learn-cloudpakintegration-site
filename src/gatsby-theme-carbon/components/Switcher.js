import React from "react";
import Switcher from "gatsby-theme-carbon/src/components/Switcher";
import {
  SwitcherLink,
  SwitcherDivider,
} from "gatsby-theme-carbon/src/components/Switcher/Switcher";

const CustomSwitcher = (props) => {
  console.log("Props:", JSON.stringify(props));

  return (
    <Switcher {...props}>
      <SwitcherDivider>Trello</SwitcherDivider>
      <SwitcherLink
        href="https://trello.com/b/eQwv7WYt/tigerteam"
        target="_blank"
      >
        Tiger Team
      </SwitcherLink>
      <SwitcherLink
        href="https://trello.com/b/eQwv7WYt/tigerteam"
        target="_blank"
      >
        WW Tech Sales
      </SwitcherLink>
      <SwitcherDivider>GitHub</SwitcherDivider>
      <SwitcherLink href="https://github.com/IBMIntegration" target="_blank">
        IBM Integration Github
      </SwitcherLink>
      <SwitcherLink
        href="https://github.ibm.com/client-technical-engineering"
        target="_blank"
      >
        IBM CTE GitHub
      </SwitcherLink>
      <SwitcherDivider>Useful Tools</SwitcherDivider>
      <SwitcherLink href="https://app.mural.co" target="_blank">
        Mural
      </SwitcherLink>
    </Switcher>
  );
};

export default CustomSwitcher;
