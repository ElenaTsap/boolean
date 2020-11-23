// CONDITIONS
let germanLevel;
let germanA2 = 'a2';
let germanB1 = 'b1';
let germanB2 = 'b2';
let germanC1 = 'c1';

let married;
let marriedCond = 'yes';

let validPermit;
let validPermitCond = 'yes';

let working;
let workingCond = 'yes';

let yearsGermany;

let cover70;
let cover70Cond = 'yes';

let yearsWorking;

alert('Welcome to the Permanent Resident Application Portal!');
alert('Please answer a few questions so that we can guide you accordingly.');

// USER INPUTS

// german question
germanLevel = prompt("What is your german language level?").toLowerCase();
console.log(germanLevel);

if (germanLevel !== germanA2 && germanLevel !== germanB1 && germanLevel !== germanB2 && germanLevel !== germanC1) {
    alert ('Unfortunately you are not eligible for Visa. You need a german level of at least A2 in order to proceed');
} else {
    // marriage question
    married = prompt ("Are you currently married to an EU citizen for more than 3 years?").toLowerCase();

    if ((marriedCond == married) && (germanLevel == germanB1 || germanLevel == germanB2 || germanLevel == germanC1)) {
    alert('You are eligible for a Marriage Visa');
    } else {
        // work question
        working = prompt ("Are you currently working?").toLowerCase();

        if (working !== workingCond) {
        alert('Unfortunately you are not eligible for a visa. You need to be currently employed in order to proceed.');
        } else { 
            // you are working and have language level more than A2
            validPermit = prompt ("Do you have a valid Residence Permit?").toLowerCase();

            // here enter people that do not have valid permit residence
            if (validPermit !== validPermitCond) {
            cover70 = prompt('Are you able to cover 70% of your living costs?').toLowerCase();
                if (cover70 !== cover70Cond) {
                alert ('Unfortunately you are not eligible. You need to be able to cover 70% of your living costs in order to proceed.');
                } else { 
                    // years in Germany question
                    yearsGermany = prompt ('How many years do you live in Germany?');
                    if ((yearsGermany >=3 && yearsGermany < 5 && germanLevel == germanC1) || (yearsGermany >=5 && (germanLevel == germanB2 || germanLevel == germanC1))) {
                    alert('Congrats you are eligible for an Asylum visa!');
                    } else {
                    alert ('Unfortunately you are not eligible. You need to live in Germany for more than 3 years in order to proceed.');
                    }
                }
            }

            // here enter people that have a valid permit residence
            if (validPermit == validPermitCond) {
                yearsGermany = prompt ('How many years do you live in Germany?');
                yearsWorking = prompt('For how many years are you working in Germany?');
                if (((yearsGermany>=2 && yearsGermany<3) && (germanLevel == germanB1 || germanLevel == germanB2 || germanLevel == germanC1)) || (yearsGermany >= 3 && yearsWorking < 3)) {
                    alert('You are eligible for the Blue Card!');
                }
                else if (yearsWorking >= 3 && yearsGermany >=5 && (germanLevel == germanB1 || germanLevel == germanB2 || germanLevel == germanC1)) {
                    alert ('You are eligible for a Work Visa!')
                } else {
                        alert ('Unfortunately you are not eligible :(');
                }
            }
        }
    }
}
