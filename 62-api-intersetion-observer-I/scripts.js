
const boxes = document.querySelectorAll('.box');

const callback = (entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(`${entry.target.textContent} is intersecting`);
        }
    });
}

const options = {
    //root:
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(callback, options)

boxes.forEach(element => {
    observer.observe(element);
});

