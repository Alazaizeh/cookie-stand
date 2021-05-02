"use strict";

// --------------> Seattle Seattle Seattle <---------------------

let Seattle = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookies: 6.3,
  cookiesPerHoure: [],
  totalCookies: 0,
  getRandomCustomers: function () {
    let min = Math.ceil(this.minimumCustomers);
    let max = Math.floor(this.maximumCustomers);
    return Math.floor(Math.random() * (max - min) + min);
  },

  getCookiesPerHoure: function () {
    let customers = this.getRandomCustomers();
    let cookies = customers * this.averageCookies;

    return cookies;
  },
  setCookiesPerHoure: function () {
    for (let i = 0; i < 14; i++) {
      this.cookiesPerHoure[i] = Math.ceil(this.getCookiesPerHoure());
      this.totalCookies += this.cookiesPerHoure[i];
    }
  },
  renderList: function () {
    this.setCookiesPerHoure();

    let container = document.getElementById("home");
    let devcontainer = document.createElement("div");
    let shopTitle = document.createElement("h1");
    shopTitle.textContent = "Seattle";
    devcontainer.appendChild(shopTitle);
    let cookiesList = document.createElement("ul");

    for (let index = 0; index < 14; index++) {
      let listItem = document.createElement("li");
      listItem.textContent = this.cookiesPerHoure[index];
      cookiesList.appendChild(listItem);
    }

    devcontainer.appendChild(cookiesList);
    let cookiesTotal = document.createElement("h3");
    cookiesTotal.textContent = `Total : ${this.totalCookies}`;
    devcontainer.appendChild(cookiesList);
    devcontainer.appendChild(cookiesTotal);

    container.appendChild(devcontainer);
  },
};

// --------------> Tokyo Tokyo Tokyo <---------------------
let Tokyo = {
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookies: 1.2,
  cookiesPerHoure: [],
  totalCookies: 0,
  getRandomCustomers: function () {
    let min = Math.ceil(this.minimumCustomers);
    let max = Math.floor(this.maximumCustomers);
    return Math.floor(Math.random() * (max - min) + min);
  },

  getCookiesPerHoure: function () {
    let customers = this.getRandomCustomers();
    let cookies = customers * this.averageCookies;

    return cookies;
  },
  setCookiesPerHoure: function () {
    for (let i = 0; i < 14; i++) {
      this.cookiesPerHoure[i] = Math.ceil(this.getCookiesPerHoure());
      this.totalCookies += this.cookiesPerHoure[i];
    }
  },
  renderList: function () {
    this.setCookiesPerHoure();

    let container = document.getElementById("home");
    let devcontainer = document.createElement("div");
    let shopTitle = document.createElement("h1");
    shopTitle.textContent = "Tokyo";
    devcontainer.appendChild(shopTitle);
    let cookiesList = document.createElement("ul");

    for (let index = 0; index < 14; index++) {
      let listItem = document.createElement("li");
      listItem.textContent = this.cookiesPerHoure[index];
      cookiesList.appendChild(listItem);
    }

    devcontainer.appendChild(cookiesList);
    let cookiesTotal = document.createElement("h3");
    cookiesTotal.textContent = `Total : ${this.totalCookies}`;
    devcontainer.appendChild(cookiesList);
    devcontainer.appendChild(cookiesTotal);
    container.appendChild(devcontainer);
  },
};

// --------------> Dubai Dubai Dubai <---------------------

let Dubai = {
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookies: 3.7,
  cookiesPerHoure: [],
  totalCookies: 0,
  getRandomCustomers: function () {
    let min = Math.ceil(this.minimumCustomers);
    let max = Math.floor(this.maximumCustomers);
    return Math.floor(Math.random() * (max - min) + min);
  },

  getCookiesPerHoure: function () {
    let customers = this.getRandomCustomers();
    let cookies = customers * this.averageCookies;

    return cookies;
  },
  setCookiesPerHoure: function () {
    for (let i = 0; i < 14; i++) {
      this.cookiesPerHoure[i] = Math.ceil(this.getCookiesPerHoure());
      this.totalCookies += this.cookiesPerHoure[i];
    }
  },
  renderList: function () {
    this.setCookiesPerHoure();

    let container = document.getElementById("home");
    let devcontainer = document.createElement("div");
    let shopTitle = document.createElement("h1");
    shopTitle.textContent = "Dubai";
    devcontainer.appendChild(shopTitle);
    let cookiesList = document.createElement("ul");

    for (let index = 0; index < 14; index++) {
      let listItem = document.createElement("li");
      listItem.textContent = this.cookiesPerHoure[index];
      cookiesList.appendChild(listItem);
    }

    devcontainer.appendChild(cookiesList);
    let cookiesTotal = document.createElement("h3");
    cookiesTotal.textContent = `Total : ${this.totalCookies}`;
    devcontainer.appendChild(cookiesList);
    devcontainer.appendChild(cookiesTotal);
    container.appendChild(devcontainer);
  },
};

// --------------> Paris Paris Paris <---------------------

let Paris = {
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookies: 2.3,
  cookiesPerHoure: [],
  totalCookies: 0,
  getRandomCustomers: function () {
    let min = Math.ceil(this.minimumCustomers);
    let max = Math.floor(this.maximumCustomers);
    return Math.floor(Math.random() * (max - min) + min);
  },

  getCookiesPerHoure: function () {
    let customers = this.getRandomCustomers();
    let cookies = customers * this.averageCookies;

    return cookies;
  },
  setCookiesPerHoure: function () {
    for (let i = 0; i < 14; i++) {
      this.cookiesPerHoure[i] = Math.ceil(this.getCookiesPerHoure());
      this.totalCookies += this.cookiesPerHoure[i];
    }
  },
  renderList: function () {
    this.setCookiesPerHoure();

    let container = document.getElementById("home");
    let devcontainer = document.createElement("div");
    let shopTitle = document.createElement("h1");
    shopTitle.textContent = "Paris";
    devcontainer.appendChild(shopTitle);
    let cookiesList = document.createElement("ul");

    for (let index = 0; index < 14; index++) {
      let listItem = document.createElement("li");
      listItem.textContent = this.cookiesPerHoure[index];
      cookiesList.appendChild(listItem);
    }

    devcontainer.appendChild(cookiesList);
    let cookiesTotal = document.createElement("h3");
    cookiesTotal.textContent = `Total : ${this.totalCookies}`;
    devcontainer.appendChild(cookiesList);
    devcontainer.appendChild(cookiesTotal);
    container.appendChild(devcontainer);
  },
};

// --------------> Lima Lima Lima <---------------------

let Lima = {
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookies: 4.6,
  cookiesPerHoure: [],
  totalCookies: 0,
  getRandomCustomers: function () {
    let min = Math.ceil(this.minimumCustomers);
    let max = Math.floor(this.maximumCustomers);
    return Math.floor(Math.random() * (max - min) + min);
  },

  getCookiesPerHoure: function () {
    let customers = this.getRandomCustomers();
    let cookies = customers * this.averageCookies;

    return cookies;
  },
  setCookiesPerHoure: function () {
    for (let i = 0; i < 14; i++) {
      this.cookiesPerHoure[i] = Math.ceil(this.getCookiesPerHoure());
      this.totalCookies += this.cookiesPerHoure[i];
    }
  },
  renderList: function () {
    this.setCookiesPerHoure();

    let container = document.getElementById("home");
    let devcontainer = document.createElement("div");
    let shopTitle = document.createElement("h1");
    shopTitle.textContent = "Lima";
    devcontainer.appendChild(shopTitle);
    let cookiesList = document.createElement("ul");

    for (let index = 0; index < 14; index++) {
      let listItem = document.createElement("li");
      listItem.textContent = this.cookiesPerHoure[index];
      cookiesList.appendChild(listItem);
    }

    devcontainer.appendChild(cookiesList);
    let cookiesTotal = document.createElement("h3");
    cookiesTotal.textContent = `Total : ${this.totalCookies}`;
    devcontainer.appendChild(cookiesList);
    devcontainer.appendChild(cookiesTotal);
    container.appendChild(devcontainer);
  },
};

Seattle.renderList();
Tokyo.renderList();
Dubai.renderList();
Paris.renderList();
Lima.renderList();
