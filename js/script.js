// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars

  function multiplyNumbers() {
  const num1 = parseInt(document.getElementById('number1').value)
  const num2 = parseInt(document.getElementById('number2').value)
  let result = 0
  let count = 0

  while (count < num2) {
    result = result + num1
    count++
  }

  document.getElementById('multiply-result').innerHTML = `<p><strong>${num1} x ${num2} = ${result}</strong></p>`
}