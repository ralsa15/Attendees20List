// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define([ 'text!./viewmodel.html'], function( htmlString) {
	/**
	 * COMPONENT MODEL CONSTRUCTOR
	 */
	function viewmodel(params) {
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