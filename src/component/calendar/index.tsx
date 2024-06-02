import styled from "@emotion/styled";
import { useState } from "react";

const CalendarBox = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 8px;

  div {
    font-family: "GowunBatang-Regular";
  }
`;

const WeekBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 10px 0px 10px 0px;
  border-bottom: 1px solid #000;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }
  & > div:first-of-type {
    color: #d4b6b6;
  }
`;
const DayBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 10px;
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }
  & > div:nth-child(-n + 6) {
    color: #ababab;
  }
  & > .sunday:not(.exclude) {
    color: #d4b6b6;
  }
  & > .special-day {
    background-image: url("./heart.png");
    color: white;
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const DdayBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const DdayImage = styled.img`
  width: 20px;
`;

export default function Calendar() {
  const [Week, setWeek] = useState(["일", "월", "화", "수", "목", "금", "토"]);
  const [day, setDay] = useState([
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ]);
  let foundFirst29 = false;
  const today: Date = new Date();

  // 현재 연도 기준으로 6월 29일의 날짜 객체 생성 (월은 0부터 시작하므로, 6월은 5로 표기)
  const targetDate: Date = new Date(today.getFullYear(), 5, 29);

  // D-Day 계산
  const diffTime = +targetDate - +today;
  const dDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <CalendarBox>
      <WeekBox>
        {Week.map((el) => (
          <div>{el}</div>
        ))}
      </WeekBox>
      <DayBox>
        {day.map((el, index) => {
          let className = `${
            (index + 1) % 7 === 1 && el !== "26" ? "sunday" : ""
          } ${el === "26" ? "exclude" : ""}`;
          if (el === "29") {
            if (!foundFirst29) {
              // 첫 번째 "29"를 찾았으므로, 이후에 나타나는 "29"에만 특별한 스타일을 적용
              foundFirst29 = true;
            } else {
              // 두 번째 "29"부터 special-day 클래스 적용
              className += " special-day";
            }
          }
          return (
            <div key={index} className={className}>
              {el}
            </div>
          );
        })}
      </DayBox>
      <DdayBox>
        진하
        <DdayImage src="/dDayHeart.png" />
        지원 <span>{dDay <= 0 ? "today" : `${dDay} 일 후에 뵙겠습니다.`}</span>
      </DdayBox>
    </CalendarBox>
  );
}
