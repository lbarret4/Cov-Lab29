$(document).ready(function () {

    let $post = $('#post');
    getChirps();

    $post.on('click', (e) => {
        e.preventDefault();
        let $chirpText = $('#chirpText');
        let chirp = $chirpText.val();
        postChirp(chirp);
    });


    $('#chirpsModal').on('show.bs.modal', (e) => {
        let $li = $(e.relatedTarget);
        let $p = $li.children('p');
        let currentText = $p.text();

        let $modal = $(this);
        $modal.find('.modal-body textarea').val(currentText);

        $("#save").on('click', (e) => {
            e.preventDefault();
            updateChirp($li.attr('id'));
            $("#save").off("click");
        });
    });

    $('#chirpsModal').on('hide.bs.modal', (e) => {

        $("#save").off("click");

    });

    $('.deleteChirp').on('click', (e) => {
        let $li = $(e.target).parent().parent();
        let closeAttr = "data-toggle data-target";
        $li.removeAttr(closeAttr);
        deleteChirp($li.attr('id'));
    });


});