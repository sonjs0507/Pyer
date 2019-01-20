const github = "https://github.com/WooyeongCho/Pyer";

$(document).ready(function(){
  $('select').formSelect();
  $('.tooltipped').tooltip();

  chrome.storage.sync.get(['enabled'], function(result) {
    $('#es').prop('checked', result.enabled);
  });

  chrome.storage.sync.get(['selectedTheme'], function(result) {
    $('#ts').val(result.selectedTheme);
    $('#ts').formSelect();
  });

  $('#githubLink').click(function () {
    chrome.tabs.create({"url": github})
  });

  $('#upload').on('click', function() {
    $('#file-input').trigger('click');

  });

  $( "#file-input" ).change(function(event) {

  });

  $('#save').click(function () {
    let isEnabled = $('#es').prop('checked');
    let selectedTheme = $('#ts').val();
    chrome.storage.sync.set({'enabled': isEnabled});
    chrome.storage.sync.set({'selectedTheme': selectedTheme});
    console.log(`Save Changes.`);
    M.toast({html: '저장되었습니다.', displayLength: 500})
  });
});
