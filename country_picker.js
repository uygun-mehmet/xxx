const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands ",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands ",
    "Colombia",
    "Comoros ",
    "The Democratic Republic of the Congo",
    "Congo ",
    "Cook Islands ",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti", "Dominica",
    "Dominican Republic ",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands ",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories ",
    "Gabon",
    "Gambia ",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See ",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands ",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia ",
    "Moldova ",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Republic of Artsakh",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, ",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkish Republic of Northern Cyprus",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "(Free) Ukraine",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United States Minor Outlying Islands",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];
const flags = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Afghanistan_%28Colored_Emblem%29.svg/2560px-Flag_of_Afghanistan_%28Colored_Emblem%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Albanian_Provisional_Government_%281912-1914%29.svg/2560px-Flag_of_Albanian_Provisional_Government_%281912-1914%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_American_Samoa.svg/1200px-Flag_of_American_Samoa.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/243px-Flag_of_Andorra.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/255px-Flag_of_Angola.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/True_South_Antarctic_Flag.svg/1200px-True_South_Antarctic_Flag.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/800px-Flag_of_Antigua_and_Barbuda.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2000px-Flag_of_Argentina.svg.png",
    "https://www.worldatlas.com/img/flag/am-flag.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/1200px-Flag_of_Aruba.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/255px-Flag_of_Austria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    "https://cdn.britannica.com/06/5106-004-B8EE9FD3/Flag-of-The-Bahamas.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Bahrain_%28bordered%29.svg/1280px-Flag_of_Bahrain_%28bordered%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Bangladesh_%283-2%29.svg/1200px-Flag_of_Bangladesh_%283-2%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/2560px-Flag_of_Barbados.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/255px-Flag_of_Belarus.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/800px-Flag_of_Belgium_%28civil%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
    "https://cdn.britannica.com/37/5037-004-E474738C/Flag-Benin.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/2560px-Flag_of_Bermuda.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1280px-Flag_of_Bhutan.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bandera_de_Bolivia_%28Estado%29.svg/1200px-Bandera_de_Bolivia_%28Estado%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Bonaire.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/255px-Flag_of_Botswana.svg.png",
    "https://flagpedia.net/data/flags/w580/bv.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg/255px-Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/2560px-Flag_of_Brunei.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/1200px-Flag_of_Burkina_Faso.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
    "https://cdn.britannica.com/44/5044-050-2530FC16/Flag-Cabo-Verde.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/2560px-Flag_of_Cameroon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/255px-Flag_of_the_Central_African_Republic.svg.png",
    "https://cdn.britannica.com/46/5046-004-CA99DA45/Flag-Chad.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/220px-Flag_of_Chile.svg.png",
    "https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Christmas_Island.svg/1200px-Flag_of_Christmas_Island.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg/1200px-Flag_of_the_Cocos_%28Keeling%29_Islands.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/255px-Flag_of_the_Comoros.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/2560px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/1200px-Flag_of_the_Cook_Islands.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/255px-Flag_of_Costa_Rica_%28state%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2560px-Flag_of_Croatia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Cura%C3%A7ao.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/2560px-Flag_of_Cyprus.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/255px-Flag_of_the_Czech_Republic.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/1200px-Flag_of_Djibouti.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/255px-Flag_of_Dominica.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1200px-Flag_of_the_Dominican_Republic.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/2560px-Flag_of_Ecuador.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1200px-Flag_of_Equatorial_Guinea.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1280px-Flag_of_Eritrea.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/255px-Flag_of_Estonia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/255px-Flag_of_Eswatini.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/2560px-Flag_of_Ethiopia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Falkland_Islands.svg/1200px-Flag_of_the_Falkland_Islands.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/255px-Flag_of_Fiji.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_French_Guiana.svg/1280px-Flag_of_French_Guiana.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/1200px-Flag_of_French_Polynesia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg/1200px-Flag_of_the_French_Southern_and_Antarctic_Lands.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1200px-Flag_of_Gabon.svg.png",
    "https://cdn.britannica.com/52/5052-004-C6FC398B/Flag-of-The-Gambia.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/255px-Flag_of_Ghana.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png",
    "https://www.worldatlas.com/img/flag/gl-flag.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_Guadeloupe_%28local%29_variant.svg/1280px-Flag_of_Guadeloupe_%28local%29_variant.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/1200px-Flag_of_Guam.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Guernsey.svg/1200px-Flag_of_Guernsey.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
    "https://flagpedia.net/data/flags/w580/hm.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/255px-Flag_of_Honduras.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/800px-Flag_of_Hong_Kong.svg.png",
    "https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Iceland_%281918%E2%80%931944%29.svg/200px-Flag_of_Iceland_%281918%E2%80%931944%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/255px-Flag_of_Iran.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/255px-Flag_of_Iraq.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/255px-Flag_of_Ireland.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_the_Isle_of_Mann.svg/255px-Flag_of_the_Isle_of_Mann.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/234px-Flag_of_Israel.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jersey.svg/800px-Flag_of_Jersey.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1200px-Flag_of_Jordan.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/255px-Flag_of_Kazakhstan.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/800px-Flag_of_Kenya.svg.png",
    "https://cdn.britannica.com/88/3288-050-DB8EB516/Flag-Kiribati.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/255px-Flag_of_North_Korea.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1200px-Flag_of_Kuwait.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/255px-Flag_of_Kyrgyzstan.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1200px-Flag_of_Laos.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
    "https://www.prntr.com/images/lebanon-flag-1.gif",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/255px-Flag_of_Lesotho.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1200px-Flag_of_Libya.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/640px-Flag_of_Liechtenstein.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/640px-Flag_of_Lithuania.svg.png",
    "https://cdn.britannica.com/23/2223-004-AE86DC5A/Flag-Luxembourg.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/255px-Flag_of_Madagascar.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1200px-Flag_of_Malawi.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/800px-Flag_of_Maldives.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/255px-Flag_of_Mali.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/255px-Flag_of_Malta.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/1200px-Flag_of_the_Marshall_Islands.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Snake_Flag_of_Martinique.svg/220px-Snake_Flag_of_Martinique.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1280px-Flag_of_Mauritius.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_Arms_of_Mayotte.svg/220px-Coat_of_Arms_of_Mayotte.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1200px-Flag_of_the_Federated_States_of_Micronesia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/2560px-Flag_of_Moldova.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1200px-Flag_of_Monaco.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1200px-Flag_of_Mongolia.svg.png",
    "https://www.worldatlas.com/r/w1200/img/flag/me-flag.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg",
    "https://www.worldatlas.com/img/flag/ma-flag.jpg",
    "https://cdn.britannica.com/23/4223-004-76407A84/Flag-Mozambique.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/220px-Flag_of_Myanmar.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/1200px-Flag_of_Namibia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
    "https://cdn.britannica.com/70/2970-050-796F522C/Flag-Nepal.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/255px-Flag_of_the_Netherlands.svg.png",
    "https://www.flagsonline.it/uploads/2019-11-13/1200-0/Nouvelle-caledonie_Drapeau_Flag_Bandiera.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/640px-Flag_of_New_Zealand.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/800px-Flag_of_Nicaragua.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/2389px-Flag_of_Niger.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/2560px-Flag_of_Nigeria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/1200px-Flag_of_Niue.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Norfolk_Island.svg/1200px-Flag_of_Norfolk_Island.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_the_Northern_Mariana_Islands.svg/1200px-Flag_of_the_Northern_Mariana_Islands.svg.png",
    "https://cdn.britannica.com/01/3101-004-506325BB/Flag-Norway.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1200px-Flag_of_Oman.svg.png",
    "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1200px-Flag_of_Palau.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/2560px-Flag_of_Palestine.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1200px-Flag_of_Panama.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/1200px-Flag_of_Papua_New_Guinea.svg.png",
    "https://www.worldatlas.com/img/flag/py-flag.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Peru_%281825%E2%80%931884%29.svg/220px-Flag_of_Peru_%281825%E2%80%931884%29.svg.png",
    "https://www.worldatlas.com/img/flag/ph-flag.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_the_Pitcairn_Islands.svg/1200px-Flag_of_the_Pitcairn_Islands.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/2560px-Flag_of_Qatar.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/255px-Flag_of_North_Macedonia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_Artsakh.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29.svg/400px-Proposed_flag_of_R%C3%A9union_%28VAR%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Flag_of_Saint_Barthelemy.svg/800px-Flag_of_Saint_Barthelemy.svg.png",
    "http://3.bp.blogspot.com/-FXw94fti8JM/UWxZVoXwaOI/AAAAAAAABOU/1N98f_M2Gg0/w1200-h630-p-k-no-nu/St+Helena+Ascension+and+Tristan+da+Cunha.bmp",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/800px-Flag_of_Saint_Kitts_and_Nevis.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
    "https://www.crwflags.com/fotw/images/m/mf!1.gif",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg/2560px-Flag_of_Saint-Pierre_and_Miquelon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/227px-Flag_of_San_Marino.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/640px-Flag_of_Saudi_Arabia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/2560px-Flag_of_Senegal.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1200px-Flag_of_Serbia.svg.png",
    "https://cdn.britannica.com/93/4093-004-A9F95AC3/Flag-Seychelles.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1280px-Flag_of_Sierra_Leone.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/500px-Flag_of_Sint_Maarten.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/640px-Flag_of_Slovakia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/255px-Flag_of_Slovenia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1200px-Flag_of_Somalia.svg.png",
    "https://media.istockphoto.com/photos/south-african-flag-picture-id462515999?b=1&k=20&m=462515999&s=170667a&w=0&h=epva_khMQSXgQZKJioLXGLyxlvNkBvi6eOtVhGMS8kc=",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg/1200px-Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png",
    "data:image/png;base64,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",
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png",
    "https://cdn.britannica.com/96/4496-004-278A6211/Flag-Sudan.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/255px-Flag_of_Suriname.svg.png",
    "https://flagpedia.net/data/flags/w1160/sj.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/170px-Flag_of_Switzerland.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1200px-Flag_of_Syria.svg.png",
    "https://cdn.britannica.com/62/4562-004-C04E54C5/Flag-Taiwan.jpg",
    "https://www.worldatlas.com/img/flag/tj-flag.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/640px-Flag_of_Tanzania.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/640px-Flag_of_East_Timor.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/1200px-Flag_of_Togo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokelau.svg/1200px-Flag_of_Tokelau.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/2560px-Flag_of_Tonga.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/2560px-Flag_of_Trinidad_and_Tobago.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/225px-Flag_of_Tunisia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/220px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1200px-Flag_of_Tuvalu.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1280px-Flag_of_Uganda.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Ukraine_%28pantone_colors%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    "https://static.wikia.nocookie.net/vexillology/images/7/74/Flag_of_jarvis_island.svg/revision/latest/scale-to-width-down/1200?cb=20211129093053",
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/2560px-Flag_of_Uruguay.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1000px-Flag_of_Uzbekistan.svg.png",
    "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/vularge.gif",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Venezuela_%281930%E2%80%932006%29.svg/220px-Flag_of_Venezuela_%281930%E2%80%932006%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/255px-Flag_of_the_United_States_Virgin_Islands.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Wallis_and_Futuna.svg/1280px-Flag_of_Wallis_and_Futuna.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/800px-Flag_of_Yemen.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/800px-Flag_of_Zambia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1200px-Flag_of_Zimbabwe.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/255px-Flag_of_%C3%85land.svg.png",


];

function randomCountry() {
    var randNum = Math.random()
    const getRandomNumber = (max) => Math.floor(randNum * max);
    // function random(max) {
    //     return Math.floor(Math.random() * max);
    // }

    const getRandomCountry = () =>
        // `${countryList[Math.floor(Math.random() * countryList.length)]}`;
        `${countryList[getRandomNumber(countryList.length)]}`;

    const getRandomFlag = () =>
        `${flags[getRandomNumber(countryList.length)]}`;


    const setRandomCountry = () => {
        document.getElementById('country-name').innerText = getRandomCountry();
        document.getElementById('flag').src = getRandomFlag();

        // document.getElementById('random_button').style.display = 'none';

        document.getElementById('random_button').innerText = "Give me another!"
        document.getElementById('refresh_button').style.display = 'inline'
        document.getElementById('info_button').style.display = 'inline'
        document.getElementById('google_search').style.display = 'inline'





        document.getElementById('google_search').href = "https://www.google.com/search?q=" + getRandomCountry();
        document.getElementById('info_button').href = "https://www.wikipedia.org/wiki/" + getRandomCountry();
    }


    // document.getElementById('random_button')
    // addEventListener('click', setRandomCountry);

    setRandomCountry();


}


