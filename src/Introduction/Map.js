/*global kakao */
import React, { useEffect } from "react";
import './Map.css'
 

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
        '<div style="width:100px;overflow:hidden;word-wrap:break-word;padding:5px;">강원도 춘천시 남산면 방하리 108</div>', // 인포윈도우에 표시할 내용
    });

    // 마커를 지도 위에 표시
    infowindow.open(map, marker);
  };

  return (
    <div className="map__container">

  <div className="map_name_container">
      <div className="map_name">
       약도 
      </div>
    <div id="map" className="map" style={{ width: "700px", height: "400px" }}>
      
      <br />
      <p className="map_p">건강원 | 강원도 춘천시 남산면 방하리 108</p>

    </div>
</div>
<div className="map_name_container">
<div className="map_name">
       주소 
      </div>
<div  className="map_address">건강원 | 강원도 춘천시 남산면 방하리 108</div>
</div>
    <div className="destination">
      <div className="destination_name">교통안내</div>
      <table cassName="destination_info" style={{textAlign:"left",width:'700px',background:'none',borderTop:'5px solid #ffb755',borderRadius:'0'}}>
        <tr>
          <td style={{textAlign:"left",paddingLeft:"10px",borderBottom:"1px solid #ffb755",borderLeft:'0px solid #fff'}}>
          아이콘
            </td>
          <td style={{textAlign:"left",padding:"10px",borderBottom:"1px solid #ffb755",fontSize:"12px",color:'#333',lineHeight:'25px'}}>
            <p className="destination_info_name">고속버스, 시외버스</p>
            ◀ 강남역(신분당선)→정자역(분당선 환승)→야탑역(3번출구)<br/>
            ◀ 강남역(신분당선)→정자역(분당선 환승)→야탑역(3번출구)<br/>
            ◀ 강남역(신분당선)→정자역(분당선 환승)→야탑역(3번출구)<br/>
            ◀ 강남역(신분당선)→정자역(분당선 환승)→야탑역(3번출구)
            </td>
       </tr> 
       <tr>
          <td style={{textAlign:"left",paddingLeft:"10px"}}>
            아이콘
            </td>
          <td style={{textAlign:"left",padding:"10px",fontSize:"12px",color:'#333',lineHeight:'25px'}}>
          <p className="destination_info_name">지하철</p>
          ◀ 강남역(신분당선)→정자역(분당선 환승)→야탑역(3번출구)<br/>
          ◀ 강남역(신분당선)→정자역(분당선 환승)→야탑역(3번출구)<br/>
          ◀ 강남역(신분당선)→정자역(분당선 환승)→야탑역(3번출구)
            </td>
        </tr>
        
      </table>
     
    </div>
    </div>
  );
}
