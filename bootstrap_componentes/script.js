document.querySelectorAll('.vagas-button').forEach(button => button.addEventListener('click', event => {
    const card = event.target.closest('[data-company]');
    const companyKey = card?.dataset['company'];
    const company = companies[companyKey];
    
    const requirements = (company?.requirements ?? []).map(requirement => `<li>${requirement}</li>`).join('');

    document.querySelector('#company-name').textContent = company?.name ?? '';
    document.querySelector('#company-requirements').innerHTML = requirements;
    document.querySelector('#company-apply').href = `/formulario/?empresa=${companyKey}`;

    $('#aplicar-modal').modal('show');
}));