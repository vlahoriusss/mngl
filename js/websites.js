(function() {
  'use strict';

  var websites = document.getElementById('websites');
  var websiteData = [
    {
      href: 'https://www.google.com',
      name: 'Google',
      icon: 'images/google.png'
    },
    {
      href: 'https://www.youtube.com',
      name: 'YouTube',
      icon: 'images/youtube.png'
    },
    {
      href: 'https://www.twitter.com',
      name: 'X',
      icon: 'images/twitter.png'
    },
    {
      href: 'https://www.discord.com/app',
      name: 'Discord',
      icon: 'images/discord.png'
    },
    {
      href: 'https://www.github.com',
      name: 'Github',
      icon: 'images/github.png'
    },
    {
      href: 'https://vlahoriusss.github.io/mnglchat',
      name: 'MnglChat',
      icon: '/favicon.svg'
    }
  ];

  websiteData.forEach((website) => {
    var element = document.createElement('a');
    element.href = website.href;
    websites.appendChild(element);

    var iconHolder = document.createElement('div');
    iconHolder.classList.add('icon-holder');
    element.appendChild(iconHolder);

    var icon = document.createElement('img');
    icon.src = website.icon;
    iconHolder.appendChild(icon);

    var name = document.createElement('div');
    name.classList.add('name');
    name.textContent = website.name;
    element.appendChild(name);
  });
})();
