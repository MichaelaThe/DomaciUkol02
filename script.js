/* Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.
*/

const kusy = Number(prompt("Zadejte počet kusů"))


if(kusy < 50) {
    const celkovaCena = kusy * 300
    document.body.innerHTML = `<p> Konečná cena je: ${celkovaCena}Kč </p>`
} else if(kusy >= 50 && kusy < 200) {
     const celkovaCena2 = kusy * 250
     document.body.innerHTML = `<p> Konečná cena je: ${celkovaCena2}Kč </p>`
} else if(kusy >= 200 && kusy < 500) {
    const celkovaCena3 = kusy * 200
    document.body.innerHTML = `<p> Konečná cena je: ${celkovaCena3}Kč </p>`
} else if(kusy >= 500 && kusy < 1000) {
    const celkovaCena4 = kusy * 150
    document.body.innerHTML = `<p> Konečná cena je: ${celkovaCena4}Kč </p>` 
} else if(kusy >= 1000) {
    const celkovaCena5 = kusy * 120
    document.body.innerHTML = `<p> Konečná cena je: ${celkovaCena5}Kč </p>`
} 