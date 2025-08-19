import Contactanos from '@/components/Contactanos';
import HeroClient from '@/components/Hero/HeroClient';
import Ingreso from '@/components/Ingreso';
import Nav from '@/components/Nav';
import NavMobile from '@/components/NavMobile';
import Operativos from '@/components/Operativos';
import SobreNosotros from '@/components/SobreNosotros';
import SobreNosotrosMobile from '@/components/SobreNosotrosMobile';


const HomePage = () => {

    return (
        <>
            <NavMobile />
            <Nav />
            <main>
                <HeroClient />
                <Ingreso />
                <Operativos />
                <SobreNosotros />
                <SobreNosotrosMobile />
            </main>
            <footer>
                <Contactanos />
            </footer>
        </>
    );
};


export default HomePage;