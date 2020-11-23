// job application software

alert('Welcome to the screening process for the position of "Software Developer, Frontend" for Lightspeed POS!');
alert('Please answer the following questions!')

let myAnswer1= prompt('Do you have strong software development skills in JavaScript, TypeScript?');
let myAnswer2= prompt('Are you on the path to reach In-depth knowledge of at least one frameworks such as React, Node.js, Next.js, Vue.js');
let myAnswer3= prompt('Do you have experience with testing tools like Jest and/or Cypress?');
let myAnswer4= prompt('Do you have good conceptual understanding of software design and code beauty?');
let myAnswer5= prompt('Do you have excellent communication skills?');

let myAnswer6= prompt('Do you have computer Sciences degree or equivalent?');
let myAnswer7= prompt('Do you have experience writing automated unit and functional tests');
let myAnswer8= prompt('Do you have experience working in an Agile development environment');
let myAnswer9= prompt('Do you have experience working with containerized applications deployed with Kubernetes, Docker');
let myAnswer10= prompt('Do you have experience with design systems build upon emotion and styled-components');
let myAnswer11= prompt('Do you know the ins and outs of Graphql');

let myCond1 = 'yes';
let myCond2 = 'yes';
let myCond3 = 'yes';
let myCond4 = 'yes';
let myCond5 = 'yes';
let myCond6 = 'yes';
let myCond7 = 'yes';
let myCond8 = 'yes';
let myCond9 = 'yes';
let myCond10 = 'yes';
let myCond11 = 'yes';

let mustHave = (myAnswer1 == myCond1 && myAnswer2 == myCond2 && myAnswer3 == myCond3 && myAnswer4 == myCond4 && myAnswer5 == myCond5);

let notMustHave = (myAnswer6 == myCond6 || myAnswer7 == myCond7 || myAnswer8 == myCond8 || myAnswer9 == myCond9 || myAnswer10 == myCond10 || myAnswer11 == myCond11);

if (mustHave == true && notMustHave==true) {
    alert('We are happy to have an interview with you!');
}
else if  (mustHave == true && notMustHave==false) {
    alert("Hmm OK... Let's have interview and see what you know!");
}
else {
    alert("Sorry, next time maybe!");
}






