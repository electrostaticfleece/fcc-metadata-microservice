"use strict";

$(document).ready(function(){
  var files;
  $('input[type=file]').on('change', prepUpload);
  $('#form').on('submit', uploadFiles);

  function prepUpload(e){
    files = e.target.files;
  }

  function uploadFiles(e){
    e.stopPropagation();
    e.preventDefault();

    var data = new FormData();
    $.each(files, function(key, value){
      data.append(key,value);
    });

    $.ajax({
      url: window.location.origin + '/api/analyze/',
      type: 'POST',
      data: data,
      cache: false,
      processData: false,
      contentType: false,
      success: function(data){
        alert('The size of your file is: ' + data.size + ' bytes.');
      },
      error: function(jqXHR, testStatus, errorThrown){
        console.log('ERRORS:' + textStatus);
      }
    });
  }
});