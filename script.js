function getFormvalue() {
    //Write your code here

	let form=document.getElementById("form1");

	const firstName=document.querySelector('input[name="fname"]').value.trim();
    const lastName =document.querySelector('input[name="lname"]').value.trim();

	const fullName=firstName+" "+lastName;
	alert(fullName);
}
