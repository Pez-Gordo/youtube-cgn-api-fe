$(document).ready(function() {
    //var url = "https://www.globalcyclingnetwork.com/api/devtask"

    $.ajax({
        url: "assets/php/feed.php",
        type: 'post',
        dataType: 'json',     
        success: function(result) {
            console.log(result)
        }
    })
})