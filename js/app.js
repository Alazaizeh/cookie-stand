"use strict";

let storesArray = [];

function sales(storeName, minimumCustomers, maximumCustomers, averageCookies) {
  this.storeName = storeName;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookies = maximumCustomers;
  this.cookiesPerHoure = [];
  this.totalCookies = 0;
}

sales.prototype.getRandomCustomers = function () {
  let min = Math.ceil(this.minimumCustomers);
  let max = Math.floor(this.maximumCustomers);
  return Math.floor(Math.random() * (max - min) + min);
};

sales.prototype.getCookiesPerHoure = function () {
  let customers = this.getRandomCustomers();
  let cookies = customers * this.averageCookies;

  return cookies;
};
sales.prototype.setCookiesPerHoure = function () {
  for (let i = 0; i < 14; i++) {
    this.cookiesPerHoure[i] = Math.ceil(this.getCookiesPerHoure());
    this.totalCookies += this.cookiesPerHoure[i];
  }
};

sales.prototype.tableHeader = function () {
  let salesHour = [
    "6:00am	",
    "7:00am",
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "Daily Location Total",
  ];

  let salesTable = document.getElementById("table");
  let salesRow = document.createElement("tr");
  let salesCol = document.createElement("th");

  salesCol = document.createElement("th");
  salesCol.textContent = "";
  salesRow.appendChild(salesCol);
  salesTable.appendChild(salesRow);

  for (let index = 0; index < salesHour.length; index++) {
    salesCol = document.createElement("th");
    salesCol.textContent = salesHour[index];
    salesRow.appendChild(salesCol);
    salesTable.appendChild(salesRow);
  }
  salesRow = document.createElement("tr");
};

sales.prototype.tableFooter = function () {
  let dailySum = [];
  for (let index = 0; index < 14; index++) {
    dailySum[index] = 0;
  }
  for (let index = 0; index < storesArray.length; index++) {
    for (let j = 0; j < 14; j++) {
      dailySum[j] += storesArray[index].cookiesPerHoure[j];
    }
  }

  let salesTable = document.getElementById("table");
  let salesRow = document.createElement("tr");
  let salesCol = document.createElement("th");

  salesCol = document.createElement("th");
  salesCol.textContent = "Totals";
  salesRow.appendChild(salesCol);
  salesTable.appendChild(salesRow);
  let totalTotal = 0;

  for (let index = 0; index < dailySum.length; index++) {
    salesCol = document.createElement("th");
    salesCol.textContent = dailySum[index];
    totalTotal += dailySum[index];
    salesRow.appendChild(salesCol);
    salesTable.appendChild(salesRow);
  }

  salesCol = document.createElement("th");
  salesCol.textContent = totalTotal;
  salesRow.appendChild(salesCol);
  salesTable.appendChild(salesRow);
};

sales.prototype.renderList = function () {
  this.setCookiesPerHoure();

  let salesTable = document.getElementById("table");
  let salesRow = document.createElement("tr");
  let salesCol = document.createElement("th");

  salesCol = document.createElement("th");
  salesCol.textContent = this.storeName;
  salesRow.appendChild(salesCol);
  salesTable.appendChild(salesRow);

  for (let index = 0; index < this.cookiesPerHoure.length + 1; index++) {
    salesCol = document.createElement("th");
    salesCol.textContent = this.cookiesPerHoure[index];
    if (index == this.cookiesPerHoure.length) {
      salesCol.textContent = this.totalCookies;
    }
    salesRow.appendChild(salesCol);
    salesTable.appendChild(salesRow);
  }

  storesArray.push(this);
};

let Seattle = new sales("Seatile", 23, 65, 6.3);
Seattle.tableHeader();
Seattle.renderList();

let Tokyo = new sales("Tokyo", 3, 24, 1.2);
Tokyo.renderList();

let Dubai = new sales("Dubai", 11, 38, 3.7);
Dubai.renderList();

let Paris = new sales("Paris", 20, 38, 2.3);
Paris.renderList();

let Lima = new sales("Lima", 2, 16, 4.6);
Lima.renderList();

Lima.tableFooter();
