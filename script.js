let items = document.querySelectorAll('.navbar-item li');

items.forEach((item) => {
    item.addEventListener('click' , function(e) {
        e.preventDefault()


        document.querySelector('.navbar-item li.active').classList.remove('active');
        this.classList.add('active')

        let databox = this.getAttribute('data-content')

        document.querySelector('.content li.active').classList.remove('active')
        document.querySelector(`.content li[data-content="${databox}"]`).classList.add('active')

    })
});
