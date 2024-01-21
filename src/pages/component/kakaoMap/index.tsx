import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KaKaoMap() {
  return (
    <Map
      center={{ lat: 37.5064069, lng: 126.7538282 }} // 지도의 중심 좌표
      style={{ width: "100%", height: "400px" }} // 지도 크기
      level={3} // 지도 확대 레벨
    >
      <MapMarker position={{ lat: 37.5064069, lng: 126.7538282 }} />
    </Map>
  );
}
