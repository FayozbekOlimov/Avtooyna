import React, { useState, useEffect, useCallback } from 'react'
import { Stack } from '@mui/material'
import CertificateCarusel from './CertificateCarusel';
import Title from '../../../components/Title'
import { certificatesUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import Loading from '../../../components/Loading';
import { useT } from '../../../custom/hooks/useT';

const Certificates = () => {
	const { t, lang } = useT();
	const [certificates, setCertificates] = useState([]);
	const [loading, setLoading] = useState(false);

	const getCertificates = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll(certificatesUrl)
			.then((res) => {
				if (res.data.success) {
					setCertificates(res.data.data);
					setLoading(false);
				}
			})
			.catch((e) => console.log("e", e))

	}, [])

	useEffect(() => {
		getCertificates()
	}, [getCertificates])


	return (
		<Stack>
			{
				loading ? (<Loading />) : (
					<>
						<Title>{t(`certificates.${lang}`)}</Title>
						{
							certificates.map(certificate => (
								<CertificateCarusel key={certificate.id} {...certificate} />
							))
						}
					</>
				)
			}
		</Stack>
	)
}

export default Certificates;