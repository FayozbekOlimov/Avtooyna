import { Button } from '@mui/material';
import React from 'react';
import "./style.scss";

const Resume = (props) => {
	return (
		<div>
			<div className='resume'>
				<div>
					<div className="resume_blank">
						<div>
							<div className='resume_number'>
								<h1>{props.number}</h1>
							</div>
						</div>

						<div className='resume_title'>
							<h2>{props.title}</h2>
							<p>
								{props.text}
							{
								props.docSize && (props.docSize)
							}
							</p>
							
						</div>
					</div>
					<div className="resume_btn">
						{
							props.doc && 
							<a herf="#">
								<Button className='btn-compliance' variant='outlined' sx={{ textTransform: 'none' }} >{props.doc}</Button>
							</a>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume;
