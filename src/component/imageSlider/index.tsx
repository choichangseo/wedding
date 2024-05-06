import { breakPoints } from "@/common/mediaQuery/media";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEvent, useRef, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import LazyLoad from "react-lazy-load";

const DialogKeyframes = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImageKeyframes = keyframes`
    from {
        transform: scale(0.5);
        opacity: 0;
    }
    to {
       transform: scale(1);
       opacity: 1;
    }
`;

const ImageList = styled.div`
  display: grid;
  overflow-y: scroll;
  height: 600px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  transition: 2s ease-in-out;
`;
const Images = styled.div`
  display: grid;
  row-gap: 10px;
  width: 100%;
  height: max-content;
`;
const Image = styled.img`
  width: 100%;
  cursor: pointer;
  /* 처음에는 이미지를 50% 크기로 설정 */
  animation: ${ImageKeyframes} 0.5s ease; /* 0.5초 동안 부드럽게 원래 크기로 변환 */
`;
const ImageDialog = styled.dialog`
  width: 100%;
  height: max-content;
  border: none;
  background: none;
  &[open] {
    animation: ${DialogKeyframes} 500ms forwards ease;
  }
  ::backdrop {
    background-color: #ababab;
    opacity: 0.6;
  }

  :focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
const DialogImage = styled.img`
  width: 100%;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  svg {
    font-size: 30px;
  }
  svg:nth-child(3) {
    font-size: 33px;
  }
`;

const DialogComponent = (props: any) => {
  const NextImage = () => {
    if (props.startImage === "28") {
      props.setStartImage("1");
    } else {
      props.setStartImage((prev: String) => String(Number(prev) + 1));
    }
  };
  const PrevImage = () => {
    if (props.startImage === "1") {
      props.setStartImage("28");
    } else {
      props.setStartImage((prev: String) => String(Number(prev) - 1));
    }
  };
  return (
    <ImageDialog ref={props.dialogRef}>
      <ImageBox>
        <DialogImage src={`/image${props.startImage}.webp`} />
      </ImageBox>
      <Navigation style={{ display: "flex" }}>
        <FaArrowAltCircleRight onClick={PrevImage} />
        <FaArrowAltCircleLeft onClick={NextImage} />
        <IoIosCloseCircle onClick={props.closeDialog} />
      </Navigation>
    </ImageDialog>
  );
};

export default function ImageSlider() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [startImage, setStartImage] = useState("");
  const openDialog = (e: MouseEvent<HTMLImageElement>) => {
    if (dialogRef.current === null) return;
    dialogRef.current.showModal();
    setStartImage((e.target as HTMLImageElement).id);
  };

  const closeDialog = () => {
    if (dialogRef.current === null) return;
    dialogRef.current.close();
  };

  const firstImageId = [
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
  ];
  const secondImageId = [
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
  ];
  return (
    <LazyLoad>
      <ImageList>
        <Images>
          {firstImageId.map((el) => (
            <Image
              onClick={openDialog}
              id={el}
              src={`/image${el}.webp`}
              loading="lazy"
            />
          ))}
        </Images>
        <Images>
          {secondImageId.map((el) => (
            <Image
              onClick={openDialog}
              id={el}
              src={`/image${el}.webp`}
              loading="lazy"
            />
          ))}
        </Images>
        <DialogComponent
          dialogRef={dialogRef}
          closeDialog={closeDialog}
          startImage={startImage}
          setStartImage={setStartImage}
        />
      </ImageList>
    </LazyLoad>
  );
}
