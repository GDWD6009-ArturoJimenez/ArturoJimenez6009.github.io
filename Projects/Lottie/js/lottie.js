// Monster
let animationMonster = document.getElementById("animationMonster");

// Toggle
let animationToggle = document.getElementById("animationToggle");

let Toggle_c = 0;


let Monster = bodymovin.loadAnimation({
      container: animationMonster,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/a528cdb0-ff94-4e09-8153-cb6f827f6bc6/SPLQ4nxEBy.json"
    });

    animationMonster.addEventListener('click', function() {
        Monster.playSegments([3,215], true);
        c = c + 1;

        Monster.playSegments([216,302], true);
        c = 0;
      });
      


let Toggle = bodymovin.loadAnimation({
      container: animationToggle,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/567a8d3f-9371-4db9-9c41-6df6aefa9138/KjJA35docb.json"
    });

    animationToggle.addEventListener('click', function() {
       Toggle.playSegments([1,60], true);
        Toggle_c = Toggle_c + 1;

        Toggle.playSegments([61,120], true);
        Toggle_c = 0;
      });