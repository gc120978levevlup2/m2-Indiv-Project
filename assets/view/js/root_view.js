export const root_view = () => {
    let root = document.getElementById("root");
    if (root) {
    root.innerHTML = /*html*/ `

        <div class="content">
            <br /><br /><br /><br />
            <div id="data1" style="width:100%"></div>
            <div id="footer1" class="footer1" style="width:100%"></div>
        </div>
        <div id="nav1" style="width:100%"></div>

    `/*html*/
    }
} 