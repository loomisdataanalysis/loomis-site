import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import logo from "../assets/Loomis_Logo.png";
import fundo from "../assets/testefundo.png";
import CaioFoto from "../assets/Caio.png";
import GambineFoto from "../assets/Gambine.jpeg";
import LiviaFoto from "../assets/Livia.jpg";

export default function Home() {
  const cardOpacity = 0.15;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="scroll-smooth font-grotesk text-loomis-navy bg-[var(--loomis-bg)]">
      <Navbar />

      {/* ===================== HOME ===================== */}
      <motion.section
        id="home"
        className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%] pt-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* LADO ESQUERDO */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-loomis-navy">
          <motion.h1
            className="font-poppins font-extrabold leading-tight mb-6 tracking-tight drop-shadow-sm text-loomis-navy"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automatizamos o caminho{" "}
            <span
              className="bg-gradient-to-r from-loomis-blue to-blue-600 bg-clip-text text-transparent font-extrabold"
              style={{
                display: "inline",
                fontSize: "inherit",
                lineHeight: "inherit",
                verticalAlign: "baseline",
              }}
            >
              entre&nbsp;dados&nbsp;e&nbsp;decisões.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-900 max-w-xl mb-10 font-grotesk font-medium"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transformamos dados complexos em inteligência visual e automações
            que entregam clareza, velocidade e decisões precisas.
          </motion.p>

          <motion.div
            className="flex gap-4"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#sobre"
              className="inline-block px-6 py-3 rounded-lg bg-loomis-blue text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Saiba Mais
            </a>
            <a
              href="#contato"
              className="inline-block px-6 py-3 rounded-lg border-2 border-loomis-blue text-loomis-blue font-semibold hover:bg-loomis-blue hover:text-white transition-all duration-300"
            >
              Fale Conosco
            </a>
          </motion.div>
        </div>

        {/* LADO DIREITO */}
        <aside className="relative flex items-center justify-end bg-cover bg-center overflow-hidden pr-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fundo})`, opacity: 0.9 }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-blue-200/10 to-transparent" />
          <motion.div
            className="relative z-10 backdrop-blur-lg border border-white/40 rounded-2xl 
                        shadow-[0_0_40px_rgba(37,99,235,0.25)] px-14 py-9 md:px-18 md:py-12 lg:px-20 lg:py-14
                        max-w-[500px] md:max-w-[560px] lg:max-w-[600px]
                        flex flex-col items-center justify-center
                        -translate-y-[10px]
                        transition-all duration-500 hover:scale-105 
                        hover:shadow-[0_0_60px_rgba(37,99,235,0.4)]"
            style={{ backgroundColor: `rgba(255, 255, 255, ${cardOpacity})` }}
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src={logo}
              alt="Loomis Logo"
              className="max-h-64 md:max-h-72 lg:max-h-80 drop-shadow-xl transition-all duration-500"
            />
          </motion.div>
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-400/25 blur-3xl rounded-full opacity-40 animate-pulse-slow right-20"></div>
        </aside>
      </motion.section>
      {/* ===================== SOBRE ===================== */}
      <motion.section
        id="sobre"
        className="min-h-screen flex flex-col justify-center items-center text-center px-10 
                   bg-gradient-to-b from-[#132a4a] via-[#17315a] to-[#132a4a]
                   relative overflow-hidden pt-24 pb-24 text-white"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Fundo animado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/25 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-200/25 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Título */}
          <motion.h2
            className="text-6xl md:text-7xl font-extrabold tracking-tight font-poppins 
                       bg-gradient-to-r from-blue-300 via-blue-500 to-blue-400 bg-clip-text text-transparent 
                       drop-shadow-[0_0_20px_rgba(96,165,250,0.4)] text-center mb-10"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sobre a Loomis 🌍
          </motion.h2>

          {/* Texto principal */}
          <motion.p
            className="text-lg md:text-xl text-blue-100/90 max-w-4xl mb-20 font-light text-justify leading-relaxed tracking-wide 
                       selection:bg-blue-300/30 mx-auto"
            style={{ textAlignLast: 'center' }}
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A <strong className="text-white">Loomis Data Analysis</strong> nasceu da união entre
            <strong className="text-white"> engenharia, automação e ciência de dados</strong>.
            Fundada por <strong className="text-white">Caio Leandro</strong> e{" "}
            <strong className="text-white">Gabriel Gambine</strong>, ambos da UNESP-FEG,
            a Loomis transforma dados brutos em inteligência visual e automações que
            simplificam análises e decisões. Com{" "}
            <strong className="text-white">Lívia Meireles</strong> liderando a estratégia e
            operações, unimos tecnologia, clareza e inovação para ajudar empresas a
            entenderem seus dados de forma simples e poderosa.
          </motion.p>

          {/* 🔹 CARDS DO TIME */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: true }}
          >
            {[
              {
                nome: 'Caio Leandro de Moraes',
                cargo: 'CEO & Cofundador',
                desc: 'Graduando em Engenharia Mecânica pela UNESP-FEG, com experiência internacional em automação e integração de sistemas. Idealizador técnico e responsável por desenvolvimento e inovação da Loomis.',
                foto: CaioFoto,
              },
              {
                nome: 'Gabriel Gambine',
                cargo: 'CMO & Cofundador',
                desc: 'Graduando em Engenharia Mecânica pela UNESP-FEG. Atua na captação de clientes, desenvolvimento de portfólios e suporte técnico, unindo visão estratégica e automação prática.',
                foto: GambineFoto,
              },
              {
                nome: 'Lívia Meireles',
                cargo: 'COO & Estratégia',
                desc: 'Estudante de Gestão de Negócios e Inovação pela Fatec Sebrae. Responsável pelo planejamento estratégico, posicionamento institucional e gestão das operações da Loomis.',
                foto: LiviaFoto,
              },
            ].map((membro, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.45)]
                           border border-blue-300/40 hover:border-blue-200/80 
                           transition-all duration-500 text-center w-80 mx-auto 
                           hover:bg-white/15"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-5 border-4 border-blue-300 
                             shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300"
                />
                <h4 className="text-xl font-semibold text-blue-100">{membro.nome}</h4>
                <p className="text-blue-200 font-medium">{membro.cargo}</p>
                <p className="text-blue-100/80 mt-3 text-sm leading-relaxed">{membro.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 🔹 NOSSOS VALORES */}
          <motion.h3
            className="text-5xl font-extrabold font-poppins tracking-tight bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent mb-14 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            Nossos Valores 💎
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {[
              {
                titulo: 'Inovação Contínua',
                texto:
                  'Transformamos tecnologia em soluções práticas. Cada projeto é uma oportunidade de reinventar processos e agregar inteligência automatizada aos negócios.',
              },
              {
                titulo: 'Clareza e Precisão',
                texto:
                  'Acreditamos que dados só têm valor quando são compreendidos. Nosso foco é transformar complexidade em visualizações claras e decisões assertivas.',
              },
              {
                titulo: 'Eficiência Real',
                texto:
                  'Nosso compromisso é entregar resultados mensuráveis: reduzir tempo, eliminar retrabalhos e potencializar o desempenho operacional de forma sustentável.',
              },
              {
                titulo: 'Parceria e Confiança',
                texto:
                  'Trabalhamos lado a lado com cada cliente, compreendendo sua realidade e desenhando soluções que realmente se encaixam em seu modelo de negócio.',
              },
              {
                titulo: 'Impacto Sustentável',
                texto:
                  'Crescemos junto com quem acredita em inovação. Cada automação, cada dashboard e cada insight tem o propósito de gerar impacto duradouro e positivo.',
              },
            ].map((valor, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-blue-900/30 to-blue-800/20 backdrop-blur-lg p-8 rounded-2xl 
                           border border-blue-300/40 shadow-[0_0_20px_rgba(59,130,246,0.25)] 
                           hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] 
                           transition-all duration-500 text-center w-72 mx-auto hover:bg-blue-900/25"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h4 className="text-2xl font-semibold text-blue-50 mb-3 font-poppins tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {valor.titulo}
                </h4>
                <p className="text-blue-100/85 text-sm leading-relaxed font-light">
                  {valor.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* ===================== PLATAFORMA ===================== */}
      <motion.section
        id="plataforma"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-28 
                   bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 
                   relative overflow-hidden text-loomis-navy"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Fundo animado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/25 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-300/30 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-6xl w-full space-y-24">
          
          {/* BLOCO 1 — EXPLICAÇÃO */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.25)] 
                       border border-blue-300/40 p-12 hover:shadow-[0_0_70px_rgba(37,99,235,0.4)] 
                       transition-all duration-700"
            variants={fadeUp}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8 text-center font-poppins drop-shadow-sm">
              Plataforma Loomis 
            </h1>

            <p className="text-lg md:text-xl text-blue-900/90 text-center mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              A <strong>Loomis Data Analysis</strong> foi criada para resolver o maior desafio das empresas modernas:  
              <strong> saber o que fazer com os dados.</strong>  
              Nossa plataforma não apenas coleta e organiza informações — ela 
              <strong> detecta gargalos</strong>, <strong> interpreta padrões</strong> 
              e utiliza <strong> IA generativa</strong> para sugerir 
              <strong> ações reais</strong> e <strong> soluções práticas.</strong>
            </p>

            <ul className="space-y-4 text-blue-900 text-base md:text-lg font-medium px-6 md:px-16">
              {[
                'Dashboards automatizados que identificam anomalias e tendências de queda de performance.',
                'IA integrada que sugere soluções diretas para cada problema detectado.',
                'Integrações com APIs, sensores e bancos de dados corporativos.',
                'Alertas inteligentes via Telegram com diagnóstico e recomendação automática.',
                'Visual premium, responsivo e sempre atualizado em tempo real.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-700 text-xl mt-[2px]">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* BLOCO 2 — DIFERENCIAIS */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.25)] 
                       border border-blue-300/40 p-12 hover:shadow-[0_0_70px_rgba(37,99,235,0.4)] 
                       transition-all duration-700"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-14 text-center drop-shadow-sm font-poppins">
              Por que escolher a Loomis?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  titulo: 'Diagnóstico Automático',
                  texto:
                    'Nossa <strong>IA analisa padrões</strong> e encontra o verdadeiro motivo por trás dos seus resultados. Ela <strong>detecta gargalos</strong> e aponta exatamente <strong>onde agir</strong>.',
                },
                {
                  titulo: 'Soluções Sugeridas por IA',
                  texto:
                    'Não é apenas análise — é direção. A Loomis <strong>sugere caminhos e melhorias</strong> com base em <strong>inteligência artificial</strong> treinada em múltiplos setores.',
                },
                {
                  titulo: 'Evolução Contínua',
                  texto:
                    'Cada interação torna o sistema mais inteligente. A plataforma <strong>aprende com os dados</strong> da sua empresa e adapta as <strong>recomendações ao seu contexto</strong>.',
                },
              ].map((dif, i) => (
                <motion.div
                  key={i}
                  className="bg-white/80 p-8 rounded-2xl border border-blue-300/40 
                             shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_45px_rgba(37,99,235,0.4)] 
                             hover:scale-[1.03] transition-all duration-500 text-center"
                  variants={fadeUp}
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 font-poppins">
                    {dif.titulo}
                  </h3>
                  <p
                    className="text-blue-900/80 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: dif.texto }}
                  />
                </motion.div>
              ))}
            </div>

            {/* CTA Visual leve */}
            <motion.div
              className="mt-16 text-center text-blue-900/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
              variants={fadeUp}
              transition={{ delay: 0.5 }}
            >
              <p>
                A Loomis não mostra apenas <strong>o que aconteceu</strong>,  
                ela te guia para entender <strong>por que aconteceu</strong> e <strong>o que fazer a seguir</strong>.
              </p>
              <p className="mt-4 font-semibold text-blue-800">
                <strong>IA, automação e clareza</strong> — tudo em um só fluxo contínuo de decisão inteligente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


      {/* ===================== PLANOS ===================== */}
      <motion.section
        id="planos"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-28 
                   bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 
                   relative overflow-hidden text-loomis-navy"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Fundo animado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/25 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-100/30 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <motion.h2
            className="text-6xl md:text-7xl font-extrabold tracking-tight font-poppins 
                       bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 bg-clip-text text-transparent 
                       drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center mb-12 flex items-center justify-center gap-3"
            variants={fadeUp}
          >
            Nossos Planos <span aria-hidden>💼</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-blue-900/90 max-w-3xl text-center mb-16 font-light leading-relaxed"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Cada plano foi pensado para gerar <strong className="font-semibold text-blue-900">impacto real</strong>:
            nossos dashboards analisam dados, identificam <strong className="text-blue-900">pontos de melhoria</strong> e utilizam
            <strong className="text-blue-900"> inteligência artificial</strong> para sugerir soluções personalizadas. Escolha o nível de
            automação ideal e eleve o poder da sua análise com a <strong className="font-semibold text-blue-900">Loomis Data Analysis</strong>.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
            {[
              {
                nome: "Essencial",
                desc: "Perfeito para empresas que estão começando sua jornada de automação e querem ter clareza total sobre seus dados operacionais.",
                beneficios: [
                  "Dashboard personalizado com indicadores estratégicos",
                  "Monitoramento de desempenho em tempo real via Google Sheets",
                  "Insights automáticos baseados em histórico e padrões",
                  "Camada inicial de IA para detecção de anomalias",
                ],
              },
              {
                nome: "Profissional",
                desc: "Voltado para negócios que buscam automações integradas a APIs e sensores, com IA aplicada a processos decisórios.",
                beneficios: [
                  "Dashboards interativos conectados a múltiplas fontes",
                  "Integração com sensores e automação via API",
                  "IA que identifica gargalos e sugere soluções otimizadas",
                  "Alertas personalizados via Telegram e relatórios automáticos",
                  "Ajustes contínuos e acompanhamento técnico do modelo de IA",
                ],
              },
              {
                nome: "Enterprise",
                desc: "Solução completa e exclusiva para quem precisa de monitoramento contínuo, relatórios sob demanda e otimização preditiva.",
                beneficios: [
                  "Dashboards ilimitados e visualizações dinâmicas",
                  "IA preditiva para antecipar falhas e oportunidades",
                  "Análises comparativas e recomendações automáticas",
                  "Monitoramento 24/7 e suporte premium dedicado",
                  "Consultoria para decisões orientadas por dados",
                ],
              },
            ].map((plano, i) => (
              <motion.div
                key={i}
                className="bg-white/70 backdrop-blur-xl border border-blue-300/40 
                           rounded-3xl p-10 text-blue-900 shadow-[0_10px_30px_rgba(37,99,235,0.25)] 
                           hover:shadow-[0_15px_45px_rgba(37,99,235,0.45)] hover:scale-[1.03] 
                           transition-all duration-500 flex flex-col justify-between h-full"
                variants={fadeUp}
                transition={{ delay: 0.15 * i }}
              >
                <div>
                  <h3 className="text-3xl font-extrabold font-poppins text-blue-800 mb-4 tracking-tight">
                    {plano.nome}
                  </h3>

                  <p className="text-blue-900/80 mb-6 leading-relaxed">{plano.desc}</p>

                  <ul className="text-left list-disc list-inside text-blue-900/80 text-sm space-y-2">
                    {plano.beneficios.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Espaço do botão reaproveitado para um call-to-action de valor */}
                <div className="mt-6 pt-6 border-t border-blue-200/30">
                  <p className="text-sm text-blue-800/90">
                    Quer ver um exemplo aplicado ao seu negócio? Desça até o <a href="#contato" className="underline font-semibold">contato</a> e fale com a gente. 
                    Oferecemos diagnóstico inicial e proposta personalizada.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===================== CONTATO ===================== */}
      <motion.section
        id="contato"
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-8 py-24 
                   bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 
                   relative overflow-hidden text-loomis-navy"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Fundo animado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-white/30 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-100/30 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.h2
            className="text-6xl md:text-7xl font-extrabold font-poppins bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent mb-8 drop-shadow-sm"
            variants={fadeUp}
          >
            Entre em Contato 📩
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-blue-900/90 max-w-3xl mb-10 font-light leading-relaxed"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Pronto para transformar seus dados em decisões inteligentes?  
            Fale com nossa equipe e descubra como a <strong className="font-semibold text-blue-900">Loomis Data Analysis</strong>
            pode automatizar processos, detectar gargalos e sugerir ações via IA.
          </motion.p>

          {/* Botões */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-6"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <a
              href="mailto:contato@loomisdata.com"
              className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:scale-105 
                         hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300"
            >
              Enviar E-mail
            </a>

            <a
              href="https://www.instagram.com/loomisdata"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-700 text-blue-800 rounded-lg font-semibold hover:bg-blue-700 
                         hover:text-white transition-all duration-300"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/company/loomisdata"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-700 text-blue-800 rounded-lg font-semibold hover:bg-blue-700 
                         hover:text-white transition-all duration-300"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* ===================== RODAPÉ FINAL ===================== */}
      <footer className="w-full bg-gradient-to-b from-blue-400 to-blue-500 text-white py-10 mt-0 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <img
            src={logo}
            alt="Logo Loomis"
            className="h-16 mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
          <p className="font-poppins text-lg font-semibold tracking-wide">
            Automatizamos o caminho entre dados e decisões.
          </p>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Loomis Data Analysis — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

