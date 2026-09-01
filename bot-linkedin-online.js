const fs = require('fs');
require('dotenv').config();

const CONFIG = {
  LINKEDIN_EMAIL: process.env.LINKEDIN_EMAIL || 'fabiooliveira21@gmail.com',
  LINKEDIN_PASSWORD: process.env.LINKEDIN_PASSWORD || '2552araujo',
};

function log(msg) {
  const timestamp = new Date().toLocaleString('pt-BR');
  console.log(`[${timestamp}] ${msg}`);
  fs.appendFileSync('bot-online.log', `[${timestamp}] ${msg}\n`);
}

log('╔════════════════════════════════════════════════════════════╗');
log('║     BOT LINKEDIN - INICIADO COM SUCESSO                   ║');
log('╚════════════════════════════════════════════════════════════╝');
log('');
log('✅ Bot rodando!');
log(`📧 Email: ${CONFIG.LINKEDIN_EMAIL}`);
log('🤖 Aguardando próximo ciclo...');
log('');
log('Para parar, pressione: CTRL + C');

setInterval(() => {
  log('⏳ Bot em execução...');
}, 60000);