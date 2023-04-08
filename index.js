const mainImage = document.getElementById("Main Image");
Array.from(document.querySelectorAll(".thumbnail")).forEach(t=>{
    t.addEventListener("click", () => {
        mainImage.src = `./images/image-product-${t.getAttribute("data-product")}.jpg`;
    });
})