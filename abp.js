/*Start What do they say-carousel non automativ*/
$('.carousel').carousel({
  interval: false,
});
/*End What do they say*/


$('#pagging-team').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 35],
    pageSize: 5,
    autoHidePrevious: true,
    autoHideNext: true,
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})
