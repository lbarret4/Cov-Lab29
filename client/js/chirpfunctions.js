
function createChirp(id, text, user) {

    let $li = $(`<li class="list-group-item list-group-item-action d-flex flex-column" data-toggle="modal" data-target="#chirpsModal" id="${id}"><div class="d-flex justify-content-between "><small class="text-muted  d-flex align-self-center ">${user}</small><button type="button" class="close deleteChirp" aria-label="Close" ><span aria-hidden="true">&times;</span></button></div><p class="mx-3">${text}</p></li>`).appendTo('ul');

    let $closeBtn = $li.children().children('.deleteChirp');

    $closeBtn.on('click', (e) => {
        let $li = $(e.target).parent().parent();
        let closeAttr = "data-toggle data-target";
        $li.removeAttr(closeAttr);
        deleteChirp($li.attr('id'));
    });

    return $li;


};

function getChirps() {

    let options = {
        url: "http://localhost:3000/api/chirps",
        type: "GET",
        dataType: "json"

    };

    $.ajax(options)
        .done((json) => {
            $.each(json, (id, chirp) => {
                if (id !== "nextid") {
                    createChirp(id, chirp.text, chirp.user);
                }

            });

        }).fail((err) => {
            if (err) throw err;

        });



};

function getChirp(id) {

    let options = {
        url: `http://localhost:3000/api/chirps/${id}`,
        type: "GET",
        dataType: "json"

    };

    $.ajax(options)
        .done((json) => {

            let $li = $(`#${id}`);
            let $small = $li.children().children('small');
            let $p = $li.children('p');
            $small.text(json.user);
            $p.text(json.text);


        }).fail((err) => {
            if (err) throw err;

        });




};



function postChirp(text) {

    let chirp = {};
    chirp.user = 'Charles';
    chirp.text = text;

    let options = {
        url: "http://localhost:3000/api/chirps",
        type: "POST",
        data: JSON.stringify(chirp),
        dataType: 'json',
        contentType: 'application/json'

    };

    $.ajax(options)
        .done((resp) => {

            createChirp(resp, chirp.text, chirp.user);

        }).fail((err) => {
            if (err) throw err;

        });


};

function updateChirp(id) {
    let $modal = $('#chirpsModal');
    let $li = $(`#${id}`);
    let chirp = {};
    chirp.user = $li.find('small').text();
    chirp.text = $modal.find('.modal-body textarea').val();

    let options = {
        url: `http://localhost:3000/api/chirps/${id}`,
        type: "PUT",
        data: JSON.stringify(chirp),
        contentType: 'application/json'

    };

    $.ajax(options)
        .done((resp) => {
            let edit = $modal.find('.modal-body textarea').val();
            $li.find('p').text(edit);


        }).fail((err) => {
            if (err) throw err;

        });




};

function deleteChirp(id) {

    let options = {
        url: `http://localhost:3000/api/chirps/${id}`,
        type: "DELETE",

    };

    $.ajax(options)
        .done((resp) => {
            let $li = $(`#${id}`);
            $li.remove();


        }).fail((err) => {
            if (err) throw err;

        });




};



