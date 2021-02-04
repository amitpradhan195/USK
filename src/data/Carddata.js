import prop1 from "../assets/slider1.jpg";
import prop2 from "../assets/slider2.jpg";
import prop3 from "../assets/slider3.jpg";

const Carddata = [
  {
    id: 1,
    imgsrc: prop1,
    tag: "Sold",
    css: { background: "#e94646" },
    prop: "5 BHK Flat",
    location: "Nayabazar, Kathmandu",
    bed: 5,
    kitchen: 2,
    bath: 2,
    parking: 'No',
    contact: '9841504552/9813955307',
  },
  {
    id: 2,
    imgsrc: prop2,
    tag: "For Rent",
    css: { background: "#34b849" },
    prop: "8 BHK Bonglow",
    location: "Balwatar, Kathmandu",
    bed: 8,
    kitchen: 2,
    bath: 2,
    parking: 'Yes',
    contact: '9841504552/9813955307',
  },
  {
    id: 3,
    imgsrc: prop3,
    tag: "Pending",
    css: { background: "#D3BC15" },
    prop: "4 BHK Flat",
    location: "Sinamangal, Kathmandu",
    bed: 4,
    kitchen: 2,
    bath: 2,
    parking: 'Yes',
    contact: '9841504552/9813955307',
  },
];

export default Carddata;
