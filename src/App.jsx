import { useState, useEffect } from 'react'
import { 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Laptop, 
  Code, 
  Cpu, 
  Award, 
  MessageSquare, 
  Send, 
  Volume2, 
  VolumeX, 
  Terminal,
  ExternalLink,
  ChevronRight,
  Zap,
  BookOpen,
  Calendar,
  Briefcase,
  Globe
} from 'lucide-react'

// Web Audio API Synthesizer for premium sound feedback (No static files needed!)
const cvAudio = {
  ctx: null,
  isMuted: false,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  playClick() {
    if (this.isMuted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1600, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  },

  playSuccess() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    
    // Low tone
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    gain1.gain.setValueAtTime(0.06, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start();
    osc1.stop(now + 0.12);

    // High tone
    setTimeout(() => {
      if (this.isMuted) return;
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
      gain2.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start();
      osc2.stop(this.ctx.currentTime + 0.2);
    }, 60);
  }
};

export default function CurriculoJohnTavares() {
  const resumePdf = '/John_Tavares_Curriculo.pdf';
  const [isMuted, setIsMuted] = useState(true); // muted by default for accessibility
  
  // Multi-Language state reading googtrans cookie
  const getInitialLanguage = () => {
    try {
      const match = document.cookie.match(/googtrans=\/pt\/([a-z]{2})/);
      return match ? match[1] : 'pt';
    } catch (e) {
      return 'pt';
    }
  };
  const [currentLang, setCurrentLang] = useState(getInitialLanguage());
  
  // Interactive Guestbook State
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', text: '' });
  const [selectedEmoji, setSelectedEmoji] = useState('🚀');

  // Terminal Console Overlay Easter Egg
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'SISTEMA JOHN TAVARES V1.0.0', type: 'system' },
    { text: 'Digite "help" para obter comandos.', type: 'info' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  const skills = [
    { name: 'FlutterFlow', desc: 'Criação ágil de apps e MVPs', level: 95 },
    { name: 'TI', desc: 'Suporte de infraestrutura e redes', level: 90 },
    { name: 'Automação Industrial', desc: 'Sistemas e processos de mineração', level: 85 },
    { name: 'Criação de Apps', desc: 'Arquitetura e integrações', level: 90 },
    { name: 'MVPs', desc: 'Validação de ideias de negócio', level: 95 },
    { name: 'Vendas', desc: 'Comunicação e negociação assertiva', level: 80 },
    { name: 'Atendimento', desc: 'Suporte focado em satisfação', level: 85 },
    { name: 'Design', desc: 'Interfaces modernas e protótipos', level: 75 },
    { name: 'Suporte Técnico', desc: 'Diagnóstico e resolução de problemas', level: 90 },
  ];

  const courses = [
    { title: 'Informática Básica', category: 'TI' },
    { title: 'Informática Avançada', category: 'TI' },
    { title: 'Manutenção de Micros e Redes', category: 'TI & Suporte' },
    { title: 'Atendimento ao Cliente e Vendas', category: 'Comercial' },
    { title: 'Técnico em Automação Industrial', category: 'Engenharia & Automação' },
    { title: 'Análise e Desenvolvimento de Sistemas', category: 'Tecnologia' },
  ];

  useEffect(() => {
    cvAudio.isMuted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const saved = localStorage.getItem('john_comments');
    if (saved) {
      setComments(JSON.parse(saved));
    } else {
      const seed = [
        { id: 1, name: 'Lucas Vasconcelos', text: 'John desenvolveu nosso MVP em FlutterFlow em tempo recorde. Muito atencioso no suporte!', emoji: '🚀', date: 'Há 3 dias' },
        { id: 2, name: 'Mariana Souza (Tech Lead)', text: 'O suporte técnico do John na automação industrial é excelente, proativo e com ótimo trabalho em equipe.', emoji: '✨', date: 'Há 1 semana' }
      ];
      localStorage.setItem('john_comments', JSON.stringify(seed));
      setComments(seed);
    }
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.text.trim()) return;

    cvAudio.playSuccess();
    const brandNew = {
      id: Date.now(),
      name: newComment.name.trim(),
      text: newComment.text.trim(),
      emoji: selectedEmoji,
      date: 'Agora mesmo'
    };

    const updated = [brandNew, ...comments];
    setComments(updated);
    localStorage.setItem('john_comments', JSON.stringify(updated));
    setNewComment({ name: '', text: '' });
    setSelectedEmoji('🚀');
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    cvAudio.playClick();
    const history = [...terminalHistory, { text: `> ${terminalInput}`, type: 'input' }];

    switch(cmd) {
      case 'help':
        history.push({ 
          text: 'Comandos:\n  about    - Resumo Profissional\n  skills   - Habilidades Principais\n  contact  - Informações de Contato\n  clear    - Limpar histórico\n  exit     - Fechar Console', 
          type: 'info' 
        });
        break;
      case 'about':
        history.push({ text: 'Profissional versátil com ampla experiência em suporte de tecnologia industrial, mineração, e especializado na criação rápida de aplicativos móveis e MVPs em FlutterFlow.', type: 'info' });
        break;
      case 'skills':
        history.push({ text: 'FlutterFlow [95%] | Suporte de TI [90%] | Automação [85%] | MVPs [95%]', type: 'info' });
        break;
      case 'contact':
        history.push({ text: 'E-mail: jhunper20@gmail.com | WhatsApp: +55 94 99225-8821', type: 'info' });
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'exit':
        setShowTerminal(false);
        return;
      default:
        history.push({ text: `Comando desconhecido: "${cmd}". Digite "help" para ver os comandos.`, type: 'error' });
    }

    setTerminalHistory(history);
    setTerminalInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-orange-50/60 p-4 md:p-8 flex flex-col justify-between relative font-sans text-zinc-800">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Audio Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        <button 
          onClick={() => {
            setIsMuted(!isMuted);
            if (isMuted) setTimeout(() => cvAudio.playSuccess(), 50);
          }}
          className="bg-zinc-900/90 backdrop-blur-md text-white border border-zinc-700/50 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
          title={isMuted ? "Ativar Áudio Premium" : "Mutar Áudio"}
        >
          {isMuted ? <VolumeX size={20} className="text-zinc-400" /> : <Volume2 size={20} className="text-orange-400 animate-pulse" />}
        </button>

        <button 
          onClick={() => {
            setShowTerminal(!showTerminal);
            cvAudio.playClick();
          }}
          className="bg-zinc-900/90 backdrop-blur-md text-white border border-zinc-700/50 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
          title="Terminal do Desenvolvedor"
        >
          <Terminal size={20} className={showTerminal ? "text-orange-400 animate-pulse" : "text-zinc-400"} />
        </button>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-zinc-200/50 mx-auto my-auto transition-all">
        
        {/* HERO BANNER */}
        <div className="bg-zinc-900 text-white p-8 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-zinc-700/20 rounded-full blur-3xl pointer-events-none" />

          {/* Premium Custom Language Selector */}
          <div className="absolute top-6 right-6 z-20">
            <div className="relative inline-block text-left">
              <select 
                onChange={(e) => {
                  const lang = e.target.value;
                  cvAudio.playClick();
                  setCurrentLang(lang);
                  
                  // Set Google Translate cookies for instant translation on reload!
                  document.cookie = `googtrans=/pt/${lang}; path=/;`;
                  document.cookie = `googtrans=/pt/${lang}; path=/; domain=${window.location.hostname};`;
                  
                  // Trigger browser reload to let the Google Translate engine compile the translation instantly
                  window.location.reload();
                }}
                className="bg-zinc-950/85 backdrop-blur-md text-zinc-300 border border-zinc-800 text-xs md:text-sm font-semibold rounded-2xl px-4 py-2.5 outline-none hover:border-orange-500/60 focus:border-orange-500 hover:text-white transition-all cursor-pointer appearance-none pr-8 relative"
                value={currentLang}
              >
                <option value="pt">🇧🇷 Português</option>
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="it">🇮🇹 Italiano</option>
              </select>
              {/* Dropdown Chevron indicator */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-400">
                <ChevronRight size={14} className="rotate-90" />
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-4xl">
            {/* Pulsing Status badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping-slow" />
              Profissional de Tecnologia Remoto • Disponível para Contratos
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Olá, eu sou o <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">John Tavares</span>.
            </h1>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              Profissional com vasta experiência em tecnologia, automação industrial, 
              suporte ao cliente, vendas e desenvolvimento ágil de aplicativos e MVPs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={resumePdf}
                download="John_Tavares_Curriculo.pdf"
                onClick={() => cvAudio.playSuccess()}
                className="bg-orange-500 hover:bg-orange-600 transition-all px-6 py-3 rounded-2xl font-bold text-white shadow-lg shadow-orange-500/20 flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <FileText size={18} />
                <span>Baixar Currículo PDF</span>
              </a>

              <a
                href="mailto:jhunper20@gmail.com"
                onClick={() => cvAudio.playClick()}
                className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-100 transition-all px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 active:scale-95"
              >
                <Mail size={18} />
                <span>jhunper20@gmail.com</span>
              </a>

              <a
                href="https://wa.me/5594992258821?text=Olá%20John,%20vi%20seu%20currículo%20online%20e%20gostaria%20de%20conversar!"
                target="_blank"
                rel="noreferrer"
                onClick={() => cvAudio.playClick()}
                className="bg-green-600 hover:bg-green-700 text-white transition-all px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 active:scale-95"
              >
                <Phone size={18} />
                <span>(94) 99225-8821</span>
              </a>
            </div>
          </div>
        </div>

        {/* TWO-COLUMN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* SIDEBAR */}
          <div className="bg-zinc-950 text-white p-8 lg:p-10 border-r border-zinc-800 flex flex-col justify-between">
            <div>
              {/* Avatar circle */}
              <div className="mb-10 flex flex-col items-center lg:items-start">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-orange-400 to-orange-600 flex items-center justify-center text-4xl font-extrabold mb-4 shadow-xl shadow-orange-500/20 text-white relative">
                  <span>J</span>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800">
                    <Zap size={12} className="text-orange-400" />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold leading-tight text-white text-center lg:text-left">
                  John Wah de Sousa Tavares
                </h2>

                <p className="text-orange-400 mt-2 text-sm font-semibold text-center lg:text-left tracking-wide uppercase">
                  Tecnologia • Automação • Apps
                </p>
              </div>

              {/* Contato list */}
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-wider text-zinc-400 uppercase mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-orange-400" />
                  <span>Contato</span>
                </h3>

                <div className="space-y-3.5 text-sm text-zinc-300">
                  <a href="tel:+5594992258821" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                    <Phone size={14} className="text-zinc-500" />
                    <span>+55 94 99225-8821</span>
                  </a>
                  <a href="mailto:jhunper20@gmail.com" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                    <Mail size={14} className="text-zinc-500" />
                    <span className="break-all">jhunper20@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-zinc-500" />
                    <span>Brasil (São Paulo / Pará)</span>
                  </div>
                </div>
              </div>

              {/* Skills list */}
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-wider text-zinc-400 uppercase mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <Cpu size={14} className="text-orange-400" />
                  <span>Habilidades</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={skill.desc}
                      className="bg-zinc-900 border border-zinc-800/80 text-orange-300 px-3 py-1.5 rounded-xl text-xs hover:border-orange-500/40 hover:text-orange-200 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Idiomas */}
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-wider text-zinc-400 uppercase mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <Globe size={14} className="text-orange-400" />
                  <span>Idiomas</span>
                </h3>

                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex justify-between items-center">
                    <span>Português</span>
                    <span className="text-orange-400 font-semibold text-xs bg-orange-500/10 px-2 py-0.5 rounded-full">Nativo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Inglês</span>
                    <span className="text-zinc-400 font-semibold text-xs bg-zinc-800 px-2 py-0.5 rounded-full">Intermediário</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick deployment badge */}
            <div className="pt-6 border-t border-zinc-800/60 hidden lg:block">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">Deploy Status</span>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Vercel Live
                </span>
                <span className="text-[10px] text-zinc-600 font-mono">React + FF</span>
              </div>
            </div>
          </div>

          {/* MAIN WORK EXPERIENCE */}
          <div className="lg:col-span-2 p-6 md:p-10 bg-white">
            
            {/* Resumo Profissional */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
                Resumo Profissional
              </h2>

              <p className="text-zinc-600 leading-relaxed text-sm md:text-base bg-zinc-50 border border-zinc-200/30 p-5 rounded-2xl">
                Profissional versátil com experiência sólida em suporte de tecnologia da informação e automação industrial voltada para processos de larga escala. Possuo forte afinidade com desenvolvimento ágil de aplicativos e criação rápida de MVPs funcionais utilizando a ferramenta de low-code <strong>FlutterFlow</strong>. Habilidade em diagnosticar problemas técnicos complexos e apoiar equipes operacionais com foco na produtividade e inovação tecnológica.
              </p>
            </section>

            {/* Experiência Profissional */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
                Experiência Profissional
              </h2>

              <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-100">
                
                {/* Job 1 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-[10px] top-[6px] w-3 h-3 rounded-full bg-orange-500 border-2 border-white ring-4 ring-orange-500/20 group-hover:scale-125 transition-transform" />
                  
                  <div className="hover:bg-zinc-50/50 p-4 rounded-2xl border border-transparent hover:border-zinc-200/50 transition-all">
                    <span className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider">Atual</span>
                    <h3 className="font-bold text-lg text-zinc-900 mt-2">
                      SONDA PROCWORK INFORMÁTICA LTDA
                    </h3>
                    <p className="text-zinc-600 font-medium text-sm">
                      Técnico em Tecnologia Industrial
                    </p>
                    <p className="text-zinc-500 mt-2 text-xs md:text-sm leading-relaxed">
                      Suporte especializado em automação industrial e mineração. Atuação direta no monitoramento de sistemas operacionais críticos, diagnóstico e apoio técnico de infraestrutura operacional de alta disponibilidade.
                    </p>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-[10px] top-[6px] w-3 h-3 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-orange-500 transition-colors" />
                  
                  <div className="hover:bg-zinc-50/50 p-4 rounded-2xl border border-transparent hover:border-zinc-200/50 transition-all">
                    <h3 className="font-bold text-lg text-zinc-900">
                      PLANGECON SERVIÇOS INDUSTRIAIS LTDA
                    </h3>
                    <p className="text-zinc-600 font-medium text-sm">
                      Operações Industriais
                    </p>
                    <p className="text-zinc-500 mt-2 text-xs md:text-sm leading-relaxed">
                      Atuação focada no suporte operacional em ambientes industriais, carpintaria técnica e execução coordenada de atividades operacionais críticas em equipe.
                    </p>
                  </div>
                </div>

                {/* Job 3 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-[10px] top-[6px] w-3 h-3 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-orange-500 transition-colors" />
                  
                  <div className="hover:bg-zinc-50/50 p-4 rounded-2xl border border-transparent hover:border-zinc-200/50 transition-all">
                    <h3 className="font-bold text-lg text-zinc-900">
                      RBS Engenharia
                    </h3>
                    <p className="text-zinc-600 font-medium text-sm">
                      Oficial de Manutenção
                    </p>
                    <p className="text-zinc-500 mt-2 text-xs md:text-sm leading-relaxed">
                      Operação qualificada de plataformas elevatórias industriais, suporte de manutenção preventiva e atividades de apoio operacional estrutural.
                    </p>
                  </div>
                </div>

                {/* Job 4 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-[10px] top-[6px] w-3 h-3 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-orange-500 transition-colors" />
                  
                  <div className="hover:bg-zinc-50/50 p-4 rounded-2xl border border-transparent hover:border-zinc-200/50 transition-all">
                    <h3 className="font-bold text-lg text-zinc-900">
                      ATA Amazonas Terra Ambiental
                    </h3>
                    <p className="text-zinc-600 font-medium text-sm">
                      Auxiliar Administrativo
                    </p>
                    <p className="text-zinc-500 mt-2 text-xs md:text-sm leading-relaxed">
                      Controle administrativo de folha de ponto de funcionários, suporte na organização logística e processamento interno de planilhas.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Formação Acadêmica */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
                Formação Acadêmica
              </h2>

              <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200/50 flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-orange-500/10 text-orange-600 rounded-xl">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-800 text-sm md:text-base">
                      Ensino Superior Incompleto — Análise e Desenvolvimento de Sistemas
                    </p>
                    <p className="text-zinc-500 text-xs md:text-sm">
                      Estudos em engenharia de software, modelagem de dados e arquitetura de sistemas.
                    </p>
                  </div>
                </div>
                <div className="border-t border-zinc-200/50 my-1" />
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-zinc-200 text-zinc-600 rounded-xl">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-700 text-sm md:text-base">
                      Ensino Médio Completo
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cursos & Qualificações */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
                Cursos & Qualificações
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <div
                    key={course.title}
                    className="bg-orange-50/40 hover:bg-orange-50 border border-orange-100 hover:border-orange-200 rounded-2xl p-4 transition-all hover:scale-[1.02] flex flex-col justify-between"
                  >
                    <p className="font-semibold text-zinc-800 text-sm">
                      {course.title}
                    </p>
                    <span className="text-[10px] font-bold text-orange-600 mt-2 bg-orange-500/10 px-2 py-0.5 rounded-full w-max">
                      {course.category}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Mural de Depoimentos / Guestbook */}
            <section className="border-t border-zinc-150 pt-8 mt-10">
              <h2 className="text-2xl font-extrabold text-zinc-900 mb-2 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
                Recomendações & Feedbacks
              </h2>
              <p className="text-xs text-zinc-400 mb-6">Deixe uma mensagem rápida ou depoimento sobre o meu perfil profissional!</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                
                {/* Form */}
                <form onSubmit={handleCommentSubmit} className="bg-zinc-50 border border-zinc-200/50 p-5 rounded-2xl space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-zinc-500 uppercase block" htmlFor="comment-name">Seu Nome</label>
                    <input 
                      type="text" 
                      id="comment-name" 
                      className="w-full bg-white border border-zinc-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 text-zinc-800"
                      placeholder="Ex: Recrutador / Cliente"
                      value={newComment.name}
                      onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-zinc-500 uppercase block" htmlFor="comment-text">Mensagem</label>
                    <textarea 
                      id="comment-text" 
                      rows="3"
                      className="w-full bg-white border border-zinc-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 text-zinc-800"
                      placeholder="Deixe seu feedback..."
                      value={newComment.text}
                      onChange={(e) => setNewComment(prev => ({ ...prev, text: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-zinc-500 uppercase block">Emoji Selo</span>
                    <div className="flex gap-2">
                      {['🚀', '✨', '🔥', '👍', '💻'].map(emoji => (
                        <button
                          key={emoji}
                          type="button"
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm border hover:scale-110 active:scale-95 transition-all ${selectedEmoji === emoji ? 'bg-orange-500/10 border-orange-500 text-orange-500' : 'bg-white border-zinc-200 text-zinc-700'}`}
                          onClick={() => { setSelectedEmoji(emoji); cvAudio.playClick(); }}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]">
                    <Send size={14} />
                    <span>Assinar Mural</span>
                  </button>
                </form>

                {/* Feed */}
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {comments.map(c => (
                    <div key={c.id} className="bg-orange-50/20 border border-zinc-200/50 p-4 rounded-2xl flex gap-3 text-xs">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-base flex-shrink-0">
                        {c.emoji}
                      </div>
                      <div className="flex-grow space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-zinc-800">{c.name}</span>
                          <span className="text-[10px] text-zinc-400">{c.date}</span>
                        </div>
                        <p className="text-zinc-600 leading-relaxed">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          </div>
        </div>

      </div>

      {/* EASTER EGG RETRO TERMINAL (MODAL SCREEN) */}
      {showTerminal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
            <div className="bg-zinc-900 px-4 py-3 flex justify-between items-center border-b border-zinc-800">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-zinc-500">terminal@john-tavares: ~</span>
              <button 
                onClick={() => { setShowTerminal(false); cvAudio.playClick(); }}
                className="text-xs font-bold text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-zinc-800"
              >
                Fechar
              </button>
            </div>
            
            <div className="flex-grow p-4 overflow-y-auto font-mono text-xs text-orange-400 space-y-2 select-text">
              {terminalHistory.map((h, i) => (
                <div key={i} className={h.type === 'error' ? 'text-red-400' : h.type === 'success' ? 'text-green-400' : 'text-zinc-300'}>
                  {h.text}
                </div>
              ))}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 mt-2">
                <span className="text-orange-500 font-bold">$</span>
                <input 
                  type="text" 
                  className="bg-transparent border-none outline-none flex-grow text-zinc-200 caret-orange-500 font-mono" 
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Digite um comando... (help, about, skills, contact)"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <footer className="w-full text-center py-6 mt-8 border-t border-zinc-200/20 text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} John Wah de Sousa Tavares. Currículo Online desenvolvido em React, Tailwind CSS v4 e Vercel.</p>
        <p className="text-[10px] text-zinc-500 mt-1">Dica: Adicione seu arquivo PDF do currículo na pasta <code className="bg-zinc-800 text-zinc-300 px-1 rounded">public/John_Tavares_Curriculo.pdf</code> para ativar o download real.</p>
      </footer>
    </div>
  )
}
