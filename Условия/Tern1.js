let aSource = Math.floor(Math.random() * 100);
let a = aSource;

if(a > 10)
    if(a > 5)
        a = 2*a+1
else
    if(2*a > 5)
        a = 2*a + 1;
    else
        if(a < 3)
        {
            if(1 > 4)
                a = 5
            else
                if (a % 2 == 0)
                    a = 6
                else
                    a = 7
        }
        else
        {
            a=2*(a-2)
            if(a > 4)
                a = 5
            else
                if(a % 2 == 0)
                    a = 6
                else
                    a = 7
        }

console.log(a);

a = aSource;

switch (true) {
    case (a > 10 && a > 5):
        a = (2*a) + 1;
        break;

    case (a <= 10 && 2*a > 5):
        a = (2*a) + 1;
        break;

    case (a <= 10 && 2*a <= 5 && a < 3):
        switch (a % 2) {
            case 0:
                a = 6;
                break;
            default:
                a = 7;
                break;
        }
        break;

    case (a <= 10 && 2*a <= 5 && a >= 3 && (2 * (a - 2)) > 4):
        a = 5;
        break;

    case (a <= 10 && 2*a <= 5 && a >= 3 && (2 * (a - 2)) <= 4):
        switch (a % 2) {
            case 0:
                a = 6;
                break;
            default:
                a = 7;
                break;
        }
        break;
}

console.log(a);

a = aSource;

let cond = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

console.log(cond);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()