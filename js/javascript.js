document.addEventListener('DOMContentLoaded', function () {


    const isResponsiveMode = window.innerWidth < 768;
    const global1 = document.querySelector('.global1');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    global1.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    global1.style.opacity = 1
                } else {
                    global1.style.left = '-500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    global1.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(global1);

    }

    const texte1 = document.querySelector('.texte-col');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    texte1.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    texte1.style.opacity = 1
                } else {
                    texte1.style.left = '300px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    texte1.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(texte1);

    }


    const card1 = document.querySelector('.card1');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    card1.style.top = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    card1.style.opacity = 1
                } else {
                    card1.style.top = '30px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    card1.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(card1);

    }

    const card2 = document.querySelector('.card2');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    card2.style.top = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    card2.style.opacity = 1
                } else {
                    card2.style.top = '70px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    card2.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(card2);

    }

    const card3 = document.querySelector('.card3');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    card3.style.top = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    card3.style.opacity = 1
                } else {
                    card3.style.top = '100px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    card3.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(card3);

    }

    const sport1 = document.querySelector('#sport1');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    sport1.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    sport1.style.opacity = 1
                } else {
                    sport1.style.left = '-500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    sport1.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(sport1);

    }

    const sport2 = document.querySelector('#sport2');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    sport2.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    sport2.style.opacity = 1
                } else {
                    sport2.style.left = '-500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    sport2.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(sport2);

    }

    const sport3 = document.querySelector('#sport3');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    sport3.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    sport3.style.opacity = 1
                } else {
                    sport3.style.left = '-500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    sport3.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(sport3);

    }

    const sport4 = document.querySelector('#sport4');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    sport4.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    sport4.style.opacity = 1
                } else {
                    sport4.style.left = '500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    sport4.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(sport4);

    }

    const sport5 = document.querySelector('#sport5');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    sport5.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    sport5.style.opacity = 1
                } else {
                    sport5.style.left = '500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    sport5.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(sport5);

    }

    const sport6 = document.querySelector('#sport6');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    sport6.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    sport6.style.opacity = 1
                } else {
                    sport6.style.left = '500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    sport6.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(sport6);

    }

    const imagevert = document.querySelector('.image-vert');

    if (!isResponsiveMode) { // permet de dire que ( si la width de la xindow est plus grand que 768px, faire le code qui suit )   le ! inverse le signe qu'on a mit plus hait 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est à 50% ou plus visible à l'écran
                    imagevert.style.left = '0px'; // Faites apparaître la div en déplaçant son margin-left à 0 (position d'origine)
                    imagevert.style.opacity = 1
                } else {
                    imagevert.style.left = '-500px'; // Remettre la valeur par défaut pour permettre à l'élément de suivre son flux normal
                    imagevert.style.opacity = 0
                }
            });
        }, 
        {
            threshold: 0.2 // Définir le seuil de visibilité ( peut pas mettre plus sinon ca décleche pas car hors zone de mon observer )
        });

        observer.observe(imagevert);

    }

});