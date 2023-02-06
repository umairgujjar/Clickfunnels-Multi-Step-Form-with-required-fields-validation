<script>
$(function(){
  $('[data-show-button-ids]').click(function(event){
    var showRowId = $(this).attr('data-show-button-ids');
    var hideRowId = $(this).attr('data-hide-button-ids');
    
    var showRowIds = showRowId.split(',');
    var hideRowIds = hideRowId.split(',');
    
    var err = false;
    
    
    $.each( hideRowIds, function( i, val ) {
    var inputs = $( "#" + val ).find('.required1');
    inputs.each(function() {
      if( !$(this).val() ) {
      //  $(this).parents('.elInputWrapper').addClass('warning');
          $(this).addClass('warning');
        err = true;
      }
    });
 });
    
	if(err){
		setTimeout(function(){
          
          $.each( hideRowIds, function( i, val ) {
           $( "#" + val ).show();
          });
		  
		  $.each( showRowIds, function( i, val ) {
           $( "#" + val ).hide();
          });
          
          
		//$('#'+showRowId).hide();
		//$('#'+hideRowId).show();
		}, 500);
		
		
		
    window.scroll({
  top: $("#"+hideRowIds[0]).offset().top, 
  left: 0, 
  behavior: 'smooth'
});
		
	}
    
 });
});
</script>

<style>
.warning {
  border: 3px solid red;
}
</style>
