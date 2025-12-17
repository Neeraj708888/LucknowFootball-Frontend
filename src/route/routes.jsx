
import AboutUs from "../pages/AboutUs";
import ContactList from "../pages/ContactList";
import ContactUs from "../pages/ContactUs";

export const routes = [
  { path: "contactUs", element: <ContactUs /> },
  { path: "contactUs/list", element: <ContactList /> },
  { path: "aboutUs", element: <AboutUs /> },
];

  