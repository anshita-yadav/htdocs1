function getAmount() {
    let p, t, r, si, tamt;  //local dec's
    p = pamt.value;		//data coll
    t = time.value;
    r = roi.value;
    si = p * t * r / 100;
    tamt = parseFloat(p) + si;

    //data displaying
    intAmt.value = "Interest Amount " + si;
    totAmt.value = "Total Amount  " + tamt;
}
