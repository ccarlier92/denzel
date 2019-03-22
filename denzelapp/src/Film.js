const graphqlPath = "http://localhost:9292/graphql"

function initMovie() {
    const query="{random {title link poster metascore synopsis year}}";
    $.ajax({
        url: graphqlPath+"?query="+query,
        dataType:"json",
        method: "GET",
        header: {
            'Content-Type':'application/graphql',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        success:function(msg) {
            const movie=msg.data.movie;
            $('#movieTitle').html(movie.title);
            $('#movieTitle').attr('href',movie.link);
            $('#poster').attr('src',movie.poster);
            $('#synopsis').html(movie.synopsis);
            $('#year').html(movie.year);
            $('#metascore').html(movie.metascore);
            /*$.ajax({
                url: graphqlPath+"?query={review(movieId:\""+movie.id+"\") {\n" +
                    "  date\n" +
                    "  review\n" +
                    "}}",
                dataType:"json",
                method: "GET",
                header: {
                    'Content-Type':'application/graphql',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true
                },
                success:function(review) {
                    const reviewArray=review.data.review;
                    var html = template('reviewScript', {review:reviewArray});
                    document.getElementById('reviewTable').innerHTML = html;
                }
            });*/
        }
    });

}

initMovie();