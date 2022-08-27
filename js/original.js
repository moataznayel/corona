let mySelect = document.querySelector('select')
let myDiv = document.querySelector('.row')
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8f0e720970msh344c0063ed65a8fp10e788jsn09779396c02e',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};
fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
    .then(response => response.json())
    .then(r => {
        r.map((d) => {
            let x = `<option>${d.Country}</option>`
            mySelect.innerHTML += x
            mySelect.addEventListener('change', () => {
                let newData = `<p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.Population}</span>عدد السكان</p>
                                <p class="col-lg-4 col-md-6 col-sm-12 mb-5 "><span>${d.NewDeaths}</span>الوفيات الجديده</p>           
                                <p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.NewCases}</span>الحالات الجديده</p>
                                <p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.TotalDeaths}</span>اجمالي عدد الوفيات</p>
                                <p class="col-lg-4 col-md-6 col-sm-12 mb-5 "><span>${d.TotalCases}</span>اجمالي عدد المصابين</p>
                                <p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.TotalTests}</span>اجمالي عدد الاختبارات</p> `
                if (mySelect.value == d.Country) {
                    myDiv.innerHTML = newData
                }
            })

            let newData = `<p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.Population}</span>عدد السكان</p>
                <p class="col-lg-4 col-md-6 col-sm-12 mb-5 "><span>${d.NewDeaths}</span>الوفيات الجديده</p>           
                <p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.NewCases}</span>الحالات الجديده</p>
                <p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.TotalDeaths}</span>اجمالي عدد الوفيات</p>
                <p class="col-lg-4 col-md-6 col-sm-12 mb-5 "><span>${d.TTotalCases}</span>اجمالي عدد المصابين</p>
                <p class="col-lg-4 col-md-6 col-sm-12 mb-5"><span>${d.TotalTests}</span>اجمالي عدد الاختبارات</p> `
            myDiv.innerHTML = newData
        })
    })






