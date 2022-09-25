$(document).ready(function () {
  let amenityIds = {};

  $('input[type=checkbox]').click(function () {
    if ($(this).prop('checked') === true) {
      amenityIds[$(this).data('id')] = $(this).data('name');
    } else if (!$(this).prop('checked') === false) {
      delete amenityIds[$(this).attr('data-id')];
    }
    $('div.amenities h4').text(Object.values(amenityIds).join(', ')); 
  });
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (data, textStatus) {
      console.log(data.status);
      if (data.status ==='success') {
        $('#api-status').addClass('available');
      } else {
      $('#api-status').removeClass('available');
      }
    }
  });
});
