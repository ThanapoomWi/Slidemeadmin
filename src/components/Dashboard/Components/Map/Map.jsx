import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataIE from "@highcharts/map-collection/countries/th/th-all.topo.json";

function Map({ dataa }) {
  const [chartData, setChartData] = useState([
    ["th-ct", 10],
    ["th-4255", 11],
    ["th-pg", 12],
    ["th-st", 13],
    ["th-kr", 14],
    ["th-sa", 15],
    ["th-tg", 16],
    ["th-tt", 17],
    ["th-pl", 18],
    ["th-ps", 19],
    ["th-kp", 20],
    ["th-pc", 21],
    ["th-sh", 22],
    ["th-at", 23],
    ["th-lb", 24],
    ["th-pa", 25],
    ["th-np", 26],
    ["th-sb", 27],
    ["th-cn", 28],
    ["th-bm", 29],
    ["th-pt", 30],
    ["th-no", 31],
    ["th-sp", 32],
    ["th-ss", 33],
    ["th-sm", 34],
    ["th-pe", 35],
    ["th-cc", 36],
    ["th-nn", 37],
    ["th-cb", 38],
    ["th-br", 39],
    ["th-kk", 40],
    ["th-ph", 41],
    ["th-kl", 42],
    ["th-sr", 43],
    ["th-nr", 44],
    ["th-si", 45],
    ["th-re", 46],
    ["th-le", 47],
    ["th-nk", 48],
    ["th-ac", 49],
    ["th-md", 50],
    ["th-sn", 51],
    ["th-nw", 52],
    ["th-pi", 53],
    ["th-rn", 54],
    ["th-nt", 55],
    ["th-sg", 56],
    ["th-pr", 57],
    ["th-py", 58],
    ["th-so", 59],
    ["th-ud", 60],
    ["th-kn", 61],
    ["th-tk", 62],
    ["th-ut", 63],
    ["th-ns", 64],
    ["th-pk", 65],
    ["th-ur", 66],
    ["th-sk", 67],
    ["th-ry", 68],
    ["th-cy", 69],
    ["th-su", 70],
    ["th-nf", 71],
    ["th-bk", 72],
    ["th-mh", 73],
    ["th-pu", 74],
    ["th-cp", 75],
    ["th-yl", 76],
    ["th-cr", 77],
    ["th-cm", 78],
    ["th-ln", 79],
    ["th-na", 80],
    ["th-lg", 81],
    ["th-pb", 82],
    ["th-rt", 83],
    ["th-ys", 84],
    ["th-ms", 85],
    ["th-un", 86],
    ["th-nb", 87],
  ]);

  useEffect(() => {
    let newData;
    switch (dataa) {
      case "2":
        newData = [
          ["th-ct", 20],
          ["th-4255", 30],
          ["th-pg", 40],
          ["th-st", 13],
          ["th-kr", 14],
          ["th-sa", 15],
          ["th-tg", 16],
          ["th-tt", 17],
          ["th-pl", 18],
          ["th-ps", 19],
          ["th-kp", 20],
          ["th-pc", 21],
          ["th-sh", 22],
          ["th-at", 23],
          ["th-lb", 24],
          ["th-pa", 25],
          ["th-np", 26],
          ["th-sb", 27],
          ["th-cn", 28],
          ["th-bm", 29],
          ["th-pt", 30],
          ["th-no", 31],
          ["th-sp", 32],
          ["th-ss", 33],
          ["th-sm", 34],
          ["th-pe", 35],
          ["th-cc", 36],
          ["th-nn", 37],
          ["th-cb", 38],
          ["th-br", 39],
          ["th-kk", 40],
          ["th-ph", 41],
          ["th-kl", 42],
          ["th-sr", 43],
          ["th-nr", 44],
          ["th-si", 45],
          ["th-re", 46],
          ["th-le", 47],
          ["th-nk", 48],
          ["th-ac", 49],
          ["th-md", 50],
          ["th-sn", 51],
          ["th-nw", 52],
          ["th-pi", 53],
          ["th-rn", 54],
          ["th-nt", 55],
          ["th-sg", 56],
          ["th-pr", 57],
          ["th-py", 58],
          ["th-so", 59],
          ["th-ud", 60],
          ["th-kn", 61],
          ["th-tk", 62],
          ["th-ut", 63],
          ["th-ns", 64],
          ["th-pk", 65],
          ["th-ur", 66],
          ["th-sk", 67],
          ["th-ry", 68],
          ["th-cy", 69],
          ["th-su", 70],
          ["th-nf", 71],
          ["th-bk", 72],
          ["th-mh", 73],
          ["th-pu", 74],
          ["th-cp", 75],
          ["th-yl", 76],
          ["th-cr", 77],
          ["th-cm", 78],
          ["th-ln", 79],
          ["th-na", 80],
          ["th-lg", 81],
          ["th-pb", 82],
          ["th-rt", 83],
          ["th-ys", 84],
          ["th-ms", 85],
          ["th-un", 86],
          ["th-nb", 87],
        ];
        break;
      case "3":
        newData = [
          ["th-ct", 50],
          ["th-4255", 60],
          ["th-pg", 70],
          ["th-st", 13],
          ["th-kr", 14],
          ["th-sa", 15],
          ["th-tg", 16],
          ["th-tt", 17],
          ["th-pl", 18],
          ["th-ps", 19],
          ["th-kp", 20],
          ["th-pc", 21],
          ["th-sh", 22],
          ["th-at", 23],
          ["th-lb", 24],
          ["th-pa", 25],
          ["th-np", 26],
          ["th-sb", 27],
          ["th-cn", 28],
          ["th-bm", 29],
          ["th-pt", 30],
          ["th-no", 31],
          ["th-sp", 32],
          ["th-ss", 33],
          ["th-sm", 34],
          ["th-pe", 35],
          ["th-cc", 36],
          ["th-nn", 37],
          ["th-cb", 38],
          ["th-br", 39],
          ["th-kk", 40],
          ["th-ph", 41],
          ["th-kl", 42],
          ["th-sr", 43],
          ["th-nr", 44],
          ["th-si", 45],
          ["th-re", 46],
          ["th-le", 47],
          ["th-nk", 48],
          ["th-ac", 49],
          ["th-md", 50],
          ["th-sn", 51],
          ["th-nw", 52],
          ["th-pi", 53],
          ["th-rn", 54],
          ["th-nt", 55],
          ["th-sg", 56],
          ["th-pr", 57],
          ["th-py", 58],
          ["th-so", 59],
          ["th-ud", 60],
          ["th-kn", 61],
          ["th-tk", 62],
          ["th-ut", 63],
          ["th-ns", 64],
          ["th-pk", 65],
          ["th-ur", 66],
          ["th-sk", 67],
          ["th-ry", 68],
          ["th-cy", 69],
          ["th-su", 70],
          ["th-nf", 71],
          ["th-bk", 72],
          ["th-mh", 73],
          ["th-pu", 74],
          ["th-cp", 75],
          ["th-yl", 76],
          ["th-cr", 77],
          ["th-cm", 78],
          ["th-ln", 79],
          ["th-na", 80],
          ["th-lg", 81],
          ["th-pb", 82],
          ["th-rt", 83],
          ["th-ys", 84],
          ["th-ms", 85],
          ["th-un", 86],
          ["th-nb", 87],
        ];
        break;
      case "4":
        newData = [
          ["th-ct", 100],
          ["th-4255", 110],
          ["th-pg", 120],
          ["th-st", 13],
          ["th-kr", 14],
          ["th-sa", 15],
          ["th-tg", 16],
          ["th-tt", 17],
          ["th-pl", 18],
          ["th-ps", 19],
          ["th-kp", 20],
          ["th-pc", 21],
          ["th-sh", 22],
          ["th-at", 23],
          ["th-lb", 24],
          ["th-pa", 25],
          ["th-np", 26],
          ["th-sb", 27],
          ["th-cn", 28],
          ["th-bm", 29],
          ["th-pt", 30],
          ["th-no", 31],
          ["th-sp", 32],
          ["th-ss", 33],
          ["th-sm", 34],
          ["th-pe", 35],
          ["th-cc", 36],
          ["th-nn", 37],
          ["th-cb", 38],
          ["th-br", 39],
          ["th-kk", 40],
          ["th-ph", 41],
          ["th-kl", 42],
          ["th-sr", 43],
          ["th-nr", 44],
          ["th-si", 45],
          ["th-re", 46],
          ["th-le", 47],
          ["th-nk", 48],
          ["th-ac", 49],
          ["th-md", 50],
          ["th-sn", 51],
          ["th-nw", 52],
          ["th-pi", 53],
          ["th-rn", 54],
          ["th-nt", 55],
          ["th-sg", 56],
          ["th-pr", 57],
          ["th-py", 58],
          ["th-so", 59],
          ["th-ud", 60],
          ["th-kn", 61],
          ["th-tk", 62],
          ["th-ut", 63],
          ["th-ns", 64],
          ["th-pk", 65],
          ["th-ur", 66],
          ["th-sk", 67],
          ["th-ry", 68],
          ["th-cy", 69],
          ["th-su", 70],
          ["th-nf", 71],
          ["th-bk", 72],
          ["th-mh", 73],
          ["th-pu", 74],
          ["th-cp", 75],
          ["th-yl", 76],
          ["th-cr", 77],
          ["th-cm", 78],
          ["th-ln", 79],
          ["th-na", 80],
          ["th-lg", 81],
          ["th-pb", 82],
          ["th-rt", 83],
          ["th-ys", 84],
          ["th-ms", 85],
          ["th-un", 86],
          ["th-nb", 87],
        ];
        break;
      default:
        newData = [
          ["th-ct", 10],
          ["th-4255", 11],
          ["th-pg", 12],
          ["th-st", 13],
          ["th-kr", 14],
          ["th-sa", 15],
          ["th-tg", 16],
          ["th-tt", 17],
          ["th-pl", 18],
          ["th-ps", 19],
          ["th-kp", 20],
          ["th-pc", 21],
          ["th-sh", 22],
          ["th-at", 23],
          ["th-lb", 24],
          ["th-pa", 25],
          ["th-np", 26],
          ["th-sb", 27],
          ["th-cn", 28],
          ["th-bm", 29],
          ["th-pt", 30],
          ["th-no", 31],
          ["th-sp", 32],
          ["th-ss", 33],
          ["th-sm", 34],
          ["th-pe", 35],
          ["th-cc", 36],
          ["th-nn", 37],
          ["th-cb", 38],
          ["th-br", 39],
          ["th-kk", 40],
          ["th-ph", 41],
          ["th-kl", 42],
          ["th-sr", 43],
          ["th-nr", 44],
          ["th-si", 45],
          ["th-re", 46],
          ["th-le", 47],
          ["th-nk", 48],
          ["th-ac", 49],
          ["th-md", 50],
          ["th-sn", 51],
          ["th-nw", 52],
          ["th-pi", 53],
          ["th-rn", 54],
          ["th-nt", 55],
          ["th-sg", 56],
          ["th-pr", 57],
          ["th-py", 58],
          ["th-so", 59],
          ["th-ud", 60],
          ["th-kn", 61],
          ["th-tk", 62],
          ["th-ut", 63],
          ["th-ns", 64],
          ["th-pk", 65],
          ["th-ur", 66],
          ["th-sk", 67],
          ["th-ry", 68],
          ["th-cy", 69],
          ["th-su", 70],
          ["th-nf", 71],
          ["th-bk", 72],
          ["th-mh", 73],
          ["th-pu", 74],
          ["th-cp", 75],
          ["th-yl", 76],
          ["th-cr", 77],
          ["th-cm", 78],
          ["th-ln", 79],
          ["th-na", 80],
          ["th-lg", 81],
          ["th-pb", 82],
          ["th-rt", 83],
          ["th-ys", 84],
          ["th-ms", 85],
          ["th-un", 86],
          ["th-nb", 87],
        ];
        break;
    }
    setChartData(newData);
  }, [dataa]);

  const mapOptions = {
    chart: {
      map: "th/th-all",
    },
    title: {
      text: "ตำแหน่งที่ผู้ใช้เรียกใช้งานมากที่สุด",
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "center",
      },
    },
    colorAxis: {
      min: 0,
      tickPositions: [0, 50, 100],
      labels: {
        format: "{value}%",
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.name}</b><br>มีทั้งหมด: <b>{point.value} คน</b>",
    },
    series: [
      {
        name: "Provinces",
        data: chartData.map(([code, value]) => ({ code, value })),
        mapData: mapDataIE,
        joinBy: ["hc-key", "code"],
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false,
      },
    ],
  };

  highchartsMap(Highcharts);

  return (
    <div className="map-container">
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapOptions}
      />
    </div>
  );
}

export default Map;

const data = [
  ["th-ct", 10],
  ["th-4255", 11],
  ["th-pg", 12],
  ["th-st", 13],
  ["th-kr", 14],
  ["th-sa", 15],
  ["th-tg", 16],
  ["th-tt", 17],
  ["th-pl", 18],
  ["th-ps", 19],
  ["th-kp", 20],
  ["th-pc", 21],
  ["th-sh", 22],
  ["th-at", 23],
  ["th-lb", 24],
  ["th-pa", 25],
  ["th-np", 26],
  ["th-sb", 27],
  ["th-cn", 28],
  ["th-bm", 29],
  ["th-pt", 30],
  ["th-no", 31],
  ["th-sp", 32],
  ["th-ss", 33],
  ["th-sm", 34],
  ["th-pe", 35],
  ["th-cc", 36],
  ["th-nn", 37],
  ["th-cb", 38],
  ["th-br", 39],
  ["th-kk", 40],
  ["th-ph", 41],
  ["th-kl", 42],
  ["th-sr", 43],
  ["th-nr", 44],
  ["th-si", 45],
  ["th-re", 46],
  ["th-le", 47],
  ["th-nk", 48],
  ["th-ac", 49],
  ["th-md", 50],
  ["th-sn", 51],
  ["th-nw", 52],
  ["th-pi", 53],
  ["th-rn", 54],
  ["th-nt", 55],
  ["th-sg", 56],
  ["th-pr", 57],
  ["th-py", 58],
  ["th-so", 59],
  ["th-ud", 60],
  ["th-kn", 61],
  ["th-tk", 62],
  ["th-ut", 63],
  ["th-ns", 64],
  ["th-pk", 65],
  ["th-ur", 66],
  ["th-sk", 67],
  ["th-ry", 68],
  ["th-cy", 69],
  ["th-su", 70],
  ["th-nf", 71],
  ["th-bk", 72],
  ["th-mh", 73],
  ["th-pu", 74],
  ["th-cp", 75],
  ["th-yl", 76],
  ["th-cr", 77],
  ["th-cm", 78],
  ["th-ln", 79],
  ["th-na", 80],
  ["th-lg", 81],
  ["th-pb", 82],
  ["th-rt", 83],
  ["th-ys", 84],
  ["th-ms", 85],
  ["th-un", 86],
  ["th-nb", 87],
];
