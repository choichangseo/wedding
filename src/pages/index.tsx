import useFadeIn from "@/common/useFadein";
import ImageSlider from "@/component/imageSlider";
import KaKaoMap from "@/component/kakaoMap";
import MessageDialog from "@/component/message";
import MessageListPage from "@/component/messageList";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isMobile } from "react-device-detect";
import { FaRegCopy } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Snowfall from "react-snowfall";
import Calendar from "../component/calendar/index";

export default function Home() {
  const { ref: fadeInRef1, isVisible: isVisible1 } = useFadeIn();
  const { ref: fadeInRef2, isVisible: isVisible2 } = useFadeIn();
  const { ref: fadeInRef3, isVisible: isVisible3 } = useFadeIn();
  const { ref: fadeInRef4, isVisible: isVisible4 } = useFadeIn();
  const { ref: fadeInRef5, isVisible: isVisible5 } = useFadeIn();
  const { ref: fadeInRef6, isVisible: isVisible6 } = useFadeIn();
  const { ref: fadeInRef7, isVisible: isVisible7 } = useFadeIn();
  const { ref: fadeInRef8, isVisible: isVisible8 } = useFadeIn();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [brideAccountActive, setBrideAccountActive] = useState<boolean>(false);
  const [groomAccountActive, setGroomAccountActive] = useState<boolean>(false);
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

  const onClickBrideAccountActive = () => {
    setBrideAccountActive((prev) => !prev);
  };

  const onClickGroomAccountActive = () => {
    setGroomAccountActive((prev) => !prev);
  };

  const onClickAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    setMounted(true);
    const img = new Image();
    img.src = "/flower.png";

    setSnowflakeImage(img);
  }, []);

  return (
    <main className="flex flex-col w-full gap-10 mb-5">
      <audio ref={audioRef} loop autoPlay>
        <source src="/bg1.mp3" type="audio/mp3" />
      </audio>
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
      <img src="/main.webp" />
      <div className="w-full flex justify-center text-2xl cursor-pointer">
        <MdOutlinePlayCircleOutline onClick={onClickAudio} />
      </div>
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
        ref={fadeInRef4}
        className={`flex flex-col justify-center gap-1 p-5 text-center w-full bg-my-yellow text-sm transition-opacity ${
          isVisible4
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
        <h1 className="font-Gowun font-bold text-l m-0 mt-0">
          경기도 부천시 원미구 길주로 105
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
              href="tmap://search?name=라비에벨웨딩"
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
        <div className="flex justify-between items-center w-full py-2 rounded-l bg-white cursor-pointer">
          <div className="flex-1 item-center">신랑 측 계좌번호</div>
          <div onClick={onClickGroomAccountActive} className="item-right mr-2">
            <IoIosArrowDown />
          </div>
        </div>
        {groomAccountActive && (
          <div className="overflow-hidden">
            <div className="animate-slide-down animate-delay-100">
              <div className="h-1 border-t border-white" />
              <div className="w-full grid grid-rows-2 grid-cols-2 pl-3 pr-3 items-center text-m">
                <div className="text-start">장영수 (혼주/아버지)</div>
                <CopyToClipboard
                  text="3521790501293"
                  onCopy={() =>
                    alert("계좌번호 3521790501293 가 복사되었습니다.")
                  }
                >
                  <div className="flex w-max items-center gap-2 self-center bg-white justify-self-end p-1 text-sm rounded">
                    <FaRegCopy />
                    복사
                  </div>
                </CopyToClipboard>
                <div className="col-span-2 text-start">
                  농협은행 | 352-1790-5012-93
                </div>
              </div>
            </div>
            <div className="h-1 border-t border-white" />
            <div className="animate-slide-down animate-delay-100">
              <div className="w-full grid grid-rows-2 grid-cols-2 pl-3 pr-3 items-center">
                <div className="text-start">이정민 (혼주/어머니)</div>
                <CopyToClipboard
                  text="110016160809"
                  onCopy={() =>
                    alert("계좌번호 110016160809 가 복사되었습니다.")
                  }
                >
                  <div className="flex w-max items-center gap-2 self-center bg-white justify-self-end p-1 text-sm rounded">
                    <FaRegCopy />
                    복사
                  </div>
                </CopyToClipboard>
                <div className="col-span-2 text-start">
                  신한은행 | 110-016-160890
                </div>
              </div>
            </div>
            <div className="h-1 border-t border-white" />
            <div className="animate-slide-down animate-delay-100">
              <div className="w-full grid grid-rows-2 grid-cols-2 pl-3 pr-3 items-center">
                <div className="text-start">장진하 (신랑)</div>
                <CopyToClipboard
                  text="17602414735"
                  onCopy={() =>
                    alert("계좌번호 17602414735 가 복사되었습니다.")
                  }
                >
                  <div className="flex w-max items-center gap-2 self-center bg-white justify-self-end p-1 text-sm rounded">
                    <FaRegCopy />
                    복사
                  </div>
                </CopyToClipboard>
                <div className="col-span-2 text-start">
                  농협은행 | 176-02-414735
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center w-full py-2 rounded-l bg-white cursor-pointer">
          <div className="flex-1 item-center">신부 측 계좌번호</div>
          <div onClick={onClickBrideAccountActive} className="item-right mr-2">
            <IoIosArrowDown />
          </div>
        </div>

        {brideAccountActive && (
          <div className="overflow-hidden">
            <div className="animate-slide-down animate-delay-100">
              <div className="w-full grid grid-rows-2 grid-cols-2 pl-3 pr-3 items-center">
                <div className="text-start">김영선 (혼주/아버지)</div>
                <CopyToClipboard
                  text="59190295106855"
                  onCopy={() =>
                    alert("계좌번호 59190295106855 가 복사되었습니다.")
                  }
                >
                  <div className="flex w-max items-center gap-2 self-center bg-white justify-self-end p-1 text-sm rounded">
                    <FaRegCopy />
                    복사
                  </div>
                </CopyToClipboard>
                <div className="col-span-2 text-start">
                  국민은행 | 591902-95-106855
                </div>
              </div>
            </div>
            <div className="h-1 border-t border-white" />
            <div className="animate-slide-down animate-delay-200">
              <div className="w-full grid grid-rows-2 grid-cols-2 pl-3 pr-3 items-center">
                <div className="text-start">김숙자 (혼주/어머니)</div>
                <CopyToClipboard
                  text="210240198811"
                  onCopy={() =>
                    alert("계좌번호 210240198811 가 복사되었습니다.")
                  }
                >
                  <div className="flex w-max items-center gap-2 self-center bg-white justify-self-end p-1 text-sm rounded">
                    <FaRegCopy />
                    복사
                  </div>
                </CopyToClipboard>
                <div className="col-span-2 text-start">
                  국민은행 | 210-24-0198-811
                </div>
              </div>
            </div>
            <div className="h-1 border-t border-white" />
            <div className="animate-slide-down animate-delay-300">
              <div className="w-full grid grid-rows-2 grid-cols-2 pl-3 pr-3 items-center">
                <div className="text-start">김지원 (신부)</div>
                <CopyToClipboard
                  text="3020684297331"
                  onCopy={() =>
                    alert("계좌번호 3020684297331 가 복사되었습니다.")
                  }
                >
                  <div className="flex w-max items-center gap-2 self-center bg-white justify-self-end p-1 text-sm rounded">
                    <FaRegCopy />
                    복사
                  </div>
                </CopyToClipboard>
                <div className="col-span-2 text-start">
                  농협은행 | 302-0684-2973-31
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        ref={fadeInRef7}
        className={`flex flex-col justify-center p-5  gap-2 text-center w-full bg-my-yellow ${
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
      <div className="flex flex-col justify-center text-center w-full">
        <h1 className="font-Gowun font-bold text-l m-0">GUEST BOOK</h1>
        <h1 className="font-Gowun font-bold text-2xl m-0">방명록</h1>
      </div>
      <div
        ref={fadeInRef8}
        className={`flex flex-col justify-center p-5  gap-2 text-center w-full bg-my-yellow h-500 overflow-scroll ${
          isVisible8
            ? "opacity-100 animate-fadein"
            : "opacity-0 animate-fadeout"
        }`}
      >
        <MessageListPage />
      </div>
      <MessageDialog
        closeDialog={closeDialog}
        messageDialogRef={messageDialogRef}
      />
    </main>
  );
}
