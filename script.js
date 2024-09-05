document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('Ey ka muna kapag lumabas to eyyyyy HAHAHHAAHA');
});

document.querySelectorAll(".project-title").forEach((title, index) => {
    title.addEventListener("click", () => {
        const backgrounds = [
            'url("Images/background1.webp")',
            'url("Images/background2.webp")',
            'url("Images/background3.webp")'
        ];

        document.body.style.backgroundImage = backgrounds[index];
        document.body.style.backgroundSize = "cover";  
        document.body.style.backgroundRepeat = "no-repeat"; 
        document.body.style.backgroundAttachment = "fixed"; 
    });
});