import { breakPoints } from "@/common/mediaQuery/media";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEvent, useRef, useState } from "react";
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
  height: 500px;
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
  width: 50%;
  height: max-content;
  padding: 20px;
  border: none;
  background: none;
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
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
const DialogImage = styled.img`
  width: 90%;
`;

const NavigationButton = styled.button`
  color: #ffffff;
  font-size: 30px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

const DialogComponent = (props: any) => {
  const NextImage = () => {
    if (props.startImage === "8") {
      props.setStartImage("1");
    } else {
      props.setStartImage((prev: String) => String(Number(prev) + 1));
    }
  };
  const PrevImage = () => {
    if (props.startImage === "1") {
      props.setStartImage("8");
    } else {
      props.setStartImage((prev: String) => String(Number(prev) - 1));
    }
  };
  return (
    <ImageDialog ref={props.dialogRef}>
      <Close onClick={props.closeDialog}>X</Close>
      <ImageBox>
        <NavigationButton onClick={PrevImage}>&lt;</NavigationButton>
        <DialogImage src={`./image${props.startImage}.jpeg`} />
        <NavigationButton onClick={NextImage}>&gt;</NavigationButton>
      </ImageBox>
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

  return (
    <LazyLoad>
      <ImageList>
        <Images>
          <Image
            onClick={openDialog}
            id="1"
            src="./image1.jpeg"
            loading="lazy"
          />
          <Image
            onClick={openDialog}
            id="2"
            src="./image2.jpeg"
            loading="lazy"
          />
          <Image
            onClick={openDialog}
            id="3"
            src="./image3.jpeg"
            loading="lazy"
          />
          <Image
            onClick={openDialog}
            id="4"
            src="./image4.jpeg"
            loading="lazy"
          />
        </Images>
        <Images>
          <Image
            onClick={openDialog}
            id="5"
            src="./image5.jpeg"
            loading="lazy"
          />
          <Image
            onClick={openDialog}
            id="6"
            src="./image6.jpeg"
            loading="lazy"
          />
          <Image
            onClick={openDialog}
            id="7"
            src="./image7.jpeg"
            loading="lazy"
          />
          <Image
            onClick={openDialog}
            id="8"
            src="./image8.jpeg"
            loading="lazy"
          />
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
