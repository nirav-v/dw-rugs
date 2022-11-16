var rugGrid = document.querySelector(".rug-grid");

for (pic of rugPics) {
  // console.log(pic)
  rugGrid.innerHTML += `  
 <div class=rug-container>
    <img src = '../images/DW Rugs Photo Gallery/${pic}' alt='rug image' class='rug-pic'/>
  </div>

          `;
}
