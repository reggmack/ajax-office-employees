$(document).ready(function () {
    
    $.getJSON('data/employees.json', function (data) {
        var statusHTML = '<ul class="bulleted">';
        $.each(data, function (index, employee) {
           if (employee.inoffice === true) {
              statusHTML += '<li class="in">';
           } else {
               statusHTML += '<li class="out">';
           }
            statusHTML += employee.name + '</li>';
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    });
    
    
    $.getJSON('data/rooms.json', function (data) {
        var statusHTML = '<ul class="rooms">';
        $.each(data, function (index, room) {
           if (room.available === true) {
              statusHTML += '<li class="empty">';
           } else {
               statusHTML += '<li class="full">';
           }
            statusHTML += room.room + '</li>';
        });
        statusHTML += '</ul>';
        $('#roomList').html(statusHTML);
    });
    
    var url="data/employees.json";
    $.getJSON(url, function (response) {
       var statusHTML = '<ul class="bulleted">'; 
        $.each(response, function (index, employee) {
            if (employee.inoffice === true) {
                  statusHTML += '<li class="in">';
              } else {
                  statusHTML += '<li class="out">';
              }
              statusHTML += employee.name + '</li>';
          });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    });
    
});//end ready