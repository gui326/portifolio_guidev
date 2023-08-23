"use client";

import Image from "next/image";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";

import styles from "./page.module.css";
import Button from "@/src/components/Button";
import ButtonSecondary from "../src/components/ButtonSecondary";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-T7BGK77Z39');
`,
        }}
      />

      <main>
        <header>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "24px",
            }}
          >
            <Link href="/">
              <Image
                src="/assets/images/logo_guidev.svg"
                alt="Logo GuiDev"
                width="50"
                height="50"
              />
            </Link>

            <nav className={styles.navBar}>
              <ul className={styles.menu}>
                <li
                  className={`${styles.navBar__link} ${styles.navBar__linkActive}`}
                >
                  <Link href="/">Inicio</Link>
                </li>
                <li className={styles.navBar__link}>
                  <Link href="/#projetos">Projetos</Link>
                </li>
              </ul>

              <ul className={styles.menu}>
                <li className={styles.navBar__contact}>
                  <a href="/" target="_blank">
                    EMAIL
                  </a>
                </li>
                <li className={styles.navBar__contactDetail}>/</li>
                <li className={styles.navBar__contact}>
                  <a href="/" target="_blank">
                    LINKEDIN
                  </a>
                </li>
                <li className={styles.navBar__contactDetail}>/</li>
                <li className={styles.navBar__contact}>
                  <a href="/" target="_blank">
                    GITHUB
                  </a>
                </li>
              </ul>
            </nav>
          </Container>
        </header>

        <section>
          <Container>
            <Box
              sx={{
                mt: { md: "80px", xs: "60px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <div className={styles.badgeHero}>
                <div />

                <p>UI/UX enthusiastic</p>
              </div>

              <div className={styles.badgeHero}>
                <div />

                <p>Front-end developer</p>
              </div>

              <div className={styles.badgeHero}>
                <div />

                <p>Back-end developer</p>
              </div>
            </Box>

            <h1 className={styles.hero__title}>
              Olá, eu sou o <span>Guilherme Batista</span>
            </h1>

            <p className={styles.hero__description}>
              Tenho 4 anos de experiência em programação, sou formado em Análise
              e Desenvolvimento de Sistemas (ADS) e atuo como{" "}
              <b>Desenvolvedor Full-Stack</b> há mais de 2 anos. Durante minha
              trajetória profissional, tenho trabalhado com diversas
              tecnologias, incluindo HTML5, CSS3, JavaScript, PHP, Node.js,
              MySQL, React, React Native e Next.js, entre outras.
            </p>

            <Box
              sx={{
                mt: "56px",
                mb: { md: "100px", xs: "80px" },
                display: "flex",
                alignItems: "center",
                flexDirection: { md: "row", xs: "column" },
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <Button>Entre em contato</Button>

              <Link href="/#projetos">
                <ButtonSecondary>Visualizar projetos</ButtonSecondary>
              </Link>
            </Box>
          </Container>
        </section>

        <section className={styles.sectionJourney}>
          <Container sx={{ position: "relative", zIndex: 2 }}>
            <h2 className={styles.sectionJourney__title}>
              Minha trajetória <br /> <span>Profissional e Educacional.</span>
            </h2>

            <p className={styles.sectionJourney__description}>
              São quase três anos desenvolvendo aplicações em <br /> algumas
              empresas que passei.
            </p>

            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <div className={styles.sectionJourney__card}>
                  <h3>Adalov</h3>

                  <small>Fev 2022 - Atualmente</small>

                  <p>
                    Exerço a função de{" "}
                    <span>Desenvolvedor Full-Stack Pleno</span>, dedicado(a) à
                    criação de aplicações web e mobile. Minha especialização
                    inclui a criação de painéis administrativos, landing pages,
                    sites institucionais e outros tipos de aplicações. Minhas
                    competências abrangem desde o desenvolvimento do conteúdo
                    front-end até a integração de dados por meio de APIs. Possuo
                    um sólido conhecimento nas tecnologias React, React Native e
                    Next.js, além de habilidades em Styled-components e Redux, e
                    também no uso do Material UI e outras ferramentas relevantes
                    para UI. Além disso, trago consigo uma ampla experiência na
                    criação de APIs REST utilizando Node.js com Express.js.
                  </p>
                </div>
              </Grid>

              <Grid item md={4} xs={12}>
                <div
                  className={`${styles.sectionJourney__card} ${styles.sectionJourney__cardDisabled}`}
                >
                  <h3>Six</h3>

                  <small>Set 2021 - Fev 2022</small>

                  <p>
                    Desempenhei o papel de{" "}
                    <span>Desenvolvedor Full-Stack Júnior</span>, contribuindo
                    para o planejamento de desenvolvimento por meio da criação
                    de diagramas detalhados. Fui responsável pelo
                    desenvolvimento e manutenção de diversos projetos, incluindo
                    sites institucionais, painéis administrativos e Landing
                    Pages. Durante essa experiência, apliquei uma ampla gama de
                    tecnologias e processos, como Laravel, Drupal, PHP e
                    JavaScript. Além disso, utilizei prototipação com o Figma,
                    otimização para mecanismos de busca (SEO), criação de
                    diagramas e outras práticas relevantes.
                  </p>
                </div>
              </Grid>

              <Grid item md={4} xs={12}>
                <div
                  className={`${styles.sectionJourney__card}  ${styles.sectionJourney__cardDisabled}`}
                >
                  <h3>N Soluções</h3>

                  <small>Fev 2021 - Set 2021</small>

                  <p>
                    Atuei como <span>Desenvolvedor Trainee Full-Stack</span>,
                    envolvendo a criação de sistemas web abrangentes, como
                    plataformas de e-commerce, sistemas de gerenciamento
                    logístico e painéis administrativos. Durante esse período,
                    utilizei diversas tecnologias, incluindo PHP, CodeIgniter,
                    HTML, CSS e JavaScript, para o desenvolvimento completo
                    dessas soluções.
                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid
              mt={{ md: "80px", xs: "40px" }}
              mb={{ md: "100px", xs: "80px" }}
              container
              spacing={2}
            >
              <Grid
                item
                md={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <div className={styles.sectionJourney__cardSchool}>
                  <Image
                    src="/assets/images/logo_iftm.svg"
                    alt="Logo Federal"
                    width="64"
                    height="64"
                  />

                  <h3>IFTM</h3>

                  <span>2019 - 2023</span>

                  <p>
                    Formado em Tecnólogo em{" "}
                    <b>
                      Análise e <br /> Desenvolvimento de Sistemas.
                    </b>
                  </p>
                </div>
              </Grid>

              <Grid
                item
                mt={{ md: 0, xs: "40px" }}
                md={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <div className={styles.sectionJourney__cardSchool}>
                  <Image
                    src="/assets/images/logo_fiap.svg"
                    alt="Logo FIAP"
                    width="64"
                    height="64"
                  />

                  <h3>FIAP</h3>

                  <span>2023 - 2024</span>

                  <p>
                    Pós-graduação: Especialização em <br />{" "}
                    <b>Software Architecture.</b>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>

          <Image
            style={{ objectFit: "cover", opacity: "0.4", zIndex: 1 }}
            src="/assets/images/background_journey.png"
            alt="Background journey"
            fill
          />
        </section>

        <section className={styles.sectionKnowledge}>
          <Container>
            <h2 className={styles.sectionKnowledge__title}>
              Conhecimentos e <br /> <span>Stack principal.</span>
            </h2>

            <p className={styles.sectionKnowledge__description}>
              São quase três anos desenvolvendo aplicações em <br /> algumas
              empresas que passei.
            </p>

            <Box
              sx={{
                mb: "64px",
                display: "flex",
                alignItems: "stratch",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <div
                className={`${styles.sectionKnowledge__card} ${styles.sectionKnowledge__cardFirst}`}
              >
                <Image
                  src="/assets/images/logo_javascript.png"
                  alt="Logo JavaScript"
                  width="40"
                  height="40"
                />

                <h3>JavaScript</h3>

                <p>
                  Atualmente, o JavaScript é a linguagem que ocupa a maior parte
                  do meu dia a dia. Tenho experiência com essa linguagem há
                  quase três anos.
                </p>
              </div>

              <div
                className={`${styles.sectionKnowledge__card} ${styles.sectionKnowledge__cardMid}`}
              >
                <Image
                  src="/assets/images/logo_react.png"
                  alt="Logo React"
                  width="46"
                  height="40"
                />

                <h3>React</h3>

                <p>
                  Há quase dois anos, tenho utilizado o React diariamente para
                  desenvolver aplicações web e mobile.
                </p>
              </div>

              <div
                className={`${styles.sectionKnowledge__card} ${styles.sectionKnowledge__cardLast}`}
              >
                <Image
                  style={{ filter: "invert(1) brightness(22)" }}
                  src="/assets/images/logo_next_js.png"
                  alt="Logo NextJs"
                  width="66"
                  height="40"
                />

                <h3>Next.js</h3>

                <p>
                  Há mais de um ano, venho utilizando o Next.js para desenvolver
                  aplicações com ênfase em SEO e outras funcionalidades.
                </p>
              </div>
            </Box>

            <p className={styles.sectionKnowledge__description}>
              E entre outras <b>linguagens</b> <br /> e <b>framework</b> que já
              passei
            </p>

            <Grid
              mt={{ md: "24px", xs: "0" }}
              mb={{ md: "100px", xs: "80px" }}
              container
              rowSpacing={6}
            >
              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    src="/assets/images/logo_php.png"
                    alt="Logo PHP"
                    width="93"
                    height="50"
                  />

                  <h4>PHP</h4>
                </div>
              </Grid>

              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    src="/assets/images/logo_laravel.png"
                    alt="Logo Laravel"
                    width="48"
                    height="50"
                  />

                  <h4>Laravel</h4>
                </div>
              </Grid>

              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    src="/assets/images/logo_typescript.png"
                    alt="Logo TypeScript"
                    width="50"
                    height="50"
                  />

                  <h4>TypeScript</h4>
                </div>
              </Grid>

              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    style={{ filter: "brightness(0) invert(1)" }}
                    src="/assets/images/logo_prisma.svg"
                    alt="Logo Prisma"
                    width="128"
                    height="50"
                  />

                  <h4>Prisma</h4>
                </div>
              </Grid>

              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    src="/assets/images/logo_mysql.png"
                    alt="Logo MySql"
                    width="96"
                    height="50"
                  />

                  <h4>MySql</h4>
                </div>
              </Grid>

              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    src="/assets/images/logo_nodejs.png"
                    alt="Logo NodeJs"
                    width="44"
                    height="50"
                  />

                  <h4>Node.js</h4>
                </div>
              </Grid>

              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    src="/assets/images/logo_mui.png"
                    alt="Logo MUI"
                    width="64"
                    height="50"
                  />

                  <h4>Material UI</h4>
                </div>
              </Grid>

              <Grid item md={3} xs={6}>
                <div className={styles.sectionKnowledge__cardSimple}>
                  <Image
                    src="/assets/images/logo_styled.svg"
                    alt="Logo Styled Components"
                    width="64"
                    height="50"
                  />

                  <h4>Styled Components</h4>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section id="projetos" className={styles.sectionProject}>
          <Container>
            <h2 className={styles.sectionProject__title}>
              Projetos realizados <span>profissional e educional.</span>
            </h2>
          </Container>

          <Box
            sx={{
              mb: "100px",
              height: "500px",
              width: "100%",
              display: "flex",
              gap: "24px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "35%",
              }}
            >
              <Box
                sx={{
                  borderRadius: "0 8px 8px 0",
                  backgroundColor: "grey",
                  height: "60%",
                  width: "100%",
                }}
              />

              <Box
                sx={{
                  borderRadius: "0 8px 8px 0",
                  backgroundColor: "grey",
                  height: "40%",
                  width: "100%",
                }}
              />
            </Box>

            <Box
              sx={{
                borderRadius: "8px 8px",
                backgroundColor: "grey",
                height: "95%",
                width: "25%",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "35%",
              }}
            >
              <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "60%",
                  width: "100%",
                  position: "relative",
                  ".sectionProject__link": {
                    display: "none",
                  },
                  "&:hover": {
                    ".sectionProject__link": {
                      display: "flex",
                    },
                  },
                }}
              >
                <Image
                  style={{ objectFit: "cover", objectPosition: "left" }}
                  src="/assets/images/projeto_investeja.png"
                  alt="InvesteJá"
                  fill
                />

                <Box
                  className="sectionProject__link"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    a: {
                      background: "#515151",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "8px 16px",
                      borderRadius: "100px",
                      color: "#FFF",
                    },
                  }}
                >
                  <a href="https://www.investeja.com.br/" target="_blank">
                    InvesteJá
                  </a>
                </Box>
              </Box>

              <Box
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "grey",
                  height: "40%",
                  width: "100%",
                }}
              />
            </Box>

            <Box
              sx={{
                borderRadius: "8px 0 0 8px",
                backgroundColor: "grey",
                height: "100%",
                width: "25%",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: "-24px",
                width: "100%",
                right: 0,
                left: 0,
                height: "40px",
                "-webkit-filter": "blur(1px)",
                background:
                  "linear-gradient(180deg, #00000075 9%, #101010 90%)",
              }}
            />
          </Box>
        </section>

        <footer className={styles.footer}>
          <div>
            <Image
              src="/assets/images/logo_guidev.svg"
              alt="Logo GuiDev"
              width="40"
              height="40"
            />

            <p>Guilherme Batista | Dev</p>
          </div>
        </footer>
      </main>
    </>
  );
}
