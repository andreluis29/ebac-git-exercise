$(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    const tarefa = $('input').val();
    $(`<li>${tarefa}</li>`).appendTo('ol');
    $('input').val('');
    $('li').on('click', function(e) {
      e.target.style = "text-decoration: line-through;"
    });
  });
});