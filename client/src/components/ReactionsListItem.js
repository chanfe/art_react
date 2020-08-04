import React from "react";
import { List } from "semantic-ui-react";

const ReactionsListItem = (props) => {
  return(
    <List.Item>
      {/* <Image avatar src="" /> */}
      <List.Content>
        <List.Header>anonymous</List.Header>
        {props.text}
      </List.Content>
    </List.Item>
  );
};

export default ReactionsListItem;