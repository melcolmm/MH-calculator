const weaponSelect = document.querySelector("#weapon");
const damageInput = document.querySelector("#attackInput");
const sharpnessInput = document.querySelector("#sharpness");
const btnCalculate = document.querySelector("#calculate");

btnCalculate.addEventListener("click", calculateDamage);

function calculateDamage() {
    const weaponChoice = weaponSelect.value;
    console.log(weaponChoice);
    const rawDamage = 0.00;
    const wpnDamMultplr = 0.00;
    const dmgTp = "";
    const comboMvMltplr = 0.00;
    const comboMvName = "";

    switch (weaponChoice) {
        case "bow":
            wpnDamMultplr = 1.2;
            dmgTp = "shot";
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
            break;
        case "hammer":
            wpnDamMultplr = 5.2;
            dmgTp = "blunt";
            comboMvMltplr = 0.28;
            comboMvName = "Big Bang";
            break;
        case "heavyBowgun":
            wpnDamMultplr = 1.5;
            dmgTp = "shot";
            break;
        case "huntingHorn":
            wpnDamMultplr = 4.2;
            dmgTp = "blunt";
            comboMvMltplr = 0.27;
            comboMvName = "Note 2 Attack";
            break;
        case "insectGlaive":
            wpnDamMultplr = 3.1;
            dmgTp = "slash";
            comboMvMltplr = 0.22;
            comboMvName = "Wide Sweep";
            break;
        case "lance":
            wpnDamMultplr = 2.3;
            dmgTp = "cut";
            break;
        case "lightBowgun":
            wpnDamMultplr = 1.3;
            dmgTp = "shot";
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
            break;    
    }
}