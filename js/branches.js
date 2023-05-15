const branchesArray = [
    ['admiralteyskaya.html', 'Адмиралтейская'],
    ['akademicheskaya.html', 'Академическая'],
    ['avtovo.html', 'Автово'],
    ['baltiyskaya.html', 'Балтийская'],
    ['buharestkaya.html', 'Бухарестская'],
    ['devyatkino.html', 'Девяткино'],
    ['grajdanskiy_prospekt.html', 'Гражданский проспект'],
    ['parnas.html', 'Парнас'],
    ['ploshad_vostaniya.html', 'Площадь восстания'],
    ['primorskaya.html', 'Приморская'],
    ['prospekt_bolshevikov.html', 'Проспект большевиков'],
    ['prospekt_prosvesheniya.html', 'Проспект просвещения'],
    ['ribatskoye.html', 'Рыбацкое'],
    ['shushary.html', 'Шушары'],
    ['vasileostrovskaya.html', 'Василеостровская'],
    ['vladimirskaya.html', 'Владимирская'],
    ['volkovskaya.html', 'Волковская']
].sort((a, b) => a[1].localeCompare(b[1]));

const branchesUl = document.querySelector('.branches__ul');
branchesArray.forEach((el) => {
    const branch = document.createElement('li');
    branch.classList.add('branches__li');
    branch.innerHTML = `<a class="branch__link link link_auto-width d-flex justify-content-center align-items-center" href="${el[0]}">${el[1]}</a>`;
    branchesUl.appendChild(branch);
});