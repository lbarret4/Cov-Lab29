$( document ).ready(function () {

//let $chirpText = $('#chirpText');
let $post = $('#post');

$post.on('click',(e) =>{
    e.preventDefault();
    let $chirpText = $('#chirpText');
    let chirp = $chirpText.val();
    $('ul').append(`<li class="list-group-item list-group-item-action d-flex flex-column" data-toggle="modal" data-target="#chirpsModal"><div class="d-flex justify-content-between "><small class="text-muted  d-flex align-self-center ">User1:</small><button type="button" class="close " aria-label="Close"><span aria-hidden="true">&times;</span></button></div><p class="mx-3">${chirp}</p></li>`);
    
});


//*Modal
$('#chirpsModal').on('show.bs.modal', function (event) {
    console.log(Event.relatedTarget);
    var li = $(event.relatedTarget).children('p'); // Button that triggered the modal
    var recipient = li.text(); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    console.log(li);
    console.log(recipient);
    var modal = $(this);
    modal.find('.modal-body textarea').val(recipient);

    $("#save").on('click',(e) =>{
        e.preventDefault();
        let edit= modal.find('.modal-body textarea').val();
        console.log(edit);
        li.text(edit);
    
      });
    
  });























});