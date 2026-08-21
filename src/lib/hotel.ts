import imgEntrance from "@/assets/hotel-image.png";
import imgRoomWood from "@/assets/hotel-image-2.png";
import imgSeating from "@/assets/hotel-image-3.png";
import imgBathTiles from "@/assets/hotel-image-4.png";
import imgStairs from "@/assets/hotel-image-5.png";
import imgHallway from "@/assets/hotel-image-6.png";
import imgSeatingDetail from "@/assets/hotel-image-7.png";
import imgCorridor from "@/assets/hotel-image-8.png";
import imgBathroom from "@/assets/hotel-image-9.png";
import imgRoomRed from "@/assets/hotel-image-10.png";

export const HOTEL = {
  name: "Hotel Silver Star",
  city: "Panipat",
  address:
    "Old Bus Stand Road, near Prem Hospital, Bishon Sarup Colony, Panipat, Haryana 132103",
  phone: "+91 78766 77150",
  phoneRaw: "+917876677150",
  whatsapp: "917876677150",
  rating: "4.8",
  startingPrice: "₹818",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.042466374922!2d76.96457891078637!3d29.398313748792084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbc789f342d1%3A0xfca47107c8e2770a!2sHotel%20Silver%20Star!5e0!3m2!1sen!2sin!4v1787291938594!5m2!1sen!2sin",
  mapLink: "https://maps.app.goo.gl/?q=Hotel+Silver+Star+Panipat",
};

export const waLink = (message: string) =>
  `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${HOTEL.phoneRaw}`;

export const IMAGES = {
  entrance: imgEntrance,
  roomWood: imgRoomWood,
  seating: imgSeating,
  bathTiles: imgBathTiles,
  stairs: imgStairs,
  hallway: imgHallway,
  seatingDetail: imgSeatingDetail,
  corridor: imgCorridor,
  bathroom: imgBathroom,
  roomRed: imgRoomRed,
};

export const GALLERY = [
  { src: IMAGES.entrance, alt: "Illuminated entrance of Hotel Silver Star, Panipat with AC and Non-AC rooms signage" },
  { src: IMAGES.roomWood, alt: "Deluxe AC room with dark wood panelling and gold accents at Hotel Silver Star" },
  { src: IMAGES.roomRed, alt: "Hotel Silver Star room with wall-mounted TV and attached bathroom" },
  { src: IMAGES.seating, alt: "Wooden seating corner with table inside a Hotel Silver Star room" },
  { src: IMAGES.seatingDetail, alt: "Seating area with complimentary water and glasses at Hotel Silver Star" },
  { src: IMAGES.bathTiles, alt: "Clean bathroom with decorative tiles and shower at Hotel Silver Star Panipat" },
  { src: IMAGES.bathroom, alt: "Attached bathroom with western toilet and washbasin" },
  { src: IMAGES.stairs, alt: "Marble staircase with LED lighting at Hotel Silver Star" },
  { src: IMAGES.hallway, alt: "Hotel hallway with patterned wallpaper and gold wall lights" },
  { src: IMAGES.corridor, alt: "Bright clean corridor with marble flooring at Hotel Silver Star" },
];

export const ROOMS = [
  {
    name: "Deluxe AC Suite",
    price: "₹1,499",
    meta: "King Bed • AC • Attached Bath",
    image: IMAGES.roomWood,
    badge: "Most Popular",
    details: [
      "Premium wood-panelled interiors",
      "Air conditioning with power backup",
      "Free high-speed Wi-Fi & LED TV",
      "Daily housekeeping and fresh linen",
    ],
  },
  {
    name: "Executive Standard",
    price: "₹818",
    meta: "Queen Bed • Work Desk",
    image: IMAGES.seating,
    badge: null,
    details: [
      "Budget-friendly comfort near Old Bus Stand",
      "Clean attached bathroom with hot water",
      "Free Wi-Fi and complimentary water",
      "Room service available round the clock",
    ],
  },
  {
    name: "Heritage Family Room",
    price: "₹2,199",
    meta: "Twin Beds • Lounge Area",
    image: IMAGES.roomRed,
    badge: null,
    details: [
      "Spacious layout for families",
      "Separate seating corner",
      "Air conditioning and LED TV",
      "Extra bedding available on request",
    ],
  },
];
