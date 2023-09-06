const signupbtn=document.getElementById("signup");
const signinbtn=document.getElementById("signin");
const container=document.getElementById("container");
signupbtn.addEventListener('click',()=>{
	container.classList.add("right-panel-active");	
	})
signinbtn.addEventListener('click',()=>{
	container.classList.remove("right-panel-active");		
	})

	const signupForm = document.getElementById('signupform');
	const signupButton = document.getElementById('asignup');

function refresh(){
	
	    // Get form values
	    const name = signupForm.querySelector('input[name="Name"]').value;
	    const email = signupForm.querySelector('input[name="Email"]').value;
	    const password = signupForm.querySelector('input[name="Password"]').value;
	    const profileImage = signupForm.querySelector('input[name="ProfileImage"]').value;
	
	    // Get the selected gender (radio button)
	    const genderRadios = signupForm.querySelectorAll('input[name="Gender"]');
	    let gender = '';
	    genderRadios.forEach(radio => {		
		   if (radio.checked) {
			  gender = radio.value;
		   }
	    });
	
	    // Get the skills (comma-separated)
	    const skills = signupForm.querySelector('input[name="Skills"]').value;

	    let form =document.querySelectorAll('.form-container');
		form= document.querySelectorAll('.overlay-container')
		console.log(form)
		form.forEach((e)=>{
			e.classList.add('none')
		})

		
		let modal = document.getElementById('modal');
		modal.innerHTML =`
						<div class="overlay">
						<div class="overlay-panel overlay-left">
							<h1>Registration Successfully</h1>
							<div class="card">
								<p>${name}</p>
								<img src=${profileImage} alt=${name}>
								<div class="card-content">
									<p>Skilled @<b>  ${skills}</b></p>			
									<p>Contact @  <a href="mailto:${email}" style="color:white">${email}</a></p>
								</div>
						 </div>
							
											
							<button class="press" onclick="refresh()"> Done...</button>
						</div>
					</div>
		`
		modal.classList.remove('none')

}
	
	// Add a submit event listener to the form
	signupForm.addEventListener('submit', function (e) {
	    e.preventDefault(); // Prevent the default form submission
		refresh();	 
	});
