import { db } from "@/firebase";
import styled from "@emotion/styled";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const MessageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  textarea {
    padding: 10px;
    width: 100%;
    height: 200px;
  }
`;

export default function MessageListPage() {
  const [messageList, setMessageList] = useState<any[]>([]);
  const getItems = async () => {
    const query = await getDocs(collection(db, "message"));
    const data: any[] = [];
    setMessageList(() => {
      query.forEach((el) => data.push(el.data()));
      return data;
    });
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {messageList.length > 0 &&
        messageList.map((el: any, index: number) => (
          <MessageBox key={String(index)}>
            <div>{el.name}</div>
            <textarea value={JSON.parse(el.content)} />
          </MessageBox>
        ))}
    </div>
  );
}
