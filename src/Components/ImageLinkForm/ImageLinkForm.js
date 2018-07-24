import React from 'react'
import './ImageLinkForm.css'

const Logo = () => {
	return  (
		<div className='ma4 mt0'> 
			<p className='f3'>
				{'This page will detect faces in your pictures.'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input className='br3 f4 pa2 w-70 center' type='tex' />
					<button className='br3 w-30 grow f4 link ph3 pv2 dib white bg-light-purple' > Detect </button>
				</div>
			</div>
		</div>
	);
}

export default Logo;