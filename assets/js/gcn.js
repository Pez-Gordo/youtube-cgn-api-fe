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
            
            resultsLoop(result)
        }
    })

    function mainVid(id) {
        $("#video").html(`
        
        <iframe width="375" height="210" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        `)
    }

    function resultsLoop(result) {
        for (var i = 0; i < result.videoData.length; i++) {
            var videoId = result.videoData[i]._id
            var thumb = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
            var title = result.videoData[i].title
            var description = result.videoData[i].description.substring(0, 100)

            $("main").append(`
        
                <article class="item" data-key="${videoId}">

                    <img src="${thumb}" alt="" class="thumb">

                    <div class="details">
                        <p><strong>${title}</strong></p>
                        <p>${description}</p>
                    </div>

                </article>

            `)

            //console.log("Identifiers-->", result.videoData[i]._id)
        }
    }


    $("main").on("click", "article", function() {
        var id = $(this).attr('data-key')
        mainVid(id)
    })

    
})