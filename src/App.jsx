import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 print:py-0 text-gray-800 font-sans">
      
      {/* Action bar for viewing/printing */}
      <div className="max-w-[21cm] mx-auto mb-4 text-right no-print">
          <button onClick={() => window.print()} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-colors inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
              Salvar em PDF
          </button>
      </div>

      {/* Resume A4 Container */}
      <div className="page-container w-full max-w-[21cm] h-[29.7cm] mx-auto bg-white shadow-2xl flex flex-col relative overflow-hidden text-[11px]">
          
          {/* Header */}
          <header className="pt-8 pb-5 px-10 relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
              
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight uppercase mb-1">John Wah de Sousa Tavares</h1>
              <h2 className="text-[11px] font-semibold text-orange-500 tracking-widest uppercase mb-4 leading-relaxed">
                  Automação Industrial • CCO • Redes Industriais • Telecomunicações • Tecnologia Operacional (OT)
              </h2>
              
              <div className="flex gap-6 text-[10px] text-gray-600 font-medium">
                  <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      +55 94 99225-8821
                  </div>
                  <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      jhunper20@gmail.com
                  </div>
                  <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      Brasil
                  </div>
              </div>
          </header>

          <div className="w-full h-px bg-gray-200 mx-10 max-w-[calc(100%-5rem)]"></div>

          {/* Main Content */}
          <div className="flex flex-1 px-10 py-5 gap-8">
              
              {/* Left Column (35%) */}
              <div className="w-[35%] flex flex-col gap-6">
                  
                  {/* Áreas de Atuação */}
                  <section>
                      <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                          Áreas de Atuação
                      </h3>
                      <ul className="space-y-1.5 text-[10.5px] text-gray-600 font-medium leading-snug">
                          <li>Automação Industrial</li>
                          <li>Centro de Controle Operacional (CCO)</li>
                          <li>Tecnologia Operacional (OT)</li>
                          <li>Automação de Mina e Usina</li>
                          <li>Operações de Mina</li>
                          <li>Mina Autônoma</li>
                          <li>Redes Industriais</li>
                          <li>Telecomunicações</li>
                          <li>Infraestrutura Tecnológica</li>
                      </ul>
                  </section>

                  {/* Competências Técnicas */}
                  <section>
                      <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                          Competências
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                          {["SAP", "Dispatch", "Redes Mesh Rajant", "CFTV Industrial", "Redes Industriais", "Redes TCP/IP", "Infraestrutura de Redes", "Telecom Industriais", "Monitoramento Operacional", "Tratamento de Falhas", "Suporte N1/N2", "Instalações Elétricas"].map(skill => (
                            <span key={skill} className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-wide border border-gray-200">{skill}</span>
                          ))}
                      </div>
                  </section>

                  {/* Formação */}
                  <section>
                      <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          Formação
                      </h3>
                      <div className="space-y-3">
                          <div>
                              <p className="text-[10.5px] font-bold text-gray-800">Análise e Desenvolvimento de Sistemas</p>
                              <p className="text-[9.5px] text-gray-500 mt-0.5">Ensino Superior Incompleto</p>
                          </div>
                          <div>
                              <p className="text-[10.5px] font-bold text-gray-800">Ensino Médio</p>
                              <p className="text-[9.5px] text-gray-500 mt-0.5">Completo</p>
                          </div>
                      </div>
                  </section>
                  
                  {/* Idiomas */}
                  <section>
                      <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          Idiomas
                      </h3>
                      <div className="space-y-1.5 text-[10.5px] text-gray-600">
                          <div className="flex justify-between items-center">
                              <span className="font-medium">Português</span>
                              <span className="text-[9px] text-gray-400 uppercase">Nativo</span>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="font-medium">Inglês</span>
                              <span className="text-[9px] text-gray-400 uppercase">Básico/Técnico</span>
                          </div>
                      </div>
                  </section>

              </div>

              {/* Right Column (65%) */}
              <div className="w-[65%] flex flex-col gap-6">
                  
                  {/* Resumo Profissional */}
                  <section>
                      <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-2">Resumo Profissional</h3>
                      <p className="text-[10.5px] text-gray-600 leading-snug text-justify">
                          Profissional dedicado à área de Automação Industrial e Tecnologia Operacional (OT), com experiência em monitoramento operacional e atuação em ambientes críticos de mineração. Especialista no suporte a Centros de Controle Operacional (CCO) para operações de mina e usina, garantindo a alta disponibilidade da infraestrutura tecnológica. Sólida vivência com redes industriais, telecomunicações industriais e diagnóstico de falhas, apoiando operações complexas, incluindo mina autônoma. Perfil analítico e proativo na manutenção e operação de tecnologias aplicadas à mineração, focado em segurança, eficiência e continuidade operacional.
                      </p>
                  </section>

                  {/* Experiência Profissional */}
                  <section>
                      <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">Experiência Profissional</h3>
                      
                      <div className="space-y-4 relative border-l border-gray-200 ml-2">
                          
                          {/* Experience 1 */}
                          <div className="relative pl-5">
                              <div className="absolute w-2.5 h-2.5 bg-white border-2 border-orange-500 rounded-full -left-[5.5px] top-1"></div>
                              <h4 className="text-[11px] font-bold text-gray-900">Técnico em Tecnologia Industrial</h4>
                              <p className="text-[9.5px] font-semibold text-orange-600 mb-1.5 mt-0.5 uppercase tracking-wide">Sonda Procwork Informática LTDA</p>
                              <ul className="text-[10px] text-gray-600 space-y-1.5 list-disc list-inside leading-snug text-justify ml-1">
                                  <li>Atuação no Centro de Controle Operacional (CCO), monitorando operações críticas de mina e usina.</li>
                                  <li>Suporte tecnológico avançado a operações de mina autônoma e frota autônoma.</li>
                                  <li>Gestão operacional de sistemas Dispatch e SAP nas rotinas diárias de planejamento e controle.</li>
                                  <li>Administração da infraestrutura de rede wireless industrial (Redes Mesh Rajant).</li>
                                  <li>Operação e suporte ao sistema de CFTV Industrial para a vigilância de processos da mina.</li>
                                  <li>Suporte de telecomunicações industriais, redes TCP/IP e infraestrutura OT.</li>
                                  <li>Diagnóstico, tratativas de falhas (N1/N2) e apoio direto às equipes de campo.</li>
                              </ul>
                          </div>

                          {/* Experience 2 */}
                          <div className="relative pl-5">
                              <div className="absolute w-2.5 h-2.5 bg-white border-2 border-gray-300 rounded-full -left-[5.5px] top-1"></div>
                              <h4 className="text-[11px] font-bold text-gray-900">Operações Industriais</h4>
                              <p className="text-[9.5px] font-semibold text-gray-500 mb-1 mt-0.5 uppercase tracking-wide">Plangecon Serviços Industriais LTDA</p>
                              <p className="text-[10px] text-gray-600 leading-snug">
                                  Atuação técnica em operações industriais. Execução de atividades críticas em equipe, trabalhos de carpintaria para o setor industrial e apoio logístico à infraestrutura e áreas operacionais.
                              </p>
                          </div>

                          {/* Experience 3 */}
                          <div className="relative pl-5">
                              <div className="absolute w-2.5 h-2.5 bg-white border-2 border-gray-300 rounded-full -left-[5.5px] top-1"></div>
                              <h4 className="text-[11px] font-bold text-gray-900">Oficial de Manutenção</h4>
                              <p className="text-[9.5px] font-semibold text-gray-500 mb-1 mt-0.5 uppercase tracking-wide">RBS Engenharia</p>
                              <p className="text-[10px] text-gray-600 leading-snug">
                                  Suporte operacional focado na manutenção predial e industrial. Operação segura de plataformas elevatórias (PTA) e acompanhamento de serviços de infraestrutura garantindo as conformidades.
                              </p>
                          </div>

                          {/* Experience 4 */}
                          <div className="relative pl-5">
                              <div className="absolute w-2.5 h-2.5 bg-white border-2 border-gray-300 rounded-full -left-[5.5px] top-1"></div>
                              <h4 className="text-[11px] font-bold text-gray-900">Auxiliar Administrativo</h4>
                              <p className="text-[9.5px] font-semibold text-gray-500 mb-1 mt-0.5 uppercase tracking-wide">ATA Amazonas Terra Ambiental</p>
                              <p className="text-[10px] text-gray-600 leading-snug">
                                  Suporte em rotinas de controle de pessoal, gerenciamento de folhas de ponto e rotinas organizacionais do setor administrativo.
                              </p>
                          </div>

                      </div>
                  </section>

              </div>
          </div>
          
      </div>
    </div>
  );
}
