'use strict';
setTimeout(function () {
  let ci = document.getElementById('image');
  let ci_context = ci.getContext('2d');

  let d1 = document.getElementById('uniqid_1');
  let d2 = document.getElementById('uniqid_2');
  let d3 = document.getElementById('uniqid_3');
  let d4 = document.getElementById('uniqid_4');
  let d5 = document.getElementById('uniqid_5');
  let d6 = document.getElementById('uniqid_6');
  let d7 = document.getElementById('uniqid_7');
  let d8 = document.getElementById('uniqid_8');
  let d9 = document.getElementById('uniqid_9');
  let d10 = document.getElementById('uniqid_10');

  // let d1URL = d1.toDataURL();
  // let d2URL = d2.toDataURL();
  // let d3URL = d3.toDataURL();
  // let d4URL = d4.toDataURL();
  // let d5URL = d5.toDataURL();
  // let d6URL = d6.toDataURL();
  // let d7URL = d7.toDataURL();
  // let d8URL = d8.toDataURL();
  // let d9URL = d9.toDataURL();
  // let d10URL = d10.toDataURL();

  d1.addEventListener('click', () => {
    // ci.width = d1.width;
    // ci.height = d1.height;
    // ci_context.drawImage(d1, 0, 0);
    // let dataURL = d1.toDataURL();
    console.log(dataURL);
    document.getElementById('post_image').setAttribute('src', d1.toDataURL('image/png'));
  })

  d2.addEventListener('click', () => {
    ci.width = d1.width;
    ci.height = d1.height;
    ci_context.drawImage(d2, 0, 0);
    document.getElementById('post_image').value = ci.toDataURL('image/png');
  })

  d3.addEventListener('click', () => {
    ci.width = d1.width;
    ci.height = d1.height;
    ci_context.drawImage(d3, 0, 0);
    document.getElementById('post_image').value = ci.toDataURL('image/png');
  })

  d4.addEventListener('click', () => {
    ci.width = d1.width;
    ci.height = d1.height;
    ci_context.drawImage(d4, 0, 0);
    document.getElementById('post_image').value = ci.toDataURL('image/png');
  })

  d5.addEventListener('click', () => {
    ci.width = d1.width;
    ci.height = d1.height;
    ci_context.drawImage(d5, 0, 0);
    document.getElementById('post_image').value = ci.toDataURL('image/png');
  })

}, 10000)
