
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import LandingNew from './LandingNew';


const Landing = () => {

    return (

        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <LandingNew /> 
        </Wrapper>

    );

};

export default Landing;