$( document ).ready(function () {

let $post = $('#post');

// $.get();



$post.on('click',(e) =>{
    e.preventDefault();
    let $chirpText = $('#chirpText');
    let chirp = $chirpText.val();
    $li=createChirp(chirp);
    $closeBtn =$li.children().children('.deleteChirp');

    $closeBtn.on('click',(event) =>{
        let $li= $(event.target).parent().parent();
        let closeAttr ="data-toggle data-target";
        $li.removeAttr(closeAttr);
        $li.remove();  
    });
    
});


//*Modal
$('#chirpsModal').on('show.bs.modal', function (event) {

    var $p = $(event.relatedTarget).children('p'); // Button that triggered the modal
    var currentText = $p.text(); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

    var modal = $(this);
    modal.find('.modal-body textarea').val(currentText);

    $("#save").on('click',(e) =>{
        e.preventDefault();
        let edit= modal.find('.modal-body textarea').val();

        $p.text(edit);
    
      });
    
  });

$('.deleteChirp').on('click',(event) =>{
    let $li= $(event.target).parent().parent();
    let closeAttr ="data-toggle data-target";
    $li.removeAttr(closeAttr);
    $li.remove();  
});


function createChirp(text,user="User1"){
    $li = $(`<li class="list-group-item list-group-item-action d-flex flex-column" data-toggle="modal" data-target="#chirpsModal"><div class="d-flex justify-content-between "><small class="text-muted  d-flex align-self-center ">${user}</small><button type="button" class="close deleteChirp" aria-label="Close" ><span aria-hidden="true">&times;</span></button></div><p class="mx-3">${text}</p></li>`).appendTo('ul');
    return $li;

};













});