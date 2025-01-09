const weaponSelect = document.querySelector("#weapon");
const attackInput = document.querySelector("#attackInput");
const sharpnessInput = document.querySelector("#sharpness");
const btnCalculate = document.querySelector("#calculate");

btnCalculate.addEventListener("click", calculateDamage);

function calculateDamage() {
    const weaponChoice = weaponSelect.value;
    const sharpness = sharpnessInput.value;
    const attackValue = attackInput.value;
    
    wpnDamMultplr = 0.00;
    dmgTp = "";
    comboMvMltplr = 0.00;
    comboMvName = "";
    shrpnMltplr = 0.00;
    monsterPartMltplr = 0.00;

    switch (weaponChoice) {
        case "bow":
            wpnDamMultplr = 1.2;
            dmgTp = "ammo";
            comboMvMltplr = 0.07;
            comboMvName = "Rapid Shot 1";
            break;
        case "chargeBlade":
            wpnDamMultplr = 3.6;
            dmgTp = "cut";
            comboMvMltplr = 0.13;
            comboMvName = "Charged Slash";
            break;
        case "dualBlades":
            wpnDamMultplr = 1.4;
            dmgTp = "cut";
            comboMvMltplr = 0.11;
            comboMvName = "Demon Fangs";
            break;
        case "greatSword":
            wpnDamMultplr = 4.8;
            dmgTp = "cut";
            comboMvMltplr = 0.26;
            comboMvName = "Wide Slash";
            break;
        case "gunlance":
            wpnDamMultplr = 2.3;
            dmgTp = "cut";
            comboMvMltplr = 0.24;
            comboMvName = "Lateral Thrust";
            break;
        case "hammer":
            wpnDamMultplr = 5.2;
            dmgTp = "blunt";
            comboMvMltplr = 0.28;
            comboMvName = "Big Bang";
            break;
        case "heavyBowgun":
            wpnDamMultplr = 1.5;
            dmgTp = "ammo";
            comboMvMltplr = 0.10;
            comboMvName = "Normal Ammo";
            break;
        case "huntingHorn":
            wpnDamMultplr = 4.2;
            dmgTp = "blunt";
            comboMvMltplr = 0.27;
            comboMvName = "Note 2 Attack";
            break;
        case "insectGlaive":
            wpnDamMultplr = 3.1;
            dmgTp = "cut";
            comboMvMltplr = 0.22;
            comboMvName = "Wide Sweep";
            break;
        case "lance":
            wpnDamMultplr = 2.3;
            dmgTp = "cut";
            comboMvMltplr = 0.22;
            comboMvName = "High Thrust I";
            break;
        case "lightBowgun":
            wpnDamMultplr = 1.3;
            dmgTp = "ammo";
            comboMvMltplr = 0.10;
            comboMvName = "Normal Ammo";
            break;
        case "longSword":
            wpnDamMultplr = 3.3;
            dmgTp = "cut";
            comboMvMltplr = 0.24;
            comboMvName = "Step Slash";
            break;
        case "switchAxe":
            wpnDamMultplr = 3.5;
            dmgTp = "cut";
            comboMvMltplr = 0.21;
            comboMvName = "Wild Swing"
            break;
        case "swordAndShield":
            wpnDamMultplr = 1.4;
            dmgTp = "cut";
            comboMvMltplr = 0.22;
            comboMvName = "Lateral Slash";
            break;    
    }

    switch (sharpness) {
        case "shrpRed":
            shrpnMltplr = 0.50;
            break;
        case "shrpOrange":
            shrpnMltplr = 0.75;
            break;
        case "shrpYellow":
            shrpnMltplr = 1.00;
            break;
        case "shrpGreen":
            shrpnMltplr = 1.05;
            break;
        case "shrpBlue":
            shrpnMltplr = 1.20;
            break;
        case "shrpWhite":
            shrpnMltplr = 1.32;
            break;
        case "shrpPurple":
            shrpnMltplr = 1.39;
            break;
    }

    const rawBase = attackValue / wpnDamMultplr;

    switch (dmgTp) {
        case "ammo":
            monsterPartMltplr = 0.75;
            break;
        case "cut":
            monsterPartMltplr = 0.80;
            break;
        case "blunt":
            monsterPartMltplr = 0.85;
            break;
    }

    const damage = rawBase * shrpnMltplr * comboMvMltplr * monsterPartMltplr;
    const output = "Damage with " + weaponChoice + " against Great Jagras head is " + damage;
    console.log(output);
}