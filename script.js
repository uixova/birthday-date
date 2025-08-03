const headlineTexts = {
  start: "Selamm Erva Hanımm!!",
  a1: "En sevdiğin hayvan nedir?",
  a2: "En sevdiğin Tatlı?",
  a3: "Kedi olmasını beklerdim",
  a4: "İnce Detayı Anladınmı !?",
  a5: "Kendini sevmeyi öğren önce 😏",
  a6: "Yavru kedi almak ister misin?",
  a7: "Ne Demek Banane!",
  a8: "Aferin Erva Hanım! ilerleme var 😄",
  a9: "Sütünü iç lütfen!",
  a10: "Annen kızar boşver!",
  a11: "1.58 olmak güzel mi?",
  a12: "Birşey demedim Abla 😅",
  a13: "Hayvan sevgisi gerçekten kalpten gelir.",
  a14: "Hayırdır sen ya, ne diyon!?",
  a15: "Hayvan sevgisi insan ruhunu besler.",
  a16: "Dost canlısı bir hayvan sahibi olmak ister misin?",
  a17: "Yazık, üzüldüm sana 😢",
  a18: "Ahahhaha kısasın 1.58 seni! 😂",
  a19: "Fare de kısa SENİN gibi 😘",
  a20: "Umarım beğenmişsindir 🥲",
  a21: "Umarım beğenmişsindir 🥲",
  a22: "Umarım beğenmişsindir 🥲",
  a23: "Umarım beğenmişsindir 🥲",
  a24: "Aferin buraya kadar geldin!  🎉",
  b1: "Hahaha Şakacı 1.58 seni!",
  b2: "Tamam abla ne kızıyon ya 😭",
  b3: "Kusura bak abla ben doğruyu söyledim",
  b4: "Tamam sinirlendirmem ablaaaa 😾",
  b5: "Saol abla 😽 Biceps mi, Triceps mi?",
  b6: "Yio konuşmaya devam edicem 😉",
  b7: "AAAA Senin ben ne demek ya 😡",
  b8: "Sen kimsin de bana aferin diyorsun 😡",
  b9: "Neee Beni fareye dönüştürme 😓",
  b10: "Kral kızsın Vesselam",
  b11: "Aaa Cahil nasıl bilmezsin 😑",
  b12: "İyiki varsın Erva...",
  b13: "Tamam ya Dinlicem 😘",
  b14: "Ne diyün laan oglum 😾",
  b15: "Yaşlımıyım ben 😒",
  b16: "Beğendin mi ablahh",
  b17: "OLamaz bunu bilmiyordum 😱(Nolu aileme zarar verme)",
  b18: "Senin acımana kalmadım cadı 😈",
  b19: "Umarım Fareler kulağını kemirir 🤬",
  b20: "Umarım Hayallerini gerçekleştirebilirsin.",
  b21: "Bak işte boşuna kral demedim sana",
  b22: "Tamam abla, özür dilerim 😓",
  b23: "😶",
  b24: "Umarım beğenmişsindir 🥲",
  b25: "Peki, Öyle olsun Erva Hanım!!",
  end: "İyi ki doğdun Erva! 🎉🤩"
};

const options = {
  start: [
    { label: "Buyrun Benim", next: "a1" },
    { label: "O kim?", next: "b1" }
  ],

  // A senaryosu
  a1: [
    { label: "Kedi", next: "a2" },
    { label: "Köpek", next: "a3" }
  ],
  a2: [
    { label: "Ayna :)", next: "a4" },
    { label: "Suflee 🥴", next: "a5" }
  ],
  a3: [
    { label: "Üzüldüm", next: "a6" },
    { label: "Banane", next: "a7" }
  ],
  a4: [
    { label: "Anladım ya", next: "a8" },
    { label: "Anlayacak kadar büyümedim", next: "a9" }
  ],
  a5: [
    { label: "Sufle daha güzel bikere, hıh 🙄", next: "a24" },
    { label: "Tamam öğrenicem Abe", next: "a24" }
  ],
  a6: [
    { label: "Evet, çok isterim", next: "a10" },
    { label: "Hayır, anam kızar 😒", next: "a11" }
  ],
  a7: [
    { label: "Özür Dilerim 😽", next: "a11" }
  ],
  a8: [
    { label: "Ne demek istion lan", next: "a12" },
    { label: "Aferim bana 😊😘", next: "a13" }
  ],
  a9: [
    { label: "İçmiyom lan 🤬", next: "a14" },
    { label: "Temam Abe", next: "a15" }
  ],
  a10: [
    { label: "Kızarsa kızsın banane", next: "a16" },
    { label: "Haklısın, Beni döver 😓", next: "a17" }
  ],
  a11: [
    { label: "Evet çok güzel 😘", next: "a18" },
    { label: "Şansımı...", next: "a19" }
  ],
  a12: [
    { label: "Ha şöyle ayık ol", next: "a20" },
    { label: "Tamam 😑", next: "a21" }
  ],
  a13: [
    { label: "Kesinlikle", next: "a20" },
    { label: "Sanmıyorum", next: "a21" }
  ],
  a14: [
    { label: "Sanane Abe 😉", next: "a22" },
    { label: "Özür dilerim ben daha çok küçüğüm 🥲", next: "a23" }
  ],
  a15: [
    { label: "Evet, besliyorum", next: "a22" },
    { label: "Hayır, beslemiyorum", next: "a23" }
  ],
  a16: [
    { label: "İsterim", next: "a24" },
    { label: "İstemem", next: "end" }
  ],
  a17: [
    { label: "Suss!!! 😡", next: "a24" },
    { label: "😭", next: "end" }
  ],
  a18: [
    { label: "Kısalıkta bir lütuf bikere", next: "a24" },
    { label: "Seni Dövücem! 😾", next: "end" }
  ],
  a19: [
    { label: "Fareden nefret ederim", next: "a24" },
    { label: "Fareye acıdım lan", next: "end" }
  ],
  a20: [
    { label: "Son", next: "end" }
  ],
  a21: [
    { label: "Son", next: "end" }
  ],
  a22: [
    { label: "Son", next: "end" }
  ],
  a23: [
    { label: "Son", next: "end" }
  ],
  a24: [
    { label: "Son", next: "end" }
  ],

  // B senaryosu
  b1: [
    { label: "Dalga geçme lan 😾", next: "b2" },
    { label: "Üzdün beni", next: "b3" }
  ],
  b2: [
    { label: "Sinirlendirme beni", next: "b4" },
    { label: "Özür dilerim, kızmam tamam", next: "b5" }
  ],
  b3: [
    { label: "Konuşma Benle", next: "b6" },
    { label: "Senin ben...", next: "b7" }
  ],
  b4: [
    { label: "Aferin abeme", next: "b8" },
    { label: "Ben bir cadıyım", next: "b9" }
  ],
  b5: [
    { label: "Biceps 😍", next: "b10" },
    { label: "Triceps ne lan", next: "b11" }
  ],
  b6: [
    { label: "Tamam konuş, ben susarım", next: "b12" },
    { label: "Ayıp, ablanın sözünü dinle", next: "b13" }
  ],
  b7: [
    { label: "Ne anladıysan o kardeşşş", next: "b14" },
    { label: "Senin ben elini öperim", next: "b15" }
  ],
  b8: [
    { label: "Ablanım", next: "b16" },
    { label: "Ben aslında bir bukalemunum", next: "b17" }
  ],
  b9: [
    { label: "Acıdım dönüştürmicem", next: "b18" },
    { label: "Hayatına fare olarak devam et, HAHAHAHAHA", next: "b19" }
  ],
  b10: [
    { label: "Tabi olum ne sandın lan beni", next: "b20" },
    { label: "Senin kadar olamam", next: "b21" }
  ],
  b11: [
    { label: "Bilmiyorum kardeş hayırdır sen", next: "b22" },
    { label: "SUS", next: "b23" }
  ],
  b12: [
    { label: "😸", next: "end" }
  ],
  b13: [
    { label: "Aferinnn", next: "end" }
  ],
  b14: [
    { label: "SUS lan akıllı olcan oglum", next: "end" }
  ],
  b15: [
    { label: "Evet 🫥", next: "b25" }
  ],
  b16: [
    { label: "Son", next: "end" }
  ],
  b17: [
    { label: "Son", next: "end" }
  ],
  b18: [
    { label: "Son", next: "end" }
  ],
  b19: [
    { label: "Son", next: "end" }
  ],
  b20: [
    { label: "Son", next: "end" }
  ],
  b21: [
    { label: "Son", next: "end" }
  ],
  b22: [
    { label: "Son", next: "end" }
  ],
  b23: [
    { label: "Son", next: "end" }
  ],
  b24: [
    { label: "Son", next: "end" }
  ],
  b25: [
    { label: "Tamam 😐", next: "end" }
  ],

  end: "İyi ki doğdun Erva! 🎉🤩"
};

function nextStep(scenario) {
  const container = document.getElementById("button-container");
  const headline = document.getElementById("headline");
  const message = document.getElementById("message");

  if (!headlineTexts[scenario] || !options[scenario]) {
    container.style.display = "none";
    headline.style.display = "none";
    message.style.display = "block";
    message.innerText = headlineTexts["end"];
    return;
  }

  headline.innerText = headlineTexts[scenario];
  container.innerHTML = "";

  options[scenario].forEach(btnInfo => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerText = btnInfo.label;
    btn.onclick = () => nextStep(btnInfo.next);
    container.appendChild(btn);
  });

  container.style.display = "flex";
  headline.style.display = "block";
  message.style.display = "none";
}

function startScreen() {
  const container = document.getElementById("button-container");
  const headline = document.getElementById("headline");
  const message = document.getElementById("message");

  message.style.display = "none";
  headline.style.display = "block";
  headline.innerText = headlineTexts["start"];

  container.innerHTML = "";

  const btnA = document.createElement("button");
  btnA.className = "choice";
  btnA.innerText = "Buyrun Benim";
  btnA.onclick = () => {
    playMusic();
    nextStep("a1");
  };
  container.appendChild(btnA);

  const btnB = document.createElement("button");
  btnB.className = "choice";
  btnB.innerText = "O kim?";
  btnB.onclick = () => {
    playMusic();
    nextStep("b1");
  };
  container.appendChild(btnB);
}

function playMusic() {
  const audio = document.getElementById("background-music");
  if (audio.paused) {
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }
}

window.onload = () => {
  startScreen();
};
