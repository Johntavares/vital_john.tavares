const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

const outputPath = path.join(publicDir, 'John_Tavares_Curriculo.pdf');
console.log('Generating beautiful PDF resume at:', outputPath);

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 40, right: 40 }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Branding colors
const colorPrimary = '#18181b'; // zinc-900
const colorAccent = '#dd6b20';  // orange-600 (vibrant accent)
const colorText = '#27272a';    // zinc-800 (slightly darker for better print readability)
const colorTextLight = '#52525b'; // zinc-600
const colorBorder = '#e4e4e7';  // zinc-200

// 1. HEADER SECTION
doc.font('Helvetica-Bold')
   .fontSize(24)
   .fillColor(colorPrimary)
   .text('JOHN WAH DE SOUSA TAVARES', 40, 45);

doc.font('Helvetica-Bold')
   .fontSize(11)
   .fillColor(colorAccent)
   .text('TECNOLOGIA  •  AUTOMAÇÃO INDUSTRIAL  •  DESENVOLVIMENTO DE APPS', 40, 72);

doc.font('Helvetica')
   .fontSize(9)
   .fillColor(colorTextLight)
   .text('Telefone: +55 (94) 99225-8821   |   E-mail: jhunper20@gmail.com   |   Localização: Pará, Brasil', 40, 90);

// Thin divider line
doc.strokeColor(colorBorder)
   .lineWidth(1)
   .moveTo(40, 110)
   .lineTo(555, 110)
   .stroke();

// 2. TWO-COLUMN LAYOUT CONTEXT
const col1X = 40;
const col1Width = 145;
const col2X = 205;
const col2Width = 350;

let y = 130;

// LEFT COLUMN: HABILIDADES, IDIOMAS
let leftY = y;

// HABILIDADES Header
doc.font('Helvetica-Bold')
   .fontSize(12)
   .fillColor(colorPrimary)
   .text('HABILIDADES', col1X, leftY);

leftY += 18;

const skills = [
  'FlutterFlow (Expert)',
  'Criação de Apps & MVPs',
  'Suporte de TI & Redes',
  'Automação Industrial',
  'Instalações Elétricas',
  'Atendimento & Vendas',
  'UX/UI Design',
  'Suporte Técnico N1/N2'
];

skills.forEach(skill => {
  // Draw bullet square
  doc.rect(col1X, leftY + 3, 4, 4)
     .fill(colorAccent);
     
  doc.font('Helvetica')
     .fontSize(9.5)
     .fillColor(colorText)
     .text(skill, col1X + 10, leftY, { width: col1Width - 10 });
     
  leftY += 18;
});

leftY += 15;

// IDIOMAS Header
doc.font('Helvetica-Bold')
   .fontSize(12)
   .fillColor(colorPrimary)
   .text('IDIOMAS', col1X, leftY);

leftY += 18;

doc.font('Helvetica-Bold')
   .fontSize(9.5)
   .fillColor(colorText)
   .text('Português:', col1X, leftY);

doc.font('Helvetica')
   .text('Nativo / Fluente', col1X + 60, leftY);

leftY += 16;

doc.font('Helvetica-Bold')
   .fontSize(9.5)
   .fillColor(colorText)
   .text('Inglês:', col1X, leftY);

doc.font('Helvetica')
   .text('Comunicação Básica', col1X + 45, leftY);


// RIGHT COLUMN: RESUMO, EXPERIÊNCIA, FORMAÇÃO, CURSOS
let rightY = y;

// RESUMO PROFISSIONAL
doc.font('Helvetica-Bold')
   .fontSize(12)
   .fillColor(colorPrimary)
   .text('RESUMO PROFISSIONAL', col2X, rightY);

rightY += 18;

const resumoText = 'Profissional extremamente versátil com experiência sólida em suporte de tecnologia da informação e automação industrial voltada para processos críticos e mineração de larga escala. Especializado no desenvolvimento ágil de aplicativos móveis e criação ágil de MVPs (Mínimo Produto Viável) funcionais de alta fidelidade. Excelente habilidade em diagnosticar falhas, apoiar equipes operacionais e focar na resolução de problemas práticos com inovação tecnológica.';

const resumoHeight = doc.heightOfString(resumoText, { width: col2Width, align: 'justify', lineGap: 1.5 });

doc.font('Helvetica')
   .fontSize(9)
   .fillColor(colorText)
   .text(resumoText, col2X, rightY, { width: col2Width, align: 'justify', lineGap: 1.5 });

rightY += resumoHeight + 20;

// EXPERIÊNCIA PROFISSIONAL
doc.font('Helvetica-Bold')
   .fontSize(12)
   .fillColor(colorPrimary)
   .text('EXPERIÊNCIA PROFISSIONAL', col2X, rightY);

rightY += 18;

const jobs = [
  {
    company: 'SONDA PROCWORK INFORMÁTICA LTDA',
    role: 'Técnico em Tecnologia Industrial',
    period: 'Março 2021 — Presente',
    desc: 'Suporte técnico de alta criticidade em automação industrial e sistemas de mineração. Responsável pelo monitoramento operacional de sistemas redundantes, diagnósticos lógicos e apoio técnico em redes e processos de infraestrutura física de mineração.'
  },
  {
    company: 'PLANGECON SERVIÇOS INDUSTRIAIS LTDA',
    role: 'Operações Industriais',
    period: 'Setembro 2019 — Janeiro 2021',
    desc: 'Execução de suporte em processos industriais e de carpintaria civil pesada. Coordenação e apoio a atividades complexas em equipe, prezando pela segurança operacional.'
  },
  {
    company: 'RBS ENGENHARIA LTDA',
    role: 'Oficial de Manutenção / Operador',
    period: 'Agosto 2018 — Abril 2019',
    desc: 'Operação técnica de plataformas elevatórias industriais (PTA), apoio operacional em manutenções de infraestrutura física e apoio geral.'
  },
  {
    company: 'ATA AMAZONAS TERRA AMBIENTAL',
    role: 'Auxiliar Administrativo',
    period: 'Janeiro 2017 — Junho 2018',
    desc: 'Responsável pelo controle diário de folhas de ponto de funcionários, processamento administrativo e organização interna de arquivos.'
  }
];

jobs.forEach(job => {
  const startY = rightY;
  
  // Render Company name
  doc.font('Helvetica-Bold')
     .fontSize(10)
     .fillColor(colorPrimary)
     .text(job.company, col2X + 8, rightY);
  rightY += 12;

  // Render Role & Period
  doc.font('Helvetica-BoldOblique')
     .fontSize(8.5)
     .fillColor(colorAccent)
     .text(`${job.role}  |  ${job.period}`, col2X + 8, rightY);
  rightY += 11;

  // Render Description & Measure dynamically
  const descHeight = doc.heightOfString(job.desc, { width: col2Width - 10, align: 'justify', lineGap: 1 });
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(colorText)
     .text(job.desc, col2X + 8, rightY, { width: col2Width - 10, align: 'justify', lineGap: 1 });
  
  rightY += descHeight + 12; // Gap to next job card

  // Draw Vertical Accent Line
  doc.strokeColor(colorAccent)
     .lineWidth(2)
     .moveTo(col2X, startY + 2)
     .lineTo(col2X, rightY - 8)
     .stroke();
});

rightY += 8;

// FORMAÇÃO ACADÊMICA
doc.font('Helvetica-Bold')
   .fontSize(12)
   .fillColor(colorPrimary)
   .text('FORMAÇÃO ACADÊMICA', col2X, rightY);

rightY += 18;

doc.font('Helvetica-Bold')
   .fontSize(9.5)
   .fillColor(colorText)
   .text('Graduação em Análise e Desenvolvimento de Sistemas', col2X, rightY);
rightY += 13;
   
doc.font('Helvetica')
   .fontSize(8.5)
   .fillColor(colorTextLight)
   .text('Ensino Superior Incompleto  |  Tecnologia da Informação', col2X, rightY);
rightY += 18;

doc.font('Helvetica-Bold')
   .fontSize(9.5)
   .fillColor(colorText)
   .text('Ensino Médio Completo', col2X, rightY);

rightY += 25;

// CURSOS E CERTIFICAÇÕES
doc.font('Helvetica-Bold')
   .fontSize(12)
   .fillColor(colorPrimary)
   .text('CURSOS E CERTIFICAÇÕES', col2X, rightY);

rightY += 18;

const courses = [
  'Informática Básica & Avançada',
  'Manutenção de Micros e Redes de TI',
  'Atendimento ao Cliente e Vendas',
  'Técnico em Automação Industrial'
];

doc.font('Helvetica')
   .fontSize(8.5)
   .fillColor(colorText);

// Print courses in a two-column compact grid
courses.forEach((course, idx) => {
  const cx = idx % 2 === 0 ? col2X : col2X + 175;
  const cy = rightY + Math.floor(idx / 2) * 16;
  
  doc.rect(cx, cy + 3, 3, 3)
     .fill(colorAccent);
     
  doc.text(course, cx + 8, cy, { width: 165 });
});

doc.end();

writeStream.on('finish', () => {
  console.log('PDF resume successfully written to public folder!');
});
