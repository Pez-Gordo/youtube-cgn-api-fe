$(document).ready(function() {
    //var url = "https://www.globalcyclingnetwork.com/api/devtask"

    $.ajax({
        url: "assets/php/feed.php",
        type: 'post',
        dataType: 'json',     
        success: function(result) {
            console.log("Result--->",result)

            var id = result.videoData[0]._id
            console.log("ID--->",id)
            mainVid(id)
            
            //resultsLoop(data)
        }
    })

    function mainVid(id) {
        $("#video").html(`
        
        <iframe width="375" height="210" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        `)
    }

    
})