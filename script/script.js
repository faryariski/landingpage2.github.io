function button_submit() {
  let username = document.getElementById('username').value;
  if (username == '' || username != username) {
    alert('Silahkan isi terlebih dahulu');
  } else {
    alert('Pesan telah terkirim, Terima kasih ' + username);
  }
  document.forms[0].reset();
}
