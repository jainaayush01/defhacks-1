import { Jumbotron} from "reactstrap";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-3">Covid Resource Donation</h1>
                <p className="lead">
                    This is a Covid Resource Donation WebApp where people who
                    have gone thorugh covid-19 can donate their medicines to the
                    people who need them.
                </p>
                <Link
                    className="list-group-item list-group-item-action"
                    tag="a"
                    to="/about-us"
                    action
                >
                    Learn More
                </Link>
            </Jumbotron>
        </div>
    );
};
export default Home;
