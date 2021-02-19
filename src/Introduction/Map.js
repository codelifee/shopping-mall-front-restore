/*global kakao */
import React, { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.80078, 127.541493),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(37.80078, 127.541493);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
      map: map,
    });

    let infowindow = new kakao.maps.InfoWindow({
      content:
        '<div style="width:100px;overflow:hidden;word-wrap:break-word;">강원도 춘천시 남산면 방하리 108</div>', // 인포윈도우에 표시할 내용
    });

    // 마커를 지도 위에 표시
    infowindow.open(map, marker);
  };

  return (
    <div id="map" style={{ width: "700px", height: "400px" }}>
      {" "}
      <br />
      건강원 | 강원도 춘천시 남산면 방하리 108
    </div>
  );
}
