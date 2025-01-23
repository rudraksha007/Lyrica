function insertTitle(){
    const titleElement = document.getElementById('title');
    const initialTitle = 'WELCOME TO LYRICA! 🎉';
    const newTitle = 'OUR BEST CREATIONS';
    let process = 0;

    function animateTitle(title) {
        titleElement.innerHTML = '';
        let i = 0;
        if (process) {
            clearInterval(process);
            process = 0;
        }
        process = setInterval(() => {
            if (i < title.length) {
                titleElement.innerHTML += title[i];
                i++;
            }else{
                clearInterval(process);
                process = 0;
            }
        }, 50);
    }

    function removeTitle(callback) {
        if (process) {
            clearInterval(process);
            process = 0;
        }
        const currentTitle = titleElement.innerHTML;
        let i = currentTitle.length;
        process = setInterval(() => {
            if (i > 0) {
                titleElement.innerHTML = currentTitle.slice(0, i);
                i--;
            } else {
                clearInterval(process);
                process = 0;
                if (callback) {
                    callback();
                }
            }
        }, 50);
    }

    if (window.scrollY > window.innerHeight) {
        animateTitle(newTitle);
    } else {
        animateTitle(initialTitle);
    }

    window.addEventListener('scroll', () => {
        let text = document.getElementById('title').innerHTML;
        if (window.scrollY > window.innerHeight-200 && (!text||initialTitle.startsWith(text))) {
            removeTitle(() => animateTitle(newTitle));
        } else if (window.scrollY < window.innerHeight-200 && (!text||newTitle.startsWith(text))) {
            removeTitle(() => animateTitle(initialTitle));
        }
    });

}

insertTitle();