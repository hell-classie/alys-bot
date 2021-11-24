require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, MessageEmbed } = require('discord.js');
const Bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES] });

const rest = new REST({ version: '9' }).setToken(process.env.BETA_OAUTH_TOKEN);

Bot.on('ready', function() {
    console.log("Je suis prête ^^ On démarre quand car je meurt d'impatience d'aller bosser :D");
    Bot.user.setActivity('Ahelp', { type: 'PLAYING' })
});

Bot.on('messageCreate', message => {
    if (message.content === 'Ahelp') {
        var Profil= new MessageEmbed()
        .setColor('#0066ff')
        .setTitle("Commandes") 
        .setThumbnail('https://media.discordapp.net/attachments/891329615073787954/891329732359102544/COMMANDES.png?width=473&height=473')
        .setDescription("Voici la liste des commandes et textes réactions")
        .addFields(
            { name: '**Ahelp**', value:'Bah à ton avis on est où là ?'},
            { name: '**Astar**', value:'Une petite note de 1 à 10 avec un petit bonus de comparaison avec d\' autres énergumènes !'},
            { name: '**Dis Alys,** + question', value:'Posez moi des questions, je trouve toujours les bonnes réponses\n(Note du dev. : Non.)'},
            { name: '**I prefer** + citation', value:'Ouais je te juge. Et alors ?'},
            { name: '**OCEAN CRY** + mention', value:'Un équivalent océanique à un bon \"Rafale tes morts\"'},
            { name: '**Alove** + mention', value:'Prêt à tester ton amour ? :smirk:'},
            { name: '**Aflip**', value:'Pile je gagne, Face tu perds !'},
            { name: '**Aslap** + mention', value:'Quand une bonne petite correction s\'impose !'},
            { name: '**Akiss** + mention', value:'Un bisou ! Un bisou !'},
            { name: '**Ahug** + mention', value:'Pour faire des câlins à ton ami/parent/crush/concubine/Bot favori (c\'est moi ça)'},
            { name: '**Aroulette**', value:'Imagine tu te fais rickroll. Nan je déconne ! Mais imagine quand même.'},
            { name: '**Ablague**', value:'Pour toute réclamation sur le capital fun des blagues veuillez contacter Zapdexio (elles sont de lui)'},
            { name: '**Amort**', value:'Littéralement mangetesmorts.com (mais vu que le site est down je prend la relève !)'},
        )
        .setTimestamp()
        .setFooter('Alys Bot par Classie', Bot.user.avatarURL()); 
    message.channel.send({embeds: [Profil]});       
}});


Bot.on('messageCreate', message => {
    if (message.content === 'Ainfo') {
        var Profil= new MessageEmbed()
        .setColor('#0066ff')
        .setTitle("A propos d'Alys") 
        .setDescription("Tout ce qu\'il faut savoir sur moi huhu")
        .setThumbnail(Bot.user.avatarURL())
        .addFields(
            { name: '**Version du bot**', value:'1.4'},
            { name: '**Changement**', value:'Mise à jour de la lib Discord.JS (1.12 -> 1.13)\nChangements Graphiques'},
            { name: '**Hébergement**', value:'24/24 Local (quand patate y pense mdr)'},
        )
        .setTimestamp()
        .setFooter('Alys Bot par Classie', Bot.user.avatarURL()); 
    message.channel.send({embeds: [Profil]});       
}});

Bot.on('messageCreate', message => {
    if(message.content.startsWith('Aprofil')) { 
        let appar = "Bah t'es offline-";
        // let stat = {
        //    "online": "En ligne !",
        //    "idle": "Ah, un AFK",
        //    "dnd": "Shht, Ne pas déranger",
        //    "offline": "Offline... zzzzZZZ",
        // } 
        console.log("--> Commande Aprofil !\nUtilisateur (gentil) :" + message.author.username)
        if (message.member.presence.status !== "offline") {
            if (message.member.presence.clientStatus.desktop) {
                appar = "Sur ton PC";
            } else if (message.member.presence.clientStatus.mobile) {
                appar = "Un petit smartphone";
            } else if (message.member.presence.clientStatus.web) {
                appar = "Sur Web (pense à installer l'app)";
            }
        }
        var Profil= new MessageEmbed()
        .setTitle("Profil de " + message.author.username) 
        .setDescription("Découvre toutes les informations cools sur ton compte !")
        .setThumbnail(message.author.displayAvatarURL())
        .addFields(
            { name: 'Sur Discord depuis', value: message.author.createdAt.toLocaleDateString(), inline: true },
            //! { name: 'Ton statut', value: stat[message.member.presence.status], inline: true },
            { name: 'Zone de connexion', value: appar, inline: true },
            { name: 'Surnom dans le serveur', value: message.member.nickname ? message.member.nickname : message.author.username, inline: true },
            { name: 'Rôle le plus élevé', value: message.member.roles.highest, inline: true },
            { name: 'Parmi les rangs depuis', value: message.member.joinedAt.toLocaleDateString(), inline: true },
        )
        .setColor(message.member.displayHexColor)
        .setTimestamp()
        .setFooter('Alys Bot par Classie', Bot.user.avatarURL());
        
        message.channel.send({embeds: [Profil]});
    }
});

Bot.on('messageCreate', message => {
    if(message.content.startsWith('Aserv')) { 
        console.log("--> Commande Aserv !\nUtilisateur :" + message.author.username + "\nServeur : " + message.member.guild.name)

	let region = {
		"brazil": "Brésil :flag_br:",
		"europe": "Europe :flag_eu:",
		"singapore": "Singapour :flag_sg:",
		"us-central": "Mid-USA:flag_us:",
        "sydney": "Australie :kangaroo:",
		"eu-west": "Europe de l'Ouest :flag_eu:",
		"us-east": "East-USA :flag_us:",
		"us-south": "South-USA :flag_us:",
		"us-west": "West-USA :flag_us:",
		"vip-us-east": "VIP :flag_us:",
		"london": "Grande-Bretagne :flag_gb:",
		"amsterdam": "Nouvelle Zélande :flag_nl:",
		"hongkong": "Hong Kong :flag_hk:",
		"russia": "RUSSIA :whiskey:",
		"southafrica": "Afrique du Sud :flag_za:"
    };
    
    let sécure = {
        "NONE": "Inexistante, gare aux raids !",
        "LOW": "Faible, mais au moins on a un truc",
        "MEDIUM": "Moyen, Les nouveaux restent à la porte",
        "HIGH": "Fiable, on est entre de bonnes mains",
        "VERY_HIGH": "HARDCORE SECURITY : ON",
    }
        
        var Profil= new MessageEmbed()
        .setColor('#0066ff')
        .setTitle("Tout savoir sur " + message.member.guild.name) 
        .setDescription("Bienvenue à l'office de tourisme, voici tout ce qui la force de ce sevreur :D")
        .setThumbnail(message.member.guild.iconURL())
        .addFields(
            { name: 'Serveur matérialisé depuis', value: message.member.guild.createdAt.toLocaleDateString(), inline: true },
            { name: 'Grand Doyen du serveur', value: message.member.guild.owner, inline: true },
            { name: 'Localisation', value: region[message.member.guild.region], inline: true },           
            { name: 'Population', value: message.member.guild.memberCount + " habitants dont:\n" + message.member.guild.members.cache.filter((member = Discord.GuildMember) => !member.user.bot).size + " humains\n" + message.member.guild.members.cache.filter((member = Discord.GuildMember) => member.user.bot).size + " bots", inline: true },
            { name: 'Tracé des routes', value: message.member.guild.channels.cache.filter((channel = Discord.TextChannel) => channel.type === "category").size + " Zones \n" + message.member.guild.channels.cache.filter((channel = Discord.TextChannel) => channel.type === "text").size + " routes textuelles\n" + message.member.guild.channels.cache.filter((channel = Discord.TextChannel) => channel.type === "voice").size + " routes vocales", inline: true },
            { name: 'Sécurité', value: sécure[message.member.guild.verificationLevel], inline: true },
        )
        .setTimestamp()
        .setFooter('Alys Bot par KiOm', Bot.user.avatarURL());
        
        message.channel.send({embeds: [Profil]});
        }
});

Bot.on('messageCreate', message => {
    if(message.content.startsWith('Ainvite')) {
        var inviterich = new MessageEmbed()
        .setColor('#0066ff')
        .setTitle('Et une invite, une !')
        .setURL('https://discord.com/oauth2/authorize?client_id=689468373951840353&permissions=1275587719&scope=bot')
        .setDescription('On se souhaite la bienvenue dans la secte !\n[Entre donc !](https://discord.com/oauth2/authorize?client_id=689468373951840353&permissions=1275587719&scope=bot)')
        .setImage('https://media.discordapp.net/attachments/891329615073787954/891330901273870376/INVITES.png')
        .setTimestamp()
        .setFooter('Alys Bot par KiOm', Bot.user.avatarURL());
        message.channel.send({embeds: [inviterich]});
    }
})

Bot.on('messageCreate', message => {
    if(message.content.startsWith('OCEAN CRY')) {
        console.log("--> Commande OCEAN CRY !\n")
        if (message.content.startsWith("OCEAN CRY <@")) {     
            const member = message.mentions.users.first().id    
            if (member === message.author.id) {
                var oceanrich = new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("NOYADE !") 
                .setDescription("<@!" + message.author + "> se noie sous la vague provoquée par... bah par cette même personne c'est quoi ce bordel ?")
                .setImage("https://media1.tenor.com/images/2cb87ee9662473bae186436072f91ce6/tenor.gif?itemid=5543161")
                message.channel.send({embeds: [oceanrich]});
            }
            else {
                var oceanrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("NOYADE !") 
                .setDescription("<@!" + member + "> se noie sous la vague provoquée par <@!" + message.author + "> !")
                .setImage("https://media1.tenor.com/images/2cb87ee9662473bae186436072f91ce6/tenor.gif?itemid=5543161")
                message.channel.send({embeds: [oceanrich]});
            }
        }
        else{
            message.channel.send("Tu as mal effectué la commande ;--;")
        }}
});

var prefer = [
    "**TU VAS MOURIR POUR AVOIR DIS CECI**",
    "Moi aussi ^^",
    "*presque*",
    "EN FAIT NON",
    "Jsp"
  ]
  Bot.on('messageCreate', message => {
    if(message.content.startsWith("I prefer")) {
        var randomAnswers = prefer[Math.floor(Math.random() * prefer.length)];
        message.channel.send(randomAnswers);
    }
});

var ui = [
    "0 ! Mee6 ! ***C A N C E R***",
    "1 ! Kepa ! Raté !",
    "2 ! Star Platypus ! Hmm... Moche.",
    "3 ! Cass' ! ^^'",
    "4 ! Caeles ! oui. En 4. C'est moi qui décide de toute façon ! NA !",
    "5 ! Zapdexio ! Sa seule erreur c'est Platypus.",
    "6 ! Comet ! Par ce que.",
    "7 ! Moi même ! Rooh ! On est pas parfait !",
    "8 ! Mango ! Il est tout cute :D",
    "9 ! Psikhì ! Le mentor !",
    "10 !!! Kilebot ! Es-ce que j\'ai vraiment besoin d\'argumenter ?"
  ]
  Bot.on('messageCreate', message => {
      if (message.content.startsWith("Astar")) {
        var randomAnswers = ui[Math.floor(Math.random() * ui.length)];
        message.channel.send(randomAnswers);
      }
});

var verbs = [
    "Allume", "Avale", "Amalgame", "Atomise", "Assaisonne",
    "Badigeonne", "Baise", "Bourre", "Baptise", "Bouillonne", "Barbouille", "Bascule", "Balaye", "Bastonne",
    "Climatise", "Catapulte", "Culbute", "Cuisine", "Crucifie",
    "Décalotte", "Défouraille", "Déforeste", "Déracine", "Déterre", "Démarre",
    "Emince", "Eviscere", "Engraisse", "Enterre", "Epluche",
    "Fiscalise", "Fossilise", "Fourre", "Falsifie",
    "Gargarise", "Grignote", "Goupille",
    "Humidifie", "Hydrate", "Hydrogenise",
    "Inhale", "Informatise", "Irrite", "Immortalise", "Irradie", "Immunise",
    "Javellise", "Jalonne", "Jardine",
    "Kidnappe", "Klaxonne",
    "Lessive", "Lobotomise", "Lardonne", "Linéarise", "Localise", "Liquéfie", "Légalise",
    "Momifie", "Météorise", "Massacre", "Mazoute", "Multiplie", "Mensualise", "Minéralise", "Magnétise", "Mange", "Matraque",
    "Nébulise", "Numérise", "Napalmise", "Nettoie", "Nucléarise", "Nitrifie",
    "Occidentalise", "Opprime", "Oxygène", "Octuple", "Obnubile",
    "Pianotte", "Parfume", "Pondère", "Prophétise", "Programme", "Pronostique", "Postiche", "Pasteurise", "Perfore", "Pourchasse", "Pulvérise", "Procrastine",
    "Quadrille", "Quadruple", "Querelle", "Quantifie", "Quintuple",
    "Recèle", "Racommode", "Révolutionne", "Rumine", "Ruisselle", "Réquisitionne", "Rafale",
    "Saupoudre", "Surcharge", "Surchauffe", "Surcète", "Scannerise", "Surligne", "Ségrégationne", "Sirote", "Standardise", "Sacrifie", "Suce",
    "Tabasse", "Temporalise", "Totémise", "Tronçonne", "Tuberculise", "Transpose", "Tuyaute", "Turlupine", "Tyrannise", "Tamponne", "Tambourine", "Taillade", "Traumatise",
    "Ulcère", "Universalise", "Usurpe", "Urbanise", "Uniformise", "Urine",
    "Vocifère", "Vouvoie",  "Vampirise", "Valdingue", "Vulgarise"
  ];
  
  var nouns = [
    " tes morts", " tes grands morts", " tes ancètres", " tes grands ancètres", " ton oncle", " ton grand-oncle", " ta tante", " ta grande-tante", " tes descendants", " ta généalogie"
  ];
  
 Bot.on('messageCreate', message => {
        if (message.content.startsWith("Amort")) {
            var nb_v = verbs[Math.floor(Math.random() * verbs.length)];
            var nb_n = nouns[Math.floor(Math.random() * nouns.length)];
            message.channel.send(nb_v + nb_n);
        }
});

var choix = [
    "pile",
    "face",
  ]
  Bot.on('messageCreate', message => {
      if (message.content.startsWith("Aflip")) {
        var pileouface = choix[Math.floor(Math.random() * choix.length)];
        if (pileouface === "face") {
            var pofrich= new MessageEmbed()
            .setColor('#0066ff')
            .setTitle("Suspens...")
            .setDescription("Et la pièce est tombée sur **Face** !")
            .setImage("https://kiom.neocities.org/alys_assets/face.png")
            message.channel.send({embeds: [pofrich]});
        }
        else {
            var pofrich= new MessageEmbed()
            .setColor('#0066ff')
            .setTitle("Suspens...")
            .setDescription("Et la pièce est tombée sur **Pile** !")
            .setImage("https://kiom.neocities.org/alys_assets/pile.png")
            message.channel.send({embeds: [pofrich]});
        }
      }
});

var reps = [
    "Aucune idée !",
    "Nah.",
    "Ah peut être !",
    "Oui !!!",
    "Demande à cet abruti de KiOm"
  ]
  Bot.on('messageCreate', message => {
      if (message.content.startsWith("Dis Alys,")) {
        var randomAnswers = reps[Math.floor(Math.random() * reps.length)];
        message.channel.send(randomAnswers);
      }
});

Bot.on('messageCreate', message => {
    if(message.content.startsWith('Ahug')) {
        if (message.content.startsWith("Ahug <@")) {
            const member = message.mentions.users.first().id
            var hug = [
                "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
                "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
                "https://media.giphy.com/media/rSNAVVANV5XhK/giphy.gif",
                "https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif",
                "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
                "https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif",
                "https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif",
                "https://media1.tenor.com/images/9ca25e9e87ed4fc099b5f4199b0fb436/tenor.gif",
                "https://media1.tenor.com/images/75f007f2541a2d8581b2558af7190714/tenor.gif",

            ]
            var gif = hug[Math.floor(Math.random() * hug.length)];
            if (member === message.author.id) {                               
                var hugrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Don't be alone..")
                .setDescription("<@!" + member + "> c'est moi qui vais te faire ce câlin pour la peine !")
                .setImage(gif)
                message.channel.send({embeds: [hugrich]});
            } else if(member === "689468373951840353") { // Si on mentionne le bot
                var hugrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Oh !")
                .setDescription("J'accepte ce câlin avec plaisir ! Viens là !")
                .setImage(gif)
                message.channel.send({embeds: [hugrich]});
            } else if(message.mentions.users.first().bot === true) { 
                var hugrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Câlin !!!")
                .setDescription("Eh <@!" + member + ">... y'a <@!" + message.author + "> qui pense à toi, prépare le module émotionnel !")
                .setImage(gif)
                message.channel.send({embeds: [hugrich]});
            }
            else {               
                var hugrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Câlin !!!")
                .setDescription("Hey <@!" + member + "> tu as eu un gro cal1 de <@!" + message.author + "> !")
                .setImage(gif)
                message.channel.send({embeds: [hugrich]});
            }
        }
        else{
            message.channel.send("Tu as mal effectué la commande ;--;");
        }}
});


Bot.on('messageCreate', message => {
    if(message.content.startsWith('Akiss')) {
        if (message.content.startsWith("Akiss <@")) {
            const member = message.mentions.users.first().id
            var kiss = [
                "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
                "https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif",
                "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
                "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
                "https://media.giphy.com/media/j98SQB5Y7WqnC/giphy.gif",
                "https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif",
                "https://media.giphy.com/media/RDMV8XCgacl1K/giphy.gif",
                "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
                "https://media.giphy.com/media/vaSA1fpCkY06I/giphy.gif",
                "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
                "https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif",
                "https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif",
            ]
            var gif = kiss[Math.floor(Math.random() * kiss.length)];
            console.log(gif);
            if (member === message.author.id) {
                var kissrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Alerte réconfort !")
                .setDescription("On peut pas s'auto faire des bisous, tiens en voilà un de ma part ^^")
                .setImage(gif)
                message.channel.send({embeds: [kissrich]});
            } else if(member === "689468373951840353") { // Si on mentionne le bot
                var kissrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Eh mais..")
                .setDescription("C'est.. Pour moi~ O.O J'accepte ! :D")
                .setImage(gif)
                message.channel.send({embeds: [kissrich]});
            } else if(message.mentions.users.first().bot === true) { 
                var kissrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Kiss kiss ^^")
                .setDescription("Eh <@!" + member + ">... Tu as eu un bisou de <@!" + message.author + "> Fais vibrer le module d'émotions un peu !")
                .setImage(gif)
                message.channel.send({embeds: [kissrich]});
            }
            else {
                var kissrich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("Kiss kiss ^^")
                .setDescription("Psst <@!" + member + ">... Tu as eu un bisou de <@!" + message.author + "> comme c'est mignon :D !")
                .setImage(gif)
                message.channel.send({embeds: [kissrich]});
            }
        }
        else{
            message.channel.send("Tu as mal effectué la commande ;--;");
        }
    }
});

Bot.on('messageCreate', message => {
    if(message.content.startsWith('Aslap')) {
        if (message.content.startsWith("Aslap <@")) {
            const member = message.mentions.users.first().id
            var slap = [
                "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
                "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
                "https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif",
                "https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif",
                "https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif",
                "https://media.giphy.com/media/l0IyiWcrQzwNerC8g/source.gif",
                "https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif",
                "https://media.giphy.com/media/mLn5AIQK2WEwg/giphy.gif",
                "https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif",
                "https://media1.tenor.com/images/a78d54cea15f59bdba220ba032881381/tenor.gif?itemid=9257319",
            ]
            var gif = slap[Math.floor(Math.random() * slap.length)];
            console.log(message.mentions.users.first().bot)
            if (member === message.author.id) {
                var slaprich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("NON !")
                .setDescription("Te frappe pas ! Tiens frappe moi un coup pour te défouler j'encaisse !")
                .setImage(gif)
                message.channel.send({embeds: [slaprich]});
            } else if(member === "689468373951840353") { // Si on mentionne le bot
                var slaprich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("VLAM !")
                .setDescription("Viens je t'attend ! Frappe moi un coup je veux voir si t'as du répondant !")
                .setImage(gif)
                message.channel.send({embeds: [slaprich]});
            } else if(message.mentions.users.first().bot === true) { 
                var slaprich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("VLAM !")
                .setDescription("Vas-y ! Défoule toi sur le bot ! Défonce <@!" + member + "> ! >:D")
                .setImage(gif)
                message.channel.send({embeds: [slaprich]});
            }
            else {
                var slaprich= new MessageEmbed()
                .setColor('#0066ff')
                .setTitle("VLAM !")
                .setDescription("<@!" + member + "> se fait taper par <@!" + message.author + ">, bouh le vilain !")
                .setImage(gif)
                message.channel.send({embeds: [slaprich]});
            }
        }
        else{
            message.channel.send("Tu as mal effectué la commande ;--;");
        }
    }
});

var oui = [
    "0% / Vous avez fait exprès ou c'est que tu t'est trompé de @ ?",
    "10% / Ouh. C'est pas gagné",
    "20% / C'est possible si t'as de la luck",
    "30% / là je sais pas situer tu te débrouille ",
    "40% / Tant qu'elle te menace pas avec un couteau c'est bon !",
    "50% / Tu fais un pile ou face hihi",
    "60% / YAY",
    "70% / Allez ! Un petit effort !",
    "80% / Je vois pas pourquoi ça marcherais pas ^^",
    "90% / C'est pas parfait mais c'est sûr ",
    "100% / On tient le best couple !"
]
Bot.on('messageCreate', message => {
    if (message.content.startsWith("Alove")) {
        if (message.content.startsWith("Alove <@")) {
            const member = message.mentions.users.first().id
            if (member === message.author.id) {    
                message.channel.send("Mais ;-; Tu n'as pas besoin de cette commande pour te savoir toi même, tu es parfait(e) tu n'as pas à faire ce test seul(e) voyons ^^ essaye avec une autre personne")           
            }
            else {
                var randomAnswers = oui[Math.floor(Math.random() * oui.length)];
                message.channel.send("<@!" + member + "> :heart: <@!" + message.author + "> / " + randomAnswers);
            }
        }
        else {
        message.channel.send("Je crois qu'il manque la seconde personne.");
        }
    }
});

var Despacito = [
    ":gun: https://www.youtube.com/watch?v=IjaEExI_gxk",
    ":gun: https://www.youtube.com/watch?v=IjaEExI_gxk",
    ":gun: https://www.youtube.com/watch?v=IjaEExI_gxk",
    ":gun: https://www.youtube.com/watch?v=IjaEExI_gxk",
    ":gun: https://www.youtube.com/watch?v=IjaEExI_gxk",
    ":gun: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ]
  Bot.on('messageCreate', message => {
      if (message.content.startsWith("Aroulette")) {
        var randomAnswers = Despacito[Math.floor(Math.random() * Despacito.length)];
        message.channel.send(randomAnswers);
      }
});

var mdr = [
    "Que dit un congélateur au début d'une course? **One, two, frigo !**",
    "Que dit on d'un informaticien doué? **On dit qu'il Excel.**",
    "Quel est le logiciel qui s'est échappé? **Libre Office.**",
    "Que mérite le père Noël? **Il merryte Christmas.**",
    "Quelle lettre est différente des autres? **Le K particulier.**",
    "Quel logiciel de Microsoft est connu par le monde entier? **Microsoft World.**",
    "Comment appelle t on un fichier qui en fait trop? **Un fichier exessif.**",
    "Comment appelle t on le grand père éloigné d'un égyptien? **Un papyrusse.**",
    "Quelle est la prise préférée d'un musicien? **La clé de sol.**",
    "Quel est le pays préféré des polices de caractère? **L'Italique.**",
    "Quel est le plus gros ordinateur d'Apple? **Le Big Mac.**",
    "Comment appelle t on le point de passage du désert? **Le sheik point.**",
    "Quel est l'entraîneur qui fait de la musique? **DJ Deschamps.**",
    "Quelle est la chanson préférée d'un Linux? **Une vie de Root.**",
    "Que dit un pistolet lorsqu'il trouve quelque chose bizarre? **C'est glock.**",
    "Comment appelle-t-on une erreur grave à la Maison Blanche? **Un pêché Capitole.**",
    "Que dit t-on d'une armoire facilement irritable? **Qu'elle n'est pas commode.**",
    "Quel est le poisson qui sert des boissons? **Le bar.**",
    "Quel est le Jeu préféré d'un historique? **Cache-cache.**",
    "Qu'es-ce qui est moche ? **Cassy ! ^^**",
]
Bot.on('messageCreate', message => {
    if (message.content.startsWith("Ablague")) {
        var randomAnswers = mdr[Math.floor(Math.random() * mdr.length)];
        message.channel.send(randomAnswers);
    }
});


// ----------------------------------------------------------- //
// ----------------------------------------------------------- //
// ----------------------------------------------------------- //


Bot.on('messageCreate', message => {
    if (message.author.id == 352769640218361867) {
        if (message.content.startsWith('Alys, matrice !')) {
            var str = message.content
            message.channel.send(str.substring(15))
            message.delete();
        }
    }
});

Bot.on('messageCreate', message => {
    if (message.author.id == 352769640218361867) {
        if (message.content.startsWith('Set Game')) {
            var str = message.content
            Bot.user.setActivity(str.substring(8), { type: 'PLAYING' })
            message.delete();
        }
    }
});

Bot.on('messageCreate', message => {
    if (message.author.id == 352769640218361867) {
        if (message.content.startsWith('Set Music')) {
            var str = message.content
            Bot.user.setActivity(str.substring(9), { type: 'LISTENING' })
            message.delete();
        }
    }
});

Bot.on('messageCreate', message => {
    if (message.author.id == 352769640218361867) {
        if (message.content.startsWith('Reset Game')) {
            var str = message.content
            Bot.user.setActivity('ALPHA 0.3 / Stable Privée', { type: 'PLAYING' })
            message.delete();
        }
    }
});

Bot.on('messageCreate', message => {
    if (message.author.id == 352769640218361867) {
        if (message.content.startsWith('Set Movie')) {
            var str = message.content
            Bot.user.setActivity(str.substring(9), { type: 'WATCHING' })
            message.delete();
        }
    }
});

Bot.on('messageCreate', message => {
  if (!message.guild) return;
    if (message.author.id == 352769640218361867) {
      if (message.content.startsWith('Race')) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.ban({
              reason: 'Race.',
            }).then(() => {
              message.reply(`${user.username} s'est bien fait niquer sa race !`);
            }).catch(err => {
              message.reply('OH NON ! SA RACE EST SUPERIEURE ! SACRILEGE');
            });
          } else {
            message.reply('Race inconnue');
          }
          } else {
            message.reply('Y\'a aucune race là.');
      }
    }
  }      
});

Bot.login(process.env.DISCORD_OAUTH_TOKEN) // Token Sécurisé tavu
