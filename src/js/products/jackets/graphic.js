import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const graphic = {
  name: "Graphic",
  category: "Jacket",
  img:
    "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
  id: uniqid(),
  price: 45.0,
  sizes: [
    {
      id: "xs",
      colors: [
        {
          id: "#E61938",
          color: "red",
          quantity: 5,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 5,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 5,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
      ],
    },
    {
      id: "sm",
      colors: [
        {
          id: "#ffffff",
          color: "white",
          quantity: 9,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 1,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 12,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 9,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 8,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
      ],
    },
    {
      id: "md",
      colors: [
        {
          id: "#000000",
          color: "black",
          quantity: 1,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 9,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 2,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
      ],
    },
    {
      id: "lg",
      colors: [
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 1,
          img:
            "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
        },
      ],
    },
  ],
};

export default graphic;
