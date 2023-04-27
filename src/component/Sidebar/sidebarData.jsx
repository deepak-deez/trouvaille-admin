import dashboardIcon from "../../assets/image/Sidebar/dashboard-icon.svg";
import bookingIcon from "../../assets/image/Sidebar/booking-icon.svg";
import visaIcon from "../../assets/image/Sidebar/visa-icon.svg";
import offerIcon from "../../assets/image/Sidebar/offer-icon.svg";
import b2bIcon from "../../assets/image/Sidebar/b2b-icon.svg";
import faqIcon from "../../assets/image/Sidebar/faq-icon.svg";
import genericIcon from "../../assets/image/Sidebar/generic-icon.svg";

const SideBarLinks = [
  {
    icon: dashboardIcon,
    heading: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: b2bIcon,
    heading: "Trip Categories",
    path: "/trip-categories",
  },
  {
    icon: visaIcon,
    heading: "All Amenities",
    path: "/all-amenities",
  },
  {
    icon: bookingIcon,
    heading: "Occasions List",
    path: "/occasions-list",
  },
  {
    icon: b2bIcon,
    heading: "Travel Type List",
    path: "/travel-type",
  },
  {
    icon: genericIcon,
    heading: "List of Trips",
    path: "/list-of-trips",
  },
  {
    icon: genericIcon,
    heading: "Booking List",
    path: "/booking-list",
  },
];

export default SideBarLinks;
