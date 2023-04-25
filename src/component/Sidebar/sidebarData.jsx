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
    path: "dashboard",
  },
  {
    icon: bookingIcon,
    heading: "Bookings",
    path: "bookings",
  },
  {
    icon: visaIcon,
    heading: "visa",
    path: "visa",
  },
  {
    icon: offerIcon,
    heading: "Offers",
    path: "offers",
  },
  {
    icon: b2bIcon,
    heading: "B2B",
    path: "b2b",
  },
  {
    icon: faqIcon,
    heading: "FAQ",
    path: "faq",
  },
  {
    icon: genericIcon,
    heading: "Generic Page",
    path: "genericpage",
  },
];

export default SideBarLinks;
