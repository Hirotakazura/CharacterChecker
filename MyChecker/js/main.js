(function() {
  'use strict';

  let cards = document.getElementById('cards');
  let check = document.getElementById('check');
  let retry = document.getElementById('retry');
  let userName = document.getElementById('user_name');

  userName.focus();

  check.addEventListener('click', function() {
    let msgs = [
      '究極の進化を遂げた',
      '太古より蘇った',
      '最も恐れられた'
    ];
    var jobs = [
      {name: '勇者', img: 'hero.gif'},
      {name: '魔法使い', img: 'wizard.gif'},
      {name: '武闘家', img: 'fighter.gif'}
    ];
    var types = [
      {name: '全てを焼き尽くす', img: 'bg-fire'},
      {name: '浄化する', img: 'bg-water'},
      {name: '怒りを鎮める', img: 'bg-thunder'}
    ];

    let msg;
    let job;
    let type;

    let resultImg = document.getElementById('result_img');
    let tweet = document.getElementById('tweet');
    let tweetUrl;

    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function setTextContent(id, text) {
      document.getElementById(id).textContent = text;
    }

    if (userName.value === '' || userName.value.length > 10) {
      userName.value = '名無し';
    }

    msg = getRandomElement(msgs);
    job = getRandomElement(jobs);
    type = getRandomElement(types);

    tweetUrl =
      'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent(
        userName.value + 'さんは' +
        msg +
        job.name + 'でした！'
      ) +
      '&hashtags=dotinstall';

    setTextContent('result_name', userName.value);
    setTextContent('result_msg', msg);
    setTextContent('result_job', job.name);
    resultImg.children[0].src = 'img/' + job.img;
    setTextContent('result_type', type.name);
    resultImg.className = 'left-side ' + type.img;
    tweet.href = tweetUrl;

    cards.className = 'move';
  });

  retry.addEventListener('click', function() {
    cards.className = '';
    userName.value = '';
    userName.focus();
  });
})();
