import React from 'react'
import { Grid } from '@mui/material'
import Title from '../../../components/Title'
import Text from "../../../components/Text"

const Quality = () => {
    return (
        <Grid item xs={12} md={9}>
            <div className="quality">
                <Title>Sifat</Title>
                <Text>
                    "Avtooyna" MChJ mahsulotlari sifat, ishonchlilik va chidamlilik garovidir!<br />
                    Bizning oynalarimiz jahon standartlariga mos yuqori sifatli horijdan keltirilgan shishadan, laminatsiya (tripleks) va chiniqtirish (stalinit) usulida tayyorlanadi.<br /><br />

                    Ishlab chiqarish jarayonining barcha bosqichlari qat'iy sifat nazorati ostida bo’lib, barcha mahsulotlar bir necha sinov bosqichlaridan o'tkaziladi. Mahsulotlarni mijozlarga yetkazishdan avval davlat standartlariga muvofiq oynalarni zarbalarga chidamliligi, quyosh nurlarini uzatish, aks ettirish va sindirish qobiliyati kabi xususiyatlarini tekshiradi.
                    Korxonamiz raqobatchilar oldida bir qator muhim afzalliklarga ega:<br /><br />

                    • zamonaviy ishlab chiqarish texnologiyalarini qo'llash;<br />
                    • ishlab chiqarish jarayonlarini yuqori avtomatlashtirilganlik darajasi;<br />
                    • yuqori sifatli xomashyo;<br />
                    • ko'p yillik tajribaga ega malakali kadrlar<br /><br />

                    Ushbu afzalliklar tufayli "Avtooyna" MChJ Evropa standartlariga muvofiq yuqori sifatli mahsulotlar ishlab<br /> chiqaradi.<br /><br />

                    Biz ishlab chiqarish jarayonida faqat ishonchli materiallardan va yangi texnologiyalardan foydalanamiz. Ishlab chiqarish jarayonini doimiy ravishda modernizatsiya qilib borish bizga eng sifatli avto oynalarni ishlab chiqarishga imkon beradi.<br /><br />
                    Sifat nazorati laboratoriyamiz mavjud. Bizning brendimiz bizning obroimizdir, bu esa o’z navbatida mahsulotlarimiz benuqson bo'lishidir. Brendimizning asosi bu mahsulotimiz sifatiga bo’lgan kafolatdir.<br />
                </Text>
            </div>
        </Grid>

    )
}

export default Quality;