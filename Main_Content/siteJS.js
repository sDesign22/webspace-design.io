	/*************************************************************************** Scripts ****************************************************************/
			/**************************************************************************************************************************************/

     /************************** ** Menu Toggle ** ***************************/
function ToggleMenu() {
	if (menu_links.style.display == "initial" ) {
		menu_links.style.display = "none";
		menu.style.width = "initial";
		menu.style.padding = "initial";
	} else {
		menu_links.style.display = "initial";
		menu.style.padding = "1%";
		menu.style.width = "15%";
	}
}