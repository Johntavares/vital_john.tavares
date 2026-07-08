import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 print:py-0 text-gray-800 font-sans">
      
      {/* Action bar for viewing/printing */}
      <div className="max-w-[21cm] mx-auto mb-4 text-right no-print">
          <button onClick={() => window.print()} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-colors flex items-center inline-flex gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
              Salvar em PDF
          </button>
      </div>

      {/* Resume A4 Container */}
      <div className="page-container max-w-[21cm] min-h-[29.7cm] mx-auto bg-white shadow-2xl flex flex-col relative overflow-hidden">
          
          {/* Header */}
          <header className="pt-12 pb-8 px-12 relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
              
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight uppercase mb-2">John Wah de Sousa Tavares</h1>
              <h2 className="text-sm font-semibold text-orange-500 tracking-widest uppercase mb-6 leading-relaxed">
                  Automação Industrial • CCO • Redes Industriais • Telecomunicações • Tecnologia Operacional (OT)
              </h2>
              
              <div className="flex gap-6 text-xs text-gray-600 font-medium">
                  <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      +55 94 99225-8821
                  </div>
                  <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      jhunper20@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      Brasil
                  </div>
              </div>
          </header>

          <div className="w-full h-px bg-gray-200 mx-12 max-w-[calc(100%-6rem)]"></div>

          {/* Main Content */}
          <div className="flex flex-1 px-12 py-8 gap-10">
              
              {/* Left Column (35%) */}
              <div className="w-[35%] flex flex-col gap-8">
                  
                  {/* Áreas de Atuação */}
                  <section>
                      <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          Áreas de Atuação
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-600 font-medium leading-relaxed">
                          <li>Automação Industrial</li>
                          <li>Centro de Controle Operacional (CCO)</li>
                          <li>Tecnologia Operacional (OT)</li>
                          <li>Automação de Mina e Usina</li>
                          <li>Operações de Mina</li>
                          <li>Mina Autônoma</li>
                          <li>Redes Industriais</li>
                          <li>Telecomunicações</li>
                          <li>Infraestrutura Tecnológica Industrial</li>
                      </ul>
                  </section>

                  {/* Competências Técnicas */}
                  <section>
                      <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                          Competências
                      </h3>
                      <div className="flex flex-wrap gap-2">
                          {["SAP", "Dispatch", "Redes Mesh Rajant", "CFTV Industrial", "Redes Industriais", "Redes TCP/IP", "Infraestrutura de Redes", "Telecom Industriais", "Monitoramento Operacional", "Tratamento de Falhas", "Suporte N1/N2", "Instalações Elétricas"].map(skill => (
                            <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-[10px] font-semibold tracking-wide border border-gray-200">{skill}</span>
                          ))}
                      </div>
                  </section>

                  {/* Formação */}
                  <section>
                      <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          Formação
                      </h3>
                      <div className="space-y-4">
                          <div>
                              <p className="text-xs font-bold text-gray-800">Análise e Desenvolvimento de Sistemas</p>
                              <p className="text-[11px] text-gray-500 mt-0.5">Ensino Superior Incompleto</p>
                          </div>
                          <div>
                              <p className="text-xs font-bold text-gray-800">Ensino Médio</p>
                              <p className="text-[11px] text-gray-500 mt-0.5">Completo</p>
                          </div>
                      </div>
                  </section>
                  
                  {/* Idiomas */}
                  <section>
                      <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          Idiomas
                      </h3>
                      <div className="space-y-2 text-xs text-gray-600">
                          <div className="flex justify-between items-center">
                              <span className="font-medium">Português</span>
                              <span className="text-[10px] text-gray-400 uppercase">Nativo</span>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="font-medium">Inglês</span>
                              <span className="text-[10px] text-gray-400 uppercase">Básico/Técnico</span>
                          </div>
                      </div>
                  </section>

              </div>

              {/* Right Column (65%) */}
              <div className="w-[65%] flex flex-col gap-8">
                  
                  {/* Resumo Profissional */}
                  <section>
                      <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-3">Resumo Profissional</h3>
                      <p className="text-xs text-gray-600 leading-loose text-justify">
                          Profissional dedicado à área de Automação Industrial e Tecnologia Operacional (OT), com experiência em monitoramento operacional e atuação em ambientes críticos de mineração. Especialista no suporte a Centros de Controle Operacional (CCO) para operações de mina e usina, garantindo a alta disponibilidade da infraestrutura tecnológica. Sólida vivência com redes industriais, telecomunicações industriais e diagnóstico de falhas, apoiando operações complexas, incluindo mina autônoma. Perfil analítico e proativo na manutenção e operação de tecnologias aplicadas à mineração, focado em segurança, eficiência e continuidade operacional.
                      </p>
                  </section>

                  {/* Experiência Profissional */}
                  <section>
                      <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-6">Experiência Profissional</h3>
                      
                      <div className="space-y-6 relative border-l border-gray-200 ml-2">
                          
                          {/* Experience 1 */}
                          <div className="relative pl-6">
                              <div className="absolute w-3 h-3 bg-white border-2 border-orange-500 rounded-full -left-[6.5px] top-1"></div>
                              <h4 className="text-sm font-bold text-gray-900">Técnico em Tecnologia Industrial</h4>
                              <p className="text-xs font-semibold text-orange-600 mb-2 mt-0.5 uppercase tracking-wide">Sonda Procwork Informática LTDA</p>
                              <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside leading-relaxed text-justify">
                                  <li>Atuação direta no Centro de Controle Operacional (CCO), realizando o monitoramento contínuo das operações críticas de mina e usina.</li>
                                  <li>Suporte tecnológico avançado a operações de mina autônoma e frota autônoma, atuando em ambiente de alta disponibilidade.</li>
                                  <li>Monitoramento e gestão operacional de sistemas Dispatch, utilizando o sistema SAP nas rotinas diárias de planejamento e controle.</li>
                                  <li>Administração e monitoramento da infraestrutura de rede wireless industrial (Redes Mesh Rajant) garantindo cobertura em campo.</li>
                                  <li>Operação e suporte ao sistema de CFTV Industrial para a vigilância e controle de processos da mina.</li>
                                  <li>Suporte e manutenção de telecomunicações industriais, redes TCP/IP e toda a infraestrutura OT (Tecnologia Operacional).</li>
                                  <li>Realização de diagnóstico, tratativas de falhas (N1/N2) e apoio direto às equipes de campo para estabilização de serviços.</li>
                              </ul>
                          </div>

                          {/* Experience 2 */}
                          <div className="relative pl-6">
                              <div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1"></div>
                              <h4 className="text-sm font-bold text-gray-900">Operações Industriais</h4>
                              <p className="text-xs font-semibold text-gray-500 mb-2 mt-0.5 uppercase tracking-wide">Plangecon Serviços Industriais LTDA</p>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                  Atuação técnica em operações industriais diversas. Execução de atividades críticas em equipe, trabalhos de carpintaria voltada para o setor industrial e apoio logístico à infraestrutura do canteiro de obras e áreas operacionais.
                              </p>
                          </div>

                          {/* Experience 3 */}
                          <div className="relative pl-6">
                              <div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1"></div>
                              <h4 className="text-sm font-bold text-gray-900">Oficial de Manutenção</h4>
                              <p className="text-xs font-semibold text-gray-500 mb-2 mt-0.5 uppercase tracking-wide">RBS Engenharia</p>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                  Suporte operacional focado na manutenção predial e industrial. Responsável pela operação segura de plataformas elevatórias (PTA) e pelo acompanhamento de serviços de infraestrutura e instalações, garantindo as conformidades de segurança.
                              </p>
                          </div>

                          {/* Experience 4 */}
                          <div className="relative pl-6">
                              <div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1"></div>
                              <h4 className="text-sm font-bold text-gray-900">Auxiliar Administrativo</h4>
                              <p className="text-xs font-semibold text-gray-500 mb-2 mt-0.5 uppercase tracking-wide">ATA Amazonas Terra Ambiental</p>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                  Suporte administrativo em rotinas de controle de pessoal. Responsável pelo gerenciamento e controle de folhas de ponto, rotinas organizacionais do setor administrativo e apoio aos processos internos.
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
