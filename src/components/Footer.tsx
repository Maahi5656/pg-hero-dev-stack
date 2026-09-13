
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className='relative border-t border-[#F1F5F9] px-6 pt-6 md:px-10 lg:px-[100px]'>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-4">
                <div>
                    <div>
                        <img src={logo} alt="" />
                        <p className='inline-block text-[#64748B] font-light mb-3'>Curated tools, technologies and resources for ddeveloping building modern software</p>
                        <ul className='flex'>
                            <li><b className='pr-1'>GitHub</b></li>
                            <li><b className='pr-1'>Twitter</b></li>
                            <li><b className='pr-1'>LinkedIn</b></li>
                        </ul>
                    </div>    
                </div>
                <div className='flex justify-center items-start'>
                    <div>
                        <h2 className='text-[14px] font-bold uppercase mb-[10px]'>Product</h2>
                        <ul>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">Home</a></li>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">Technologies</a></li>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">Projects</a></li>
                        </ul>
                    </div>

                </div>
                <div className='flex justify-center items-start'>
                    <div>
                        <h2 className='text-[14px] font-bold uppercase mb-[10px]'>Company</h2>
                        <ul>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">About</a></li>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">Contact</a></li>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">Careers</a></li>
                        </ul> 
                    </div>
                   
                </div>
                <div className='flex justify-center items-start'>
                    <div>
                        <h2 className='text-[14px] font-bold uppercase mb-[10px]'>Legal</h2>
                        <ul>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">About</a></li>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">Contact</a></li>
                            <li><a className='inline-block text-[#64748B] font-light mb-3' href="#">Careers</a></li>
                        </ul>  
                    </div>
                  
                </div>
            </div>
        </footer>
    );
};

export default Footer;