import useFadeIn from "@/common/useFadein";
import ImageSlider from "@/component/imageSlider";
import KaKaoMap from "@/component/kakaoMap";
import MessageDialog from "@/component/message";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Snowfall from "react-snowfall";
import bg from "../../public/bg.mp3";
import Calendar from "../component/calendar/index";

export default function Home() {
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState<any>(null);
  const { ref: fadeInRef1, isVisible: isVisible1 } = useFadeIn();
  const { ref: fadeInRef2, isVisible: isVisible2 } = useFadeIn();
  const { ref: fadeInRef3, isVisible: isVisible3 } = useFadeIn();
  const { ref: fadeInRef4, isVisible: isVisible4 } = useFadeIn();
  const { ref: fadeInRef5, isVisible: isVisible5 } = useFadeIn();
  const { ref: fadeInRef6, isVisible: isVisible6 } = useFadeIn();
  const { ref: fadeInRef7, isVisible: isVisible7 } = useFadeIn();
  const { ref: fadeInRef8, isVisible: isVisible8 } = useFadeIn();
  const [snowflakeImage, setSnowflakeImage] = useState<HTMLImageElement | null>(
    null
  );

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
    const audio = new Audio(bg);
    setAudio(audio);
    // 이미지 생성
    const img = new Image();
    img.src = "/flower.png";
    setSnowflakeImage(img);
  }, []);

  const playAudio = () => {
    // 오디오 재생 시도
    audio?.play();
  };

  return (
    <main className="flex flex-col w-full gap-10">
      <div
        style={{
          marginBottom: "-40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          cursor: "pointer",
        }}
        onClick={playAudio}
      />
      {snowflakeImage && (
        <Snowfall
          snowflakeCount={100}
          speed={[0.5, 1.5]}
          radius={[6, 6]}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
          images={[snowflakeImage]}
        />
      )}
      <img src="/main.jpeg" />
      <div
        ref={fadeInRef1}
        className={`flex flex-col text-center w-full transition-opacity ${
          isVisible1
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        <h1 className="font-Gowun font-bold text-l mb-5">INVITATION</h1>
        <h1 className="font-Gowun font-bold text-2xl mb-5">
          결혼식에 초대합니다
        </h1>
        장진하 & 김지원
        <div>2024. 06. 29 토요일 오후 5시</div>
        <div>라비에벨 9층 웨딩홀</div>
      </div>
      <div
        ref={fadeInRef2}
        className={`flex flex-col justify-center gap-1 p-5 text-center w-full text-m transition-opacity ${
          isVisible2
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        <div>서로가 마주보며 다져 온 사랑을</div>
        <div>이제 함께 한 곳을 바라보며</div>
        <div>걸어 갈 수 있는 큰 사랑으로 키우고자 합니다.</div>
        <div>저희 두 사람이 사랑의 이름으로</div>
        <div>지켜나갈 수 있게 앞날을</div>
        <div>축복해 주시면 감사하겠습니다.</div>
      </div>
      <div
        ref={fadeInRef8}
        className={`flex flex-col justify-center gap-1 p-5 text-center w-full bg-my-yellow text-sm transition-opacity ${
          isVisible8
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        <div>
          <h1 className="font-Gowun font-bold text-2xl mb-3">2024. 06. 29</h1>
          <h1 className="font-Gowun font-bold text-l m-0">토요일 오후 5시</h1>
        </div>
        <Calendar />
      </div>
      <div className="flex flex-col justify-center text-center w-full">
        <h1 className="font-Gowun font-bold text-l m-0">GALLERY</h1>
        <h1 className="font-Gowun font-bold text-2xl m-0">갤러리</h1>
      </div>
      <div
        ref={fadeInRef3}
        className={`bg-my-yellow p-5 transition-opacity ${
          isVisible3
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        {/* <h1 className="font-Gowun font-bold text-2xl mb-5">GALLERY</h1> */}
        <ImageSlider />
      </div>
      <div className="flex flex-col justify-center text-center w-full">
        <h1 className="font-Gowun font-bold text-l m-0">LOCATION</h1>
        <h1 className="font-Gowun font-bold text-2xl m-0">오시는 길</h1>
        <h1 className="font-Gowun font-bold text-xl m-0 mt-5">
          라비에벨 컨벤션 9층 오페라홀
        </h1>
      </div>
      <div
        ref={fadeInRef5}
        className={`bg-my-yellow p-5 ${
          isVisible5
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        <KaKaoMap />
        <br />
        <div>경기도 부천시 원미구 길주로 105 세이브존 9층</div>
        <div>Tel. 032-325-2000</div>
        <br />
        <div>[🚌 버스 안내]</div>
        <div>상동역, 드림모아세이브존 하차 : 5-4, 23-2, 50-1, 52, 59</div>
        <div>상동역, 홈플러스 하차 : 6-2, 37, 50-1, 53, 59, 61, 66, 70, 87</div>
        <div>
          광역버스 - 9300(강남역), 8906(범계역), 8106(분당), 1001(고양교통)
        </div>
        <br />
        <div>[🚈 지하철 안내]</div>
        <div>7호선 상동역 7, 8번 출구와 바로 연결</div>
        <div>1호선 송내역 2번 출구 : 버스로 15분 정도 소요</div>
        <div>*송내역 버스노선 : 16, 37, 50-1, 83, 87</div>
        <br />
        <div>[🛻 자가용 안내]</div>
        <div>
          - 네비게이션 : "세이브존 부천점" 또는 "부천시 원미구 길주로 105" 를
          입력하세요.
        </div>

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
      <div
        ref={fadeInRef6}
        className={`flex flex-col align-middle justify-center p-5  gap-2 text-center w-full bg-my-yellow ${
          isVisible6
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        <h1 className="font-Gowun font-bold mb-8 text-2xl">마음 전하실 곳</h1>
        <div className="w-full py-2 rounded-l bg-white cursor-pointer">
          신랑 측 계좌번호
        </div>
        <div className="w-full py-2 rounded-l bg-white cursor-pointer">
          신부 측 계좌번호
        </div>
      </div>
      <div
        ref={fadeInRef7}
        className={`flex flex-col align-middle justify-center p-5  gap-2 text-center w-full bg-my-yellow ${
          isVisible7
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        <h1 className="font-Gowun font-bold mb-8 text-2xl">
          신랑 신부에게 <br />
          축하 메세지를 전해주세요.
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
