const companyKey = new URLSearchParams(location.search).get('empresa');
const company = companies[companyKey];

if (!company) {
    document.body.innerHTML = '<p>Empresa não encontrada</p>'
} else {
    document.querySelector('#company-name').textContent = company.name;
}
