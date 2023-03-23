import { blogs       } from "../../../assets/model/blogs.js"
import { root_view   } from "../../../assets/view/js/root_view.js"
import { header_view } from "../../../assets/view/js/header_view.js"
import { footer_view } from "../../../assets/view/js/footer_view.js"
import { blogs_view  } from "../../../assets/view/js/blogs_view.js"

// this function refreshes the index html contents
let refresh_view = (datum) => {
  root_view()
  header_view()
  blogs_view(datum)
  footer_view()
};

// this function creates events and assign to the individual blogs card
let assign_events = (datum) => {
  for (let data of datum) {

    // create click event when deleting a blog
    let delete_blog_btn = document.getElementById(`card-x-${data.id}`)
    if (delete_blog_btn) {
      delete_blog_btn.addEventListener("click", (e) => {
        const id = parseInt(delete_blog_btn.id.replace(`card-x-`, ""))
        let a = [...datum.filter((x) => x.id !== id)];
        refresh_view (a)
        assign_events(a)
      })
    }

    // create click event when marked blog as read
    let mark_read_blog_btn = document.getElementById(`card-check-${data.id}`)
    if (mark_read_blog_btn) {
      mark_read_blog_btn.addEventListener("click", (e) => {
        const id = parseInt(mark_read_blog_btn.id.replace(`card-check-`, ""))
        let a = datum.filter((x) => x.id === id)
        let index = datum.indexOf(a[0]);
        datum[index].read = !datum[index].read
        refresh_view (datum)
        assign_events(datum)
      });
    }

    // create like button event
    let like_btn = document.getElementById(`greyheart-${data.id}`);
    if (like_btn) {
      like_btn.addEventListener("click", (e) => {
        const id = parseInt(like_btn.id.replace(`greyheart-`, ""));
        console.log(id);
        let a = datum.filter((x) => x.id === id)
        let index = datum.indexOf(a[0]);
        datum[index].liked = !datum[index].liked
        refresh_view (datum)
        assign_events(datum)
      });
    }

  }
}

refresh_view(blogs)
assign_events(blogs)
