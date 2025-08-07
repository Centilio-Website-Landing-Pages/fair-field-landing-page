"use client"
import logo from '../images/logo.svg'
import phone from '../images/phone.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return(
		<div className="bg-[#ffffff] top-0 sticky z-[50]">
			<div className="bg-[#ffffff] max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-7">
				<div className="flex items-center justify-between">
					<Image src={logo} alt="logo" />
					<Link href="tel:+91 7900884488" onClick={() => window.centilio_connector_init.submit_call()}>
						<div id="callUsNowButton" className="call-us-button bg-[#37405E] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium">
							<Image src={phone} alt="phone" />
							<span className="text-[#ffffff] ml-[10px] max-sm:hidden">
								Call Us Now
							</span>
							<span className="text-[#ffffff] ml-[10px] sm:hidden">
								Call Us
							</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}