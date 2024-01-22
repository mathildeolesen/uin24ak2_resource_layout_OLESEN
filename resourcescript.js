
    const navbuttons = document.querySelectorAll("nav ul li button");
    const main = document.getElementsByTagName("main")

    let resourceHTML = ""
    
    function updateArticle(resource) {

        let sourcesList = resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('');

        resourceHTML = `<article>
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>${sourcesList}</ul>
            </article>
        `;

        main[0].innerHTML = resourceHTML
    }

    function selectCategory(categoryId) {
        const resource = resources.find(res => res.category.toLowerCase() === categoryId.toLowerCase());
        // .toLowerCase : Gjør om alt til små bokstaver så de kan sammenlignes. I ressurser er kategoriene med Store og små bokstaver, 
        // mens html class og id bruker små bokstaver (ifølge best practice).
        if (resource) {
            updateArticle(resource);
        }

         // Fjern "selected" klasse fra alle button
         navbuttons.forEach(button => {
            button.classList.remove("selected");
        });

        // Legg til "selected" klasse til den trykte button
        const activeButton = document.getElementById(categoryId);
        if (activeButton) {
            activeButton.classList.add("selected");
        }
    }

    // Sett opp event listeners for alle button
    navbuttons.forEach(button => {
        button.addEventListener("click", () => {
            selectCategory(button.id);
        });
    });

    
    // Setter HTML som startvalg ved start
    selectCategory("html");
    

