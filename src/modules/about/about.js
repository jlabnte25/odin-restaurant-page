import './about.css';

export function loadAbout () {
    const content = document.getElementById('content');
    content.innerHTML = '';

	const branchContainer = document.createElement('div');
	branchContainer.className = 'branchContainer';

	const branches = [
		{
			address: '10 Mga Daliri Kamay at Paa',
			phone: '(555) 123-4567',
		},
		{
			address: '2 Tenga 2 Paa Ilong na Maganda',
			phone: '(555) 234-5678',
		},
		{
			address: '123 Eyka Muna Ey',
			phone: '(555) 345-6789',
		},
	];

	branches.forEach((branch) => {
		const card = document.createElement('div');
		card.className = 'branch'; 

        const address = document.createElement('p');
		address.className = 'address';
		address.textContent = `Address: ${branch.address}`;
		card.appendChild(address);

		const phone = document.createElement('p');
		phone.className = 'phone';
		phone.textContent = `Phone: ${branch.phone}`;
		card.appendChild(phone);

		branchContainer.appendChild(card);
	});

	content.appendChild(branchContainer);
}

