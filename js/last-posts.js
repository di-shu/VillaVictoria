let counter = 0;
export default function getPosts() {
    $.ajax({
        url: "https://www.instagram.com/"+'villa.victoria.od'+"/?__a=1",
        success(data) {
          const edges = data.graphql.user.edge_owner_to_timeline_media.edges
          edges.forEach((item, i) => {
              counter+=200;
            let itemSrc = item.node.display_url
            if(i<3) {
                $('#instafeed').append(
                    `<a target="_blank" data-aos-duration="1400" data-aos="type1a" data-aos-delay= ${counter} href="https://www.instagram.com/p/` +
                    item.node.shortcode +
                    '/" class="instafeed__box" target="_blank" id="' +
                    i +
                    '"><img class="instafeed__img" src="' +
                    itemSrc +
                    '" /></a>'
                  )
            }
           
          })
        }
      })
}

