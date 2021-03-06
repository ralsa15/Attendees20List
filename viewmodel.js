// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define([ 'text!./viewmodel.html'], function( htmlString) {
	/**
	 * COMPONENT MODEL CONSTRUCTOR
	 */
	function viewmodel(params) {
	    //var thisUserAccount ;          
        //    $(document).ready(function() {
        //        thisUserAccount= $().SPServices.SPGetCurrentUser({
        //            fieldName: "Title",
        //            debug: false
        //        });
        //    });
        //CallClientOM();
        //alert(_spPageContextInfo.userId);
        //setText("cd00ad1e-9de1-c302-bb6f-3deed79056fb",_spPageContextInfo.userID);
        setText('cd00ad1e-9de1-c302-bb6f-3deed79056fb','Weber, Tim');
        setText('128cce0f-afa6-665e-177e-f20ad0380ee3','Weber, Tim');
        //setText("128cce0f-afa6-665e-177e-f20ad0380ee3",thisUserAccount);
	}
	
	/**
	 * COMPONENT MODEL METHODS
	 */
	(function(){
	}).call(viewmodel.prototype);
	
    // Return component definition
	return { viewModel: viewmodel, template: htmlString };
});

 //@ sourceURL=viewmodel
 
 function CallClientOM()
{
var context = new SP.ClientContext.get_current();
this.website = context.get_web();
this.currentUser = website.get_currentUser();
context.load(currentUser);
context.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

}

function onQuerySucceeded(sender, args)
 {
 alert(currentUser.get_loginName());
 }

function onQueryFailed(sender, args)
{
alert('request failed ' + args.get_message() + '\n'+ args.get_stackTrace());
}

function setText(id,newvalue) {
  var s= document.getElementById(id);
  //alert('value: ' + s.value);
  s.value = newvalue;
    //alert(newvalue + ' ' + id);
}    
window.onload=function() {
  setText('cd00ad1e-9de1-c302-bb6f-3deed79056fb',_spPageContextInfo.userID);
  setText('128cce0f-afa6-665e-177e-f20ad0380ee3',_spPageContextInfo.userID);
  alert(_spPageContextInfo.userId);
}