import { breakPoints } from "@/common/mediaQuery/media";
import { db } from "@/firebase";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent, useState } from "react";

const DialogKeyframes = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MessageDialogBox = styled.dialog`
  width: 50%;
  height: max-content;
  padding: 20px;
  border: none;
  &[open] {
    animation: ${DialogKeyframes} 500ms forwards ease;
  }
  ::backdrop {
    background-color: #ababab;
    opacity: 0.6;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0px 10px 0px;
`;
const NameInput = styled.input`
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 14px;
  }
`;
const TextArea = styled.textarea`
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
  height: 300px;
  resize: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 14px;
  }
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 8px;
  background-color: #f5eee0;
  :focus {
    outline: none;
  }
`;
export default function MessageDialog(props: any) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onClickSendMessage = async () => {
    try {
      await addDoc(collection(db, `message`), {
        name,
        content: JSON.stringify(content),
      });
      alert("신랑 신부에게 축하메세지를 전해주셔서 감사합니다.");
      props.closeDialog();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MessageDialogBox ref={props.messageDialogRef}>
      <Close autoFocus={false} onClick={props.closeDialog}>
        X
      </Close>
      <Content>
        <div>이름</div>
        <NameInput
          autoFocus={false}
          placeholder="성함을 입력해주세요."
          type="text"
          onChange={onChangeName}
        />
      </Content>
      <Content>
        <div>내용</div>
        <TextArea
          autoFocus={false}
          placeholder="내용을 입력해주세요."
          onChange={onChangeContent}
        />
      </Content>
      <Button onClick={onClickSendMessage}>마음 전하기</Button>
    </MessageDialogBox>
  );
}
