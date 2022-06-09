#!/usr/bin/env node
// diz ao Node.js que se trata de uma ferramenta do CLI

//Modulos
//const chalk = require('chalk')
const chalk = require("chalk");
const boxen = require("boxen");

//Definindo boxen
const config = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    float: "center",
    borderColor: "#ff4879",
    backgroundColor: "black"
};

//Dados usando chalk 
const data = {
    myname: chalk.white('Kauan Lemos Leite / '),
    nick: chalk.cyan('kauanll'),
    labelgithub: chalk.cyan('Github: '),
    labellinkedin: chalk.cyan('Linkedin: '),
    labelemail: chalk.cyan('Email: '),
    labelwhats: chalk.cyan('WhatsApp: '),
    labelcard: chalk.cyan('Card: '),
    github: chalk.cyan('https://github.com/KauanLL'),
    linkedin: chalk.cyan('https://www.linkedin.com/in/kauanll'),
    email: chalk.cyan('KauanLemos@outlook.com.br'),
    whats: chalk.cyan('(11) 99498-4197'),
    card: chalk.cyan('npx kauanll')
};

const line = '\n';
const head = `${data.myname} ${data.nick}`;
const githubin = `${data.labelgithub} ${data.github}`;
const linkin = `${data.labellinkedin} ${data.linkedin}`;
const emailin = `${data.labelemail} ${data.email}`;
const whatsin = `${data.labelwhats} ${data.whats}`;
const cardin = `${data.labelcard} ${data.card}`;

const output = head + line + line + githubin + line + linkin + line + emailin + line + whatsin + line + cardin;

console.log(chalk.green(boxen(output, config)));

/* 
                                    Kauan Lemos Leite / kauanll

            Github: https://github.com/KauanLL
            Linkedin: https://www.linkedin.com/in/kauanll
            Email: KauanLemos@outlook.com.br
            Wha

                Card: npx kauanll


*/
