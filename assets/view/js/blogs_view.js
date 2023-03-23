export const blogs_view = (blogs) => {
    let datum = blogs
    let data1 = document.getElementById("data1");
    if (data1) {
      data1.innerHTML = datum
        .map(
          (data) => /*html*/ `
              <!--  
                  card-x-id
                  card-check-id
                  greyheart-id
              -->
  
          <div class="card">
            <div class="card-image-container">
              <img
                width="100%"
                src="${data.img}"
                alt=""
                srcset=""
              />
            </div>
      
            <div class="image-gradient-mask">
              <div class="card-x" id="card-x-${data.id}">
                <span><i class="fa fa-times" aria-hidden="true"></i></span>
              </div>
            </div>
      
            <div class="card-info">
              <div class="${
                data.read ? "card-check2" : "card-check "
              }" id="card-check-${data.id}">
                <i class="fa fa-check-circle-o fa-lg" aria-hidden="false"></i>
              </div>
      
              <div class="card-title">
                <p>${data.title}</p>
              </div>
      
              <div class="card-bottom">
                <div class="card-date">${data.date}</div>
                <div class="card-likes">
                  ${
                    data.liked
                      ? `
                      <span class="blue-heart"  id="greyheart-${data.id}"
                          ><i class="fa fa-heart" aria-hidden="true"></i
                      ></span>
                  `
                      : `
                      <span class="grey-heart"  id="greyheart-${data.id}"
                      ><i class="fa fa-heart-o" aria-hidden="true"></i
                      ></span>
                  `
                  }
                  &nbsp; ${data.likes}
                </div>
              </div>
            </div>
          </div>
  
          ` /*html*/
        )
        .join("\n");
    }
} 