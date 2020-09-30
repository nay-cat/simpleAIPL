client.on("message", msg => {  
    var iploggerBlocker = [
        "leancoding.co",
        "grabify.link",
        "stopify.co",
        "freegiftcards.co",
        "joinmy.site",
        "curiouscat.club",
        "catsnthings.fun",
        "catsnthing.com",
        "iplogger.org",
        "2no.co",
        "iplogger.ru",
        "yip.su",
        "iplogger.co",
        "iplogger.info",
        "ipgrabber.ru",
        "ipgraber.ru",
        "iplis.ru",
        "02ip.ru",
        "ezstat.ru"
      ];
  
      iploggerBlocker.forEach(iplogger => {
        if(msg.content.includes(iplogger)){
            msg.delete();
            let autor = msg.author.username
            console.log(autor+" envio un iplogger")
            return;
        }
      });
    },