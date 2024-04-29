import Home from "../pages/home-page/Home";

export const About = () => {
  return <h1>THIS IS ABOUT</h1>;
};
export const Contact = () => {
  return <h1>THIS IS CONTACT</h1>;
};

const RenderDashboard = ({ link }) => {
  switch (link) {
    case 0:
      return <Home />;
      break;
    case 1:
      return <About />;
      break;
    case 2:
      return <Contact />;
      break;
    default:
      return <Contact />;
      break;
  }
};
export default RenderDashboard;
