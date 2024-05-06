import { db } from "@/firebase";
import styled from "@emotion/styled";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const MessageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  textarea {
    padding: 10px;
    width: 100%;
    height: 120px;
    background-color: none;
    resize: none;
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  & > div:last-of-type {
    font-size: 10px;
    color: gray;
  }
`;
export default function MessageListPage() {
  const [messageList, setMessageList] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "message"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessageList(messages);
    });

    return () => unsubscribe(); // 클린업 함수를 통해 리스너 해제
  }, []);

  return (
    <div style={{ height: "500px" }}>
      {messageList.length > 0 &&
        messageList.map((el: any, index: number) => (
          <MessageBox key={el.id}>
            <MessageHeader>
              <div>{el.name}</div>
              <div>{el.regDate}</div>
            </MessageHeader>
            <textarea readOnly value={JSON.parse(el.content)} />
          </MessageBox>
        ))}
    </div>
  );
}
