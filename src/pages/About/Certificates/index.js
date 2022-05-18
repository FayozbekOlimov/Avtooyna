import React from 'react'
import { Grid, Stack } from '@mui/material'
import CertificateCarusel from './CertificateCarusel';
import Title from '../../../components/Title'
import "./style.scss"

const Certificates = () => {
	return (
		<Stack direction='column' width="100%">
			<Title>Sertifikatlar</Title>
			<CertificateCarusel />
			<CertificateCarusel />
		</Stack>
	)
}

export default Certificates;