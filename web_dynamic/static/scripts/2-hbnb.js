window.addEventListener('load', function () {
  const amenityIds = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityIds[$(this).attr('data-id')];
    }
    if (Object.keys(amenityIds).length === 0) {
      $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenityIds).join(', '));
    }
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