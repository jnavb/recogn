import React from 'react'
import Tilt from 'react-tilt'
import bulb from './bulb.png'
import './logo.css'

const Logo = () => {
	return  (
		<div className='ma4 mt0'> 
			<Tilt className="Tilt shadow-2" options={{ max : 55 }} 
						style={{ width: '8em' }} >
 				<div className="Tilt-inner"> 
 					<img style={{paddingTop: '.3em'}} src={bulb} alt="bulb" /> 
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;