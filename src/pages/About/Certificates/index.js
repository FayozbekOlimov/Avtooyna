import React, { useState, useEffect, useCallback } from 'react'
import { Stack } from '@mui/material'
import CertificateCarusel from './CertificateCarusel';
import Title from '../../../components/Title'
import "./style.scss"
import { certificatesUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';

const Certificates = () => {

	const [certificates, setCertificates] = useState([]);
	const [loading, setLoading] = useState(false);

	const getCertificates = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(certificatesUrl)
			.then((res) => {
				// if (res.data.success) {
				setCertificates(res.data.sertifikat);
				setLoading(false);
				// }
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getCertificates()
	}, [getCertificates])


	return (
		<Stack>
			<Title>Sertifikatlar</Title>
			{
				certificates.map(certificate => (
					<CertificateCarusel key={certificate.id} {...certificate} />
				))
			}

		</Stack>
	)
}

export default Certificates;