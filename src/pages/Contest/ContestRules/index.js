import React from "react";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import Text from "../../../components/Text";
import Title from "../../../components/Title";
import "./_style.scss";

export default function ContestRules() {
  return (
    <>
      <Stack className="aboutOrg" direction="row">
        <div className="container">
          <Grid item xs={10}>
            <div className="contest_wrapper">
              <div className="contest_body">
                <div className="contest_title">
                  <Title>Bosh ish o’rinlari</Title>
                  <Text>
                    Barcha tijorat takliflari qat'iyan{" "}
                    <span>
                      <a
                        href="mailto:name@email.com"
                        className="contest_email_link"
                      >
                        offers@avtooyna.uz{" "}
                      </a>
                    </span>
                    elektron pochta manziliga yuborilishi shart. * Boshqa
                    manzillarga yuborilgan tijorat takliflar bekor hisoblanadi
                  </Text>
                </div>
                <div className="contest_img">
                  <div className="contest_image">
                    <Grid item xs={5} md={6}>
                      <img
                        className="contest_banner_img"
                        src="/assets/img/resume_img.png"
                        alt="resume_img"
                      />
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Stack>
    </>
  );
}
