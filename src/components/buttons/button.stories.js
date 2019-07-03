import React from "react";
import ConfirmButtonA from "./ConfirmButtonA";
import ConfirmButtonB from "./ConfirmButtonB";
import SmallButton from "./SmallButton";
import OutlineButton from "./OutlineButton";
import ToggleButtonGroup from "./ToggleButtonGroup";
import { TextButtonA, TextButtonB, TextButtonC } from "./TextButton";
import { StoryBtnBox } from "../storyiesStyled";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("BUTTON|Types", module)
  .addDecorator(story => <div style={{ margin: 50 }}>{story()}</div>)
  .add("Confirm Button", () => (
    <StoryBtnBox>
      <h1>460 x 36</h1>
      <ConfirmButtonA onClick={action("onClick")} label="TYPE-A Purple" main />
      <ConfirmButtonA onClick={action("onClick1")} label="TYPE-A Gray" />
      <ConfirmButtonA onClick={action("onClick1")} label="DISABLED" disabled />

      <br />
      <br />
      <br />
      <br />

      <h1>560 x 54</h1>
      <ConfirmButtonB onClick={action("onClick1")} label="TYPE-B" />
      <ConfirmButtonB
        onClick={action("onClick1")}
        label="TYPE-B disabled"
        disabled
      />
    </StoryBtnBox>
  ))
  .add("Small Button", () => (
    <StoryBtnBox>
      <h1>90 x 28</h1>
      <SmallButton onClick={action("onClick-small")} label="Small" />
      <SmallButton
        onClick={action("onClick-small1")}
        label="Small Button text size over"
      />
      <SmallButton
        onClick={action("onClick-disabled")}
        label="Small"
        disabled
      />
      <SmallButton
        onClick={action("onClick-disabled1")}
        label="Small Button text size over"
        disabled
      />
      {/* 
      <br />
      <br />
      <hr />
      <br />
      <br /> */}
    </StoryBtnBox>
  ))
  .add("Outline Button", () => (
    <StoryBtnBox>
      <h1>Outline Button</h1>
      <OutlineButton onClick={action("onClick-small")} label="Small" outline />
      <OutlineButton
        onClick={action("onClick-small1")}
        label="Small Button text size over"
      />
      <OutlineButton
        onClick={action("onClick-disabled")}
        label="Small"
        disabled
      />
      <OutlineButton
        onClick={action("onClick-disabled1")}
        label="Small Button text size over"
        disabled
      />
      {/* 
      <br />
      <br />
      <hr />
      <br />
      <br /> */}
    </StoryBtnBox>
  ))

  .add("Text Button", () => (
    <StoryBtnBox>
      <h1>Text Button Type A</h1>
      <TextButtonA onClick={action("onClick-small")} label="Small" />
      <TextButtonA
        onClick={action("onClick-small1")}
        label="Small Button text size over"
      />
      <TextButtonA
        onClick={action("onClick-disabled")}
        label="Small"
        disabled
      />
      <TextButtonA
        onClick={action("onClick-disabled1")}
        label="Small Button text size over"
        disabled
      />

      <br />
      <br />
      <br />
      <br />

      <h1>Text Button Type B</h1>
      <TextButtonB onClick={action("onClick-small")} label="Small" />
      <TextButtonB
        onClick={action("onClick-small1")}
        label="Small Button text size over"
      />
      <TextButtonB
        onClick={action("onClick-disabled")}
        label="Small"
        disabled
      />
      <TextButtonB
        onClick={action("onClick-disabled1")}
        label="Small Button text size over"
        disabled
      />
      <br />
      <br />
      <br />
      <br />

      <h1>Text Button Type C</h1>
      <TextButtonC onClick={action("onClick-small")} label="Text Button C" />
      <TextButtonC
        onClick={action("onClick-small")}
        label="Text Button C"
        disabled
      />
      <br />
      <br />
      <TextButtonC
        onClick={action("onClick-small")}
        label="Text Button C"
        color="gray"
      />
      <TextButtonC
        onClick={action("onClick-small")}
        label="Text Button C"
        color="gray"
        disabled
      />
      <br />
      <br />
      <TextButtonC
        onClick={action("onClick-small")}
        label="Text Button C"
        color="white"
      />
      <TextButtonC
        onClick={action("onClick-small")}
        label="Text Button C"
        color="white"
        disabled
      />
    </StoryBtnBox>
  ))
  .add("toggle button group", () => (
    <StoryBtnBox>
      <h1>Toggle button group</h1>
      <ToggleButtonGroup onClick={action("onClick-small")} />
      <br />
      <ToggleButtonGroup onClick={action("onClick-small")} disabled={true} />

      {/* 
      <br />
      <hr />
      <br />
      <br /> */}
    </StoryBtnBox>
  ));
