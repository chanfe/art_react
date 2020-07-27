import React from "react";
import { List } from "semantic-ui-react";

const ReactionsList = (props) => {
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

export default ReactionsList;