import Banner from "../../components/banner/banner";
import AvailabilityForm from "../../components/availability/availability";
import Hotels from "../../components/hotels/hotels";
import Testimonials from "../../components/testimonials/testimonials";

function Home(){
	return(
		<>
			<Banner/>
			<AvailabilityForm/>
			<Hotels/>
			<Testimonials/>
		</>
	);
}
export default Home;