
function getResult() {
    let hm, cm, jm, bm, tot, avg, grd;	//local decalration
    hm = +html.value;		//data collection
    cm = +css.value;
    jm = +js.value;
    bm = +bs.value;
    tot = hm + cm + jm + bm;		//calculation
    avg = tot / 4;
    //grade finding
    if (hm > 39 && cm > 39 && jm > 39 && bm > 39) {
        //"pass condition"
        if (avg >= 90 && avg <= 100)
            grd = "A+";
        else if (avg >= 80 && avg <= 89)
            grd = "A";
        else if (avg >= 70 && avg <= 79)
            grd = "B+";
        else if (avg >= 60 && avg <= 69)
            grd = "B";
        else if (avg >= 50 && avg <= 59)
            grd = "C";
        else
            grd = "D"
    } else {
        grd = "Fail";
    }
    //displaying opreator
    total.value = "Total Marks	:" + tot;
    average.value = "Average		:" + avg;
    grade.value = "Grade		:" + grd;
}