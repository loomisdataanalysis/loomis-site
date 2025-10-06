import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/Loomis_Logo.png";

export default function Sobre() {
  return (
    <main className="scroll-smooth font-grotesk text-loomis-navy">
      <Navbar />

      {/* SEÇÃO SOBRE */}
      <section
        id="sobre"
        className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 px-8 md:px-24"
      >
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Sobre a Loomis Data Analysis 🌍
        </h1>

        {/* História */}
        <p className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16">
          A <span className="font-semibold">Loomis Data Analysis</span> nasceu da união entre tecnologia e visão de negócios.
          Criada por <strong>Caio Leandro</strong> durante sua experiência na Bosch Sensortec, a Loomis começou com o
          propósito de transformar dados brutos em inteligência visual para academias, clínicas e pequenas empresas.
          O projeto cresceu com a chegada de <strong>Lívia Meireles</strong>, responsável por toda a estratégia e plano
          de negócios, e <strong>Gabriel Gambine</strong>, que trouxe sua experiência em captação de clientes,
          design de portfólios e apoio técnico.  
          Hoje, a Loomis se posiciona como uma empresa focada em automação de dados e criação de dashboards intuitivos,
          entregando resultados claros e mensuráveis para cada cliente.
        </p>

        {/* Cards de Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white/80 shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-loomis-navy">Inovação</h2>
            <p className="text-gray-700">
              Buscamos soluções que unem tecnologia e criatividade para simplificar processos e gerar valor real.
            </p>
          </div>

          <div className="bg-white/80 shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-loomis-navy">Precisão</h2>
            <p className="text-gray-700">
              Cada dashboard, métrica e análise é construída com rigor técnico e atenção aos detalhes.
            </p>
          </div>

          <div className="bg-white/80 shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-loomis-navy">Impacto</h2>
            <p className="text-gray-700">
              Nosso foco está em gerar impacto direto no crescimento e nas decisões estratégicas dos nossos clientes.
            </p>
          </div>
        </div>

        {/* Equipe */}
        <h2 className="text-3xl font-bold text-center mb-12">Nosso Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {/* CAIO */}
          <div className="bg-white/90 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition w-72">
            <img
              src={logo}
              alt="Caio Leandro"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-300"
            />
            <h3 className="text-xl font-semibold text-loomis-navy">Caio Leandro de Moraes</h3>
            <p className="text-gray-700">CEO & Fundador</p>
            <p className="text-gray-600 mt-3 text-sm">
              Engenheiro e criador da Loomis, lidera o desenvolvimento técnico e estratégico da empresa.
            </p>
          </div>

          {/* LÍVIA */}
          <div className="bg-white/90 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition w-72">
            <img
              src={logo}
              alt="Lívia Meireles"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-300"
            />
            <h3 className="text-xl font-semibold text-loomis-navy">Lívia Meireles</h3>
            <p className="text-gray-700">COO & Estratégia</p>
            <p className="text-gray-600 mt-3 text-sm">
              Responsável pelo plano de negócios e estruturação da Loomis, conectando estratégia e execução.
            </p>
          </div>

          {/* GABRIEL */}
          <div className="bg-white/90 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition w-72">
            <img
              src={logo}
              alt="Gabriel Gambine"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-300"
            />
            <h3 className="text-xl font-semibold text-loomis-navy">Gabriel Gambine</h3>
            <p className="text-gray-700">CMO & Desenvolvimento</p>
            <p className="text-gray-600 mt-3 text-sm">
              Atua na captação de clientes, criação de portfólios e suporte técnico no desenvolvimento dos produtos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
