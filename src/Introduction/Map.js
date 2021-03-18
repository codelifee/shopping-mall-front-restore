/*global kakao */
import React, { useEffect } from 'react';
import './Map.css';
import { FaCar, FaBus } from 'react-icons/fa';

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById('map');
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
        '<div style="width:100px;overflow:hidden;word-wrap:break-word;padding:5px;">강원도 춘천시 남산면 방하리 108</div>', // 인포윈도우에 표시할 내용
    });

    // 마커를 지도 위에 표시
    infowindow.open(map, marker);
  };

  return (
    <div className="total_map">
      <div className="map_header">
        <div className="map__container">
          <div className="map_name_container">
            <div className="map_name">약도</div>
            <div
              id="map"
              className="map"
              style={{ width: '700px', height: '400px' }}
            >
              <br />
              <p className="map_p">건강원 | 강원도 춘천시 남산면 방하리 108</p>
            </div>
          </div>
          <div className="map_name_container">
            <div className="map_name">주소</div>
            <div className="map_address">
              건강원 | 강원도 춘천시 남산면 방하리 108
            </div>
          </div>
          <div className="destination">
            <div className="destination_name">교통안내</div>
            <table
              cassName="destination_info"
              style={{
                textAlign: 'left',
                width: '700px',
                background: 'none',
                borderTop: '5px solid #ffb755',
                borderRadius: '0',
              }}
            >
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    paddingLeft: '10px',
                    borderBottom: '1px solid #ffb755',
                    borderLeft: '0px solid #fff',
                  }}
                >
                  <FaBus />
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    padding: '10px',
                    borderBottom: '1px solid #ffb755',
                    fontSize: '12px',
                    color: '#333',
                    lineHeight: '25px',
                  }}
                >
                  <p className="destination_info_name">지하철, 버스</p>
                  ◀ 가평역(경춘선)→가평역 하차 후 60-29, 71-2, 71-3, 15, 71-1
                  버스로 환승)→가평터미널 하차 후 10-6 일반버스 환승→문의골마을
                  하차 → 도보로 15분 후 도착
                  <br />
                  ◀ 가평역(경춘선)→하차 후 도보로 가평터미널 정류장까지 26분
                  →가평터미널에서 10-6 버스로 환승→문의골마을 하차→도보로 15분
                  이동 후 도착
                  <br />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
                  <FaCar />
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    padding: '10px',
                    fontSize: '12px',
                    color: '#333',
                    lineHeight: '25px',
                  }}
                >
                  <p className="destination_info_name">자동차</p>◀ 가평역에서
                  13분 (8.4km) 이동 후 도착 (경춘로 2.7km → 방하로 4.0km →
                  문의골길 754m)
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
