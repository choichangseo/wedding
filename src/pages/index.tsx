import { isMobile } from "react-device-detect";
import KaKaoMap from "./component/kakaoMap";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-10">
      <img src="/wedding1.jpeg" />
      <div className="flex flex-col text-center w-full">
        <h1 className="font-ice font-bold text-3xl">결혼식에 초대합니다</h1>
        장진하 & 김지원
        <div>2023. 00. 0 토요일 오전 11시 MJ 웨딩홀</div>
      </div>
      <div className="flex flex-col justify-center p-8 text-center w-full bg-my-yellow text-sm">
        <h1 className="font-ice font-bold text-3xl mb-5">INVITATION</h1>
        <div>저희 두 사람이 사랑과 믿음으로</div>
        <div>한 가정을 이루게 되었습니다.</div>
        <div>바쁘시더라도 부디 오셔서</div>
        <div>저희의 앞날을 축복해 주시고 격려해 주시면 감사하겠습니다.</div>
        <div>김아빠・이엄마 의 장남 신랑 장진하</div>
        <div>이아빠・박엄마 의 장녀 신부 김지원</div>
      </div>
      <div>
        <h1 className="font-ice font-bold text-3xl">GALLERY</h1>
      </div>
      <div>
        <h1 className="font-ice font-bold text-3xl">LOCATION</h1>
        <KaKaoMap />
        {isMobile ? (
          <>
            {" "}
            <a href="kakaomap://look?p=37.481940,126.7984955">카카오 지도</a>
            <a
              href={`nmap://search?query=${encodeURIComponent(
                "MJ컨벤션"
              )}&appname=https://wedding-snowy-chi.vercel.app/`}
            >
              네이버 지도
            </a>
          </>
        ) : (
          <>
            <a href="https://map.kakao.com/link/map/37.481940,126.7984955">
              카카오 지도
            </a>
            <a href="https://map.naver.com/p/search/MJ%20%EC%BB%A8%EB%B2%A4%EC%85%98?c=15.00,0,0,0,dh">
              네이버 지도
            </a>
          </>
        )}
      </div>
      <div>
        <h1 className="font-ice font-bold text-3xl">MJ 컨벤션</h1>
        <div>경기도 부천시 소사구 소사본동 65-7</div>
        <div>Tel. 032-347-5500</div>
      </div>
      <div>
        <h1 className="font-ice font-bold text-3xl">대중교통</h1>
        <div>경기도 부천시 소사구 소사본동 65-7</div>
        <div>Tel. 032-347-5500</div>
      </div>
      <div>
        <h1 className="font-ice font-bold text-3xl">자가용</h1>
        <div>
          네비게이션 이용 시 "부천 MJ 컨벤션"을 입력하세요. (주차 2시간 무료)
        </div>
        <a className="flex-1" href="tmap://search?name=MJ컨벤션">
          <button className="w-full nes-btn text-ellipsis">티맵</button>
        </a>
        <div>KAKAO-MAP</div>
        <div>NAVER-MAP</div>
      </div>
      <div className="flex flex-col align-middle justify-center p-8  gap-2 text-center w-full bg-my-yellow">
        <h1 className="font-ice font-bold mb-8 text-3xl">마음 전하실 곳</h1>
        <div className="w-full py-2 rounded-l bg-white cursor-pointer">
          신랑 측 계좌번호
        </div>
        <div className="w-full py-2 rounded-l bg-white cursor-pointer">
          신부 측 계좌번호
        </div>
      </div>
    </main>
  );
}
