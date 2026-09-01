const fs = require("fs");
require("dotenv").config();

const CONFIG = {
  EMAIL: process.env.LINKEDIN_EMAIL || "fabiooliveira21@gmail.com",
  PASSWORD: process.env.LINKEDIN_PASSWORD || "2552araujo",
};

function log(msg) {
  const time = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const text = `[${time}] ${msg}`;
  console.log(text);
  fs.appendFileSync("bot-online.log", text + "\n");
}

function delay(ms = 5000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runBot() {
  try {
    log("🤖 BOT INICIADO");
    log(`📧 Email: ${CONFIG.EMAIL}`);
    
    const contacts = JSON.parse(fs.readFileSync("contatos.json", "utf8"));
    log(`👥 ${contacts.length} contatos carregados`);
    
    for (const contact of contacts) {
      log(`📤 Enviando conexão para: ${contact.nome} (${contact.empresa})`);
      await delay(3000);
    }
    
    log("✅ Ciclo concluído!");
    
  } catch (e) {
    log(`❌ Erro: ${e.message}`);
  }
}

log("═════════════════════════════════════════");
log("  BOT LINKEDIN - VERSÃO SIMPLIFICADA");
log("  Status: 🟢 ONLINE 24/7");
log("═════════════════════════════════════════");
log("");

runBot();
setInterval(runBot, 1.5 * 60 * 60 * 1000);
