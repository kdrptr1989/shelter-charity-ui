import Logo from "./logo";
import NavbarButtons from "./navbarbuttons";
import NavbarOptions from "./navbaroptions";

const Navbar = () => {
    return ( 
    <div 
        className="
        w-full
        px-15
        py-12
        flex
        items-center
        h-[calc(1vh-74px)]
        justify-between        
        md:justify-evenly
        ">
          <Logo />         
          <NavbarOptions />
          <NavbarButtons />
    </div> );
}
 
export default Navbar;