// import Device from "./component/isMobile/Device";
import ImageSlider from "@/component/imageSlider";
import KaKaoMap from "@/component/kakaoMap";
import MessageDialog from "@/component/message";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Calendar from "../component/calendar/index";

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);
  const messageDialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = (e: MouseEvent<HTMLImageElement>) => {
    if (messageDialogRef.current === null) return;
    messageDialogRef.current.showModal();
  };

  const closeDialog = () => {
    if (messageDialogRef.current === null) return;
    messageDialogRef.current.close();
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <main className="flex flex-col w-full gap-10">
      <img src="/wedding1.jpeg" />
      <div className="flex flex-col text-center w-full">
        <h1 className="font-Gowun font-bold text-2xl mb-5">
          결혼식에 초대합니다
        </h1>
        장진하 & 김지원
        <div>2024. 06. 29 토요일 오후 5시 라비에벨 웨딩홀</div>
        <Calendar />
      </div>
      <div className="flex flex-col justify-center p-5 text-center w-full bg-my-yellow text-sm">
        <h1 className="font-Gowun font-bold text-2xl mb-5">INVITATION</h1>
        <div>저희 두 사람이 사랑과 믿음으로</div>
        <div>한 가정을 이루게 되었습니다.</div>
        <div>바쁘시더라도 부디 오셔서</div>
        <div>저희의 앞날을 축복해 주시고 격려해 주시면 감사하겠습니다.</div>
        <div>김아빠・이엄마 의 장남 신랑 장진하</div>
        <div>이아빠・박엄마 의 장녀 신부 김지원</div>
      </div>
      <div className="bg-my-yellow p-5">
        <h1 className="font-Gowun font-bold text-2xl mb-5">GALLERY</h1>
        <ImageSlider />
      </div>
      <div className="bg-my-yellow p-5">
        <h1 className="font-Gowun font-bold text-2xl mb-5">LOCATION</h1>
        <KaKaoMap />
      </div>
      <div className="bg-my-yellow p-5">
        <h1 className="font-Gowun font-bold text-2xl mb-5">라비에벨 컨벤션</h1>
        <div>경기도 부천시 원미구 길주로 105 세이브존 9층</div>
        <div>Tel. 032-325-2000</div>
        {mounted && isMobile ? (
          <div className="flex flex-row text-xs mt-5 gap-5 ">
            <a
              className="flex flex-col justify-center items-center w-15 text-center gap-2"
              href="kakaomap://look?p=37.5064069,126.7538282"
            >
              <img className="w-10" src="/kakao_map.png" />
              <div>카카오맵</div>
            </a>
            <a
              className="flex flex-col justify-center items-center w-15 text-center gap-2"
              href={`nmap://search?query=${encodeURIComponent(
                "라비에벨 컨벤션"
              )}&appname=https://wedding-snowy-chi.vercel.app/`}
            >
              <img className="w-10" src="/naver_map.png" />
              <div>네이버지도</div>
            </a>
            <a
              className="flex flex-col justify-center items-center w-15 text-center gap-2"
              href="tmap://search?name=라비에벨 컨벤션"
            >
              <img className="w-10" src="/t_map.png" />
              <div>T-MAP</div>
            </a>
          </div>
        ) : (
          <div className="flex  flex-row gap-10 text-xs mt-5 ">
            <a
              className="flex flex-col justify-center items-center w-15 text-center gap-2"
              href="https://map.kakao.com/link/map/37.5064069,126.7538282"
            >
              <img className="w-10" src="/kakao_map.png" />
              <div>카카오맵</div>
            </a>

            <a
              className="flex flex-col justify-center items-center w-15 text-center gap-2"
              href="https://map.naver.com/p/entry/place/12945535?c=15.00,0,0,0,dh"
            >
              <img className="w-10" src="/naver_map.png" />
              <div>네이버지도</div>
            </a>
          </div>
        )}
      </div>
      {/* <div className="bg-my-yellow p-5">
        <h1 className="font-Gowun font-bold text-2xl mb-5">대중교통</h1>
        <div>경기도 부천시 소사구 소사본동 65-7</div>
        <div>Tel. 032-347-5500</div>
      </div> */}
      <div className="flex flex-col align-middle justify-center p-5  gap-2 text-center w-full bg-my-yellow">
        <h1 className="font-Gowun font-bold mb-8 text-2xl">마음 전하실 곳</h1>
        <div className="w-full py-2 rounded-l bg-white cursor-pointer">
          신랑 측 계좌번호
        </div>
        <div className="w-full py-2 rounded-l bg-white cursor-pointer">
          신부 측 계좌번호
        </div>
      </div>
      <div className="flex flex-col align-middle justify-center p-5  gap-2 text-center w-full bg-my-yellow">
        <h1 className="font-Gowun font-bold mb-8 text-2xl">
          신랑 신부에게 축하 메세지를 전해주세요.
        </h1>
        <div
          onClick={openDialog}
          className="w-full py-2 rounded-l bg-white cursor-pointer"
        >
          작성하기
        </div>
      </div>
      <MessageDialog
        closeDialog={closeDialog}
        messageDialogRef={messageDialogRef}
      />
    </main>
  );
}
