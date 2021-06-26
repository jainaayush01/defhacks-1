import { Jumbotron, Button } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <Jumbotron className="text-center" >
        <h1 className="display-3">Covid Medicine Donation</h1>
        <p className="lead">
          This is a Covid Medicine Donation WebApp where people who have gone
          thorugh covid-19 can donate their medicines to the people who need
          them.
        </p>
        <Button color="primary">Learn More</Button>
      </Jumbotron>
    </div>
  );
};
export default Home;
