function clickImage() {
    $('.thumbnail').on('click', (e) => {
        const imageSrc = $(e.currentTarget).find('img').attr('src');
        const imageAlt = $(e.currentTarget).find('img').attr('alt');

        $('.hero img').attr('src', imageSrc).attr('alt', imageAlt);
    });
}

$(clickImage);