import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const comfort = {
  name: "Comfort",
  category: "Sweater",
  img:
    "https://www.vhv.rs/dpng/d/489-4899517_sweater-png-photos-transparent-red-sweater-png-png.png",
  id: uniqid(),
  price: 15.0,
  sizes: [
    {
      id: "md",
      colors: [
        {
          id: "#4034eb",
          color: "blue",
          quantity: 2,
          img:
            "https://www.vhv.rs/dpng/d/489-4899517_sweater-png-photos-transparent-red-sweater-png-png.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 9,
          img:
            "https://www.vhv.rs/dpng/d/489-4899517_sweater-png-photos-transparent-red-sweater-png-png.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 4,
          img:
            "https://www.vhv.rs/dpng/d/489-4899517_sweater-png-photos-transparent-red-sweater-png-png.png",
        },
      ],
    },
    {
      id: "lg",
      colors: [
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 3,
          img:
            "https://www.vhv.rs/dpng/d/489-4899517_sweater-png-photos-transparent-red-sweater-png-png.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 1,
          img:
            "https://www.vhv.rs/dpng/d/489-4899517_sweater-png-photos-transparent-red-sweater-png-png.png",
        },
      ],
    },
  ],
};

export default comfort;
